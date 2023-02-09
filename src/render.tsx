import React from "react";
import ReactPDF from "@react-pdf/renderer";
import Resume from "./Pdf";

export const render = () =>
  ReactPDF.render(<Resume />, `${__dirname}/../build/pdf/resume.pdf`);
