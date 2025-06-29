import AOS  from 'aos';
import React from 'react';
import { Outlet } from 'react-router';
import '../index.css'


const Root = () => {
    return (
        <div className='scroll-smooth'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;