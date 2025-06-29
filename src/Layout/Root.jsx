import React from 'react';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div className='scroll-smooth'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;