import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const pdfURL = 'Resume_Priyanshu_buley.pdf';
  const pdfViewURL = 'Resume_viewer.pdf';
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'Resume_Priyanshu_buley.pdf';
    link.click();
  };
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <section id="skill">
      <div id="stars" />
      <div className="page3">
        <br />
        <br />
        <br />
        <div className="flex justify-center items-center p-12 flex-row	">
          <a
            href="/#"
            rel="noopener"
            className="download-button"
            onClick={downloadPDF}
          >
            <span>DOWNLOAD CV</span>
          </a>
        </div>

        <div className="flex justify-center items-center pb-8">
          <Document file={pdfViewURL}>
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.2 : 0.5}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
            <Page
              pageNumber={2}
              scale={width > 786 ? 1.2 : 0.5}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </div>
    </section>
  );
}

export default Resume;
