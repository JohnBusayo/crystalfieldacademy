import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';  // Ensure this is installed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);  // New: For better UX

  // Replace these with your EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_vsrhdrn';  // Your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_h021wng';  // Your actual template ID
const EMAILJS_PUBLIC_KEY = 'wkTjXw7aSrcR6vY0G';  // Your actual public key
  const RECIPIENT_EMAIL = 'johnbusayo123@gmail.com';  // Your target email

  // Initialize EmailJS
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);  // Reset errors

    try {
      // EmailJS params - sends directly to your email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "New Inquiry from Website",
        message: formData.message,
        to_email: RECIPIENT_EMAIL  // Ensures it goes to your specified email
      };

      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      if (response.status === 200) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });  // Clear form
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error('EmailJS response not OK');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      // No mailto fallback here—keeps it direct. Add if desired.
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page bg-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">We'd love to hear from you. Here's how you can reach us.</p>
        </div>

        <div className="contact-layout">
          {/* Contact Info - Unchanged */}
          <div className="contact-info-card">
            <div>
              <h3 className="section-title" style={{color: 'white', textAlign: 'left', fontSize: '1.5rem'}}>Contact Information</h3>
              <p style={{marginBottom: '2rem', color: '#e0e7ff'}}>Fill out the form or contact us directly using the information below.</p>
              
              <div className="contact-details">
                <div className="contact-info-item">
                  <Phone size={24} />
                  <span>+27 (63) 927-2097</span>
                </div>
                <div className="contact-info-item">
                  <Mail size={24} />
                  <span>crystalfield61@gmail.com</span>
                </div>
                <div className="contact-info-item" style={{alignItems: 'flex-start'}}>
                  <MapPin size={24} style={{marginTop: '4px'}} />
                  <span>
                    27 North Road,<br />
                    Table view,<br />
                    Cape Town.
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <div className="social-icon">
                <span style={{fontWeight: 'bold'}}>fb</span>
              </div>
              <div className="social-icon">
                <span style={{fontWeight: 'bold'}}>tw</span>
              </div>
              <div className="social-icon">
                <span style={{fontWeight: 'bold'}}>ln</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            {showSuccess && (
              <div className="alert-box alert-success">
                <CheckCircle size={20} />
                <span>Message sent successfully! We will get back to you soon.</span>
              </div>
            )}
            {showError && (
              <div className="alert-box alert-error">
                <span>Oops! Something went wrong. Please try again or email us directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Course Inquiry"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="How can we help you?"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader size={16} className="spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;