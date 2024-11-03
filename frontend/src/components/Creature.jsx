import PropTypes from "prop-types";
import './Creature.css'

Creature.propTypes = {
  creature: PropTypes.object
}

function Creature(props) {
  return (
    <div className="creature">
      <svg className="graphic" width="100%" height="100%" viewBox="-5 -5 110 110">
        {props.creature.bodyShape === "CIRCLE" &&
          <circle cx="50" cy="50" r="50" fill={props.creature.bodyColor} />}
        {props.creature.bodyShape === "SQUARE" &&
          <rect x="0" y="0" width="100" height="100" fill={props.creature.bodyColor} />}
      </svg>
      <p className="name">{props.creature.name}</p>
    </div>
  )
}

export default Creature