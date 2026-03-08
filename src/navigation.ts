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
	actions: [{ text: 'Submit Paper', href: 'https://easychair.org/', target: '_blank' }],
};

export const footerData = {
	links: [
		{
			title: 'Links',
			links: [
				{ text: 'ISWC 2026', href: '#' },
				{ text: 'Paper submission', href: '#' },
			],
		},
		{
			title: 'Contact us',
			links: [
				{ text: 'WU Vienna'},
			],
		},
	],
	// secondaryLinks: [
	// 	{ text: 'Terms', href: getPermalink('/terms') },
	// 	{ text: 'Privacy Policy', href: getPermalink('/privacy') },
	// ],
	socialLinks: [
		{ ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
		{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
	],
	footNote: `
		Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
	`,
};
