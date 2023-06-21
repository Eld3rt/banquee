export default [
	{
		title: "Basic",
		price: "Free",
		description: {
			short: "Lorem ipsum dolor",
			extended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		features: [
			{
				title: "Credit Card",
				features: [
					{
						title: "Physical Card",
						description: "Diam in arcu cursus euismod",
						value: "Optional",
					},
					{
						title: "Virtual Card",
						description: "Diam in arcu cursus euismod",
						value: false,
					},
					{
						title: "Contactless Payments",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
					{
						title: "Mobile Payments",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
				],
			},
			{
				title: "Bank Account",
				features: [
					{
						title: "Free Payments Worldwide",
						description: "Diam in arcu cursus euismod",
						value: false,
					},
					{
						title: "Free ATM withdrawls",
						description: "Diam in arcu cursus euismod",
						value: 2,
					},
					{
						title: "Mobile Banking",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
				],
			},
			{
				title: "Extra Features",
				features: [
					{
						title: "Saving Accounts",
						description: "Diam in arcu cursus euismod",
						value: 2,
					},
					{
						title: "Advanced Statistics",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
					{
						title: "Premium Partner Offers",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
				],
			},
		],
		imageURL: "/assets/images/card-basic.png",
		imageRetinaURL: "/assets/images/card-basic-2x.png",
		popular: true,
		visible: true,
	},
	{
		title: "Premium",
		price: "$5",
		description: {
			short: "Lorem ipsum dolor",
			extended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		physicalCard: "Optional",
		features: [
			{
				title: "Credit Card",
				features: [
					{
						title: "Physical Card",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
					{
						title: "Virtual Card",
						description: "Diam in arcu cursus euismod",
						value: "Up to 2",
					},
					{
						title: "Contactless Payments",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
					{
						title: "Mobile Payments",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
				],
			},
			{
				title: "Bank Account",
				features: [
					{
						title: "Free Payments Worldwide",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
					{
						title: "Free ATM withdrawls",
						description: "Diam in arcu cursus euismod",
						value: 5,
					},
					{
						title: "Mobile Banking",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
				],
			},
			{
				title: "Extra Features",
				features: [
					{
						title: "Saving Accounts",
						description: "Diam in arcu cursus euismod",
						value: 5,
					},
					{
						title: "Advanced Statistics",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
					{
						title: "Premium Partner Offers",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
				],
			},
		],
		imageURL: "/assets/images/card-premium.png",
		imageRetinaURL: "/assets/images/card-premium-2x.png",
		popular: false,
		visible: true,
	},
	{
		title: "Gold",
		price: "$10",
		description: {
			short: "Lorem ipsum dolor",
			extended: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		physicalCard: "Optional",
		features: [
			{
				title: "Credit Card",
				features: [
					{
						title: "Physical Card",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
					{
						title: "Virtual Card",
						description: "Diam in arcu cursus euismod",
						value: "Unlimited",
					},
					{
						title: "Contactless Payments",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
					{
						title: "Mobile Payments",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
				],
			},
			{
				title: "Bank Account",
				features: [
					{
						title: "Free Payments Worldwide",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
					{
						title: "Free ATM withdrawls",
						description: "Diam in arcu cursus euismod",
						value: 10,
					},
					{
						title: "Mobile Banking",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
				],
			},
			{
				title: "Extra Features",
				features: [
					{
						title: "Saving Accounts",
						description: "Diam in arcu cursus euismod",
						value: "Unlimited",
					},
					{
						title: "Advanced Statistics",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
					{
						title: "Premium Partner Offers",
						description: "Diam in arcu cursus euismod",
						value: true,
					},
				],
			},
		],
		imageURL: "/assets/images/card-gold.png",
		imageRetinaURL: "/assets/images/card-gold-2x.png",
		popular: false,
		visible: true,
	},
];
