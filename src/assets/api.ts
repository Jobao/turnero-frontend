import { fakeDataProfesional } from './fakeData'

export const API = {
  local: {
    getProfesional(profesionalID: number) {
      let returnedProfesional = fakeDataProfesional.find((profesional) => {
        return profesional.professionalID === profesionalID
      })
      if (returnedProfesional) {
        if (!returnedProfesional.services) {
          returnedProfesional.services = []
        }
      }

      return returnedProfesional
    }
  },
  laravel: {}
}
