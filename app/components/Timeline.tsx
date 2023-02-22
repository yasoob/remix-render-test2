import { NavLink } from "@remix-run/react";
import headerImg from "~/images/header.png"

const tags = {
    improvement: {
        title: "Improvement",
        color: ""
    }
}
const sampleItems = [
    {
        date: "February 13, 2023",
        tags: ["Improvement", "New"],
        title: "Commerce: Transactions view for individual products 1",
        headerImage: headerImg,
        body: "On any individual Commerce product, you'll now find a Reports drop down that gives you the transaction details of all the customers who have purchased that product. "
    },
    {
        date: "February 13, 2023",
        tags: ["Improvement"],
        title: "Commerce: Transactions view for individual products 2",
        body: "On any individual Commerce product, you'll now find a Reports drop down that gives you the transaction details of all the customers who have purchased that product. "
    },
    {
        date: "February 13, 2023",
        tags: ["Improvement"],
        title: "Commerce: Transactions view for individual products 3",
        body: "On any individual Commerce product, you'll now find a Reports drop down that gives you the transaction details of all the customers who have purchased that product. "
    }
]

type TimelineItemProps = {
    date: string;
    tags: string[];
    headerImage?: string;
    title: string;
    body: string;
}

type TimelineProps = {
    changelogs: TimelineItemProps[];
}

const TimelineItem = ({ date, title, body, tags, headerImage }: TimelineItemProps) => {
    return (
        <li className="border-l border-green-300 relative pb-10 last-of-type:pb-0">
            <div className="flex flex-start items-center pb-3">
                <div className="bg-green-500 w-4 h-4 rounded-full -ml-2 mr-5"></div>
                <time className="text-green-500 text-md font-medium">{date}</time>
            </div>
            <div className="mt-0.5 ml-6 rounded-md bg-white shadow-sm">
                {headerImage && <img src={headerImage} className="rounded-t-md" />}
                <div className="p-8">
                    <div className="mb-4 flex space-x-4">
                        {tags.map((tag) => {
                            return (
                                <NavLink key={tag} className="text-slate-700 bg-slate-200 font-medium px-3 py-1 rounded-md" to="/">
                                    {tag}
                                </NavLink>
                            )
                        })}
                    </div>
                    <NavLink to="/">
                        <h4 className="text-gray-800 font-semibold text-xl relative mb-1.5 
                        before:absolute before:w-6 before:-left-14 before:top-3 before:h-0.5 before:bg-green-300">
                            {title}
                        </h4>
                    </NavLink>
                    <p className="text-gray-500 mb-3">{body}</p>
                </div>
            </div>
        </li>

    )
}

export default function Timeline({ changelogs }: TimelineProps) {
    return (
        <main className="max-w-3xl mx-auto">
            <ol className="relative">
                {changelogs.map((item) => {
                    return <TimelineItem key={item.title} {...item} />
                })}
            </ol>
        </main>
    )
}