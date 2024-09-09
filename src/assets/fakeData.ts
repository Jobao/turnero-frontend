import type { ProfesionalType } from '@/types/types'

export const fakeDataProfesional: ProfesionalType[] = [
  {
    _id: 0,
    name: 'Rogelio BuenDia',
    description: 'Estetica',
    imageURL: 'https://randomuser.me/api/portraits/men/21.jpg',
    mapURL: 'https://www.google.com/maps/place/Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.022528,-57.6002758,11.5z/data=!4m6!3m5!1s0x9584d94d19d34209:0xdd9670804bfed126!8m2!3d-38.0054771!4d-57.5426106!16zL20vMDFwc3Y1?entry=ttu',
    phone: '542236703240',
    services: [
      {
        _id: 0,
        title: 'Pedicuria',
        description: 'Cuidado de los pies',
        availability: [
          { day: '10/08/2024', time: ['09:00', '09:30', '10:00'] },
          { day: '15/08/2024', time: ['09:00', '09:30', '10:00'] },
          { day: '29/10/2024', time: ['18:00', '19:00', '20:00'] }
        ],
        depositAmount: '6000'
      },
      {
        _id: 1,
        title: 'Manicura',
        description: '',
        availability: [],
        depositAmount: ''
      }
    ],
    depositInfo: {
      CBU: '000000000000000000000001',
      alias: 'turno.turnero.manaos',
      currency: '$'
    }
  },
  {
    _id: 1,
    name: 'Pepe Argento',
    description: 'Zapatero',
    imageURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    mapURL: '',
    phone: '',
    services: [],
    depositInfo: {
      CBU: '',
      alias: '',
      currency: ''
    }
  }
]

export let fakeDataAdmin = {
  professionalID: 0,
  imageURL: 'https://randomuser.me/api/portraits/men/21.jpg',
  name: 'Rogelio BuenDia',
  email: 'Rogelio@good.day'
}
