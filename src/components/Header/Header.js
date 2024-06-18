import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineMenu,AiFillHome,AiOutlineHome} from 'react-icons/ai';
import { GrProjects} from 'react-icons/gr';
import { BsFillPersonFill} from 'react-icons/bs';
import {FaThList} from 'react-icons/fa';
import { Container, Div, Div1, Div2, Div3, HamburgerDiv, HamburgerDivHolder, HeaderListHolder, HeaderListHolderDiv, List1, List1Item, LogHolder, NavLink, NavLink1, SocialIcons } from './HeaderStyles';
import { useEffect, useState } from 'react';

const Header = (props) =>{
  let prevScrollDir = null;
  const [toggle,setToggle]=useState("none")
  const [desktop,setdesktop]=useState(null)
  const [position,setPosition]=useState("relative")
  const toggleMenu=()=>{
    if(toggle==="none"){
      setToggle(true)
    }else{
      setToggle(!toggle)
    }
    
  
  }
  useEffect(()=>{
   let prevScrollPos = window.pageYOffset;
  
   
   const handleScroll = () => {
    if(window.pageYOffset<10){
      setPosition("relative")
    }else{
      setPosition("fixed")
    }
     const currentScrollPos = window.pageYOffset;
     const currentScrollDir = currentScrollPos > prevScrollPos ? 'down' : 'up';
     
     prevScrollPos = currentScrollPos;
     prevScrollDir = currentScrollDir;
   }
   
   window.addEventListener('scroll', handleScroll);
   
   return () => {
     window.removeEventListener('scroll', handleScroll);
   }
  },[])
  useEffect(()=>{
    /*if(window.innerWidth>1477){
      setWindowB(true)
    }else{
      setWindowB(false)
    }*/
    if(window.innerWidth>640){
      setdesktop(true)
      setToggle(false)
    }else{
      setdesktop(false)
    }
    window.addEventListener('resize', ()=>{
      if(window.innerWidth>640){
        setdesktop(true)
        setToggle(false)
      }else{
        setdesktop(false)
      }
    });
  },[])
  return(
    <>
    <HeaderListHolder  className={position=="fixed"?"fixed":position=="relative"?"relative":""}>
    <HeaderListHolderDiv>
    <LogHolder >
        <Link href="/" className='link'>
            <Image src="/images/Logo.svg" width={"72"} height={"72"} alt="Logo"></Image>
        </Link>
    </LogHolder>
    <HamburgerDivHolder><HamburgerDiv onClick={toggleMenu}><AiOutlineMenu/></HamburgerDiv></HamburgerDivHolder>
    <List1 className={desktop==true?"desktop":toggle==true?"showMobile":"hideMobile"}>
        <List1Item>
          <Link href={props?.about==="a"?process.env.NEXT_PUBLIC_HOST+"#home":"#home"}>
            <NavLink1 ><span>Home</span></NavLink1>
          </Link>
        </List1Item>
  
        <List1Item>
          <Link href={props.about==="a"?process.env.NEXT_PUBLIC_HOST+"#skills":"#skills"}>
          <NavLink1 ><span>Skills</span></NavLink1>
          </Link>
        </List1Item>        
        <List1Item>
          <Link href={props.about==="a"?process.env.NEXT_PUBLIC_HOST+"#projects":"#projects"}>
            <NavLink1 ><span>Projects</span></NavLink1>
          </Link>
        </List1Item>
        <List1Item>
          <Link href={props.about==="a"?process.env.NEXT_PUBLIC_HOST+"#about":"#about"}>
          <NavLink1 ><span>About Me</span></NavLink1>
          </Link>
        </List1Item>   
        </List1>
    </HeaderListHolderDiv>

    </HeaderListHolder>

      

  
      </>
  
    
  
  );
} 

export default Header;
/*<Container className={windowB ? "none" : toggle==="none" ? "none" : toggle ? "show" :"hide"}>
<div style={{backgroundColor: "#0a101c",borderRadius: "20px"}}><Div onClick={toggleMenu}><AiOutlineMenu className='hamburger'/></Div></div>
<Div1 style={{display:`${windowB ? "flex" :toggle==="none"? "none":toggle ? "flex" :"none"}`}}>
  <Link href="/" className='link'>
      <Image src="/images/Logo.svg" className="logo" width={"72"} height={"72"} alt="Logo"></Image>
  </Link>
</Div1>
<Div2 style={{display:`${windowB ? "flex" : toggle==="none"? "none" : toggle ? "flex" :"none"}`}}>
  <ul>
  <li>
    <Link href="#home">
      
      <NavLink style={{display:`${windowB ? "flex" : toggle==="none"? "none" : toggle ? "flex" :"none"}`}}><AiFillHome className='icon'/><span className='spanL'>Home</span></NavLink>
    </Link>
  </li>

  <li>
    <Link href="#skills">
    <NavLink style={{display:`${windowB ? "flex" : toggle==="none"? "none" : toggle ? "flex" :"none"}`}}><FaThList className='icon'/><span className='spanL'>Skills</span></NavLink>
    </Link>
  </li>        
  <li>
    <Link href="#projects">
      <NavLink style={{display:`${windowB ? "flex" : toggle==="none"? "none" : toggle ? "flex" :"none"}`}}><GrProjects className='icon'/><span className='spanL'>Projects</span></NavLink>
    </Link>
  </li>
  <li>
    <Link href="#about">
    <NavLink style={{display:`${windowB ? "flex" : toggle==="none"? "none" : toggle ? "flex" :"none"}`}}><BsFillPersonFill className='icon'/><span className='spanL'>About Me</span></NavLink>
    </Link>
  </li>   
  </ul>

</Div2>

</Container>*/