import initialState from './initialState';

const scoutDataReducer = (draft, action) => {
  switch (action.type) {
    case 'fetch': {
      draft.zoneKeys = action.zoneKeys;
      draft.zoneData = action.zoneData;
      return;
    }
    case 'sdFetch': {
      draft.scoutData = action.newData;
      draft.scoutedZoneKeys = action.scoutedZoneKeys;
      return;
    }
    case 'map': {
      draft.showModal = true;
      draft.modalType = 'map';
      draft.mapZone = action.zone;
      draft.mapMark = action.mark;
      draft.markCoords = action.markCoords;
      draft.mapInstance = action.instance;
      return;
    }
    case 'modal': {
      draft.showModal = false;
      draft.shared = false;
      draft.mapZone = '';
      draft.mapMark = '';
      draft.modalType = null;
      return;
    }
    case 'route': {
      draft.routeData = action.route;
      draft.currentMark = action.mark;
      draft.totalStops = action.count;
      draft.currentStop = 0;
      return;
    }
    case 'nextMark': {
      draft.currentStop += 1;
      draft.currentMark = draft.routeData[draft.currentStop];
      return;
    }
    case 'prevMark': {
      draft.currentStop -= 1;
      draft.currentMark = draft.routeData[draft.currentStop];
      return;
    }
    case 'end': {
      draft.scoutData = initialState.scoutData;
      draft.routeData = initialState.routeData;
      draft.currentStop = initialState.currentStop;
      draft.totalStops = initialState.totalStops;
      draft.shared = initialState.shared;
      return;
    }
    case 'mapToggler': {
      draft.modalType = 'location';
      draft.showModal = true;
      return;
    }
    case 'updateKey': {
      draft.cardKey = action.key;
      return;
    }
    case 'share': {
      draft.modalType = 'shared';
      draft.showModal = true;
      return;
    }
    case 'join': {
      draft.joinURL = action.value;
      return;
    }
    case 'error': {
      draft.error = true;
      return;
    }
    case 'clear': {
      draft.error = false;
      return;
    }
    case 'allow': {
      draft.allow = true;
      draft.error = false;
      return;
    }
    case 'datacenter': {
      draft.datacenter = action.dc;
      draft.allWorlds = action.worlds;
      return;
    }
    case 'world': {
      draft.world = action.world;
      return;
    }
    case 'dataCenterURL': {
      draft.dataCenterURL = action.url;
      return;
    }
    default:
      break;
  }
};

export default scoutDataReducer;
