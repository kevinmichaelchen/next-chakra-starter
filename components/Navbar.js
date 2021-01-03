import {
  Stack,
  Flex,
  Text,
  Image,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import { siteData } from "./Head";

const Navbar = () => {
  const { siteTitle } = siteData;
  return (
    <Flex
      bg={useColorModeValue("white", "black")}
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href={"/"} passHref>
        <ChakraLink _hover={{ textDecoration: "none" }}>
          <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
              boxSize={"30px"}
            />
            <Text pl={3}>{siteTitle}</Text>
          </Flex>
        </ChakraLink>
      </Link>
      <Stack
        isInline
        basis={"90%"}
        justify="flex-end"
        align="center"
        spacing={["1rem", "2rem", "3rem"]}
      >
        <Link href={"/"} passHref>
          <ChakraLink>Home</ChakraLink>
        </Link>
        <Link href={"/about"} passHref>
          <ChakraLink>About</ChakraLink>
        </Link>
        <Link href={"/contact"} passHref>
          <ChakraLink>Contact</ChakraLink>
        </Link>
        <ThemeToggler />
      </Stack>
    </Flex>
  );
};

export default Navbar;
