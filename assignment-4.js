// Write a javascript object for CSPIT institute with different departments like CE,IT,CS,EC,EE,CL,ME,.. as department array. Create properties such as year of establishment, location. Write function inside CSPIT object to get all details. Create another Empty function of department CE as prototype of CSPIT. Write properties like total student and total faculty [Take as 250 students and 30 faculties]. Retrieve all possible records from CSPIT and CE. Use proper for in and for of loop.

var CSPIT = {
    departments: ["CE", "IT", "CS", "EC", "EE", "CL", "ME"],
    yearOfEstablishment: 2000,
    location: "Vadodara",
    getDetails: function() {
      console.log("CSPIT Institute Details:");
      console.log("Year of Establishment: " + this.yearOfEstablishment);
      console.log("Location: " + this.location);
    }
  };
  
  CSPIT.CE = function() {};
  CSPIT.CE.prototype.totalStudents = 250;
  CSPIT.CE.prototype.totalFaculty = 30;
  
  
  console.log("Records from CSPIT:");
  for (var key in CSPIT) {
    if (typeof CSPIT[key] !== "function") {
      console.log(key + ": " + CSPIT[key]);
    }
  }
  
  
  console.log("\nRecords from CSPIT CE Department:");
  for (var key in CSPIT.CE.prototype) {
    if (CSPIT.CE.prototype.hasOwnProperty(key)) {
      console.log(key + ": " + CSPIT.CE.prototype[key]);
    }
  }

  // Whenever we create a JavaScript function, JavaScript adds a prototype property to that function. A prototype is an object, where it can add new variables and methods to the existing object. i.e., Prototype is a base class for all the objects, and it helps us to achieve the inheritance

  // The hasOwnProperty() method returns true if the specified property is a direct property of the object — even if the value is null or undefined . The method returns false if the property is inherited, or has not been declared at all.