import Header from '@components/Header';
import Footer from '@components/Footer';

type BaseContainerProps = {
  children: React.ReactNode,
  backgroundColor?: string
};

const BaseContainer = ({ children, backgroundColor }: BaseContainerProps) => (
  <>
    <Header />
    <div className={`${backgroundColor}`}>
      {children}
    </div>
    <Footer />
  </>
);

export default BaseContainer;