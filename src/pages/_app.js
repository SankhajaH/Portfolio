import '@fontsource/space-grotesk';
import '../styles/globals.css';

export default function App({Component, pageProps}) {
    return (
        <>
            <style jsx global>{`
                body {
                    font-family: 'Space Grotesk', sans-serif;
                }
            `}</style>

            <Component {...pageProps} />
        </>
    );
}
