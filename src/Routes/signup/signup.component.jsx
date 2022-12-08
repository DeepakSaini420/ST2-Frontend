import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '../../components/button/button.component'
import Input from '../../components/input/input.component'
import Error from '../../components/error/error.component'
import './signup.css'

const Signup = ()=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [phoneNo,setPhoneNo] = useState('');
    const [gender,setGender] = useState('');
    const [success,setSuccess] = useState(false);
    const [faild,setFaild] = useState(false);
    const [fieldLess,setFieldLess] = useState(false);


    const signUp =async ()=>{
        if(username.length<2 || password.length<8 || name.length<2 || phoneNo.length!=10 || gender.length<4){
            setFieldLess(true);
            setTimeout(() => {
                setFieldLess(false);
            }, 2500);
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/user/signup',{
                username,
                password,
                fname:name,
                phoneNo,
                gender
            })
            console.log(response);
            setSuccess(true);
            setTimeout(()=>{
                setSuccess(false);
            },1500)
        } catch (error) {
            setFaild(true);
            setTimeout(() => {
                setFaild(false);
            }, 1500);
        }

    }

    return(
        <div className='login-back'>
            {
                fieldLess && (
                    <Error class_name={'failed'} error_text={'Please Enter Data Correctly!'}/>
                )
            }
            {
                success && (
                    <Error class_name={'sucess'} error_text={'User Registerd Succesfully!'}/>
                )
            }
            {
                faild && (
                    <Error class_name={'failed'} error_text={'User Already Exist!'}/>
                )
            }
            <div className='form-container-signup'>
                <div className='form-title-signup'>
                    <p className='form-title-text-signup'>Sign Up</p>
                </div>
                <div>
                    <div className='input-div-signup'>
                        <Input title={'Username'} typeText={"text"} setHandler={setUsername}/>
                    </div>
                    <div className="input-div-signup">
                        <Input title={'Password'} typeText={"password"} setHandler={setPassword}/>
                    </div>
                    <div className="input-div-signup">
                        <Input title={'Name'} typeText={"text"} setHandler={setName}/>
                    </div>
                    <div className="input-div-signup">
                        <Input title={'Phone No.'} typeText={"text"} setHandler={setPhoneNo}/>
                    </div>
                    <div className="input-div-signup">
                        <Input title={'Gender'} typeText={"text"} setHandler={setGender}/>
                    </div>
                </div>
                <div className='button-container-signup'>
                    <Button buttonText={"SIGN UP"} handelClick={signUp}/>
                </div>
                <div className='text-container-signup'>
                    <p>Already have an Account?<Link to={'/login'}>LOGIN</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup