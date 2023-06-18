import React from "react";
import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";
const Sidebar = () => {
  return<>
    <div>
      <aside className={s.sidebar}>
        <ul className={s.list}>
          <li className={s.item}><NavLink to="/profile" className={s.link} >Profile</NavLink></li>
          <li className={s.item}><NavLink to="/dialogs" className={s.link}>Message</NavLink></li>
          <li className={s.item}><NavLink to="/news" className={s.link}>News</NavLink></li>
          <li className={s.item}><NavLink to="/music" className={s.link}>Music</NavLink></li>
          <li className={s.item}><NavLink to="/settings" className={s.link}>Settings</NavLink></li>
        </ul>
      </aside>
    </div>
    </>
}
export default Sidebar