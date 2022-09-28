<template>
    <div>
      <h2>Hola como estan {{ message }}</h2>
      <v-data-table
        :headers="headers"
        :items="desserts"
        item-key="name"
        class="elevation-1"
        :search=search
        :custom-filter="filterOnlyCapsText"
      >
        <template v-slot:top>
          <v-text-field
            v-model=search
            label="Buscar por id"
            class="mx-4"
          ></v-text-field>
        </template>
        <template body append>
          <tr>
            <td></td>
            <td>
              <v-text-field
                v-model="calories"
                type="number"
                label="Less than"
              ></v-text-field>
            </td>
            <td colspan="4"></td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </template>
  <script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    
    
    @Component({
		name: 'ListView',
    })
    export class ListView extends Vue{
        public message = this.$t("Main.message");
    }  

    export default  {

      data () {
        return {
          search: '',
          calories: '',
          desserts: [
            {
              id: 1,
              callcenter: 'Falabella',
              ejecutivo: 'Jose Perez',
              estado: 'pendiente',
              fecha: '10/12/22',
            },
            {
              id: 2,
              callcenter: 'Falabella',
              ejecutivo: 'Jose Perez',
              estado: 'pendiente',
              fecha: '10/12/22',
            },
            {
              id: 3,
              callcenter: 'Falabella',
              ejecutivo: 'Jose Perez',
              estado: 'pendiente',
              fecha: '10/12/22',
            },
            {
              id: 4,
              callcenter: 'Falabella',
              ejecutivo: 'Jose Perez',
              estado: 'pendiente',
              fecha: '10/12/22',
            },
            {
              id: 5,
              callcenter: 'Falabella',
              ejecutivo: 'Jose Perez',
              estado: 'pendiente',
              fecha: '10/12/22',
            },
            {
              id: 6,
              callcenter: 'Falabella',
              ejecutivo: 'Jose Perez',
              estado: 'pendiente',
              fecha: '10/12/22',
            },
            {
              id: 7,
              callcenter: 'Falabella',
              ejecutivo: 'Jose Perez',
              estado: 'pendiente',
              fecha: '10/12/22',
            },
            {
              id: 8,
              callcenter: 'Falabella',
              ejecutivo: 'Jose Perez',
              estado: 'pendiente',
              fecha: '10/12/22',
            },
            {
              id: 9,
              callcenter: 'Falabella',
              ejecutivo: 'Jose Perez',
              estado: 'pendiente',
              fecha: '10/12/22',
            },
            {
              id: 10,
              callcenter: 'Falabella',
              ejecutivo: 'Jose Perez',
              estado: 'pendiente',
              fecha: '10/12/22',
            },
          ],
        }
      },
      computed: {
        headers () {
          return [
            {
              text: 'ID transcripción',
              align: 'start',
              sortable: false,
              value: 'id',
            },
            { text: 'Callcenter', value: 'callcenter' },
            { text: 'Ejecutivo', value: 'ejecutivo' },
            { text: 'Estado', value: 'estado' },
            { text: 'Fecha', value: 'fecha' },
          ]
        },
      },
      methods: {
        filterOnlyCapsText (value, search, item) {
          return value != null &&
            search != null &&
            typeof value == 'number' &&
            value.toString().toLocaleUpperCase().indexOf(search) !== -1
        },
      },
    }
  </script>
  <style>
    .body{
        background-color: #c0e9d5;
    }
  </style>