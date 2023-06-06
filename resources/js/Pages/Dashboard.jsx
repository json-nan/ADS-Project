import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, lastPayrollStats }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="p-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Dashboard
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Información general.
                        </p>
                    </div>

                    <h1 className="text-2xl font-semibold leading-6 text-gray-900">
                        Última planilla
                    </h1>
                </div>
                <div className="flow-root mt-8 space-y-2">
                    <h1 className="text-2xl font-semibold leading-6 text-gray-900">
                        {lastPayrollStats.name}
                    </h1>
                    <div className="">
                        <h3>
                            <span className="font-semibold">
                                Fecha de inicio:
                            </span>{" "}
                            {lastPayrollStats.start_date}
                        </h3>
                        <h3>
                            <span className="font-semibold">Fecha de fin:</span>{" "}
                            {lastPayrollStats.end_date}
                        </h3>
                        <h3>
                            <span className="font-semibold">
                                Total de empleados:
                            </span>{" "}
                            {lastPayrollStats.employees}
                        </h3>
                        <h3>
                            <span className="font-semibold">
                                Total de planillas:
                            </span>{" "}
                            ${Number(lastPayrollStats.total).toLocaleString()}
                        </h3>

                        <h3>
                            <span className="font-semibold">Total ISSS:</span> $
                            ${Number(lastPayrollStats.isss).toLocaleString()}
                        </h3>

                        <h3>
                            <span className="font-semibold">Total AFP:</span> $
                            ${Number(lastPayrollStats.afp).toLocaleString()}
                        </h3>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
