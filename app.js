"use strict"


function app(people){
  let searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'").toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
     searchResults = searchForEyeColor(people);
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
function displayOptionResults(person){
  switch(displayOptionResults(person)){
    case "info":
    let displayOptionResults = displayPerson(person);
    break;
    // case "family":
    // // TODO: get person's family
    // break;
    // case "descendants":
    // // TODO: get person's descendants
    // break;
    // case "restart":
    // app(people); // restart
    // break;
    // case "quit":
    // return; // stop execution
    // default:
    // return mainMenu(person, people); // ask again
  }
}
}
//#endregion


function searchByName(people){
  let firstName = prompt("What is the person's first name?");
  let lastName = prompt("What is the person's last name?");

  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.firstName === firstName && potentialMatch.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
return foundPerson;
}

function searchForEyeColor(people){
  let eyeColor = prompt("What is the person's eye color?");

  let foundEyeColor = people.filter(function(potentialEyeColorMatch){
    if(potentialEyeColorMatch.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
   }
})
return foundEyeColor;
}


function searchByGender(people){
  let gender = prompt("What is the person's gender?");

  let foundGender = people.filter(function(potentialGenderMatch){
    if(potentialGenderMatch.gender === gender){
      return true;
    }
    else{
      return false;
   }
})
return foundGender;
}



function searchByOccupation(people){
  let occupation = prompt("What is the person's occupation?");

  let foundOccupation = people.filter(function(potentialOccupationMatch){
    if(potentialOccupationMatch.occupation === occupation){
      return true;
    }
    else{
      return false;
   }
})
return foundOccupation;
}

// //Display functions.
// //Functions for user interface.
// /////////////////////////////////////////////////////////////////
// //#region 

// // alerts a list of people
// let people = valueOf(searchByName());
// function displayPeople(people){
//   alert(people.map(function(person){
//     return person.firstName + " " + person.lastName;
//   }).join("\n"));
// }

function displayPerson(person){
  let personInfo = "Id: " + person.id + "\n";
  personInfo += "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "gender: " + person.gender + "\n";
  personInfo += "dob: " + person.dob + "\n"; 
  personInfo +=  "height: " + person.height + "\n";
  personInfo += "weight: " + person.weight + "\n";
  personInfo +=  "eyeColor: " + person.eyeColor + "\n";
  personInfo +=  "occupation: " + person.occupation + "\n";
  personInfo +=  "parents: " + person.parents + "\n";
  personInfo += "currentSpouse: " + person.currentSpouse + "\n";
  alert(personInfo);

}

// //#endregion



// //Validation functions.
// //Functions to validate user input.
// /////////////////////////////////////////////////////////////////
// //#region 

// //a function that takes in a question to prompt, and a callback function to validate the user input.
// //response: Will capture the user input.
// //isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
// //this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
// function promptFor(question, valid){
//   let isValid;
//   do{
//     let response = prompt(question).trim();
//     isValid = valid(response);
//   } while(response === ""  ||  isValid === false)
//   return response;
// }

// // helper function/callback to pass into promptFor to validate yes/no answers.
// function yesNo(input){
//   if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// // helper function to pass in as default promptFor validation.
// //this will always return true for all inputs.
// function autoValid(input){
//   return true; // default validation only
// }

// //Unfinished validation function you can use for any of your custom validation callbacks.
// //can be used for things like eye color validation for example.
// function customValidation(input){
  
// }


