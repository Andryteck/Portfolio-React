import React from 'react';
import style from './ProjectButton.module.scss'

type ButtonType = {
    title: string
    link?: string
}

function ProjectButton(props: ButtonType) {
    return (
            <button className={style.button}>{props.title}</button>
    )
}

export default ProjectButton

