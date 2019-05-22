var faker = require('faker')

function generatePeople(){
    var peoples = []
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
    return {"people": peoples}
}
module.exports = generatePeople