{{-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>It Works!</h1>
    <p>Read more about {{ $topic }}</p>
</body>
</html> --}}

@component('mail::message')

# A Heading

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, in repellendus illum natus culpa dolorum ut totam optio at id ipsam fuga tenetur repellat. Obcaecati, velit dicta! Blanditiis, repellendus culpa!

- List 1

- List 2

Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio eum corrupti molestiae architecto et quod veniam nam doloribus hic voluptatem repellat, aut ab quibusdam cumque nemo eligendi delectus ullam.

@component('mail::button', ['url' => 'https://hotmail.com'])

Visit me!

@endcomponent

@endcomponent
