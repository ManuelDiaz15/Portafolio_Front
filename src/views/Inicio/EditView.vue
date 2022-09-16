<template>
    <!-- Cuerpo de la Page -->
    <body class="color_back1_edit">
        <!-- Lo que esta haciendo el Container XL es centrar el div principal, abarcando width: 100%; margin-right: auto; margin-left: auto; -->
        <div class="container-xl containerxl_padding" >
                <div class="btn_guardar">
                <h3>Guardar Transcripción</h3>
                <button type="button" class="color_btn"><strong>Guardar</strong></button>
                </div>
         <div class="color_back2_edit">
            <div class="focused">
                <div class="color_top_edit">
                    <h4> ID: 001 Transcripción Call Center: Ripley. Ejecutivo: Felipe Morales Fecha: 25/08/2022 </h4>
                </div>
                <div class="linea"></div>
                <div class="focused color_speaker_edit1">
                    <div>
                       <!--  <v-img contain alt="Alloxentric Agent" src="@/assets/Agent.png" max-height="50"></v-img> --> 
                        <p class="p text-left"> <strong>Agent</strong></p> <!-- Se utiliza strong para dejar en negrita el texto -->
                        <p class="p text-left">
                            Thank you for calling ABC Company. My name is Ashley. How may I help you today?
                        </p>
                    </div>
                    <div class="input-inferior">
                        <input type="text" class="input"  v-on:keyup.enter="Agregar " placeholder="Enviar Transcripción" v-model="eviarContenido">
                    </div>
                </div>
                <div class="linea"></div>
                <div class="focused color_speaker_edit1">
                    <div >
                        <p class="p text-left"> <strong>Customer</strong></p>  
                        <p class="p text-left">
                        I am calling because I received a Wrong bill. I just paid my phone bill two days ago and my payment is not reflected in the bill.
                        </p>
                    </div>
                    <div class="input-inferior">
                        <input type="text" class="input"  v-on:keyup.enter="Agregar " placeholder="Enviar Transcripción" v-model="eviarContenido">
                    </div>
                </div>
                <div class="linea"></div>
                <div class="focused color_speaker_edit1">
                    <div>
                        <p class="p text-left"> <strong>Agent</strong></p>  
                        <p class="p text-left">
                            Thank you for calling ABC Company. My name is Ashley. How may I help you today?
                        </p>
                    </div>
                    <div class="input-inferior">
                        <input type="text" class="input"  v-on:keyup.enter="Agregar " placeholder="Enviar Transcripción" v-model="eviarContenido">
                    </div>
                </div>
                <div class="linea"></div>
                <div class="focused color_speaker_edit1">
                    <div >
                        <p class="p text-left"> <strong>Customer</strong></p>  
                        <p class="p text-left">
                        I am calling because I received a Wrong bill. I just paid my phone bill two days ago and my payment is not reflected in the bill.
                        </p>
                    </div>
                    <div class="input-inferior">
                        <input type="text" class="input"  v-on:keyup.enter="Agregar " placeholder="Enviar Transcripción" v-model="eviarContenido">
                    </div>
                </div>
            </div> 
        </div>
    </div>
    </body>
 </template>

<style>
/* Padding que separa los dos colores en TOP*/
.containerxl_padding{
    padding: 15px;
}
/* Input donde se edita la transcripción*/
.input-inferior input{
    padding: 10px;
    margin: auto;
    width: 100%;
    border-radius: 15px;
    font-size: 16px;
    background: #1d67cd;
}
/* ID, CALL CENTER, AGENT, DATE */
.color_top_edit {
    background: #e8e6e6;
    padding: 12px;
    padding-bottom: 5px;
    border-radius: 15px;
}
/* Color secundario de la Page*/
.color_back2_edit{
    background: #78ecd5;
}
/* Color principal de la Page*/
.color_back1_edit{
    background: #abf8e5;
}
/* Padding encargado de centrar los div más pequeños */
.focused{
    padding: 17px;
}
/* Color de los div que encierran a los Agent and Customer*/
.color_speaker_edit1{
    background: #48a5d1;
}
/* Linea que separa los Agent de Customer */
.linea {
    border-top: 2px solid rgb(191, 245, 229);
    height: 2px;
    padding: 0;
    margin: 40px auto 0 auto;
    margin-bottom: 40px;
    overflow: auto;
}
::placeholder {
    /* Se aplica específicamente al texto del placeholder */
    color: white;
}


</style>
