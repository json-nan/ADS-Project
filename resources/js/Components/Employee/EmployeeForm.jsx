import { Switch } from "@headlessui/react";
import { useForm, router } from "@inertiajs/react";
import InputError from "../InputError";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function EmployeeForm({ employee = {}, edit = false }) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: "",
        email: "",
        phone_number: "",
        address: "",
        salary: "",
        date_of_birth: "",
        date_of_joining: "",
        is_active: true,
        ...employee,
    });

    const handleChange = (name) => {
        return ({ target: { value } }) => {
            setData(name, value);
        };
    };

    const submit = (e) => {
        e.preventDefault();

        if (edit) {
            put(route("employees.update", employee.id));
            return;
        }

        post(route("employees.store"));
    };
    return (
        <form onSubmit={submit}>
            <div className="space-y-12">
                <div className="pb-12 border-b border-gray-900/10">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Nuevo Empleado
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Ingresa los datos del nuevo empleado.
                    </p>

                    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
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
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Correo electrónico
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={data.email}
                                    onChange={handleChange("email")}
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <div className="flex justify-between">
                                <label
                                    htmlFor="phone_number"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Teléfono
                                </label>
                                <span
                                    className="text-sm leading-6 text-gray-500"
                                    id="email-optional"
                                >
                                    Opcional
                                </span>
                            </div>

                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={data.phone_number}
                                    onChange={handleChange("phone_number")}
                                    name="phone_number"
                                    id="phone_number"
                                    autoComplete="phone_number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <InputError
                                message={errors.phone_number}
                                className="mt-2"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <div className="flex justify-between">
                                <label
                                    htmlFor="address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Dirección
                                </label>
                                <span
                                    className="text-sm leading-6 text-gray-500"
                                    id="email-optional"
                                >
                                    Opcional
                                </span>
                            </div>

                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={data.address}
                                    onChange={handleChange("address")}
                                    name="address"
                                    id="address"
                                    autoComplete="address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <InputError
                                message={errors.address}
                                className="mt-2"
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <div>
                                <label
                                    htmlFor="salary"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Salario
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <span className="text-gray-500 sm:text-sm">
                                            $
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        value={data.salary}
                                        onChange={handleChange("salary")}
                                        name="salary"
                                        id="salary"
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="0.00"
                                        aria-describedby="salary-currency"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <span
                                            className="text-gray-500 sm:text-sm"
                                            id="salary-currency"
                                        >
                                            USD
                                        </span>
                                    </div>
                                </div>
                                <InputError
                                    message={errors.salary}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="date_of_birth"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Fecha de nacimiento
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={data.date_of_birth}
                                    onChange={handleChange("date_of_birth")}
                                    name="date_of_birth"
                                    id="date_of_birth"
                                    placeholder="aaaa/mm/dd"
                                    autoComplete="date_of_birth"
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
                                message={errors.date_of_birth}
                                className="mt-2"
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="date_of_joining"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Fecha de ingreso
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    value={data.date_of_joining}
                                    onChange={handleChange("date_of_joining")}
                                    name="date_of_joining"
                                    id="date_of_joining"
                                    placeholder="aaaa/mm/dd"
                                    autoComplete="date_of_joining"
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
                                message={errors.date_of_joining}
                                className="mt-2"
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="date_of_joining"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Estado
                            </label>
                            <div className="mt-2">
                                <Switch.Group
                                    as="div"
                                    className="flex items-center"
                                >
                                    <Switch
                                        checked={data.is_active}
                                        onChange={(value) => {
                                            setData("is_active", value);
                                        }}
                                        className={classNames(
                                            data.is_active
                                                ? "bg-indigo-600"
                                                : "bg-gray-200",
                                            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                data.is_active
                                                    ? "translate-x-5"
                                                    : "translate-x-0",
                                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                            )}
                                        />
                                    </Switch>
                                </Switch.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end mt-6 gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => router.visit("/employees")}
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
