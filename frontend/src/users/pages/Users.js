import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'naveen', 
            image: 'https://images.pexels.com/photos/4673415/pexels-photo-4673415.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', 
            places: 3
        }
    ];

    return <UsersList items={USERS}/>;
}

export default Users;
