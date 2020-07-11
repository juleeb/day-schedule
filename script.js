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

$("#clear").click(function() {
    localStorage.clear();
    document.querySelectorAll(".description").value = "";
});

});