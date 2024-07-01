export default function Task({ data:{id, text},  onDelete}){
    return(
<>
<p>{text}</p>
<button onClick={()=>  onDelete(id)}>Delete</button>
</>
    )
}