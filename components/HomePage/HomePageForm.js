import React, {useState} from 'react';

import {
    Box,
    Heading,
    Grid,
    Text,
    Select,
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Button
} from "@chakra-ui/core";
import {useBreakpointValue } from "@chakra-ui/media-query"


import InputFileBtn from "../Buttons/InputFileBtn";

import {SectionForm} from './homePageStyles'

import ColoredText from "../ColoredText";


const HomePageForm = () => {


    const variantdd = useBreakpointValue({ base: "outline", md: "solid" })

    const [val, setVal] = useState(0)

    const onSliderChange = (value) => setVal(value);

    return (


        <SectionForm>

            <Button colorScheme="teal" variant={variantdd}>
                Resize your window to see the button variant change
            </Button>
            <Box
                textAlign='center'
                minHeight="100vh"
                pt={100}
                pb={100}
                w={["95%", "90%"]}
                maxWidth="1280px"
                margin='auto'>

                <Heading
                    color="white"
                    fontWeight="500"
                    w='100%'
                    lineHeight="1"
                    fontSize={["1.6em", "1.8em", "2em", "2.3em"]}
                    as="h2">ОФОРМЛЕНИЕ <ColoredText>ЗАКАЗА</ColoredText></Heading>
                <Text
                    mt='20px'
                    color="gray.400"
                >

                    Перед заполнением формы ознакомьтесь с нашей схемой работы!
                </Text>

                <Box mt='50px'>
                    <Grid
                        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
                        templateRows={["repeat(2, 1fr)", "repeat(1, 1fr)"]}
                        gridAutoFlow
                        gridAutoRows='2'
                        gap={6}>
                        <Box w="100%" bg="blue.500">
                            <Select placeholder="Select option">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </Box>
                        <Box w="100%" bg="blue.500">
                            <Input placeholder="Your Email"/>
                        </Box>
                        <Box gridArea={["auto", "2 / 1 / 3 / 3", "auto"]} w="100%" bg="blue.500">
                            <Input placeholder="Your Name"/>
                        </Box>
                    </Grid>

                    <Grid
                        mt={6}
                        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
                        templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)", "auto"]}
                        gridAutoFlow
                        gridAutoRows='2'
                        gap={6}>

                        <Box pt="2" gridArea={["1 / 1 / 2 / 3", "1 / 1 / 2 / 3", "1 / 1 / 2 / 3"]} w="100%">

                            <Slider
                                aria-label="Labelz"
                                defaultValue="30"
                                aria-valuetext={val}
                                value={val}
                                onChange={onSliderChange}
                            >

                                <Text position="absolute" right={0} top='-15px' color="gray.100">{val}$</Text>
                                <SliderTrack/>
                                <SliderFilledTrack/>
                                <SliderThumb/>
                            </Slider>
                        </Box>

                        <Box gridArea={["2 / 1 / 3 / 3", "2 / 1 / 3 / 3", "auto"]} w="100%">
                            <InputFileBtn/>
                        </Box>
                    </Grid>

                </Box>

            </Box>

        </SectionForm>
    );
};

export default HomePageForm;