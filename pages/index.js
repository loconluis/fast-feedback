import { Button } from '@chakra-ui/button';
import { Flex, Heading } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { LogoIconCustom } from '@/styles/CustomIcons';
import EmptyState from '@/components/EmptyState';

const IndexPage = () => {
  const auth = useAuth();
  // return <EmptyState />
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      justifyContent="center"
      h="100%"
      m={'auto'}
    >
      <LogoIconCustom color="black" boxSize={65} />
      {auth?.user ? (
        <Button mt={4} size="sm" onClick={() => auth.signout()}>
          Sign Out
        </Button>
      ) : (
        <Button mt={4} size="sm" onClick={() => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default IndexPage;
