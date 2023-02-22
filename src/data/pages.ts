type submenu = {
	image?: string;
	image_alt?: string;
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
				slug: "/services",
				menuHadChildren: false,
			},
			{
				name: "Brake Repair",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				image:
					"/assets/images/automotive-maintenance-mechanic-explain-repair-con-2022-01-06-16-30-07-utc-min.webp",
				image_alt: "Automotive Maintenance Mechanic Explain Repair",
				name: "Engine Repair",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				image:
					"/assets/images/mechanic-detailed-inspection-2022-12-16-11-47-40-utc-min.webp",
				image_alt: "Mechanic Detailed Inspection",
				name: "Transmission Repair",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				image:
					"/assets/images/auto-mechanics-doing-diagnostics-with-laptop-2022-01-19-00-27-22-utc-min.webp",
				image_alt: "Auto Mechanics Doing Diagnostics With Laptop",
				name: "Electrical Repair",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				name: "Truck Repair",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				name: "Cooling System Repair",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				image:
					"/assets/images/car-mechanic-with-client-in-repair-garage-rockville-md-2022.webp",
				image_alt: "Car Mechanic With Client In Repair Garage Rockville MD",
				name: "Fuel System Repair",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				name: "Power Steering Repair",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				name: "Oil Change",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				name: "Radiator Repair",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				name: "Tire Repair",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				name: "Wheel Alignment",
				slug: "/services",
				menuHadChildren: false,
			},
			{
				name: "Battery Replacement",
				slug: "/services",
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
