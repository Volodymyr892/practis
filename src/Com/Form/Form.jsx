export default function Form({onSearch}){

        const handleSubmit = (evt) => {
            evt.preventDefault();
            const form = evt.target;
            const topic = form.elements.topic.value;
            if (topic.trim() ===""){
                alert("Please enter search term!")
                return;
            }
            onSearch(topic);
            form.reset();
          };
        
          return (
            <form onSubmit={handleSubmit}>
              <input type="text" name="topic" placeholder="Search articles..." />
              <button>Search</button>
            </form>
          );
}