import { useState } from 'react';
import ContentArea from './ContentArea';
import Sidebar from './Sidebar';
import { StyWindow } from './styles';

function App() {
  const [activeChat, setActiveChat] = useState<any>(null);

  return (
    <StyWindow>
        <Sidebar 
          activeChat={activeChat}
          setActiveChat={setActiveChat}
        />
        <ContentArea
          activeChat={activeChat}
        />
    </StyWindow>
  );
}

export default App;
