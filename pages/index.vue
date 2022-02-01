<template>
  <div>
    <h2 class="text-secondary">
      <div class="float-right">
        <b-dropdown text="" variant="outline-secondary" class="m-2">
          <template #button-content>
            <b-icon-list />
          </template>
          <b-dropdown-item v-b-modal.modal-xl href="#">
            Import CSV
          </b-dropdown-item>
          <b-dropdown-item href="#" @click="refreshTable">
            Refresh
          </b-dropdown-item>
        </b-dropdown>
      </div>

      Customers
    </h2>
    <CustomersList :is-busy="isBusy" :refresh-table="refreshTable" />
    <b-modal id="modal-xl" hide-backdrop centered title="Import CSV File">
      <b-form-file
        v-model="fileInput"
        accept="text/csv"
        :state="Boolean(fileInput)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        @change="onFileChange"
      />
      <div class="mt-3">
        Selected file: {{ fileInput }}
      </div>
    </b-modal>
  </div>
</template>

<script>
import { BIconList } from 'bootstrap-vue'

export default {
  name: 'IndexPage',
  components: { BIconList },
  data () {
    return {
      fileInput: '',
      isBusy: false
    }
  },
  methods: {

    refreshTable () {
      this.$nuxt.$emit('refresh-table')
    },

    onFileChange (e) {
      this.isBusy = true
      const file = e.target.files[0]
      const formData = new FormData()

      formData.append('csv_file', file)
      this.$axios.post('/api/customers/import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        this.isBusy = false
        this.$nuxt.$emit('refresh-table')
        this.$bvToast.toast(response.data.msg, {
          title: 'Success!',
          autoHideDelay: 5000
        })
      })
    }
  }
}
</script>
