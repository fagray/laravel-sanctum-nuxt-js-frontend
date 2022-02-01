<template>
  <div>
    <h2 class="text-secondary">
      Customer Details
    </h2>

    <h2 class="text-secondary">
      {{ fullName }}
    </h2>
    <p class="text-secondary">
      {{ customer.gender }} / {{ customer.title }}, {{ customer.company }}
    </p>
    <p class="text-secondary">
      {{ customer.city }}
    </p>
    <p class="text-secondary">
      {{ customer.email }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      customer: {}
    }
  },
  computed: {
    fullName () {
      return this.customer.first_name + ' ' + this.customer.last_name
    }
  },
  mounted () {
    this.getCustomerDetailsById()
  },
  methods: {
    getCustomerDetailsById () {
      this.$axios.get('/api/customers/' + this.$route.params.id).then((response) => {
        this.customer = response.data
      })
    }
  }
}
</script>
