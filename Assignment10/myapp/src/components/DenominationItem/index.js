import './index.css';

const DenominationItem =(props)=>{
    const {denomination,amountDecrease} = props;
    const {id,value}=denomination;
    
    const DecreaseAmount=(props)=>{
        amountDecrease(id)
    }
    return(
        <div className='main1'>
            <button  onClick={DecreaseAmount}>{value}</button>
        </div>
    )
}
export default DenominationItem;