import './List.css'
import {useEffect, useState} from "react";
import {getCreatures} from "../api/CreatureService.js";
import Creature from "../components/Creature.jsx";
import {Link, useSearchParams} from "react-router-dom";

function List() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  let page = Number(searchParams.get("page"));

  const getAllCreatures = async (page=1, size=60) => {
    try {
      const {data} = await getCreatures(page, size);
      setData(data);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCreatures(page);
  }, [page]);

  return (
    <>
      <div className="creature-grid">
        {data.map((creature) => {
          return <Link className="item" key={creature.id} to={`/creature/${creature.id}`}>
            <Creature creature={creature}/>
            <p className="name">{creature.name}</p>
          </Link>
        })}
      </div>
      <nav>
        <ul className="pages">
          { page > 1 && <li><Link to={`/creatures?page=${page - 1}`}>Previous</Link></li> }
          <li>{page}</li>
          <li><Link to={`/creatures?page=${page + 1}`}>Next</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default List
