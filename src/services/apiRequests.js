import axios from "axios";
import * as helpers from "./helpers";
import * as paths from "../static/paths";

const TIMEOUT_LIMIT = 30000;

export const getEventsList = () => {
  return axios
    .create({
      baseURL: paths.GET_EVENTS_LIST,
      timeout: TIMEOUT_LIMIT,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ed56d8f5cbc4f810ff1a7a5ccb7af8e6"
      }
    })
    .get()
    .then(response => response.data);
};

export const getEventDetail = eventId => {
  return axios
    .create({
      baseURL: helpers.modifyEventDetailPath(paths.GET_EVENT_DETAIL, eventId),
      timeout: TIMEOUT_LIMIT,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ed56d8f5cbc4f810ff1a7a5ccb7af8e6"
      }
    })
    .get()
    .then(response => response.data);
};

export const getEventSessions = eventId => {
  return axios
    .create({
      baseURL: helpers.modifyEventSessionsPath(
        paths.GET_EVENT_SESSIONS,
        eventId
      ),
      timeout: TIMEOUT_LIMIT,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ed56d8f5cbc4f810ff1a7a5ccb7af8e6"
      }
    })
    .get()
    .then(response => response.data);
};
