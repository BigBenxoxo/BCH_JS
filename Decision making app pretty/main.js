/* I create a function, within that function there is a switch, a math library and an if else if else conditional that checks wether the user has written a string and if so, returns a random answer. If the user writes nothing, or a number it will return an error message. */

const decisionStatements = () => {
let randomNumber = Math.trunc ( Math.random() * 10 )

        let outcome = ()=>
        
        { switch (randomNumber) {

        
        case 1: 
         return "My heart says yes, indeed!"
            break;
        case 2:
            return "Absolutely no."
            break;
        case 3:
            return "Even the very wise cannot see all ends."
            break;
        case 4:
            return "Perhaps."
            break;
        case 5:
            return "Yes indeed, it has been revealed to me."
            break;
        case 6:
            return "I do not want to think about it."
            break;
        case 7:
            return "Abolutely, yes."
            break;
        case 8:
            return "I do not think so."
            break;
        case 9: 
        return "Hell yeah!" 
        break;
        
        default: 
        return "Hmm, I am a bit busy at the moment." 
    } }

if (questionprint.value === "") {  
   alert("It would be unwise to ask nothing.."); 
} 
else if (!isNaN(questionprint.value)) {
    alert("The wise use their words to express themselves, not mere numbers..");
}


else { 
    question.textContent =  "Your question was: " + questionprint.value;
    answer.textContent = "Gandalf says: " + outcome();
}

  
questionprint.value = ""; 
 //^ Here i give the input field the base value of an empty string to clear it everytime the button is clicked.
} 

document.getElementById("knapp").addEventListener("click", decisionStatements);

/*

Added a getElementById method that retrieves an element from the document (index.html) by ID: in this case "knapp", and the EventListener then runs my function when the event "click" occurs.

*/







