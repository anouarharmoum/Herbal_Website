<?php

namespace Database\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'picture' => fake()->imageUrl(640, 480, 'nature', true),
            'name' => fake()->word(),
            'description' =>fake()->paragraph(4,true),
            'price' => fake()->randomFloat(2, 1, 100),
           'category_id' =>fake()->numberBetween(1,5),
            
        ];
    }
}
