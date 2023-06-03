<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employee_payroll', function (Blueprint $table) {
            $table->foreignId('employee_id')->constrained();
            $table->foreignId('payroll_id')->constrained();

            $table->integer('worked_days_count');

            $table->decimal('salary');
            $table->decimal('commissions');
            $table->decimal('bonuses');
            $table->decimal('others');

            $table->decimal('isss');
            $table->decimal('afp');

            $table->decimal('loans');
            $table->decimal('total');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employee_payroll');
    }
};
