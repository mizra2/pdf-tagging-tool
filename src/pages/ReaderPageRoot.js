import { Outlet } from 'react-router-dom';
import ReaderHeader from '../components/Reader/UI/ReaderHeader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBackgroundColour } from '../store/slices/reader-options-slice';

const ReaderPageRoot = () => {

    const backgroundColour = useSelector(selectBackgroundColour);

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColour;

        return () => {
            document.body.style.backgroundColor = ''; // Resetting on component unmount
        };
    }, [backgroundColour]);
    return (<>
        <ReaderHeader />
        <Outlet />
    </>
    )

}

export default ReaderPageRoot