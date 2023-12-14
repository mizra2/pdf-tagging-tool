import { Document } from "react-pdf";
const DocumentLoader = ({ file, children, onLoadSuccess }) => {
  return (
    <div>
    <Document file={file} onLoadSuccess={onLoadSuccess} loading={<h1>{""}</h1>}>
      {children}
    </Document>
    </div>
  );
};

export default DocumentLoader;
