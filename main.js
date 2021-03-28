// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

let panacek = document.querySelector('#panacek');

function move(event) {
	let position = panacek.getBoundingClientRect();
	let key = event.keyCode;
	let maxWidth = window.innerWidth;
	if (key == '38') {
        panacek.style.top = position.y - 15 + 'px';
    }
    else if (key == '40') {
        panacek.style.top = position.y + 15 + 'px';
    }
    else if (key == '37' && position.x>=15 && position.x <= maxWidth) {
		panacek.style.left = position.x - 15 + 'px';
    }
    else if (key == '39' && position.x>=0 && position.x <= (maxWidth - 15)) {
		panacek.style.left = position.x + 15 + 'px';
    }
	console.log(maxWidth);
}
