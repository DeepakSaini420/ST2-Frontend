import './button.css'

const Button = ({buttonText,handelClick=()=>null})=>{
    return (
        <div className='button' onClick={handelClick}>
            <p>{buttonText}</p>
        </div>
    )
}

export default Button