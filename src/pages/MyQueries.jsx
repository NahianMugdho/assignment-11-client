import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const MyQueries = () => {
    const { user } = useContext(AuthContext);
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch('http://localhost:3000/product')
                .then(res => res.json())
                .then(data => {
                    const userQueries = data.filter(query => query.userEmail === user.email);
                    setQueries(userQueries);
                })
                .catch(error => console.error('Error fetching queries:', error));
        }
    }, [user]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">My Posted Queries</h1>
            {queries.length === 0 ? (
                <p>No queries found.</p>
            ) : (
                <ul className="space-y-4">
                    {queries.map((query, index) => (
                        <li key={index} className="p-4 border rounded shadow">
                            <h2 className="text-xl font-semibold">{query.productName}</h2>
                            <p><strong>Description:</strong> {query.boycottingReason}</p>
                            <img src={query.productImage} alt={query.queryTitle} className="w-32 h-32 mt-2" />
                            <p><strong>TimeStamp:</strong> {query.timestamp}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyQueries;
