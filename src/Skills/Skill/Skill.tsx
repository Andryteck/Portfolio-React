import React from 'react';
import style from './Skill.module.scss'
import styleContainer from '../common/styles/Container.module.css'

type propsType = {
    title: string
    description: string
    style?: {
        color: string,
        backgroundImage: string
        width: string
        height: string
    }
}

function Skill(props: propsType) {

    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <div style={props.style}></div>
            </div>
            <div className={style.skillInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default Skill

