import React, { useState } from 'react';
import { userHistory } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Form = () => {
    let [category, setCategory] = useState("")
    let [id, setId] = useState("")
    const history = useHistory();
    const search = (e) =>{
        e.preventDefault();
        history.push(`/${category}/${id}`)
    }
    return (
        
        <div>
            <form action="" className='d-flex justify-content-around align-items-center' onSubmit={search}>
                <div className="form-group">
                    <label htmlFor="">Search For:</label>
                    <select onChange={(e)=>{setCategory(e.target.value)}} name="" id="" className="form-select">
                        <option value="defaultValue" disabled selected>Choose a category</option>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="starships">Starships</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID</label>
                    <input type="number" className='form-control' onChange={(e)=>{setId(e.target.value)}}/>
                </div>
                <input type="submit" value="search"/>
            </form>
        <div>

        </div>
        </div>
    )
}
export default Form;