import { StyWindow } from './styles';
import ContentArea from './ContentArea';
import Sidebar from './Sidebar';

function App() {
  return (
    <StyWindow>
        <Sidebar/>
        <ContentArea/>
    </StyWindow>
  );
}

export default App;
