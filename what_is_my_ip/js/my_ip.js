var url = 'http://sneezryworks.sinaapp.com/ip.php'
url = 'http://127.0.0.1:8888/test'
function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

httpRequest(url, function(ip){
    document.getElementById('ip_div').innerText = ip;
});