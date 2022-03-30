<?php
include "../config/conexion.php";

$fechaJornada=$_GET['fechaJornada'];

$datos = array();

$query = mysqli_query($db, "SELECT * FROM datos WHERE fecha='$fechaJornada'");

while($row = mysqli_fetch_array($query)) 
{ 
    $fecha=$row['Fecha'];
    $sector=$row['Sector'];
    $coinin=$row['Coin In'];
    $beneficio=$row['Beneficio'];

$datos[] = array('Fecha'=> $fecha, 'Sector' => $sector, 'CoinIn'=> $coinin, 'Beneficio' => $beneficio);

}

// $resultado = mysqli_fetch_all($query, MYSQLI_ASSOC);

echo json_encode($datos);
       
?>