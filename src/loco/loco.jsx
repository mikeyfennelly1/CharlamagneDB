import Navbar from '../misc/Navbar.jsx';
import Eight from '../landing-page/8.jsx'
import HeroLoco from './Hero-Loco.jsx';
import Six from '../landing-page/6.jsx'
import Loco2 from './loco-2.jsx';
import Loco4 from './loco-4.jsx';


const Loco = () => {
    return (
        <>
            <Navbar/>
            <HeroLoco/>
            <Loco2 />
            <Six />
            <Loco4/>
            <Eight/>
        </>
    );
}
 
export default Loco;