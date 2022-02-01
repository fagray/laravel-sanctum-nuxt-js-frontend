<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        Custdress - Mini customer addressbook
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav v-if="$auth.loggedIn" class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ $auth.user.name }} </em>
            </template>

            <b-dropdown-item @click="logout">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

  methods: {
    logout () {
      this.$axios.post('/auth/logout').then((response) => {
        console.log(response.data)
        this.$auth.logout()
        this.$router.push('/login')
      })
    }
  }

}
</script>
