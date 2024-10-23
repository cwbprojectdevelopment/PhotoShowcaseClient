import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from "react-router-dom";
import NavBar from './NavBar/NavBar';
import HomePage from './Home/HomePage';
import NotFoundPage from './NotFoundPage';
import GalleryPage from './Gallery/GalleryPage';
import AboutUsPage from './AboutUs/AboutUsPage';
import DownloadPage from './Download/DownloadPage';
import UploadPage from './Upload/UploadPage';
import LogInPage from './Upload/LogInPage';


function PhotoShowcase()
{
	return (
	<>
		<section className='background-gray'>
			<Router>
				<NavBar/>
				<Routes>
					<Route path='/' element={<HomePage/>}/>
					<Route path='/gallery' element={<GalleryPage/>}/>
					<Route path='/log-in' element={<LogInPage/>}/>
					<Route path='/upload' element={<UploadPage/>}/>
					<Route path='/download' element={<DownloadPage/>}/>
					<Route path='/about-us' element={<AboutUsPage/>}/>
					<Route path='*' element={<NotFoundPage/>}/>
				</Routes>
			</Router>
		</section>
	</>
	);
}
export default PhotoShowcase;