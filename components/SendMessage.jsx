import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const SendMessage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [response, setResponse] = useState(null);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_h2z2rqn', // Replace with your EmailJS service ID
            'template_zqn0cl9', // Replace with your EmailJS template ID
            formData,
            'WhiQT83xIgngsohZ5' // Replace with your EmailJS user ID
        )
        .then((result) => {
            setResponse('Email sent successfully!');
            alert('Email sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        })
        .catch((error) => {
            setResponse('Failed to send email. Please try again.');
        });
    };

  return (
    <div className="sendmessage">
        <div className="bg">
            <img src='https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213513/brwo90sr491nhxc3wcjm.png' alt="" />
        </div>
        <div className="aboutus-title">
                <img src="https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213508/lu3gv4x8qgqusoe2xxak.png" alt=""  style={{transform: "scaleX(-1)" }} />
                <h2>Send us a Message!</h2>
                <img src="https://res.cloudinary.com/di1qhxfqv/image/upload/v1719213508/lu3gv4x8qgqusoe2xxak.png" alt="" />
        </div>
        <div className="message-form">
            <form onSubmit={handleSubmit}>
                <div className='form-name'>
                    <input
                        type="text"
                        name="name"
                        placeholder='Full Name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-email'>
                    <input
                        type="email"
                        name="email"
                        placeholder='Your Email ID'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-message'>
                    <textarea
                        name="message"
                        placeholder='Type your Message here'
                        className='message-box'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Message!</button>
            </form>
        </div>
    </div>
  )
}

export default SendMessage