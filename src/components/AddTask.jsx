import React from 'react'
import { GrAddCircle } from 'react-icons/gr'


export default function AddTask(props) {
    return (
        <div className='add'>
            <input type="text" name="tache" id="tache" placeholder='Saisir une description ...' value={props.tache} onChange={props.handleChange} />
            <button onClick={props.addTache}><GrAddCircle /> Add</button>
        </div>
    )
}
