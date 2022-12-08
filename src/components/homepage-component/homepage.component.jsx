import './homepage.css'

const HomepageComponent = ({ data })=>{
    return (
        <div className='homepage-component'>
            <div className='img-container'>
                <img src={data.post_image_url}/>
            </div>
            <div>
                <p>{data.post_title}</p>
            </div>
            <div>
                <p>{data.post_description}</p>
            </div>
        </div>
    )
}

export default HomepageComponent