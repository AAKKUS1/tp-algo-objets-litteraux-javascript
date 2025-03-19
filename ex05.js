function listerPersonnes(personnes) {
    if (personnes.length === 0) {
        return '';
    }

    
    const liste = personnes.map(personne => `${personne.nom} : ${personne.age} ans`);

    return liste.join(', ') + '.';
}

const personnes = [
    { nom: 'Alice', age: 30 },
    { nom: 'Bob', age: 25 },
    { nom: 'Charlie', age: 35 }
];

console.log(listerPersonnes(personnes));