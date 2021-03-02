create('Contact', {
   Name: dataValue("body.Patient_name"),
   Age__c: dataValue("body.Age"),
   sex
 });