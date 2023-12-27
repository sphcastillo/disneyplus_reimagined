import React from 'react';

type Props = {
    params: {
        id: string;
    };
    searchParams: {
        genre: string;
    };
}

function GenrePage({ params: { id }, searchParams: { genre }}: Props) {
    console.log("GenrePage props", { id, genre } );

    return (
        <div className=''>Welcome to the genre with ID: {id} and name: {genre}</div>
    )
}

export default GenrePage;