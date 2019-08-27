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
      draft.mapZone = action.zone;
      draft.mapMark = action.mark;
      draft.markCoords = action.markCoords;
      draft.mapInstance = action.instance;
      return;
    }
    case 'modal': {
      draft.showModal = false;
      draft.showLocation = false;
      draft.shared = false;
      draft.mapZone = '';
      draft.mapMark = '';
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
      draft.showLocation = true;
      draft.showModal = true;
      return;
    }
    case 'updateKey': {
      draft.cardKey = action.key;
      return;
    }
    case 'share': {
      draft.shared = true;
      draft.showModal = true;
      return;
    }
    default:
      break;
  }
};

export default scoutDataReducer;
