import React from 'react';

const NotFound=()=>{
	return (
		<div className="main-container">
			<div className="failure-msg">
				<h1 className='display-4'><span className='text-danger'>404</span> Not found</h1>
				<center><p className='lead'>Sorry, this page not exists.</p></center>
			</div>
		</div>
	)
}

export default NotFound;