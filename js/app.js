//location

let products_array = [
    {id:1 , product_name:"Ps5" , price:500 , number:1 ,src:".//img/ps5.jpg",count : 10},
    {id:2 , product_name:"Iphone 6s" , price:100 , number:1, src:".//img/iphone6s.jpg",count : 7},
    {id:3 , product_name:"Samsung s23" , price:900 , number:1, src:".//img/s23.jpg",count : 15},
    {id:4 , product_name:"Pen" , price:1 , number:1, src:".//img/pen.jpg",count : 45},
    {id:5 , product_name:"Cup" , price:5 , number:1, src:".//img/cup.jpg",count : 55},
    {id:6 , product_name:"Board" , price:68 , number:1, src:".//img/board.jpg",count : 5},
]
let shopping_cart = []
//variables
let shopping_cart_box_container = document.querySelector('.shopping_cart_box_container')
let pay_box_container = document.querySelector('.shopping_cart_box_container')

let product_box_container = document.querySelector('.product_box_container')
let shopping_cart_box = document.querySelector('.shopping_cart_box')
let pay_info_box = document.querySelector('.pay_info_box')
let show_final_price = document.querySelector('.show_final_price')
let anination_div = document.querySelector('.anination_div')
anination_div.style.display = "none"
//load



function load_function() {





    var saved_cart = JSON.parse(localStorage.getItem('shopping_cart_array'))
    if(saved_cart) {
        console.log(saved_cart);
        if(saved_cart.length>0) {
            console.log("data sent");
            
            appending_shopping_cart(saved_cart)
            
        }

    }
    
    add_product()
}
// check online status

//add
function add_product () {
    products_array.forEach(product => {
        
        //create
        var product_box = document.createElement('div')
        var product_box_img_container = document.createElement('div')
        var product_box_img = document.createElement('img')
        var product_box_info_container = document.createElement('div')
        var product_box_p = document.createElement('p')
        var product_box_input = document.createElement('input')
        var add_box_container = document.createElement('div')
        var add_btn = document.createElement('button')
        var add_btn_span = document.createElement('span')
        var add_btn_price = document.createElement('span')
        //fill
         product_box_img.src = product.src
         product_box_p.innerHTML = product.product_name
         add_btn_price.innerHTML ="price : " + product.price + "$"
         add_btn_span.innerHTML = "add"
        //input
         product_box_input.type = "number"
         product_box_input.min = "1"
         product_box_input.max = product.count
         product_box_input.step = "1"
         product_box_input.value = "1"
         //add to div
         product_box_img_container.append(product_box_img)
         add_btn.append(add_btn_span)
         add_box_container.append(add_btn,product_box_input)
         product_box_info_container.append(add_btn_price,add_box_container)
         product_box .append(product_box_img_container,product_box_p,product_box_info_container)

        //class
        product_box.className = "product_box"
        product_box_img_container.className = "product_box_img_container"
        product_box_img.className = "product_box_img"
        product_box_p.className = "product_box_p"
        product_box_input.className = "product_box_input"
        product_box_info_container.className = "product_box_info_container"
        add_box_container.className = "add_box_container"
        add_btn.className = "add_btn"
        add_btn_span.className = "add_btn_span"
        add_btn_price.className = "add_btn_price"
        //append to dom
        product_box_container.append(product_box)


        

        //onclick
        add_btn.addEventListener('click',function(){
            add_btn_f(product,product_box_input.value,product_box_input)
        })

        //in prodoct more
        product_box_img_container.addEventListener('click' , function() {
            more_information(product)

        })


    });
    
}


//in prodoct more
function more_information(product) {
    let index = products_array.findIndex(function(indexx) {
        return indexx === product
    })

    info_id = index+1

    console.log(info_id);
    console.log(location.search);
    location.href = `.//info/info.html?id=${info_id}`
    
}


//add btn function
function add_btn_f(product,product_input_value,product_box_input){
    //step-1 (check basket)
    for (var a = 0;a<shopping_cart.length;a++) {
        if(shopping_cart[a].product_name === product.product_name) {
            
            product_box_input.value = 1
            return
        }
    }
    //step 0 
    product_box_input.value = 1

    //step 1

    var append_product = product
    console.log(append_product);
    //step 2
    
    
    shopping_cart.push(append_product)
    
    let changed_product_index = shopping_cart.findIndex(function(index){
        return index ===append_product
    })
    shopping_cart[changed_product_index].number = product_input_value
    //generate
    generate_shopping_cart_id()
    appending_shopping_cart()

}
//generate shopping cart
function generate_shopping_cart_id () {
    console.log("in");
    for (var i =0 ; i<shopping_cart.length ; i++) {
        shopping_cart[i].id = i+1
    }
    console.log(shopping_cart);

    
}
//////////////////////////////////////////////////   SHOPPING CART   //////////////////////////////////////////////////////////////////

function appending_shopping_cart(saved_cart) {
if(saved_cart) {
    console.log("revale");
    
    shopping_cart = saved_cart
    
    console.log(shopping_cart);
    console.log(saved_cart);
    
}
else{
    console.log("oh shit");
    
}
    shopping_cart_box.innerHTML = ""
    shopping_cart.forEach(function(cart_item){
        ///creating
        var added_product_div = document.createElement('div') //
        var added_product_img_div = document.createElement('div') //
        var added_product_img = document.createElement('img') //
        var added_product_info = document.createElement('div')   //
        var added_product_span_name = document.createElement('span') //
        var aded_product_price_div = document.createElement('div')
        var added_product_span_price = document.createElement('span')//
        var added_product_btns_container = document.createElement('div')//
        var added_product_dell_btn = document.createElement('button')//
        var added_product_dell_btn_text = document.createElement('span')//
        var added_product_input = document.createElement('input')//
        //input
        added_product_input.type = "number"
        added_product_input.min = "1"
        added_product_input.max = cart_item.count
        added_product_input.step = "1"
        added_product_input.value = cart_item.number
        //filling
        added_product_dell_btn_text.innerHTML = "remove"
        added_product_span_name.innerHTML = cart_item.product_name
        added_product_span_price.innerHTML = "price: "+ (cart_item.price)*cart_item.number +"$"
        added_product_img.src = cart_item.src
        added_product_img_div.append(added_product_img)
        added_product_info.append(added_product_img_div,added_product_span_name)
        aded_product_price_div.append(added_product_span_price)
        added_product_dell_btn.append(added_product_dell_btn_text)
        added_product_btns_container.append(added_product_dell_btn,added_product_input)
        added_product_div.append(added_product_info,aded_product_price_div,added_product_btns_container)

        //class
        added_product_img.className = "added_product_img"
        added_product_img_div.className = "added_product_img_div"
        added_product_info.className = "added_product_info"
        aded_product_price_div.className = "aded_product_price_div"
        added_product_btns_container.className = "added_product_btns_container"
        added_product_div.className = "added_product_div"

        //finall append 
        shopping_cart_box.append(added_product_div)

        //change on input 
        added_product_input.addEventListener('input',function(){
            added_product_input_f(cart_item.price,added_product_input,added_product_span_price,cart_item)
        })
        //dell item
        added_product_dell_btn.addEventListener('click',function() {
            dell_function(added_product_dell_btn,cart_item)

        })
    })
    save_data (shopping_cart)

    //pay calculate
    pay_calculator()

}

//change input function 
function added_product_input_f (cart_item_price,added_product_input,added_product_span_price,cart_item) {

    added_product_span_price.innerHTML = "price: "+ (cart_item_price)*added_product_input.value +"$"
    //generate shopping cart
    let added_product_index = shopping_cart.findIndex(function(index){
        return index === cart_item
    })    

    for (var i = 0;i<shopping_cart.length;i++) {
        if(added_product_index==i) {
            shopping_cart[i].number = added_product_input.value
        }
    }

    pay_calculator()
    console.log(shopping_cart);
    
}

//dell function
function dell_function(added_product_dell_btn,cart_item) {
    let dell_item = added_product_dell_btn.parentElement.parentElement
    dell_item.remove()
    //fine index
    let dell_product_index = shopping_cart.findIndex(function(index){
        return index === cart_item
    })
    console.log(dell_product_index);
    shopping_cart.splice(dell_product_index,1)
    generate_shopping_cart_id()
    pay_calculator()
    console.log(shopping_cart)
    
}


////////////////////////////////////////   pay calculature   //////////////////////////////////////////////////////////////

function pay_calculator() {

    //nulling               step 0
    show_final_price.innerHTML = ""
    pay_info_box.innerHTML = ""
    //pay box               step 1
    var pay_info_box_text = document.createElement('span')
    pay_info_box_text.innerHTML = "Pay Box"
    pay_info_box.append(pay_info_box_text)
    

    //calc and create box   step 2
    //post pay
    var all_products_pay = 0
    var final_price = 0
    var post_pay = 0
    for (var i = 0; i<shopping_cart.length ; i++) {
        all_products_pay += (shopping_cart[i].number) * (shopping_cart[i].price)
    }
    if(all_products_pay<60) {
        post_pay = 5
        final_price = all_products_pay + post_pay
    }
    else{
        post_pay = 0
        final_price = all_products_pay
    }
    //show_final_price
    //create
    let pay_box = document.createElement('div')
    let pay_box_text = document.createElement('p')
    let pay_box_btn = document.createElement('button')
    let pay_price_box = document.createElement('div')
    let post_pay_span = document.createElement('span')
    let products_pay_span = document.createElement('span')
    //fill
    pay_box_text.innerHTML = "Amount Payable : " + final_price + "$"
    pay_box_btn.innerHTML = "pay"
    post_pay_span.innerHTML = "post : " +post_pay + "$"
    products_pay_span.innerHTML = "products "+ all_products_pay + "$"
    pay_price_box.append(post_pay_span,products_pay_span)
    pay_box.append(pay_box_text,pay_price_box,pay_box_btn)
    //class
    pay_box_text.className = "pay_box_text"
    pay_box_btn.className = "pay_box_btn"
    pay_box.className = "pay_box"
    post_pay_span.className = "post_pay_span"
    products_pay_span.className = "products_pay_span"    
    pay_price_box.className = "pay_price_box"
    //final append
    show_final_price.append(pay_box)

    //step -1  checking cart

    if(shopping_cart.length === 0) {
        pay_info_box_text.remove()
        pay_box.remove()
            
    }

    //save
    save_data (shopping_cart)

}




//add event listener
window.addEventListener('load',load_function)


//save data
function save_data () {
    localStorage.setItem('shopping_cart_array',JSON.stringify(shopping_cart))
}
console.log("okkkkkkkkkkkkkk");

console.log(location.pathname)


//custom scroll bar
let scroll_div = document.querySelector('.scroll_div')
window.addEventListener('scroll' , function() {
    let scrollTop = window.scrollY
    let documentHeight = document.body.clientHeight
    let windowHeight = window.innerHeight

    let scroll_percent = scrollTop / (documentHeight-windowHeight) * 100
    let scroll_percent_rounded = Math.round(scroll_percent)
    scroll_div.style.width = scroll_percent_rounded + '%'
})