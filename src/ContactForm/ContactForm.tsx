import React from 'react';
import style from './ContactForm.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Button from "../common/Button/Button";


function ContactForm()  {
    return (
        <div className={style.contactForm}>
            <div className= {`${styleContainer.container} ${style.contactFormContainer}`}>
            <form>
                <input type="text" placeholder={'Name'} />
                <input type="email"  placeholder={'E-mail'} />
                <textarea>bla bla bla bla</textarea>
            </form>
            <Button title={'Send'} />
    </div>
        </div>

    )
}

export default ContactForm