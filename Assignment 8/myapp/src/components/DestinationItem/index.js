import './index.css'


const DestinationItem = (props) => {
    const { destinationsList } = props;
    const { id, name, imgUrl } = destinationsList;
    console.log(id);
  
    return(
      <div className="main">
          <img height='300px' width='350px' src={imgUrl} alt ='avatar'/>
          <div className="sub">
              <h1 className="name">{name}</h1>
              
          </div>
      </div>
    );
}
export default DestinationItem;