const initialState = {
  scoutData: true,
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
  cardKey: '',
  showModal: false,
  showLocation: false,
  zoneKeys: null,
  zoneData: null
};

export default initialState;
