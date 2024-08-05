import type { ProfesionalType } from '@/types/types'

export const fakeDataProfesional: ProfesionalType[] = [
  {
    profesionalID: 0,
    nombre: 'Rogelio BuenDia',
    descripcion: 'Estetica',
    imageURL: 'https://randomuser.me/api/portraits/men/21.jpg',
    mapURL: 'https://www.google.com/maps/place/Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.022528,-57.6002758,11.5z/data=!4m6!3m5!1s0x9584d94d19d34209:0xdd9670804bfed126!8m2!3d-38.0054771!4d-57.5426106!16zL20vMDFwc3Y1?entry=ttu',
    telefono: '542236703240',
    servicios: [
      {
        servicioID: 0,
        titulo: 'Pedicuria',
        descripcion: 'Cuidado de los pies',
        turnos: [
          { fecha: '22/10/2024', turnos: ['09:00', '09:30', '10:00'] },
          { fecha: '23/10/2024', turnos: ['09:00', '09:30', '10:00'] },
          { fecha: '22/10/2024', turnos: ['09:00', '10:00', '11:00'] }
        ]
      },
      { servicioID: 1, titulo: 'Manicura', descripcion: '', turnos: [] }
    ]
  },
  {
    profesionalID: 1,
    nombre: 'Pepe Argento',
    descripcion: 'Zapatero',
    imageURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    mapURL: '',
    telefono: '',
    servicios: []
  }
]
