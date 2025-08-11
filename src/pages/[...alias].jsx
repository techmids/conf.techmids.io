export async function getServerSideProps(context) {
    const { alias } = context.params;
    const path = Array.isArray(alias) ? alias.join('/') : alias;
    
    return {
        redirect: {
            destination: `https://conf.techmids.org/${path}`,
            permanent: false,
        },
    };
}

export default function _() {
    return null;
}
