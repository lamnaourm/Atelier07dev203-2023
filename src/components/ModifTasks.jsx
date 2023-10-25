import React from 'react'

export default function ModifTasks(props) {
    return (
        <fieldset>
            <legend>Modification</legend>
            <button onClick={props.modifAllTermine}>Tous Terminé</button>
            <button onClick={props.modifAllEncours}>Tous En cours</button>
        </fieldset>
    )
}
