import Header2 from './Header2';
import Footer from './Footer';

const BaseContainer = ({ children, backgroundColor }) => (
  <>
    <Header2 />
    <div className={`${backgroundColor}`}>
      {children}
    </div>
    <Footer />
  </>
);

export default BaseContainer;