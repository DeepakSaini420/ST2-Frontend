import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import Error from '../../components/error/error.component'
import './changepassword.css'

const ChangePassword = ()=>{
    const [newPassword,setNewPassword] = useState('');
    const [currentPassword,setCurrentPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [success,setSuccess] = useState(false);
    const [lengtPass,setLengthPass] = useState(false);
    const [confirmPass,setConfirmPass] = useState(false);
    const [newPass,setNewPass] = useState(false);
    const [failed,setFailed] = useState(false);
    const navigate = useNavigate();

    const handelClick =async ()=>{
        if(newPassword.length<8 || currentPassword.length<8){
            setLengthPass(true);
            setTimeout(() => {
                setLengthPass(false);
            }, 2500);
            return;
        }

        if(confirmPassword!==currentPassword){
            setConfirmPass(true);
            setTimeout(() => {
                setConfirmPass(false);
            }, 2500);
            return;
        }

        if(newPassword===currentPassword){
            setNewPass(true);
            setTimeout(() => {
                setNewPass(false);
            }, 2500);
            return;
        }

        try {
            const response =await axios.post('http://localhost:8000/user/changePassword',{
                oldPassword:currentPassword,
                newPassword:newPassword,
                token:localStorage.getItem('token')
            })
            if(await response.data.success){
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2500);
            }else{
                setFailed(true);
                setTimeout(() => {
                    setFailed(false);
                }, 2500);
            }
        } catch (err) {
            console.log(err);
            navigate('/login')
        }

    }

    return(
        <div className="password-contanier">
            {
                success && (
                    <Error class_name={'sucess'} error_text={'Password Changed Successfully!'} />
                )
            }
            {
                lengtPass && (
                    <Error class_name={'failed'} error_text={'Password Should be of Minimum length 8'} />
                )
            }
            {
                confirmPass && (
                    <Error class_name={'failed'} error_text={'Password is not confirmed!'} />
                )
            }
            {
                newPass && (
                    <Error class_name={'failed'} error_text={'New Password Should be different!'} />
                )
            }
            {
                failed && (
                    <Error class_name={'failed'} error_text={'Current password is wrong!'} />
                )
            }
            <div className="password">
                <div>
                    <Input title={"New Password"} typeText={"text"} setHandler={setNewPassword}/>
                </div>
                <div>
                    <Input title={"Current password"} typeText={"text"} setHandler={setCurrentPassword}/>
                </div>
                <div>
                    <Input title={"Confirm password"} typeText={"text"} setHandler={setConfirmPassword}/>
                </div>
                <div>
                    <Button buttonText={"Change Password"} handelClick={handelClick}/>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword