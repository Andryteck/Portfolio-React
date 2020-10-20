import React, {useEffect, useState} from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Typist from 'react-typist';
import {MyParticles} from "../common/Particles/MyParticles";
import avaImg from '../assets/image/ava.jpg';
// @ts-ignore
import Tilt from 'react-tilt'

type PropsType = {
    mainRef: any
}

const ava = {
    backgroundImage: 'url(' + avaImg + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

}

function Main(props: PropsType) {
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        setCount(1);
    }, [count]);
    return (
        <div className={style.mainBlock} ref={props.mainRef}>
            <MyParticles/>
            {/*<Fade top>*/}
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
                <Tilt className="Tilt" options={{max: 25}}>
                    <div className={style.photoWrapper}>
                        <div className={style.photo} style={ava}></div>
                    </div>
                </Tilt>
            </div>
            {/*</Fade>*/}
        </div>
    );
}

export default Main;