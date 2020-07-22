addEventListener('load', function(){

  // 要素の選択
  const pullDownButton = document.getElementById("lists");
  const pullDownParents = document.getElementById("pull-down");
  const pullDownChild = document.querySelectorAll(".pull-down-list");
  const currentList = document.getElementById("current-list");

  // イベント発火　カーソルを乗せる
  pullDownButton.addEventListener("mouseover", function(){
    this.setAttribute("style", "background-color: #FFBEDA;");
  })
  // イベント発火　カーソルアウト
  pullDownButton.addEventListener("mouseout", function(){
    this.removeAttribute("style", "background-color: #FFBEDA;");
  })
  // イベント発火　id:lists取得→クリック→
  pullDownButton.addEventListener("click", function(){
    if (pullDownParents.getAttribute("style") == "display: block;"){
      // pullDownParentsにdisplay:block;が付与されている場合（つまり表示されている時）実行される
      pullDownParents.removeAttribute("style", "display: block;");
    } else {
      // pullDownParentsにdisplay:block;が付与されていない場合（つまり非表示の時）実行される
      pullDownParents.setAttribute("style", "display: block;");
    }
  })

  // コースの値を取得し表示させる
  pullDownChild.forEach(function(list){
    list.addEventListener("click", function(){
      value = list.innerHTML;
      currentList.innerHTML = value;
      if (pullDownParents.getAttribute("style") == "display: block;"){
        // pullDownParentsにdisplay:block;が付与されている場合（つまり表示されている時）実行される
        pullDownParents.removeAttribute("style", "display: block;");
      } else {
        // pullDownParentsにdisplay:block;が付与されていない場合（つまり非表示の時）実行される
        pullDownParents.setAttribute("style", "display: block;");
      }
    })
  })
})