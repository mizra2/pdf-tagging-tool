import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PDFUploadPage from "./pages/PDFUpload";
import PDFRootLayout from "./pages/PDFToolRoot";
import PDFViewPage from "./pages/PDFView";
import PDFEditPage from "./pages/PDFEdit";
import { pdfjs } from "react-pdf";
import theme from "./components/styles/theme";
import store from "./store/store";
import { Provider } from "react-redux";
import "react-quill/dist/quill.snow.css";
import ReaderPageRoot from "./pages/ReaderPageRoot";
import ReaderPDF from "./pages/ReaderPDF";
import ReaderText from "./pages/ReaderText";

import SecureRoute from "./components/SecureRoute/SecureRoute";

import Keycloak  from "keycloak-js"
import { KeycloakProvider } from "keycloak-react-web"
import KeycloakContextProvider from "./context/KeycloakContext";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const router = createBrowserRouter([
    {
        element: <SecureRoute component={<PDFRootLayout />}/>,
        path: "/", // Set this as the default route
        children: [
            {
                index: true,
                element: <PDFUploadPage />,
            },
            {
                path: "/pdf/:pdfID/tool/view",
                element: <PDFViewPage />,
            },
            {
                path: "/pdf/:pdfID/tool/edit/:storyID",
                element: <PDFEditPage />,
            },
        ],
    },
    {
        element: <ReaderPageRoot />,
        path: "/reader",
        children: [
            {
                path: "/reader/:pdfID/text/:storyID",
                element: <ReaderText />
            },
            {
                path: "/reader/:pdfID/pdf/:storyID",
                element: <ReaderPDF />
            }

        ]
    }
]);

function App() {

    pdfjs.disableAutoFetch =
        pdfjs.disableAutoFetch === undefined ? false : pdfjs.disableAutoFetch;
    
    const keycloakSetting = {
        url: process.env.REACT_APP_KEYCLOAK_URL,
        realm: process.env.REACT_APP_KEYCLOAK_REALM,
        clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID
    };
          
    const authInstance = new Keycloak(keycloakSetting)

    return (
        <KeycloakProvider client={authInstance}>
            <KeycloakContextProvider>
                <Provider store={store}>
                    <ChakraProvider theme={theme}>
                        <RouterProvider router={router} />
                    </ChakraProvider>
                </Provider>
            </KeycloakContextProvider>
        </KeycloakProvider>
    );
}

export default App;
