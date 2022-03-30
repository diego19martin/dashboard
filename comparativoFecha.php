<?php require_once "vistas/parte_superior.php" ?>

<!-- Inicio del contenido principal -->

<div class="container">
    <h1 class="titulo">Comparativo Fecha</h1>
    <section class="container principal">
        <form class="row g-2">

            <div class="col-auto fecha">
                <label for="date" class="col-form-label">Fecha</label>
                <div class="input-group date" id="datepickercompararfechaIni">
                    <input type="text" class="form-control" id="date"/>
                    <span class="input-group-append">
                    <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                    </span>
                    </span> 
                </div>
            </div>

            <div class="col-auto fecha">
                <label for="date" class="col-form-label">Fecha</label>
                <div class="input-group date" id="datepickercompararfechaFin">
                    <input type="text" class="form-control" id="date"/>
                    <span class="input-group-append">
                    <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                    </span>
                    </span>
               
                </div>
            </div>

            <div class="col-auto">
                <select class="form-select" aria-label="Default select example">
                    <option selected>SALA</option>
                    <option value="1">OFICIAL</option>
                    <option value="2">ESPECIAL</option>
                    <option value="3">JOVEN</option>
                    <option value="3">TODAS</option>
                </select>
            </div>
            <div class="col-auto">
                <button class="btn btn-success btn-icon-split" onclick='consultaJornada()'>
                    <span class="icon text-white-50">
                        <i class="fas fa-check"></i>
                    </span>
                    <span class="text">Consultar</span>
                </button>
            </div>
        </form>
    </section>
</div>

<hr class="solid">


<!-- Begin Page Content -->
<div id="containerJornada" class="container-fluid">

<!-- Page Heading -->
<br><h1 class="h3 mb-2 text-gray-800 titulo-analisis">Comparativo por fechas</h1>

<!-- Content Row -->
<div class="row">

    <div class="col-xl-8 col-lg-7">

        <!-- Area Chart -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
            </div>
            <div class="card-body">
                <div class="chart-area">
                    <canvas id="myAreaChart"></canvas>
                </div>
                <hr>
                Styling for the area chart can be found in the
                <code>/js/demo/chart-area-demo.js</code> file.
            </div>
        </div>

        <!-- Bar Chart -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
            </div>
            <div class="card-body">
                <div class="chart-bar">
                    <canvas id="myBarChart"></canvas>
                </div>
                <hr>
                Styling for the bar chart can be found in the
                <code>/js/demo/chart-bar-demo.js</code> file.
            </div>
        </div>

    </div>

    <!-- Donut Chart -->
    <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="chart-pie pt-4">
                    <canvas id="myPieChart"></canvas>
                </div>
                <hr>
                Styling for the donut chart can be found in the
                <code>/js/demo/chart-pie-demo.js</code> file.
            </div>
        </div>
    </div>
</div>

</div>
<!-- /.container-fluid -->

</div>

<!-- Fin del contenido principal -->

<?php require_once "vistas/parte_inferior.php" ?>