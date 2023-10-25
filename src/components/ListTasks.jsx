import React from 'react'
import { AiOutlineCheck, AiTwotoneEdit } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import { BsFillTrashFill } from 'react-icons/bs'

export default function ListTasks(props) {
    return (
        <div className='taches'>
            {props.taches.map((t, index) =>
                <div key={index} className='tache'>
                    <h3>{
                        t.completed ? <AiOutlineCheck /> : <GiCancel />
                    } {t.description}</h3>
                    <div>
                        <button onClick={() => props.modifTache(index)}><AiTwotoneEdit /> </button>
                        <button onClick={() => props.deletetache(index)}><BsFillTrashFill /> </button>
                    </div>
                </div>
            )}
        </div>
    )
}
