import './index.css'

const UserProfile = (props) => {
    const {userDetails,key}=props
    const {imageUrl,name,role,}=userDetails
    console.log(key)

    return(
        <div className="user-card-container">
          <img className='avatar' src={imageUrl} alt="avatar" />
          <div className='user-details-container' >
            <h1 className='user-name'>{name}</h1>
            <p className='user-description'>{role}</p>
          </div>
        </div>
      );
}

export default UserProfile;
