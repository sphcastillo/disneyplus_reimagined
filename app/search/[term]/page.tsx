import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params: {
        term: string;
    }
};

function SearchPage({ params: { term } }: Props) {
    if (!term) notFound();

    const termToUse = decodeURI(term); 

    // Future: API call to get the searched movies
    // API call to get the popular movies

    return (
        <div>Welcome to the search page: {termToUse}</div>
    )
}

export default SearchPage;