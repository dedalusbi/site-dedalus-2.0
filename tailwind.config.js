module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                'myblue': '#1F487E',
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