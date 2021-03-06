import AuthCard from '@components/AuthCard';
import Footer from '@components/Footer';
import Header from '@components/Header';

const Index = () => (
    <div>
        <Header />
        <div
            className="flex items-center justify-center w-full px-4 py-24 mx-auto lg:py-56"
            style={{
                backgroundImage: "url('curve-dot-pattern.jpg')",
                backgroundSize: '2200px 1350px',
            }}
        >
            <AuthCard />
        </div>
        <Footer />
    </div>
);

export default Index;