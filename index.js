const {registerAnimal, registeredAnimals} = require("./operaciones.js")

const [accion, Name, Age, Animal, Color, Disease] = process.argv.slice(2)



if (accion == "register"){
    registerAnimal(Name, Age, Animal, Color, Disease)
}

if (accion == "read"){
    registeredAnimals()
}


