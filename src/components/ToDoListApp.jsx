import React, { useState } from 'react'
import AddTask from './AddTask'
import RemoveTasks from './RemoveTasks'
import ModifTasks from './ModifTasks'
import StatsTasks from './StatsTasks'
import ListTasks from './ListTasks'

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

    const deletetache = (ind) => {
        setTaches(taches => taches.filter((t, index) => ind !== index));
    }

    const modifTache = (ind) => {
        setTaches(taches => taches.map((t, index) => ind!==index ?t:{...t, completed:!t.completed}));

    }

    return (
        <div className='todolist'>
            <div className='action'>
                <AddTask tache={tache} handleChange={(e) => setTache(e.target.value)} addTache={addTache}/>
                <RemoveTasks deleteAll={deleteAll} deleteTermine={deleteTermine} deleteEncours={deleteEncours}/>
                <ModifTasks modifAllTermine={modifAllTermine} modifAllEncours={modifAllEncours}/>
            </div>
            <div>
                <StatsTasks taches={taches} />
                <ListTasks taches={taches} modifTache={modifTache} deletetache={deletetache} />
            </div>
        </div>
    )
}
