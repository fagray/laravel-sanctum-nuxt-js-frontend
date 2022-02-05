<template>
  <div>
    <b-container fluid class="text-light">
      <b-row>
        <b-col md="6" offset-md="3" class="p-3">
          <h2 class="text-secondary">
            Login to your application
          </h2>
          <b-form @submit.prevent="login">
            <b-form-group
              class="mt-3"
            >
              <b-form-input
                v-model="form.email"
                type="email"
                placeholder="Your email"
                required
              />
            </b-form-group>

            <b-form-group>
              <b-form-input
                v-model="form.password"
                type="password"
                placeholder="Password"
                required
              />
            </b-form-group>

            <b-button block variant="outline-primary" type="submit">
              Login
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  auth: false,
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      hasError: false,
      error: ''

    }
  },
  mounted () {
    // Before loading login page, obtain csrf cookie from the server.
    this.$axios.$get('/sanctum/csrf-cookie')
  },
  methods: {
    async login () {
      await this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.form.email,
          password: this.form.password
        }
      }).catch((error) => {
        this.hasError = true
        this.error = error
      }).then((response) => {
        this.$router.push('/')
      })
    }
  }
}
</script>
