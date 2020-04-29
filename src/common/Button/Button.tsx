import React from 'react';
import style from './Button.module.css'

type ButtonType = {
   title: string
}

function Button(props:ButtonType) {
    return (
<button className={style.button}>{props.title}</button>
    )
}

export default Button

