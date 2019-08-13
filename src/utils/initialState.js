const initialState = {
  scoutData: {
    Lakeland: {
      1: [],
      2: [],
      3: []
    },
    Kholusia: {
      1: [],
      2: [],
      3: []
    },
    'Amh Araeng': {
      1: [],
      2: [],
      3: []
    },
    'Il Mheg': {
      1: [],
      2: [],
      3: []
    },
    "The Rak'tika Greatwood": {
      1: [],
      2: [],
      3: []
    },
    'The Tempest': {
      1: [],
      2: [],
      3: []
    }
  },
  routeData: {
    Lakeland: [],
    Kholusia: [],
    'Amh Araeng': [],
    'Il Mheg': [],
    "The Rak'tika Greatwood": [],
    'The Tempest': []
  },
  markCoords: [],
  totalStops: 0,
  currentStop: 0,
  currentMark: {
    mark: ' - ',
    zone: ' - ',
    coords: ' - ',
    instance: ' - '
  },
  showModal: false,
  showLocation: false,
  trainZone: 'Lakeland',
  zonesRemaining: [
    // prettier-ignore
    'Kholusia',
    'Amh Araeng',
    "The Rak'tika Greatwood",
    'The Tempest'
  ],
  zoneKeys: null,
  zoneData: null
};

export default initialState;
