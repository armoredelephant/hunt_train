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
    case 'mapToggler': {
      draft.modalType = 'location';
      draft.showModal = true;
      return;
    }
    case 'share': {
      draft.modalType = 'shared';
      draft.showModal = true;
      return;
    }
    case 'auth': {
      draft.modalType = 'auth';
      draft.showModal = true;
      return;
    }
    case 'modal': {
      draft.showModal = false;
      draft.shared = false;
      draft.mapZone = '';
      draft.mapMark = '';
      draft.modalType = null;
      draft.formError = initialState.formError;
      draft.errorMessage = initialState.errorMessage;
      draft.formServer = initialState.formServer;
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
    case 'updateKey': {
      draft.cardKey = action.cardKey;
      return;
    }
    case 'clear': {
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
    case 'countSubtract': {
      draft.markCount = draft.markCount -= 1;
      return;
    }
    case 'log in': {
      draft.formCreate = false;
      draft.formLogin = true;
      return;
    }
    case 'create': {
      draft.formLogin = false;
      draft.formCreate = true;
      return;
    }
    case 'formReset': {
      draft.passLengthError = false;
      return;
    }
    case 'userUpdate': {
      draft.user = action.user;
      return;
    }
    case 'formServer': {
      draft.formServer = action.server;
      return;
    };
    case 'loading': {
      draft.isLoading = !draft.isLoading;
      return;
    };
    case 'formError': {
      draft.formError = true;
      draft.errorMessage = action.error;
      draft.isLoading = !draft.isLoading;
      return;
    }
    case 'clearErrors': {
      draft.formError = initialState.formError;
      draft.errorMessage = initialState.formError;
      return;
    }
    default:
      break;
  }
};

export default scoutDataReducer;
