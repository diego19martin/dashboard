<?php

//Conexión a base de datos

    include ('datos.php');
    $db = mysqli_connect($host, $usuario, $clave, $base);

    if($db->connect_error) {
        die ($db->connect_error);
    }

?>    