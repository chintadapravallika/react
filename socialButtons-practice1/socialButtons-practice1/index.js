const Button = props => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>
};
const element = (
  <div className="social">
    <div className="container">
      <div>
        <h1 className="heading">Social Buttons</h1>
        <div className="button-container">
          <Button buttonText="Like" className="button1" />
          <Button buttonText="Comment" className="button2" />
          <Button buttonText="Share" className="button3" />
        </div>
      </div>
    </div>
  </div>
  //  Write your code here.
)

ReactDOM.render(element, document.getElementById('root'))
