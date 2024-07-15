import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
      {/* header */}
      
      <Header/>
      
      
      <div className="flex flex-col md:flex-row m-1 my-2 h-[450px]">
          <Sidebar/>
          <Body/> 
      </div>
       
      {/* <Footer/> */}
    </>
  )
}

export default App
