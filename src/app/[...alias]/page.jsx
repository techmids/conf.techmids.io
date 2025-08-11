import { redirect } from 'next/navigation';

// app/[...alias]/page.jsx

export default function Page({ params }) {
    const { alias } = params;
    const path = Array.isArray(alias) ? alias.join('/') : alias;
    
    redirect(`https://conf.techmids.org/${path}`);
    
    // This return is unreachable but required for React components
    return null;
}
