import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React, { memo, ReactNode } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: React.FC<Props> = memo(
  ({ imageUrl, userName, fullName, onClick, id }) => {
    return (
      <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4} onClick={() => onClick(id)}>
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="160px"
            src={imageUrl}
            alt={userName}
            m="auto"
            _hover={{ cursor: "pointer", opacity: 0.8 }}
            
          />
          <Text fontSize="lg" fontWeight="bold">
            {userName}
          </Text>
          <Text fontSize="sm" color="gray">
            {fullName}
          </Text>
        </Stack>
      </Box>
    );
  }
);
