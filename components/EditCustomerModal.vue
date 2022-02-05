<template>
  <!-- /edit customer modal -->

  <b-modal id="edit-customer" size="lg" hide-backdrop centered title="Edit Customer">
    <b-form @submit="createCustomer" @reset="resetForm">
      <b-row>
        {{ currentCustomer }}
        <b-col>
          <b-form-group
            id="input-group-1"
            label="First name"
          >
            <b-form-input
              v-model="currentCustomer.first_name"
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
              v-model="currentCustomer.last_name"
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
              v-model="currentCustomer.company"
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
              v-model="currentCustomer.position"
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
              v-model="currentCustomer.email"
              type="text"
              placeholder=""
              required
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group v-slot="{ ariaDescribedby }" label="Gender">
            <b-form-checkbox-group
              id="checkbox-group-2"
              :aria-describedby="ariaDescribedby"
              name="Gender"
            >
              <b-form-checkbox value="orange">
                Male
              </b-form-checkbox>
              <b-form-checkbox value="apple">
                Female
              </b-form-checkbox>
              <b-form-checkbox value="apple">
                Rather not say
              </b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>
<script>
export default {
  name: 'EditCustomerModal',
  props: ['customer'],
  data () {
    return {
      currentCustomer: {}
    }
  },
  mounted () {
    this.currentCustomer = this.customer
  },

  methods: {
    createCustomer () {

    },

    resetForm () {

    }
  }
}
</script>
