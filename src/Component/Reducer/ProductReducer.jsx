const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_API_DATA":
            const TrendingItems = action.payload.filter((curElem) => {
                return curElem.trendingitem === "true";
            });

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: TrendingItems,
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };


        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };


        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            };

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            };

        case "SET_ADD_TO_CART_PRODUCT":
            const { product, quantity, totalPrice } = action.payload;
            return {
                ...state,
                isSingleLoading: false,
                carts: [...state.carts, product],
                quantity: quantity,
                totalPrice: totalPrice,
            };


        case "FILTER_BY_CATEGORY":
            const filteredProducts = state.products.filter(
                (product) => product.category === action.payload
            );

            return {
                ...state,
                isLoading: false,
                allproduct: filteredProducts
            };


            case "SET_LOADING":
                return {
                    ...state,
                    isLoading: true,
                };


         


                case "SET_SELLER_LOADING":
                    return {
                        ...state,
                        isLoading: true,
                    };
        
                case "SET_BESTSELLING_DATA":
                    const bestSellerItems = action.payload.filter((curElem) => {
                        return curElem.bestselleritem === "true";
                    });
        
                    return {
                        ...state,
                        isLoading: false,
                        products: action.payload,
                        bestSellingProduct: bestSellerItems,
                    };
        
                case "API_SELLER_ERROR":
                    return {
                        ...state,
                        isLoading: false,
                        isError: true,
                    };
        





        default:
            return state;
    }
};

export default ProductReducer;