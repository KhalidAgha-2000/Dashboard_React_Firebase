import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { ThemeContext } from '../../Context/ThemeContext.jsx';
import { BiSearch } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { TbMessage } from 'react-icons/tb'
import { HiOutlineLogout, HiOutlineMoon } from 'react-icons/hi'
import { RiSettingsLine } from 'react-icons/ri'
import { IoMdAnalytics } from 'react-icons/io'
import { signOut } from 'firebase/auth';
import { auth } from '../../Config/Config';
const Header = () => {

    const { darkTheme, setDarkTheme } = useContext(ThemeContext)
   
    const logout = () => {
        signOut(auth)
    }
    return (
        <header className={`$ ${darkTheme && "dark"}`}>

            {/* Search */}
            <div className="serach--bar">
                <input type="text" placeholder='search...' />
                <BiSearch className='icon' />
            </div>

            {/* Tools */}
            <div className="tools">
                <AiOutlineUser className='icon' />
                <TbMessage className='icon' />
                <IoMdAnalytics className='icon' />

                <div className="divider"></div>

                <HiOutlineMoon className='icon' onClick={() => setDarkTheme(!darkTheme)} />
                <RiSettingsLine className='icon' />
                <HiOutlineLogout className='icon' onClick={logout } />

                <div className="divider"></div>

                {/* Profile */}
                <div className="user">
                    <img
                        className='profile-img'
                        src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="user-profile"
                    />
                </div>

            </div>
        </header>
    )
}

export default Header