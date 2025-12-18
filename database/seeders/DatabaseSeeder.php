<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Galerija;
use App\Models\Porudzbina;
use App\Models\Slika;
use App\Models\Stavka;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
