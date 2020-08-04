import React, {FocusEventHandler, useState} from 'react';
import style from './Project.module.scss'
import Button from "../../common/Button/Button";

type propsType = {
    title: string
    description: string
    style?: {
        color: string,
        backgroundImage: string
    }
    social: any
    link: string

}

function Project(props: propsType) {

    return (
        <div className={style.project}>
            <a href={props.link}>
                <div className={style.projectsImage} style={props.style}>
                    <Button title={'look'}/>
                </div>
            </a>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    )
}

export default Project