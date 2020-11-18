import setUpQuery from "./setUpQuery";

const run = (urls) => {
  const requests = urls.map((url) => {
    const query = setUpQuery(url);
    return fetch(query);
  });

  return Promise.all(requests)
    .then((responses) => {
      // all responses are resolved successfully
      for (let response of responses) {
        console.log(`${response.url}: ${response.status}`); // shows 200 for every url
      }

      return responses;
    })
    .then((responses) => Promise.all(responses.map((r) => r.json())));
};

export default run;
