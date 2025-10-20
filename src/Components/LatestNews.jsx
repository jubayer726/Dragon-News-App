import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4'>
            <p className='text-white font-semibold bg-secondary p-3'>Latest</p>
            <Marquee className='flex gap-4' pauseOnHover={true} speed={60}>
            <p className='font-semibold  bg-base-200 p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo mollitia eveniet dignissimos consequatur enim beatae officiis nam hic sunt.</p>
            <p className='font-semibold  bg-base-200 p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo mollitia eveniet dignissimos consequatur enim beatae officiis nam hic sunt.</p>
            <p className='font-semibold  bg-base-200 p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo mollitia eveniet dignissimos consequatur enim beatae officiis nam hic sunt.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;