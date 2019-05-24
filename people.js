var faker = require('faker')

function generatePeople(){
    var peoples = []
    var others = []
    for (var _i = 0; _i < 10; _i++) {
        var name = faker.name.firstName()
        var surname = faker.name.lastName()
        var email = faker.internet.email() 
        peoples.push({
            "id": _i,
            "name": name,
            "surname": surname,
            "mail": email
        })
    }
    
    for (var _i = 0; _i < 10; _i++) {
        var name = faker.name.firstName()
        var surname = faker.name.lastName()
        var email = faker.internet.email() 
        others.push({
            "id": _i,
            "name": name,
            "surname": surname,
            "mail": email
        })
    }
    return {
        "people": peoples,
        "other": others}
}
module.exports = generatePeople

