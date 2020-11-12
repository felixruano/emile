import SignUpButton from './SignUpButton';

const Hero = () => (
    <div className="mt-16 text-center">
        <p className="max-w-md mx-auto mt-5 text-sm font-semibold tracking-widest text-gray-500 uppercase md:text-base md:max-w-3xl">high school learning community</p>
        <h2 className="pb-8 mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl" style={{ lineHeight: '150%' }}>
            Welcome to elite {' '}
            <br />
            education {' '}
            <span className="text-indigo-600 whitespace-pre rounded-underline md:whitespace-normal">on demand.</span>
        </h2>
        <div className="flex justify-center mt-5 space-y-8 md:mt-8">
            <SignUpButton text="Get Started" bgColor="indigo.600" actionBgColor="indigo.500" />
        </div>
    </div>
);

export default Hero;
