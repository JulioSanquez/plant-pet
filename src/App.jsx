import './App.css'
import {google} from 'googleapis'
import { useEffect } from 'react';

function App() {

  const handleClick = () => {
    console.log("Hola Sheets")
  }  

const sheets = google.sheets('v4');


  async function authorize() {
    // TODO: Change placeholder below to generate authentication credentials. See
    // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
    //
    // Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/drive.readonly'
    //   'https://www.googleapis.com/auth/spreadsheets'
    //   'https://www.googleapis.com/auth/spreadsheets.readonly'
    let authClient = "https://www.googleapis.com/auth/drive.readonly";

    if (authClient == null) {
      throw Error('authentication failed');
    }

    return authClient;
  }

  useEffect(() => {
    async function main () {
      const authClient = await authorize();
      const request = {
        // The ID of the spreadsheet to retrieve data from.
        spreadsheetId: '1ltPRJdt_KdFI5tuHmfXMvq571Xx2FQAdbOCLvN-jvgc',  // TODO: Update placeholder value.
  
        // The A1 notation of the values to retrieve.
        range: 'prueba',  // TODO: Update placeholder value.
  
        // How values should be represented in the output.
        // The default render option is ValueRenderOption.FORMATTED_VALUE.
        valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.
  
        // How dates, times, and durations should be represented in the output.
        // This is ignored if value_render_option is
        // FORMATTED_VALUE.
        // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
        dateTimeRenderOption: 'SERIAL_NUMBER',  // TODO: Update placeholder value.
  
        auth: authClient,
      };
  
      try {
        const response = (await sheets.spreadsheets.values.get(request)).data;
        // TODO: Change code below to process the `response` object:
        console.log(JSON.stringify(response, null, 2));
      } catch (err) {
        console.error(err);
      }
    }
    main();
  }, [])
  

  return (

    
    <div className="App">
      <button id="signin-button" onClick={handleClick}>Leer datos</button>
    </div>
  )
}

export default App
