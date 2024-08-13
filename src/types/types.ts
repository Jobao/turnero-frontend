export type ProfesionalType = {
  professionalID: number
  name: string
  description: string
  imageURL: string
  mapURL: string
  phone: string
  services: ServiceType[]
}

export type ServiceType = {
  serviceID: number
  title: string
  description: string
  shifts: ShiftType[]
}

export type ShiftType = {
  date: string
  shedule: string[]
}
