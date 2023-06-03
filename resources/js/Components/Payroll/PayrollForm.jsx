import { useForm, router } from "@inertiajs/react";
import InputError from "../InputError";

export default function PayrollForm({ payroll = {}, edit = false }) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: "",
        start_date: "",
        end_date: "",
        ...payroll,
    });

    const handleChange = (name) => {
        return ({ target: { value } }) => {
            setData(name, value);
        };
    };

    const submit = (e) => {
        e.preventDefault();

        if (edit) {
            put(route("payrolls.update", payroll.id));
            return;
        }

        post(route("payrolls.store"));
    };
    return (
        <form onSubmit={submit}>
            <div className="space-y-12">
                <div className="pb-12 border-b border-gray-900/10">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Planilla
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Ingresa los datos de la planilla.
                    </p>

                    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-full">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={handleChange("name")}
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="start_date"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Fecha de inicio
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={data.start_date}
                                    onChange={handleChange("start_date")}
                                    name="start_date"
                                    id="start_date"
                                    placeholder="aaaa/mm/dd"
                                    autoComplete="start_date"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p
                                className="mt-2 text-sm text-gray-500"
                                id="email-description"
                            >
                                Formato: aaaa/mm/dd
                            </p>
                            <InputError
                                message={errors.start_date}
                                className="mt-2"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="end_date"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Fecha de fin
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={data.end_date}
                                    onChange={handleChange("end_date")}
                                    name="end_date"
                                    id="end_date"
                                    placeholder="aaaa/mm/dd"
                                    autoComplete="end_date"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <p
                                className="mt-2 text-sm text-gray-500"
                                id="email-description"
                            >
                                Formato: aaaa/mm/dd
                            </p>
                            <InputError
                                message={errors.end_date}
                                className="mt-2"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end mt-6 gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => router.visit("/payrolls")}
                >
                    Cancelar
                </button>
                <button
                    disabled={processing}
                    type="submit"
                    className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Guardar
                </button>
            </div>
        </form>
    );
}
