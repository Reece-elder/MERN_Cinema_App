const axios = require('axios')
const randomDate = require('random-datetime')

const getFilmData = async () => {
    film_ids = []
    const {data} = await axios.get("http://localhost:5005/film");
    data.forEach((film) => {
        film_ids.push(film._id)
    })
    return film_ids    
}

const getScreenData = async () => {
    screen_ids = []
    const {data} = await axios.get("http://localhost:5005/screen");
    data.forEach((screen) => {
        screen_ids.push(screen._id)
    })
    return screen_ids    
}

const makeData = async () => {
    let films = await getFilmData()
    let screens = await getScreenData()
    console.log(await films);
    console.log(await screens);
    console.log(randomDate());

    let showings = []

}

makeData()