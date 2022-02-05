<template>
  <div>
    <navigation-bar />
    <b-container fluid class="text-light">
      <b-row>
        <b-col md="8" offset-md="2" class="p-3">
          <Nuxt />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'
export default {
  name: 'DefaultLayout',
  components: { NavigationBar }
}
</script>
