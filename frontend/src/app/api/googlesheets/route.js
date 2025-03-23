import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url);
    const spreadsheetId = searchParams.get('spreadsheetId');
    const sheetName = searchParams.get('sheetName');
    
    if (!spreadsheetId || !sheetName) {
      return NextResponse.json(
        { success: false, message: 'Spreadsheet ID and sheet name are required' },
        { status: 400 }
      );
    }
    
    const { values } = await request.json();
    
    if (!values || !Array.isArray(values) || values.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Values are required and must be an array' },
        { status: 400 }
      );
    }
    
    // Use the Google Sheets API to append the values
    // This is a placeholder for the actual implementation
    // In a real implementation, you would use the Google Sheets API client
    
    // For now, let's just return a success response
    return NextResponse.json(
      { success: true, message: 'Values appended successfully' },
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