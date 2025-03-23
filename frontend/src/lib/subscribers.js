import supabase from './supabase';

/**
 * Add a new subscriber to the database
 * @param {string} email - The subscriber's email address
 * @returns {Promise<{success: boolean, error?: string, data?: any}>}
 */
export async function addSubscriber(email) {
  try {
    // Basic email validation
    if (!email || !email.includes('@')) {
      return {
        success: false,
        error: 'Please provide a valid email address'
      };
    }

    // Insert the subscriber
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email: email.toLowerCase().trim() }])
      .select()
      .single();

    if (error) {
      // Handle unique constraint violations gracefully
      if (error.code === '23505') {
        return {
          success: true, // Still return success for already subscribed users
          data,
          alreadySubscribed: true
        };
      }

      throw error;
    }

    return {
      success: true,
      data
    };
  } catch (error) {
    console.error('Error adding subscriber:', error);
    return {
      success: false,
      error: 'Failed to add subscriber. Please try again.'
    };
  }
}

/**
 * Check if an email is already subscribed
 * @param {string} email 
 * @returns {Promise<boolean>}
 */
export async function isEmailSubscribed(email) {
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return false; // Not found
      }
      throw error;
    }

    return !!data;
  } catch (error) {
    console.error('Error checking subscription:', error);
    return false;
  }
}