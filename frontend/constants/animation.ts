export const questionAnimation = {
  enter: (settings: {
    direction: "left" | "right";
    isBigScreen: boolean;
  }) => ({
    x: settings.isBigScreen
      ? settings.direction === "right"
        ? 704
        : -704
      : settings.direction === "right"
      ? 288
      : -288,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: ({
    isBigScreen,
    direction,
  }: {
    direction: "left" | "right";
    isBigScreen: boolean;
  }) => ({
    zIndex: 0,
    x: isBigScreen
      ? direction === "right"
        ? -704
        : 704
      : direction === "right"
      ? -288
      : 288,
    opacity: 0,
  }),
};
