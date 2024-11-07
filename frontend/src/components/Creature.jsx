import PropTypes from "prop-types";
import './Creature.css'
import Paths from "../util/Paths.js";

Creature.propTypes = {
  creature: PropTypes.object
}

function Creature(props) {
  return (
    <svg className="creature-graphic" width="100%" height="100%" viewBox="-10 0 120 120">
      {props.creature.tail &&
        <path d={Paths.tail} transform="scale(0.5, 0.5) translate(100, 130)" fill={props.creature.bodyColor} stroke="black" strokeWidth="1"/>}
      <g className="body" stroke="black" strokeWidth="1">
        <path d={Paths.leftArm} transform="scale(0.5, 0.5) translate(55, 100) rotate(45)"
              fill={props.creature.bodyColor}/>
        <path d={Paths.rightArm} transform="scale(0.5, 0.5) translate(145, 100) rotate(-45)"
              fill={props.creature.bodyColor}/>
        <path d={Paths.leftLeg} transform="scale(0.5, 0.5) translate(100, 140) rotate(5)"
              fill={props.creature.bodyColor}/>
        <path d={Paths.rightLeg} transform="scale(0.5, 0.5) translate(100, 140) rotate(-5)"
              fill={props.creature.bodyColor}/>
        {props.creature.bodyShape === "CIRCLE" && <circle cx="50" cy="50" r="50" fill={props.creature.bodyColor}/>}
        {props.creature.bodyShape === "SQUARE" &&
          <rect x="5" y="5" width="90" height="90" fill={props.creature.bodyColor}/>}
        {props.creature.bodyShape === "BUMPY" && <path d={Paths.bumpy} fill={props.creature.bodyColor}/>}
        {props.creature.bodyShape === "SPIKY" && <path d={Paths.spiky} fill={props.creature.bodyColor}/>}
        {props.creature.bodyShape === "STAR" && <path d={Paths.star} fill={props.creature.bodyColor}/>}
        {props.creature.bodyShape === "HEART" && <path d={Paths.heart} fill={props.creature.bodyColor}/>}
        {props.creature.bodyShape === "PENTAGON" && <path d={Paths.pentagon} fill={props.creature.bodyColor}/>}
        {props.creature.bodyShape === "HEXAGON" && <path d={Paths.hexagon} fill={props.creature.bodyColor}/>}
        {props.creature.bodyShape === "OCTAGON" && <path d={Paths.octagon} fill={props.creature.bodyColor}/>}
      </g>
      <g className="eyes" stroke="black" strokeWidth="1">
        {props.creature.eyeShape === "CIRCLE" &&
          <circle cx="30" cy="40" r="5" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "CIRCLE" &&
          <circle cx="70" cy="40" r="5" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "SQUARE" &&
          <rect x="25" y="35" width="10" height="10" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "SQUARE" &&
          <rect x="65" y="35" width="10" height="10" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "BUMPY" &&
          <path d={Paths.bumpy} transform="scale(0.1, 0.1) translate(250, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "BUMPY" &&
          <path d={Paths.bumpy} transform="scale(0.1, 0.1) translate(650, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "SPIKY" &&
          <path d={Paths.spiky} transform="scale(0.1, 0.1) translate(250, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "SPIKY" &&
          <path d={Paths.spiky} transform="scale(0.1, 0.1) translate(650, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "STAR" &&
          <path d={Paths.star} transform="scale(0.1, 0.1) translate(250, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "STAR" &&
          <path d={Paths.star} transform="scale(0.1, 0.1) translate(650, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "HEART" &&
          <path d={Paths.heart} transform="scale(0.1, 0.1) translate(250, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "HEART" &&
          <path d={Paths.heart} transform="scale(0.1, 0.1) translate(650, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "PENTAGON" &&
          <path d={Paths.pentagon} transform="scale(0.1, 0.1) translate(250, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "PENTAGON" &&
          <path d={Paths.pentagon} transform="scale(0.1, 0.1) translate(650, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "PENTAGON" &&
          <path d={Paths.pentagon} transform="scale(0.1, 0.1) translate(250, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "PENTAGON" &&
          <path d={Paths.pentagon} transform="scale(0.1, 0.1) translate(650, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "HEXAGON" &&
          <path d={Paths.hexagon} transform="scale(0.1, 0.1) translate(250, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "HEXAGON" &&
          <path d={Paths.hexagon} transform="scale(0.1, 0.1) translate(650, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "OCTAGON" &&
          <path d={Paths.octagon} transform="scale(0.1, 0.1) translate(250, 350)" fill={props.creature.eyeColor}/>}
        {props.creature.eyeShape === "OCTAGON" &&
          <path d={Paths.octagon} transform="scale(0.1, 0.1) translate(650, 350)" fill={props.creature.eyeColor}/>}
      </g>
      {props.creature.antenna &&
        <path d={Paths.leftAntenna} transform="scale(0.5, 0.5) translate(95, 10)" fill="none" stroke="black" strokeWidth="2"/>}
      {props.creature.antenna &&
        <path d={Paths.rightAntenna} transform="scale(0.5, 0.5) translate(105, 10)" fill="none" stroke="black" strokeWidth="2"/>}
      {props.creature.horns &&
        <path d={Paths.leftHorn} transform="scale(0.33, 0.33) translate(75, 0)" fill="#e0ddd7" stroke="black" strokeWidth="1"/>}
      {props.creature.horns &&
        <path d={Paths.rightHorn} transform="scale(0.33, 0.33) translate(225, 0)" fill="#e0ddd7" stroke="black" strokeWidth="1"/>}
      {props.creature.ears &&
        <path d={Paths.leftEar} transform="scale(0.25, 0.25) translate(80, 100)" fill={props.creature.bodyColor} stroke="black" strokeWidth="1"/>}
      {props.creature.ears &&
        <path d={Paths.rightEar} transform="scale(0.25, 0.25) translate(320, 100)" fill={props.creature.bodyColor} stroke="black" strokeWidth="1"/>}
      {props.creature.proboscis &&
        <path d={Paths.proboscis} transform="scale(0.5, 0.5) translate(100, 95)" fill={props.creature.bodyColor} stroke="black" strokeWidth="1"/>}
    </svg>
  )
}

export default Creature