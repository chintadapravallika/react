import './index.css'

const UserProfile = (props) => {
    const {userDetails,deleteUser}=props
    const {imageUrl,name,role,uniqueNo}=userDetails
    const onDelete=()=>{
      deleteUser(uniqueNo)
    };

    return(
        <div className="user-card-container">
          <img className='avatar' src={imageUrl} alt="avatar" />
          <div className='user-details-container' >
            <h1 className='user-name'>{name}</h1>
            <p className='user-description'>{role}</p>
          </div>

          <button type ="button" onClick={onDelete} className='button1'>Delete</button>
      
        </div>
      );
}

export default UserProfile;
