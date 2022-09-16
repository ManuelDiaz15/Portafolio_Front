<template>
    <body>
        <div class="container-xl" >
        <div class="row-0 justify-content-center">
            <div>
                <div  class="cont_fondo">
                    <h3> ID: 001 Transcripción Call Center: Ripley. Ejecutivo: Felipe Morales Fecha: 25/08/2022 </h3>
                </div>
                <div>
                    <p class="p text-left"> Speaker1 :</p>  
                    <p class="p text-left">
                    Debitis, corrupti quae deserunt qui totam unde mollitia accusamus neque omnis.
                    </p>
                
            
               
                </div>
            </div>    
            <div class="input-inferior row-0 justify-content-center">
              <input type="text" class="input"  v-on:keyup.enter="Agregar " placeholder="Enviar Transcripción" v-model="eviarContenido">
            </div>
        </div>
    </div>
    </body>
 </template>

<style>
    .input-inferior input{
    border:blue;
    padding: 10px;
    margin: auto;
    width: 100%;
    border-radius: 15px;
    font-size: 16px;
}
.cont_fondo {
    background: #b8b7b6;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 15px;
}
</style>
