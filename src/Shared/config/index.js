const getEnvVar = (key) => {
	if (process.env[key] === undefined) {
		throw new Error(`environment dont contains ${key}`);
	}
	return process.env[key];
};

export default getEnvVar;
