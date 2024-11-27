import React, { FC } from 'react';
import { PDFViewer, Document, Page, BlobProvider, Image } from '@react-pdf/renderer';



interface Props {
    base64Pdf?: string
  
}

const MyPDFViewer: FC<Props>  = ({ base64Pdf }) => {
  // Function to convert Base64 to Uint8Array
  const base64ToUint8Array = (base64: any) => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  // Convert the Base64 PDF to Uint8Array
  const pdfUint8Array = base64ToUint8Array(base64Pdf);

  return (
    <PDFViewer width="100%" height="500px">
      <Document>
        <Page>
          {/* Add other content to the PDF */}
          <Image src={pdfUint8Array} />
          {/* Add other content to the PDF */}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyPDFViewer;
