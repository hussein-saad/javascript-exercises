function getAge(birth, death) {
    if (!death) 
        death = new Date().getFullYear();
    return death - birth;
}


const findTheOldest = function(peoples) {
    
    let oldest = {
        name: "",
        yearOfBirth: -1,
        yearOfDeath: -1,
    };

    for (people in peoples) {
       
        if (getAge(peoples[people].yearOfBirth, peoples[people].yearOfDeath) > getAge(oldest.yearOfBirth, oldest.yearOfDeath)) {
            oldest = peoples[people];
        }
    }
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
