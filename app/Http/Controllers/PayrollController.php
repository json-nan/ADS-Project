<?php

namespace App\Http\Controllers;

use App\Models\Payroll;
use App\Http\Requests\StorePayrollRequest;
use App\Http\Requests\UpdatePayrollRequest;
use App\Models\Employee;

class PayrollController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Payroll/Index', [
            'payrolls' => Payroll::paginate(15),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Payroll/Create', [
            'payrolls' => Payroll::paginate(15),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePayrollRequest $request)
    {
        /** @var Payroll */
        $payroll = Payroll::create($request->validated());
        /** @var Employee */
        $employees = Employee::active()->get();

        $employees->each(function ($employee) use ($payroll) {

            $workedDaysCount = $payroll->end_date->diffInDays($payroll->start_date) + 1;

            $payroll->employees()->attach($employee->id, [
                'worked_days_count' => $workedDaysCount,
                'salary' => $employee->calculateSalaryForDays($workedDaysCount),
                'commissions' => 0,
                'bonuses' => 0,
                'others' => 0,
                'isss' => $employee->calculateIsss($workedDaysCount),
                'afp' => $employee->calculateAfp($workedDaysCount),
                'loans' => 0,
                'total' => $employee->calculateSalaryForDays($workedDaysCount) - $employee->calculateIsss($workedDaysCount) - $employee->calculateAfp($workedDaysCount),
            ]);
        });

        return redirect()->route('payrolls.edit', $payroll->id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payroll $payroll)
    {
        $payroll->load('employees');

        return inertia('Payroll/Edit', [
            'payroll' => $payroll,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePayrollRequest $request, Payroll $payroll)
    {
        $payroll->update($request->validated());

        return redirect()->route('payrolls.index');
    }
}
