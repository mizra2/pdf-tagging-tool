import { render, screen, fireEvent } from '@testing-library/react';
import PDFItem from '../components/PDFUpload/PDFItem';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('<PDFItem />', () => {
    it('renders image and text, and navigates on click', () => {
        // Mock the useNavigate function
        const mockNavigate = jest.fn();
        useNavigate.mockReturnValue(mockNavigate);

        render(<PDFItem />);

        // Assert that the image and text are present
        const imageElement = screen.getByAltText('Sample Episode');
        const textElement = screen.getByText('Sample Episode');
        expect(imageElement).toBeInTheDocument();
        expect(textElement).toBeInTheDocument();

        // Simulate a click on the component
        fireEvent.click(screen.getByText('Sample Episode'));

        // Assert that useNavigate was called with the expected path
        expect(mockNavigate).toHaveBeenCalledWith('/pdf/12/tool/view');
    });
});
