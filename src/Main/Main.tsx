import React, {useEffect, useState} from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Typist from 'react-typist';
import {MyParticles} from "../common/Particles/MyParticles";
import avaImg from '../assets/image/ava.jpg'


type PropsType = {
    mainRef: any
}

const ava = {
    backgroundImage: 'url(' + avaImg + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 100,
    border: '3px solid #4e93e6'
}

function Main(props: PropsType) {
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        setCount(1);
    }, [count]);
    return (
        <div className={style.mainBlock} ref={props.mainRef}>
            <MyParticles/>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                    <span className={style.subTitle}>Hi there</span>
                    <p className={style.homeArea}>
                        I am
                        <div>
                            <span className={style.name}>Andrei </span>
                            <span className={style.surName}>Kulik</span>
                        </div>
                    </p>
                    <h1>
                        {count ? (
                            <Typist avgTypingDelay={150} onTypingDone={() => setCount(0)}>
                                <span>A Frontend developer</span>
                                <Typist.Backspace count={18} delay={1200}/>
                            </Typist>
                        ) : (
                            ""
                        )}
                    </h1>
                </div>
                <div className={style.photo} style={ava}></div>
            </div>
        </div>
    );
}

export default Main;