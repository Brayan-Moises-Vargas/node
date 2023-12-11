const fs = require("fs");

const registerAnimal = (Name, Age, Animal, Color, Disease) => {
  const register = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  if ((!Name || !Age || !Animal || !Color || !Disease)) {
    console.log("por favor agrega los campos");
    return;
  }

  register.push({ Name, Age, Animal, Color, Disease });
  
  fs.writeFileSync("citas.json", JSON.stringify(register));
  console.log(register);
};

const registeredAnimals = () =>{
const animals = JSON.parse(fs.readFileSync("citas.json", "utf8"))
console.log(animals);
}


module.exports = { registerAnimal,registeredAnimals  };
