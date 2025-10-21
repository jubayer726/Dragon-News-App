import React from 'react';
import { Outlet, useNavigate, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAsid from '../Components/HomeLayout/LeftAsid';
import RightSide from '../Components/HomeLayout/RightSide';
import Loading from '../Page/Loading';


const HomeLayout = () => {

    const {state} = useNavigation()

    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4 py-8'>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <LeftAsid></LeftAsid>
                </aside>
                <section className='col-span-6'>
                    {state == "loading"? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;