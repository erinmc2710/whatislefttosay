function setupInventory() {

	
	localStorage.clear();

	//items
	localStorage.setItem('tape', 'false');
	localStorage.setItem('cupboardkey', 'false');
	localStorage.setItem('silverkey', 'false');
	localStorage.setItem('batteries', 'false');
}

function checkInventory() {
	
	if( localStorage.getItem('tape') == 'true' ) {
		$('#inventory #inv-tape').show();
	}
	if( localStorage.getItem('cupboardkey') == 'true' ) {
		$('#inventory #inv-cupboardkey').show();
	}
	if( localStorage.getItem('silverkey') == 'true' ) {
		$('#inventory #inv-silverkey').show();
	}
	if( localStorage.getItem('batteries') == 'true' ) {
		$('#inventory #inv-batteries').show();
	}


}
function setupCollection (){
	localStorage.clear();
	// Frank
	localStorage.setItem('polaroid', 'false');
	localStorage.setItem('nokiaon', 'false');
	localStorage.setItem('recordplayer', 'false');

	// Esther
	localStorage.setItem('lunchbox', 'false');
	localStorage.setItem('jewellerybox', 'false');
	localStorage.setItem('weddingring', 'false');

	// Waylen
	localStorage.setItem('controller', 'false');
	localStorage.setItem('collegeletter', 'false');
	localStorage.setItem('debbieletter', 'false');

	// //Lyla
	localStorage.setItem('sneakers', 'false');
	localStorage.setItem('lgbtqflag', 'false');
	localStorage.setItem('lyladiary', 'false');
}

function checkCollection() {
	// Frank
	if( localStorage.getItem('polaroid') == 'true' ) {
		$('#collectionbook #col-polaroid').show();
	}
	if( localStorage.getItem('nokiaon') == 'true' ) {
		$('#collectionbook #col-nokiaon').show();
	}
	if( localStorage.getItem('recordplayer') == 'true' ) {
		$('#collectionbook #col-recordplayer').show();
	}
	// Esther
	if( localStorage.getItem('lunchbox') == 'true' ) {
		$('#collectionbook #col-lunchbox').show();
	}
	if( localStorage.getItem('jewellerybox') == 'true' ) {
		$('#collectionbook #col-jewellerybox').show();
	}
	if( localStorage.getItem('weddingring') == 'true' ) {
		$('#collectionbook #col-weddingring').show();
	}
	// Waylen
	if( localStorage.getItem('controller') == 'true' ) {
		$('#collectionbook #col-controller').show();
	}
	if( localStorage.getItem('collegeletter') == 'true' ) {
		$('#collectionbook #col-collegeletter').show();
	}
	if( localStorage.getItem('debbieletter') == 'true' ) {
		$('#collectionbook #col-debbieletter').show();
	}
	// Lyla
	if( localStorage.getItem('sneakers') == 'true' ) {
		$('#collectionbook #col-sneakers').show();
	}
	if( localStorage.getItem('lgbtqflag') == 'true' ) {
		$('#collectionbook #col-lgbtqflag').show();
	}
	if( localStorage.getItem('lyladiary') == 'true' ) {
		$('#collectionbook #col-lyladiary').show();
	}
}
