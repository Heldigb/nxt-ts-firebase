import React from 'react';
import {
    HeroContent,
} from './homePageStyles'
import {Box, Flex, Text, Button, ButtonGroup, Heading} from "@chakra-ui/core";
import ColoredText from "../ColoredText";

const HomeBanner = () => {
    return (
        <HeroContent>

            <Box
                w={["95%", "90%"]}
                maxWidth="1280px"
                margin='auto'>

                <Flex
                    height="100vh"
                    align="start"
                    justify="center"
                    direction="column"
                    width={[
                        "100%",
                        "70%",
                        "60%",
                        "50%",
                    ]}

                >
                    <Heading as='h1'
                             color="white"
                             fontWeight="500"
                             lineHeight="1.2"
                             fontSize={["2em", "2.5em", "3em", "4em"]}
                    >
                        <ColoredText>LOREM IPSUM </ColoredText>
                        DOLOR SIT, CONSECTETUR
                        <ColoredText> ADIPISICING</ColoredText>
                    </Heading>
                    <Text
                        as="h3"
                        mt='30px'
                        color="white"
                        fontSize="1.2em"
                    >
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Expedita,voluptatum!
                    </Text>
                    <ButtonGroup mt='15px' w='100%' spacing={4}>
                        <Button mt='15px' width={[
                            "100%",
                            "100%",
                            "100%",
                            "30%",

                        ]} leftIcon="email" variantColor="blue" variant="solid">
                            Email
                        </Button>
                        <Button mt='15px' width={[
                            "100%",
                            "100%", "100%",
                            "30%",

                        ]} rightIcon="arrow-forward" variantColor="gray" variant="solid">
                            Call us
                        </Button>
                    </ButtonGroup>

                </Flex>
            </Box>
        </HeroContent>

    )
}

export default HomeBanner;