import styled from "styled-components";

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
export const Label = styled.label`
width: 100%;
height: 500px;
background-color: #0f1624;
border-radius:20px;
display:flex;
position:relative;
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
    width: 100%;
    height: 500px;
    border-radius:20px;
    border: 5px solid #050912;
    object-fit: cover;
}
`