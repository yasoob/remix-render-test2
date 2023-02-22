import headerImg from "~/images/header.png"
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import NavBar from "~/components/NavBar";
import Timeline from "~/components/Timeline";

import { useOptionalUser } from "~/utils";
import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const sampleItems = [
  {
    date: "February 13, 2023",
    tags: ["Improvement", "New"],
    title: "Commerce: Transactions view for individual products 2",
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

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const term = url.searchParams.get("search")
  console.log(term)
  return json({ sampleItems })
};

export default function Index() {
  const user = useOptionalUser();
  const changelogs = useLoaderData<typeof loader>();

  return (
    <>
      <NavBar />
      <Header />
      <Timeline changelogs={changelogs.sampleItems} />
      <Footer />
    </>
  );
}