<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TeamTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function guests_may_not_create_teams()
    {
        // $this->withoutExceptionHandling();
        $this->post('/teams')->assertRedirect('/login');
    }

    /** @test */
    public function a_user_can_create_a_team()
    {

        // Given I am a user who is logged in
        $this->actingAs(factory('App\User')->create());

        // When they hit the endpoint /teams to create a new team, while passing the necessary data.
        $attributes = ['name' => 'acme'];
        $this->post('/teams', $attributes);

        // Then there should be a new in the database.
        $this->assertDatabaseHas('teams', $attributes);

    }

    public function testExample()
    {
        $this->assertTrue(true);
    }
}
