import style from "../../MyProjects/Projects.module.scss";
import styleTitle from './Title.module.scss'
import React from "react";


type PropsType = {
    title: string
}

function Title(props: PropsType) {
    return (
        <div className={styleTitle.moduleHeader}>
            <h2 className={styleTitle.title}>{props.title}</h2>
            <div className={styleTitle.moduleLine}></div>
        </div>
    )
}

export default Title