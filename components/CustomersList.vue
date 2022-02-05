<template>
  <div>
    <b-table
      id="customers-table"
      hover
      :items="getAllCustomers"
      :fields="fields"
      :busy="isBusy"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle" />
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(actions)="row">
        <b-button ref="btnEditCustomer" variant="outline-primary" size="sm" class="mr-1" @click="editCustomer(row.item, row.index, $event.target)">
          <b-icon-pencil />
        </b-button>
        <b-button ref="btnViewCustomer" variant="outline-primary" size="sm" class="mr-1" @click="viewCustomer(row.item, row.index, $event.target)">
          <b-icon-eye />
        </b-button>
        <b-button variant="outline-primary" size="sm" class="mr-1" @click="deleteCustomer(row.item, row.index, $event.target)">
          <b-icon-trash />
        </b-button>
      </template>
    </b-table>/>

    <b-pagination

      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="customers-table"
    />

    <view-customer-modal :customer="selectedCustomer" />
    <edit-customer-modal :customer="selectedCustomer" />
  </div>
</template>

<script>
import { BIconPencil, BIconEye, BIconTrash } from 'bootstrap-vue'
import ViewCustomerModal from './ViewCustomerModal.vue'

export default {
  name: 'CustomersList',
  components: { BIconPencil, BIconEye, BIconTrash, ViewCustomerModal },
  props: ['isBusy'],
  data () {
    return {
      fields: ['id', 'first_name', 'last_name', 'gender', 'email', 'company', 'position',
        { key: 'actions', label: 'Actions' }],
      customers: [
        {
          id: 1,
          first_name: 'Ray',
          last_name: 'Test',
          company: 'Ry Corp',
          position: 'Janitor',
          email: 'janitor@gmail.com'
        },
        {
          id: 2,
          first_name: 'Boy',
          last_name: 'Test',
          company: 'Ry Corp',
          position: 'Janitor',
          email: 'boy@gmail.com'
        },
        {
          id: 3,
          first_name: 'J',
          last_name: 'Test',
          company: 'Ry Corp',
          position: 'Janitor',
          email: 'j@gmail.com'
        },
        {
          id: 4,
          first_name: 'Four',
          last_name: 'Test',
          company: 'Ry Corp',
          position: 'Janitor',
          email: 'four@gmail.com'
        },
        {
          id: 5,
          first_name: 'Five',
          last_name: 'Test',
          company: 'Ry Corp',
          position: 'Janitor',
          email: 'five@gmail.com'
        }

      ],
      selectedCustomer: {},
      currentPage: 1,
      perPage: 1

    }
  },
  computed: {
    rows () {
      return this.customers.length
    }
  },
  created () {
    this.$nuxt.$on('refresh-table', () => {
      this.$root.$emit('bv::refresh::table', 'customerstable')
    })
  },
  methods: {

    editCustomer (customer, index, event) {
      this.selectedCustomer = customer
      this.$root.$emit('bv::show::modal', 'edit-customer', '#btnEditCustomer')
    },

    viewCustomer (customer, index, event) {
      this.selectedCustomer = customer
      this.$root.$emit('bv::show::modal', 'view-customer', '#btnViewCustomer')
    },

    deleteCustomer () {
      this.$bvToast.toast('Customer has been deleted!', {
        title: 'Success',
        variant: 'success',
        toaster: 'b-toaster-top-center'
      })
    },

    getAllCustomers () {
      try {
        return this.customers
      } catch (error) {
        return []
      }
    }
    // async getAllCustomers () {
    //   try {
    //     const response = await this.$axios.get('/api/customers')
    //     return response.data
    //   } catch (error) {
    //     return []
    //   }
    // }

  }
}
</script>
