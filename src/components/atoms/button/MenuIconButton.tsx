import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React, { memo } from "react";

type Props = {
  onOpen: () => void
}

export const MenuIconButton: React.FC<Props> = memo(({onOpen}) => {
  return (
    <IconButton
      aria-label="メニューボタン"
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      icon={<HamburgerIcon />}
      onClick={onOpen}
    />
  );
});
