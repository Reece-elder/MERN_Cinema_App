import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import FilmLite from "./FilmLite";

const FilmList = () => {

    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const getFilms = async () => {
        const data = await axios.get("http://localhost:5005/film");
        await setFilms(data.data);
        setLoaded(true)
    }

    useEffect(() => {

        getFilms();
    
    },[])

    if(!loaded){
        return <h2> Data not here..</h2>
    } else {
        return (
            <>
                <h4> Film List </h4>

                {films.map((item) => <FilmLite data={item} key={item._id}/>)}
            </>
        )
    }

}
 
export default FilmList;