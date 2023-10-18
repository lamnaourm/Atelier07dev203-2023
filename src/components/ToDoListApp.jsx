import React, { useState } from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {GiCancel} from 'react-icons/gi'
import {GrAddCircle} from 'react-icons/gr'

export default function ToDoListApp() {

    const [taches, setTaches] = useState([
        { description: 'Reviser HTML/CSS', completed: true },
        { description: 'Reviser mongodb', completed: false },
        { description: 'Reviser Javascript', completed: true },
    ])
    const [tache, setTache] = useState('')

    const addTache = () => {
        setTaches(t => [...t, {description: tache, completed:false}])
    }

    return (
        <div className='todolist'>
            <div className='add'>
                <input type="text" name="tache" id="tache" placeholder='Saisir une description ...' value={tache} onChange={(e) => setTache(e.target.value)}/>
                <button onClick={addTache}><GrAddCircle /> Add</button>
            </div>
            <div className='taches'>
                {taches.map((t, index) => 
                    <div key={index} className='tache'>
                        <h3>{t.description}</h3>
                        {
                            t.completed ? <AiOutlineCheck /> : <GiCancel />
                        }
                    </div>
                )}        
            </div>
        </div>
    )
}
