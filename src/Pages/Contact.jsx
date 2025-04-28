import React, { useState } from 'react'
import styles from './Contact.module.css'
import { useNavigate } from 'react-router-dom';

const Contact =  () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function submitForm(e){

    e.preventDefault();
    setLoading(true)
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      const response = await fetch(" http://localhost:8090/submitform",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
      })
      const res = await response.json();
      window.alert('Submitted successfully')
      navigate('/thankyou');
    } catch (error) {
      console.log(error)
      window.alert('Something went wrong ...')
    } finally{
      setLoading(false)
    }
    
  }
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.subtitle}>
        Feel free to contact me by submitting the form below. I'll get back to you as soon as possible!
      </p>
      <form className={styles.form} onSubmit={submitForm} action='https://www.google.com' >
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required />
        </div>
        <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Submitting
                <span className={styles.spinner}></span>
              </span>
            ) : (
              "Submit"
            )}
        </button>

      </form>
    </div>
  )
}

export default Contact
