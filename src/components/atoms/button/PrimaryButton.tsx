import { Button } from "@chakra-ui/react";
import React, { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: React.FC<Props> = memo(
  ({ children, onClick, disabled = false, loading = false }) => {
    return (
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        isLoading={loading}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
);
