import React, {useState, useEffect} from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Typist from 'react-typist';


type PropsType = {
    mainRef: any
}


function Main(props: PropsType) {
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        setCount(1);
    }, [count]);

    return (
        <div className={style.mainBlock} ref={props.mainRef}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span className={style.subTitle}>Hi there</span>
                    <h1 className={style.homeArea}>I am <br/>
                        <span className={style.name}>Andrei Kulik</span>
                    </h1>
                    <p>
                        {count ? (
                            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                                <span>A Frontend developer</span>
                                <Typist.Backspace count={18} delay={200}/>
                            </Typist>
                        ) : (
                            ""
                        )}
                    </p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;