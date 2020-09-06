const cats = [
	{
		name: "Blob",
		age: 10
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21
	}
];
		
// question 1
var cat = {
  complain: "",
  complain : function() {
	console.log("Meow!");
  }
};
cat.complain();
		
// question 2
var heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3
heading.style.fontSize = "2em";
		
// question 4
heading.classList.add("subheading");
		
// question 5
var paragraphs = document.querySelectorAll("p");
var i;
for (i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = "red";
}
		
// question 6
var resultsContainer = document.getElementsByClassName("results"); 
resultsContainer[0].innerHTML = "<p>New paragraph</p>";
resultsContainer[0].style.backgroundColor = "yellow";
		
// question 7
function findnames(list){
	list.forEach(function (arrayItem) {
		console.log(arrayItem.name);
	});
}
findnames(cats);
		
// question 8
var catsInfo = "";
function createCats(cats){
	cats.forEach(function (arrayItem) {
		var catAge;
		if(arrayItem.age){
			catAge = arrayItem.age;
		}
		else{
			catAge = "Age unknown";
		}
		catsInfo += "<div><h5>" + arrayItem.name + "</h5><p>" + catAge + "</p></div>";
	});
}
var catsContainer = document.getElementsByClassName("cat-container");
createCats(cats);
catsContainer[0].innerHTML = catsInfo;