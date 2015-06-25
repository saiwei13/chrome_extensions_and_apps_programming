chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){

    console.log('background.js  addListener()  message= '+message+" , date="+new Date())

    if(message == 'Hello'){
        sendResponse('Hello from background.');
    }
});