import short from "short-uuid"

export const redirectButton = () => {
  const route = 'http://localhost:5173/code/'+(short.generate());
  return route;
}