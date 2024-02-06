const button = document.getElementById('getLocation');


async function getdata (lat, long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=fe25dcf271d24341b17181200240102&q=${lat},${long}&aqi=yes`);

    return await promise.json()
}


async function gotLocation (position) {
  const result =  await getdata(position.coords.latitude,
    position.coords.longitude);
  console.log(result);
}

function failedToGet () {
    console.log('There was some issue');
}
 

// user ki loation lene ke liye hame callback function ko asyn banan hoga quki yaha promice ka use hoga diracte data to aayega nahi.
button.addEventListener("click", async () => {
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet) 
})


//getCurrentPosition ke andar do call back function hota hai pahla agar location mil jati hai to pahla vala call back run karega (() => {}), agar location milte me koe error aata hai to second call back function (() => {}) run hoga.