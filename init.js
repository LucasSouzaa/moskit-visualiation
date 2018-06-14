function init(apikey){
    //emailtypes contacts
    REQUEST_API("https://api.moskitcrm.com/v1/emailTypes", apikey, {
        response: function(data){

            for(var i = 0; i<data.results.length; i++){
                $("#contact_type").append('<li class="list-group-item">'+data.results[i].id+' | '+data.results[i].entity+' | '+data.results[i].name+' </li>');
            }


        }
    });

    //phonetype contacts
    REQUEST_API("https://api.moskitcrm.com/v1/phoneTypes/contacts", apikey, {
        response: function(data){

            for(var i = 0; i<data.results.length; i++){
                $("#contact_type").append('<li class="list-group-item">'+data.results[i].id+' | '+data.results[i].entity+' | '+data.results[i].name+' </li>');
            }


        }
    });


    //Contacts custom fields
    REQUEST_API("https://api.moskitcrm.com/v1/customFields/contacts", apikey, {
        response: function(data){

            for(var i = 0; i<data.results.length; i++){
                $("#contact_customs").append('<li class="list-group-item">'+data.results[i].id+' | '+data.results[i].entity+' | '+data.results[i].name+' </li>');
            }


        }
    });


    //Contacts custom fields
    REQUEST_API("https://api.moskitcrm.com/v1/customFields/deals", apikey, {
        response: function(data){

            for(var i = 0; i<data.results.length; i++){
                $("#deal_customs").append('<li class="list-group-item">'+data.results[i].id+' | '+data.results[i].entity+' | '+data.results[i].name+' </li>');
            }


        }
    });


    //Contacts custom fields
    REQUEST_API("https://api.moskitcrm.com/v1/pipelines", apikey, {
        response: function(data){

            for(var i = 0; i<data.results.length; i++){
                $("#pipeline").append('<li class="list-group-item">'+data.results[i].id+' | '+data.results[i].entity+' | '+data.results[i].name+' </li>');
            }


        }
    });


    //Contacts custom fields
    REQUEST_API("https://api.moskitcrm.com/v1/stages", apikey, {
        response: function(data){

            for(var i = 0; i<data.results.length; i++){
                $("#pipeline").append('<li class="list-group-item">'+data.results[i].id+' | '+data.results[i].entity+' | '+data.results[i].name+' </li>');
            }


        }
    });

}