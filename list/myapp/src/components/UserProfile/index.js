import './index.css'
const UserProfile = (props) =>{
    const {details,key}=props
    const{name,imgUrl,role}=details
    console.log(key)
    return(
        <div className="container">
            <div className="photo" src={imgUrl} alt="photo"/>
            <div className="details">
                <hi className="name">{name}</hi>
                <p className="description">{role}</p>
            </div>
        </div>
    )
}
export default UserProfile;