import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../img/logo.png'
import s from './Header.module.css'
import ava from '../../img/Cat03.jpg'
import AuthorizationContainer from "../API/AuthorisationContainer";

const Header = (props: any) => {
    return <>
        <header className={s.header}>
            <div className={s.wrapper}>
                <nav className={s.nav}>
                    <a href="/" className={s.link}>
                        <img src={logo} alt="logo" width={50} height={50}/>
                    </a>
                    <form className={s.form}>
                        <input type="text" className={s.input__search} placeholder="search"/>
                        <button className={s.button} type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em"
                                 height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
                            </svg>

                        </button>
                    </form>
                    <ul className={s.list}>
                        <li className={s.item}><NavLink to="/profile" className={s.link}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20"
                                 height="20"
                                 fill="White">
                                <path
                                    d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/>
                            </svg></NavLink></li>
                        <li className={s.item}><NavLink to="/dialogs" className={s.link}>
                            <svg className={s.icon} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"
                                 width="20"
                                 height="20" fill='white'>
                                <path
                                    d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"
                                />
                            </svg>
                        </NavLink></li>
                        <li className={s.item}><NavLink to="/friends" className={s.link}>
                            <svg className={s.icon} height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"
                                 fill='white'>
                                <path
                                    d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 17v-.5a7.5 7.5 0 0 0 -15 0v.5a1 1 0 0 0 2 0v-.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 0 2 0zm9-5a7 7 0 0 0 -11.667-5.217 1 1 0 1 0 1.334 1.49 5 5 0 0 1 8.333 3.727 1 1 0 0 0 2 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5z"/>
                            </svg>
                            <sup className={s.num}>1</sup>
                        </NavLink></li>
                    </ul>
                    <AuthorizationContainer/>
                </nav>
            </div>
        </header>
    </>
}
export default Header