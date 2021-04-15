import React from 'react';
import {
  ChakraProvider,
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { LogoIconCustom } from '@/styles/CustomIcons';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <Flex flexDirection="column" alignItems="stretch" height="100vh">
      <Flex
        justifyContent="space-between"
        color="#000000"
        py={4}
        px={8}
        backgroundColor="whiteAlpha.900"
        alignItems="center"
        p={4}
      >
        <Stack spacing={4} isInline align="center">
          <LogoIconCustom
            display="block"
            boxSize={8}
            m={0}
            p={0}
            color={'black'}
          />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems="center">
          <Link mr={4} backgroundColor="whiteAlpha.500">
            Account
          </Link>
          <Avatar size="sm" src={auth?.user?.photoURL} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex
          maxWidth={'900px'}
          w="100%"
          ml="auto"
          mr="auto"
          direction="column"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DashboardShell;
