const list = [
	"I know how to code.",
	"CSS is my jam.",
	"JavaScript is my peanut butter.",
	"HTML is my sourdough bread.",
	"Building blocks for your road."
];

document.addEventListener( "DOMContentLoaded", () => {
	document.querySelector(".loading").classList.add("hide")
	document.querySelector(".page").classList.remove("hide")
} );

const carouselButtons = document.querySelectorAll('.carousel button');
console.log(carouselButtons);
for (button of carouselButtons){
	button.onclick = function(e){
		document.querySelector(".subtitle").innerText = list[e.target.value]
		document.querySelector(".selected").classList.remove("selected")
		e.target.classList.add("selected")
	}
}
