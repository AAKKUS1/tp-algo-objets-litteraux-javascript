function ajouterAdresse(personne, adresse) {
    personne.adresse = adresse;
}

const bob = { nom: "Bob", age: 25 };

ajouterAdresse(bob, "123 Rue Principale");

console.log(bob); 
