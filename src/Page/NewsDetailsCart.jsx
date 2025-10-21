import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCart = ({news}) => {
    const {title, image_url, details, category_id} = news;
    return (
        <div className='p-5'>
            <img className='w-full h-[400px] object-cover' src={image_url} alt="" />
            <h1 className='text-2xl py-3'>{title}</h1>
            <p>{details}</p>
            <Link className='btn btn-secondary p-5 m-5' to={`/category/${category_id}`}>All news</Link>
        </div>
    );
};

export default NewsDetailsCart;