import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import { GrAddCircle } from 'react-icons/gr'

export default function ToDoListApp() {

    const [taches, setTaches] = useState([
        { description: 'Reviser HTML/CSS', completed: true },
        { description: 'Reviser mongodb', completed: false },
        { description: 'Reviser Javascript', completed: true },
    ])
    const [tache, setTache] = useState('')

    const addTache = () => {
        if (tache.trim() === '') {
            alert('tache vide');
            return;
        }

        if (taches.filter(t => t.description.toLowerCase() === tache.toLowerCase()).length > 0) {
            alert('tache existe deja');
            return;
        }

        setTaches(t => [...t, { description: tache, completed: false }])
        setTache('')
        document.getElementById('tache').focus()
    }

    const deleteAll = () => {
        setTaches([]);
    }

    const deleteTermine = () => {
        setTaches(taches => taches.filter(t => !t.completed));
    }

    const modifAllTermine = () => {
        setTaches(taches => taches.map(t => ({...t,completed:true})));
    }

    const modifAllEncours = () => {
        setTaches(taches => taches.map(t => ({...t,completed:false})));
    }

    const deleteEncours = () => {
        setTaches(taches => taches.filter(t => t.completed));
    }

    return (
        <div className='todolist'>
            <div className='action'>
                <div className='add'>
                    <input type="text" name="tache" id="tache" placeholder='Saisir une description ...' value={tache} onChange={(e) => setTache(e.target.value)} />
                    <button onClick={addTache}><GrAddCircle /> Add</button>
                </div>
                <fieldset>
                    <legend>Suppression</legend>
                    <button onClick={deleteAll}>Tous</button>
                    <button onClick={deleteTermine}>Terminé</button>
                    <button onClick={deleteEncours}>En cours</button>
                </fieldset>
                <fieldset>
                    <legend>Modification</legend>
                    <button onClick={modifAllTermine}>Tous Terminé</button>
                    <button onClick={modifAllEncours}>Tous En cours</button>
                </fieldset>
            </div>
            <div>
                <div className='stats'>
                    <ul>
                        <li>Nombre totale : {taches.length}</li>
                        <li>Nombre terminé : {taches.filter(t => t.completed).length}</li>
                        <li>Nombre En cours : {taches.filter(t => !t.completed).length}</li>
                    </ul>
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
        </div>
    )
}
