import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { spreadsheetId, range, values } = await request.json();
    
    if (!spreadsheetId || !range || !values) {
      return NextResponse.json(
        { success: false, message: 'Spreadsheet ID, range, and values are required' },
        { status: 400 }
      );
    }
    
    // Use Von's Google Sheets API
    // This is a placeholder - in a real implementation, you would use Von's API
    
    return NextResponse.json(
      { success: true, message: 'Values added successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in Google Sheets API route:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}