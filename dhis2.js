create('trackedEntityInstances', {
  orgUnit: 'g8upMTyEZGZ',
  trackedEntityType: 'nEenWmSyUEp',
  program: 'IpHINAT79UW',
  attributes: [
    { attribute: 'zDhUuAYrxNC', value: dataValue('body.Patient_name') },
    { attribute: 'w75KJ2mc4zz', value: dataValue('body.Last_Name_of_Patient') },
  ],
  enrollments: [
    {
      orgUnit: 'g8upMTyEZGZ',
      program: 'IpHINAT79UW',
      programState: 'oRySG82BKE6', // active
      enrollmentDate: dataValue('body.Date'),
      incidentDate: dataValue('body.Date'),
    },
  ],
});