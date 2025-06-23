import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';

const Crud = () => {
    const [records, setRecords] = useState([]);

    // Only show these fields (control your table structure here)
    const displayFields = [
        'id',
        'ProductName',
        'ProductPrice',
        'ProductInfo1',
        'Discount',
        'bestselleritem',
        'trendingitem',
        'category',
        'image',
        'LeftCardImg'
    ];

    useEffect(() => {
        axios.get('http://localhost:3001/cardata')
            .then(res => setRecords(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        console.log("Deleting record with id:", id);
    };

    return (
        <>
            <BreadcrumbFixedTop Title="DASHBOARD" Subtitle="Dashboard" />
            <section className="crud-section">
                <div className="text-end mt-3 mb-4">
                    <Link to="/create" className="btn btn-success">
                        <i className="fas fa-plus-circle"></i> Add a Product
                    </Link>
                </div>

                <div className="dashboard-crud-table">
                    <table className="table table-striped table-hover">
                        <thead className="thead-light">
                            <tr>
                                {displayFields.map((field, index) => (
                                    <th key={index}>{field}</th>
                                ))}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((record, i) => (
                                <tr key={i}>
                                    {displayFields.map((field, j) => (
                                        <td key={j}>
                                            {field === 'image' || field === 'LeftCardImg' ? (
                                                <img
                                                    src={`http://localhost:3001/${record[field]}`}
                                                    alt={field}
                                                    className="img-fluid"
                                                    style={{ maxWidth: '80px' }}
                                                />
                                            ) : (
                                                record[field]
                                            )}
                                        </td>
                                    ))}
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`/update/${record.id}`} className="btn btn-primary me-2">
                                                <i className="fas fa-pencil-alt"></i> Update
                                            </Link>
                                            <button className="btn btn-danger" onClick={() => handleDelete(record.id)}>
                                                <i className="fas fa-trash-alt"></i> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Crud;
