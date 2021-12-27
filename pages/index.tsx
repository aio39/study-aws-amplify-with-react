import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Input,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

const todos = [{ name: 'name', description: 'desc' }];

const Home: NextPage = () => {
  return (
    <VStack>
      <Box>
        <Center>
          <Text color="teal" fontWeight="bold" fontSize="2xl">
            Amplify GraphQL TodoList 만들기
          </Text>
        </Center>
        <form>
          <Box mt={2}>
            <Input
              name="subject"
              placeholder="제목"
              // onChange={handleChange}
              // value={name}
            />
            <Input
              name="description"
              placeholder="내용"
              // onChange={handleChange}
              // value={description}
            />
          </Box>
          <Center>
            <Box mt={2}>
              <Button
                colorScheme="teal"
                type="submit"
                // onClick={handleSubmit}
              >
                등록
              </Button>
            </Box>
          </Center>
        </form>
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => {
          return (
            <ListItem key={index}>
              <Box fontWeight="semibold">
                <ListIcon as={CheckCircleIcon} color="teal.500" />
                {todo.name}
              </Box>
              <Box color="gray.500">{todo.description}</Box>
            </ListItem>
          );
        })}
      </List>
    </VStack>
  );
};

export default Home;
