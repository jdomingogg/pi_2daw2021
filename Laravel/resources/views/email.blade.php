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
    <p>Estimado {{ $p->usuario['nombre'] }}, su pedido ha sido realizado con éxito.</p>
    <p>Lugar de envío: {{$p->usuario['direccion']}}</p>
    <p>Tiempo estimado de entrega: 48 Horas</p>
    <h3>Detalles de pedido:</h3>

    <table>
    <tr>
    <th>Nombre producto</th>
    <th>Cantidad</th>
    <th>Precio por unidad</th>
    </tr>
    @foreach ($p->detalles as $detalle)
    <tr>
    <td>{{$detalle->producto['nombre']}}</td>
    <td>{{$detalle['cantidad']}}</td>
    <td>{{$detalle->producto['precio']}}</td>
    </tr>
    </table>

</body>

</html>
