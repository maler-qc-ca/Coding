<!DOCTYPE html>
<html>
<head>
	<title>@yield('title', 'DEF')</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
	<style type="text/css">
		.is-completed {
			text-decoration: line-through;
		}
	</style>
</head>
<body>
	<h3 class="title">Test</h3>
	<div class="container">
		@yield('content')
	</div>

</body>
</html>