const setUpQuery = (page) => {
  const api = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const parameters = {
    url: encodeURIComponent(page),
    key: "AIzaSyCAKk7B5Mo-_z4G9LL_PtbbpqTot8JwV_I"
  };
  let query = `${api}?`;
  let key;
  for (key in parameters) {
    query += `${key}=${parameters[key]}`;
  }
  console.log(query);
  return query;
};

export default setUpQuery;
