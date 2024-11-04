exports.handler = async (event) => {
  const country = event.headers[`cf-ipcountry`] || `Unknown`;
  return {
    statusCode: 200,
    body: JSON.stringify({ country }),
  };
};
