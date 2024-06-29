import { useState } from "react"

export default function LoginForm (){
  const [values, setValues] = useState({
   login: "",
   password: "" 
  })

  const handleChange =(event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  const handleSumit = (event) => {
    event.preventDefault()
    console.log(values);

    setValues({
      login: "",
      password: ""
    });
    };
  
  return (
    <>
     <form onSubmit={handleSumit}>
      <input 
      type="text" 
      name="login" 
      value={values.login}
      onChange={handleChange}
      />
      <input 
      type="password" 
      name="password" 
      value={values.password}
      onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
    </>
  )}
