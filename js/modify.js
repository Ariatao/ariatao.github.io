window.onload = function(){ 
    const img_url = document.getElementById('page-header').style.backgroundImage.replace(/\"/g,"'")
    console.log(img_url)
    if(!img_url) return;
    var tab=document.querySelector('#post');
    var div = `<div class="top-img" style="background-image: ${img_url};"></div>`;
    console.log(div)
    tab.insertAdjacentHTML('afterbegin',div);	//插入元素内部的最后一个子节点之后
}