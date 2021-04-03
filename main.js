
let panacek, panacekX, panacekY, panacekSirka, panacekVyska;
let mince, minceX, minceY, minceSirka, minceVyska;
let count = 0;

// pohyb panáčka do 4 směrů
function move(event) {
	let key = event.keyCode;
	let maxWidth = window.innerWidth;
	let maxHeight = window.innerHeight;
	if (key == '38' && panacekY>=15 && panacekY<=maxHeight) {
        panacekY = panacekY - 15;
        panacek.src = 'obrazky/panacek-nahoru.png'
    }
    else if (key == '40' && panacekY>=0 && panacekY<=(maxHeight - panacekVyska - 15)) {
        panacekY = panacekY + 15;
        panacek.src = 'obrazky/panacek.png'
    }
    else if (key == '37' && panacekX>=15 && panacekX <= maxWidth) {
		panacekX = panacekX - 15;
    panacek.src = 'obrazky/panacek-vlevo.png'
    }
    else if (key == '39' && panacekX>=0 && panacekX <= (maxWidth - panacekSirka - 15)) {
		panacekX = panacekX + 15;
    panacek.src = 'obrazky/panacek-vpravo.png'
    }
	umistiPanacka();
  testCollision();
  play('hudba'); 
}

function onPageLoad() {
  panacek = document.querySelector('#panacek');
  mince = document.querySelector('#mince');

	// zjistíme šířku a výšku panáčka
  panacekSirka = panacek.width;
  panacekVyska = panacek.height;

	// a umístíme panáčka do středu okna
  panacekX = window.innerWidth / 2 - panacekSirka / 2;
  panacekY = window.innerHeight / 2 - panacekVyska / 2;

	// pozice panáčka
  umistiPanacka();

	// zjistíme šířku a výšku mince
  minceSirka = mince.width;
  minceVyska = mince.height;

	// a vygenerujeme první minci na náhodné pozici
  newCoin();
  
}

// funkce, která umístí panáčka na jeho souřadnice
// tj. nastaví jeho style.left a style.top na hodnoty panacekX, panacekY
function umistiPanacka() {
	panacek.style.left = panacekX  + 'px';
	panacek.style.top = panacekY  + 'px';
}

// funkce pro nahodné vygenerování nové pozice mince
// a umístění mince na tyto souřadnice
function newCoin() {
	minceX = Math.random() * (window.innerWidth - minceSirka);
  minceY = Math.random() * (window.innerHeight - minceVyska);
  mince.style.left = minceX + 'px';
  mince.style.top = minceY + 'px';
}

// funkce pro otestování kolize panáčka s mincí
function testCollision() {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
    newCoin();
    play('zvukmince');
    count = count + 1;
    document.querySelector('#score').textContent = count;
    if (count === 5) {
      play('zvukfanfara');
      setTimeout(function() { 
        alert('Jupí, 5 mincí máš v kapse!!'); 
      }, 50);
    }
  }
}

// funkce k přehrání audia
function play(element) {
  audio = document.getElementById(element);
  audio.play();
}
