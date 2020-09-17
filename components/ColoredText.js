import React from 'react';
import {Text} from "@chakra-ui/core";

const ColoredText = ({children}) => {
    return (
        <Text as='span' color="blue.500">
            {children}
        </Text>
    );
};

export default ColoredText;