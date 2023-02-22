type submenu = {
	name: string;
	slug: string;
	menuHadChildren: boolean;
};

interface pagesType extends submenu {
	name: string;
	slug: string;
	menuHadChildren: boolean;
	submenu?: submenu[];
}

export const pages: pagesType[] = [
	{
		name: "Home",
		slug: "/",
		menuHadChildren: false,
	},
	{
		name: "Services",
		slug: "/services",
		menuHadChildren: true,
		submenu: [
			{
				name: "Air Conditioning",
				slug: "/air-conditioning",
				menuHadChildren: false,
			},
			{
				name: "Brake Repair",
				slug: "/brake-repair",
				menuHadChildren: false,
			},
			{
				name: "Engine Repair",
				slug: "/engine-repair",
				menuHadChildren: false,
			},
			{
				name: "Transmission Repair",
				slug: "/transmission-repair",
				menuHadChildren: false,
			},
			{
				name: "Electrical Repair",
				slug: "/electrical-repair",
				menuHadChildren: false,
			},
			{
				name: "Truck Repair",
				slug: "/truck-repair",
				menuHadChildren: false,
			},
			{
				name: "Cooling System Repair",
				slug: "/cooling-system-repair",
				menuHadChildren: false,
			},
			{
				name: "Fuel System Repair",
				slug: "/fuel-system-repair",
				menuHadChildren: false,
			},
			{
				name: "Power Steering Repair",
				slug: "/power-steering-repair",
				menuHadChildren: false,
			},
			{
				name: "Oil Change",
				slug: "/oil-change",
				menuHadChildren: false,
			},
			{
				name: "Radiator Repair",
				slug: "/radiator-repair",
				menuHadChildren: false,
			},
		],
	},
	{
		name: "Articles",
		slug: "/articles",
		menuHadChildren: false,
	},
	{
		name: "About Us",
		slug: "/about-us",
		menuHadChildren: false,
	},
	{
		name: "Contact Us",
		slug: "/contact",
		menuHadChildren: false,
	},
	{
		name: "FAQ",
		slug: "/faq",
		menuHadChildren: false,
	},
];
