import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
column-gap: 20px;
row-gap: 20px;
width: 100%;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 5%;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    width: 90%;
  }
    @media ${(props) => props.theme.breakpoints.vsm} {
    margin: 5%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 90%;
  }

`
export const BlogCard = styled.div`
  border-radius: 30px;
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
      border-bottom: 5px solid black;
    border-top: 5px solid black;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 420px;
    img{
      height: calc(100% - 105px);
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 420px;
    img{
      height: calc(100% - 105px);
    }
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 0;
  width: 100%;
  .cont{
    display: flex;
    flex-direction:column;
    justify-content:center;
    background-color: #0f1624bf;
    width: 100%;
    height:100%;
    padding: 15px;
  }
  p{
    color: #ededed;
    font-size: 14px;
    text-shadow: 0 0 10px black;
    letter-spacing: 2px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    .cont{
    display: flex;
    flex-direction:column;
    justify-content:center;
    background-color: #0f1624bf;
    width: 100%;
    height:240px;
    padding: 15px;
    border-radius:30px;
  }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    .cont{
    display: flex;
    flex-direction:column;
    justify-content:center;
    background-color: #0f1624bf;
    width: 100%;
    height:240px;
    padding: 15px;
    border-radius:30px;
  }
  }
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`


export const Form = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 80px;
  .chosen-value,
  .value-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #171c26;
  }

.chosen-value {
  font-weight: 600;
  height: 60px;
  font-size: 20px;
  letter-spacing: 2px;
  padding: 20px;
  background-color: #171c26;
  border: 3px solid transparent;
  transition: .3s ease-in-out;
  color: white;
  &::-webkit-input-placeholder {
    color: white;
  }
  
  &:hover {
    background-color: #2f9f54;
    color: white;
    cursor: pointer;
    
    &::-webkit-input-placeholder {
      color: white;
    }
  }
  
  &:focus{
    outline: 0;
  }
  &.open {
    box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.2);
    outline: 0;
    background-color: #9A9D3A;
    color: white;
    
    &::-webkit-input-placeholder {
      color: #000;
    }
  }
}
.value-list {
  list-style: none;
  margin-top: 60px;
  box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.2);
  overflow: hidden;
  max-height: 0;
  transition: .3s ease-in-out;
  
  &.open {
   max-height: 320px;
   overflow: auto;
  }
  
  li {
    position: relative;
    height: 50px;
    background-color: #171c26;
    padding: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    transition: background-color .3s;
    opacity: 1;
    letter-spacing: 2px;
    &:hover {
      background-color: #2f9f54;
      color: white;
    }
    
    &.closed {
      max-height: 0;
      overflow: hidden;
      padding: 0;
      opacity: 0;
    }
  }
}

`
export const HoverImageEffect = styled.div`

 position: absolute;

left: 0;
width: 100%;
height: 100%;

&:hover{
  .DiV{
    animation:HoverImageEffectIn 0.3s ease-in-out;
    height: 100%;

    
  }
  .titleH{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    animation:titleIn 0.3s ease-in-out;
    transform: translateY(0px);

    z-index: 0;
    .title{
      display: flex;
      color: white;
      text-shadow: 0 0 10px black;
    }

  }
}
.DiV{
  position: absolute;
  background: rgba(15, 22, 36, 0.57);
  top: 0;
  left: 0;

  width: 100%;
  animation:HoverImageEffectOut 0.3s ease-in-out;
  height: 0;
}
.titleH{

  position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
  animation:titleOut 0.3s ease-in-out;
  transform: translateY(500px);

  .title{
      color: white;
      text-shadow: 0 0 10px black;
      
      


    }
      
      

}
@keyframes HoverImageEffectIn {
  0%{
    height: 0%;
  }
  100%{
    height: 100%;
  }
}
@keyframes HoverImageEffectOut {
  0%{
    height: 100%;
  }
  100%{
    height: 0%;
  }
}
@keyframes titleIn {
  0%{
    transform: translateY(500px);
  }
  100%{
    transform: translateY(0);
    
  }
}
@keyframes titleOut {
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(500px);
  }
}
@media ${(props) => props.theme.breakpoints.md} {
  position: absolute;
  height: 210px;
  bottom:0 ;
  .DiV{
    width: 100%;
    height: 100%;

    
  }
  .titleH{
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    animation:titleIn 0.3s ease-in-out;
    transform: translateY(0%);

    z-index: 0;
    .title{
      display: flex;
      color: white;
      text-shadow: 0 0 10px black;
    }

  }
}
@media ${(props) => props.theme.breakpoints.sm} {
  position: absolute;
  height: 210px;
  bottom:0 ;
  .DiV{
    width: 100%;
    height: 100%;

    
  }
  .titleH{
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
    animation:titleIn 0.3s ease-in-out;
    transform: translateY(0%);

    z-index: 0;
    .title{
      display: flex;
      color: white;
      text-shadow: 0 0 10px black;
    }

  }
  }
`
