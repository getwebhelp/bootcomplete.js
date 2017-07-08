/*
* @name jQuery.bootcomplete
* @projectDescription Lightweight AJAX autocomplete for Bootstrap 3
* @author Rick Somers | http://getwebhelp.com/bootcomplete
* @version 1.0
* @license MIT License
* 
*/
(function ( $ ) {
 
    $.fn.bootcomplete = function(options) {
        
        var defaults = {
            url : "/search.php",
            method : 'get',
            wrapperClass : "bc-wrapper",
            menuClass : "bc-menu",
            idField : true,
            idFieldName : $(this).attr('name')+"_id",
            minLength : 3,
            id: 'id',
            label: 'label',
            dataParams : {},
            formParams : {},
            select: function(item) {}
        }
        
        var settings = $.extend( {}, defaults, options );
        
        $(this).attr('autocomplete','off')
        $(this).wrap('<div class="'+settings.wrapperClass+'"></div>')
        if (settings.idField) {
            if ($(this).parent().parent().find('input[name="' + settings.idFieldName + '"]').length !== 0) {
                //use existing id field
            } else {
                //there is no existing id field so create one
                $('<input type="hidden" name="' + settings.idFieldName + '" value="">').insertBefore($(this))
            }
        }
        $('<div class="'+settings.menuClass+' list-group"></div>').insertAfter($(this))
        
        $(this).on("keyup", searchQuery);
        $(this).on("focusout", hideThat)

        var xhr;
        var that = $(this)

        function hideThat() {
            if ($('.list-group-item' + ':hover').length) {
                return;
            }
            $(that).next('.' + settings.menuClass).hide();
        }
        
        function searchQuery(){
            
            var arr = [];
            $.each(settings.formParams,function(k,v){
                arr[k]=$(v).val()
            })
            var dyFormParams = $.extend({}, arr );
            var Data = $.extend({query: $(this).val()}, settings.dataParams, dyFormParams);
            
            if(!Data.query){
                $(this).next('.'+settings.menuClass).html('')    
                $(this).next('.'+settings.menuClass).hide()    
            }
            
            if(Data.query.length >= settings.minLength){
                
                if(xhr && xhr.readyState != 4){
                    xhr.abort();
                }
                
                xhr = $.ajax({
                    type: settings.method,
                    url: settings.url,
                    data: Data,
                    dataType: "json",
                    success: function( json ) {
                        var results = ''
                        $.each( json, function(i, j) {
                            results += '<a href="#" class="list-group-item" data-id="'+j[settings.id]+'" data-label="'+j[settings.label]+'">'+j[settings.label]+'</a>'
                        });
                        
                        $(that).next('.'+settings.menuClass).html(results)
                        $(that).next('.'+settings.menuClass).children().on("click", selectResult)
                        $(that).next('.'+settings.menuClass).show()
                        
                        if(json.length == 0) {
                            settings.handleEmpty();
                        }
                   
                    }
                })
            }
        }
        
        function selectResult(){
            $(that).val($(this).data('label'))
            if (settings.idField) {
                if ($(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').length !== 0) {
                    //use existed id field
                    $(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').val($(this).data('id'));
					//ensure we trigger the onchange so we can do stuff
					$(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').trigger('change');
                }
                else {
                    //use created id field
                    $(that).prev('input[name="' + settings.idFieldName + '"]').val($(this).data('id'));
					//ensure we trigger the onchange so we can do stuff
					$(that).prev('input[name="' + settings.idFieldName + '"]').trigger('change');
                }
            } else {
                var item = {};
                item.id = $(this).data('id');
                item.label= $(this).data('label');
                settings.select(item);
            }
            $(that).next('.' + settings.menuClass).hide();
            return false;
        }

        return this;
    };
 
}( jQuery ));