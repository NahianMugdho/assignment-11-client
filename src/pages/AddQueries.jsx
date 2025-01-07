import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const AddQueries = () => {
    const { id } = useParams();
    console.log(id);

    const { user } = useContext(AuthContext); // Get logged-in user details

    const [formData, setFormData] = useState({
        productName: '',
        productBrand: '',
        productImage: '',
        queryTitle: '',
        boycottingReason: '',
        userEmail: user?.email || '',
        userName: user?.displayName || '',
        userProfileImage: user?.photoURL || '',
        timestamp: new Date().toISOString(),
        recommendationCount: 0
    });
 
 useEffect(() => {
  if (user) {
      setFormData((prevData) => ({
          ...prevData,
          userEmail: user.email || '',
          userName: user.displayName || '',
          userProfileImage: user.photoURL || 'https://i.ibb.co.com/BKHLw4F/man-449406-1280.jpg'
      }));
  }
}, [user]); // Run this effect when `user` changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const queryData = { ...formData, timestamp: new Date().toISOString() };

        try {
            const response = await fetch('http://localhost:3000/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(queryData),
            });

            const result = await response.json();
            console.log('Query added successfully:', result);
            alert('Query submitted successfully!');
            
            setFormData({
                productName: '',
                productBrand: '',
                productImage: '',
                queryTitle: '',
                boycottingReason: '',
                userEmail: user?.email || '',
                userName: user?.displayName || '',
                userProfileImage: user?.photoURL || '',
                timestamp: new Date().toISOString(),
                recommendationCount: 0
            });

        } catch (error) {
            console.error('Error submitting query:', error);
            alert('Failed to submit query.');
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Submit a Product Query</h1>
                    <p className="py-6">
                        Have a question about a product? Submit your query, and others will help you with recommendations.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                name="productName"
                                placeholder="Enter product name"
                                className="input input-bordered"
                                required
                                value={formData.productName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <input
                                type="text"
                                name="productBrand"
                                placeholder="Enter product brand"
                                className="input input-bordered"
                                required
                                value={formData.productBrand}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image URL</span>
                            </label>
                            <input
                                type="url"
                                name="productImage"
                                placeholder="Enter image URL"
                                className="input input-bordered"
                                required
                                value={formData.productImage}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Query Title</span>
                            </label>
                            <input
                                type="text"
                                name="queryTitle"
                                placeholder="Enter your question (e.g., 'Is there any better alternative?')"
                                className="input input-bordered"
                                required
                                value={formData.queryTitle}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Boycotting Reason</span>
                            </label>
                            <input
                                type="text"
                                name="boycottingReason"
                                placeholder="Why are you avoiding this product?"
                                className="input input-bordered"
                                required
                                value={formData.boycottingReason}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Hidden fields (user details, timestamp, recommendation count) */}
                        <input type="hidden" name="userEmail" value={formData.userEmail} />
                        <input type="hidden" name="userName" value={formData.userName} />
                        <input type="hidden" name="userProfileImage" value={formData.userProfileImage} />
                        <input type="hidden" name="timestamp" value={formData.timestamp} />
                        <input type="hidden" name="recommendationCount" value={formData.recommendationCount} />

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Submit Query
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddQueries;
