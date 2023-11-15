export default function Resume () {

	// Function will execute on click of button
	const onButtonClick = () => {
	
		// using Java Script method to get PDF file
		fetch("Christian_Urbach_Resume.pdf").then((response) => {
			response.blob().then((blob) => {
			
				// Creating new object of PDF file
				const fileURL =
					window.URL.createObjectURL(blob);
					
				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "Christian_Urbach_Resume.pdf";
				alink.click();
			});
		});
	};
	return (<>
    <div className="container">
        <div>
            <p>Christian Urbach</p>
            <p>509 Cassidy St.</p>
            <p>Oceanside, CA. 92054</p>
        </div>

        <div>
            <p>Phone: (760) 453-9036</p>
            <p>Email: C.Urbach19@gmail.com</p>
            <p>www.linkedIn.com/in/curbach</p>
        </div>
    </div>
    <hr></hr>
    <button style={{ marginLeft:"50%"}} onClick={onButtonClick}>
					Download PDF
				</button>
    <h1>Experience</h1>
        <div className="jobTile">
            <p>CRO Associate: Power Digital Marketing, San Diego, CA (June. 2020 - Dec. 2022)</p>
            <ul>
                <li>Analyzed website data using Google Analytics and Google Data Studio</li>
                <li>A/B tested hypothesis on Google Optimize to ensure positive results</li>
                <li>Created & Presented client reports to company owners and account managers</li>
                <li>Developed actionable optimization roadmap for clients and developers</li>
            </ul>
        </div>
        <div className="jobTile">
            <p>CRO Associate: Power Digital Marketing, San Diego, CA (June. 2020 - Dec. 2022)</p>
            <ul>
                <li>Analyzed website data using Google Analytics and Google Data Studio</li>
                <li>A/B tested hypothesis on Google Optimize to ensure positive results</li>
                <li>Created & Presented client reports to company owners and account managers</li>
                <li>Developed actionable optimization roadmap for clients and developers</li>
            </ul>
        </div>
        <div className="jobTile">
            <p>CRO Associate: Power Digital Marketing, San Diego, CA (June. 2020 - Dec. 2022)</p>
            <ul>
                <li>Analyzed website data using Google Analytics and Google Data Studio</li>
                <li>A/B tested hypothesis on Google Optimize to ensure positive results</li>
                <li>Created & Presented client reports to company owners and account managers</li>
                <li>Developed actionable optimization roadmap for clients and developers</li>
            </ul>
        </div>
        <div className="jobTile">
            <p>CRO Associate: Power Digital Marketing, San Diego, CA (June. 2020 - Dec. 2022)</p>
            <ul>
                <li>Analyzed website data using Google Analytics and Google Data Studio</li>
                <li>A/B tested hypothesis on Google Optimize to ensure positive results</li>
                <li>Created & Presented client reports to company owners and account managers</li>
                <li>Developed actionable optimization roadmap for clients and developers</li>
            </ul>
        </div>
        <div className="jobTile">
            <p>CRO Associate: Power Digital Marketing, San Diego, CA (June. 2020 - Dec. 2022)</p>
            <ul>
                <li>Analyzed website data using Google Analytics and Google Data Studio</li>
                <li>A/B tested hypothesis on Google Optimize to ensure positive results</li>
                <li>Created & Presented client reports to company owners and account managers</li>
                <li>Developed actionable optimization roadmap for clients and developers</li>
            </ul>
        </div>

				

		</>
	);
};




{/* 
    return (<>
        <h1>My Resume'</h1>
    </>
    )
    */}
