import { URLS } from './constants'
import { fakeDataProfesional } from './fakeData'

export const API = {
  local: {
    getProfessionalData(profesionalID: number) {
      let returnedProfesional = fakeDataProfesional.find((profesional) => {
        //return profesional._id === profesionalID
      })
      if (returnedProfesional) {
        if (!returnedProfesional.services) {
          returnedProfesional.services = []
        }
      }

      return returnedProfesional
    }
  },
  laravel: {},
  node: {
    baseURL: 'http://localhost:3000/',
    async getAllProfessionals(onlyHeaders: boolean = false): Promise<{ _id: string; name: string }> {
      const response = await fetch(this.baseURL + 'professionals/' + (onlyHeaders ? '?headers=true' : ''), { method: 'GET' })

      return await response.json()
    },

    async getProfessionalData(professionalID: string | string[]) {
      const response = await fetch(this.baseURL + 'professionals/' + professionalID, { method: 'GET' })
      return await response.json()
    },

    async getAvailability(professionalID: string, serviceID: string | string[]) {
      const response = await fetch(this.baseURL + 'professionals/' + professionalID + '/services/' + serviceID + '/availability', { method: 'GET' })
      const res = await response.json()
      console.log(res)

      return res
    }
  }
}
