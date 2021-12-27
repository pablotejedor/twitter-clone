import React from 'react';
import {
  Container,
  Stack,
  Box,
  Button,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import UserInfo from './components/UserInfo';

const Layout = ({ children }) => {
  return (
    <>
      <Container height="100%" maxWidth="container.xl" alignSelf="center">
        <Stack direction="row" height="100%" divider={<StackDivider />}>
          <Stack
            paddingLeft={4}
            paddingRight={8}
            paddingY={4}
            margin={0}
            justifyContent="space-between"
          >
            <Stack justifyContent={'space-between'}>
              <Logo />
              <NavBar />
              <Button colorScheme="primary" size="lg">
                Twittear
              </Button>
            </Stack>

            <UserInfo />
          </Stack>

          <Box
            width="100%"
          >
            {children}
          </Box>
          <Stack width="72%">
            {/* <Text>Qué está pasando</Text> */}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Layout;
