type submenu = {
	image?: string;
	image_alt?: string;
	name: string;
	description?: string;
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
				description:
					"Whether your system needs a simple recharge or a complete overhaul, we have the tools and expertise to diagnose and repair any AC problem, from leaks to electrical issues, in no time.",
				slug: "/air-conditioning",
				menuHadChildren: false,
			},
			{
				name: "Brake Repairs",
				description:
					"Our expert mechanics use only top-quality parts and state-of-the-art equipment to diagnose and repair any brake issue, from worn brake pads to damaged rotors. Don't take chances with your safety on the road.",
				slug: "/brakes",
				menuHadChildren: false,
			},
			{
				image:
					"/assets/images/automotive-maintenance-mechanic-explain-repair-con-2022-01-06-16-30-07-utc-min.webp",
				image_alt: "Automotive Maintenance Mechanic Explain Repair",
				name: "Engine Repair",
				description:
					"From minor issues like oil leaks to major problems like engine rebuilds, we have the knowledge and expertise to get your engine running smoothly and reliably. We use only top-quality parts and the latest diagnostic equipment to accurately diagnose and repair any issue, so you can trust that your vehicle is in good hands.",
				slug: "/engine",
				menuHadChildren: false,
			},
			{
				image:
					"/assets/images/mechanic-detailed-inspection-2022-12-16-11-47-40-utc-min.webp",
				image_alt: "Mechanic Detailed Inspection",
				name: "Transmission Repair",
				description:
					"A transmission is a key component of a vehicle that is responsible for transmitting power from the engine to the wheels. It is the mechanism that allows a vehicle to change gears and adjust the speed of the wheels while the engine continues to run.",
				slug: "/transmission",
				menuHadChildren: false,
			},
			{
				image:
					"/assets/images/auto-mechanics-doing-diagnostics-with-laptop-2022-01-19-00-27-22-utc-min.webp",
				image_alt: "Auto Mechanics Doing Diagnostics With Laptop",
				name: "Electrical Repair",
				description:
					"The electrical system in a vehicle is responsible for powering and controlling various electrical components, including the starter motor, battery, alternator, lights, and various sensors. The electrical system is an essential part of a vehicle, as it is responsible for providing power to start the engine and run many of the vehicle's functions.",
				slug: "/electrical",
				menuHadChildren: false,
			},
			{
				name: "Truck Repair",
				description:
					"Maintenance and repair of trucks and other heavy-duty vehicles. Like any other vehicle, trucks require regular maintenance and repairs to ensure their safe and reliable operation. Failure to perform regular maintenance and repairs can result in breakdowns, reduced fuel efficiency, and even accidents.",
				slug: "/trucks",
				menuHadChildren: false,
			},
			{
				name: "Cooling System Repair",
				description:
					"The cooling system in a vehicle is responsible for regulating the temperature of the engine and preventing it from overheating. The cooling system typically includes a radiator, coolant, water pump, thermostat, and various hoses and sensors.",
				slug: "/cooling-system",
				menuHadChildren: false,
			},
			{
				image:
					"/assets/images/car-mechanic-with-client-in-repair-garage-rockville-md-2022.webp",
				image_alt: "Car Mechanic With Client In Repair Garage Rockville MD",
				name: "Fuel System Repair",
				description:
					"The fuel system plays a crucial role in the operation of the engine, as it provides the fuel needed to power the vehicle. Over time, the components of the fuel system can wear out or become clogged with dirt and debris, which can lead to reduced fuel efficiency and engine performance.",
				slug: "/fuel-system",
				menuHadChildren: false,
			},
			{
				name: "Power Steering Repair",
				description:
					"Power steering is important because it makes it easier to steer the vehicle, especially at low speeds and when making tight turns. Without power steering, steering the vehicle would require much more effort and could cause driver fatigue.",
				slug: "/power-steering",
				menuHadChildren: false,
			},
			{
				name: "Oil Change",
				description:
					"The engine oil plays a crucial role in the operation of the engine, as it lubricates the moving parts and helps to reduce friction and wear. Over time, the oil can become contaminated with dirt and debris, which can reduce its effectiveness and potentially cause engine damage.",
				slug: "/oil-change",
				menuHadChildren: false,
			},
			{
				name: "Radiator Repair",
				description:
					"The radiator is an important component of the engine cooling system because it helps to prevent the engine from overheating, which can cause serious damage to the engine. Over time, the radiator can become clogged with dirt and debris or can develop leaks, which can reduce its effectiveness and lead to engine overheating.",
				slug: "/radiator",
				menuHadChildren: false,
			},
			{
				name: "Tire Repair",
				description:
					"When a tire is damaged, it can become unsafe to drive on and can also cause damage to other parts of the vehicle. Some common types of tire damage include punctures, cuts, and sidewall damage.",
				slug: "/tires",
				menuHadChildren: false,
			},
			{
				name: "Wheel Alignment",
				description:
					"Over time, the suspension system of a vehicle can become misaligned due to normal wear and tear, hitting potholes or curbs, or other factors. Misaligned wheels can cause a variety of problems, including uneven tire wear, poor handling, and decreased fuel efficiency.",
				slug: "/wheel-alignment",
				menuHadChildren: false,
			},
			{
				name: "Battery Replacement",
				description:
					"Over time, the battery in a vehicle can become weak or fail, resulting in a variety of issues such as difficulty starting the engine, dimming headlights, and loss of power to electrical accessories. When this occurs, a battery replacement is necessary to ensure that the vehicle operates properly.",
				slug: "/battery",
				menuHadChildren: false,
			},
		],
	},
	// {
	// 	name: "Articles",
	// 	slug: "/articles",
	// 	menuHadChildren: false,
	// },
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
