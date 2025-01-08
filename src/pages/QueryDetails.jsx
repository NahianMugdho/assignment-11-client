import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const QueryDetails = () => {
    const { id } = useParams();  // Get query ID from URL
    const { user } = useContext(AuthContext); // Get logged-in user details
    const [query, setQuery] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [formData, setFormData] = useState({
        recommendationTitle: '',
        recommendedProductName: '',
        recommendedProductImage: '',
        recommendationReason: ''
    });

    // ✅ Fetch query details
    useEffect(() => {
        fetch(`https://prs-server-sigma.vercel.app/product/${id}`)
            .then(res => res.json())
            .then(data => setQuery(data))
            .catch(error => console.error('Error fetching query:', error));
    }, [id]);

    // ✅ Fetch all recommendations for this query
    useEffect(() => {
        console.log("Fetching recommendations for queryId:", id); // Debugging log
        fetch(`https://prs-server-sigma.vercel.app/recommendation?queryId=${id}`)
            .then(res => res.json())
            .then(data =>{
                console.log("Received recommendations:", data);
                setRecommendations(data);
            })
            .catch(error => console.error('Error fetching recommendations:', error));
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const recommendationData = {
            ...formData,
            queryId: id,
            queryTitle: query.queryTitle,
            productName: query.productName,
            userEmail: query.userEmail,
            userName: query.userName,
            recommenderEmail: user?.email || '',
            recommenderName: user?.displayName || '',
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch('https://prs-server-sigma.vercel.app/recommendation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recommendationData),
            });

            const result = await response.json();
            console.log('Recommendation added:', result);
            alert('Recommendation submitted successfully!');

            setRecommendations([...recommendations, recommendationData]);

            setFormData({
                recommendationTitle: '',
                recommendedProductName: '',
                recommendedProductImage: '',
                recommendationReason: ''
            });

        } catch (error) {
            console.error('Error submitting recommendation:', error);
            alert('Failed to submit recommendation.');
        }
    };

    if (!query) return <h2>Loading...</h2>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{query.queryTitle}</h1>
            <p><strong>Product Name:</strong> {query.productName}</p>
            <p><strong>Product Brand:</strong> {query.productBrand}</p>
            <img src={query.productImage} alt={query.productName} className="w-64 my-4" />

            <h3 className="text-xl font-bold mt-6">Submitted by:</h3>
            <div className="flex items-center gap-4">
                <img src={query.userProfileImage} alt={query.userName} className="w-12 h-12 rounded-full" />
                <p>{query.userName} ({query.userEmail})</p>
            </div>

            <h2 className="text-2xl font-bold mt-8">Add a Recommendation</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <input type="text" name="recommendationTitle" placeholder="Recommendation Title" className="input input-bordered w-full" required value={formData.recommendationTitle} onChange={handleChange} />
                <input type="text" name="recommendedProductName" placeholder="Recommended Product Name" className="input input-bordered w-full mt-2" required value={formData.recommendedProductName} onChange={handleChange} />
                <input type="url" name="recommendedProductImage" placeholder="Recommended Product Image URL" className="input input-bordered w-full mt-2" required value={formData.recommendedProductImage} onChange={handleChange} />
                <textarea name="recommendationReason" placeholder="Why do you recommend this product?" className="textarea textarea-bordered w-full mt-2" required value={formData.recommendationReason} onChange={handleChange}></textarea>
                <button type="submit" className="btn btn-primary mt-4">Add Recommendation</button>
            </form>

            <h2 className="text-2xl font-bold mt-8">Recommendations</h2>
            {recommendations.length === 0 ? <p>No recommendations yet.</p> : (
                recommendations.map((rec, index) => (
                    <div key={index} className="border p-4 rounded-lg mt-2">
                        <h3 className="font-bold">{rec.recommendationTitle}</h3>
                        <p><strong>Product:</strong> {rec.recommendedProductName}</p>
                        <p>{rec.recommendationReason}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default QueryDetails;
