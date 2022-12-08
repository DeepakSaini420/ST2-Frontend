import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet,useNavigate,useLocation } from "react-router-dom";
import './Navigation.css'
const NavigationRouter = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [data,changeData]= useState({user:''});
    useEffect(()=>{
        async function load(){
            try {
                const response = await axios.post('http://localhost:8000/user/checkToken',{
                    token:localStorage.getItem('token')
                })
                changeData(response.data);
            } catch (error) {
                changeData({user:''});
                navigate('/login');
            }
        }
        load()
    },[location.key])

    const handelLogout= ()=>{
        localStorage.setItem('token','');
        changeData({user:''});
        navigate('/login');
    }

    return (
        <div>
            <div className="navbar-container">
                <div>
                    <h1>HOMEPAGE</h1>
                </div>
                <div className="navbar-list">
                    <ul className="navbar-lists">
                        <li><Link to={"/"}>HOMEPAGE</Link></li>
                        <li><Link to={"/profile"}>VIEW PROFILE</Link></li>
                        <li><Link to={"/password"}>CHANGE PASSWORD</Link></li>
                        <li><Link onClick={handelLogout}>LOGOUT</Link></li>
                    </ul>
                </div>
            </div>
            <Outlet context={data}/>
        </div>
    )
}

export default NavigationRouter;