import { DEFAULT_SELECTED_KEYS, SLIDER_CONFIG } from '../../common/constants/dataConstants';

const StorageService = {
  setSliderConfig: (config) => {
    sessionStorage.setItem(SLIDER_CONFIG, config);
  },

  getSliderConfig: () => JSON.parse(sessionStorage.getItem(SLIDER_CONFIG)),

  setSelectedNav: (key) => {
    sessionStorage.setItem(DEFAULT_SELECTED_KEYS, key);
  },

  getSelectedNav: () => sessionStorage.getItem(DEFAULT_SELECTED_KEYS) || '1'
};

export default StorageService;
