export const populationData = {
    totalPopulation: 29389150,
    genderDistribution: {
      male: 15344990,
      female: 14044160
    },
    populationGrowth: [
      { year: 1975, population: 6709600 },
      { year: 1988, population: 10815694 },
      { year: 1998, population: 15366672 },
      { year: 2021, population: 29389150 }
    ],
    ageDistribution: [
      { group: '0-14 ans', percentage: 38.2 },
      { group: '15-64 ans', percentage: 59.2 },
      { group: '65+ ans', percentage: 2.6 }
    ],
    urbanization: {
      urban: 52.5,
      rural: 47.5
    },
    majorCities: [
      { name: 'Abidjan', population: 5616633, coordinates: [5.3600, -4.0083] },
      { name: 'Bouaké', population: 832371, coordinates: [7.6906, -5.0303] },
      { name: 'Korhogo', population: 440926, coordinates: [9.4578, -5.6297] },
      { name: 'Daloa', population: 421879, coordinates: [6.8898, -6.4504] },
      { name: 'San-Pédro', population: 390654, coordinates: [4.7485, -6.6363] }
    ],
    foreignPopulation: {
      total: 6460062,
      breakdown: [
        { country: 'Burkina Faso', population: 4056444 },
        { country: 'Mali', population: 1108628 },
        { country: 'Autres CEDEAO', population: 1171488 },
        { country: 'Hors CEDEAO', population: 123502 }
      ]
    },
    literacy: {
      overall: 51.1,
      rural: 67.8
    },
    religions: [
      { name: 'Musulmane', percentage: 42.5 },
      { name: 'Chrétienne', percentage: 39.6 },
      { name: 'Animiste', percentage: 2.1 },
      { name: 'Sans religion', percentage: 12.5 },
      { name: 'Autres', percentage: 3.3 }
    ]
  };