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
    
    // Use the Google Sheets API to append the values
    // This is a placeholder for the actual implementation
    // In a real implementation, you would use the Google Sheets API client
    
    // For now, let's just return a success response
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