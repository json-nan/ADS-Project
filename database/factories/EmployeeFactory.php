<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique(true)->safeEmail,
            'phone_number' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'salary' => $this->faker->randomFloat(2, 500, 1500),
            'date_of_birth' => $this->faker->dateTimeBetween('-60 years', '-18 years'),
            'date_of_joining' => $this->faker->dateTimeBetween('-7 years'),
            'is_active' => $this->faker->boolean,
        ];
    }
}
