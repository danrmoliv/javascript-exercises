const findTheOldest = function(people) {

    const currentDate = new Date(); // Creates a Date object representing the current date and time
    const currentYear = currentDate.getFullYear();

    people.forEach(person => {
        if ('yearOfDeath' in person) {
            console.log(true); 
        } else {
            person['yearOfDeath'] = currentYear;
        }
    }
    )
    console.log(people)

    people.sort((a, b) => ((b.yearOfDeath - b.yearOfBirth)) - (a.yearOfDeath - a.yearOfBirth))
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
