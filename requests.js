function REQUEST_API(url, apikey, callBack){

    var request = new XMLHttpRequest();

    try{
        request.open("GET", url);
        request.setRequestHeader('apikey', apikey);

    }catch(error){

    }

    try{
        request.send();

    }catch(error){
        alert(error)
    }



    request.onreadystatechange = function () {

        if (request.readyState === 4) {

            if (request.status === 200) {

                var json_decode = function(data){

                    try{
                        return JSON.parse(data);

                    }catch(error){

                        // console.warn('Json server failed:' + data);
                        return false;
                    }

                };

                var obj = json_decode(request.responseText);

                request.abort()
                callBack.response(obj);

            }

            // console.info(request);

        }


    };

}