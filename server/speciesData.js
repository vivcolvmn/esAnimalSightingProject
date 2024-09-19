const speciesData = [
  {
    id: 1,
    commonName: "Vaquita",
    scientificName: "Phocoena sinus",
    estimatedPopulation: 10,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 101,
        nickname: "Tiny Tim",
        species: "Vaquita",
        createdAt: "2024-09-10T08:00:00Z",
        sightings: [
          {
            id: 1001,
            dateTime: "2024-09-09T14:30:00Z",
            individualSeen: "Tiny Tim",
            location: "Gulf of California",
            healthy: true,
            email: "researcher@example.com",
            createdAt: "2024-09-09T16:00:00Z"
          },
          {
            id: 1002,
            dateTime: "2024-08-20T10:15:00Z",
            individualSeen: "Tiny Tim",
            location: "La Paz Bay",
            healthy: false,
            email: "marine.biologist@example.com",
            createdAt: "2024-08-20T12:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    commonName: "Northern White Rhinoceros",
    scientificName: "Ceratotherium simum cottoni",
    estimatedPopulation: 2,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 102,
        nickname: "Majestic Molly",
        species: "Northern White Rhinoceros",
        createdAt: "2024-09-08T09:00:00Z",
        sightings: [
          {
            id: 1003,
            dateTime: "2024-09-05T08:00:00Z",
            individualSeen: "Majestic Molly",
            location: "Ol Pejeta Conservancy",
            healthy: true,
            email: "rhino.caretaker@example.com",
            createdAt: "2024-09-05T10:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    commonName: "Javan Rhinoceros",
    scientificName: "Rhinoceros sondaicus",
    estimatedPopulation: 70,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 103,
        nickname: "Jungle Jewel",
        species: "Javan Rhinoceros",
        createdAt: "2024-08-28T11:00:00Z",
        sightings: [
          {
            id: 1004,
            dateTime: "2024-08-25T06:30:00Z",
            individualSeen: "Jungle Jewel",
            location: "Ujung Kulon National Park",
            healthy: true,
            email: "park.ranger@example.com",
            createdAt: "2024-08-25T08:30:00Z"
          },
          {
            id: 1005,
            dateTime: "2024-09-10T12:00:00Z",
            individualSeen: "Jungle Jewel",
            location: "Southeast of Mount Krakatoa",
            healthy: true,
            email: "conservationist@example.com",
            createdAt: "2024-09-10T13:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    commonName: "Sumatran Rhinoceros",
    scientificName: "Dicerorhinus sumatrensis",
    estimatedPopulation: 80,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 104,
        nickname: "Forest Guardian",
        species: "Sumatran Rhinoceros",
        createdAt: "2024-08-22T07:00:00Z",
        sightings: [
          {
            id: 1006,
            dateTime: "2024-08-18T09:45:00Z",
            individualSeen: "Forest Guardian",
            location: "Way Kambas National Park",
            healthy: true,
            email: "wildlife.monitor@example.com",
            createdAt: "2024-08-18T11:45:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    commonName: "Amur Leopard",
    scientificName: "Panthera pardus orientalis",
    estimatedPopulation: 100,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 105,
        nickname: "Silent Shadow",
        species: "Amur Leopard",
        createdAt: "2024-07-15T15:00:00Z",
        sightings: [
          {
            id: 1007,
            dateTime: "2024-07-10T19:00:00Z",
            individualSeen: "Silent Shadow",
            location: "Primorye Province",
            healthy: true,
            email: "bigcat.observer@example.com",
            createdAt: "2024-07-10T20:00:00Z"
          },
          {
            id: 1008,
            dateTime: "2024-08-05T18:30:00Z",
            individualSeen: "Silent Shadow",
            location: "Land of the Leopard National Park",
            healthy: false,
            email: "wildlife.vet@example.com",
            createdAt: "2024-08-05T19:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    commonName: "Hawksbill Turtle",
    scientificName: "Eretmochelys imbricata",
    estimatedPopulation: 15000,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 106,
        nickname: "Shellie",
        species: "Hawksbill Turtle",
        createdAt: "2024-06-01T05:30:00Z",
        sightings: [
          {
            id: 1009,
            dateTime: "2024-05-20T12:15:00Z",
            individualSeen: "Shellie",
            location: "Great Barrier Reef",
            healthy: true,
            email: "marine.biology@example.com",
            createdAt: "2024-05-20T13:15:00Z"
          },
          {
            id: 1010,
            dateTime: "2024-06-18T11:00:00Z",
            individualSeen: "Shellie",
            location: "Caribbean Sea",
            healthy: true,
            email: "sea.turtle.sightings@example.com",
            createdAt: "2024-06-18T12:00:00Z"
          },
          {
            id: 1011,
            dateTime: "2024-07-25T14:45:00Z",
            individualSeen: "Shellie",
            location: "Maldives",
            healthy: true,
            email: "oceanic.researcher@example.com",
            createdAt: "2024-07-25T15:45:00Z"
          }
        ]
      },
      {
        id: 107,
        nickname: "Coral",
        species: "Hawksbill Turtle",
        createdAt: "2024-06-02T06:00:00Z",
        sightings: [
          {
            id: 1012,
            dateTime: "2024-05-22T14:30:00Z",
            individualSeen: "Coral",
            location: "Bahamas",
            healthy: false,
            email: "reef.surveillance@example.com",
            createdAt: "2024-05-22T15:30:00Z"
          }
        ]
      },
      {
        id: 108,
        nickname: "Ocean Beauty",
        species: "Hawksbill Turtle",
        createdAt: "2024-07-03T08:30:00Z",
        sightings: [
          {
            id: 1013,
            dateTime: "2024-07-01T09:00:00Z",
            individualSeen: "Ocean Beauty",
            location: "Red Sea",
            healthy: true,
            email: "marine.conservation@example.com",
            createdAt: "2024-07-01T10:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 7,
    commonName: "Yangtze Giant Softshell Turtle",
    scientificName: "Rafetus swinhoei",
    estimatedPopulation: 3,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 109,
        nickname: "Mighty Shell",
        species: "Yangtze Giant Softshell Turtle",
        createdAt: "2024-09-01T10:00:00Z",
        sightings: [
          {
            id: 1014,
            dateTime: "2024-08-30T09:30:00Z",
            individualSeen: "Mighty Shell",
            location: "Suzhou Zoo",
            healthy: false,
            email: "turtle.caretaker@example.com",
            createdAt: "2024-08-30T11:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 8,
    commonName: "Mountain Gorilla",
    scientificName: "Gorilla beringei beringei",
    estimatedPopulation: 1000,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 110,
        nickname: "King Kong",
        species: "Mountain Gorilla",
        createdAt: "2024-07-25T10:00:00Z",
        sightings: [
          {
            id: 1015,
            dateTime: "2024-07-22T06:30:00Z",
            individualSeen: "King Kong",
            location: "Bwindi Impenetrable Forest",
            healthy: true,
            email: "gorilla.tracker@example.com",
            createdAt: "2024-07-22T07:30:00Z"
          },
          {
            id: 1016,
            dateTime: "2024-08-12T08:00:00Z",
            individualSeen: "King Kong",
            location: "Volcanoes National Park",
            healthy: true,
            email: "wildlife.observer@example.com",
            createdAt: "2024-08-12T09:00:00Z"
          }
        ]
      },
      {
        id: 111,
        nickname: "Silverback",
        species: "Mountain Gorilla",
        createdAt: "2024-06-18T15:00:00Z",
        sightings: [
          {
            id: 1017,
            dateTime: "2024-06-15T14:30:00Z",
            individualSeen: "Silverback",
            location: "Virunga Mountains",
            healthy: true,
            email: "conservationist@example.com",
            createdAt: "2024-06-15T16:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 9,
    commonName: "South China Tiger",
    scientificName: "Panthera tigris amoyensis",
    estimatedPopulation: 20,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 112,
        nickname: "Golden Stripe",
        species: "South China Tiger",
        createdAt: "2024-08-10T08:30:00Z",
        sightings: [
          {
            id: 1018,
            dateTime: "2024-08-05T17:00:00Z",
            individualSeen: "Golden Stripe",
            location: "Guangzhou Zoo",
            healthy: true,
            email: "tiger.researcher@example.com",
            createdAt: "2024-08-05T18:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 10,
    commonName: "Kakapo",
    scientificName: "Strigops habroptilus",
    estimatedPopulation: 250,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 113,
        nickname: "Night Owl",
        species: "Kakapo",
        createdAt: "2024-07-20T07:00:00Z",
        sightings: [
          {
            id: 1019,
            dateTime: "2024-07-18T22:30:00Z",
            individualSeen: "Night Owl",
            location: "Codfish Island",
            healthy: true,
            email: "birdwatcher@example.com",
            createdAt: "2024-07-19T01:00:00Z"
          },
          {
            id: 1020,
            dateTime: "2024-08-25T23:45:00Z",
            individualSeen: "Night Owl",
            location: "Anchor Island",
            healthy: true,
            email: "avian.scientist@example.com",
            createdAt: "2024-08-26T02:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 11,
    commonName: "Philippine Eagle",
    scientificName: "Pithecophaga jefferyi",
    estimatedPopulation: 400,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 114,
        nickname: "Sky King",
        species: "Philippine Eagle",
        createdAt: "2024-05-05T08:00:00Z",
        sightings: [
          {
            id: 1021,
            dateTime: "2024-05-01T10:00:00Z",
            individualSeen: "Sky King",
            location: "Mount Apo",
            healthy: true,
            email: "eagle.monitor@example.com",
            createdAt: "2024-05-01T12:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 12,
    commonName: "Cross River Gorilla",
    scientificName: "Gorilla gorilla diehli",
    estimatedPopulation: 300,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 115,
        nickname: "Mighty Mountain",
        species: "Cross River Gorilla",
        createdAt: "2024-08-01T10:30:00Z",
        sightings: [
          {
            id: 1022,
            dateTime: "2024-07-30T09:15:00Z",
            individualSeen: "Mighty Mountain",
            location: "Afi Mountain",
            healthy: true,
            email: "gorilla.conservancy@example.com",
            createdAt: "2024-07-30T11:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 13,
    commonName: "Saola",
    scientificName: "Pseudoryx nghetinhensis",
    estimatedPopulation: 100,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 116,
        nickname: "Forest Phantom",
        species: "Saola",
        createdAt: "2024-07-15T10:00:00Z",
        sightings: [
          {
            id: 1023,
            dateTime: "2024-07-10T07:30:00Z",
            individualSeen: "Forest Phantom",
            location: "Annamite Range",
            healthy: true,
            email: "forest.watcher@example.com",
            createdAt: "2024-07-10T09:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 14,
    commonName: "California Condor",
    scientificName: "Gymnogyps californianus",
    estimatedPopulation: 500,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 117,
        nickname: "Sky Giant",
        species: "California Condor",
        createdAt: "2024-06-20T10:00:00Z",
        sightings: [
          {
            id: 1024,
            dateTime: "2024-06-18T09:00:00Z",
            individualSeen: "Sky Giant",
            location: "Grand Canyon",
            healthy: true,
            email: "raptor.ranger@example.com",
            createdAt: "2024-06-18T10:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 15,
    commonName: "Sunda Tiger",
    scientificName: "Panthera tigris sondaica",
    estimatedPopulation: 600,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 118,
        nickname: "Jungle King",
        species: "Sunda Tiger",
        createdAt: "2024-05-15T12:00:00Z",
        sightings: [
          {
            id: 1025,
            dateTime: "2024-05-10T14:30:00Z",
            individualSeen: "Jungle King",
            location: "Sumatra",
            healthy: true,
            email: "tiger.observer@example.com",
            createdAt: "2024-05-10T16:30:00Z"
          },
          {
            id: 1026,
            dateTime: "2024-06-20T09:45:00Z",
            individualSeen: "Jungle King",
            location: "Gunung Leuser National Park",
            healthy: true,
            email: "conservationist@example.com",
            createdAt: "2024-06-20T10:45:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 16,
    commonName: "Leatherback Sea Turtle",
    scientificName: "Dermochelys coriacea",
    estimatedPopulation: 34000,
    conservationStatus: "VU",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 119,
        nickname: "Leatherback Larry",
        species: "Leatherback Sea Turtle",
        createdAt: "2024-04-12T08:00:00Z",
        sightings: [
          {
            id: 1027,
            dateTime: "2024-04-10T15:00:00Z",
            individualSeen: "Leatherback Larry",
            location: "Costa Rican Coast",
            healthy: true,
            email: "turtle.researcher@example.com",
            createdAt: "2024-04-10T16:00:00Z"
          },
          {
            id: 1028,
            dateTime: "2024-06-15T10:30:00Z",
            individualSeen: "Leatherback Larry",
            location: "Cape Cod Bay",
            healthy: true,
            email: "marine.biology@example.com",
            createdAt: "2024-06-15T11:30:00Z"
          }
        ]
      },
      {
        id: 120,
        nickname: "Shelly",
        species: "Leatherback Sea Turtle",
        createdAt: "2024-05-20T09:00:00Z",
        sightings: [
          {
            id: 1029,
            dateTime: "2024-05-18T12:00:00Z",
            individualSeen: "Shelly",
            location: "Indian Ocean",
            healthy: false,
            email: "sea.turtle.observer@example.com",
            createdAt: "2024-05-18T13:00:00Z"
          }
        ]
      },
      {
        id: 121,
        nickname: "Wave Rider",
        species: "Leatherback Sea Turtle",
        createdAt: "2024-06-30T14:00:00Z",
        sightings: [
          {
            id: 1030,
            dateTime: "2024-06-28T18:00:00Z",
            individualSeen: "Wave Rider",
            location: "Pacific Ocean",
            healthy: true,
            email: "oceanic.research@example.com",
            createdAt: "2024-06-28T19:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 17,
    commonName: "Sumatran Elephant",
    scientificName: "Elephas maximus sumatranus",
    estimatedPopulation: 2400,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 122,
        nickname: "Gentle Giant",
        species: "Sumatran Elephant",
        createdAt: "2024-03-25T07:00:00Z",
        sightings: [
          {
            id: 1031,
            dateTime: "2024-03-20T10:00:00Z",
            individualSeen: "Gentle Giant",
            location: "Gunung Leuser National Park",
            healthy: true,
            email: "elephant.watcher@example.com",
            createdAt: "2024-03-20T11:00:00Z"
          }
        ]
      },
      {
        id: 123,
        nickname: "Trunky",
        species: "Sumatran Elephant",
        createdAt: "2024-04-05T10:30:00Z",
        sightings: [
          {
            id: 1032,
            dateTime: "2024-04-01T12:45:00Z",
            individualSeen: "Trunky",
            location: "Way Kambas National Park",
            healthy: true,
            email: "forest.observer@example.com",
            createdAt: "2024-04-01T13:45:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 18,
    commonName: "Western Lowland Gorilla",
    scientificName: "Gorilla gorilla gorilla",
    estimatedPopulation: 100000,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 124,
        nickname: "Big Joe",
        species: "Western Lowland Gorilla",
        createdAt: "2024-02-15T09:00:00Z",
        sightings: [
          {
            id: 1033,
            dateTime: "2024-02-10T07:30:00Z",
            individualSeen: "Big Joe",
            location: "Congo Basin",
            healthy: true,
            email: "gorilla.tracker@example.com",
            createdAt: "2024-02-10T09:00:00Z"
          }
        ]
      },
      {
        id: 125,
        nickname: "Silver",
        species: "Western Lowland Gorilla",
        createdAt: "2024-03-10T11:00:00Z",
        sightings: [
          {
            id: 1034,
            dateTime: "2024-03-05T13:00:00Z",
            individualSeen: "Silver",
            location: "Dzanga-Sangha Reserve",
            healthy: true,
            email: "wildlife.monitor@example.com",
            createdAt: "2024-03-05T14:00:00Z"
          }
        ]
      },
      {
        id: 126,
        nickname: "Banana Lover",
        species: "Western Lowland Gorilla",
        createdAt: "2024-04-01T14:00:00Z",
        sightings: [
          {
            id: 1035,
            dateTime: "2024-03-28T15:30:00Z",
            individualSeen: "Banana Lover",
            location: "Nouabale-Ndoki National Park",
            healthy: true,
            email: "forest.guard@example.com",
            createdAt: "2024-03-28T16:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 19,
    commonName: "Black Rhino",
    scientificName: "Diceros bicornis",
    estimatedPopulation: 5600,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 127,
        nickname: "Horn King",
        species: "Black Rhino",
        createdAt: "2024-01-10T10:00:00Z",
        sightings: [
          {
            id: 1036,
            dateTime: "2024-01-05T09:30:00Z",
            individualSeen: "Horn King",
            location: "Etosha National Park",
            healthy: true,
            email: "rhino.researcher@example.com",
            createdAt: "2024-01-05T11:30:00Z"
          }
        ]
      },
      {
        id: 128,
        nickname: "Stomper",
        species: "Black Rhino",
        createdAt: "2024-02-05T12:30:00Z",
        sightings: [
          {
            id: 1037,
            dateTime: "2024-01-28T14:15:00Z",
            individualSeen: "Stomper",
            location: "Serengeti",
            healthy: true,
            email: "safari.tracker@example.com",
            createdAt: "2024-01-28T15:15:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 20,
    commonName: "Hainan Gibbon",
    scientificName: "Nomascus hainanus",
    estimatedPopulation: 30,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 129,
        nickname: "Tree Dancer",
        species: "Hainan Gibbon",
        createdAt: "2024-03-01T08:30:00Z",
        sightings: [
          {
            id: 1038,
            dateTime: "2024-02-20T07:45:00Z",
            individualSeen: "Tree Dancer",
            location: "Bawangling National Nature Reserve",
            healthy: true,
            email: "primate.research@example.com",
            createdAt: "2024-02-20T09:45:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 21,
    commonName: "Sumatran Orangutan",
    scientificName: "Pongo abelii",
    estimatedPopulation: 15000,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 130,
        nickname: "Orangy",
        species: "Sumatran Orangutan",
        createdAt: "2024-02-15T09:30:00Z",
        sightings: [
          {
            id: 1039,
            dateTime: "2024-02-10T10:15:00Z",
            individualSeen: "Orangy",
            location: "Gunung Leuser National Park",
            healthy: true,
            email: "orangutan.research@example.com",
            createdAt: "2024-02-10T11:15:00Z"
          },
          {
            id: 1040,
            dateTime: "2024-03-05T14:00:00Z",
            individualSeen: "Orangy",
            location: "Bukit Lawang",
            healthy: true,
            email: "primate.guardian@example.com",
            createdAt: "2024-03-05T15:00:00Z"
          }
        ]
      },
      {
        id: 131,
        nickname: "Swinger",
        species: "Sumatran Orangutan",
        createdAt: "2024-03-12T07:45:00Z",
        sightings: [
          {
            id: 1041,
            dateTime: "2024-03-01T09:00:00Z",
            individualSeen: "Swinger",
            location: "North Sumatra",
            healthy: true,
            email: "wildlife.protector@example.com",
            createdAt: "2024-03-01T10:00:00Z"
          }
        ]
      },
      {
        id: 132,
        nickname: "Red Giant",
        species: "Sumatran Orangutan",
        createdAt: "2024-04-20T08:30:00Z",
        sightings: [
          {
            id: 1042,
            dateTime: "2024-04-18T12:45:00Z",
            individualSeen: "Red Giant",
            location: "Batang Toru",
            healthy: false,
            email: "conservationist@example.com",
            createdAt: "2024-04-18T13:45:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 22,
    commonName: "Addax",
    scientificName: "Addax nasomaculatus",
    estimatedPopulation: 90,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 133,
        nickname: "Desert Wanderer",
        species: "Addax",
        createdAt: "2024-01-10T11:00:00Z",
        sightings: [
          {
            id: 1043,
            dateTime: "2024-01-05T14:15:00Z",
            individualSeen: "Desert Wanderer",
            location: "Sahara Desert",
            healthy: true,
            email: "desert.observer@example.com",
            createdAt: "2024-01-05T15:15:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 23,
    commonName: "Forest Elephant",
    scientificName: "Loxodonta cyclotis",
    estimatedPopulation: 50000,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 134,
        nickname: "Tusker",
        species: "Forest Elephant",
        createdAt: "2024-03-20T09:30:00Z",
        sightings: [
          {
            id: 1044,
            dateTime: "2024-03-18T11:00:00Z",
            individualSeen: "Tusker",
            location: "Congo Basin",
            healthy: true,
            email: "elephant.tracker@example.com",
            createdAt: "2024-03-18T12:00:00Z"
          }
        ]
      },
      {
        id: 135,
        nickname: "Gentle Giant",
        species: "Forest Elephant",
        createdAt: "2024-04-05T10:30:00Z",
        sightings: [
          {
            id: 1045,
            dateTime: "2024-04-01T13:00:00Z",
            individualSeen: "Gentle Giant",
            location: "Gabon Rainforest",
            healthy: true,
            email: "jungle.guardian@example.com",
            createdAt: "2024-04-01T14:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 24,
    commonName: "Bornean Orangutan",
    scientificName: "Pongo pygmaeus",
    estimatedPopulation: 104000,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 136,
        nickname: "Forest King",
        species: "Bornean Orangutan",
        createdAt: "2024-02-18T07:30:00Z",
        sightings: [
          {
            id: 1046,
            dateTime: "2024-02-15T09:45:00Z",
            individualSeen: "Forest King",
            location: "Sabah",
            healthy: true,
            email: "forest.watcher@example.com",
            createdAt: "2024-02-15T11:00:00Z"
          }
        ]
      },
      {
        id: 137,
        nickname: "Swinging Joe",
        species: "Bornean Orangutan",
        createdAt: "2024-03-22T09:00:00Z",
        sightings: [
          {
            id: 1047,
            dateTime: "2024-03-18T11:30:00Z",
            individualSeen: "Swinging Joe",
            location: "Tanjung Puting National Park",
            healthy: true,
            email: "wildlife.ranger@example.com",
            createdAt: "2024-03-18T12:30:00Z"
          }
        ]
      },
      {
        id: 138,
        nickname: "Red Fury",
        species: "Bornean Orangutan",
        createdAt: "2024-04-28T10:15:00Z",
        sightings: [
          {
            id: 1048,
            dateTime: "2024-04-25T13:45:00Z",
            individualSeen: "Red Fury",
            location: "Kalimantan",
            healthy: true,
            email: "jungle.explorer@example.com",
            createdAt: "2024-04-25T14:45:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 25,
    commonName: "Siamese Crocodile",
    scientificName: "Crocodylus siamensis",
    estimatedPopulation: 250,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 139,
        nickname: "River King",
        species: "Siamese Crocodile",
        createdAt: "2024-05-05T10:00:00Z",
        sightings: [
          {
            id: 1049,
            dateTime: "2024-04-28T14:30:00Z",
            individualSeen: "River King",
            location: "Mekong River",
            healthy: true,
            email: "crocodile.observer@example.com",
            createdAt: "2024-04-28T15:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 26,
    commonName: "Ethiopian Wolf",
    scientificName: "Canis simensis",
    estimatedPopulation: 500,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 140,
        nickname: "Red Hunter",
        species: "Ethiopian Wolf",
        createdAt: "2024-06-01T10:30:00Z",
        sightings: [
          {
            id: 1050,
            dateTime: "2024-05-20T07:45:00Z",
            individualSeen: "Red Hunter",
            location: "Bale Mountains",
            healthy: true,
            email: "wolf.tracker@example.com",
            createdAt: "2024-05-20T09:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 27,
    commonName: "White-rumped Vulture",
    scientificName: "Gyps bengalensis",
    estimatedPopulation: 6000,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 141,
        nickname: "Sky Watcher",
        species: "White-rumped Vulture",
        createdAt: "2024-03-12T11:00:00Z",
        sightings: [
          {
            id: 1051,
            dateTime: "2024-03-08T10:30:00Z",
            individualSeen: "Sky Watcher",
            location: "Terai Arc Landscape",
            healthy: true,
            email: "birdwatcher@example.com",
            createdAt: "2024-03-08T11:30:00Z"
          }
        ]
      },
      {
        id: 142,
        nickname: "Winged Guardian",
        species: "White-rumped Vulture",
        createdAt: "2024-04-20T09:00:00Z",
        sightings: [
          {
            id: 1052,
            dateTime: "2024-04-15T12:00:00Z",
            individualSeen: "Winged Guardian",
            location: "Kaziranga National Park",
            healthy: true,
            email: "avian.scientist@example.com",
            createdAt: "2024-04-15T13:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 28,
    commonName: "Northern Bald Ibis",
    scientificName: "Geronticus eremita",
    estimatedPopulation: 700,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 143,
        nickname: "Desert Flyer",
        species: "Northern Bald Ibis",
        createdAt: "2024-02-18T10:00:00Z",
        sightings: [
          {
            id: 1053,
            dateTime: "2024-02-10T08:30:00Z",
            individualSeen: "Desert Flyer",
            location: "Syrian Desert",
            healthy: true,
            email: "avian.research@example.com",
            createdAt: "2024-02-10T09:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 29,
    commonName: "Hispaniolan Solenodon",
    scientificName: "Solenodon paradoxus",
    estimatedPopulation: 200,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 144,
        nickname: "Island Crawler",
        species: "Hispaniolan Solenodon",
        createdAt: "2024-01-30T07:30:00Z",
        sightings: [
          {
            id: 1054,
            dateTime: "2024-01-28T09:00:00Z",
            individualSeen: "Island Crawler",
            location: "Hispaniola",
            healthy: true,
            email: "island.biologist@example.com",
            createdAt: "2024-01-28T10:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 30,
    commonName: "Hawaiian Monk Seal",
    scientificName: "Neomonachus schauinslandi",
    estimatedPopulation: 1400,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 145,
        nickname: "Sunny",
        species: "Hawaiian Monk Seal",
        createdAt: "2024-04-01T08:30:00Z",
        sightings: [
          {
            id: 1055,
            dateTime: "2024-03-28T07:00:00Z",
            individualSeen: "Sunny",
            location: "Hawaiian Islands",
            healthy: true,
            email: "marine.research@example.com",
            createdAt: "2024-03-28T08:00:00Z"
          }
        ]
      },
      {
        id: 146,
        nickname: "Waves",
        species: "Hawaiian Monk Seal",
        createdAt: "2024-05-20T09:30:00Z",
        sightings: [
          {
            id: 1056,
            dateTime: "2024-05-15T12:15:00Z",
            individualSeen: "Waves",
            location: "Kauai",
            healthy: true,
            email: "oceanic.observer@example.com",
            createdAt: "2024-05-15T13:15:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 31,
    commonName: "Green-eyed Frog",
    scientificName: "Litoria aurea",
    estimatedPopulation: 1000,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 147,
        nickname: "Hopper",
        species: "Green-eyed Frog",
        createdAt: "2024-05-10T07:00:00Z",
        sightings: [
          {
            id: 1057,
            dateTime: "2024-05-05T08:30:00Z",
            individualSeen: "Hopper",
            location: "Sydney Wetlands",
            healthy: true,
            email: "frog.researcher@example.com",
            createdAt: "2024-05-05T09:30:00Z"
          }
        ]
      },
      {
        id: 148,
        nickname: "Jumper",
        species: "Green-eyed Frog",
        createdAt: "2024-06-01T10:30:00Z",
        sightings: [
          {
            id: 1058,
            dateTime: "2024-05-28T14:15:00Z",
            individualSeen: "Jumper",
            location: "Northern Beaches",
            healthy: true,
            email: "wetland.biologist@example.com",
            createdAt: "2024-05-28T15:15:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 32,
    commonName: "Eastern Lowland Gorilla",
    scientificName: "Gorilla beringei graueri",
    estimatedPopulation: 5000,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 149,
        nickname: "Rocky",
        species: "Eastern Lowland Gorilla",
        createdAt: "2024-03-22T09:00:00Z",
        sightings: [
          {
            id: 1059,
            dateTime: "2024-03-15T10:30:00Z",
            individualSeen: "Rocky",
            location: "Kahuzi-Biega National Park",
            healthy: true,
            email: "gorilla.conservation@example.com",
            createdAt: "2024-03-15T11:30:00Z"
          }
        ]
      },
      {
        id: 150,
        nickname: "Boulder",
        species: "Eastern Lowland Gorilla",
        createdAt: "2024-04-15T11:30:00Z",
        sightings: [
          {
            id: 1060,
            dateTime: "2024-04-10T14:00:00Z",
            individualSeen: "Boulder",
            location: "Maiko National Park",
            healthy: true,
            email: "jungle.protector@example.com",
            createdAt: "2024-04-10T15:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 33,
    commonName: "Tarzan’s Chameleon",
    scientificName: "Calumma tarzan",
    estimatedPopulation: 250,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 151,
        nickname: "Shade",
        species: "Tarzan’s Chameleon",
        createdAt: "2024-02-25T10:30:00Z",
        sightings: [
          {
            id: 1061,
            dateTime: "2024-02-20T11:15:00Z",
            individualSeen: "Shade",
            location: "Madagascar Forest",
            healthy: true,
            email: "chameleon.research@example.com",
            createdAt: "2024-02-20T12:15:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 34,
    commonName: "Socorro Dove",
    scientificName: "Zenaida graysoni",
    estimatedPopulation: 200,
    conservationStatus: "EW",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 152,
        nickname: "Feather",
        species: "Socorro Dove",
        createdAt: "2024-01-15T08:00:00Z",
        sightings: [
          {
            id: 1062,
            dateTime: "2024-01-10T09:30:00Z",
            individualSeen: "Feather",
            location: "Socorro Island",
            healthy: true,
            email: "avian.sightings@example.com",
            createdAt: "2024-01-10T10:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 35,
    commonName: "Iberian Lynx",
    scientificName: "Lynx pardinus",
    estimatedPopulation: 700,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 153,
        nickname: "Swift",
        species: "Iberian Lynx",
        createdAt: "2024-02-28T07:30:00Z",
        sightings: [
          {
            id: 1063,
            dateTime: "2024-02-20T06:45:00Z",
            individualSeen: "Swift",
            location: "Doñana National Park",
            healthy: true,
            email: "lynx.watcher@example.com",
            createdAt: "2024-02-20T07:45:00Z"
          }
        ]
      },
      {
        id: 154,
        nickname: "Hunter",
        species: "Iberian Lynx",
        createdAt: "2024-03-10T09:00:00Z",
        sightings: [
          {
            id: 1064,
            dateTime: "2024-03-05T10:30:00Z",
            individualSeen: "Hunter",
            location: "Sierra de Andújar Natural Park",
            healthy: true,
            email: "wildlife.monitor@example.com",
            createdAt: "2024-03-05T11:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 36,
    commonName: "Peruvian Yellow-tailed Woolly Monkey",
    scientificName: "Oreonax flavicauda",
    estimatedPopulation: 250,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 155,
        nickname: "Fluffy",
        species: "Peruvian Yellow-tailed Woolly Monkey",
        createdAt: "2024-04-25T08:30:00Z",
        sightings: [
          {
            id: 1065,
            dateTime: "2024-04-20T07:45:00Z",
            individualSeen: "Fluffy",
            location: "Andes Mountains",
            healthy: true,
            email: "primate.tracker@example.com",
            createdAt: "2024-04-20T08:45:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 37,
    commonName: "Mangrove Finch",
    scientificName: "Camarhynchus heliobates",
    estimatedPopulation: 100,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 156,
        nickname: "Peep",
        species: "Mangrove Finch",
        createdAt: "2024-02-18T09:30:00Z",
        sightings: [
          {
            id: 1066,
            dateTime: "2024-02-15T08:00:00Z",
            individualSeen: "Peep",
            location: "Galápagos Islands",
            healthy: true,
            email: "bird.watcher@example.com",
            createdAt: "2024-02-15T09:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 38,
    commonName: "Geoffroy’s Spider Monkey",
    scientificName: "Ateles geoffroyi",
    estimatedPopulation: 500,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 157,
        nickname: "Swinger",
        species: "Geoffroy’s Spider Monkey",
        createdAt: "2024-03-15T08:00:00Z",
        sightings: [
          {
            id: 1067,
            dateTime: "2024-03-10T09:30:00Z",
            individualSeen: "Swinger",
            location: "Central American Rainforest",
            healthy: true,
            email: "monkey.observer@example.com",
            createdAt: "2024-03-10T10:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 39,
    commonName: "Père David's Deer",
    scientificName: "Elaphurus davidianus",
    estimatedPopulation: 2000,
    conservationStatus: "EW",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 158,
        nickname: "Majesty",
        species: "Père David's Deer",
        createdAt: "2024-04-05T09:00:00Z",
        sightings: [
          {
            id: 1068,
            dateTime: "2024-04-01T07:30:00Z",
            individualSeen: "Majesty",
            location: "Miyun Reservoir",
            healthy: true,
            email: "deer.tracker@example.com",
            createdAt: "2024-04-01T08:30:00Z"
          }
        ]
      },
      {
        id: 159,
        nickname: "Antler",
        species: "Père David's Deer",
        createdAt: "2024-04-12T10:30:00Z",
        sightings: [
          {
            id: 1069,
            dateTime: "2024-04-08T11:15:00Z",
            individualSeen: "Antler",
            location: "Beijing Wildlife Park",
            healthy: true,
            email: "wildlife.warden@example.com",
            createdAt: "2024-04-08T12:15:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 40,
    commonName: "Spoon-billed Sandpiper",
    scientificName: "Calidris pygmaea",
    estimatedPopulation: 600,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 160,
        nickname: "Spoonie",
        species: "Spoon-billed Sandpiper",
        createdAt: "2024-03-01T07:45:00Z",
        sightings: [
          {
            id: 1070,
            dateTime: "2024-02-25T06:30:00Z",
            individualSeen: "Spoonie",
            location: "Anadyr River Estuary",
            healthy: true,
            email: "bird.research@example.com",
            createdAt: "2024-02-25T07:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 41,
    commonName: "Vaquita Porpoise",
    scientificName: "Phocoena sinus",
    estimatedPopulation: 10,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 161,
        nickname: "Tiny",
        species: "Vaquita Porpoise",
        createdAt: "2024-02-18T09:30:00Z",
        sightings: [
          {
            id: 1071,
            dateTime: "2024-02-15T08:00:00Z",
            individualSeen: "Tiny",
            location: "Gulf of California",
            healthy: true,
            email: "marine.researcher@example.com",
            createdAt: "2024-02-15T09:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 42,
    commonName: "Yangtze Giant Softshell Turtle",
    scientificName: "Rafetus swinhoei",
    estimatedPopulation: 3,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 162,
        nickname: "Shelly",
        species: "Yangtze Giant Softshell Turtle",
        createdAt: "2024-04-10T10:00:00Z",
        sightings: [
          {
            id: 1072,
            dateTime: "2024-04-05T09:30:00Z",
            individualSeen: "Shelly",
            location: "Suzhou Zoo",
            healthy: false,
            email: "turtle.conservation@example.com",
            createdAt: "2024-04-05T10:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 43,
    commonName: "Javan Rhino",
    scientificName: "Rhinoceros sondaicus",
    estimatedPopulation: 75,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 163,
        nickname: "Horn",
        species: "Javan Rhino",
        createdAt: "2024-03-15T07:30:00Z",
        sightings: [
          {
            id: 1073,
            dateTime: "2024-03-10T08:45:00Z",
            individualSeen: "Horn",
            location: "Ujung Kulon National Park",
            healthy: true,
            email: "rhino.watcher@example.com",
            createdAt: "2024-03-10T09:45:00Z"
          }
        ]
      },
      {
        id: 164,
        nickname: "Juno",
        species: "Javan Rhino",
        createdAt: "2024-04-25T08:00:00Z",
        sightings: [
          {
            id: 1074,
            dateTime: "2024-04-20T07:30:00Z",
            individualSeen: "Juno",
            location: "Peucang Island",
            healthy: true,
            email: "national.park.ranger@example.com",
            createdAt: "2024-04-20T08:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 44,
    commonName: "Amur Leopard",
    scientificName: "Panthera pardus orientalis",
    estimatedPopulation: 100,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 165,
        nickname: "Spot",
        species: "Amur Leopard",
        createdAt: "2024-02-18T10:30:00Z",
        sightings: [
          {
            id: 1075,
            dateTime: "2024-02-10T08:30:00Z",
            individualSeen: "Spot",
            location: "Sikhote-Alin Biosphere Reserve",
            healthy: true,
            email: "leopard.tracker@example.com",
            createdAt: "2024-02-10T09:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 45,
    commonName: "Hawksbill Turtle",
    scientificName: "Eretmochelys imbricata",
    estimatedPopulation: 15000,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 166,
        nickname: "Coral",
        species: "Hawksbill Turtle",
        createdAt: "2024-01-30T09:00:00Z",
        sightings: [
          {
            id: 1076,
            dateTime: "2024-01-25T08:30:00Z",
            individualSeen: "Coral",
            location: "Great Barrier Reef",
            healthy: true,
            email: "marine.biology@example.com",
            createdAt: "2024-01-25T09:30:00Z"
          },
          {
            id: 1077,
            dateTime: "2024-02-20T10:30:00Z",
            individualSeen: "Coral",
            location: "Caribbean Sea",
            healthy: true,
            email: "oceanic.research@example.com",
            createdAt: "2024-02-20T11:30:00Z"
          }
        ]
      },
      {
        id: 167,
        nickname: "Wave",
        species: "Hawksbill Turtle",
        createdAt: "2024-03-05T09:30:00Z",
        sightings: [
          {
            id: 1078,
            dateTime: "2024-03-01T08:00:00Z",
            individualSeen: "Wave",
            location: "Maldives",
            healthy: true,
            email: "sea.life.observer@example.com",
            createdAt: "2024-03-01T09:00:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 46,
    commonName: "Gharial",
    scientificName: "Gavialis gangeticus",
    estimatedPopulation: 650,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 168,
        nickname: "Longjaw",
        species: "Gharial",
        createdAt: "2024-02-25T07:00:00Z",
        sightings: [
          {
            id: 1079,
            dateTime: "2024-02-20T06:30:00Z",
            individualSeen: "Longjaw",
            location: "Chambal River",
            healthy: true,
            email: "reptile.researcher@example.com",
            createdAt: "2024-02-20T07:30:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 47,
    commonName: "Blue Whale",
    scientificName: "Balaenoptera musculus",
    estimatedPopulation: 25000,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 169,
        nickname: "Big Blue",
        species: "Blue Whale",
        createdAt: "2024-04-18T08:30:00Z",
        sightings: [
          {
            id: 1080,
            dateTime: "2024-04-15T07:30:00Z",
            individualSeen: "Big Blue",
            location: "Southern Ocean",
            healthy: true,
            email: "marine.watcher@example.com",
            createdAt: "2024-04-15T08:30:00Z"
          }
        ]
      },
      {
        id: 170,
        nickname: "Wave Rider",
        species: "Blue Whale",
        createdAt: "2024-05-01T09:00:00Z",
        sightings: [
          {
            id: 1081,
            dateTime: "2024-04-28T08:45:00Z",
            individualSeen: "Wave Rider",
            location: "Indian Ocean",
            healthy: true,
            email: "oceanic.watcher@example.com",
            createdAt: "2024-04-28T09:45:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 48,
    commonName: "Asian Elephant",
    scientificName: "Elephas maximus",
    estimatedPopulation: 50000,
    conservationStatus: "EN",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 171,
        nickname: "Tusker",
        species: "Asian Elephant",
        createdAt: "2024-02-28T08:00:00Z",
        sightings: [
          {
            id: 1082,
            dateTime: "2024-02-20T07:30:00Z",
            individualSeen: "Tusker",
            location: "Kaziranga National Park",
            healthy: true,
            email: "elephant.watcher@example.com",
            createdAt: "2024-02-20T08:30:00Z"
          }
        ]
      },
      {
        id: 172,
        nickname: "Trunky",
        species: "Asian Elephant",
        createdAt: "2024-03-10T09:30:00Z",
        sightings: [
          {
            id: 1083,
            dateTime: "2024-03-05T08:15:00Z",
            individualSeen: "Trunky",
            location: "Yala National Park",
            healthy: true,
            email: "wildlife.observer@example.com",
            createdAt: "2024-03-05T09:15:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 49,
    commonName: "Sumatran Tiger",
    scientificName: "Panthera tigris sumatrae",
    estimatedPopulation: 400,
    conservationStatus: "CR",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 173,
        nickname: "Stripes",
        species: "Sumatran Tiger",
        createdAt: "2024-03-15T08:45:00Z",
        sightings: [
          {
            id: 1084,
            dateTime: "2024-03-10T07:30:00Z",
            individualSeen: "Stripes",
            location: "Gunung Leuser National Park",
            healthy: true,
            email: "tiger.watcher@example.com",
            createdAt: "2024-03-10T08:30:00Z"
          }
        ]
      },
      {
        id: 174,
        nickname: "Shadow",
        species: "Sumatran Tiger",
        createdAt: "2024-04-01T09:00:00Z",
        sightings: [
          {
            id: 1085,
            dateTime: "2024-03-28T08:45:00Z",
            individualSeen: "Shadow",
            location: "Bukit Barisan Selatan",
            healthy: true,
            email: "conservationist@example.com",
            createdAt: "2024-03-28T09:45:00Z"
          }
        ]
      }
    ]
  },
  {
    id: 50,
    commonName: "Scimitar-horned Oryx",
    scientificName: "Oryx dammah",
    estimatedPopulation: 3000,
    conservationStatus: "EW",
    createdAt: "2024-09-18T12:00:00Z",
    individuals: [
      {
        id: 175,
        nickname: "Desert Spirit",
        species: "Scimitar-horned Oryx",
        createdAt: "2024-06-10T10:00:00Z",
        sightings: [
          {
            id: 1086,
            dateTime: "2024-06-05T08:30:00Z",
            individualSeen: "Desert Spirit",
            location: "Chad Desert",
            healthy: true,
            email: "oryx.watcher@example.com",
            createdAt: "2024-06-05T10:00:00Z"
          }
        ]
      }
    ]
  }
];

export default speciesData;
