const bars = document.querySelectorAll("td[align=left]");

const firstBar = bars[0];
const referenceWidth = firstBar.offsetWidth;

console.log(referenceWidth)

bars.forEach(bar => {
	const barElement = bar.children[0];
	bar.style.position = "relative";

	console.dir(barElement)

	const barPercent = barElement.offsetWidth / referenceWidth * 100;
	const barPercentStr = `${Math.round(barPercent)}%`;

	const percentElement = document.createElement("span");
	percentElement.innerText = barPercentStr;
	percentElement.style.position = "absolute";
	percentElement.style.top = 0;
	percentElement.style.right = "-2rem";

	bar.appendChild(percentElement);
})