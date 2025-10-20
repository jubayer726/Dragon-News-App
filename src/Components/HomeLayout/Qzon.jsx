import React from 'react';
import swimming from '../../assets/swimming.png'
import classs from '../../assets/class.png'
import playGraund from '../../assets/playground.png'
import bg from '../../assets/bg.png'

const Qzon = () => {
    return (
        <div className='my-5 bg-base-200 pl-8'>
            <h2 className='text-center font-semibold'>Q-Zon</h2>
            <div className=' space-y-5'>
                <img src={swimming} alt="photo" />
                <img src={classs} alt="photo" />
                <img src={playGraund} alt="photo" />
                <img src={bg} alt="photo" />
            </div>
        </div>
    );
};

export default Qzon;