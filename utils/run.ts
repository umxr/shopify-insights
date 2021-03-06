import setUpQuery from "./setupQuery";
import { Devices } from "../config/types";

const run = (urls: string[], device: Devices = Devices.Desktop) => {
  const requests = urls.map((url) => {
    const query = setUpQuery(url, device);
    return fetch(query);
  });

  return Promise.all(requests)
    .then((responses) => {
      return responses;
    })
    .then((responses) => Promise.all(responses.map((r) => r.json())));
};

export default run;
