import React from 'react'
import logo from '../../img/logo.png'
import s from './Header.module.css'

const Header = (props: any) => {
    return <>
        <header className={s.header}>
            <div className={s.wrapper}>
                <nav className={s.nav}>
                    <a href="/" className={s.link}>
                        <img src={logo} alt="logo" width={50} height={50}/>
                    </a>
                    <ul className={s.list}>
                        <li className={s.item}><a href="" className="nav-link">ava</a></li>
                        <li className={s.item}><a href="" className="nav-link">login</a><a href=""
                                                                                           className="nav-link">password</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}
export default Header