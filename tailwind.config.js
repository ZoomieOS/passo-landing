/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts}"],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px"
                }
            },
            maxWidth: {
                container: "75rem",
                containerWide: "90rem"
            },
            colors: {
                brand1: "#957E77",
                brand2: "#357B5D",
                brand3: "#6CA4E0",
                brand4: "#8582AE",
                text: "#000000",
                footer: "#355F7B"
            },
            fontFamily: {
                sans: ["Montserrat", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "sans-serif"]
            },
            spacing: {
                section: "3.125rem"
            },
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1.125rem" }],
                sm: ["0.875rem", { lineHeight: "1.3125rem" }],
                base: ["1rem", { lineHeight: "1.5rem" }],
                lg: ["1.125rem", { lineHeight: "1.6875rem" }],
                xl: ["1.25rem", { lineHeight: "1.875rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
                "5xl": ["3rem", { lineHeight: "1" }]
            }
        }
    },
    plugins: []
}