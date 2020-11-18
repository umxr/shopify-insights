import setUpQuery from "./setUpQuery";

const run = (urls) => {
  const requests = urls.map((url) => {
    const query = setUpQuery(url);
    return fetch(query);
  });

  Promise.all(requests).then((responses) =>
    responses
      .forEach((response) => {
        console.log(`${response.url}: ${response.status}`);
        return response;
      })
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((res) => console.log(res))
  );
};

export default run;
