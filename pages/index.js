import { Button } from '@chakra-ui/button';
import { Code, Heading, Text } from '@chakra-ui/layout';
import { useAuth } from '@/lib/auth';

const IndexPage = () => {
  const auth = useAuth();
  return (
    <main>
      <Heading>Fast Feedback</Heading>
      <Text>
        Current user: <Code>{auth?.user?.email}</Code>{' '}
      </Text>

      {auth?.user ? (
        <Button onClick={() => auth.signout()}>Sign Out</Button>
      ) : (
        <Button onClick={() => auth.signinWithGithub()}>Sign In</Button>
      )}
    </main>
  );
};

export default IndexPage;
