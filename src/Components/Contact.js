// import React from 'react';

// function Contact() {
//   return (
//     <section id="contact">
//       <h1>Contact Me</h1>
//       <p>You can reach me via email at [karthickpgpcseemail@example.com].</p>
//       <ul>
//         <li><a href="https://www.linkedin.com/in/your-linkedin">LinkedIn</a></li>
//         <li><a href="https://github.com/your-github">GitHub</a></li>
//       </ul>
//     </section>
//   );
// }

// export default Contact;
import React, { useState } from 'react';
 // Assuming you have a separate CSS file

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for form submission status
  const [status, setStatus] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you would typically send the form data to a backend or email service.
    // For now, we'll just log it and display a success message.

    console.log('Form Data Submitted:', formData);

    // For the sake of this example, assume the form is always successfully submitted.
    setStatus('Message sent successfully!');

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to get in touch, feel free to drop us a message!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {/* Display submission status */}
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;

