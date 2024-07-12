//import {useState} from 'react';

import {useState} from 'react';
import Crouses from './components/crouseData/Crouses';
import Header from './layout/header/Header';
import Bookmarks from './components/bookmarks/Bookmarks';
import Footer from './layout/footer/Footer';

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [price, setPrice] = useState(0);
    const [credit, setCredit] = useState(0);
    const [remaining, setRemaining] = useState(100);

    const handleBookmark = (title, newPrice) => {
        setBookmarks([...bookmarks, title]);
        setPrice(price + newPrice);
    };

    const handleCreditHours = (hours) => {
        if (credit > 100) {
            alert('only 100 credit allowed');
            return;
        }
        setCredit(credit + hours);

        if (remaining < 0) {
            alert('Remaining time limit over');
            return;
        }
        setRemaining(remaining - hours);
    };

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <section className="px-3 md:px-15 md:grid grid-cols-4 lg:grid-cols-4 gap-6">
                    <Crouses
                        handleBookmark={handleBookmark}
                        handleCreditHours={handleCreditHours}
                    />
                    <Bookmarks
                        bookmarks={bookmarks}
                        price={price}
                        credit={credit}
                        remaining={remaining}
                    />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
