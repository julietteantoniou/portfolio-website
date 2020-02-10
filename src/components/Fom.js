import React, { useState } from 'react';

const Form = () => {
  
    const [email, setEmail] = useState({
        message_html: '',
        from_name: '',
        reply_to: ''
    })

    const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    setEmail({
        ...email,
        [event.target.name]: event.target.value
  })
}

  const handleSubmit = (event) => {
      event.preventDefault()
	const templateId = 'template_yWIY0O7k';
if (email.message_html && email.reply_to && email.from_name){
    sendMessage(templateId, email)
}
  }

  const sendMessage = (templateId, variables) => {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
        console.log('Email successfully sent!')
        setSent(true)
  	})
  	.catch(err => console.error(err))
  }

	return (
  	<div className="contact">
    	<h2>Get in Touch</h2>
        {sent ? <div className='contact-success'><h3>Thanks for reaching out! I'll get back to you as soon as possible</h3> </div> : 
        <form>
    	<div className='contact-top'>
        <input 
            name="from_name"
            value={email.from_name}
            placeholder='Name'
            onChange={handleChange}
            required
        />
           <input 
            name="reply_to"
            type='email'
            value={email.reply_to}
            placeholder='Email'
            onChange={handleChange}
            required
        />
        </div>
      	<textarea
        	name="message_html"
        	onChange={handleChange}
        	placeholder="Hey Juliette,"
        	required
        	value={email.message_html}
      	/>
    	<button onClick={(e)=>handleSubmit(e)}> Send </button>
  	</form>}
      </div>
	)
  }

export default Form;