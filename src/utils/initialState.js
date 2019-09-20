const initialState = {
  allWorlds: null,
  allDatacenters: [
    'Aether',
    'Primal',
    'Crystal'
  ],
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
  changeChar: false,
  datacenter: '',
  dataCenterURL: null,
  discord: false,
  errorMessage: null,
  formLogin: true,
  formCreate: false,
  formServer: 'default',
  isLoading: false,
  markCount: 0,
  modalType: null,
  formError: false,
  scoutedZoneKeys: [],
  shared: false,
  showModal: false,
  showNav: false,
  showLocation: false,
  userData: null,
  world: '',
  zoneKeys: null,
  zoneData: null
};

export default initialState;
