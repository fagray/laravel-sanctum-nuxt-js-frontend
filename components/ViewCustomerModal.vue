<template>
  <!-- /view customer modal -->

  <b-modal id="view-customer" size="lg" hide-backdrop centered :title="'Customer Details'">
    <h3>{{ fullName }}, {{ currentCustomer.gender }} </h3>
    <p>{{ currentCustomer.position }}, {{ currentCustomer.company }} </p>
    <p>{{ currentCustomer.email }} </p>
  </b-modal>
</template>
<script>
export default {
  name: 'ViewCustomerModal',
  props: ['customer'],
  data () {
    return {
      currentCustomer: {}
    }
  },

  computed: {
    fullName () {
      return this.currentCustomer.first_name + ' ' + this.currentCustomer.last_name
    }
  },

  mounted () {
    this.currentCustomer = this.customer
  },
  methods: {
    createCustomer () {

    }
  }
}
</script>
