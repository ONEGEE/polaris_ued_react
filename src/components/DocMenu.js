import React from 'react'
import { Menu } from 'semantic-ui-react'
import { formatDocTitleAsPath } from '@/utils/format'

const DocMenu = ({ data, match, history, setActiveDocByGuid }) => {
	return (
		<Menu text vertical>
			{data.map((item) => {
				let path = formatDocTitleAsPath(item.title)
				return (
					<Menu.Item
						name={item.title}
						onClick={() => {
							setActiveDocByGuid(item.guid)
							history.push(path)
						}}
						key={item.title}
						active={match.params.category === path}
					/>
				)
			})}
		</Menu>
	)
}

export default DocMenu
