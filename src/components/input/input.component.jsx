import './input.css'

const Input = ({title,typeText,setHandler})=>{
    
    const handelType = (e)=>{
        setHandler(e.target.value);    
    }

    return (
        <div>
            <p>{title}</p>
            <input type={typeText} className="input" onChange={handelType}/>
        </div>
    ) 
}

export default Input