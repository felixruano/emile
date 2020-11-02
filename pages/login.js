import Image from 'next/image';
import AuthCard from '../components/AuthCard';
import Footer from '../components/Footer';
import Header2 from '../components/Header2';

const Login = () => (
    <>
        <Header2 />
        <div
            className="flex items-center justify-center w-full px-4 py-24 mx-auto lg:py-56"
            style={{
                backgroundImage: "url('curve-dot-pattern.jpg')",
                backgroundSize: '1800px 1350px',
            }}
        >
            <AuthCard />
        </div>
        <Footer />
    </>
);

export default Login;
