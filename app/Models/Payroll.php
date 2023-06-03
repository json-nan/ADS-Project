<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Payroll extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'start_date' => 'date:Y/m/d',
        'end_date' => 'date:Y/m/d',
    ];

    protected static function booted()
    {
        static::addGlobalScope('order', fn ($builder) => $builder->orderBy('created_at', 'desc'));
    }

    public function employees(): BelongsToMany
    {
        return $this->belongsToMany(Employee::class)->withPivot([
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
