import React, { useState, useEffect } from 'react';
import { fetchAPI1 } from '../APIs/APIS.js'; // Make sure this matches your file name exactly

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAPI1()
            .then((res) => {
                console.log('Fetched response:', res);
                if (Array.isArray(res)) {
                    setData(res);
                    setError(null);
                } else {
                    setData([]);
                    setError('Unexpected API format.');
                }
            })
            .catch((err) => {
                console.error('API Fetch Error:', err);
                setError('We are extremely sorry for the wait... We are working on it.');
                setData([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading && (
                <div className='text-center font-semibold text-2xl'>
                    <i>loading...</i>
                </div>
            )}

            {!loading && error && (
                <div className="text-center text-red-500 text-2xl mt-8">
                    <i>{error}</i>
                </div>
            )}

            {!loading && !error && data.length > 0 &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 container'>
                    {data.map((items, index) => (
                        <div
                            key={index}
                            className={`flex border-b-2 border-gray-200 p-4 border rounded-2xl hover:border-red-400 hover:shadow-2xl mt-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            <div className="">
                                <img
                                    src={items.urlToImage || 'https://via.placeholder.com/400x300?text=No+Image'}
                                    className="w-full rounded h-[400px] object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="space-y-4">
                                <p className="text-xl text-[#36454F] my-4"><i>{items.author || 'Unknown'}</i></p>
                                <p className="text-4xl text-[#36454F]">{items.title}</p>
                                <p>{items.description}</p>
                                <p>{items.content}</p>
                                <div className="text-right">
                                    <p className="text-sm text-[#36454F]"><i>{items.author || 'Unknown'}</i></p>
                                    <p className="text-sm text-[#36454F]"><i>{items.publishedAt}</i></p>
                                </div>
                                <a
                                    href={items.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block cursor-pointer px-5 py-1 border rounded hover:border-red-400 hover:text-red-400"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            }

        </>
    );
}
