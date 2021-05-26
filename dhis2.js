getPrograms({ orgUnit: 'GD7TowwI46c' , fields: '*' });

// See list of cases here: https://covid19.dhis2.org/demo/dhis-web-tracker-capture/index.html#/?program=DM9n1bUw8W8
// createTEI({
//   orgUnit: 'GD7TowwI46c',
//   trackedEntityType: 'MCPQUTHX1Ze',
//   attributes: [
//     {
//       attribute: 'he05i8FUwu3', // case id
//       value: dataValue('body._id'),
//     },
//     {
//       attribute: 'sB1IHYu2xQT', // first name
//       value: dataValue('body.Patient_name'),
//     },
//     {
//       attribute: 'ENRjVGxVL6l', // last name
//       value: dataValue('body.Last_Name_of_Patient'),
//     },
//     {
//       attribute: 'Rv8WM2mTuS5', // age
//       value: dataValue('body.Age'),
//     },
//   ],
//   enrollments: [
//     {
//       orgUnit: 'GD7TowwI46c',
//       program: 'DM9n1bUw8W8',
//       programState: 'sAV9jAajr8x',
//       enrollmentDate: dataValue('body.Date'),
//       incidentDate: dataValue('body.Covid_19_suspected_criteria/Speciman_Collection_date')
//     },
//   ],
// });