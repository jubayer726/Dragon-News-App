import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import NewsDetailsCart from './NewsDetailsCart';
import RightSide from '../Components/HomeLayout/RightSide';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const newsData = useLoaderData()
    const {id} = useParams();
    const [news, setNews] = useState({});
    // console.log(newsData, id, news);

    useEffect(() => {
        const newsDetails = newsData.find((singleNews) => singleNews.id == id)
            setNews(newsDetails)
    }, [newsData, id])

    return (
        <div className='w-11/12 mx-auto py-5'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-5 py-5'>
                <aside className='col-span-9'>
                    <h1 className='text-2xl font-semibold p-5'>News Details</h1>
                    <NewsDetailsCart news={news}></NewsDetailsCart>
                </aside>
                <aside className='col-span-3'>
                <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;