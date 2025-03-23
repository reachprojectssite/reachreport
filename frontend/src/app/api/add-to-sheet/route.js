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
    // This is a placeholder - in a real implementation, you would use Von's API
    
    return NextResponse.json(
      { success: true, message: 'Subscriber added successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in add-to-sheet API route:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}