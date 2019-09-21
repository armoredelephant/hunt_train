const initialState = {
  allWorlds: null,
  allDatacenters: [
    'Aether',
    'Primal',
    'Crystal',
    'Chaos',
    'Light',
    'Elemental',
    'Gaia',
    'Mana'
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
  radioChecked: false,
  datacenter: '',
  dataCenterURL: null,
  discord: false,
  formNotification: null,
  formError: false,
  formSuccess: false,
  formLogin: true,
  formCreate: false,
  formServer: 'default',
  isLoading: false,
  markCount: 0,
  modalType: null,
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
