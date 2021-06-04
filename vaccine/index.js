const fetch = require("node-fetch")

function getData() {
    return fetch("https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=17&district_id=296&date=2021-04-29", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        "Sec-GPC": "1"
    },
    "referrer": "https://dashboard.cowin.gov.in/",
    "method": "GET",
    "mode": "cors"
});
}

async function main() {
    
    const vaccineResponse = await getData();

    const vaccineData = await vaccineResponse.json();

    const vithura = vaccineData.getBeneficiariesGroupBy.find(it => it.session_site_id === 172031);
    
    console.log(`${vithura.title}: ${vithura.today}`)
}

main();