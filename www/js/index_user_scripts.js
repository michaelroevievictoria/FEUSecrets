(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
    
 function feed()
 {
     $.ajax({
        url: 'https://feu-secretfiles.rhcloud.com/?feed=json',
        dataType: 'json',
        error: function (xhr,status,error)
        {
            intel.xdk.notification.alert(error,'Error '+status, 'Ok');
        },
        success: function (result,status,xhr)
        {
            //intel.xdk.notification.alert(result[0].id, status, 'Ok');
            var list_container = '';
            
            //intel.xdk.notification.alert(result[0].thumbnail, status, 'Ok');

            for (var index in result) {
                //something(result[k])

                var open_a = '<a class="list-group-item allow-badge widget uib_w_3" data-uib="twitter%20bootstrap/list_item" data-ver="1" onclick="intel.xdk.device.launchExternal(\''+result[index].permalink+'\');" id="'+result[index].id+'"><span class="badge glyphicon glyphicon-user"> '+result[index].author+'</span>';
                //var open_a = '<a class="list-group-item allow-badge widget uib_w_3" data-uib="twitter%20bootstrap/list_item" data-ver="1" href="'+result[index].permalink+'" id="'+result[index].id+'"><span class="badge glyphicon glyphicon-user"> '+result[index].author+'</span>';
                var h4 = '<h4 class="list-group-item-heading">'+result[index].title+'</h4>';
                var img = '<img style="width: 310px; height: 160px; " src="'+result[index].thumbnail+'" >';
                var p = '<p class="list-group-item-text">'+result[index].excerpt+'</p>';
                var close_a = '</a>';
                

                list_container += open_a + h4 + img + p + close_a;
            }


            //intel.xdk.notification.alert(result[0].id, status, 'Ok');
            $('#list-container').html('');
            $('#list-container').append(list_container);
        }
    });
 }
    

 feed();
    
    
 function register_event_handlers()
 {
    
    
     /* button  #refresh-button */
    $(document).on("click", "#refresh-button", function(evt)
    {
        //intel.xdk.notification.alert('asd','asd', 'asd');
        
       feed();
        
        //intel.xdk.notification.alert('asd','asd', 'asd');
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
