<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Porudzbina extends Model
{
    use HasFactory;
    protected $table='porudzbine';
    protected $fillable = [
        'user_id',
        'popust_id',
        'datum',
        'ukupna_cena',
        'konacna_cena',
        'ime',
        'prezime',
        'drzava',
        'grad',
        'adresa',
        'postanski_broj',
        'telefon',
        'poslato',
        'procenat_popusta_ss',
        'tip_popusta_ss'
    ];

    protected $casts = [
        'ukupna_cena'=>'decimal:2',
        'konacna_cena'=>'decimal:2',
        'datum'=>'date',
        'poslato'=>'boolean'
    ];



    public function popust(){
        return $this->belongsTo(Popust::class,'popust_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function stavke(){
        return $this->hasMany(Stavka::class,'porudzbina_id');
    }
}
