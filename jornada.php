<?php require_once "vistas/parte_superior.php" ?>

<!-- Inicio del contenido principal -->

<div class="container">
    <h1 class="titulo">Consulta de jornada</h1>
    <section class="container principal" style="width: 640px;">
        <form class="row g-2">

            <div class="col-auto fecha">
                <label for="date" class="col-form-label">Fecha</label>
                <div class="input-group date" id="datepicker">
                    <input type="text" class="form-control" id="date" />
                    <span class="input-group-append">
                        <span class="input-group-text bg-light d-block">
                            <i class="fa fa-calendar"></i>
                        </span>
                    </span>

                </div>
            </div>

            <div class="col-auto">
                <select class="form-select" aria-label="Default select example" id="selectSala">
                    <option selected>SALA</option>
                    <option value="OFICIAL">OFICIAL</option>
                    <option value="ESPECIAL">ESPECIAL</option>
                    <option value="JOVEN">JOVEN</option>
                    <option value="TODAS">TODAS</option>
                </select>
            </div>
        </form>
        <div class="col-auto consultar">
            <button class="btn btn-success btn-icon-split" onClick='consultaJornada()'>
                <span class="icon text-white-50">
                    <i class="fas fa-check"></i>
                </span>
                <span class="text">Consultar</span>
            </button>
        </div>
    </section>
</div>

<hr class="solid">

<h1 class="h3 mb-2 text-gray-800 titulo-analisis">Análisis de datos</h1>

<!-- Begin Page Content -->
<div id="containerJornada" class="container-fluid">

    <!-- Page Heading -->

    <!-- Content Row -->


    <div class="row">
    
        <div class="cardOficial" id="cardOficial" style="display: block;">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Sala Oficial</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table 
                                    class="table table-bordered" 
                                    id="tableOficial" 
                                    width="100%" 
                                    cellspacing="0"
                                    data-card-view="true"
                                    data-height="300"                                    
                                    >
                                    <thead>
                                        <tr>
                                            <th data-field="Sector">Sector</th>
                                            <th data-field="Beneficio" data-formatter="priceFormatter">Beneficio</th>
                                            <th data-field="CoinIn" data-formatter="priceFormatter">Coin-In</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cardEspecial" id="cardEspecial" style="display: block;">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Sala Especial</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table 
                                class="table table-bordered"
                                id="tableEspecial"
                                width="100%"
                                cellspacing="0"
                                data-card-view="true"
                                data-height="300">
                                    <thead>
                                        <tr>
                                            <th data-field="Sector">Sector</th>
                                            <th data-field="Beneficio" data-formatter="priceFormatter">Beneficio</th>
                                            <th data-field="CoinIn" data-formatter="priceFormatter">Coin-In</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cardJoven" id="cardJoven" style="display: block;">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Sala Joven</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table
                                 class="table table-bordered"
                                 id="tableJoven"
                                 width="100%" 
                                 cellspacing="0"
                                 data-card-view="true"
                                 data-height="300">
                                    <thead>
                                        <tr>
                                            <th data-field="Sector">Sector</th>
                                            <th data-field="Beneficio" data-formatter="priceFormatter">Beneficio</th>
                                            <th data-field="CoinIn" data-formatter="priceFormatter">Coin-In</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</div>


<!-- /.container-fluid -->

 <!-- Content Row -->
<div class="rowChartJornada" id="rowChartJornada">

    <!-- bar Chart -->
    <div class="col-xl-4 col-lg-5 bar" id="bar">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Utilidad</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="chart-pie pt-4">
                    <canvas class="chartBar" id="myChartBar"></canvas>
                </div>
                <hr>
            </div>
        </div>
    </div>

    <!-- Donut Chart -->
    <div class="col-xl-4 col-lg-5 pie">
        <div class="card shadow mb-4" id="pie">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Utilidad</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="chart-pie pt-4">
                    <canvas class="chartPie" id="myChartPie"></canvas>
                </div>
                <hr>
            </div>
        </div>
    </div>
</div>

</div>




<!-- Fin del contenido principal -->

<?php require_once "vistas/parte_inferior.php" ?>