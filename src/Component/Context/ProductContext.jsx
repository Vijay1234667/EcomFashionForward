import axios from "axios";
import reducer from "../Reducer/ProductReducer";
import { useState } from "react";
import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();
const API = "/db.json";
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    allproduct: [],
    carts: [],
    featureProducts: [],
    bestSellingProduct: [],
    isSingleLoading: false,
    singleProduct: {},
};


const AppProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(1);
    const [carts, setCarts] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProduct = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    const getBestSellingProduct = async (url) => {
        dispatch({ type: "SET_SELLER_LOADING" });
        try {
            const res = await axios.get(url);
            const bestSellingProduct = await res.data;
            dispatch({ type: "SET_BESTSELLING_DATA", payload: bestSellingProduct });
        } catch (error) {
            dispatch({ type: "API_SELLER_ERROR" });
        }
    };

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    };

    const handleCart = (singleProduct, quantity, totalPrice) => {
        dispatch({ type: "SET_ADD_TO_CART_PRODUCT", payload: { product: singleProduct[0], quantity, totalPrice } });
    }


    const handleCategoryFilter = (Category) => {
        dispatch({ type: 'FILTER_BY_CATEGORY', payload: Category });
    };

    useEffect(() => {
        const storedCarts = JSON.parse(localStorage.getItem('carts')) || [];
        console.log(storedCarts)
        setCarts(storedCarts);

        const storedTotalPrice = storedCarts.reduce((acc, curr) => acc + (curr.quantity * curr.ProductPrice), 0);
        const storedTotalItems = storedCarts.reduce((acc, curr) => acc + curr.quantity, 0);

        setTotalPrice(storedTotalPrice);
        setTotalItems(storedTotalItems);
    }, []);

    const handleRemoveItem = (index) => {
        const updatedCarts = carts.filter((_, i) => i !== index);
        const removedItemQuantity = carts[index].quantity;

        setCarts(updatedCarts);
        localStorage.setItem('carts', JSON.stringify(updatedCarts));

        const newTotalPrice = updatedCarts.reduce((acc, curr) => acc + (curr.quantity * curr.ProductPrice), 0);
        const newTotalItems = updatedCarts.reduce((acc, curr) => acc + curr.quantity, 0);

        setTotalPrice(newTotalPrice);
        setTotalItems(prevItems => prevItems - removedItemQuantity);
    };

    const handleDecrement = (index) => {
        const updatedCarts = [...carts];
        if (updatedCarts[index].quantity > 1) {
            updatedCarts[index].quantity -= 1;
            setCarts(updatedCarts);
            localStorage.setItem('carts', JSON.stringify(updatedCarts));
            setTotalPrice(prevPrice => prevPrice - updatedCarts[index].ProductPrice);
            setTotalItems(prevItems => prevItems - 1);
        }
    };

    const handleIncrement = (index) => {
        const updatedCarts = [...carts];
        updatedCarts[index].quantity += 1;
        setCarts(updatedCarts);
        localStorage.setItem('carts', JSON.stringify(updatedCarts));
        setTotalPrice(prevPrice => prevPrice + updatedCarts[index].ProductPrice);
        setTotalItems(prevItems => prevItems + 1);
    };

    let base_url = process.env.REACT_APP_BASE_URL;
    let public_url = process.env.PUBLIC_URL;

    useEffect(() => {
        getProduct(API);
    }, []);

    useEffect(() => {
        getBestSellingProduct(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct, handleCart, handleCategoryFilter, setCarts, carts, handleRemoveItem, totalItems, quantity, setTotalItems, setTotalPrice, totalPrice, handleDecrement, handleIncrement, base_url, public_url }}>
            {children}
        </AppContext.Provider>
    );
};

const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };