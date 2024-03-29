import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () =>{

    if(!localStorage.getItem('username')){
        return <LoginForm/>
    }

    return (
        <ChatEngine
        height="100vh"
        projectID="331794f5-dd46-47f5-9827-5ce65cf8226f"
        userName={ localStorage.getItem('username') }
        userSecret={localStorage.getItem('password')}
        renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;