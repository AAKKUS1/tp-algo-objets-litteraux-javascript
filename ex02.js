function vieillir(personne) {
	personne.age += 1;
}

let alice = { nom: "Alice", age: 30, ville: "Paris" };

vieillir(alice);

console.log(alice); 
