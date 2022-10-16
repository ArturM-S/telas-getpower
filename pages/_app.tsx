import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Layout } from '../layout/layout';
import { globalStyles } from '../styles/globals';

export default function MyApp({ Component, pageProps }: AppProps) {
    const INITIAL_PAGES = ['/'];

    const { asPath } = useRouter();

    return (
        <>
            {globalStyles}
            {INITIAL_PAGES.includes(asPath) ? (
                <Component {...pageProps} />
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </>
    );
}
