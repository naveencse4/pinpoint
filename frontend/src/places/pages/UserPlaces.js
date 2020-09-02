import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Golconda Fort',
        description: 'One of the most famous fort',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Golkonda_Fort_001.jpg/1200px-Golkonda_Fort_001.jpg',
        address: 'Khair Complex, Ibrahim Bagh, Hyderabad, Telangana 500008',
        location: {
            lat: 17.383309,
            lng: 78.3988641,
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Golconda Fort',
        description: 'One of the most famous fort',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Golkonda_Fort_001.jpg/1200px-Golkonda_Fort_001.jpg',
        address: 'Khair Complex, Ibrahim Bagh, Hyderabad, Telangana 500008',
        location: {
            lat: 17.383309,
            lng: 78.3988641,
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;

