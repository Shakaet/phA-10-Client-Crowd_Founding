import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCampaign = () => {
  const data = useLoaderData();
  const [campaigns, setCampaigns] = useState(data);

  const handleSortByMinDonation = () => {
    const sortedCampaigns = [...campaigns].sort((a, b) => a.minDonation - b.minDonation);
    setCampaigns(sortedCampaigns);
  };

  return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-center text-blue-600">
//             All Campaigns
//           </h2>
//           <button
//             onClick={handleSortByMinDonation}
//             className="mt-4 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
//           >
//             Sort by Minimum Donation
//           </button>
//         </div>

//         {/* Table for displaying campaigns */}
//         {/* <div className="overflow-x-auto">
//           <table className="min-w-full table-auto border-collapse">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b text-left">Title</th>
//                 <th className="py-2 px-4 border-b text-left">Type</th>
//                 <th className="py-2 px-4 border-b text-left">Description</th>
//                 <th className="py-2 px-4 border-b text-left">Min Donation</th>
//                 <th className="py-2 px-4 border-b text-left">Deadline</th>
//                 <th className="py-2 px-4 border-b text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {campaigns.length > 0 ? (
//                 campaigns.map((campaign) => (
//                   <tr key={campaign._id}>
//                     <td className="py-2 px-4 border-b break-words">{campaign.title}</td>
//                     <td className="py-2 px-4 border-b break-words">{campaign.type}</td>
//                     <td className="py-2 px-4 border-b break-words">{campaign.description}</td>
//                     <td className="py-2 px-4 border-b break-words">${campaign.minDonation}</td>
//                     <td className="py-2 px-4 border-b break-words">{campaign.deadline}</td>
//                     <td className="py-2 px-4 border-b">
//                       <Link
//                         to={`/details/${campaign._id}`}
//                         className="text-blue-600 hover:text-blue-800"
//                       >
//                         See More
//                       </Link>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="py-2 px-4 border-b text-center">
//                     No campaigns available
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div> */}

// =

//       </div>
//     </div>
<div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
  <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl p-8">
    {/* Header Section */}
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <h2 className="text-3xl font-bold text-blue-600 text-center sm:text-left mb-4 sm:mb-0">
        All Campaigns
      </h2>
      <button
        onClick={handleSortByMinDonation}
        className="bg-blue-500 text-white px-5 py-2 rounded shadow hover:bg-blue-600 transition"
      >
        Sort by Minimum Donation
      </button>
    </div>

    {/* Campaign Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {campaigns.length > 0 ? (
        campaigns.map((campaign) => (
          <div
            key={campaign._id}
            className="max-w-sm w-full mx-auto bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={campaign.image || "https://via.placeholder.com/400x200"}
              alt={campaign.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 truncate">
                {campaign.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">Type:</span> {campaign.type}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">Min Donation:</span> $
                {campaign.minDonation}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">Deadline:</span> {campaign.deadline}
              </p>
              <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                {campaign.description.slice(0,20)}
              </p>
              <Link
                to={`/details/${campaign._id}`}
                className="block text-center bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700"
              >
                See More
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No campaigns available
        </div>
      )}
    </div>
  </div>
</div>

  );
};

export default AllCampaign;
