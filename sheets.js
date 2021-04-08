appendValues({
  spreadsheetId: '1EFkY4zD4qqxnJdH-QaeasKd1zXC-1sNKpEg08W-3sT0',
  range: 'COVID-19 Cases!A2',
  values: state => {
    const kobo = state.data.body;
    
    console.log('Submission data: ' + JSON.stringify(kobo, null, 2));
    
    return [
      [
        kobo['National_ID'],
        kobo['Patient_name'],
        kobo['Last_Name_of_Patient'],
        kobo['Sex'],
        kobo['Age'],
        kobo['Comments'],
        kobo['Date']
      ],
    ];
  },
});