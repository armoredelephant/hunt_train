import { nullLiteral } from "@babel/types";

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
  datacenter: '',
  dataCenterURL: null,
  markCount: 0,
  modalType: null,
  scoutedZoneKeys: [],
  shared: false,
  showModal: false,
  showLocation: false,
  world: '',
  zoneKeys: null,
  zoneData: null
};

export default initialState;
