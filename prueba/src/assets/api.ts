import { fakeDataProfesional } from './fakeData'

export const API = {
  local: {
    getProfesional(profesionalID: number) {
      return fakeDataProfesional.find((profesional) => {
        return profesional.profesionalID === profesionalID
      })
    }
  },
  laravel: {}
}
