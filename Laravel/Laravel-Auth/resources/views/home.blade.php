@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }} {{ Auth::user()->name }} {{ auth()->user()->name }}
                </div>

                <form action="/payment" method="POST">
                    @csrf
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link" type="submit">Nofify User ></button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>



@endsection
