// const api_url =
// 	"https://afternoon-mountain-93761.herokuapp.com/search?Code=";

async function getapi(sid) {
	const api_url =
	// `https://afternoon-mountain-93761.herokuapp.com/search?Code=${sid}`;
    `/assets/js/data.json`;
	const response = await fetch(api_url);
	var data = await response.json();
	console.log(data);
	if (response) {
		// hideloader();
	}
    console.log(data[0])
    const sdata = data[sid-1];

    // assignment
    // document.getElementById('S_No').innerHTML=sdata.S_No;
    document.getElementById('page_title').innerHTML=sdata.S_No+ '' + "-" +sdata.Scientific_name;
    document.getElementById('Common_name').innerHTML = sdata.Common_name;
    document.getElementById('Common_name_table').innerHTML = sdata.Common_name;
    document.getElementById('Kannada_name').innerHTML = sdata.Kannada_name;
    document.getElementById('Family_name').innerHTML = sdata.Family_name;
    document.getElementById('Scientific_name').innerHTML = sdata.Scientific_name;
    document.getElementById('Species_type').innerHTML = sdata.Species_type;
    document.getElementById('Phenology').innerHTML = sdata.Phenology;
    document.getElementById('Conservation_status').innerHTML = sdata.Conservation_status;
    document.getElementById('Flowering_period').innerHTML = sdata.Flowering_period;
    document.getElementById('Fruiting_period').innerHTML = sdata.Fruiting_period;
    document.getElementById('Origin').innerHTML = sdata.Origin;

    document.getElementById('Uses').innerHTML = sdata.Uses;
    document.getElementById('Description').innerHTML = sdata.Description;
}
