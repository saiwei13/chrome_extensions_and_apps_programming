chrome.runtime.sendMessage('Hello', function(response){

    console.log('popup.js   sendMessage() response = ' , response+" , date="+new Date())

    document.write(response);
});