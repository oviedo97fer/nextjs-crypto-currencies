import Navigation from "./Navigation";
import Head from "next/head";

const Container = (props) => {
    return (
        <div className="container">
            <Head>
                <title>NextJS Project</title>
            </Head>
            <Navigation />
            <div>{props.children}</div>
        </div>
    );
};

export default Container;
