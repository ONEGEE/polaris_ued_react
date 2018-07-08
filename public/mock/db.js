module.exports = () => {
	const db = {
		docsList: [
			{
				id: 1,
				guid: 1,
				title: 'Intro'
			},
			{
				id: 2,
				guid: 2,
				title: 'Team Intro'
			},
			{
				id: 3,
				guid: 3,
				title: 'Standard'
			},
			{
				id: 4,
				guid: 4,
				title: 'Log'
			}
		],
		docsDetails: [
			{
				id: 1,
				guid: 1,
				title: 'Intro',
				desc: 'Intro this project.'
			},
			{
				id: 2,
				guid: 2,
				title: 'Team',
				desc: 'Team introduction.'
			},
			{
				id: 3,
				guid: 3,
				title: 'Standard',
				desc: 'Standard docs.'
			},
			{
				id: 4,
				guid: 4,
				title: 'Log',
				desc: 'Log by versions.'
			}
		]
	}
	return db
}
