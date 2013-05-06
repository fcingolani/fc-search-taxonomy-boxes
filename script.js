jQuery(function ($){

	function filter_lis(){
        var $this = $(this);

        $this
        	.parents('.categorydiv')
        	.find('.categorychecklist li')
        	.each(check_li($this.val()));
    }

    function check_li(value){
        var regexp	= value
        			? new RegExp('.*'+value.match(/\w+/g).join('|')+'.*', "i")
        			: null;

        return function (){
            var $this = $(this);
            
            if( !regexp || regexp.test($this.find('label').text()) ){
                $this.show();
            }else{
                $this.hide();
            }
        }
    }

    var search_box = '<p>\
    					<input type="text" class="search" placeholder="'+fcstbL10n.filter+'">\
    				  </p>'; 

    $('.categorydiv [id$=-all]')
        .prepend(search_box)
        .find('.search')
            .keyup(filter_lis);
    
});