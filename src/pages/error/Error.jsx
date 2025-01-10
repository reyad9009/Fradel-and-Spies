import React from 'react';
import error from '../../assets/error.svg';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-[6%]'>
            <img src={error} alt="" />
            <h1 className='text-2xl font-bold'>The page you are looking for doesn't exist</h1>
            <Link to='/'>
                <button className='bg-primaryColor px-10 py-3 rounded-xl mt-6 text-white'>Go to Home Page</button>
            </Link>
        </div>
    );
};

export default Error;