import React from 'react';
import { Link } from 'react-router-dom';
import HotQueries from './HotQueries';

const Queries = () => {
    return (
        <div >
            <div
  className="hero min-h-screen "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/z7j3q3M/freepik-export-20250108173708l6y5.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"></h1>
     
      <button className="btn btn-outline btn-secondary btn-wide"> <Link to={'addqueries'}>
      Add Queries
      </Link></button>
    </div>
  </div>
</div>
<div className='w-11/12 mx-auto my-2 '><HotQueries></HotQueries> </div>

        </div>
    );
};

export default Queries;