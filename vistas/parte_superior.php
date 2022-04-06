<?php
session_start();

$nombre = $_SESSION['nombre'];

?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Panel Operativo - Gerencia Operaciones</title>

    <!-- BOOSTRAP 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="scss/app.css" rel="stylesheet">
    <link href="css/sb-admin-2.css" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" integrity="sha512-mSYUmp1HYZDFaVKK//63EcZq4iFWFjxSL+Z3T/aCt4IO9Cejm03q3NKKYN6pFQzY0SBOr8h+eCIAZHPXcpZaNw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://unpkg.com/bootstrap-table@1.19.1/dist/bootstrap-table.min.css" rel="stylesheet">
    
</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <img class="hapsa" src="data:image/jpeg;base64,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" alt="">


            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Gerencia de Operaciones</div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" href="index.php">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Menu Principal
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Utilidad</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">CONSULTA DE DATOS</h6>
                        <a class="collapse-item" href="jornada.php">Consultar jornada</a>
                        <a class="collapse-item" href="mes.php">Consultar mes</a>
                        <a class="collapse-item" href="año.php">Consultar año</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">COMPARATIVOS</h6>
                        <a class="collapse-item" href="comparativoFecha.php">Comparativo Fecha</a>
                        <a class="collapse-item" href="comparativoMes.php">Comparativo Mes</a>
                        <a class="collapse-item" href="comparativoAño.php">Comparativo Año</a>
                    </div>
                </div>
            </li>

            <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Maquinas</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Parque de Maquinas</h6>
                        <a class="collapse-item" href="utilities-color.html">Novedades de Maquinas</a>
                        <a class="collapse-item" href="utilities-border.html">Las 10 + y las 10 -</a>
                        <a class="collapse-item" href="utilities-animation.html">Buscador de Maquinas</a>
                    </div>
                </div>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                CARGA DE DATOS
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>CONVERSION</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">DATOS DE JORNADA</h6>
                        <a class="collapse-item" href="login.html">Utilidad</a>
                    </div>
                </div>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <!-- <img class="hapsa-img" src="data:image/jpeg;base64,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" alt=""> -->

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                    </ul>
                    
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small" style="font-size: 25px;">Bienvenido <?php echo $nombre ?>!</span>

                </nav>
                <!-- End of Topbar -->

              