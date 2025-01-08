import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';


const MyRec = () => {
    const { user } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://prs-server-sigma.vercel.app/recommendation?email=${user.email}`) // ✅ Send user email as query param
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) { // ✅ Ensure we only filter if data is an array
                        setRecommendations(data);
                    } else {
                        console.error('Unexpected response:', data);
                    }
                })
                .catch(error => console.error('Error fetching recommendations:', error));
        }
    }, [user]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">My Recommendations</h1>
            {recommendations.length === 0 ? (
                <p>No recommendations found.</p>
            ) : (
                <ul className="space-y-4">
                    {recommendations.map((rec, index) => (
                        <li key={index} className="p-4 border rounded shadow">
                            <h2 className="text-xl font-semibold">{rec.productName}</h2>
                            <p><strong>Brand:</strong> {rec.productBrand}</p>
                            <p><strong>Query:</strong> {rec.queryTitle}</p>
                            <p><strong>Reason for Boycotting:</strong> {rec.boycottingReason}</p>
                            <img src={rec.productImage} alt={rec.productName} className="w-32 h-32 mt-2" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyRec;
