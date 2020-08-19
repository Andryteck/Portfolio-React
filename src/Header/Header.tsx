import React from 'react';
import style from './Header.module.css'
import Nav from "../nav/Nav";


function Header(props: any) {

    return (
        <div className={style.header}>
            <Nav skills={props.skills}
                 main={props.main}
                 projects={props.projects}
                 contacts={props.contacts}/>
        </div>
    );
}

export default Header;