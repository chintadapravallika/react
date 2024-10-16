// Write your code here.
import './index.css';
const CardItem = (props) => {
  const { details, key } = props;
  const { imgUrl, title, description, className } = details;
  console.log(key);
  return (
    <div className={`common ${className}`}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src={imgUrl} className="image" alt="photo" />
    </div>
  )
}
export default CardItem;