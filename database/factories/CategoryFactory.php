<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'picture' =>fake()->imageUrl(640, 480, 'nature', true), 
            'name' => fake()->randomElement(['arabic', 'english', 'spanish', 'french', 'german']), 
          
        ];
    }
}
