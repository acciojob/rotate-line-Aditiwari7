//your JS code here. If required.
let angle = 0;
const speed = 1;

function rotateLine() {
	const line = document.getElementById('line');
	angle += speed;
	line.style.transform = `rotate(${angle}deg)`;
	requestAnimationFrame(rotateLine);
}

rotateLine();