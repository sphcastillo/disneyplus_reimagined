"use client";

import useSWR from "swr";
import { hubballi } from "@/utils/fonts/fonts";


const  fetcher = (term: string) =>
 fetch("/api/suggestions?term=" + term).then((res) => res.json());

function AISuggestion({ term }: { term: string }) {
    const { data, error, isLoading, isValidating } = useSWR(
        "suggestions",
        () => fetcher(term),
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    const generateText = () => {
        if (isLoading || isValidating)
            return (
                <div>
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"/>
                    <p className="text-sm text-gray-400">AI Assistant is thinking...</p>
                </div>
        );

        if (error) return <>Error...</>;
        if (!data) return <>No data</>;

    return (
        <>
            <div className="hidden sm:block animate-pulse rounded-full bg-gradient-to-t  from-white to-purple-700 h-10 w-10 border-2 flex-shrink-0 border-white"/>

            <div className='overflow-hidden'>
                <p className="text-sm text-yellow-300">
                    AI (Azure Functions) Assistant Suggests:{' '}
                </p>
                <div className={hubballi.className}>
                    <p className="italic text-xl text-white">&quot;{data.message}&quot;</p>
                </div>
            </div>
        </>
    );
};

    return (
        <div className="flex space-x-5 items-center px-3 sm:px-10">{generateText()}</div>
    );
}

export default AISuggestion;