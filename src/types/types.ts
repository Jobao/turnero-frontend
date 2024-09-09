export type ProfesionalType = {
  _id: string
  name: string
  description: string
  imageURL: string
  mapURL: string
  phone: string
  depositInfo?: DepositInfoType
  services: ServiceType[]
}

export type ServiceType = {
  _id: string
  title: string
  description: string
  depositAmount: string
  availability: AppointmentType[]
}

export type AppointmentType = {
  day: string
  time: string[]
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
