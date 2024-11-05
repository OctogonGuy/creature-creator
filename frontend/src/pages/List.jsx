import './List.css'
import {useEffect, useState} from "react";
import {getCreatures} from "../api/CreatureService.js";
import Creature from "../components/Creature.jsx";
import {Link, useParams} from "react-router-dom";

function List() {
  const [data, setData] = useState([]);
  let { page } = useParams();
  page = Number(page);

  const getAllCreatures = async (page=0, size=60) => {
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
      <nav>
        <ul className="links">
          <li>
            <Link to={"/create"}>Create</Link>
          </li>
        </ul>
      </nav>
      <div className="creature-grid">
        {data.map((creature) => {
          return <Link key={creature.id} to={`/creature/${creature.id}`}><Creature creature={creature}/></Link>
        })}
      </div>
      <nav>
        <ul className="pages">
          { page > 0 && <li><Link to={`/${page - 1}`}>Previous</Link></li> }
          <li>{page}</li>
          <li><Link to={`/${page + 1}`}>Next</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default List
