import './Single.css'
import {useParams} from "react-router-dom";
import Creature from "../components/Creature.jsx";
import {useEffect, useState} from "react";
import {getCreature} from "../api/CreatureService.js";

function Single() {
  const [creature, setCreature] = useState({});
  const { id } = useParams();

  const fetchCreature = async (id) => {
    try {
      const {data} = await getCreature(id);
      setCreature(data[0]);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCreature(id);
  }, [id]);

  return (
    <>
      {creature && <div className="single">
        <h1 className="name">{creature.name}</h1>
        <Creature key={creature.id} creature={creature}/>
      </div>}
    </>
  )
}

export default Single