// src/emailService.js
import axios from 'axios';

// Brevo API endpoint for sending transactional emails
const API_URL = 'https://api.brevo.com/v3/smtp/email';

// Your Brevo API Key (consider storing this securely, such as in an environment variable)
const API_KEY = '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';

export async function sendEmail({ to, subject, htmlContent }) {
  try {
    const response = await axios.post(
      API_URL,
      {
        sender: { email: 'emailsender@barryenglish.ie', name: 'Murphy Loss Assesors' },
        to: [{ email: to, name: 'Recipient Name' }],
        subject,
        htmlContent,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY,
        },
      }
    );
    console.log('Email sent successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
