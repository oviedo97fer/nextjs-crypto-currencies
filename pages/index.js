import Container from "../components/Container";
import Head from "next/head";
import CurrenciesContainer from "../components/CurrenciesContainer";

const Home = (props) => {
    const { currency } = props;
    return (
        <Container>
            <Head>
                <title>HOME</title>
               {/*  <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;400;500;700&display=swap"
                    rel="stylesheet"
                /> */}
            </Head>
            <CurrenciesContainer currency={currency} />
        </Container>
    );
};

export default Home;

export const getStaticProps = async (ctx) => {
    const key = "c0c6713a58de781259c6effae312d7924df368c3";
    const ids = "BTC,ETH,XRP,DOGE,LTC,USDC,UNI,USDT,ADA,THETA";
    const interval = "1d,30d";
    const convert = "EUR";
    const pageCount = "100";
    const page = "1";

    try {
        const res = await fetch(
            `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=${ids}&interval=${interval}&convert=${convert}&per-page=${pageCount}&page=${page}`
        );

        const data = await res.json();
        console.log(data);
        return {
            props: { currency: data },
        };
    } catch (error) {
        return {
            props: { currency: [] },
        };
    }
};
