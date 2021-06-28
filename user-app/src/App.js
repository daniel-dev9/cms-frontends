import './App.css';

import Routes from "./routes";
import ConfigProvider from './services/ConfigProvider';

function App() {
  return (
    <ConfigProvider>
      <Routes />
    </ConfigProvider>
  );
}

export default App;
