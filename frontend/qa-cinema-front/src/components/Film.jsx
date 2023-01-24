import {Link} from "react-router-dom";

const Film = ({data}) => {
    const {title, runtime, genre, rating, cast, description, image_url} = data;
    return ( 
        <>
            
            <h3> Movie Title: {title} </h3>
            <h3> Movie Runtime: {runtime} </h3>
            <h3> Movie genre: {genre} </h3>
            <h3> Movie rating: {rating} </h3>
            {
                cast.map((item) => {
                    return (
                        <p key={item.id}> {item} </p>
                    )
                })
            }
            <h3> Movie description: {description} </h3>
            <img src={image_url} alt={title}/>
            <br></br>
            <br></br>
            <Link to="/films"> Back to Films! </Link>
        </>
     );
}
 
export default Film;