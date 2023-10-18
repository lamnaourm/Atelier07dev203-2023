import React, { useState } from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {GiCancel} from 'react-icons/gi'

export default function ToDoListApp() {

    const [taches, setTaches] = useState([
        { description: 'Reviser HTML/CSS', completed: true },
        { description: 'Reviser mongodb', completed: false },
        { description: 'Reviser Javascript', completed: true },
    ])

    return (
        <div className='todolist'>
            {taches.map((t, index) => 
                <div key={index} className='tache'>
                    <h3>{t.description}</h3>
                    {
                        t.completed ? <AiOutlineCheck /> : <GiCancel />
                    }

                </div>
                )}        
        </div>
    )
}
