import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: React.FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ md: 3, lg: 5 }}
      >
        {/* <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}> */}
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          <Box>
            <NavLink to="/home">ユーザー管理アプリ</NavLink>
          </Box>
        </Heading>
        {/* </Flex> */}
        <Box pr={4}></Box>

        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link to="/home/user_management">ユーザー一覧</Link>
          </Box>
          <Link to="/home/setting">設定</Link>
        </Flex>

        <MenuIconButton onOpen={onOpen} />
      </Flex>

      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
