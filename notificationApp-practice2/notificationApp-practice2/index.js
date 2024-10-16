const Notification = props => {
  //  Write your code here.
  const{className,content}=props;
  return <div className={className}>{content}</div>
};

const element = (
  //  Write your code here.  
  <div className="container">
    <div className="heading">
      <h1>Notification</h1>
      <div className="box">
        <div  className="info" >
        <img  className="kk" width="25" height="25" src="https://img.icons8.com/ios/50/ok--v1.png" alt="ok--v1"/>
        <Notification content="Information Message"/>
        </div>
        <div className="success">
        <img  className="kk" width="25" height="25" src="https://img.icons8.com/ios/50/ok--v1.png" alt="ok--v1"/>
        <Notification content="Success Message" />
        </div>
        <div className="warning">
        <img className="kk" width="25" height="25" src="https://img.icons8.com/carbon-copy/100/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
        <Notification content="Warning Message"/>
        </div>
        <div className="error">
        <img  className="kk" width="25" height="25" src="https://img.icons8.com/ios/50/box-important--v1.png" alt="box-important--v1"/>
        <Notification content="Error Message" />
        </div>
      </div>
    </div>
  </div> 
)

ReactDOM.render(element, document.getElementById('root'))
