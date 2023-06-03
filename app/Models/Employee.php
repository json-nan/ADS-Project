<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Employee extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    protected static function booted()
    {
        static::addGlobalScope('order', fn ($builder) => $builder->orderBy('created_at', 'desc'));
    }

    public function scopeActive()
    {
        return $this->where('is_active', true);
    }

    public function dailySalary()
    {
        return $this->salary / 30;
    }

    public function calculateSalaryForDays($days)
    {
        return $this->dailySalary() * $days;
    }

    public function calculateIsss()
    {
        return $this->salary * config('payroll.isss_percentage');
    }

    public function calculateAfp()
    {
        return $this->salary * config('payroll.afp_percentage');
    }

    public function Payroll(): BelongsToMany
    {
        return $this->belongsToMany(Payroll::class)->withPivot([
            'worked_days_count',
            'salary',
            'commissions',
            'bonuses',
            'others',
            'isss',
            'afp',
            'loans',
            'total',
        ]);
    }
}
