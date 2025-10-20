import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCards from '../Components/HomeLayout/NewsCards';

const CategoryNews = () => {
  const [categoriNews, setCategoriNews] = useState([])
  const {id} = useParams()
  const data = useLoaderData();
  // console.log(id, data);
  useEffect(()=>{
    if(id== '0'){
      setCategoriNews(data)
    }
    else if(id == '1'){
      const filterNews = data.filter(news => news.others.is_today_pick == id)
      setCategoriNews(filterNews);
    }
    else{
      const filterNews = data.filter(news=>news.category_id == id)
      setCategoriNews(filterNews);
    }
  }, [id, data])

  return (
    <div>
      <h1 className='font-semibold'>Total <span className='text-red-500'>{categoriNews.length}</span> News founds</h1>
      <div className='grid grid-cols-1 gap-4'>
        {
          categoriNews.map(news=><NewsCards key={news.id} news={news}></NewsCards>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;