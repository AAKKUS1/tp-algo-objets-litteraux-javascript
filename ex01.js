function afficherInfosPersonne(personne) {
    return personne.nom + ' a ' + personne.age + ' ans et habite à ' + personne.ville + '.';
}

console.log(afficherInfosPersonne({ nom: "Alice", age: 30, ville: "Paris" })); 
