import Component404 from "../components/error/404";

export default function Custom404() {
    return <Component404 />
}

export const getStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../translations/${locale}.json`)).default
        },
    };
};
