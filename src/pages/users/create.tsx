import Link from "next/link";

import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
  const createUserFormSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'Password confirmation must be equal to "Password" field')
  })

export default function CreateUser() {

    const { register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFormSchema)
    });

    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) =>{
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <Box>
            <Header />

            <Flex 
                w="100%"
                my="6"
                maxW={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />
                
                <Box
                    as="form"
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p={["6", "8"]}
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading 
                        size="lg"
                        fontWeight="normal"
                    >
                        New user
                    </Heading>

                    <Divider 
                        my="6" 
                        borderColor="gray.700"
                    />

                    <VStack spacing="8">
                        <SimpleGrid 
                            minChildWidth="240px"
                            spacing={["6", "8"]}
                            w="100%"
                        >
                            <Input 
                                name="name" 
                                label="Full name"
                                error={errors.name}
                                {...register('name')}
                            />

                            <Input 
                                type="email"
                                name="email" 
                                label="Email"
                                error={errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid 
                            minChildWidth="240px"
                            spacing={["6", "8"]}
                            w="100%"
                        >
                            <Input 
                                type="password"
                                name="password" 
                                label="Password"
                                error={errors.password}
                                {...register('password')}
                            />

                            <Input 
                                type="password"
                                name="password_confirmation" 
                                label="Retype password"
                                error={errors.password_confirmation}
                                {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex
                        mt="8"
                        justify="flex-end"
                    >
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button 
                                    as="a" 
                                    colorScheme="whiteAlpha"
                                >
                                    Cancel
                                </Button>
                            </Link>
                            <Button 
                                type="submit" 
                                colorScheme="pink"
                                isLoading={formState.isSubmitting}
                            >
                                Save
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}