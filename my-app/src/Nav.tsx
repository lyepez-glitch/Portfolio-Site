import { NavLink } from "react-router-dom";


function Nav(){
  return (
    <>
    <NavLink to = "/about">About</NavLink>
    <NavLink to = "/contact">Contact Me</NavLink>
    <NavLink to = "/home">Home</NavLink>
    </>
  )
}
export default Nav;