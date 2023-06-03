import PayrollForm from "@/Components/Payroll/PayrollForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function PayrollCreate({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Planillas
                </h2>
            }
        >
            <div className="p-4 sm:px-6 lg:px-8">
                <PayrollForm />
            </div>
        </AuthenticatedLayout>
    );
}
