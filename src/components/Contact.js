import React from 'react';
import Form from './Fom';
import { vertRule } from '../svg/vert-rule'

const Contact = () => {

    return(
        <div id='contact'>
             <div className='vert-rule'>
                {vertRule()}
            </div>
        <Form />
        </div>
    )
}

export default Contact;