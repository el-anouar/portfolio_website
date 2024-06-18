import styled from "styled-components";

export const AdminContainer = styled.div`
position: relative;
max-width: 1280px;
width: 100%;
margin: auto;

	/*@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}*/
`


export const Section = styled.div`


display: flex;
flex-direction: column;
padding: 0;
margin: 0 5% 0 5%;
padding-top:100px;
box-sizing: content-box;
position: relative;
overflow: hidden;
width: 90%;
align-items: baseline;
	/*@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}*/
`
export const PLabel = styled.label`
display: flex;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    img{
        object-fit: cover;
width: 100%;
height: 100%;
    }
	/*@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}*/
`
export const Div = styled.div`
position: relative;
display: flex;
align-items: center;
margin: 20px 0 20px 0;
width: 100%;
&.grid{
    display: grid;
}
`

export const Input = styled.input`

    font-size: 15px;
border: none;
padding:10px;
width: 100%;
outline: none;
width: 100%;
padding: 20px;
background-color: #060b15;
color: white;
border-radius: 20px;
`


export const TextArea = styled.textarea`

font-size: 15px;
    border: none;
    padding:10px;
    width: 100%;
    outline: none;
    width: 100%;
background-color: #060b15;
color: white;




    height: 500px;



`
export const SLabel = styled.label`
position: absolute;
right: 90px;
background-color: #1a6244;
padding: 20px;
border-radius: 20px;


`
export const AdminListWrapper = styled.div`
width: 100%;
background-color: #040b1a;
border-radius: 50px;
padding: 48px;
display: grid;
width: 100%;

h3>svg>path{
fill: white;
}
h3{
display: flex;
align-items: center;
padding: 10px;
}
h3>svg{
width: 50px;
height: 50px;
margin-right: 30px;
}
@media ${props => props.theme.breakpoints.md}{
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  }
  @media ${props => props.theme.breakpoints.vsm}{
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  }

`
export const AdminList = styled.ul`
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
export const AdminListItem = styled.li`
position: relative;
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


img{
  width: 35px;
height: 35px;
}
.div{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    background-color: white;
    height: 0%;
    svg{
    display: none;
    width: 60%;
    height: 60%;
    path:nth-child(2){
        fill: red;
    }
}
}
&:hover{
    .div{
        svg{
            display: flex;
        }
        position: absolute;
        top: 0;
        width: 100%;
        animation: name 0.3s ease-in-out;
        height: 100%;
        border-radius: 15px;
        
    }
}
@keyframes name {
    0%{

        height: 0;
        border-radius: 0px;
    }
    100%{
        height: 100%;
        border-radius: 15px;
    }
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
export const SAdminList = styled.ul`
display: grid;
width: 100%;


`
export const SAdminListItem = styled.li`
display: flex;
margin-top: 5PX;

width: 100%;
height: fit-content;
align-items: center;
svg{
  width: 80px;
  height: 80px;
}

`

export const SAdd = styled.div`
position: absolute;
display: flex;
background-color: #1a6244;
padding: 20px;
border-radius: 20px;
right: 90px;


`
export const DivInputAbs=styled.div`

&.closed{
    display: none;

}
&.open{
    display: flex;
position: fixed;
top: 0;
width: 100%;
height: 100vw;
width: 100%;
height: 100vh;
background-color: #0009;
left: 0;
z-index: 99;
justify-content: center;
align-items: center;

}
&.Project{
    display: grid;

    overflow: scroll;
    justify-content: baseline;
    align-items:center;
    .tagsLabel{
        display: flex;
        height: 50px;

        justify-content: space-between;
        .selectTags{
            padding: 10px;
            font-size: 20px;
            border: none;
            color: white;
            background-color: #0f1624;
        }
        .tagsAddButton{
            display: flex;
            border: none;
            padding: 20px;
            height: auto;
            width: 100px;
            background-color: #1a6244;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
        }
    }

    input{
        width: 700px;
        height: 80px;
        background-color: #0f1624;
        color: white;
        border: none;
        outline: none;
        padding: 20px;
    }
    label{
        width: 700px;
        height: 500px;
        background-color: #0f1624;
        span{
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            color: white;
            background-color: #0f1624;
            padding: 10px;
            border-radius: 20px;
            left: 0;
            right: 0;
            width: 500px;
            height: 100px;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img{
            width: 700px;
            height: 500px;
            object-fit: cover;
        }
    }
    textarea{
        width: 700px;
        height: 200px;
        min-width: 700px;
        max-width: 700px;
        background-color: #0f1624;
        color: white;
        border: none;
        border-top-color: currentcolor;
        border-top-style: none;
        border-top-width: medium;
        border-bottom-color: currentcolor;
        border-bottom-style: none;
        border-bottom-width: medium;
        outline: none;
        border-bottom: 5px solid #000;
        border-top: 5px solid #000;
        padding: 20px;
    }
    button{
        width: 700px;
        padding: 20px;
        height: 100px;
        background-color: #0f1624;
        color: white;
        border: none;
        border-left: 1px solid black;
    }
}
input{
    width: 500px;
    height: 80px;
    background-color: #0f1624;
    color: white;
    border: none;
    outline: none;
    padding: 20px;
}
button{
    padding: 20px;
    height: 80px;
    background-color: #0f1624;
    color: white;
    border: none;
    border-left: 1px solid black;
}
`
export const Tags=styled.div`
display: flex;
background-color: #0f1624;
flex-wrap: wrap;

    span{
        padding:10px;
        background-color: #0a0f1a;
        border: 2px solid black;
        border-radius: 20px;
        height: fit-content;
        width: fit-content;
        color: white;
        margin: 10px;
    }
`
export const Button=styled.button`
position: absolute;
right: 0;
border: none;
outline: none;
color: white;
background-color: #194f64;
padding: 20px;
justify-content: center;
align-items: center;
display: flex;
border-radius: 20px;
cursor: pointer;
&#HeroDescription{
    top :0;
    right: 0;
}
`