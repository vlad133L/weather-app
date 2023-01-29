import querystring from 'querystring';
import http from 'http';
import url from 'url';
import { DEFAULT_PORT, headersEnum } from './constants.js';
import { RequestService } from './services/requestService.js';
const PORT = process.env.PORT || DEFAULT_PORT;

const server = http.createServer(async (req, res) => {
	const headers = {
		'Content-Type': headersEnum.CONTENT_TYPE,
		'Access-Control-Allow-Origin': headersEnum.ACCESS_CONTROL_ALLOW_ORIGIN,
		'Access-Control-Allow-Methods': headersEnum.ACCESS_CONTROL_ALLOW_METHODS,
	};
	handleRequest(req, res, req.url, headers);
});
server.listen(PORT, () => {
	console.log('Server has been started');
});

async function handleRequest(req, res, reqUrl, headers) {
	if (req.method === 'GET') {
		//Получаем от клиента долготу и широту выбранного города
		const parsed = url.parse(reqUrl);
		const query = querystring.parse(parsed.query);
		res.writeHead(200, headers);
		try {
			const requestService = new RequestService();
			const response = await requestService.getData(query.lat, query.lon);
			return res.end(JSON.stringify(response));
		} catch (err) {
			res.status(500).json({ message: 'Bad request' });
		}
	}
}
