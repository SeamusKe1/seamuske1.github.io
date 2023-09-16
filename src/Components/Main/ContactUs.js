import React from 'react';

const ContactUs = () => {
    return (
        <section>
        <div className="ContactUs">
            <h3>Contact Us</h3>
            <ul>
            <form className="form">
               <li>
                <input type="text"
                placeholder='First Name'name='user_firstname'
                required /></li>
                <li><input type="text"
                placeholder='Last Name'name='user_lastname'
                required /></li>
                <li><input type="email"
                placeholder='email'name='user_email'
                required /></li>
                <li><input type="text"
                placeholder='Subject'name='subject'
                required /></li>
                <li><textarea name="message" 
                cols="30" rows="10" placeholder='Please enter your message'></textarea></li>
                <li><button type='submit' className="buttonPrimary">Submit</button></li>
                </form>
                </ul>
        </div>
        </section>
    );
};

export default ContactUs;