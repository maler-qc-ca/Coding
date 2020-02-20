<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Project;
use App\User;
use App\Services\Twitter;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\ProjectCreatedMOE;
use App\Events\ProjectCreated;


class ProjectsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        // $this->middleware('auth')->only(['store', 'update']);
        // $this->middleware('auth')->except(['index', 'show']);
    }

    public function index()
    {
        // $projects = Project::all();
        // auth()->id()
        // auth()->user()
        // auth()->check()
        // auth()->guest()

        // $projects = Project::where('owner_id', auth()->id())->take(200)->get();
        // $projects = auth()->user()->projects;

        // dump($projects);
        /*
        cache()->rememberForEver('stats', function () {
            return ['lesson' => 300, 'me' => 500];
        });
         */

        // $lesson = cache()->get('stats')['lesson'];
        // dump($lesson);

        // return view('projects.index', compact('projects'));

        return view('projects.index', [
            'projects' => auth()->user()->projects
        ]);
    }

    public function create()
    {

        return view('projects.create');

    }

    public function show(Project $project, Twitter $twitter)
    {
        // $filesystem = app('Illuminate\Filesystem\Filesystem');
        // dd($filesystem);

        // $twitter = app('twitter');
        // dd($twitter);

        // abort_unless(auth()->user()->can('update', $project), 403); // or cannot
        $this->authorize('update', $project);
        // abort_if($project->owner_id !== auth()->id(), 403);
        // abort_unless
        // abort_if(\Gate::denies('update', $project), 403);
        // abort_unless(\Gate::allows('update', $project), 403);

        return view('projects.show', compact('project'));
    }

    public function store()
    {
        $attributes = $this->validateProject();
        $attributes['owner_id'] = auth()->id();

        $project = Project::create($attributes); // Use Fillable to protect and whitelist in fillable
        // Project::create(request(['title', 'description'])); // Mass Assign

        event(new ProjectCreated($project));

        flash('A new bla bla');

        return redirect('/projects');//->with('message', 'A new bla bla');
    }

    public function edit(Project $project)
    {

        return view('projects.edit', compact('project'));
    }

    public function update(Project $project)
    {
        $project->update($this->validateProject());
        return redirect('/projects');
    }

    public function destroy(Project $project)
    {
        $project->delete();

        return redirect('/projects');
    }

    protected function validateProject()
    {
        return request()->validate([
            'title' => ['required', 'min:3'],
            'description' => ['required', 'min:5']
        ]);
    }

}
