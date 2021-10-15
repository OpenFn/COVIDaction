alterState(state => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wait, and then return");
      resolve(state);
    }, 2000);   
  });
});

create('Contact', {
  FirstName: dataValue("body.Patient_name"),
  LastName: dataValue('body.Last_Name_of_Patient'),
  Age__c: dataValue("body.Age"),
  Sex__c: dataValue('body.Sex'),	
  Case_ID__c: dataValue("body.National_ID"),	
  Comments__c: dataValue("body.Comments")
});
