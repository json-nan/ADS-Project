import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function PaidEmployeesTable({ employees }) {
    console.log(employees);
    return (
        <div className="p-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                        Empleados
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Listado de empleados.
                    </p>
                </div>
            </div>
            <div className="flow-root mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                        >
                                            Nombre
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Salario
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            ISSS
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-sm font-semibold text-gray-900 text-left"
                                        >
                                            AFP
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-sm font-semibold text-gray-900 text-left"
                                        >
                                            Pago total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {employees.map((employee) => (
                                        <tr key={employee.id}>
                                            <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                                                {employee.name}
                                            </td>
                                            <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                $
                                                {Number(
                                                    employee.pivot.salary
                                                ).toLocaleString()}
                                            </td>
                                            <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                $
                                                {Number(
                                                    employee.pivot.isss
                                                ).toLocaleString()}
                                            </td>
                                            <td className="px-3 py-4 text-sm text-left text-gray-500 whitespace-nowrap">
                                                $
                                                {Number(
                                                    employee.pivot.afp
                                                ).toLocaleString()}
                                            </td>
                                            <td className="px-3 py-4 text-sm text-left text-gray-500 whitespace-nowrap">
                                                $
                                                {Number(
                                                    employee.pivot.salary -
                                                        employee.pivot.isss -
                                                        employee.pivot.afp
                                                ).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
