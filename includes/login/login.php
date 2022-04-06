<?php

ob_start();

include "../config/conexion.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>DashBoard Operaciones - Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">    

    <!-- Custom fonts for this template-->
    <link href="../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../../css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body class="bg-gradient-primary">

    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <img class="hapsaLogin" src="data:image/jpeg;base64,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" alt="">
                                        <h1 class="h4 text-gray-900 mb-4">Dashboard Operaciones</h1>
                                    </div>
                                    <form class="user" method="POST">
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-user"
                                                id="" name="username" aria-describedby="Usuario"
                                                placeholder="Ingresá tu usuario...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="" name="password" placeholder="Password">
                                        </div>
                                        
                                        <input type="submit" class="btn btn-primary btn-user btn-block">
                                            
                                        </input>                                        
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Olvidé mi Password</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="../../vendor/jquery/jquery.min.js"></script>
    <script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="../../js/sb-admin-2.min.js"></script>

    <!-- SweetAlert -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

</body>

</html>

<!-- Validacion del login -->

<?php


    if($_SERVER['REQUEST_METHOD']==='POST'){
            
        $usuario = mysqli_real_escape_string($db, $_POST['username']);
        $password = mysqli_real_escape_string($db, $_POST['password']);

       if ($password==='123456'){
           
            session_start();
            $_SESSION['usuario'] = $usuario;
            header('Location: http://localhost/dashboard/includes/login/nuevoPass.php');

       } else {
       

        if(!$usuario){
            echo '<script>swal("Atención", "El usuario es obligatorio o no es valido", "error");</script>';
        }

        if(!$password) {
            echo '<script>swal("Atención", "El Password es obligatorio", "error");</script>';
        }

        if(empty($errores)){
            //Revisar si el usuario existe
            $query = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
            $resultado = mysqli_query($db, $query);

            if($resultado -> num_rows){
                //Revisar si el password es correcto
                $user = mysqli_fetch_assoc($resultado);

                $auth = password_verify($password, $user['clave']);

                if($auth){
                    //El usuario está autenticado
                    session_start();

                    //Llenar el arreglo de la sesion
                    $_SESSION['usuario'] = $user['usuario'];
                    $_SESSION['nombre'] = $user['nombre'];
                    $_SESSION['rol'] = $user['rol'];
                    $_SESSION['auth'] = $auth;

                    if($_SESSION['rol']==="1"){
                        header('Location: http://localhost/dashboard/index.php');
                    }

                }else{
                   echo '<script>swal("Atención", "El Password es incorrecto", "error");</script>';
                }

            }else {
                echo '<script>swal("Atención", "El usuario no existe", "error");</script>';
            }
        }
    }
    }

?>