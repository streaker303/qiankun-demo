import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		commonData: 33,
		commonObj: {
			name: '初始化',
			age: 0
		}
	},
	mutations: {
		setCommonData(state, val) {
			state.commonData = val
		},
		setCommonObj(state, val) {
			state.commonObj = val
		}
	}
})
