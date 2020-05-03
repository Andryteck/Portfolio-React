import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'


function Main() {
        return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
        <div className={style.text}>
            <span>Hi there</span>
            <h1>I am &nbsp;
                <span>Andrei Kulik</span>
            </h1>
            <p>
                A&nbsp;
                <span>Frontend developer</span>
                <span>|</span>
            </p>
        </div>
            <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;