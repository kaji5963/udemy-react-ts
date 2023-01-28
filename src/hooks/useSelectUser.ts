import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: User[];
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;

    const targetUser = users.find((user) => user.id === id);
    // setSelectedUser(targetUser ?? null); 左辺がnullまたはundefinedの場合に右辺を実行
    setSelectedUser(targetUser!); // 必ずidが一致する場合、undefinedを無視する
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
