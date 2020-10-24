import Countdown from './Countdown';
import PrimaryButton from './PrimaryButton';

const Hero = () => (
    <div className="text-center">
        <p className="max-w-md mx-auto text-gray-500 tracking-widest font-semibold sm:text-sm md:mt-5 md:text-lg md:max-w-3xl uppercase">Launching Soon</p>
        <h2 className="mt-6 text-4xl tracking-tight text-gray-700 sm:text-5xl sm:leading-none md:text-6xl" style={{ lineHeight: '150%' }}>
            Welcome to elite {' '}
            <br />
            education {' '}
            <span className="text-indigo-600">on demand</span>
        </h2>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            {/* <PrimaryButton text="Request Free Trial" isDisabled={false} isLoading={false} type="button" /> */}
            <Countdown />
        </div>
    </div>
);

export default Hero;
