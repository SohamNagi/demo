const fetchButton = document.getElementById('create');
const resultDiv = document.getElementById('result');
const apiUrl = 'https://localhost:7185/Incident';
const xmlData = `
    <session>
        <data>
            <policy>
                <BrandFlag>NBI</BrandFlag>
                <PolicyNumber>P04126499</PolicyNumber>
                <WorkbenchCaseId>MT23N142734</WorkbenchCaseId>
                <OrganizationalUnitDropdown>Atlantic</OrganizationalUnitDropdown>
                <MarketDimension>SmallBusiness</MarketDimension>
            </policy>
            <CurrentTransactionType>Endorse</CurrentTransactionType>
        </data>
    </session>
  `;

fetchButton.addEventListener('click', function() {
  // 2. Add text to the div
  resultDiv.classList.remove('hidden');
  resultDiv.classList.add('block');
  resultDiv.textContent = 'Created Incident!';
  // 1. Open link in a new tab
https://dev213244.service-now.com/nav_to.do?uri=incident.do?sysparm_query=number%3DINC0010003
window.open('https://dev213244.service-now.com/oauth_auth.do?response_type=token&client_id=b0f62596951102109ce8af6d28c97da8&redirect_uri=&state=IEaue', '_blank');
});

function handleToken() {
  // Get the token from the URL
  if(window.location.href != 'http://127.0.0.1:5500/src/index.html'){
    window.close();
  }
}

// Call the function when the page loads
window.addEventListener('load', handleToken);


