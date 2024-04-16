// api/proxy.js

const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://139.59.7.235/MarriageBiodata/api${req.url}`, // Update the URL accordingly
      data: req.body,
      headers: req.headers,
    });
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
};
