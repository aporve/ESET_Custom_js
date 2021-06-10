window.addEventListener('message', function(eventData) {
    console.log('Event Data -------->',eventData)
  try {
    let message = JSON.parse(app.data.message);
    app.log(message, "Message");
    if (message === Object(message)) {
        app.log('is an object');
        if(message.event_code === 'ym-client-event') {
            app.log(message.event_code, 'YM client event');
            if (message.data === 'Product Recommendation') {
                console.log(message.data,'Data')
                document.getElementById('chatBoxMain').style.display ="none"
                document.getElementById('chatOptions').style.display ="none"
            }
        }
    }
    //check whether it is an obj and check for event code and other data
    //trigger journey
} catch (e) {
    //do nothing
}
   
}, false);