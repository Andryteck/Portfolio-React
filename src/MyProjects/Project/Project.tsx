import React from 'react';
import style from './Project.module.css'
import Button from "../../common/Button/Button";

type propsType = {
    title: string
    description: string
}

function Project(props: propsType) {
    return (
        <div className={style.project}>
            <div className={style.projectsImage}>
                <Button title={'Look'}/>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}

export default Project