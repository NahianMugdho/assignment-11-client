// import React, { useState, useEffect, useContext } from 'react';
// import AuthContext from '../context/AuthContext';

// const MyQueries = () => {
//     const { user } = useContext(AuthContext);
//     const [queries, setQueries] = useState([]);

//     useEffect(() => {
//         if (user?.email) {
//             fetch('https://prs-server-sigma.vercel.app/product')
//                 .then(res => res.json())
//                 .then(data => {
//                     const userQueries = data.filter(query => query.userEmail === user.email);
//                     setQueries(userQueries);
//                 })
//                 .catch(error => console.error('Error fetching queries:', error));
//         }
//     }, [user]);

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-4">My Posted Queries</h1>
//             {queries.length === 0 ? (
//                 <p>No queries found.</p>
//             ) : (
//                 <ul className="space-y-4">
//                     {queries.map((query, index) => (
//                         <li key={index} className="p-4 border rounded shadow">
//                             <h2 className="text-xl font-semibold">{query.productName}</h2>
//                             <p><strong>Description:</strong> {query.boycottingReason}</p>
//                             <img src={query.productImage} alt={query.queryTitle} className="w-32 h-32 mt-2" />
//                             <p><strong>TimeStamp:</strong> {query.timestamp}</p>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default MyQueries;
import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const MyQueries = () => {
    const { user } = useContext(AuthContext);
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch('https://prs-server-sigma.vercel.app/product')
                .then(res => res.json())
                .then(data => {
                    const userQueries = data.filter(query => query.userEmail === user.email);
                    setQueries(userQueries);
                })
                .catch(error => console.error('Error fetching queries:', error));
        }
    }, [user]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this query?")) {
            fetch(`https://prs-server-sigma.vercel.app/product/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(() => {
                setQueries(prevQueries => prevQueries.filter(query => query._id !== id));
            })
            .catch(error => console.error('Error deleting query:', error));
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">My Posted Queries</h1>
            {queries.length === 0 ? (
                <p>No queries found.</p>
            ) : (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Product Name</th>
                            <th className="border p-2">Description</th>
                            <th className="border p-2">Image</th>
                            <th className="border p-2">Timestamp</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queries.map(query => (
                            <tr key={query._id} className="text-center">
                                <td className="border p-2">{query.productName}</td>
                                <td className="border p-2">{query.boycottingReason}</td>
                                <td className="border p-2">
                                    <img src={query.productImage} alt={query.productName} className="w-16 h-16 mx-auto" />
                                </td>
                                {/* <td className="border p-2">{query.timestamp}</td> */}
                                <td className="border p-2">
    {new Date(query.timestamp).toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka', // ✅ Converts to BD Time (BST)
        year: 'numeric',
        month: 'short',  // ✅ "Jan", "Feb", etc.
        day: '2-digit',   // ✅ "07", "15", etc.
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,     // ✅ 12-hour format with AM/PM
    }).replace(',', ' -')} {/* ✅ Replaces comma with a dash for better readability */}
</td>
                                <td className="border p-2">
                                    <button 
                                        onClick={() => handleDelete(query._id)} 
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyQueries;

