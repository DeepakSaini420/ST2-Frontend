import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HomepageComponent from "../../components/homepage-component/homepage.component";
import './homepage.css'

const Homepage = ()=>{
    const [data,setData] = useState(undefined);
    const navigate = useNavigate();
    useEffect(()=>{
        async function load(){
            try {
                const response = await axios.post('http://localhost:8000/home',{
                    token:localStorage.getItem('token')
                })
                
                setData(await response.data.data)
            } catch (error) {
                navigate('/login');
            }
            
        }
        load();
    },[])
    return(
        <div className="homepage">
            {
                data && (
                    data.map((dat)=>{
                        return (<HomepageComponent data={dat} key={dat.post_id}/>)
                    })
                )
            }
        </div>
    )
}

export default Homepage;