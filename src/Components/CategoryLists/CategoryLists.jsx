import React, { useEffect, useState } from 'react';
import CategoryList from '../CategoryList/CategoryList';

const CategoryLists = () => {
    const [categories,setCategories]= useState([]);
    useEffect(()=>{
        fetch('jsons.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h1>Category List{categories.length}</h1>
            <div className='grid lg:grid-cols-4 max-w-7xl mx-auto gap-5 md:grid-cols-2'>
                {
                    categories.map(category=><CategoryList category={category}></CategoryList>)
                }
            </div>
        </div>
    );
};

export default CategoryLists;