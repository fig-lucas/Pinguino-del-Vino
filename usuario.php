<?php
$conn = new mysqli("localhost", "root", "", "club");

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$email = $_POST['email'];

$sql = "INSERT INTO usuario (nome, sobrenome, email) VALUES ('$nome', '$sobrenome', '$email')";
$conn->query($sql);

echo "assinatura feita com sucesso!!!"
?>