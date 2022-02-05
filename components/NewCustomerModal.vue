<template>
  <!-- /new customer modal -->

  <b-modal
    id="new-customer"
    size="lg"
    hide-backdrop
    centered
    title="New Customer"
    ok-title="Submit"
    @ok="addCustomer"
  >
    <b-form @reset="resetForm">
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            label="First name"
          >
            <b-form-input
              v-model="newCustomer.first_name"
              type="text"
              placeholder=""
              required
            />
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-1"
            label="Last name"
          >
            <b-form-input
              v-model="newCustomer.last_name"
              type="text"
              placeholder=""
              required
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            label="Company name"
          >
            <b-form-input
              v-model="newCustomer.company"
              type="text"
              placeholder=""
              required
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-1"
            label="Position"
          >
            <b-form-input
              v-model="newCustomer.position"
              type="text"
              placeholder=""
              required
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            label="Email"
          >
            <b-form-input
              v-model="newCustomer.email"
              type="text"
              placeholder=""
              required
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            label="Gender"
          >
            <b-form-select v-model="newCustomer.gender" :options="selectOptions" />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>
<script>
export default {
  name: 'NewCustomerModal',

  data () {
    return {
      newCustomer: {
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        company: '',
        position: ''
      },
      selectOptions: [
        { value: 'Male', text: 'Male' },
        { value: 'Femaile', text: 'Femaile' }
      ]
    }
  },

  methods: {
    addCustomer (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      console.log(this.newCustomer)

      this.$bvToast.toast('Customer has been added!', {
        title: 'Success',
        variant: 'success',
        toaster: 'b-toaster-top-center'
      })

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('new-customer')
      })
    },

    resetForm () {

    }
  }
}
</script>
