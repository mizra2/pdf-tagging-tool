import React from "react";
import ReactQuill from "react-quill";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useKeycloakContext } from "../../context/KeycloakContext";

const modules = {
    toolbar: {
        container: "#my-quill-toolbar",
    },
};

const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
    "color",
    "blockquote",
];

const WritingArea = ({ value, setValue, setJson, setPlainText, doUpload }) => {


    const quillRef = useRef(null);
    const { storyID } = useParams();
    const { withToken } = useKeycloakContext();

    const paddingXValues = {
		base: "10%",
		sm: "40%",
		md: "40%",
		lg: "35%",
		xl: "25%",
		"2xl": "10%"
	};


    useEffect(() => {
        const fetchContent = async () => {
            try {
                // Construct the URL with the story ID

                const url = `${process.env.REACT_APP_BACKEND_URL}/v2/story/content/fetch/delta/${storyID}`;

                // Make the GET request using axios
                const response = await axios.get(url, {
                    headers: withToken({
                        'accept': '*/*'
                    })
                });

                const editor = quillRef.current.getEditor();
                if (response.status === 200) {

                    editor.setContents(response.data.delta);
                    // Set the initial value for the editor
                    const delta = response?.data?.delta;
                    const html = editor?.container?.firstChild?.innerHTML;
                    const text = editor?.getText();
                
                    setValue(delta);
                    setJson(html);
                    setPlainText(text); // Extract plain text from the editor
                    doUpload({delta, html, text}, true);

                }
            } catch (error) {
                console.error('Failed to fetch content:', error);
            }
        };
        fetchContent();
    }, [storyID]);

    function handleChange(content, delta, source, editor) {
        const editorRef = quillRef.current.getEditor();
        const html = editorRef?.container?.firstChild?.innerHTML;
        const text = editorRef?.getText();
        setJson(html);
        setPlainText(text); // Extract plain text from the editor
        setValue(editor.getContents());
    }

    return (

        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            flexDirection="row"
            mr={paddingXValues}
        >
            <ReactQuill modules={modules} ref={quillRef} formats={formats} value={value} onChange={handleChange} />
        </Box>

    );
};

export default WritingArea;
