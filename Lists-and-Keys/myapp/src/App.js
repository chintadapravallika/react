import UserProfile from "./components/UserProfile";
import {Component} from 'react';
const userDetails = [
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

class  App extends Component { 
  state ={
    searchInput:'',userDetailsList:userDetails
  }
  onChangesearchInput=(event)=>{
    this.setState({searchInput:event.target.value})
  }
  deleteUser=(uniqueNo)=>{
    const {userDetailsList}=this.state;
    const filterUserList=userDetailsList.filter((eachItem)=>{
      return eachItem.uniqueNo !== uniqueNo;
    });
    this.setState({userDetailsList:filterUserList})
  }
  render(){
    const {searchInput,userDetailsList}=this.state;
     const searchResult=userDetailsList.filter((eachItem)=>{
      return  eachItem.name.includes(searchInput);
  });
return(
  
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <input type = "text" 
    value={searchInput}
     onChange={this.onChangesearchInput}/>
    <ul>
      {searchResult.map((eachItem)=> (
        <UserProfile key={eachItem.uniqueNo} userDetails={eachItem} 
        deleteUser={this.deleteUser}/>
      ))}
    </ul>
  </div>
)
}}

export default App;
