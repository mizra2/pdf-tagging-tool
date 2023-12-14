import { useState, useEffect } from 'react';
import axios from 'axios';

// React Hook To Fetch PDFs using AXIOS
const useLoader = (pdfID) => {

    ////    States      ////


    const [pdfUrl, setPdfUrl] = useState(null);

    ////      Fetch PDF Handler :: [pdfID]      ////
    // TODO :: FIX FAILED RESPONSE 

    useEffect(() => {
        const fetchPDF = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/v3/media/public/fetch/pdf/${pdfID}`, {
                    responseType: "arraybuffer",
                });

                const pdfBlob = new Blob([response.data], {
                    type: "application/pdf",
                });
                setPdfUrl(URL.createObjectURL(pdfBlob));
            } catch (error) {
                console.error("Error fetching PDF", error);
            }
        };

        fetchPDF();
    }, [pdfID]);

    return pdfUrl;
};

export default useLoader;
