<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use App\Mail\ProjectCreated;
use App\Mail\ProjectCreatedMOE;
use Illuminate\Support\Facades\Mail;
use App\Events\ProjectCreated;

class Project extends Model
{
	//protected $guarded = [];
    protected $fillable = ['title', 'description', 'owner_id'];

    protected $dispatchesEvents = [
        'created' => ProjectCreated::class
    ];

    protected static function boot()
    {
        parent::boot();

        static::created(function ($project) {
        // // queue(
        //     Mail::to($project->owner->email)->send(
        //         new ProjectCreated($project)
        //     );

        //     Mail::to($project->owner->email)->send(
        //         new ProjectCreatedMOE()
        //     );
        });
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function addTask($task)
    {
        $this->tasks()->create($task);
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }
}
