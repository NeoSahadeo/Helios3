const timeout = 0.4;
let relativePosX = 0;

function swipestart(event: TouchEvent) {
	const element = event.target as HTMLElement;
	if (!element) return;

	const elementBox = element.getBoundingClientRect();
	relativePosX = event.touches[0].clientX - elementBox.x;
}

function swiping(event: TouchEvent) {
	const element = event.target as HTMLElement;
	if (!element) return;

	element.style.transition = `${0}s ease-in-out`;

	if (element.classList.contains("swipeable")) {
		const x = event.touches[0].clientX;
		element.style.left = `${x - relativePosX}px`;
	}
}

function swipeend(event: TouchEvent) {
	const element = event.target as HTMLElement;
	if (!element) return;

	element.style.transition = `${timeout}s ease-in-out`;
	if (element.classList.contains("swipeable")) {
		const swipeResult = parseFloat(element.style.left);
		const elementWidth = element.getBoundingClientRect().width;
		if (swipeResult > elementWidth / 2 || swipeResult < -elementWidth / 2) {
			element.remove();
		} else {
			element.style.left = "0px";
		}
	}
	setTimeout(() => {
		element.style.transition = `${0}s ease-in-out`;
	}, timeout);
}

export { swipestart, swiping, swipeend };
