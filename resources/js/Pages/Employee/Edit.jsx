import EmployeeForm from "@/Components/Employee/EmployeeForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function EmployeeEdit({ auth, employee }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Empleados
                </h2>
            }
        >
            <div className="p-4 sm:px-6 lg:px-8">
                <EmployeeForm employee={employee} edit={true} />
            </div>
        </AuthenticatedLayout>
    );
}
