<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'email|max:255|unique:employees,email',
            'phone_number' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'salary' => 'required|numeric',
            'date_of_birth' => 'required|date',
            'date_of_joining' => 'required|date',
            'is_active' => 'boolean',
        ];
    }
}
