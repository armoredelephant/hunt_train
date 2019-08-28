const initialState = {
  allow: false,
  scoutData: {},
  routeData: {
    Lakeland: [],
    Kholusia: [],
    'Amh Araeng': [],
    'Il Mheg': [],
    "The Rak'tika Greatwood": [],
    'The Tempest': []
  },
  markCoords: [],
  error: false,
  totalStops: 0,
  currentStop: 0,
  currentMark: {
    mark: ' - ',
    zone: ' - ',
    coords: ' - ',
    instance: ' - '
  },
  cardKey: '',
  joinURL: null,
  scoutedZoneKeys: [],
  shared: false,
  showModal: false,
  showLocation: false,
  zoneKeys: null,
  zoneData: null
};

export default initialState;
