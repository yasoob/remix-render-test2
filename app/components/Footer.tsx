import { NavLink } from "@remix-run/react";

export default function Footer() {
    return (
        <footer className="flex flex-col space-y-1 text-slate-500 py-10 text-center">
            <p>Powered by <NavLink to="https://yasoob.me" className="underline font-bold">Product Otter</NavLink></p>
            <p>Keep your users updated with a regular changelog</p>
        </footer>
    )
};
