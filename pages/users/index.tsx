import {GetStaticProps} from 'next'

import {Box, Flex, Heading, Text} from "@chakra-ui/core";

import {User} from '../../interfaces'
import {sampleUserData} from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
    items: User[]
}

const WithStaticProps = ({items}: Props) => (
    <Layout title="Users List | Next.js + TypeScript Example">
        <Flex border='1px solid black' w={300} p={200} justifyContent="center">
            <Box>
                <Heading as="h1" >Users List</Heading>
                <Text>
                    Example fetching data from inside <code>getStaticProps()</code>.
                </Text>
                <Text mt={10} fontWeight="500" >You are currently on: /users</Text>
                <List items={items}/>

            </Box>
        </Flex>
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: User[] = sampleUserData
    return {props: {items}}
}

export default WithStaticProps
