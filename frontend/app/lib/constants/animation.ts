export const questionAnimation = {
  enter: (direction: "left" | "right") => ({
    x: direction === "right" ? 330 : -330,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: "left" | "right") => ({
    zIndex: 0,
    x: direction === "right" ? -330 : 330,
    opacity: 0,
  }),
};
