<template>
    <body>
    <div class="Title-list">
        <h2>{{ message }}</h2>
    </div>
    <div class="container-list">
        <div class="filter">
            <p class="title-filter">Ingresa la ID de la transcripcion</p>
            <input  class="F-input" placeholder="ID-transcripción">
            <button class="btn-filter">Buscar</button>
        </div>
        <div class="Back-Table">
            <table class="table table-bordered">
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
.container-list{
    background-color: rgb(232 230 230);
    padding: 100px;
}
/* titulo */
.Title-list{
    text-align: center;
}
/* filtro */
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
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 1px 32px;
    text-align: right;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10%
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