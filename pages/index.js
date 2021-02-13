import { Stack, Box } from "@chakra-ui/react";
import Layout from "../src/components/Layout";
import { useIntl } from "react-intl";

export default function Home({ ...props }) {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <Layout {...props}>
      <Stack
        spacing={"3rem"}
        justify="center"
        align={"center"}
        shouldWrapChildren
        maxW={800}
      >
        <h1>{f("hello")}</h1>
        <Box>Your content</Box>
      </Stack>
    </Layout>
  );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "../src/Chakra";
