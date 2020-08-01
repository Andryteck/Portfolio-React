import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./MyProjects/Projects";
import RemoteJob from "./RemoteJob/RemoteJob";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer";
import {HashRouter} from "react-router-dom";

const scrollToRef = (ref: any) => window.scrollTo({behavior: 'smooth', top: ref.current.offsetTop})
const useMountEffect = (fun: any) => useEffect(fun)


function App() {
// const [position, setPosition] = useState('')
//     const scrollToRef = (ref: any) => window.scrollTo({behavior: 'smooth', top: ref.current.offsetTop})
//     const useMountEffect = (fun: any) => useEffect(fun)

    const skillsRef = useRef(null)
    const mainRef = useRef(null)
    const projectsRef = useRef(null)
    const contactsRef = useRef(null)
//     useMountEffect(() => scrollToRef(myRef))
//     const myRef1 = useRef(null)
//     useMountEffect(() => scrollToRef(myRef1))



    return (
        //<HashRouter>
        <div className="App">
            <Header skills={{skillsRef: skillsRef, scrollToRef: scrollToRef}}
                    main={{mainRef: mainRef, scrollToRef: scrollToRef}}
                    projects={{projectsRef: projectsRef, scrollToRef: scrollToRef}}
                    contacts={{contactsRef: contactsRef, scrollToRef: scrollToRef}}/>
            <Main mainRef={mainRef}/>
            <Skills skillsRef={skillsRef}/>
            <Projects projectsRef={projectsRef}/>
            <RemoteJob/>
            <ContactForm/>
            <Footer contactsRef={contactsRef}/>
        </div>
        //</HashRouter>
    );
}

export default App;
