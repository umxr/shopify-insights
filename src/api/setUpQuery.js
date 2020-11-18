const setUpQuery = (page) => {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const parameters = {
    url: encodeURIComponent(page),
  };
  let query = `${api}?`;
  let key;
  for (key in parameters) {
    query += `${key}=${parameters[key]}`;
  }
  return query;
};

export default setUpQuery;
