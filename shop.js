      
        
        $(document).ready(function(){     //When the document is ready, there will be a function

$(".filter-button").click(function(){  //(class from "data-filter" section).when clicked runs a function
    var value = $(this).attr('data-filter'); //the variable is set to $(this) aka the button element. However, that is not useful enough so we add .attr("data-filter") to specify.
    
    if(value == "all")
    {
        
        $('.filter').show('1000'); //if all is selected any image with a class of filter will show. (1000 =1sec transition)
    }
    else
    {
        $(".filter").not('.'+value).hide('200');  //.not means if the variable is not "all" it will be hidden
        $('.filter').filter('.'+value).show('200');//.filter means it will find the class that match the attribute and display them.
    }
});

if ($(".filter-button").removeClass("active")) { //**??Need to research this section further to get a better understanding**/
$(this).removeClass("active"); 
}
$(this).addClass("active");

});