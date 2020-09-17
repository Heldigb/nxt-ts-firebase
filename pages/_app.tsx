import React from "react";
import {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/core";
import {customTheme} from '../styles/customTheme'


function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider resetCSS theme={customTheme}>

            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
