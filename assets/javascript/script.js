const hari = document.getElementById("hari");
const jam = document.getElementById("jam");
const menit = document.getElementById("menit");
const detik = document.getElementById("detik");

const sekarang = new Date().getFullYear();
const nextReuni = new Date('July 17, 2023 12:00:00');

function hitung() {
	const sekarang = new Date();
	const selisih = nextReuni - sekarang;
	
	const h = Math.floor(selisih / (1000 * 60 * 60 * 24));
	const j = Math.floor(selisih / (1000 * 60 * 60) % 24);
	const m = Math.floor(selisih / (1000 * 60) % 60);
	const d = Math.floor(selisih / (1000) % 60);

	hari.innerHTML = h;
	jam.innerHTML = j < 10 ? '0' + j : j;
	menit.innerHTML = m < 10 ? '0' + m : m;
	detik.innerHTML = d < 10 ? '0' + d : d;
}
setInterval(hitung, 1000);
