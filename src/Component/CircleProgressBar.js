import React from 'react';

const CircleProgressBar = ({ progress }) => {
    // Calculate radius and circumference of the circle
    const radius = 15;
    const circumference = 2 * Math.PI * radius;
    
    // Calculate the offset for the progress circle
    const progressOffset = ((12 - progress) / 10) * circumference;

    return (
        <div className="relative w-9 h-9">
            <svg className="absolute inset-0 w-full h-full">
                {/* Background circle */}
                <circle className="stroke-current text-gray-200" strokeWidth="5" fill="transparent" r={radius} cx="50%" cy="50%" />

                {/* Progress circle */}
                <circle className="stroke-current text-blue-500 rounded-full" strokeWidth="5" fill="transparent" r={radius} cx="50%" cy="50%"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: progressOffset,
                        strokeLinecap: 'round',
                        transform: 'rotate(-90deg)',
                        transformOrigin: 'center'
                    }}
                />

                {/* Text displaying progress */}
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-xs font-bold text-black">{progress}</text>
            </svg>
        </div>
    );
};

export default CircleProgressBar;
