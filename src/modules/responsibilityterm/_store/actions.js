import termService from '@/services/responsibility-term-service'
import userService from '@/services/user-service'
import * as types from './mutation-types'

export const setTerms = ({ commit }, payload) => {
    commit(types.SET_TERMS, payload)
}

export const setSelectedTerm = ({ commit }, payload) => {
    commit(types.SET_SELECTED_TERM, payload)
}

export const updateSelectedTerm = async ({ commit }, payload) => {
    await commit(types.UPDATE_SELECTED_TERM, { attribute: "status", value: payload })
}

export const createTerm = async ({ dispatch }, { pet, loggedUserIdentifier }) => {
    try {
        const { data: { userInfo }} = await userService.findUserById(pet.user_id)
        
        const termModel = {
            pet_id: pet.id,
            donator_identifier: userInfo.cpf || userInfo.cnpj,
            adopter_identifier: loggedUserIdentifier,
            status: 'pendente'
        }

        await termService.createTerm(termModel)
        await dispatch('auth/loadSession', {}, { root: true })
    } catch (error) {
        console.log(error && error.response)
    }
}

export const updateTerm = async ({ dispatch, state }) => {
    try {
        const { selectedTerm } = state
        if (selectedTerm && selectedTerm.id) {
            await termService.update(selectedTerm)
            await dispatch('auth/loadSession', {}, { root: true })
        }
    } catch (error) {
        console.log(error && error.response)
    }
}