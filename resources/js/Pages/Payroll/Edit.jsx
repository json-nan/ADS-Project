import PaidEmployeesTable from "@/Components/Payroll/PaidEmployeesTable";
import PayrollForm from "@/Components/Payroll/PayrollForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function PayrollEdit({ auth, payroll }) {
    console.log(payroll);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Planilla
                </h2>
            }
        >
            <div className="p-4 sm:px-6 lg:px-8">
                <PayrollForm payroll={payroll} edit={true} />
                <PaidEmployeesTable employees={payroll.employees} />
            </div>
        </AuthenticatedLayout>
    );
}
