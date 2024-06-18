import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
export const HeaderListHolder = styled.div`
  &.fixed{
      display: flex;
      position: fixed;
      justify-content: center;
      top:0;
      z-index: 99;
      width: 100%;
      background-color: #090d16;
      height: 80px;
  }
  &.relative{
      display: flex;
      position: relative;
      justify-content: center;
      top:0;
      z-index: 99;
      width: 100%;
      background-color: #0f1624;
      height: 80px;
  }

  
`
export const HeaderListHolderDiv = styled.div`

  display: flex;
  width: 100%;
  max-width: 1280px;
  align-items: center;

`
export const LogHolder = styled.div`
  margin-left: 5%;
  img{
    width: 50px;
  }
`
export const List1 = styled.ul`
&.desktop{
  display: flex;
  width: 100%;
  justify-content: end;
  margin-right: 5%;
}
&.hideMobile{
  display: none;
}
&.showMobile{
  flex-wrap: wrap;
  position: absolute;
  top:60px;
  z-index: 99;
  background-color:  #090d16;
  width: 100%;
}
  @media ${(props) => props.theme.breakpoints.sm} {
    
  }
  @media ${(props) => props.theme.breakpoints.md} {

  }
  @media ${(props) => props.theme.breakpoints.lg} {

  }

`
export const List1Item = styled.li`
  display: flex;
  align-content: center;
  margin: 20px;
`
export const NavLink1=styled.span`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 32px;
  color: white;
  font-weight: 900;
  align-items: center;
  span{
    letter-spacing: 2px;
    font-weight: 100;
    font-size: 12px;
  }
`
export const HamburgerDivHolder=styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    justify-content: end;
    margin-right: 5%;
  }

`
export const HamburgerDiv=styled.div`
display: flex;
justify-content: center;
align-items: center;

cursor: pointer;

  background-color: #090d16;
  width: 60px;
    height: 60px;
    border-radius: 10px;
  svg{
    width: 40px;
    height: 40px;
  }
  svg>path{
    fill: white;

  }
`




















export const Container = styled.div`


position: fixed;
display: flex;
flex-direction: column;
width: 80px;
height: 100%;

top: 0;
left: ${(props) => props.right ? "calc(50% + 700px - 80px)" : "calc(50% - 700px)"} ;
z-index: 99;
justify-content: center;
overflow: hidden;
svg.hamburger{
      color: white;
      cursor: pointer;
}


@media ${(props) => props.theme.breakpoints.sp} {
    display: flex;
    position: fixed;
    width: 80px;

    top: 40px;
    height: 90px;

    left: auto;
    right: calc(0% + 40px);
    margin: 0;
    z-index: 99;

    svg.hamburger{

      width: 50px;
      height: 50px;
    }
}
@media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    position: fixed;
    width: 80px;

    top: 10px;
    height:90px;
    left: auto;
    right: calc(0% + 10px);
    margin: 0;
    z-index: 99;
    svg.hamburger{
      width: 50px;
      height: 50px;
    }
  }

  &.show{
  justify-content: start;
  background-color: #0a101c;
  animation: showMenu 0.2s ease-in-out;
  height: 100%;
  width: 80px;
}
&.hide{
  border-radius: 20px;
  justify-content: start;
  background-color: #0a101c;
  animation: hideMenu 0.2s ease-in-out;
  height: 90px;
  width: 80px;
}
@keyframes showMenu {
  0% {
    height: 90px;
  }
  100% {
    height: 100%;
  }
  
}
@keyframes hideMenu {
  0% {
    height: 100%;
    background-color: #0a101c;
  }
  100% {
    height: 90px;
    background-color: #0a101c;
  }
  
}
`;
export const Div = styled.div`
display: none;

  @media ${(props) => props.theme.breakpoints.sp} {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: center;
margin-top: 20px;
margin-bottom: 20px;

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: center;
margin-top: 20px;
margin-bottom: 20px;

  }

`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  
  .link{
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
  }
  .logo{
    width: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sp} {
    display:none;
  }
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  li{
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sp} {
    display: none;
  }
`;

export const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.sp} {
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled.span`
  .icon{
    transition: 0.1s ease-in-out;
    path{
      fill: white;
      stroke: none;
    }
    width: 20px;
    height: 20px;

  }
  .spanL{
    transition: 0.1s ease-in-out;
  }
    display: flex;
    flex-direction: column;
  padding-top: 20px;
  font-size: 12px;
  line-height: 32px;
  color: white;
  
  font-weight: 900;
  width: 100%;
  align-items: center;
  
  background-color: transparent;
  &:hover {
    color: #13adc7;
    opacity: 1;
    
    //transform: scale(1.2);
    border-radius: 20px;

    cursor: pointer;
    .spanL{
      transform: translateY(5px);
    }
    .icon{
      transform: translateY(-5px);
      path{
        fill: #13adc7;
        stroke: none;
      }
    }

  }

  @media ${(props) => props.theme.breakpoints.sp} {
    display: none;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sp} {
    display: none;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sp} {
    display: none;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
padding: 8px;
&:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sp} {
    display: none;
  }
`