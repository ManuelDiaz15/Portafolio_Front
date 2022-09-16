<template>
    <body class="color_back1_edit">
        <div class="container-xl containerxl_padding" >
         <div class="row-0 justify-content-center color_back2_edit">
            <div class="focused">
                <div class="color_top_edit">
                    <h4> ID: 001 Transcripción Call Center: Ripley. Ejecutivo: Felipe Morales Fecha: 25/08/2022 </h4>
                </div>
                <div class="linea"></div>
                <div class="focused color_speaker_edit1">
                    <div>
                       <!--  <v-img contain alt="Alloxentric Agent" src="@/assets/Agent.png" max-height="50"></v-img> --> 
                        <p class="p text-left"> <strong>Agent</strong></p>  
                        <p class="p text-left">
                            Thank you for calling ABC Company. My name is Ashley. How may I help you today?
                        </p>
                    </div>
                    <div class="input-inferior row-0 justify-content-center">
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
                    <div class="input-inferior row-0 justify-content-center">
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
                    <div class="input-inferior row-0 justify-content-center">
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
                    <div class="input-inferior row-0 justify-content-center">
                        <input type="text" class="input"  v-on:keyup.enter="Agregar " placeholder="Enviar Transcripción" v-model="eviarContenido">
                    </div>
                </div>
            </div> 
        </div>
        
    </div>
    </body>
 </template>

<style>
    .containerxl_padding{
    padding: 15px;
}
    .input-inferior input{
    padding: 10px;
    margin: auto;
    width: 100%;
    border-radius: 15px;
    font-size: 16px;
    background: #1d67cd;
}
.color_top_edit {
    background: #e8e6e6;
    padding: 12px;
    padding-bottom: 5px;
    border-radius: 15px;
}
.color_back2_edit{
    background: #78ecd5;
}
.color_back1_edit{
    background: #abf8e5;
}
.focused{
    padding: 17px;
}
.color_speaker_edit1{
    background: #48a5d1;
}
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
