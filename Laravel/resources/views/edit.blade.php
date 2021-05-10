<html>
<body>
  <h2>HTML Forms</h2>

<form action="{{ route('producto.store') }}" method="POST">
  @csrf
  <label for="fname">nombre:</label><br>
  <input type="text" id="nombre" name="nombre" required><br>
  <label for="fname">nombre:</label><br>
  <input type="text" id="descripcion" name="descripcion" required><br>
  <label for="fname">nombre:</label><br>
  <input type="text" id="precio" name="precio" required><br>
  <label for="fname">nombre:</label><br>
  <input type="text" id="stock" name="stock" required><br>
  <label for="fname">nombre:</label><br>
  <input type="text" id="imagen" name="imagen" required><br>
  <label for="fname">nombre:</label><br>
  <input type="text" id="id_categoria" name="id_categoria" required><br>

  <input type="submit" value="Submit">
</form>

<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

</body>
</html>
