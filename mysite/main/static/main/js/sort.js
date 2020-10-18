function count(){
    var summ=0;

    var count_arr=document.getElementsByClassName("block__box_price");
    for( var i=0; i<count_arr.length;i++){
     summ+=Number(count_arr[i].textContent)
    }
    document.getElementById("manger__result_expenses_sum").textContent="₴" + String(summ);
}

 function sort(){
     var checkBox = document.getElementById("checkbox1");

//divs[j - 1].children[0].children[2].children[0].textContent
     if(checkBox.checked == true){

   const items = document.getElementById("block_");
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (Number(items.children[i].children[0].children[2].children[0].textContent) > Number(items.children[j].children[0].children[2].children[0].textContent)) {

                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
     }
     else{

     const items = document.getElementById("block_");
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (Number(items.children[i].children[0].children[2].children[0].textContent) < Number(items.children[j].children[0].children[2].children[0].textContent)) {

                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }

     }

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

 }

function clear_type(){
    document.getElementById("nav__type_").value="";
      divs=document.getElementsByClassName("block__box");
  for (i = 0; i < divs.length; i++) {
      divs[i].style.display = "";
    }

}
function search(){
  input = document.getElementById("nav__type_");
  filter = input.value.toUpperCase();
  divs=document.getElementsByClassName("block__box");
  for (i = 0; i < divs.length; i++) {
    a = divs[i].getElementsByClassName("block__box_title")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      divs[i].style.display = "";
    } else {
      divs[i].style.display = "none";
    }
  }
}