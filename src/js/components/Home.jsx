import React from "react";
import ReactDOM from 'react-dom/client'


import Jumbo from "./jumbo";
import Navbar from "./Navbar";
import Cards from "./Cards";


//include images into your bundle
//create your first component
const Home = () => {
	return (
		<div id = "mainpage">
         <div id = "content">
			<Jumbo/>
			
			
			<div className="container">
				<div className="row">
					<Cards title =  "Walter white" image = "https://img.lavdg.com/sc/MUi1wEBTjuapK8f64OUEIwLidtc=/1280x/2013/08/12/00121376301301448682755/Foto/.jpg" />
					<Cards title = "Heisenberg" image = "https://i.ebayimg.com/images/g/I9MAAOxyuDpSGT40/s-l1200.jpg"/>
					<Cards title = "The one Who Knocks" image = "https://static.wikia.nocookie.net/breakingbad/images/0/08/640px-4x13_-_Face_Off_22.png/revision/latest/scale-to-width-down/640?cb=20130715201852 "/>

					<Cards title = "Walter blanco" image = "https://i.ytimg.com/vi/Mpg2MvVPV7Y/maxresdefault.jpg"/>
                
				</div>
			</div>
			
			
		 </div>
		</div>
	);
};

export default Home;

