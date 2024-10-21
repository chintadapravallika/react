import './index.css'
const TodoItem = (props)=>{
    const{ initialTodosList,deleteUser}=props;
    const{id,title}=initialTodosList;
    const onDelete=()=>{
      deleteUser(id)
    };

    return(
        <div className='main1'>
         <h1 className='heading1'>{title}</h1>
         <button type='button' onClick={onDelete} className='button'>Delete</button>
        </div>
    )
}
export default TodoItem;