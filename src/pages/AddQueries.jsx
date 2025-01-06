import React from 'react';
import { useParams } from 'react-router-dom';

const AddQueries = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Submit a Product Query</h1>
            <p className="py-6">
              Have a question about a product? Submit your query, and others will help you with
              recommendations.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" >
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
                //   value={formData.productName}
                //   onChange={handleChange}
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
                //   value={formData.productBrand}
                //   onChange={handleChange}
                />
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image URL</span>
                </label>
                <input
                  type="text"
                  name="productImage"
                  placeholder="Enter image URL"
                  className="input input-bordered"
                  required
                //   value={formData.productImage}
                //   onChange={handleChange}
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
                //   value={formData.queryTitle}
                //   onChange={handleChange}
                />
              </div>
  
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