const [Complete ,setComplete] = useState(false);
const handleComplete = ()=> {
    setComplete(
        current => !current
    )
}

/*
const Completee = (inx)=>{
   handleTodo( 
    ()=>{ return (todos.map((todo,i) => {
        if(todos[i] === inx){
            return {
                ...todo , isComplete:!todo.isComplete
            }
        }
        else{
            return todo;
        }}))})}
*/


        const Completee = (inx)=>{
            handleTodo( 
             todos.map((todo,i) => {
                 if(todos[i] === inx){
                     return {
                         ...todo , isComplete:true
                     }
                 }
                 else{
                     return todo;
                 }}))}        

const handleDelete = (inx) =>{
handleTodo(
 todos.filter((todo,i) => todos[i] !== inx)
    ) }        

