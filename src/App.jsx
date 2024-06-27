

export default function App() {

  const handelSubmit = (event) => {
    event.preventDefault()

  const form = event.target;
  const { login, password} = form.elements; 
  console.log("🚀 ~ handelSubmit ~ login:", login, password)
  
  console.log(login.value, password.value)
  form.reset();
  }
  return (
    <>
     <form onSubmit={handelSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
    </>
  )
}