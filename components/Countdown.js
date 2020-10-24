import { useState, useEffect } from 'react';
import RocketIcon from './icons/RocketIcon';

const calculateTimeLeft = () => {
    const countDownDate = new Date('November 30, 2020 12:00:00').getTime();
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return {
        days,
        hours,
        minutes,
        seconds,
    };
};

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    return (
        <div className="flex items-center justify-center flex-row md:p-8">
            <div className="mr-8">
                <RocketIcon color="#4F46E8" size="36px" />
            </div>
                <div className="flex text-gray-600 font-medium">
                    <div className="flex flex-col items-center justify-center space-y-2 w-16 mx-2">
                        <span className="text-4xl md:text-5xl">
                            {timeLeft.days}
                        </span>
                        <h3 className="text-gray-500 uppercase">Days</h3>
                    </div>
                    <p className="text-4xl md:text-5xl">{':'}</p>
                    <div className="flex flex-col items-center justify-center space-y-2 w-16 mx-2">
                        <span className="text-4xl md:text-5xl">
                            {timeLeft.hours}
                        </span>
                        <h3 className="text-gray-500 uppercase">Hrs</h3>
                    </div>
                    <div className="text-4xl md:text-5xl">{':'}</div>
                    <div className="flex flex-col items-center justify-center space-y-2 w-16 mx-2">
                        <span className="text-4xl md:text-5xl">
                            {timeLeft.minutes}
                        </span>
                        <h3 className="text-gray-500 uppercase">Min</h3>
                    </div>
                    <div className="text-4xl md:text-5xl">{':'}</div>
                    <div className="flex flex-col items-center justify-center space-y-2 w-16 mx-2">
                        <span className="text-4xl md:text-5xl">
                            {timeLeft.seconds}
                        </span>
                        <h3 className="text-gray-500 uppercase">Sec</h3>
                    </div>
                </div>
        </div>
    );
};

export default Countdown;
