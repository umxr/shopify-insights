import setUpQuery from "./setUpQuery";

const run = (urls, device = "DESKTOP") => {
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
