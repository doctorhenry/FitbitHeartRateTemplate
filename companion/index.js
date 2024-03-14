import * as messaging from "messaging";
import { me as companion } from "companion";
// Do not Delete! - This code has been provided by Dr John Henry for educational purposes. If you have any questions, email john.henry@mmu.ac.uk
const wsUri = "wss://CONNECTION_ADDRESS_HERE";
const websocket = new WebSocket(wsUri);
var counter = 0;

websocket.addEventListener("open", onOpen);
websocket.addEventListener("close", onClose);
websocket.addEventListener("message", onMessage);
websocket.addEventListener("error", onError);

function onOpen(evt) {
   console.log("CONNECTED");   
}

function onClose(evt) {
    //websocket.close();
   console.log("DISCONNECTED");
}

function onMessage(evt) {
   console.log(`MESSAGE: ${evt.data}`);
}

function onError(evt) {
   console.error(`ERROR: ${evt.data}`);
}

function fetchHR()
{
    if(messaging.peerSocket.readyState === messaging.peerSocket.OPEN)
    {
        //Tell the companion app to you are sending data from the watch.
        messaging.peerSocket.send({
            command:"heart-rate"
        });
    }
}

messaging.peerSocket.addEventListener("message", (evt) => {
    if (evt.data && evt.data.command === "heart-rate") {
        console.log('Awaiting HR data');
        fetchHR();
    }
});

messaging.peerSocket.addEventListener("message", (evt) => {
    if (evt.data) {
        console.log("fitibt-data: "+ evt.data);
        counter = counter + 1;
        console.log("counter: "+ counter);
        //OPTIONAL: Wait for a number of hear rate measurements to be received before sending over Websocket     
        if(counter >= 5)
        {
            SendSocketMessage(evt.data);
            counter = 0;
        }        
    }
});

messaging.peerSocket.addEventListener("error", (err) => {
    console.error(`Connection error: ${err.code} - ${err.message}`);
});
const delay = ms => new Promise(res => setTimeout(res, ms));
async function SendSocketMessage(message)
{
    //OPTIONAL: Throttle how often you want data to be sent over Websocket  
    await delay(5000);
    console.log("sending socket msg: " + message);
    websocket.send(message);
}

