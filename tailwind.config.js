module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                'myblue': '#1F487E',
                'light-green': '#80AE7B',
                'light-yellow': '#E3BF5D',
                'light-orange': '#E28E65',
                'gray-servicos' : '#B0B4B6',
                'step-number-blue': '#364E64',
                'step-card-blue': '#CCE4FA',
                'step-card-yellow': '#FFE7A8',
                'light-blue': '#3D99F0',
                'mygraytext': '#3B4156',
                'service-blue': '#6E9AC4',
                'custom-gray': 'rgba(232,232,232,0.33)',
                
                
            },
            fontFamily: {
                'sans': ['Creato Display', 'Roboto', 'Arial', 'sans-serif'],  // Example sans-serif font stack
                'serif': ['Merriweather', 'serif'],       // Example serif font stack
                'mono': ['Courier New', 'monospace'],     // Example monospace font stack
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
                '7xl': '3.5rem',
                '8xl': '4rem',
                '9xl': '4.5rem',
                '10xl': '5rem',
            }
        },
    },
    plugins: []
}