
	 let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

	 fruits.shift();
	console.log(fruits);

	fruits.sort();
	console.log(fruits);

	fruits.push("Kiwi");
	console.log(fruits);

	fruits.splice(0,1); // or  fruits.shift();
	console.log(fruits);

	fruits.reverse();
	console.log(fruits);

	var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
	console.log(array2[1][1]);
