<template>
  <v-container>
    <form action="">
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <div>
                <h4>Crea tu Meta Rezagada</h4>
              </div>
            </v-card-title>
            <v-container>
            <v-layout row>
              <v-flex xs12 sm5>
                <v-text-field
                label="Titulo"
                v-model="titulo"
                required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 offset-sm2>
                <v-text-field
                label="Fecha Terminacion"
                v-model="fechaFin"
                required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12>
                <v-text-field
                label="Descripcion"
                v-model="descripcion"
                required
                multi-line
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <v-btn
              color="red white--text"
              :disabled="!formIsValid"
              @click.stop="onCrearMetaRezagada">
              Guardar</v-btn>
            </v-card-actions>

            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      titulo: '',
      fechaFin: '',
      descripcion: ''
    }
  },
  computed: {
    formIsValid () {
      return this.titulo !== '' &&
        this.fechaFin !== '' &&
        this.descripcion !== ''
    }
  },
  methods: {
    onCrearMetaRezagada () {
      const metaRezagada = {
        titulo: this.titulo,
        fechaFin: this.fechaFin,
        descripcion: this.descripcion
      }
      this.$store.dispatch('crearMetaRezagada', metaRezagada)
      this.$router.push('/metas-rezagadas')
      console.log('Meta creada con éxito')
    }
  }
}
</script>
<style scoped>
</style>
