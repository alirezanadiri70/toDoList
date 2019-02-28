window.onload = function(){
        //variables
        var form = document.getElementById("form");
        var input = document.getElementsById("input");
        var btn = document.getElementById("btn");
        var list = document.getElementById("list");
        var id = 1;
        //button event listener
        btn.addEventListener("click",addToDoItem);


        // add todo item list
        function addToDoItem(){
            if(input.value === ""){
                alert("You must enter some value!");
            }
            else{
                if(list.style.borderTop === ""){
                    list.style.bordertop = "2px solid white";
                }
                var text = input.value;
                var item = `<li id="li-${id}">${text}
                            <input id= "box-${id}" class= "checkboxes" type="checkbox"
            }
        }

}