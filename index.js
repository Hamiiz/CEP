var serv_carousel = $('#carousel')
var carousel = new bootstrap.Carousel(serv_carousel, {
    wrap: true,
    pause:"hover"
  })
// Navbar button Listenerss
$('.navbar-toggler').click(function(){
    $('.hr').toggleClass("hr-pressed")
    $('.phone-container').slideDown("slow").slideDown().slideDown()
})


// #card Hover listeners
$(".card").hover(function(e){
    var class_lists = e.currentTarget.classList
    if (class_lists[0] === "pricecard"){
        var button_child = e.currentTarget.children[1].children[2].classList
        if (button_child[0] === "get-started1"){
            $(this).toggleClass('hovers')
            $('.'+button_child[0]).toggleClass('get-started-hover')
        }
        else {
            $(this).toggleClass('hovers')
            $('.'+button_child[0]).toggleClass('get-started-hover')        }
    }
    else{
        $(this).toggleClass('hovers')
        
    }
})
 function str2num(strs){
    var num = [0,1,2,3,4,5,6,7,8,9]
    var true_width = new Array();
    for(var i=0;i<= (strs.length-1);i++){
        
        var nums = Number(strs[i])
        if (num.includes(nums)){
            true_width.push(nums)
        }
        else{
            if (strs[i] === "."){
                true_width.push(strs[i])            }
            else{
                break
            }
        }
        
    }
    true_width = true_width.join("")

    return true_width
}

