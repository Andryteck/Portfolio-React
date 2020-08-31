import React from 'react';
import style from './RegularButton.module.scss'

type ButtonType = {
    title: string
    link?: string
}

function RegularButton(props: ButtonType) {
    return (
        <button className={style.button}>{props.title}</button>
    )
}

export default RegularButton

