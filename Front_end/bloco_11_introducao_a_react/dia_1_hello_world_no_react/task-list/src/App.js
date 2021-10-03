import './App.css';

const Task = ({liTask}) => {
  return (
    <li>{liTask}</li>
  )
}

function App() {
  const TaksList = ['Taks1','Taks2','Taks3','Taks4']
  return (
    TaksList.map((task) => <Task liTask={task} />)
  );
}

export default App;
