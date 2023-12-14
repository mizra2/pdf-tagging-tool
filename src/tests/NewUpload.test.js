import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewUpload from '../components/PDFUpload/NewUpload';
import UploadItem from '../components/Modal/UploadModal/UploadItem';
describe('<NewUpload />', () => {
    it('renders the upload button and opens modal when clicked', async () => {
        render(<NewUpload />);

        const uploadButton = screen.getByLabelText('Upload new PDF');
        expect(uploadButton).toBeInTheDocument();

        // Simulate a click on the button to open the modal
        fireEvent.click(uploadButton);

        const modalHeading = screen.getByText('Upload and attach files');
        expect(modalHeading).toBeInTheDocument();

        const closeButton = screen.getByLabelText('Close');
        fireEvent.click(closeButton);

        await waitFor(() => {
            expect(modalHeading).not.toBeInTheDocument();
        });
    });
    it('uploads a file and checks its title in the modal', () => {

        const file = new File(['hello'], 'hello.png', { type: 'image/png' })
        render(<UploadItem fileData={file} />);

        const fileNameElement = screen.getByText('hello.png');
        expect(fileNameElement).toBeInTheDocument();

    });
});
