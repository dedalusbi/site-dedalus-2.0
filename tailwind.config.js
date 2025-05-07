module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                'myblue': '#1F487E',
                'light-green': '#80AE7B',
                'light-yellow': '#E3BF5D',
                'light-orange': '#E28E65',
                'light-blue': '#3D99F0',
                
            },
            fontFamily: {
                'sans': ['Creato Display', 'Roboto', 'Arial', 'sans-serif'],  // Example sans-serif font stack
                'serif': ['Merriweather', 'serif'],       // Example serif font stack
                'mono': ['Courier New', 'monospace'],     // Example monospace font stack
            }
        },
    },
    plugins: []
}