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
    		alert('Data length: ' + data.length);
    	}
    });
}
