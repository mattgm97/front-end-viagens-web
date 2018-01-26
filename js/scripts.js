$('input:radio').click(function(e){
    if (e.ctrlKey) {
        $(this).prop('checked', false);
    }
});

jQuery.fn.extend({
    disable: function(state) {
        return this.each(function() {
            this.disabled = state;
        });
    }
});


$('#idaonly').click(function() {
    if($(this).is(':checked')) {$('#volta').disable(true);}
    else {
        $('#volta').disable(false);
    }
 });

 $('#idaevolta').click(function() {
    if($(this).is(':checked')) {$('#volta').disable(false);}
    else {
        $('#volta').disable(true);
    }
 });