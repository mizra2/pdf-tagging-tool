import { Outlet } from 'react-router-dom';
import Header from '../components/UI/Header';
import useNav from '../hooks/use-navigator';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchPdfItems } from '../store/slices/pdf-library';
import { updateNewUpload } from '../store/slices/pdf-library';
const PDFRootLayout = () => {

    
	const dispatch = useDispatch();
	const newUpload = useSelector(state => state.pdf.newUpload);
    const isLoading = useSelector(state => state.pdf.isLoading);
    useEffect(() => {
		dispatch(fetchPdfItems());
		dispatch(updateNewUpload(false));
	}, [dispatch, newUpload]);

    useEffect(() => {
        document.body.style.backgroundColor = '#efedeb';

        return () => {
            document.body.style.backgroundColor = ''; // Resetting on component unmount
        };
    }, []);

    const headerType = useNav();
    
    return (
        <div>
            <Header headerType={headerType} />
            {!isLoading && <Outlet/>}
        </div>
    )
}

export default PDFRootLayout;
