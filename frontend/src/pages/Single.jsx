import './Single.css'
import {Link, useParams} from "react-router-dom";
import Creature from "../components/Creature.jsx";
import {useEffect, useState} from "react";
import {getCreature} from "../api/CreatureService.js";

function Single() {
  const [creature, setCreature] = useState({});
  const { id } = useParams();

  const fetchCreature = async (id) => {
    try {
      const {data} = await getCreature(id);
      console.log(data);
      setCreature(data[0]);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCreature(id);
  }, [id]);

  return (
    <div className="single">
      {creature && <Creature key={creature.id} creature={creature}/>}
    </div>
  )
}

export default Single