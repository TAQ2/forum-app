import { UPDATE_SCROLL_Y, UPDATE_SCREEN_WIDTH } from "../actions/userMetrics";

const initialState = {
  scrollY: document.body.scrollTop || document.documentElement.scrollTop,
  screenWidth: window.innerWidth
};

function userMetrics(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCROLL_Y:
      return {
        ...state,
        scrollY: action.scrollY
      };
    case UPDATE_SCREEN_WIDTH:
      return {
        ...state,
        screenWidth: action.screenWidth
      };

    default:
      return state;
  }
}

export default userMetrics;
