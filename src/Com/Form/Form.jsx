export default function Form({onAdd}){

    const handleSubmit =(event)=> {
        event.preventDefault();
        onAdd({
            id: Date.now(),
            text: event.target.elements.text.value


        })
        event.target.reset();
    }
    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="text"/>
            <button type="submit">Add task</button>
            </form>
    );
}