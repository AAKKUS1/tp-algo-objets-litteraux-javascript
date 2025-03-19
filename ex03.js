function estMajeur(personne) {
	return personne.age >= 18;
}

console.log(estMajeur({ nom: "Alice", age: 30 })); 
console.log(estMajeur({ nom: "Bob", age: 15 })); 
