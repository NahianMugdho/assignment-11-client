import React, { useEffect, useState } from 'react';
import Card from './Card';

const HotQueries = () => {
    const [prods,setProds]= useState([]);


    useEffect(()=>{
        fetch('http://localhost:3000/product')
        .then(res=>res.json())
        .then(data=>{
            setProds(data);
        })

    },[])
    return (
        <div>
            <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    prods.map(prod =><Card key={prod._id} prod={prod}></Card>)
                }
            </div>
        </div>
    );
};

export default HotQueries;