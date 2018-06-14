$(function () {
    /* remove eloqua values*/
     /* add this javascript before the end of your script tag to remove all the eloqua tags inside the textboxes */
     var textboxes=document.querySelectorAll('input[type=text]');
     if(textboxes){
       for (var i = 0; i < textboxes.length; i++) {
           textboxes[i].value=''; 
       }
   }
        function getUrlQS(q, url) {
            var vars = [],
                hash;
            if (typeof url == 'undefined') {
                var url = window.location.search;
            }
            var hashes = url.slice(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            var qs = (typeof vars[q] !== 'undefined') ? decodeURIComponent(vars[q]) : '';
            return qs;
        }
 
        $("form").each(function () {
            var inputs = [];
            var val = "";
            $(this).find("input").each(function () {
                if (this.attributes && this.attributes.name && this.attributes.name.value.toLowerCase() == "elqcampaignid") {
                    inputs.push($(this));
                    if (!val && $(this).val()) {
                        val = $(this).val();
                    }
                }
            });
 
            if (inputs.length > 0) {
                while (inputs.length > 1) {
                    inputs.pop().remove();
                }
                inputs[0].val(getUrlQS("elqCampaignId") || val);
            }
        });

        function getQueryStringParamValue(keyvalue) {
            var params = {};
            var strURL = document.location.href;
            var qs = '';
            if (strURL.indexOf('?') != -1) {
              qs = strURL.substr(strURL.indexOf('?') + 1)
            }
            if (qs.length == 0) {
              return '';
            }
            qs = qs.replace(/\+/g, ' ');
            var args = qs.split('&');
            for (var i = 0; i < args.length; i++) {
              var pair = args[i].split('=');
              var name = decodeURIComponent(pair[0]);
              var value = (pair.length == 2) ? decodeURIComponent(pair[1]) : name;
              params[name] = value;
            }
            var qsparam = params[keyvalue];
            return (qsparam != null) ? qsparam : '';
          }
          function setCampaignInfo(){
            var form=document.querySelectorAll('.elq-form')[0];
            if(form){
                form.promocode.value =getQueryStringParamValue('promocode'); 
                form.trkcode.value = getQueryStringParamValue('trackingcode');
                form.utm_source.value = getQueryStringParamValue('utm_source');
                form.utm_medium.value = getQueryStringParamValue('utm_medium');
                form.elqCampaignId.value = getQueryStringParamValue('elqCampaignId');
            }
          }
          setCampaignInfo();
    });

 


var app = new Vue({
    el: '#app',
    data: {
        result: null
    },
    methods: {},
    created(){
        
        //var x = location;
        
        console.log(location.search);
        
    }
})