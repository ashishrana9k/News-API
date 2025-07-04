import React, { useState, useEffect } from 'react';
import { fetchAPI2 } from '../APIs/APIS.js';

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAPI2()
            .then((res) => {
                setData(res || []);
                console.log(res);
                setError(null);
            })
            .catch((err) => {
                console.log('Something went wrong!', err);
                setError('We are extremely sorry for the wait.... We are working on it');
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
                    <i> {error}</i>
                </div>
            )}

            {!loading && !error && data.length > 0 &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 container'>{
                    data.map((items, index) => (
                        // LOGIC CHANGE HERE: Conditionally apply flex-row or flex-row-reverse
                        <div
                            key={index}
                            className={`border-b-2 border-gray-200 p-4 border rounded-2xl hover:border-red-400 hover:shadow-2xl mt-4  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                }`}
                        >
                            {/* Image Container: Takes up 1/3 of the width */}
                            <div className="">
                                <img
                                    src={items.urlToImage}
                                    className="w-full rounded h-[400px] object-cover"
                                    alt=""
                                />
                            </div>
                            {/* Content Container: Takes up 2/3 of the width */}
                            <div className=" space-y-4">
                                <p className="text-xl text-[#36454F] my-4"><i>{items.author}</i></p>
                                <p className="text-4xl text-[#36454F]">{items.title}</p>
                                <p>{items.description}</p>
                                <p>{items.content}</p>
                                <div className="text-right">
                                    <p className="text-sm text-[#36454F]"><i>{items.author}</i></p>
                                    <p className="text-sm text-[#36454F]"><i>{items.publishedAt}</i></p>
                                </div>
                                <button className="cursor-pointer px-5 py-1 border rounded hover:border-red-400 hover:text-red-400">
                                    <a href={items.url} target="_blank" rel="noopener noreferrer">Learn more</a>
                                </button>
                            </div>
                        </div>
                    ))
                } </div>
            }
        </>
    );
}