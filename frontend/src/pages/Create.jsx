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

    const form = inputs;
    for (const element of document.getElementById("parts").children) {
      if (element.type === "checkbox") {
        const part = element.name;
        if (inputs[part] === "on")
          form[part] = "true";
        else
          form[part] = "false";
      }
    }

    if (Object.keys(newErrors).length === 0) {
      postCreature(form);
      navigate("/");
    }
  }

  const validateForm = () => {
    const errors = {};

    if (!inputs.name) errors.name = true;
    if (!inputs.bodyColor) errors.bodyColor = true;
    if (!inputs.bodyShape) errors.bodyShape = true;
    if (!inputs.eyeColor) errors.eyeColor = true;
    if (!inputs.eyeShape) errors.eyeShape = true;

    return errors;
  }

  return (
    <>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: {errors.name && <span className="error">*</span>}</label>
          <br/>
          <input type="text" id="name" name="name" onChange={handleChange}/>
        </div>

        <fieldset id="body-shape">
          <legend>Body Shape {errors.bodyShape && <span className="error">*</span>}</legend>
          <input type="radio" id="square-body" name="bodyShape" value="SQUARE" onChange={handleChange}/>
          <label htmlFor="square-body">Square</label>
          <input type="radio" id="circle-body" name="bodyShape" value="CIRCLE" onChange={handleChange}/>
          <label htmlFor="circle-body">Circle</label>
          <input type="radio" id="bumpy-body" name="bodyShape" value="BUMPY" onChange={handleChange}/>
          <label htmlFor="bumpy-body">Bumpy</label>
          <input type="radio" id="spiky-body" name="bodyShape" value="SPIKY" onChange={handleChange}/>
          <label htmlFor="spiky-body">Spiky</label>
          <input type="radio" id="star-body" name="bodyShape" value="STAR" onChange={handleChange}/>
          <label htmlFor="star-body">Star</label>
          <input type="radio" id="heart-body" name="bodyShape" value="HEART" onChange={handleChange}/>
          <label htmlFor="heart-body">Heart</label>
          <input type="radio" id="pentagon-body" name="bodyShape" value="PENTAGON" onChange={handleChange}/>
          <label htmlFor="pentagon-body">Pentagon</label>
          <input type="radio" id="hexagon-body" name="bodyShape" value="HEXAGON" onChange={handleChange}/>
          <label htmlFor="hexagon-body">Hexagon</label>
          <input type="radio" id="octagon-body" name="bodyShape" value="OCTAGON" onChange={handleChange}/>
          <label htmlFor="octagon-body">Octagon</label>
        </fieldset>

        <fieldset id="body-color">
          <legend>Body Color {errors.bodyColor && <span className="error">*</span>}</legend>
          <input type="radio" id="red-body" name="bodyColor" value="RED" onChange={handleChange}/>
          <label htmlFor="red-body">Red</label>
          <input type="radio" id="green-body" name="bodyColor" value="GREEN" onChange={handleChange}/>
          <label htmlFor="green-body">Green</label>
          <input type="radio" id="blue-body" name="bodyColor" value="BLUE" onChange={handleChange}/>
          <label htmlFor="blue-body">Blue</label>
        </fieldset>

        <fieldset id="eye-shape">
          <legend>Eye Shape {errors.eyeShape && <span className="error">*</span>}</legend>
          <input type="radio" id="square-eyes" name="eyeShape" value="SQUARE" onChange={handleChange}/>
          <label htmlFor="square-eyes">Square</label>
          <input type="radio" id="circle-eyes" name="eyeShape" value="CIRCLE" onChange={handleChange}/>
          <label htmlFor="circle-eyes">Circle</label>
          <input type="radio" id="bumpy-eyes" name="eyeShape" value="BUMPY" onChange={handleChange}/>
          <label htmlFor="bumpy-eyes">Bumpy</label>
          <input type="radio" id="spiky-eyes" name="eyeShape" value="SPIKY" onChange={handleChange}/>
          <label htmlFor="spiky-eyes">Spiky</label>
          <input type="radio" id="star-eyes" name="eyeShape" value="STAR" onChange={handleChange}/>
          <label htmlFor="star-eyes">Star</label>
          <input type="radio" id="heart-eyes" name="eyeShape" value="HEART" onChange={handleChange}/>
          <label htmlFor="heart-eyes">Heart</label>
          <input type="radio" id="pentagon-eyes" name="eyeShape" value="PENTAGON" onChange={handleChange}/>
          <label htmlFor="pentagon-eyes">Pentagon</label>
          <input type="radio" id="hexagon-eyes" name="eyeShape" value="HEXAGON" onChange={handleChange}/>
          <label htmlFor="hexagon-eyes">Hexagon</label>
          <input type="radio" id="octagon-eyes" name="eyeShape" value="OCTAGON" onChange={handleChange}/>
          <label htmlFor="octagon-eyes">Octagon</label>
        </fieldset>

        <fieldset id="eye-color">
          <legend>Eye Color {errors.eyeColor && <span className="error">*</span>}</legend>
          <input type="radio" id="red-eyes" name="eyeColor" value="RED" onChange={handleChange}/>
          <label htmlFor="red-eyes">Red</label>
          <input type="radio" id="green-eyes" name="eyeColor" value="GREEN" onChange={handleChange}/>
          <label htmlFor="green-eyes">Green</label>
          <input type="radio" id="blue-eyes" name="eyeColor" value="BLUE" onChange={handleChange}/>
          <label htmlFor="blue-eyes">Blue</label>
        </fieldset>

        <fieldset id="parts">
          <legend>Parts</legend>
          <input type="checkbox" id="antenna" name="antenna" onChange={handleChange}/>
          <label htmlFor="antenna">Antenna</label>
          <input type="checkbox" id="horns" name="horns" onChange={handleChange}/>
          <label htmlFor="horns">Horns</label>
          <input type="checkbox" id="tail" name="tail" onChange={handleChange}/>
          <label htmlFor="tail">Tail</label>
          <input type="checkbox" id="ears" name="ears" onChange={handleChange}/>
          <label htmlFor="ears">Ears</label>
          <input type="checkbox" id="proboscis" name="proboscis" onChange={handleChange}/>
          <label htmlFor="proboscis">Proboscis</label>
        </fieldset>

        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export default Create