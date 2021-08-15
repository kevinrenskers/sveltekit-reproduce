export const get = async (request) => {
	return { body: new Date().toISOString() };
};