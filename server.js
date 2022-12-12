const http = require('http');
const PORT = process.env.PORT || 5000;
const url = require('url');
const querystring = require('query-string');
const server = http.createServer(async (req, res) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  };
  if (req.method === 'GET') {
    //Получаем от клиента долготу и широту выбранного города
    const parsed = url.parse(req.url);
    const query = querystring.parse(parsed.query);
    res.writeHead(200, headers);
    try {
      const data = await fetch(
        `https://fcc-weather-api.glitch.me/api/current?lat=${query.lat}&lon=${query.lon}`,
      );
      const response = await data.json();
      return res.end(JSON.stringify(response));
    } catch (err) {
      res.status(400).json({ message: 'Bad request' });
    }
  }
});
server.listen(PORT, () => {
  console.log('Server has been started');
});
