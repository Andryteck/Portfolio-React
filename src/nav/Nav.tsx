import React from 'react';
import style from './Nav.module.css'


function Nav(props: any) {

    return (
        <div className={style.nav}>
            <a href={'#main'} ref={props.main.mainRef}
               onClick={() => props.main.scrollToRef(props.main.mainRef)}>Main</a>
            <a href={'#skills'} ref={props.skills.myRef}
               onClick={() => props.skills.scrollToRef(props.skills.skillsRef)}>Skills</a>
            <a href={'#projects'} ref={props.projects.myRef}
               onClick={() => props.projects.scrollToRef(props.projects.projectsRef)}>Projects</a>
            <a href={'#footer'} ref={props.contacts.contactsRef}
               onClick={() => props.contacts.scrollToRef(props.contacts.contactsRef)}>Contacts</a>
        </div>
    );
}

export default Nav;