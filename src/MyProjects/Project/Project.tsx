import React from 'react';
import style from './Project.module.scss'
import Button from "../../common/Button/Button";

type propsType = {
    title: string
    description: string
    style?: {
        color: string,
        backgroundImage: string
    }
}

function Project(props: propsType) {
    return (
        <div className={style.project}>
            <div className={style.projectsImage} style={props.style}>
                <Button title={'Look'}/>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default Project