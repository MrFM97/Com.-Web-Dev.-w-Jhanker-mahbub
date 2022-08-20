// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
/* const element = document.getElementsByTagName("h2");
for (const h2 of element) {
    h2.style.color = 'lightblue';
} */

// ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
/* document.getElementById("bags").style.backgroundColor = "tomato"; */

// card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
/* document.getElementById('shoes').style.borderRadius = '30px';
document.getElementById('bags').style.borderRadius = '30px'; */

// কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
/* const funButton = document.querySelector(".targetBtn");
funButton.addEventListener('click', pandaButton);
function pandaButton() {
    console.log('button clicked');
} */


/* এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।  */
/* const buttons = document.getElementsByClassName('pbutton');
for (const pbutton of buttons) {
    pbutton.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
} */
/* একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।  */
/* document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('sbutton');
    if(text === 'email'){
        deleteButton.removeAttribute('disabled');
    }
        else{
            deleteButton.setAttribute('disabled', true);
        }
    
}) */

document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('sbutton');
    (text === 'email') ? deleteButton.removeAttribute('disabled') : deleteButton.setAttribute('disabled', true);
})

/* একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।  */
document.querySelectorAll('#menter').addEventListener('mouseenter', mouseEnter);
function mouseEnter() {
    document.getElementById('menter').style.backgroundColor = 'red';
}