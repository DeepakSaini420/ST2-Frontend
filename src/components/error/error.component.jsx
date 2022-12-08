import './error.css'

const Error = ({class_name,error_text})=>{
    return(
        <div className={class_name}> 
            <p>{error_text}</p>
        </div>
    )
}

export default Error