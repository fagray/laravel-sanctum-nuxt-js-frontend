export const state = () => {}

export const mutations = {}

export const actions = {
  async nuxtServerInit() {
    await this.$auth.fetchUser()
  }
}
export const getters = {}