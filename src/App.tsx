import './App.css'
import Nav from './Nav.tsx'
import Intro from './component/introPage/Intro.tsx'
import Intro2 from './component/introPage/introSectionTwo.tsx'
import Intro3 from './component/introPage/introSectionThree.tsx'
function App() {
  //let aa:JSX.Element = <h1>gfd</h1>;

  return (
    <>
      <Nav></Nav>
      <section className='allSection'>
        <Intro></Intro>
        <Intro2></Intro2>
        <Intro3></Intro3>
      </section>
    </>
  )
}

export default App
