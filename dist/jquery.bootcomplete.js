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
            dataParams : {},
            formParams: {},
            initQuery: false,
            queryMark: false
        }
        
        var settings = $.extend( {}, defaults, options );
        var queryInit = false;
        var that = $(this)
        var xhr;

        $(this).attr('autocomplete', 'off');
        $(this).wrap('<div class="' + settings.wrapperClass + '"></div>');
        if (settings.idField) {
            if ($(this).parent().parent().find('input[name="' + settings.idFieldName + '"]').length !== 0) {
            } else {
                $('<input type="hidden" name="' + settings.idFieldName + '" value="">').insertBefore($(this));
            }
        }
        $('<div class="'+settings.menuClass+' list-group"></div>').insertAfter($(this))
        
        $(this).on("keyup", searchQuery);
        $(this).on("focusout", hideThat);

        if (settings.initQuery) {
            $(this).on("click", initialQueryResult);
        }
        
        function hideThat() {
            if ($('.list-group-item' + ':hover').length) {
                return;
            }
            $(that).next('.' + settings.menuClass).hide();
        }
        
        function searchQuery(){
            
            var arr = [];
            $.each(settings.formParams, function (k, v) {
                arr[k] = $(v).val();
            });
            var dyFormParams = $.extend({}, arr );
            var Data = $.extend({ query: that.val() }, settings.dataParams, dyFormParams);
            
            if(!Data.query){
                that.next('.' + settings.menuClass).html('');
                that.next('.' + settings.menuClass).hide();
            }
            
            if (queryInit || Data.query.length >= settings.minLength) {
                
                if(xhr && xhr.readyState != 4){
                    xhr.abort();
                }
                
                xhr = $.ajax({
                    type: settings.method,
                    url: settings.url,
                    data: Data,
                    dataType: "json",
                    success: function( json ) {
                        prepareItens(json);                   
                    }
                });
            }
        }

        function prepareItens(json) {
            var results = '';
            var pattern = new RegExp("(.*)(" + that.val() + ")(.*)", "gi");
            $.each(json, function (i, j) {
                var label = settings.queryMark ? j.label.replace(pattern, "$1<span>$2</span>$3") : j.label;
                results += '<a href="#" class="list-group-item" data-id="' + j.id + '" data-label="' + j.label + '">' + label + '</a>'
            });

            that.next('.' + settings.menuClass).html(results);
            that.next('.' + settings.menuClass).children().on("click", selectResult);
            that.next('.' + settings.menuClass).show();
        }
        
        function selectResult(){
            $(that).val($(this).data('label'))
            if (settings.idField) {
                if ($(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').length !== 0) {
                    $(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').val($(this).data('id'));
					$(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').trigger('change');
                }
                else {
                    $(that).prev('input[name="' + settings.idFieldName + '"]').val($(this).data('id'));
					$(that).prev('input[name="' + settings.idFieldName + '"]').trigger('change');
                }
            }
            $(that).next('.' + settings.menuClass).hide();
            return false;
        }

        function initialQueryResult() {
            queryInit = that.val() === "";
            searchQuery();
            queryInit = false;
        }

        return this;
    };
 
}( jQuery ));
