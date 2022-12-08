import { useNavigate, useOutletContext } from 'react-router-dom';
import userIcon from '../../static/user.png';
import './profile.css'

const ProfileRouter = ()=>{
    const navigate = useNavigate();
    const {user} = useOutletContext();
    console.log(user)
    if(user===''){
        navigate('/login')
    }
    return(
        <div className='profile-route'>
            <div className='profie-card'>
                <div className='img-cont'>
                    <img src={userIcon} width={100} height={100}/>
                </div>
                <div>
                    <span>Username</span> :- <span>{user.username}</span>
                </div>
                <div>
                    <span>Name</span> :- <span>{user.fname}</span>
                </div>
                <div>
                    <span>Gender</span> :- <span>{user.gender}</span>
                </div>
                <div>
                    <span>Phone No</span> :- +<span>{user.phone_no}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileRouter