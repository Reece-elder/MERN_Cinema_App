import {Link} from "react-router-dom";

const FilmLite = ({data}) => {
    const {title, image_url, _id} = data;

    const specificPage = () => {
        
    }

    return ( 
        <>
            <Link to={`/films/${_id}`}>
                <img src="https://picsum.photos/200/300" alt={title}/>
                <h3> Movie Title: {title} </h3>
            </Link>
        </>
     );
}
 
export default FilmLite;