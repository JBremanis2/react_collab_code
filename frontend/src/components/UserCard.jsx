import React from 'react';

const UserCard = ({ user }) => {
    return (
      <div className="max-w-sm bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-blue-600">{user.email}</p>
        <p className="text-blue-500">{user.company.name}</p>
      </div>
    );
  };
  
  export default UserCard;