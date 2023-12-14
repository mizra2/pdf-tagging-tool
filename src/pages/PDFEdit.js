import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Box } from "@chakra-ui/react";
import '../components/Quill/quill.css'
import WritingArea from "../components/Quill/WritingArea";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from "axios";
import { useKeycloakContext } from "../context/KeycloakContext";
import { useToast } from "@chakra-ui/react";


const PDFEditPage = () => {

    const [isSidebarMounted, setIsSidebarMounted] = useState(false);
    const [value, setValue] = useState('');
    const [json, setJson] = useState(null);
    const [plainText, setPlainText] = useState(null);
    const { withToken } = useKeycloakContext();
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast()

    const api = axios.create({ timeout: 0 });
    const { storyID } = useParams();

    const doUpload = async (jsonData, initalRender) => {
        if (!initalRender) {
            setIsLoading(true);
        }
        try {
            const response = await api.put(`${process.env.REACT_APP_BACKEND_URL}/v2/story/content/update/${storyID}`, jsonData, {
                headers: withToken({
                    "Content-Type": "application/json"
                })
            });
            if (response.status === 200 && !initalRender) {
                setIsLoading(false);
                toast({
                    title: "Successfully Submitted!",
                    status: "success",
                    isClosable: true,
                    duration: 2000,
                    position: "top"
                })
            }
        } catch (error) {
            console.error("An error occured:", error?.message)
        }
    }

    const onSubmit = () => {
        doUpload({
            delta: value,
            html: json,
            text: plainText
        }, false);
    }

    useEffect(() => {
        setIsSidebarMounted(true);
    }, []);

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            flexDirection="row"
            width="100%"
        >
            <Sidebar onSubmit={onSubmit} isSubmitLoading={isLoading} />

            {isSidebarMounted && <WritingArea
                doUpload={doUpload}
                setPlainText={setPlainText}
                setJson={setJson}
                value={value}
                setValue={setValue}
            />}
        </Box>
    );
};

export default PDFEditPage;
