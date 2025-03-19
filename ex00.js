function creerPersonne(nom, age, ville) {
    return {
        nom: nom,
        age: age,
        ville: ville
    };
}

console.log(creerPersonne("Alice", 30, "Paris")); 
console.log(creerPersonne("Bob", 25, "Lyon")); 
