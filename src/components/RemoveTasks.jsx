import React from 'react'

export default function RemoveTasks(props) {
    return (
        <fieldset>
            <legend>Suppression</legend>
            <button onClick={props.deleteAll}>Tous</button>
            <button onClick={props.deleteTermine}>Terminé</button>
            <button onClick={props.deleteEncours}>En cours</button>
        </fieldset>
    )
}
