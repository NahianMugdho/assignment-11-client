import React, { useEffect, useState } from 'react';
import Card from './Card';
import { FaBolt } from "react-icons/fa6";
const HotQueries = () => {
    const [prods,setProds]= useState([]);
    const [searchText, setSearchText] = useState('');
     // Filter products based on search input
     const filteredProds = prods.filter(prod =>
        prod.productName.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(()=>{
        fetch('https://prs-server-sigma.vercel.app/product')
        .then(res=>res.json())
        .then(data=>{
            setProds(data);
        })

    },[])
    return (
        <div>
              <div className="flex items-center border rounded-lg px-3 py-2 mb-5 w-full md:w-1/2 mx-auto">
                <input
                    type="text"
                    placeholder="Search by Product Name"
                    className="input input-bordered flex-1 outline-none"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <FaBolt className="text-yellow-500 text-xl" />
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
          
                {/* {
                    prods.map(prod =><Card key={prod._id} prod={prod}></Card>)
                } */}
                {filteredProds.length > 0 ? (
                    filteredProds.map(prod => <Card key={prod._id} prod={prod} />)
                ) : (
                    <p className="text-center text-gray-500 col-span-3">
                        No matching products found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default HotQueries;