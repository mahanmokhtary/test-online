let products_array = [
    {id:1 , product_name:"Ps5" , price:500 , more_info : "The PlayStation 5's main hardware features include a solid-state drive customized for high-speed data streaming to enable significant improvements in storage performance, an AMD GPU capable of 4K resolution display at up to 120 frames per second, hardware-accelerated ray tracing for realistic lighting and reflections, and the Tempest Engine for hardware-accelerated 3D audio effects. Other features include the DualSense controller with haptic feedback, backward compatibility with the majority of PlayStation 4 and PlayStation VR games, and the PlayStation VR2 headset." ,src: [".//imgbar/ps5/ps5_1.jpg",".//imgbar/ps5/ps5_2.jpg",".//imgbar/ps5/ps5_3.jpg"]  },
    {id:2 , product_name:"Iphone 6s" , price:100 , src:".//img/iphone6s.jpg",more_info : "The iPhone 6s is nearly identical in design to the iPhone 6. In response to the bendgate design flaws of the previous model, changes were made to improve the durability of the chassis: the 6s was constructed from a stronger, 7000 series aluminum alloy,[24] key points in the rear casing were strengthened and reinforced, and touchscreen integrated circuits were re-located to the display assembly.[24] Alongside the existing gold, silver, and space gray options, a new rose gold color option was also introduced" ,src: [".//imgbar/iphone_6s/iphone_6s_1.jpg",".//imgbar/iphone_6s/iphone_6s_2.jpg",".//imgbar/iphone_6s/iphone_6s_3.jpg"]},
    {id:3 , product_name:"Samsung s23" , price:900 , src:".//img/s23.jpg", more_info : "The Samsung Galaxy S23 is a series of high-end Android-based smartphones developed, manufactured, and marketed by Samsung Electronics as part of its flagship Galaxy S series. The phones were announced and unveiled on 1 February 2023 at the Galaxy Unpacked in-person event and were released on 17 February 2023.[4][5][6][7][8] They collectively serve as the successor to the Samsung Galaxy S22 series and the S21 FE. It was succeeded by the Samsung Galaxy S24 series.",src: [".//imgbar/s23/s23_1.jpg",".//imgbar/s23/s23_2.jpg"]},
    {id:4 , product_name:"Pen" , price:1 , src:".//img/pen.jpg",more_info : "For other uses, see Pen (disambiguation), Pens (disambiguation), and PEN (disambiguation). For the comic, see Ink Pen",src: [".//imgbar/pen/pen_1.jpg",".//imgbar/pen/pen_2.jpg"] },
    {id:5 , product_name:"Cup" , price:5 , src:".//img/cup.jpg", more_info : "Cups of different styles may be used for different types of liquids or other foodstuffs (e.g. teacups and measuring cups), in different situations e.g. at water stations or in ceremonies and rituals",src: [".//imgbar/cup/cup.jpg"]},
    {id:6 , product_name:"Board" , price:68 , src:".//img/board.jpg", more_info : "This article is about the 1889 Vincent van Gogh painting. For the similar 1888 Van Gogh painting, see Starry Night Over the Rhône. For the 1850 painting by Jean François Millet, see Starry Night (Millet)",src: [".//imgbar/board/board.jpg"]},
]
let container = document.querySelector('.container')
let location_params = new URLSearchParams(location.search)
let location_params_ID = location_params.get('id')
console.log(location_params_ID);


container.insertAdjacentHTML('afterbegin','<div class="imgbox"><button class="previous_img"><span class="previous_img_svg"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2409 7.22005V16.7901C20.2409 18.7501 18.111 19.98 16.411 19L12.261 16.61L8.11094 14.21C6.41094 13.23 6.41094 10.78 8.11094 9.80004L12.261 7.40004L16.411 5.01006C18.111 4.03006 20.2409 5.25005 20.2409 7.22005Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path opacity="0.4" d="M3.75977 18.1798V5.81982" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button><div class="imgdiv"></div><button class="next_img"><span class="next_img_svg"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75977 7.22005V16.7901C3.75977 18.7501 5.88975 19.98 7.58975 19L11.7397 16.61L15.8898 14.21C17.5898 13.23 17.5898 10.78 15.8898 9.80004L11.7397 7.40004L7.58975 5.01006C5.88975 4.03006 3.75977 5.25005 3.75977 7.22005Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path opacity="0.4" d="M20.2402 18.1798V5.81982" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button></div>')
let imgdiv = document.querySelector('.imgdiv')
let imgbox = document.querySelector('.imgbox')
let previous_img = document.querySelector('.previous_img')
let next_img = document.querySelector('.next_img')
let description_text = document.querySelector('.description_text')

function back_func () {
    history.back()
}


description_text.innerHTML = products_array[location_params_ID-1].more_info
let back_container = document.querySelector('.back_container')
let back_btn = document.querySelector('.back_btn')

var index = 0
imgdiv.style.backgroundImage = `url('${products_array[location_params_ID-1].src[index]}')`

function previous_img_func() {
    index-=1
    if(index<0) {
        index = products_array[location_params_ID-1].src.length-1
    }
    
    imgdiv.style.animation = 'none'
    void imgdiv.offsetWidth
    imgdiv.style.animation = 'load1_animation 1s'
    setTimeout(function(){
        
        imgdiv.style.animation = 'load2_animation 1s'

    },900)
    setTimeout (function() {
        imgdiv.style.backgroundImage = `url('${products_array[location_params_ID-1].src[index]}')`
    
    },1000)
    
}
function next_img_func () {
    index+=1
    if(index>=products_array[location_params_ID-1].src.length){
        index = 0
    }

    imgdiv.style.animation = 'none'
    void imgdiv.offsetWidth
    imgdiv.style.animation = 'load1_animation 1s'

    setTimeout(function(){
        
        imgdiv.style.animation = 'load2_animation 1s'

    },900)
    setTimeout (function() {
        imgdiv.style.backgroundImage = `url('${products_array[location_params_ID-1].src[index]}')`
    
    },1000)

    
}
console.log(imgdiv);

//event listeners
back_btn.addEventListener('click',back_func)
previous_img.addEventListener('click',previous_img_func)
next_img.addEventListener('click',next_img_func)