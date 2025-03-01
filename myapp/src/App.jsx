import './App.css'
import UserCard from './components/UserCard'




function App() {
  const name =["avi","Rahu","Rahib","Avinav"]
  const des = ["Tech","HR","Manager","Ops"]

  return (
    <>
      <ul>
        {
          name.map((item,index)=>(
            <UserCard key={index} title={item} desc={des[index]}/>
          ))
        }
      </ul>
    </>
  );
}


export default App
