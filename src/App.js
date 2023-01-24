import './App.css';
import Banner from './Components/bannr/banner';
import Card from './Components/card/card';
import Footer from './Components/footer/footer';
import Goal from './Components/goal/goal';
import Header from './Components/Header/header';
import Requirement from './Components/requirements/requirements';
import Rooms from './Components/room/room';
import Sliderr from './Components/Slider/Slider';
import Team from './Components/team/team';
import Works from './Components/works/works';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Goal/>
      <Requirement/>
      <Works/>
      <Team/>
      <Rooms/>
      <Sliderr/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;