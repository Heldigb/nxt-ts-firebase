import React from 'react';
import {Box, Flex, Link, Image, Text} from "@chakra-ui/core";

const NavLink = ({children, ...props}) => (
    <Link px={2} color="white" {...props}>
        {children}
    </Link>
);

const Navbar = () => {
    return (
        <Flex
            position="fixed"
            bg="rgb(39, 39, 51 , 0.9)"
            w="100%"
            px={5}
            py={4}
            zIndex='999'
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex flexDirection="row" justifyContent="center" alignItems="center">
                <Link display="inline-flex" alignItems="center" href="/">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
                    w={30}
                />

                <Text float="left" pl={3} color="white">
                    Company
                </Text>
                </Link>
            </Flex>
            <Box>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/users">Users</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/api/users">API</NavLink>
                <NavLink>Contact</NavLink>
            </Box>
        </Flex>

    );
};

export default Navbar;