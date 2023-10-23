window.onload = function() {
	input.value = "";
}

const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) { 
	if (input.value !== "") {
		let results = fruit.filter(chars => chars.toLowerCase().includes(str.toLowerCase()));
	showSuggestions(results, str);
	}
}

function searchHandler(e) {
	suggestions.innerHTML = "";
	search(input.value);
}

function showSuggestions(results, inputVal) {
	for (let result of results) {
		let newLI = document.createElement("li");
		let bolded = result.toLowerCase().replaceAll(inputVal, "<b>" + inputVal + "</b>");
		if (bolded[0] !== "<") {
			bolded = bolded.charAt(0).toUpperCase() + bolded.slice(1)
		} else {
			bolded = bolded.slice(0,3) + bolded.charAt(3).toUpperCase() + bolded.slice(4);
		}
		newLI.innerHTML = bolded;
		suggestions.append(newLI);
	}
}

function useSuggestion(e) {
	const userSelection = e.target.innerText;
	input.value = userSelection;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);