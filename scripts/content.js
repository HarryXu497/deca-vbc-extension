const bars = document.querySelectorAll("td[align=left]");

const firstBar = bars[0];
const referenceWidth = firstBar.children[0].style.width;
const referenceWidthNum = +referenceWidth.substring(0, referenceWidth.length - 2);

bars.forEach(bar => {
	const barElement = bar.children[0];
	bar.style.position = "relative";
	
	const width = barElement.style.width;
	const widthNum = +width.substring(0, width.length - 2);

	const barPercent = widthNum / referenceWidthNum * 100;
	const barPercentStr = `${Math.round(barPercent)}%`;

	const percentElement = document.createElement("span");
	percentElement.innerText = barPercentStr;
	percentElement.style.position = "absolute";
	percentElement.style.top = 0;
	percentElement.style.right = "-2rem";

	bar.appendChild(percentElement);
})