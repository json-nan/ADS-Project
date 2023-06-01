import { Link } from "@inertiajs/react";

export default function Pagination({
    from,
    to,
    total,
    prev_page_url,
    next_page_url,
}) {
    return (
        <nav
            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
            aria-label="Pagination"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    Mostrando <span className="font-medium">{from}</span> a{" "}
                    <span className="font-medium">{to}</span> de{" "}
                    <span className="font-medium">{total}</span> registros
                </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
                <Link
                    href={prev_page_url}
                    className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                >
                    Página anterior
                </Link>
                <Link
                    href={next_page_url}
                    className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                >
                    Página siguiente
                </Link>
            </div>
        </nav>
    );
}
