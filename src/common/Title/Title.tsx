import style from "../../MyProjects/Projects.module.css";
import styleTitle from '../Title/Title.module.css'
import React from "react";


type PropsType = {
    title: string
}

function Title(props: PropsType) {
    return (
        <div>
            <h2 className={styleTitle.title}>{props.title}</h2>
            <div className={style.moduleLine}></div>
        </div>
    )
}

export default Title