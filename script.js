var guest_name_array=[];
var display_guest;
function submit(){
    display_guest= document.getElementById("g_name").value;
    console.log(display_guest);
    guest_name_array.push(display_guest);
    length_of_array= guest_name_array.length;
    console.log(length_of_array);
    document.getElementById("g_name").value= "";
    for(var k=0; k<length_of_array; k++){
        document.getElementById("display_with_commas").innerHTML= guest_name_array;
        console.log(guest_name_array);
    }
}
function show(){
        remove_commas= guest_name_array.join("<br>");
        document.getElementById("display_without_commas").innerHTML= remove_commas;
        console.log(remove_commas);
}
function sort(){
    guest_name_array.sort().join("<br>");
    console.log(guest_name_array);
    var display_array_sorting=[];
    console.log(length_of_array);
    for (var k=0; k< length_of_array;k++ ){
        display_array_sorting.push("<h4>"+ guest_name_array[k]+"</h4>");
        console.log(display_array_sorting);
       var remove_commas= display_array_sorting.join(" ");
       console.log(remove_commas);
       document.getElementById("display_sorted_list").innerHTML= remove_commas;
    }
}
function search_name(){
    var searched_name= document.getElementById("search_name").value;
    document.getElementById("search_name").value= "";
    var remove_commas= guest_name_array.join("<br>");
    search_name= remove_commas.search(searched_name);
    console.log(search_name);
    document.getElementById("result_searched").innerHTML= search_name;
}


