type clientTypes = {
	name: string;
	email: string;
	phone: string;
	phoneFormatted: string;
	address: {
		lineOne: string;
		lineTwo: string;
		city: string;
		county: string;
		countyAbbreviated: string;
		state: string;
		zipcode: string;
		mapLink: string;
	};
	domain: string;
};

export const client: clientTypes = {
	name: "Five O Autocare",
	email: "fiveoautocare@gmail.com",
	phone: "2406016983",
	phoneFormatted: "(240) 601-6983",
	address: {
		lineOne: "422 N Stonestreet Ave",
		lineTwo: "Second Address Line, If Needed",
		city: "Rockville",
		county: "Montgomery County",
		countyAbbreviated: "MoCo",
		state: "MD",
		zipcode: "20850",
		mapLink: "https://goo.gl/maps/HJh3wGsQjL3yYKLj9",
	},
	domain: "www.fiveoautocare.com",
};
