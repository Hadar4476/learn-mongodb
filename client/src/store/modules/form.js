const state = {
  username: {
    type: 'text',
    autoComplete: 'given-name',
    value: '',
    isValid: false
  },
  password: {
    type: 'password',
    autoComplete: 'password',
    value: '',
    isValid: false
  },
  email: {
    type: 'email',
    autoComplete: 'email',
    value: '',
    isValid: false
  }
};

const getters = {
  getForm(state) {
    return state;
  }
};

const mutations = {
  updateFieldValue(state, { fieldName, value }) {
    const cloneState = { ...state };
    cloneState[fieldName].value = value;
    state = cloneState;
  },
  submitForm(state) {
    console.log(state);
  }
};

const actions = {
  SUBMIT_FORM({ commit }) {
    commit('submitForm');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
