export type ProfesionalType = {
  profesionalID: number
  nombre: string
  descripcion: string
  imageURL: string
  mapURL: string
  telefono: string
  servicios: ServicioType[]
}

export type ServicioType = {
  servicioID: number
  titulo: string
  descripcion: string
  turnos: TurnoType[]
}

export type TurnoType = {
  fecha: string
  turnos: string[]
}
