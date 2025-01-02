import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFoodsDetails from './AllFoodsDetails';

const AllFoods = () => {
    const allFoods = useLoaderData();

    return (
        <div className='w-[100%]'>
        <h1 className="text-center font-bold text-4xl mt-16 mb-10">foods</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
           {allFoods.map((food) => (
             <AllFoodsDetails
               key={food._id}
               allFoods={food}
             ></AllFoodsDetails>
           ))}
         </div>
       </div>
    );
};

export default AllFoods;