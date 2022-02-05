<template>
  <div>
    <h2 class="text-secondary">
      <div class="float-right">
        <b-button v-b-modal.new-customer variant="outline-primary">
          New Customer
        </b-button>
        <b-dropdown text="" variant="outline-secondary" class="m-2">
          <template #button-content>
            <b-icon-list />
          </template>
          <b-dropdown-item v-b-modal.import-csv href="#">
            Import CSV
          </b-dropdown-item>
          <b-dropdown-item href="#" @click="refreshTable">
            Refresh
          </b-dropdown-item>
        </b-dropdown>
      </div>

      Customers
    </h2>

    <customers-list :is-busy="isBusy" :refresh-table="refreshTable" />

    <new-customer-modal />
    <import-customer-modal />
  </div>
</template>

<script>
import { BIconList } from 'bootstrap-vue'
import NewCustomerModal from '~/components/NewCustomerModal.vue'
import CustomersList from '~/components/CustomersList.vue'
import ImportCustomerModal from '~/components/ImportCustomerModal.vue'

export default {
  name: 'IndexPage',
  components: { BIconList, NewCustomerModal, CustomersList, ImportCustomerModal },
  data () {
    return {
      isBusy: false
    }
  },
  methods: {

    refreshTable () {
      this.$nuxt.$emit('refresh-table')
    }

  }
}
</script>
