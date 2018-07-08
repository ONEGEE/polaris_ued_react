import React from 'react'
import Layout from '@/layouts/Layout'
import Header from '@/layouts/Header'

const Library = () => {
	return (
		<div>
			<Header />
			<iframe src='http://localhost:8888/library/0.1/' width='100%' height='500px' />
			Sketch Library
		</div>
	)
}

export default Library
