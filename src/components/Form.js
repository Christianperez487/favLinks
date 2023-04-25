
import { useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState("")
  const [URL, setURL] = useState("")

  const handleChange = (event) => {
    const {name, val}= event.target;

    if (name === 'name') setName(val);

    if (URL === 'URL') setURL(val);
    
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

   props.handleSubmit({name, URL})
   setName('');
   setURL('');


  }

  return (
    <form onSubmit={onFormSubmit}>

      <label>Name
        <input id="name" 
           type="text" 
           onChange={handleChange}
           />
      </label>
      <label> 
        URL
        <input 
        id="URL"
        type="text"
        value={URL}
        onChange={handleChange}
        />
      </label>
      <input type="submit"
      value="submit"  
      onClick={onFormSubmit}/>
    </form>
  )
}

export default Form
