import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the request body
    const { email, source, timestamp } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Add the subscriber to the Google Sheet
    const spreadsheetId = '132lbXx5u1NE5jfvpDYtfgCwCjZhM-1_fw_lJMBGKRj0';
    
    // Use Von's Google Sheets API
    const response = await fetch('https://api.von.dev/googlesheets/append', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VON_API_KEY}`
      },
      body: JSON.stringify({
        spreadsheetId,
        range: 'Sheet1!A:C',
        values: [[email, source || 'website', timestamp || new Date().toISOString()]],
        valueInputOption: 'USER_ENTERED'
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add subscriber to Google Sheet');
    }
    
    return NextResponse.json(
      { success: true, message: 'Subscriber added successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in add-subscriber API route:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}