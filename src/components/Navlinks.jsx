import React from 'react'
import { NavLink } from 'react-router-dom'
const links = [
    {id:1,url:'/',text:'Home'},
    {id:2,url:'/about',text:'About'},
    {id:3,url:'/projects',text:'Projects'},
    {id:4,url:'/contact',text:'Contact'},
]
const Navlinks = ({click}) => {
  return (
    links.map((link)=>{
       return <NavLink to={link.url} key={link.id} onClick={click} >{link.text}</NavLink>
    })
  )
}

export default Navlinks
