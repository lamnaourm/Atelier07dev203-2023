import React from 'react'
import { AiOutlineCheck, AiTwotoneEdit } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import { BsFillTrashFill } from 'react-icons/bs'

export default function Task(props) {
    return (
        <div className='tache'>
            <h3>{
                props.tache.completed ? <AiOutlineCheck /> : <GiCancel />
            } {props.tache.description}</h3>
            <div>
                <button onClick={() => props.modifTache(props.index)}><AiTwotoneEdit /> </button>
                <button onClick={() => props.deletetache(props.index)}><BsFillTrashFill /> </button>
            </div>
        </div>
    )
}
