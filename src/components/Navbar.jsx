import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import styles from './Navbar.module.css'
import Navlinks from './Navlinks';
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggelMenu = ()=>{
        setIsOpen(!isOpen)
    }
    const closeMenuOnClick = ()=>{
        setIsOpen(false)
    }
    
  return (
    <div className={styles.nav_Container} >
        <nav className={styles.navbar}>
            <div className={styles.nav_logo}>
                Sairam
            </div>
            <div className={styles.navlinks_lg}>
                <Navlinks/>
            </div>
            <div className={styles.hamburger_menu}>
                <button onClick={toggelMenu}>{isOpen ? <CgClose className={styles.icon}/> :<FaBarsStaggered className={styles.icon} /> }</button>
            </div>
        </nav>
        {/* mobile nav links  */}
        <div className={`${styles.navlinks_sm} ${isOpen && styles.open}`}>
            {/* navlinks */}
            <Navlinks click = {closeMenuOnClick}/>
        </div>
        {isOpen && <div className={styles.backdrop} onClick={closeMenuOnClick}></div>}
    </div>
  )
}

export default Navbar