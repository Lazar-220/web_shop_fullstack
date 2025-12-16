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
        Schema::create('stavke', function (Blueprint $table) {
            $table->id();
            $table->foreignId('porudzbina_id')->constrained('porudzbine')->cascadeOnDelete();
            $table->foreignId('slika_id')->constrained('slike')->nullOnDelete();
            $table->integer('rb');
            $table->decimal('cena',15,2);
            $table->integer('kolicina')->default(1);
            $table->timestamps();

            $table->unique(['porudzbina_id','rb']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stavke');
    }
};
