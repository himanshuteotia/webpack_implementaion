import msg from './Message';
import $ from 'jQuery';


$(function(){
    $("#ShowBtn").on("click",function(){
        var o = new msg();
        o.show();
    })
})
