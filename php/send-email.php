<?php
    //Variáveis
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $mensagem = $_POST['message'];
    $servico = $_POST['service'];
    $orcamento = $_POST['budget'];
    $data_envio = date('d/m/Y');
    $hora_envio = date('H:i:s');

    //Campo do Email
    $arquivo = "
        <html>
        <p><b>Nome: </b>$nome</p>
        <p><b>E-mail: </b>$email</p>
        <p><b>Serviço: </b>$servico</p>
        <p><b>Orçamento: </b>$orcamento</p>
        <p><b>Mensagem: </b>$mensagem</p>
        <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
        </html>
    ";
  
    //Emails para quem será enviado o formulário
    $destino = "example@gmail.com";
    
    //Obrigatório ser email da hospedagem
    $assunto = "Contato pelo Portfólio";

    //Exibição correta dos caracteres
    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    $headers .= "From: $nome <$email>";

    //Enviar
    mail($destino, $assunto, $arquivo, $headers);
  
    echo "<meta http-equiv='refresh' content='10;URL=../index.html'>";
?>