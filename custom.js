window.addEventListener('message', function(eventData) {
    console.log('onload---->')
    console.error(eventData,'eventData~~~~~~~~~~~~>>>');
    try { 
        console.log('Parsing data')
        let ymEvent = JSON.parse(eventData.data)
        let data = JSON.parse(ymEvent.data);
        console.log(data.event.code, "Data------>");
       if(((JSON.parse(ymEvent.data)).event.code) == 'ym-client-event') {
           console.log('In If Condition')
            document.getElementById('chatBoxMain').style.display ="none"
            document.getElementById('chatOptions').style.display ="none"
       }

    } catch (error) {
        console.error('ERROR~~~~~~~~~~~~~>>',error)
        return;
    }
}, false);