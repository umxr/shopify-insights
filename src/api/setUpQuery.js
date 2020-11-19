const setUpQuery = (url, device) => {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?";
  const parameters = {
    url: encodeURIComponent(url),
    key: process.env.REACT_APP_API_KEY,
    strategy: device,
  };
  const query =
    api +
    Object.keys(parameters)
      .map((key) => {
        return `${key}=${parameters[key]}`;
      })
      .join("&");

  return query;
};

export default setUpQuery;
