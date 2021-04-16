import Router from 'next/router';
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button,
} from '@chakra-ui/react';
import { LogoIconCustom } from '@/styles/CustomIcons';
import { useAuth } from '@/lib/auth';
import AddSiteModal from './AddSiteModal';

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  const { signout } = auth;

  const onSignOut = () => {
    signout();
    Router.push('/');
  };

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
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex alignItems="center">
          <Button
            color="black"
            _hover={{
              textDecor: 'underline',
              color: 'black',
            }}
            variant="link"
            fontWeight="normal"
            mr={4}
            backgroundColor="whiteAlpha.500"
            onClick={onSignOut}
          >
            Log Out
          </Button>
          <Avatar size="sm" src={auth?.user?.photoURL} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex
          maxWidth={'1250px'}
          width="100%"
          margin="0 auto"
          direction="column"
          px={8}
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between">
            <Heading mb={4}> My Sites</Heading>
            <AddSiteModal>+ Add Site</AddSiteModal>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DashboardShell;
