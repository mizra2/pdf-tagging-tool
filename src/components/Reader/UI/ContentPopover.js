import { Popover, PopoverTrigger, IconButton, PopoverContent, Center, Grid, Button, PopoverArrow, PopoverBody } from "@chakra-ui/react"
import { RxLetterCaseUppercase, RxLetterCaseLowercase } from "react-icons/rx"
import { VscCaseSensitive } from "react-icons/vsc"

const ContentPopover = ({ fontIncreaseHandler, fontDecreaseHandler, backgroundColourChangeHandler, fontChangeHandler, iconColor }) => {

    return (
        <Popover size={"200px"} closeDelay={"200ms"} closeOnBlur={true} >
            <PopoverTrigger>
                <IconButton
                    _hover={{ bg: "transparent" }}
                    icon={<VscCaseSensitive size={"32px"} color={iconColor} />}
                    variant={"ghost"}
                    marginLeft={"55px"}
                />
            </PopoverTrigger>
            <PopoverContent bg={"#FFF"} >
                <PopoverArrow />
                <PopoverBody marginX={2}>
                    <Center
                        width={"100%"}
                        display={"flex"}
                        flexDir={"row"}
                        gap={"50px"}
                        borderBottomColor={"rgb(49, 84, 166)"}
                        paddingBottom={2}
                        borderBottomWidth='2px'
                        mt={2}
                    >
                        <IconButton
                            _hover={{ bg: "transparent" }}
                            icon={<RxLetterCaseUppercase size={"36px"} color="rgba(69, 72, 81, 1)" />}
                            variant={"ghost"}
                            onClick={fontIncreaseHandler}
                        />

                        <IconButton
                            _hover={{ bg: "transparent" }}
                            icon={<RxLetterCaseLowercase size={"36px"} color="rgba(69, 72, 81, 1)" />}
                            variant={"ghost"}
                            onClick={fontDecreaseHandler}
                        />

                    </Center>

                    <Center gap={"20px"} pt={5} borderBottomColor={"rgb(49, 84, 166)"} paddingBottom={5} borderBottomWidth='2px'>
                        <Button onClick={() => backgroundColourChangeHandler("#fdf5eb", "#454851", "rgba(69, 72, 81, 1)")} bg={"#fdf5eb"} borderRadius={"50%"} variant={"ghost"} _hover={{ bg: "rgba(253,245,235,0.6)" }}></Button>
                        <Button onClick={() => backgroundColourChangeHandler("#D2C6A3", "#454851", "rgba(69, 72, 81, 1)")} bg={"#D2C6A3 "} borderRadius={"50%"} variant={"ghost"} _hover={{ bg: "rgba(210,198,163,0.6)" }}></Button>
                        <Button onClick={() => backgroundColourChangeHandler("#5A5A5C", "#fdf5eb", "#fdf5eb")} bg={"#5A5A5C"} borderRadius={"50%"} variant={"ghost"} _hover={{ bg: "rgba(90,90,92,0.6)" }}></Button>
                        <Button onClick={() => backgroundColourChangeHandler("#333333", "#fdf5eb", "#fdf5eb")} bg={"#333333"} borderRadius={"50%"} variant={"ghost"} _hover={{ bg: "rgba(51,51,51,0.6)" }}></Button>
                    </Center>

                    <Grid
                        templateColumns='repeat(2, 1fr)'
                        my={5}
                        gap={2}
                        borderBottomColor={"rgb(49, 84, 166)"}
                        paddingBottom={5}
                        borderBottomWidth='2px'>

                        <Button onClick={() => fontChangeHandler("Georgia")} borderRadius={4} fontSize={18} fontFamily={"Georgia"} variant={"outline"} >Georgia</Button>
                        <Button onClick={() => fontChangeHandler("Palatino")} borderRadius={4} fontSize={20} fontFamily={"Palatino"} variant={"outline"} >Palatino</Button>
                        <Button onClick={() => fontChangeHandler("PT Serif")} borderRadius={4} fontSize={18} fontFamily={"PT Serif"} variant={"outline"} >PT Serif</Button>
                        <Button onClick={() => fontChangeHandler("Calibri")} borderRadius={4} fontSize={22} fontFamily={"Calibri"} variant={"outline"} >Calibri</Button>

                    </Grid>

                </PopoverBody>
            </PopoverContent>
        </Popover>



    )
}

export default ContentPopover;