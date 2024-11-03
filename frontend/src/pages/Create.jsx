import {useState} from "react";
import {postCreature} from "../api/CreatureService.js";
import './Create.css'
import {useNavigate} from "react-router-dom";

function Create() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      postCreature(inputs);
      navigate("/");
    }
  }

  const validateForm = () => {
    const errors = {};

    if (!inputs.name) errors.name = true;
    if (!inputs.bodyColor) errors.bodyColor = true;
    if (!inputs.bodyShape) errors.bodyShape = true;

    return errors;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: {errors.name && <span className="error">*</span>}</label>
        <br/>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <fieldset>
          <legend>Body Shape {errors.bodyShape && <span className="error">*</span>}</legend>
          <input type="radio" id="square" name="bodyShape" value="SQUARE" onChange={handleChange}/>
          <label htmlFor="square">Square</label>
          <input type="radio" id="circle" name="bodyShape" value="CIRCLE" onChange={handleChange}/>
          <label htmlFor="circle">Circle</label>
        </fieldset>

        <fieldset>
          <legend>Body Color {errors.bodyColor && <span className="error">*</span>}</legend>
          <input type="radio" id="red" name="bodyColor" value="RED" onChange={handleChange}/>
          <label htmlFor="red">Red</label>
          <input type="radio" id="green" name="bodyColor" value="GREEN" onChange={handleChange}/>
          <label htmlFor="green">Green</label>
          <input type="radio" id="blue" name="bodyColor" value="BLUE" onChange={handleChange}/>
          <label htmlFor="blue">Blue</label>
        </fieldset>

        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Create