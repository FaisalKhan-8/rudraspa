import React from 'react';
import { useParams } from 'react-router-dom';
import { ServiceData } from '../data';

const ServiceSubCategories = () => {
  const { id } = useParams();
  const thisData = ServiceData.find((data) => data.id === id);
  console.log(thisData);

  return (
    <>
      <div className='flex flex-col gap-2 w-[400px] shadow-lg rounded-md '>
        <div>
          <img
            src={thisData?.image}
            alt=''
            className='w-[400px] h-[300px] rounded-t-md px-0 object-cover'
          />
        </div>
        <div className='px-2 h-[220px] '>
          <h1 className='text-2xl p-2 font-Poppins  font-semibold text-primary-bg-color'>
            {thisData?.title}
          </h1>
          <p className=' p-2 text-pretty text-sm font-Poppins'>
            {thisData?.description}
          </p>
          <div className='flex justify-between '>
            <p className=' px-2 text-pretty text-md text-red-500 font-Poppins'>
              Duration: {thisData?.duration}
            </p>
            <p className=' px-2 text-pretty text-md text-red-500 font-Poppins'>
              Price: ₹ {thisData?.price}
            </p>
          </div>
        </div>

        <div className='px-2 py-2'>
          <button className='uppercase  bg-secondary-text-color font-Poppins text-white w-full p-2 rounded-md hover:bg-primary-bg-color hover:text-black hover:scale-95 transition-all duration-100 delay-75 ease-linear'>
            Book
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceSubCategories;
