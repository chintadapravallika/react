import UserProfile from "./components/UserProfile";

const userDetailsList = [
  {
    uniqueNo:1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Rajesh",
    role: "Software Developer",
  },
  {
    uniqueNo:2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Swamy",
    role: "Software Developer",
  },
  {
    uniqueNo:3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Sriram",
    role: "Software Developer",
  },
  {
    uniqueNo:4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Prasanth",
    role: "Software Developer",
  }
];

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map((eachItem)=> (
        <UserProfile key={eachItem.uniqueNo} userDetails={eachItem} />
      ))}
    </ul>
  </div>
)

export default App;
