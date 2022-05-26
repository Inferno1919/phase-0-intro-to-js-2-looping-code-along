// Code your solutions in this file
function countDown(posInt){
    if(posInt > 0){
       
        let newInt = posInt;

        while(newInt > -1){
            
            console.log(newInt);
            
            newInt = newInt - 1
        }
    }
}


function writeCards(person, event){
    
    let newArray = [];
    
    for(let numberOfPeople = 0; numberOfPeople < person.length; numberOfPeople++){
       
        newArray[numberOfPeople] = "Thank you, " + person[numberOfPeople] + ", for the wonderful " + event + " gift!";
    }
    return newArray;
}    