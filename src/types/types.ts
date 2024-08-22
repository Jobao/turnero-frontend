export type ProfesionalType = {
  professionalID: number
  name: string
  description: string
  imageURL: string
  mapURL: string
  phone: string
  depositInfo?: DepositInfoType
  services: ServiceType[]
}

export type ServiceType = {
  serviceID: number
  title: string
  description: string
  depositAmount: string
  availability: AppointmentType[]
}

export type AppointmentType = {
  date: string
  shedule: string[]
}

export type DepositInfoType = {
  CBU: string
  alias: string
  currency: string
}

export type UserDataType = {
  name: string
  lastName: string
  phone: string
}
