import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Form } from "@remix-run/react";
import MultiSelect from "./MultiSelect";

export default function Header() {
    return (
        <div className="py-10 text-slate-700 mx-auto">
            <h1 className="text-2xl font-medium text-center py-2">Release Notes</h1>
            <p className="text-xl font-light text-center">Features and improvements we've recently shipped.</p>
            <Form className="max-w-3xl mx-auto my-10 flex space-x-2">
                <label htmlFor="search" className="w-full flex relative text-gray-400 focus-within:text-gray-600">
                    <MagnifyingGlassIcon className="pointer-events-none w-6 absolute top-1/2 transform -translate-y-1/2 left-3" />
                    <input name="search" id="search" placeholder="Search by title or description" className="form-input border border-slate-400-900 py-3 px-4 bg-gray-50 focus:bg-white rounded-lg placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none" />
                </label>
                {/* <MultiSelect /> */}
            </Form>
        </div>
    )
}