import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='conteudo'>
      <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
