import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/chatFeed/ChatFeed';

import './app.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='2008af8f-7cb9-4777-9a96-bebb9e86a45d'
      userName='JJackson22'
      userSecret='123123'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
