import React from 'react'

import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div>
            <div>
                <h1 className='text-red-500 text-center text-2xl font-bold underline py-3'><i><Link to='/'>Hindustan Times</Link></i></h1>
            </div>
            <div className='border-y border-gray-300'>
                <div className='flex justify-center'>
                    <ul className='main_list flex gap-5 font-semibold text-lg py-2'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/news3'>News</Link></li>
                        <li><Link to='/Sports'>Sports</Link></li>
                        <li><Link to='/Business'>Business</Link></li>
                        <li>Invocation</li>
                        <li>Culture</li>
                        <li>Art</li>
                        <li>Travel</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
