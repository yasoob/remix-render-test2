import { NavLink } from "@remix-run/react";
import { BookOpenIcon, MapIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import logo from "~/images/logo.png";
import { ReactNode } from "react";

const menuList = [
    {
        title: "Changelog",
        icon: BookOpenIcon,
        to: "/"
    },
    {
        title: "Roadmap",
        icon: MapIcon,
        to: "/roadmap"
    },
    {
        title: "Feedback",
        icon: ChatBubbleLeftRightIcon,
        to: "/feedback"
    }
]

type MenuItemProps = {
    title: string;
    icon: any;
    to: string;
}

const MenuItem = ({ title, icon, to }: MenuItemProps) => {
    const Icon = icon

    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "flex items-center text-green-500 font-light" : "flex items-center font-light"
            }
            to={to}>
            <Icon className="pr-2 h-5" />{title}
        </NavLink>
    )
}

export default function NavBar() {
    return (
        <header className="drop-shadow-md shadow-gray-500 relative z-10 bg-white">
            <div className="max-w-6xl p-6 flex space-x-4 items-center justify-between mx-auto">
                <NavLink to="/">
                    <img src={logo} alt="logo" className="h-8" />
                </NavLink>
                <nav className="flex space-x-8">
                    {menuList.map((navitem) => <MenuItem key={navitem.title} {...navitem} />)}
                </nav>
            </div>
        </header>
    )
}