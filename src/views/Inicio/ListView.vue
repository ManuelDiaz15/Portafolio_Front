<template>
    <body class="color-body1">
    <div class="d-flex">
        <div class="container-fluid">
            <div class="Title-list">
        <h2>{{ message }}</h2>
    </div>
    <div class="d-flex container-fluid">
        <div class=" Back-Table">
            <table class="table table-bordered table-responsive table-striped">
				<thead class="table-head">
					<tr>
					<th scope="col">ID</th>
					<th scope="col">Nivel de precición</th>
					<th scope="col">Nombre del call center</th>
					<th scope="col">Ejecutivo</th>
					<th scope="col">Estado</th>
                    <th scope="col">Fecha</th>
					</tr>
				</thead>
				<tbody class="table-body">
					<tr>
					<th scope="row">1</th>
					<td>70%</td>
					<td>pepe</td>
					<td>tomas</td>
					<td>pendiente</td>
                    <td>10/9/22</td>
					</tr>
				</tbody>
            </table>
        </div>
        
         </div>
        
        </div>
        <div class="d-flex" >
        <div class="ml-auto search-center1">
            <div class="filter">
                <p class="title-filter">Ingresa la ID de la transcripcion</p>
                    <input  class="F-input" placeholder="ID-transcripción">
                    <button class="btn-filter btn-secondary btn-sm">Buscar</button>
            </div>
        </div>
    </div>
    </div>
    </body>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
		name: 'ListView',
    })

    export default class ListView extends Vue {
		public message = this.$t("Main.message");
	}
</script>
<style>
/* fondo */
.color-body1{
    background-color: rgb(232 230 230);
}
/* titulo */
.Title-list{
    text-align: center;
}
/* filtro */
.search-center1{
    margin-top: 24%;
}
.filter{
    background-color: #00A274;
	border: 5px solid #C0C0C0;
    width: 300px;
    float: right;
}
.title-filter{
    text-align: center;
}
.F-input{
    background-color: #ffffff;
    width: 60%;
    height: 20px;
}
.btn-filter{
    border: none;
    text-align: right;
    display: inline-block;
    font-size: 16px;
}
/* Tamaño tabla */
.Back-Table{
    padding: 25px;
    display: center;
}

/* tabla cabeza */
.table-head{
    background-color: rgba(0,112,80,1);
}
/* tabla cuerpo */
.table-body{
    background-color: #ffffff;
}



</style>