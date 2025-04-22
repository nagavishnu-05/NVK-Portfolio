import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("um9KZbLzu6fmwfJQi"); // Replace with your actual EmailJS public key

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'nagavishnukarthikbs@gmail.com'
    };

    const response = await emailjs.send(
      'service_vrunuhd', // Replace with your EmailJS service ID
      'template_hd132nf', // Replace with your EmailJS template ID
      templateParams
    );

    return {
      success: true,
      message: 'Email sent successfully!'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again later.'
    };
  }
}; 