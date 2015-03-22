/*global pdfMake, docDefinition*/
'use strict';

function printForm(method) {
    if (parseInt(method) === 3) {
        pdfMake.createPdf(docDefinition).download('poc_prezydent_formularz.pdf');
    } else {
        $('#pdfMethod').val(method);
        $('#theForm').submit();
    }
}
