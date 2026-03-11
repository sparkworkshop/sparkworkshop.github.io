import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
	links: [
		{
			text: 'About',
			href: '#about',
		},
		{
			text: 'Topics',
			href: '#topics',
		},
		{
			text: 'Important Dates',
			href: '#important-dates',
		},
		{
			text: 'Committees',
			href: '#committees',
		},
		{
			text: 'Submission',
			href: '#submission',
		},
		// {
		// 	text: 'Contact',
		// 	href: '#contact',
		// },
	],
	actions: [{ text: 'Submit Paper', href: ' https://easychair.org/conferences/?conf=spark2026', target: '_blank' }],
};

export const footerData = {
	links: [
		{
			title: 'Useful links',
			links: [
				{ text: 'ISWC 2026', href: 'https://iswc2026.semanticweb.org/' },
				{ text: 'Paper submission', href: 'https://easychair.org/conferences/?conf=spark2026' },
				{ text: 'CEUR-ART style files', href: 'https://ceur-ws.org/HOWTOSUBMIT.html#CEURART' }

			],
		},

		{
			title: 'Follow us',
			links: [
				{ text: 'SparkWorkshop @ X', href: 'https://x.com/SparkWorkshop', icon: 'tabler:brand-x' },
			],
		},
		

		{
			title: 'Contact us',
			links: [
				{ text: 'WU Vienna<br/>Institute for Data, Process and Knowledge Management', href: 'https://www.wu.ac.at/en/dpkm/' 	},
			],
		},

	],
	// secondaryLinks: [
	// 	{ text: 'Terms', href: getPermalink('/terms') },
	// 	{ text: 'Privacy Policy', href: getPermalink('/privacy') },
	// ],
	socialLinks: [
	],
	footNote: `
	Copyright © SPARK 2026
	`,
};
