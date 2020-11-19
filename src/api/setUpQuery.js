const setUpQuery = (page) => {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?key=AIzaSyCAKk7B5Mo-_z4G9LL_PtbbpqTot8JwV_I";
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
