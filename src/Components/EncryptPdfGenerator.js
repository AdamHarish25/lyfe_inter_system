import HummusRecipe from 'hummus-recipe';

export default function EncryptedPdfGenerator() {


    var fileName = `encryptedPdf`;

    const pdfDoc = new HummusRecipe(`../Attachments/PDF/justPDF.pdf`, `../Attachments/PDF/${fileName}.pdf`);
    pdfDoc
        .encrypt({
            userPassword: '54321',
            ownerPassword: '54321',
            userProtectionFlag: 4
        })
        .endPDF()
}


