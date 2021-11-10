import React, { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resumePdf from "../Assets/resume.pdf";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    // <div>
    //   <Document file={resumePdf}>
    //     <Page style={{ padding: 0, margin: 0 }} scale={2} pageNumber={1} />
    //     <Page style={{ padding: 0, margin: 0 }} scale={2} pageNumber={2} />
    //   </Document>
    // </div>
    <div className="home-header">
      <div>
        <Button
          variant="primary"
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </Button>
      </div>
      <Document file={resumePdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page scale={2} pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default Resume;
