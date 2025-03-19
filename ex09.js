function afficherProprietes(obj) {
    let proprietes = [];

    for (let cle in obj) {
        proprietes.push(`${cle}: ${obj[cle]}`);
    }

    return proprietes.join(', ');
}

console.log(afficherProprietes({ nom: "Alice", age: 30, ville: "Paris" })); // 'nom: Alice, age: 30, ville: Paris'
