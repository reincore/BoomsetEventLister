export const modifyEventDetailPath = (path, eventId) => {
  return path + eventId;
};

export const modifyEventSessionsPath = (path, eventId) => {
  return path + eventId + "/sessions";
};
