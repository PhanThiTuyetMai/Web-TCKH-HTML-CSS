let colors=['#FF7F50','#FF4500','#FF8C00','#00FF00','#00FFFF','#00BFFF','#FF00FF','#FF69B4'];
function init(){
    let subjects = document.querySelectorAll(".book p.sbook");
    for(let s of subjects){
        let idx= parseInt(Math.random()*colors.length);
        s.style.backgroundColor = colors[idx];
    }
}

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('#backtop').fadeIn(); // nếu như scrollTop khác 0 thì fade in
        }else{
            $('#backtop').fadeOut(); // nguoc lai fade out
        }
    });
    $('#backtop').click(function(){
        $('html,body').animate({scrollTop:0}, 700);
    })
});
var index=0; // tạo chỉ số 
changebia = function(){
    var imgs = ["ảnh/tb.jpg" , "ảnh/tb2.jpg" ,"ảnh/tb3.jpg"]; // mảng ảnh
    document.getElementById('doibia').src = imgs[index]; // lấy ảnh theo chỉ số
    index++;
    if(index==3){
        index=0;
    }  // nếu ảnh chạy xong hết thì về lại cái đầu tiên
}
setInterval(changebia,1000); // sau 1000 giay thi chay lai

$(document).ready(function(){
    $(`.accodion-item.active .accodion-body`).slideDown();
    $(`.accodion-hearder`).click(function(){
        $(this).parent().toggleClass('active'); // hoán đổi active từng phần tử (thằng này active rồi thì bấm vào lần nữa thì nó sẽ ẩn active đi ) dùng để hiệu ứng mũi tên
        $(this).parent().children(`.accodion-body`).slideToggle(); // dùng để hiện menu con ra ngoài
    })
})