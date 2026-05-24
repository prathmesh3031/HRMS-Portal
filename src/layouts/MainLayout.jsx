import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}
            <aside
                className="w-64 bg-black text-white p-6"
                aria-label="Sidebar Navigation"
            >

                <h1 className="text-2xl font-bold mb-10">
                    HRMS
                </h1>

                <nav>
                    <ul className="space-y-4">

                        <li>
                            <Link
                                to="/dashboard"
                                className="block hover:bg-gray-800 p-3 rounded-xl"
                            >
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/attendance"
                                className="block hover:bg-gray-800 p-3 rounded-xl"
                            >
                                Attendance
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/leave"
                                className="block hover:bg-gray-800 p-3 rounded-xl"
                            >
                                Leave
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/payroll"
                                className="block hover:bg-gray-800 p-3 rounded-xl"
                            >
                                Payroll
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/profile"
                                className="block hover:bg-gray-800 p-3 rounded-xl"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/documents"
                                className="block hover:bg-gray-800 p-3 rounded-xl"
                            >
                                Documents
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/organization"
                                className="block hover:bg-gray-800 p-3 rounded-xl"
                            >
                                Organization
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/events"
                                className="block hover:bg-gray-800 p-3 rounded-xl"
                            >
                                Events
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/resignation"
                                className="block hover:bg-gray-800 p-3 rounded-xl"
                            >
                                Resignation
                            </Link>
                        </li>
                    </ul>
                </nav>

            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">

                <Navbar />

                {children}

            </main>

        </div>
    );
}