import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { LogoIconCustom } from '@/styles/CustomIcons';
import Link from 'next/link';

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
        <Link href="/dashboard">
          <Button mt={4} size="sm">
            View Dashboard
          </Button>
        </Link>
      ) : (
        <Button mt={4} size="sm" onClick={() => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default IndexPage;
