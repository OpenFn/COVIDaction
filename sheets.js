appendValues({
  spreadsheetId: '1EFkY4zD4qqxnJdH-QaeasKd1zXC-1sNKpEg08W-3sT0',
  range: 'COVID-19 Cases!A2',
  values: state => {
    console.log('Submission data: ' + JSON.stringify(state.data, null, 2));
    const kobo = state.data.body;
    return [
      [
        kobo['National_ID'],
        kobo['Patient_name'],
        kobo['Last_Name_of_Patient'],
        kobo['Sex'],
        kobo['Age'],
        kobo['Comments'],
      ],
    ];
  },
});