import { Stack, Box } from "@chakra-ui/react";
import Layout from "../src/components/Layout";

export default function Home({ ...props }) {
  return (
    <Layout {...props}>
      <Stack
        spacing={"3rem"}
        justify="center"
        align={"center"}
        shouldWrapChildren
        maxW={800}
      >
        <Box>Your content</Box>
      </Stack>
    </Layout>
  );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "../src/Chakra";
