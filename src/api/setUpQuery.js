const setUpQuery = (page) => {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?key=AIzaSyAR37svq4BzE8HOaIiAg81u8RHo1pnzCX0";
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
