create('Contact', {
   Name: dataValue("body.Patient_name"),
   Age__c: dataValue("body.Age"),
   Sex__c: dataValue("body.Sex"),	
   Case_ID__c: dataValue("body.National_ID"),	
   Comments__c: dataValue("body.Comments")
 });