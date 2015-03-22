'use strict';

var PdfGeneratorUtils = function (){

    this.createVoteResultRow = function (col1Text,col2Text,voteValue){
        var row = [];

        row.push({text: col1Text ,style: {alignment:'center'},margin:[0,4,0,0]});
        row.push({text: col2Text, margin:[0,4,0,0]});
        
        //reverse string
        voteValue = (voteValue) ? this.reverse(voteValue.toString()) : undefined;

        for(var i=0; i <= 4; i++){
            
            if (voteValue && !voteValue.charAt(4-i)){
                row.push({text:'*',style: 'centerInputValue'});
            } else if(voteValue){
                row.push({text:voteValue.charAt(4-i), style: 'centerInputValue'});
            } else {
                row.push({text:' ', style: 'centerInputValue'});
            }
        }
        
        return row;

    };

    this.createVoteResultHeaderRow = function (col1Text,col2Text,col3Text){
        var row = [];

        var headerStyle = {alignment:'center',bold:true};

        row.push({text: col1Text ,style: headerStyle,margin:[0,4,0,0]});
        row.push({text: col2Text, margin:[0,4,0,0],style: headerStyle});
        row.push({text: col3Text,colSpan: 5,margin:[0,4,0,0],style: headerStyle});

        return row;
    };

    this.createVoteResultTable = function (rows){
        var table = {};

        table.headerRows = 0;
        table.widths = [20,365,12,12,12,12,12];
        table.body = rows;

        return table;
    };

    this.createNoticeColumns = function (noticeText){
        var columns = [];

        columns.push({width: 35, text: 'Uwaga! ',style: {bold: true}});
        columns.push({width: 'auto', text: noticeText});

        return  columns;
    };

    this.createHeaderElement = function (index,text){
        var header = {};

        header.margin = [0, 10, 0, 3];
        header.style = {fontSize: 12,bold: 'true'};
        header.columns = [];

        header.columns.push({width: 'auto', text: index,margin:[0,0,5,0]});
        header.columns.push({width: 'auto', text: text});

        return header;
    };

   this.createAdnotationText = function (number,text){
        
        var columns = [];
        columns.push({width: 35, text: number});
        columns.push({width: 470, text: text});
        
        return {columns:columns};
    };

    this.createAdnotationValue = function (text){
        var value = {};
        value.text = text;
        value.style = 'centerInputTextValue';
        value.margin = [0,6,0,6];
        return value;
    };

    this.createCommisionMember = function (name,surname,func){
            return{name:name,surname:surname,func:func};
    };


    this.createCommisionSignatures = function (){
       var commisionBoard = [
            this.createCommisionMember('Imię','Nazwisko','Funkcja'),
            this.createCommisionMember('Imię','Nazwisko','Funkcja'),
            this.createCommisionMember('Imię','Nazwisko','Funkcja'),
            this.createCommisionMember('Imię','Nazwisko','Funkcja'),
            this.createCommisionMember('Imię','Nazwisko','Funkcja'),
            this.createCommisionMember('Imię','Nazwisko','Funkcja'),
            this.createCommisionMember('Imię','Nazwisko','Funkcja')
        ];

        var container ={
                margin:[0,10,0,0],
                table:{
                    headerRows: 0,
                    widths: [35,150,300],
                    body:[]

                },
                layout: {
                        hLineWidth: function(i, node) {return 0;},
                        vLineWidth: function(i, node) {return 0;}
                }
            };

    
        var member;
        var row;
        for (var i=0; i< commisionBoard.length;i++){
            member = commisionBoard[i];
            row = [];
            container.table.body.push([
                    {text: (i+1).toString()+')'},
                    {text: member.name + ' ' + member.surname, style:{alignment:'center'},margin:[0,2,0,0]},
                    {text: new Array(100).join('.'),style:{alignment:'center'},margin:[0,4,0,0]}
                ]);
            }
        
        return container;
    };

   this.randomNumber = function (){
        return Math.floor((Math.random() * 99999) + 1);
    };

    this.reverse = function (s) {
      var o = [];
      for (var i = 0, len = s.length; i <= len; i++){
        o.push(s.charAt(len - i));
      }
      return o.join('');
    };

};