const garden = document.getElementById('garden');

// Detailed SVG Rose Template
const createRose = (x, y, scale, delay) => {
    const rose = `
    <svg class="flower-svg" width="150" height="150" viewBox="0 0 100 100" style="position:absolute; left:${x}px; bottom:${y}px; animation-delay:${delay}s;">
        <defs>
            <radialGradient id="roseGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style="stop-color:#ff4d6d; stop-opacity:1" />
                <stop offset="100%" style="stop-color:#c9184a; stop-opacity:1" />
            </radialGradient>
        </defs>
        <path d="M50 95 Q55 70 50 50" stroke="#2d6a4f" stroke-width="3" fill="none"/>
        <ellipse cx="50" cy="40" rx="20" ry="25" fill="url(#roseGrad)" transform="rotate(0 50 50)" />
        <ellipse cx="50" cy="40" rx="20" ry="25" fill="url(#roseGrad)" transform="rotate(72 50 50)" />
        <ellipse cx="50" cy="40" rx="20" ry="25" fill="url(#roseGrad)" transform="rotate(144 50 50)" />
        <ellipse cx="50" cy="40" rx="20" ry="25" fill="url(#roseGrad)" transform="rotate(216 50 50)" />
        <ellipse cx="50" cy="40" rx="20" ry="25" fill="url(#roseGrad)" transform="rotate(288 50 50)" />
        <circle cx="50" cy="45" r="10" fill="#a4133c" />
    </svg>`;
    return rose;
};

// Detailed SVG Lily Template
const createLily = (x, y, scale, delay) => {
    const lily = `
    <svg class="flower-svg" width="180" height="180" viewBox="0 0 100 100" style="position:absolute; left:${x}px; bottom:${y}px; animation-delay:${delay}s;">
        <defs>
            <linearGradient id="lilyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#ffffff" />
                <stop offset="100%" style="stop-color:#ffccd5" />
            </linearGradient>
        </defs>
        <path d="M50 95 Q45 70 50 50" stroke="#2d6a4f" stroke-width="3" fill="none"/>
        <path d="M50 50 Q70 10 50 0 Q30 10 50 50" fill="url(#lilyGrad)" transform="rotate(0 50 50)"/>
        <path d="M50 50 Q70 10 50 0 Q30 10 50 50" fill="url(#lilyGrad)" transform="rotate(60 50 50)"/>
        <path d="M50 50 Q70 10 50 0 Q30 10 50 50" fill="url(#lilyGrad)" transform="rotate(120 50 50)"/>
        <path d="M50 50 Q70 10 50 0 Q30 10 50 50" fill="url(#lilyGrad)" transform="rotate(180 50 50)"/>
        <path d="M50 50 Q70 10 50 0 Q30 10 50 50" fill="url(#lilyGrad)" transform="rotate(240 50 50)"/>
        <path d="M50 50 Q70 10 50 0 Q30 10 50 50" fill="url(#lilyGrad)" transform="rotate(300 50 50)"/>
        <circle cx="50" cy="50" r="3" fill="#ffb3c1" />
    </svg>`;
    return lily;
};

// Arrangement
garden.innerHTML += createRose(50, 20, 1, 0.2);
garden.innerHTML += createRose(250, 10, 1, 0.6);
garden.innerHTML += createRose(150, 50, 1.2, 1.0);
garden.innerHTML += createLily(100, 0, 1, 0.4);
garden.innerHTML += createLily(200, 0, 1, 0.8);
