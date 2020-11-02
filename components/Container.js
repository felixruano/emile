import Header2 from './Header2';
import Footer from './Footer';

const Container = ({ children, backgroundColor }) => (
  <>
    <Header2 />
    <div className={`px-8 md:px-24 py-12 ${backgroundColor}`}>
      {children}
    </div>
    <Footer />
  </>
);

export default Container;