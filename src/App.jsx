import Chat from "./components/chats/Chat"
import Detial from "./components/details/Detail";
import List from "./components/list/List";

const App = () => {
  return (
    <div className='container'>
      <List />
      <Chat />
      <Detial />
    </div>
  )
}

export default App