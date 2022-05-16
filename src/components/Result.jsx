import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const Result = () => {
    let iserror = ""
    let [error, setError] = useState(false);
    let [detail, setDetail] = useState({})
    let {category, id} = useParams()
    console.log(category, id)
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{
            console.log("response---->", response)
            setDetail(response.data)
            
        })
        .catch(err=>{
            console.log(err);
            setError(true)
            }
        )
    }, [id, category])
    console.log(iserror)
    return(
        <>
        {
        error == false?
        <div>
        {
        category == "people"?
            <div>
            <h1>Name: {detail.name}</h1>
            <p>Height: {detail.height}</p>
            <p>Mass: {detail.mass}</p>
            <p>Hair Color: {detail.hair_color}</p>
            </div>: category == "films"?
            <div>
            <h1>Title: {detail.title}</h1>
            <p>Director: {detail.director}</p>
            <p>Opening Crawl: {detail.opening_crawl}</p>
            <p>Producer: {detail.producer}</p>
            </div>: category == "planets"?
            <div>
            <h1>Name: {detail.name}</h1>
            <p>Cilmate: {detail.climate}</p>
            <p>Population: {detail.population}</p>
            <p>Terrain: {detail.terrain}</p>
            </div>: category == "species"?
            <div>
            <h1>Name: {detail.name}</h1>
            <p>Classification: {detail.classification}</p>
            <p>Designation: {detail.designation}</p>
            <p>Average Height: {detail.average_height}</p>
            </div>: category == "vehicles"?
            <div>
            <h1>Name: {detail.name}</h1>
            <p>Model: {detail.model}</p>
            <p>Manufacturer: {detail.manufacturer}</p>
            <p>Cost: {detail.cost_in_credits}</p>
            </div>:
            <div>
            <h1>Name: {detail.name}</h1>
            <p>Model: {detail.model}</p>
            <p>Manufacturer: {detail.manufacturer}</p>
            <p>Hyperdrive Rating: {detail.hyperdrive_rating}</p>
            </div>
            
        }
        </div>:
        <div>
            <p>These are not the droids you are looking for.</p>
        </div>
        }
        </>
    )
}
export default Result;