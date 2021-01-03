import { Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

const Contact = ({ ...props }) => {
  return (
    <Layout pageTitle="Contact Us" {...props}>
      <Heading>Contact</Heading>
      Coming soon.
    </Layout>
  );
};

export default Contact;

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "../src/Chakra";
