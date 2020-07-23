import shops from './_shops.js';

const lookup = new Map();
shops.forEach(shop => {
	lookup.set(shop.id, JSON.stringify(shop));
});

export function get(req, res, next) {
	const { shop } = req.params;

	if (lookup.has(shop)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(shop));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
