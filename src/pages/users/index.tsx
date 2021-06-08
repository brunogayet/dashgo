import Link from "next/link";

import { Box, Button, Checkbox, Flex, Heading, Icon, IconButton, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />

            <Flex 
                w="100%"
                my="6"
                maxW={1480}
                mx="auto"
                px={["4", "4", "6"]}
            >
                <Sidebar />
                
                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p="8"
                    pr={["2", "8"]}
                    pl={["2", "8"]}
                >
                    <Flex
                        mb="8"
                        justify="space-between"
                        align="center"
                    >
                        <Heading
                            size="lg"
                            fontWeight="normal"
                            pl={["4"]}
                        >
                            Users
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                mr={["4"]}
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            >
                                Add new
                            </Button>
                        </Link>
                    </Flex>
                
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th 
                                    px={["4", "4", "6"]}
                                    color="gray.300"
                                    width="8"
                                >
                                    <Checkbox colorScheme="pink" />
                                </Th>                                
                                <Th>User</Th>
                                { isWideVersion && <Th>Registration date</Th> }
                                <Th width={["6", "8"]}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Bruno Gayet</Text>
                                        <Text fontSize="sm" color="gray.300">brunogayet@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>08 de junho, 2021</Td> }
                                <Td>
                                    { !isWideVersion && (
                                        <IconButton
                                            aria-label="Edit user"
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="linkedin"
                                            icon={<Icon as={RiPencilLine} fontSize="16" />}
                                        />
                                    )}

                                    { isWideVersion && (
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="linkedin"
                                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        >
                                            Edit
                                        </Button>
                                    )}
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Bruno Gayet</Text>
                                        <Text fontSize="sm" color="gray.300">brunogayet@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>08 de junho, 2021</Td> }
                                <Td>
                                { !isWideVersion && (
                                        <IconButton
                                            aria-label="Edit user"
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="linkedin"
                                            icon={<Icon as={RiPencilLine} fontSize="16" />}
                                        />
                                    )}

                                    { isWideVersion && (
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="linkedin"
                                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        >
                                            Edit
                                        </Button>
                                    )}
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Bruno Gayet</Text>
                                        <Text fontSize="sm" color="gray.300">brunogayet@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>08 de junho, 2021</Td> }
                                <Td>
                                { !isWideVersion && (
                                        <IconButton
                                            aria-label="Edit user"
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="linkedin"
                                            icon={<Icon as={RiPencilLine} fontSize="16" />}
                                        />
                                    )}

                                    { isWideVersion && (
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="linkedin"
                                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        >
                                            Edit
                                        </Button>
                                    )}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}