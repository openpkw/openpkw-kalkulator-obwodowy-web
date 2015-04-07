/*global alert*/
'use strict';

function generateProtocol() {
	$.ajax({
		type: 'POST',
		url: '/backend/service/protocol',
		headers: {'Content-Type': 'application/json'},
		async: false,
		data: '{'+
			'"komisja": {'+
				'"kodTerytorialnyGminy" : "180801",'+
				'"numerObwoduGlosowania" : "5",'+
				'"siedzibaObwodowejKomisjiWyborczej": "Gimnazjum Miejskie im. Władysława Jagiełły, Leżajsk ul. Skłodowskiej 8, 37-300 Leżajsk",'+
				'"gminaDzielnica" : "m. Leżajsk",'+
				'"powiat" : "leżajski",'+
				'"wojewodztwo" : "podkarpackie"'+
			'}'+
		'}',
    	success: function(data, status) {
			var pom = document.createElement('a');
  			pom.setAttribute('href', 'data:application,' + encodeURIComponent(data));
  			pom.setAttribute('download', 'elemelek.pdf');
			pom.style.display = 'none';
  			document.body.appendChild(pom);

  			pom.click();
  			document.body.removeChild(pom);
    	}
    });
}
