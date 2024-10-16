import UserProfile from "./components/UserProfile";
import './App.css';

const detailsList=[
  {
    No:1,
    imgUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png", 
    name:"venu",
    role:"software Developer"
  },
  {
    No:2,
    imgUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"Rohit",
    role:"Developer",
  },
  {
  No:3,
  imgUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Kiran",
  role:"Employee",
  },
  {
    No:4,
    imgUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"Manasa",
    role:"Topper",
  }, 
];

const App = () =>(
  <div className="container">
    <h1 className="heading">Users List</h1>
    <ul>
       {detailsList.map((eachItem)=>(
        <UserProfile key={eachItem.No} details={eachItem}/>
       ))}
    </ul>
  </div>
)
 export default App;