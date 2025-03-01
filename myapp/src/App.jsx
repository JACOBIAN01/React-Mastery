import './App.css'
// import element from './NewApp';
// import Fruits from './List';
// import People from './User';
// import Key from './Key';
import UserCard from './components/UserCard'

function App() {

  return (
    <>
      <UserCard title="Hello" desc="Hi" />
      <UserCard title="Hello2" desc="Hi2" />
      <UserCard title="Hello3" desc="Hi3" />
    </>
  );
}


export default App
