export const fakeDataProfesional = {
  idProfesional: 0,
  servicios: [
    { idServicio: 0, titulo: 'Pedicuria', descripcion: 'Cuidado de los pies' },
    { idServicio: 1, titulo: 'Manicura', descripcion: '' }
  ]
}

export const fakeDataTurnos = [
  {
    idServicio: 0,
    turnos: [
      { fecha: '22/10/2024', turnos: ['09:00', '09:30', '10:00'] },
      { fecha: '23/10/2024', turnos: ['09:00', '09:30', '10:00'] },
      { fecha: '22/10/2024', turnos: ['09:00', '10:00', '11:00'] }
    ]
  },
  {
    idServicio: 1,
    turnos: []
  }
]
