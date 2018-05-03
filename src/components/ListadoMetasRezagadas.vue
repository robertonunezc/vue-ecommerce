<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
            <h4>Listado Metas rezagdas</h4>
          <v-data-table
            v-bind:headers="headers"
            :items="metasRezagadas"
            hide-actions
            class="elevation-1"
          >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.titulo }}</td>
            <td class="text-xs-right">{{ props.item.descripcion }}</td>
            <td class="text-xs-right">{{ props.item.fechaFin }}</td>
            <td class="text-xs-right">
              <v-btn color="blue white--text">Ver metas proactivas</v-btn>
              <v-btn color="cyan white--text">Editar</v-btn>
              <v-btn color="red  white--text" @click.native="dialog = true">Borrar</v-btn>
            </td>
          </template>
        </v-data-table>
        <v-card-text style="height: 100px; position: relative">
           <v-btn
             absolute
             dark
             fab
             right
             color="pink"
             :to="'/crearmeta'"
           >
             <v-icon>add</v-icon>
           </v-btn>
         </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title class="headline">Está seguro que desea borrar esta meta rezagada?</v-card-title>
        <v-card-text>Si borra esta meta rezagada todas las metas proactivas asociadas a ella ser borraran también.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1 white--text" @click.native="onBorrarMeta">Borrar</v-btn>
          <v-btn color="green darken-1 white--text" @click.native="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>
<script>
export default {
  name: 'listadoMetasRezagdas',
  data: () => ({
    dialog: false,
    headers: [
      { text: 'Titulo', value: 'titulo' },
      { text: 'Descripcion', value: 'descripcion' },
      { text: 'Fecha Fin', value: 'fechaFin' },
      { text: 'Acciones', value: 'acciones' }
    ]
  }),
  computed: {
    metasRezagadas () {
      return this.$store.getters.metasRezagadasCreadas
    }
  },
  methods: {
    onBorrarMeta () {
      this.dialog = false
      console.log('Borrando una meta')
    }
  }
}
</script>
<style scoped>
</style>
