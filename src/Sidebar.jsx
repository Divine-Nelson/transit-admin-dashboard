import React from 'react'
import { Link  } from "react-router-dom"; 
import {
    BsCart3, BsGrid1X2Fill,
    BsFillArchiveFill, 
    BsFillGrid3X2GapFill,
    BsPeopleFill,
    BsListCheck,
    BsMenuButtonWideFill,
    BsFillGearFill,
    BsPersonBadgeFill ,
    BsCreditCard2BackFill, 
    

}from 'react-icons/bs'
import {FaBus, FaBusAlt, FaMap} from 'react-icons/fa'


function Sidebar({openSidebarToggle, OpenSidebar}) {



    
    return (
        <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <FaBus className='icon_header' /> TransitNaija
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                   <Link to="/" className="flex items-center gap-2">
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/buses" className="flex items-center gap-2">
                        <FaBusAlt className='icon'/> Buses
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/create-trips" className="flex items-center gap-2">
                        <BsFillGrid3X2GapFill className='icon'/> Create New Trips
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/bookings" className="flex items-center gap-2">
                        <BsCreditCard2BackFill className='icon'/> Bookings / Transactions
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/driver" className="flex items-center gap-2">
                        <BsPeopleFill className='icon'/> Driver Management
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/tracking" className="flex items-center gap-2">
                        <BsPersonBadgeFill className='icon'/> Operators
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/settings" className="flex items-center gap-2">
                        <BsFillGearFill className='icon'/> Settings
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
