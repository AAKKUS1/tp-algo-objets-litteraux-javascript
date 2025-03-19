function supprimerPropriete(obj, propriete) {
    delete obj[propriete];
}

let charlie = { nom: "Charlie", age: 35, ville: "Marseille" };

supprimerPropriete(charlie, "ville");

console.log(charlie);
