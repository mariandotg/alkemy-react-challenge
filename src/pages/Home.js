import { useContext } from "react";
import { AuthContext } from "../App";

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
    <div>Home {user === true ? <p>CONTEXTO ACTIVO</p> : <p>xd</p>}</div>
  )
}

export default Home