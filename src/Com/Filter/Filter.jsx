export default function Filter({value,onFilter}){
    return(
<>
<p>Serch by name</p>
<input type="text" value={value} onChange={event => onFilter(event.target.value)}/>
</>
    );
}