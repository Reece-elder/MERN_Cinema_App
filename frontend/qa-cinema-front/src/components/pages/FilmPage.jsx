import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Film from "../Film";

const FilmPage = () => {

    let {id} = useParams();

    const [film, setFilm] = useState([])
    const [loaded, setLoaded] = useState(false);

    const getFilm = async () => {
        const data = await axios.get(`http://localhost:5005/film/${id}`);
        await setFilm(data.data);
        setLoaded(true)
    }

    useEffect(() => {

        getFilm();
    
    },[])

    if(!loaded){
        return <h2> Data not here..</h2>
    } else {
        return (
            <>
                <Film data={film}/>
            </>
        )
    }
}
 
export default FilmPage;