import React from 'react'
import Navbar from './component/Navbar'
import SideBar from './component/SideBar'


export default function Wrapper(props) {
    return (
        <>
            <Navbar />
            <div className="wrraper">
                <div className='left-content'>
                    <SideBar />
                </div>
                <div className="right-content">
                    {props.children}
                </div>
            </div>
        </>
    )
}
