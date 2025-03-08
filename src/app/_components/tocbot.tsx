'use client';

import React, { useEffect } from 'react';
import tocbot from 'tocbot';

const Toc = () => {

	useEffect(() => {      
		tocbot.init({
			tocSelector: '.toc',
			contentSelector: '.post',
			headingSelector: 'h2, h3',
		}) 
		return () => {
			tocbot.destroy()
		}
	})

	return (
		<div>
			<h1>目次</h1>
			<div>
				<nav className="toc"/>
			</div>
		</div>
	)
}

export default Toc