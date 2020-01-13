export const UPDATE_SCROLL_Y = "UPDATE_SCROLL_Y";
export const UPDATE_SCREEN_WIDTH = "UPDATE_SCREEN_WIDTH";

export function updateScrollY(scrollY) {
  return {
    type: UPDATE_SCROLL_Y,
    scrollY
  };
}

export function updateScreenWidth(screenWidth) {
  return {
    type: UPDATE_SCREEN_WIDTH,
    screenWidth
  };
}
