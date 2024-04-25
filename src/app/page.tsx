import Header from '../components/Header';
import Footer from '../components/Footer';
import TabPanel from '../components/TabPanel';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <TabPanel />
      </main>
      <Footer />
    </div>
  );
};

export default Home;