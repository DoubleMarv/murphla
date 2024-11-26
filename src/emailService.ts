import axios from 'axios';

// Brevo API endpoint for sending transactional emails
const API_URL = 'https://api.brevo.com/v3/smtp/email';

// Brevo API Key from environment variables
const BREVO_KEY = import.meta.env.VITE_BREVO_KEY;

// Define an interface for the email parameters
interface EmailParams {
  to: string;          // Recipient's email address
  subject: string;     // Email subject line
  htmlContent: string; // HTML content of the email
}

// Function to send an email using Brevo API
export async function sendEmail({ to, subject, htmlContent }: EmailParams): Promise<any> {
  try {
    const response = await axios.post(
      API_URL,
      {
        sender: { email: 'emailsender@barryenglish.ie', name: 'Murphy Loss Assessors' },
        to: [{ email: to, name: 'Recipient Name' }],
        subject,
        htmlContent,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_KEY,
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
