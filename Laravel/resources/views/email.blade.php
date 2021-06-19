<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Compra Realizada</h1>
    <p>{{ $p->usuario['id'] }}</p>
    <p>{{$p->detalles[0]->producto['nombre']}}</p>
</body>
</html>
