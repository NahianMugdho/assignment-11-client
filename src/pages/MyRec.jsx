// import React, { useState, useEffect, useContext } from 'react';
// import AuthContext from '../context/AuthContext';


// const MyRec = () => {
//     const { user } = useContext(AuthContext);
//     const [recommendations, setRecommendations] = useState([]);

//     useEffect(() => {
//         if (user?.email) {
//             fetch(`https://prs-server-sigma.vercel.app/recommendation?email=${user.email}`) // ✅ Send user email as query param
//                 .then(res => res.json())
//                 .then(data => {
//                     if (Array.isArray(data)) { // ✅ Ensure we only filter if data is an array
//                         setRecommendations(data);
//                     } else {
//                         console.error('Unexpected response:', data);
//                     }
//                 })
//                 .catch(error => console.error('Error fetching recommendations:', error));
//         }
//     }, [user]);

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-4">My Recommendations</h1>
//             {recommendations.length === 0 ? (
//                 <p>No recommendations found.</p>
//             ) : (
//                 <ul className="space-y-4">
//                     {recommendations.map((rec, index) => (
//                         <li key={index} className="p-4 border rounded shadow">
//                             <h2 className="text-xl font-semibold">{rec.productName}</h2>
//                             <p><strong>Brand:</strong> {rec.productBrand}</p>
//                             <p><strong>Query:</strong> {rec.queryTitle}</p>
//                             <p><strong>Recommendation:</strong> {rec.recommendationReason}</p>
//                             <img src={rec.recommendedProductImage} alt={rec.productName} className="w-32 h-32 mt-2" />
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default MyRec;
import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const MyRec = () => {
    const { user } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://prs-server-sigma.vercel.app/recommendation?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
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
            <h1 className="text-3xl font-bold mb-4 text-center">My Recommendations</h1>

            {recommendations.length === 0 ? (
                <p className="text-center text-gray-600">No recommendations found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
                        <thead className="bg-gray-200">
                            <tr className="text-left">
                                <th className="border p-2">#</th>
                                <th className="border p-2">Product Name</th>
                                <th className="border p-2">Time</th>
                                <th className="border p-2">Query</th>
                                <th className="border p-2">Recommendation</th>
                                <th className="border p-2">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recommendations.map((rec, index) => (
                                <tr key={index} className="border hover:bg-gray-100">
                                    <td className="border p-2 text-center">{index + 1}</td>
                                    <td className="border p-2">{rec.productName}</td>
                                    <td className="border p-2">
    {new Date(rec.timestamp).toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka', // ✅ Converts to BD Time (BST)
        year: 'numeric',
        month: 'short',  // ✅ "Jan", "Feb", etc.
        day: '2-digit',   // ✅ "07", "15", etc.
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,     // ✅ 12-hour format with AM/PM
    }).replace(',', ' -')} {/* ✅ Replaces comma with a dash for better readability */}
</td>
                                    <td className="border p-2">{rec.queryTitle}</td>
                                    <td className="border p-2">{rec.recommendationReason}</td>
                                    <td className="border p-2 flex justify-center">
                                        <img src={rec.recommendedProductImage} alt={rec.productName} className="w-16 h-16 object-cover rounded" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyRec;

