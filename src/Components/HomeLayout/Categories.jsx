import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriPromies = fetch('/categories.json')
.then(res => res.json())
.catch(error =>{
    console.log(error);
})

const Categories = () => {
    const categories = use(categoriPromies);
    
    return (
        <div>
            <h1 className='text-3xl font-semibold p-5 text-center'>Categories ({categories.length})</h1>
            <div>
                {
                categories.map(categori=><div key={categori.id} >
                    <NavLink to={`category/${categori.id}`}  className=" my-1 btn w-full text-accent font-semibold bg-white border-0">{categori.name}</NavLink>
                </div>)
                }
            </div>
        </div>
    );
};

export default Categories;