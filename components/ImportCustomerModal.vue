<template>
  <!-- /import csv modal -->
  <b-modal id="import-csv" hide-backdrop centered title="Import CSV File">
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
</template>
<script>

export default {
  name: 'ImportCustomerModal',
  data () {
    return {
      fileInput: ''
    }
  },
  methods: {
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
