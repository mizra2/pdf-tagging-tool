import PDFItem from "./PDFItem"
import { useSelector } from "react-redux";

const PDFItems = () => {

    const pdfItems = useSelector(state => state.pdf.pdfList);

    return (<>
        {
            pdfItems.map((pdfItem, index) => (
                <PDFItem key={index} title={pdfItem.title} thumbnail={pdfItem.thumbnail} author={pdfItem.author} minioId={pdfItem.minioId} id={pdfItem.id} />
            ))
        }
    </>)

}

export default PDFItems