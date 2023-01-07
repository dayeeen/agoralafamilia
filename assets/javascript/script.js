document.addEventListener('DOMContentLoaded', function() {
	const hari = document.getElementById("hari");
	const jam = document.getElementById("jam");
	const menit = document.getElementById("menit");
	const detik = document.getElementById("detik");
	
	const sekarang = new Date().getFullYear();
	const nextReuni = new Date('July 17, 2023 12:00:00');
	// Fungsi menampilkan countdown
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

	// BAGIAN FUNGSI PESAN
	
	const pesan = []; //array yang menampung beberapa objek
	const RENDER_EVENT = "render";

	//generate ID
	function generateId() {
		return +new Date();
	}

	function generateMsgObject(id, name, akt, msg) {
		return {
			id: id,
			name: name,
			akt: akt,
			msg: msg
		}
	}
	// Fungsi mengambil data pesan
	function addMsg() {
		const name = document.getElementById('nama').value;
		const akt = document.getElementById('angkatan').value;
		const msg = document.getElementById('pesan').value;
		
		const generatedID = generateId();
		const msgObject = generateMsgObject(generatedID, name, akt, msg);
		pesan.push(msgObject);

		document.dispatchEvent(new Event(RENDER_EVENT));
		saveData();
	}
	function makeMsg(msgObject) {
		const NameAkt = document.createElement('p');
		NameAkt.innerHTML = msgObject.name + ", " + msgObject.akt ;
		const textMsg = document.createElement('p');
		// make italic on textMsg
		textMsg.classList.add('italic');
		textMsg.innerHTML = "\"" + msgObject.msg + "\"";

		const textContainer = document.createElement('div');
		textContainer.classList.add('text-container');
		textContainer.append(NameAkt, textMsg);

		const msgContainer = document.createElement('div');
		msgContainer.classList.add('msg-container');
		msgContainer.append(textContainer);
		msgContainer.setAttribute('id', msgObject.id); 

		return msgContainer;
	}
	// Mengaktifkan tombol submit
	document.getElementById('submit').addEventListener('click', function(event) {
		event.preventDefault();
		if (document.getElementById('nama').value.length==0) {
			alert('Mohon isi nama anda');
		} else if (document.getElementById('angkatan').value.length==0) {
			alert('Mohon isi angkatan anda');
		} else if (document.getElementById('pesan').value.length==0) {
			alert('Mohon isi pesan anda');
		} else {
			addMsg();
		}
	});

	//menyimpan data
	function saveData() {
		if (isStorageExist()) {
			const parsed = JSON.stringify(pesan);
			localStorage.setItem(STORAGE_KEY, parsed);
			document.dispatchEvent(new Event(SAVED_EVENT));
		}
	}
	const SAVED_EVENT = 'saved-message';
	const STORAGE_KEY = 'MSG_APPS';

	// cek storage
	function isStorageExist() /* boolean */ {
		if (typeof (Storage) === undefined) {
			alert('Browser kamu tidak mendukung local storage');
			return false;
		}
		return true;
	}
	document.addEventListener(SAVED_EVENT, function() {
		console.log(localStorage.getItem(STORAGE_KEY));
	});
	function loadData() {
		if (isStorageExist()) {
			const serializedData = localStorage.getItem(STORAGE_KEY);
			let data = JSON.parse(serializedData);
			if (data !== null) {
				for (const item of data) {
					pesan.push(item);
				}
			}
			document.dispatchEvent(new Event(RENDER_EVENT));
		}
	}
	//menampilkan conole log
	document.addEventListener(RENDER_EVENT, function() {
		console.log(pesan);
		const msgItem = document.getElementById('msg-item');
		msgItem.innerHTML = "";
		for (const msg of pesan) {
			const msgContainer = makeMsg(msg);
			msgItem.append(msgContainer);
		}
		
		// Membatasi jumlah pesan yang dapat ditampilkan
		if (pesan.length > 6) {
			pesan.shift();
		}
	});
	if (isStorageExist()) {
		loadData();
	}
});
