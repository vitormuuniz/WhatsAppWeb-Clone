import { useState } from "react";
import ContentArea from "./ContentArea";
import { User } from "./interfaces/User";
import Sidebar from "./Sidebar";
import { StyWindow } from "./styles";

function App() {
  const [activeUser, setActiveUser] = useState<any>(null);
  const [user] = useState<User>({
    id: 123,
    name: "Vitor Muniz",
    avatar:
      "https://previews.123rf.com/images/yupiramos/yupiramos1709/yupiramos170900242/85023994-young-man-avatar-.jpg",
  });

  const [chatList] = useState<User[]>([
    {
      id: 321,
      name: "Fulano de tal 2",
      avatar:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
    {
      id: 321,
      name: "Fulano de tal 3",
      avatar:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
    {
      id: 321,
      name: "Fulano de tal 4",
      avatar:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
  ]);

  return (
    <StyWindow>
      <Sidebar
        user={user}
        chatList={chatList}
        setActiveUser={setActiveUser}
      />
      <ContentArea user={activeUser} />
    </StyWindow>
  );
}

export default App;
