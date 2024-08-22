import React from 'react';

const CategoryList = ({category}) => {
    const {id,picture,title,category_type,category_bg,card_bg,text_bg,description,price} = category
    return (
        <div className="card card-compact  shadow-xl"style={{ backgroundColor: `${card_bg}` }}>
  <figure>
    <img
      src={picture}
      alt="image" />
  </figure>
  <div className="m-3">
    <button className='px-6 py-1 rounded-md' style={{ backgroundColor: `${category_bg}` }}><p style={{ color: `${text_bg}` }} >{category_type}</p></button>
    <h2  style={{ color: `${text_bg}` }} className="card-title">{title}</h2>
  </div>
</div>
    );
};

export default CategoryList;