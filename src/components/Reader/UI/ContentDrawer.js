import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import ContentItem from "./ContentItem"

const ContentDrawer = ({ backgroundColor, isOpen, fontColour, onClose, stories }) => {

    return (<Drawer placement={"left"} onClose={onClose} isOpen={isOpen} bg={backgroundColor} size={"sm"} className="noScrollbar">
        <DrawerOverlay />
        <DrawerContent bg={backgroundColor} className="noScrollbar">
            <DrawerHeader
                fontFamily={"PT Serif"}
                marginX={"40px"}
                borderBottomColor={"rgb(49, 84, 166)"}
                borderBottomWidth='2px'
                bg={backgroundColor}
                textAlign={"center"}
                fontSize={"26px"}
                fontWeight={"semibold"}
                className="noScrollbar"
                color={fontColour}
            >Table Of Contents</DrawerHeader>

            <DrawerBody bg={backgroundColor} className="noScrollbar" width={"100%"} overflowX={"hidden"}>
                {stories && (stories.map((story, index) => (
                    <ContentItem key={index} story={story} onClose={onClose} fontColour={fontColour} />
                )))}

            </DrawerBody>
        </DrawerContent>
    </Drawer>)
}

export default ContentDrawer

