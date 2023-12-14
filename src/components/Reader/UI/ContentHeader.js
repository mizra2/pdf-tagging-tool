import { Box, Text } from "@chakra-ui/react"

const ContentHeader = ({ fontColour, fontFamily, fontSize, title }) => {
    return (
        <Box display={"flex"} alignItems="center">
            <Text
                color={fontColour}
                fontFamily={fontFamily}
                fontSize={`${fontSize}px`}
                fontStyle={"normal"}
                fontWeight={"1000"}
                lineHeight={"96px"}
                marginLeft={75}
            >
                {title}
            </Text>
        </Box>)
}

export default ContentHeader;