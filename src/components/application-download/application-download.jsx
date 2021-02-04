import React from "react";
import { APPLICATON_PDF_FILENAME, CDN_URL } from "../../config";

import "./application-download.scss";

const ApplicationDownload = () => (
  <div className="application-download">
    <a
      href={`${CDN_URL}/documents/${APPLICATON_PDF_FILENAME}`}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      Download application
    </a>
  </div>
);

export default ApplicationDownload;
