/*global PdfGeneratorUtils,pdfMake*/
'use strict';

var docDefinition;
var pdfUtils = new PdfGeneratorUtils();

$(document).ready(function(){
    
	pdfMake.fonts = {
            times: {
                normal: 'times.ttf',
                bold: 'timesbd.ttf',
                italics: 'times.ttf',
                bolditalics: 'times.ttf'
            }
        };	



        docDefinition = {
    	pageSize: 'A4',
    	
    	footer: function(currentPage, pageCount) { 
    			return [{image: $('#barcode').attr('src'),style: {alignment:'center'}}];
    		 },
        
        content: [{
                text: 'Załączniki do uchwały Państwowej Komisji Wyborczej z\ndnia 26 stycznia 2015 r. (poz. ....)\nZałącznik nr 1',
                style: {
                    fontSize: 8
                },
                margin: [330, 0, 0, 5]
            },
            {
                table: {
                    headerRows: 0,
                    widths: [500],

                    body: [
                    		[{ text: [
                    				{ text: '…………………………… *)\n', style:{fontSize: 8, alignment: 'right'}},
									{ text: 'WYBORY PREZYDENTA RZECZYPOSPOLITEJ POLSKIEJ', style:{fontSize: 12 ,alignment: 'center',bold:true}}
								   ]
							}]
                    	]
                }
            },
            {
                table: {

                    headerRows: 0,
                    widths: [130,12,12,12,12,12,12,151,12,12,12,12],

                    body: [
                    		[
                    			{text: 'Kod terytorialny gminy\n(dzielnicy w m. st. Warszawie)',style: {alignment:'left'}},
                    			{text:'1',style: 'centerInputValue'},
                    			{text:'2',style: 'centerInputValue'},
                    			{text:'3',style: 'centerInputValue'},
                    			{text:'4',style: 'centerInputValue'},
                    			{text:'5',style: 'centerInputValue'},
                    			{text:'6',style: 'centerInputValue'},
                    			{text: 'Numer obwodu do głosowania',style: {alignment:'right'},margin:[0,5,0,0]},
                    			{text:'1',style: 'centerInputValue'},
                    			{text:'2',style: 'centerInputValue'},
                    			{text:'3',style: 'centerInputValue'},
                    			{text:'4',style: 'centerInputValue'},
                    		]
                    	]
                },
                layout: {hLineWidth: function(i, node) {return (i === 0) ? 0 : 1;}}
				
            },
            {
                table: {
                    headerRows: 0,
                    widths: [151,340],

                    body: [
                    		[
                    			{text: 'Siedziba Obwodowej Komisji\nWyborczej (adres)',style: {alignment:'right'}},
                    			{text:' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',style: 'centerInputTextValue'},
                    		]
                    	]
                },
                layout: {hLineWidth: function(i, node) {return (i === 0) ? 0 : 1;}}
				
            },
            {
                table: {
                    headerRows: 0,
                    widths: [42,100,36,119,58,100],

                    body: [
                    		[
                    			{text: 'Gmina/\nDzielnica',style: {alignment:'center'}},
                    			{text:' Lorem Ipsum',style: 'centerInputTextValue',margin:[0,4,0,0]},
                    			{text: 'Powiat',style: {alignment:'center'},margin:[0,4,0,0]},
                    			{text:' Lorem Ipsum',style: 'centerInputTextValue',margin:[0,4,0,0]},
                    			{text: 'Województwo',style: {alignment:'center'},margin:[0,4,0,0]},
                    			{text:' Lorem Ipsum',style: 'centerInputTextValue',margin:[0,4,0,0]},
                    		]
                    	]
                },
                layout: {hLineWidth: function(i, node) {return (i === 0) ? 0 : 1;}}
				
            },
            {
                text: 'PROTOKÓŁ WYNIKÓW GŁOSOWANIA W OBWODZIE\n'
						+'W WYBORACH PREZYDENTA RZECZYPOSPOLITEJ POLSKIEJ\n'
						+'PRZEPROWADZONEGO W DNIU ………………………………………………',
                style: {fontSize: 12,alignment: 'center',bold: 'true'},
                margin: [0, 10, 0, 0]
            },
            {
                text: 'Głosowanie rozpoczęło się w dniu ..................................... 20......... r. o godz. ......... i trwało do godz. ......... ',
                margin: [0, 10, 0, 0]
            },
            pdfUtils.createHeaderElement('I.',' ROZLICZENIE KART DO GŁOSOWANIA'),
            {
                table: pdfUtils.createVoteResultTable([
            			pdfUtils.createVoteResultRow('1','Liczba wyborców uprawnionych do głosowania (umieszczonych w spisie, z uwzględnieniem dodatkowych formularzy) w chwili zakończenia głosowania',pdfUtils.randomNumber())
            		])
				
            },
            {
            	margin:[0,20,0,0],
                table: pdfUtils.createVoteResultTable([
                    		pdfUtils.createVoteResultRow('2','Komisja otrzymała kart do głosowania',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('3','Nie wykorzystano kart do głosowania',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('4','Liczba wyborców, którym wydano karty do głosowania\n(liczba podpisów w spisie oraz adnotacje „odmowa podpisu”)',pdfUtils.randomNumber()),
                    	])
                
				
            },
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
					columns: pdfUtils.createNoticeColumns('Suma liczb z pkt. 3 i 4 powinna być równa liczbie z pkt. 2, jeśli tak nie jest — przypuszczalną przyczynę należy opisać \nw punkcie 15.')
            },
            {
            	margin:[0,10,0,0],
                table: pdfUtils.createVoteResultTable([
                    		pdfUtils.createVoteResultRow('5','Liczba wyborców głosujących przez pełnomocnika (liczba kart do głosowania wydanych na podstawie otrzymanych przez komisję aktów pełnomocnictwa)',pdfUtils.randomNumber()),
                    	])
				
            },
            {
            	margin:[0,20,0,0],
                table: pdfUtils.createVoteResultTable([
                    		pdfUtils.createVoteResultRow('6','Liczba wyborców głosujących na podstawie zaświadczenia o prawie do głosowania',pdfUtils.randomNumber()),
                    ]) 
            },
            {
            	margin:[0,20,0,0],
                table: pdfUtils.createVoteResultTable([
                    		pdfUtils.createVoteResultRow('7','Liczba wyborców, którym wysłano pakiety wyborcze',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('8','Liczba otrzymanych kopert zwrotnych',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('8a','Liczba kopert zwrotnych, w których nie było oświadczenia o osobistym i tajnym oddaniu głosu',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('8b','Liczba kopert zwrotnych, w których oświadczenie nie było podpisane przez wyborcę',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('8c','Liczba kopert zwrotnych, w których nie było koperty na kartę do głosowania',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('8d','Liczba kopert zwrotnych, w których znajdowała się niezaklejona koperta na kartę do głosowania',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('8e','Liczba kopert na kartę do głosowania wrzuconych do urny',pdfUtils.randomNumber())
                    	])
            },
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
            		pageBreak: 'after',
            		columns: pdfUtils.createNoticeColumns('Liczba z pkt. 8 nie może być większa od liczby z pkt. 7. Suma liczba z pkt. 8a–8e nie może być większa od liczby z pkt. 8.')
            },
            pdfUtils.createHeaderElement('II.','USTALENIE WYNIKÓW GŁOSOWANIA'),
            {
            	text: 'Komisja  stwierdziła,  że  pieczęcie  na  urnie  pozostały  nienaruszone.  Po  wyjęciu  kart  z  urny  Komisja ustaliła  na  ich podstawie następujące wyniki głosowania:'
            },
            {
            	margin:[0,5,0,0],
                table: pdfUtils.createVoteResultTable([
                    		pdfUtils.createVoteResultRow('9','Liczba kart wyjętych z urny',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('9a','w tym liczba kart wyjętych z kopert na kartę do głosowania ',pdfUtils.randomNumber())
                    	])
            },
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
					columns: pdfUtils.createNoticeColumns('Liczba z pkt. 9 pomniejszona o liczbę z pkt. 9a powinna być równa liczbie z pkt. 4.'
													+ ' Dodatkowo liczba z pkt. 9a nie powinna być większa od liczby z pkt. 8e; '
													+ 'jeśli tak nie jest — przypuszczalną przyczynę należy opisać w punkcie 16.')
            },
            {
            	margin:[0,5,0,0],
                table: pdfUtils.createVoteResultTable([
                    		pdfUtils.createVoteResultRow('10','Liczba kart nieważnych (innych niż urzędowo ustalone lub nieopatrzonych'
														+ 'pieczęcią obwodowej komisji wyborczej)',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('11','Liczba kart ważnych ',pdfUtils.randomNumber())
                    	])
            },
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
					columns: pdfUtils.createNoticeColumns('Suma liczb z pkt. 10 i 11 musi być równa liczbie z pkt. 9.\n'
												+ 'Jeśli w pkt. 10 liczba jest większa niż 0, przyczynę należy opisać w pkt. 17.')
            },
            {
            	margin:[0,5,0,0],
                table: pdfUtils.createVoteResultTable([
                    		pdfUtils.createVoteResultRow('12','Liczba głosów nieważnych (z kart ważnych)',pdfUtils.randomNumber()),
                    		pdfUtils.createVoteResultRow('13','Liczba głosów ważnych oddanych łącznie na wszystkich'
                    					+ ' kandydatów (z kart ważnych)',pdfUtils.randomNumber())
                    	])
            },
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
					columns: pdfUtils.createNoticeColumns('Suma liczb z pkt. 12 i 13 musi być równa liczbie z pkt. 11.')
            },
            {
            	text: '14. Na poszczególnych  kandydatów na Prezydenta Rzeczypospolitej Polskiej  oddano' 
							+ 'następujące liczby głosów ważnych:',
				margin:[0,10,0,0],
				style: {fontSize: 12,bold:true},
            },
            {
            	margin:[0,5,0,0],
            	table:pdfUtils.createVoteResultTable([
            				pdfUtils.createVoteResultHeaderRow('Lp.','Nazwisko i imię - imiona','Liczba głosów ważnych'),
            				pdfUtils.createVoteResultRow('1',''),pdfUtils.createVoteResultRow('2',''),pdfUtils.createVoteResultRow('3',''),
            				pdfUtils.createVoteResultRow('4',''),pdfUtils.createVoteResultRow('5',''),pdfUtils.createVoteResultRow('...','')
            		])
            },
            {
            	margin:[403,0,0,0],
            	table:{
            		headerRows: 0,
            		widths: [12,12,12,12,12],
            		body:[
            			[ 
            				
            				{text:' ',style: 'centerInputValue'}, 
	            			{text:' ',style: 'centerInputValue'},
            				{text:' ',style: 'centerInputValue'},
            				{text:' ',style: 'centerInputValue'},
            				{text:' ',style: 'centerInputValue'}]
            			
            		]

            	},
				layout: {
						hLineWidth: function(i, node) {return (i === 0) ? 0 : 1;}
				}
            },
            {text:'Razem: ',margin:[365,-18,0,18]},
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
            		pageBreak: 'after',
					columns: pdfUtils.createNoticeColumns('Suma głosów ważnych oddanych na wszystkich kandydatów (rubryka „Razem”)'
								+' musi być równa liczbie z pkt 13, czyli liczbie głosów ważnych oddanych'
								+ ' łącznie na wszystkich kandydatów.')
            },
            pdfUtils.createHeaderElement('III.','UWAGI I ADNOTACJE'),
            pdfUtils.createAdnotationText('15.**)','Uwagi  o  przypuszczalnej  przyczynie  ewentualnej  różnicy  pomiędzy  sumą  '
				            			+'liczb  z pkt. 3 i 4 a liczbą z pkt. 2; jeżeli różnica nie występuje, wpisać „brak uwag”:'),
            pdfUtils.createAdnotationValue('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
            
            pdfUtils.createAdnotationText('16.**)','Uwagi o przypuszczalnej przyczynie ewentualnej różnicy pomiędzy liczbą z pkt. 9 pomniejszoną o liczbę z pkt. 9a a liczbą z pkt. 4,a także o przypuszczalnej przyczynie ewentualnej różnicy pomiędzy liczbą z pkt. 9a a liczbą z pkt. 8e; jeżeli różnice nie występują, wpisać „brak uwag”:'),
            pdfUtils.createAdnotationValue('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
            
            pdfUtils.createAdnotationText('17.**)','Uwagi o przypuszczalnej przyczynie wystąpienia  kart  nieważnych  (pkt 10);  jeżeli  liczba  w  pkt. 10 wynosi 0,'),
            pdfUtils.createAdnotationValue('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
            
            pdfUtils.createAdnotationText('18.**)','W trakcie głosowania wydano następujące zarządzenia; jeżeli nie wydano, wpisać „brak zarządzeń”:'),
            pdfUtils.createAdnotationValue('brak uwag'),
            
            pdfUtils.createAdnotationText('19.**)','Adnotacja o wniesieniu uwag przez  mężów  zaufania  z  wymienieniem  konkretnych  zarzutów ***);  jeżeli  nie ma,wpisać „brak zarzutów” lub „brak mężów zaufania w obwodzie”'),
            pdfUtils.createAdnotationValue('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
            
            pdfUtils.createAdnotationText('20.**)','Adnotacja o wniesieniu uwag przez członków Komisji z wymienieniem konkretnych zarzutów ***); jeżeli nie ma,wpisać „brak zarzutów”'),
            pdfUtils.createAdnotationValue('brak uwag'),
            
            pdfUtils.createAdnotationText('21.**)','Inne uwagi; jeżeli nie ma, wpisać „brak uwag”'),
            pdfUtils.createAdnotationValue('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),

            {text: 'Przy sporządzeniu protokołu obecni byli członkowie Komisji:'},
            pdfUtils.createCommisionSignatures(),
            {text: '(pieczęć komisji)',margin:[0,50],style:{alignment:'center',fontSize:8}},
            {
			    table: {
			            widths: [150,150],
			            body: [[' '], [' ']]
			    },
			    layout: {
			        hLineWidth: function(i, node) {return (i === 0 || i === node.table.body.length) ? 0 : 0.5;},
			        vLineWidth: function(i, node) {return 0;},
    			}
			},
			{columns:[{width: 35, text: '*) ',style: {fontSize: 8},margin:[0,-12,0,0]},{width:'*',text:'W ponownym głosowaniu wpisać wyraz „PONOWNE”.',margin:[0,-12,0,0]}]},
			{columns:[{width: 35, text: '**) ',style: {fontSize: 8}},{width:'*',text:'Jeżeli treść dotycząca danego punktu protokołu nie mieści się na formularzu, należy dołączyć ją do protokołu, zaznaczając to w odpowiednim punkcie protokołu'}]},
			{columns:[{width: 35, text: '***) ',style: {fontSize: 8}},{width:'*',text:'W razie zgłoszenia uwag przez mężów zaufania lub członków Komisji, stanowisko Komisji wobec zarzutów należy dołączyć do protokołu.'}]},
		
        ],
        styles: {
					centerInputValue: {alignment:'right', color: 'red', bold :true, fontSize:14,margin:[0,4,2,0]},
					centerInputTextValue: {alignment:'center', color: 'red',fontSize:10}
				},
        defaultStyle: {
            font: 'times',
            fontSize:10
        }
    }; 
});

       