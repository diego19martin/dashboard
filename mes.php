<?php require_once "vistas/parte_superior.php" ?>

<!-- Inicio del contenido principal -->

<div class="container-2">
    <h1 class="titulo">Consulta datos del mes</h1>
    <section class="container principal">
        <form class="row g-2">

            <div class="col-auto fecha">
                <label for="date" class="col-form-label">MES</label>
                <div class="input-group date" id="datepickermonth">
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
                <button class="btn btn-success btn-icon-split">
                    <span class="icon text-white-50">
                        <i class="fas fa-check"></i>
                    </span>
                    <span class="text">Consultar</span>
                </button>
            </div>
        </form>
    </section>
</div>


<!-- Fin del contenido principal -->

<?php require_once "vistas/parte_inferior.php" ?>