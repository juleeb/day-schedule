$(document).ready(function() {

//function for time and date showing using Moment.js
function time() {
	$('#currentDay').text(moment().format('LLLL'));
};
const date = new Date();
const hour = date.getHours();
const todo = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : {};

//generate time blocks dynamically when page loads
function generateBlocks(){
    for(let i = 9; i<18 ;i++){
        $(".container").append(`
        <div class="row time-block">
          <h2 class="hour col-2">${i<12 ? i+":00AM" : i>12? i-12+":00PM" : "12:00PM"}</h2>
          <textarea class="description col-8 ${i>hour ? "future" : i<hour ? "past" : "present"}" type="text">${todo[i] || ""}</textarea>
          <button id="${i}" class="saveBtn col-2">Save</button>
      </div>`)
    }
}

//click event listener for saveBtns to store todo in localStorage
$(".container").on("click", ".saveBtn", function(){
    const key = $(this).attr("id");
    const value = $(this).siblings("textarea").val().trim();
    todo[key] = value;
    localStorage.setItem("todo", JSON.stringify(todo))
})

generateBlocks()
setInterval(time, 1000);


// var inputTxt2 = document.querySelector('#schedule2');
// inputTxt2.value = localStorage.getItem('content2');
// $('#save2').on('click', update);
// function update() {
//     localStorage.setItem('content2', inputTxt2.value);
// };

// var inputTxt3 = document.querySelector('#schedule3');
// inputTxt3.value = localStorage.getItem('content3');
// $('#save3').on('click', update);
// function update() {
//     localStorage.setItem('content3', inputTxt3.value);
// };

// var inputTxt4 = document.querySelector('#schedule4');
// inputTxt4.value = localStorage.getItem('content4');
// $('#save4').on('click', update);
// function update() {
//     localStorage.setItem('content4', inputTxt4.value);
// };

// var inputTxt5 = document.querySelector('#schedule5');
// inputTxt5.value = localStorage.getItem('content5');
// $('#save5').on('click', update);
// function update() {
//     localStorage.setItem('content5', inputTxt5.value);
// };

// //does not store at all
// var inputTxt6 = document.querySelector('#schedule6');
// inputTxt6.value = localStorage.getItem('content6');
// $('#save6').on('click', update);
// function update() {
//     localStorage.setItem('content6', inputTxt6.value);
// };

// var inputTxt7 = document.querySelector('#schedule7');
// inputTxt7.value = localStorage.getItem('content7');
// $('#save7').on('click', update);
// function update() {
//     localStorage.setItem('content7', inputTxt7.value);
// };

// var inputTxt8 = document.querySelector('#schedule8');
// inputTxt8.value = localStorage.getItem('content8');
// $('#save8').on('click', update);
// function update() {
//     localStorage.setItem('content8', inputTxt8.value);
// };

// //when it refresh does not store/show on browser
// var inputTxt9 = document.querySelector('#schedule9');
// inputTxt6.value = localStorage.getItem('content9');
// $('#save9').on('click', update);
// function update() {
//     localStorage.setItem('content9', inputTxt9.value);
// };



// var currentHour = moment().format('H');
// console.log(currentHour);



$("#clear").click(function() {
    localStorage.clear();
    document.querySelector(".description").value = "";
});

});