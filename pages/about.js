import { Heading, Stack, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";

const About = ({ ...props }) => {
  return (
    <Layout pageTitle="About" {...props}>
      <Stack spacing={2} maxW={500} lineHeight="taller">
        <Heading>About</Heading>
        <Box>This is an About sentence.</Box>
      </Stack>
    </Layout>
  );
};

export default About;

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "../src/Chakra";
