import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '../../components/button/button.component'
import Input from '../../components/input/input.component'
import './Login.css'
import Error from '../../components/error/error.component'

const Login = ()=>{
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [fieldLess,setFieldLess] = useState(false);
    const [isCorrect,setIsCorrect] = useState(false);

    const navigate = useNavigate();

    const handelLogin = async ()=>{
        if(username.length<2 || password.length<8){
            setFieldLess(true);
            setTimeout(() => {
                setFieldLess(false);
            }, 2500);
            return;
        }


        try {
            const response = await axios.post('http://localhost:8000/user/login',{
                username,
                password
            })

            localStorage.setItem('token',await response.data.newToken)
            navigate("/");
        } catch (error) {
            setIsCorrect(true);
            setTimeout(() => {
                setIsCorrect(false);
            }, 2500);
        }

    }

    return(
        <div className='login-back'>
            {
                fieldLess && (
                    <Error class_name={'failed'} error_text={'Please Enter Valid Information!'} />
                )
            }
            {
                isCorrect && (
                    <Error class_name={'failed'} error_text={'Please Check Your Credentials!'}/>
                )
            }
            <div className='form-container'>
                <div className='form-title'>
                    <p className='form-title-text'>Login</p>
                </div>
                <div>
                    <div className='input-div'>
                        <Input title={'Username'} typeText={"text"} setHandler={setUsername}/>
                    </div>
                    <div className="input-div">
                        <Input title={'Password'} typeText={"password"} setHandler={setPassword}/>
                    </div>
                </div>
                <div className='button-container'>
                    <Button buttonText={"LOG IN"} handelClick={handelLogin}/>
                </div>
                <div className='text-container'>
                    <p>Need an Account?<Link to={'/signup'}>SIGN UP</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login