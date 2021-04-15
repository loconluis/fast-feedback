import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';
import DashboardShell from './DashboardShell';

const EmptyState = () => {
  return (
    <DashboardShell>
      <Flex
        width="100%"
        backgroundColor="white"
        borderRadius="8px"
        p={16}
        align="center"
        justify="center"
        direction="column"
      >
        <Heading as="h2" size="lg" mb={2}>
          You haven't added any sites.
        </Heading>
        <Text mb={4}>Welcome 👋🏼&nbsp;Let's get started.</Text>
        {/* <Button fontWeight="medium" variant="solid" size="md" maxW="300px">
          Add Your First Site
        </Button> */}
        <AddSiteModal />
      </Flex>
    </DashboardShell>
  );
};

export default EmptyState;
