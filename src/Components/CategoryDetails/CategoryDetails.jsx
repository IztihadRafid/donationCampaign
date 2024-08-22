import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CategoryDetails = () => {
    const categoryDetails = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id)
    const categoryDetail = categoryDetails.find(categoryDetail => categoryDetail.id === idInt);
    console.log(categoryDetail);

    return (
        <div>
            <h1 className='text-2xl text-center'>CategoryDetail: {id}</h1>
            <div className='w-3/4 mx-auto'>
                <img className='w-5/6 mx-auto' src={categoryDetail.picture} alt="" />

                <div className='absolute -mt-24 ml-44'>
                    <button style={{ backgroundColor: categoryDetail.text_bg }}
                        className='px-5 py-4 rounded-lg text-white text-lg font-semibold'>Donate ${categoryDetail.price}</button>
                </div>
                <div className='w-5/6 mx-auto my-4'>
                    <h1 className='text-4xl font-semibold my-4'>{categoryDetail.title}</h1>
                    <p className='text-lg'>{categoryDetail.description}</p>
                </div>
            </div>

        </div>
    );
};

export default CategoryDetails;