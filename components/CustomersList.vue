<template>
  <div>
    <b-table
      id="customerstable"
      :select-mode="'single'"
      selectable
      hover
      :items="getAllCustomers"
      :fields="fields"
      :busy="isBusy"
      @row-selected="onRowSelected"
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle" />
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>/>
  </div>
</template>

<script>
export default {
  props: ['isBusy'],
  data () {
    return {
      fields: ['first_name', 'last_name', 'gender', 'email', 'company', 'title', 'city', 'latitude', 'longtitude'],
      customers: []
    }
  },
  created () {
    this.$nuxt.$on('refresh-table', () => {
      this.$root.$emit('bv::refresh::table', 'customerstable')
    })
  },
  methods: {

    onRowSelected (items) {
      this.$router.push('/customers/' + items[0].id)
    },
    async getAllCustomers () {
      try {
        const response = await this.$axios.get('/api/customers')
        return response.data
      } catch (error) {
        return []
      }
    }

  }
}
</script>
