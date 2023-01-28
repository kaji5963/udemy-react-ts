import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: React.FC<Props> = memo(({ onClose, isOpen }) => {
  const navigate = useNavigate();

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button onClick={() => navigate("/home")} w="100%">
              TOP
            </Button>
            <Button onClick={() => navigate("/home/user_management")} w="100%">
              ユーザー一覧
            </Button>
            <Button onClick={() => navigate("/home/setting")} w="100%">
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
