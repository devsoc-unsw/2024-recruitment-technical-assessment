import './App.css'
import Header from './components/Header';
import LeftNav from './components/LeftNav'
import Main from './components/Main';


function App() {


  return (
    <div className='flex md:gap-10'>
      <LeftNav />
      <div className='p-5 w-full flex flex-col items-center gap-10'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
