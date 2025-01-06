import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({prod}) => {
    const {productName,productImage,queryTitle,userName} = prod
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src = {productImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">

    <h2 className="card-title">{productName}</h2>
    <h3><i>{queryTitle}</i></h3>
    <p>submitted by: {userName}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to='queries'>Go to Queries</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;