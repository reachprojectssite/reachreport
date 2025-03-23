import axios from 'axios';

/**
 * Utility functions for Google Sheets integration
 */

/**
 * Add a subscriber to the Google Sheet
 * @param {string} email - The subscriber's email address
 * @param {string} source - The source of the subscription (e.g., 'hero', 'footer')
 * @returns {Promise<boolean>} - Whether the operation was successful
 */
export async function addSubscriberToSheet(email, source = 'website') {
  try {
    // Format the data for the Google Sheet
    const timestamp = new Date().toISOString();
    
    // Make a request to the Google Sheets API
    const response = await axios.post('/api/subscribe', {
      email,
      source,
      timestamp
    });
    
    return response.status === 200;
  } catch (error) {
    console.error('Error adding subscriber to Google Sheet:', error);
    return false;
  }
}