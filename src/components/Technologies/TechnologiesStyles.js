import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
grid-template-columns: repeat(auto-fill,minmax(80px,1fr));
grid-column-gap: 10px;
grid-row-gap: 10px;
list-style-type: none;
display: grid;
margin: 3rem 0;
width: 100%;
justify-content: center;
align-items: center;
align-content: center;
justify-items: center;

`
export const LList = styled.ul`
grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
grid-column-gap: 10px;
grid-row-gap: 10px;
list-style-type: none;
display: grid;
margin: 3rem 0;
width: 100%;


`
export const SList = styled.ul`
display: grid;
width: 100%;
margin: 3rem 0;

`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
display: flex;
background-color: #01060f;
padding: 10px;
border-radius: 15px;
width: 80px;

align-items: center;
justify-items: center;
align-content: center;
justify-content: center;
height: 80px;
box-shadow: 0 0 50px #121e3c;
/*animation: colorchange 5s ease-in-out infinite;
@keyframes colorchange {
  0% {
    box-shadow: 0px 0px 10px rgb(172,39,39,1);
    border: 1px solid rgb(172,39,39,1);
  }
  25% {    
    box-shadow: 0px 0px 10px rgb(39,172,172,1);
    border: 1px solid rgb(39,172,172,1);
  }
  50% {    
    box-shadow: 0px 0px 10px rgb(172,39,172,1);
    border: 1px solid rgb(172,39,172,1);
  }
  75% {    
    box-shadow: 0px 0px 10px rgb(39,172,172,1);
    border: 1px solid rgb(39,172,172,1);
  }
  100% {    
    box-shadow: 0px 0px 10px rgb(172,39,39,1);
    border: 1px solid rgb(172,39,39,1);
  }
}*/
img{
  width: 35px;
height: 35px;
}
@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`
export const LListItem = styled.li`
display: flex;
padding: 10px;
width: 250px;
height: 80px;
align-items: center;
letter-spacing: 2px;
    font-weight: 100;
    font-size: 15px;
    color: #9b9b9b;
svg{
  width: 80px;
  height: 80px;
}

`
export const SListItem = styled.li`
display: flex;

width: 100%;
height: fit-content;
align-items: center;
margin:10px 0 10px 0 ;
position: relative;
svg{
  position: absolute;
  top:0;
  width: 30px;
  height: 30px;
  background-color: #0f1624;
  path{
    fill: #3499a1;
  }
}
p{
  margin-left: 40px;
  width: 100%;
  letter-spacing: 2px;
  font-weight: 100;
  font-size: 15px;
  color: #9b9b9b;
}
`
export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
export const ListWrapper = styled.div`
width: 100%;
background-color: #040b1a;
border-radius: 0;
padding: 5%;
display: grid;
column-gap: 20px;
row-gap: 20px;
width: 100%;
grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
h3>svg>path{
fill: white;
}
h3{
display: flex;
align-items: center;
padding: 10px;
letter-spacing: 2px;
    font-weight: 900;
    font-size: 15px;
}
h3>svg{
width: 30px;
height: 30px;
margin-right: 30px;
}
@media ${props => props.theme.breakpoints.md}{
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    border-radius: 0;
  }
  @media ${props => props.theme.breakpoints.vsm}{
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));

  }

`