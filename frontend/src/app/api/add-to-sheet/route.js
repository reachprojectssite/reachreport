import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the request body
    const { spreadsheetId, values } = await request.json();
    
    if (!spreadsheetId || !values) {
      return NextResponse.json(
        { success: false, message: 'Spreadsheet ID and values are required' },
        { status: 400 }
      );
    }

    // Add the values to the Google Sheet
    // This is a placeholder for the actual implementation
    // In a real implementation, you would use the Google Sheets API client
    
    // For now, let's just return a success response
    return NextResponse.json(
      { success: true, message: 'Values added successfully' },
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