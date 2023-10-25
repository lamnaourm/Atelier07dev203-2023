import React from 'react'

export default function StatsTasks(props) {
    return (
        <div className='stats'>
            <ul>
                <li>Nombre totale : {props.taches.length}</li>
                <li>Nombre terminé : {props.taches.filter(t => t.completed).length}</li>
                <li>Nombre En cours : {props.taches.filter(t => !t.completed).length}</li>
            </ul>
        </div>
    )
}
