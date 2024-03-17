import React from 'react'
import { useSelector } from 'react-redux'
import { Badge, Flex, Text,Box,Heading } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

const Todo = ({owner, title, date, description, priority, status}) => {
  return (
    <Box
      m={'10px'}
      p="4"
      rounded="lg"
      shadow="md"
      bg='lightsalmon'
      w="full"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{
        shadow: "lg",
        transform: "translateY(-2px)",
      }}
    >
      <Flex alignItems="center" mb="3">
        <FaCircle color={priority === "high" ? "red.500" : "gray.500"} />
        <Text ml="2" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <Text color="gray.500" mb="3">
        {description}
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Heading size="sm">{owner}</Heading>
          <Text color="gray.500">{date}</Text>
        </Box>
        <Box>
        <Badge bg={'white'} variant='outline' colorScheme='purple'>{status}</Badge>
        </Box>
      </Flex>
    </Box>
  )
}

export default Todo