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
    const sheetName = 'Sheet1';
    const values = [[email, source || 'website', timestamp || new Date().toISOString()]];
    
    // Use the Google Sheets API to append the values
    const response = await fetch(`/api/googlesheets?spreadsheetId=${spreadsheetId}&sheetName=${sheetName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values }),
    });

    if (!response.ok) {
      throw new Error('Failed to add subscriber to Google Sheet');
    }

    return NextResponse.json(
      { success: true, message: 'Subscriber added successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in subscribe API route:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}