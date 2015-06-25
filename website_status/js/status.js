
var url = 'http://www.google.cn/';
url = 'http://google.com.hk/'

url = 'https://www.google.com.hk/?gws_rd=ssl'

//url = 'https://www.baidu.com/';


function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(true);
        }
    }
    xhr.onerror = function(){
        callback(false);
    }
    xhr.send();
}

var count = 0;

function checkStatus(){
    httpRequest(url, function(status){
        chrome.browserAction.setIcon({path: 'images/'+(status?'online.png':'offline.png')});

        console.log('hello world '+count++)

        setTimeout(checkStatus, 5000);
    });
}

checkStatus();