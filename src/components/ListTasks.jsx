import React from 'react'
import Task from './Task'

export default function ListTasks(props) {
    return (
        <div className='taches'>
            {props.taches.map((t, index) =>
                <Task key={index} tache={t} index={index} modifTache={props.modifTache} deletetache={props.deletetache}/>
            )}
        </div>
    )
}
