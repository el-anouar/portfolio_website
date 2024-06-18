import dynamic from "next/dynamic.js";
import { useEffect, useState } from "react";

const Admin = dynamic(() => import("../../components/Admin/Admin.js"), {
    ssr: false,
});
const Index = () => {
    const [data,setData]=useState(null)
    const [loggedIn, setLoggedIn] = useState(false);
    const [type, setType] = useState("Login");
    useEffect(()=>{
        const getAdminData=async()=>{

            const uploadUrl =`api/Mongo?type=getAdminData`;
            const response=await fetch(uploadUrl, {
                method: 'GET',
            }).then(async(res)=>{
                setData(await res.json())
            })
            .catch(err=>{
                return "error getting "
            })
        }
        const checkLoggedIn = async () => {
            const response = await fetch("api/checkLoggedIn", {
                method: "GET",
                credentials: "include",
            });

            const data = await response.json();
            if (data.success) {
                setLoggedIn(true);
                getAdminData()
            } else {
                setLoggedIn(false);
            }
        };

        checkLoggedIn();
    },[loggedIn])
    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const response = await fetch("api/login?type=login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();
        if (data.success) {
            setLoggedIn(true);
        } else {
            alert(data.message);
        }
    };
    const handleSubmitNewUser=async(event)=>{
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const RePassword=event.target.RePassword.value
        const PhoneNumber=event.target.PhoneNumber.value
        const SecureTok=event.target.SecureTok.value
        const response = await fetch("api/login?type=createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                email,
                password,
                RePassword,
                PhoneNumber,
                SecureTok,
            }),
        });

        const data = await response.json();
        if (data.success) {
            alert(data.message)
        } else {
            alert(data.message);
        }
    }
    const createUserClick=()=>{
        setType("CreateUser")
    }
    const logInPageClick=()=>{
        setType("Login")
    }

    return loggedIn ? (<Admin dataP={data} />) : type==="Login"?(
        <>
        <form onSubmit={handleSubmitLogin} style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <input type="email" name="email" placeholder="Email" required autoComplete="email"/>
            <input type="password" name="password" placeholder="Password" required autoComplete="current-password" />
            <button type="submit">Log in</button>
            <button onClick={createUserClick}>Create User</button>
        </form>
        
        </>

    ):type==="CreateUser"&&(
        <>
        <form onSubmit={handleSubmitNewUser} style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <input type="email" name="email" placeholder="Email" required autoComplete="email"/>
            <input type="password" name="password" placeholder="Password" required autoComplete="current-password" />
            <input type="password" name="RePassword" placeholder="Enter Password Again" required />
            <input type="tel" name="PhoneNumber" placeholder="Enter Phone Number" required />
            <input type="text" name="SecureTok" placeholder="Enter A Random secure Tok" required />
            <button type="submit">New User</button>
            <button onClick={logInPageClick}>Login Page</button>
        </form>
        
        </>
    )
}

export default Index