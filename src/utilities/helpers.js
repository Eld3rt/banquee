export function generateSlug(string) {
	return string
		.toString()
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

export function generateTagData(tags) {
	let tagData = [];
	tags.forEach((tag) => {
		tagData.push({
			name: tag,
			slug: `${generateSlug(tag)}`,
	});
	});
	return tagData;
}

export function generatePData(obj, requiredPropsNumber) {
	let pData = [];
	let sumP = Object.keys(obj).length - requiredPropsNumber;
	for (let i = 1; i < sumP + 1; i++) {
		pData.push(obj[`p${i}`])
	}
	return pData;
}