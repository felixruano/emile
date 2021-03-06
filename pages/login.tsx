import AuthCard from '@components/AuthCard';
import Footer from '@components/Footer';
import Header from '@components/Header';

const Login = () => (
    <>
        <Header />
        <div
            className="flex items-center justify-center w-full px-4 py-24 mx-auto lg:py-56"
            style={{
                backgroundImage: "url('curve-dot-pattern.jpg')",
                backgroundSize: '2200px 1450px',
            }}
        >
            <AuthCard />
        </div>
        <Footer />
    </>
);

export default Login;
