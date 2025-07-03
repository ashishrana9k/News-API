import React, { useState, useEffect } from 'react';
import { fetchAPI4 } from '../APIs/APIS';

export default function Sports() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAPI4()
      .then((res) => {
        setData(res || []);
        setError([])
      })
      .catch((err) => {
        console.log('Something went wrong!', err);
      })
      .finally(() => {
        setLoading(false);
        setError('We are extrimly sorry to make you wait....! We are working on it');
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
        data.map((items, index) => (
          <div
            key={index}
            className="border-b-2 border-gray-200 p-4 border gap-5 rounded-2xl hover:border-red-400 hover:shadow-2xl mt-4"
          >
            <div className="col-span-1">
              <img
                src={items.urlToImage}
                className="w-full rounded h-[400px] object-cover"
                alt=""
              />
            </div>
            <div className="col-span-2 space-y-4">
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
      }
    </>

  );
}

