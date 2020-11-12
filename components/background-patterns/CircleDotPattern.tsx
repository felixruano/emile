const CircleDotPattern = () => (
    <div
        className="absolute hidden h-40 bg-white border-4 border-yellow-300 rounded-b-full lg:block w-80"
        style={{ zIndex: 9 }}
    >
        <img className="w-full h-full" src="/dots.png" />
    </div>
);

export default CircleDotPattern;
