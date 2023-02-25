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
	social: {
		facebook: string;
		google: string;
	};
	hours?: {
		monday: string;
		tuesday: string;
		wednesday: string;
		thursday: string;
		friday: string;
		saturday: string;
		sunday: string;
	};
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
	social: {
		facebook:
			"https://www.facebook.com/people/Five-O-Autocare/100066380660418/",
		google:
			"https://www.google.com/search?hl=en-us&sxsrf=AJOqlzUUC27WIF6Q0EyXrstU9tWOv-77ew:1677350982795&q=Five+O+Autocare&ludocid=12707968340519368903&gsas=1&client=safari&lsig=AB86z5UzxWybAgs46GfPDX6w9CTs&kgs=0042f58008f4baab&shndl=-1&shem=lssle&source=sh/x/kp/local/3",
	},
	hours: {
		monday: "8:00 AM - 5:00 PM",
		tuesday: "8:00 AM - 5:00 PM",
		wednesday: "8:00 AM - 5:00 PM",
		thursday: "8:00 AM - 5:00 PM",
		friday: "8:00 AM - 5:00 PM",
		saturday: "9:00 AM - 2:00 PM",
		sunday: "Closed",
	},
};
