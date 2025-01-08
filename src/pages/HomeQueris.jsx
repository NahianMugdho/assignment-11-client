import React, { useEffect, useState } from 'react';
import Card from './Card';

const HomeQueris = () => {
    const [prods,setProds]= useState([]);


    useEffect(()=>{
        fetch('https://prs-server-sigma.vercel.app/product')
        .then(res=>res.json())
        .then(data=>{
            setProds(data);
        })

    },[])
    return (
        <div>
            <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
    prods.slice(0, 6).map(prod => <Card key={prod._id} prod={prod} />)
}
            </div>
        </div>
    );
};

export default HomeQueris;


