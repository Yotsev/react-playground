import Footer from './components/Footer';
import Header from './components/Header';
import Information from './components/Information';
import Navigation from './components/Navigation';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';

function App() {
    return (
        <div>
            <Navigation />
            <div className="container-fluid">
                {/* <!-- Start: Header --> */}
                <Header />
                {/* <!-- End: Header --> */}
            </div>
            <div className="container">
                {/* <!-- Start: Desc --> */}
                <Information />
                {/* <!-- End: Desc --> */}

                {/* <!-- Start: Speakers --> */}
                <Speakers />
                {/* <!-- End: Speakers --> */}
            </div>

            {/* <!-- Start: Tickets --> */}
            <Tickets />
            {/* <!-- End: Tickets --> */}

            {/* <!-- Start: Schedule --> */}
            <Schedule />
            {/* <!-- End: Schedule --> */}

            {/* <!-- Start: Footer --> */}
            <Footer />
            {/* <!-- End: Footer --> */}
        </div>
    );
}

export default App;
