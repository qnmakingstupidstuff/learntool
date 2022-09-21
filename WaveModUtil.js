function loadRipeData(){
    const div_disable = document.getElementById("menu-bar");
    const contain_mod = document.getElementById("contain-data");
    const mod_open = document.getElementById("mod-hide");
    const server = document.getElementById("customServer").value;
    var bar  = '';
    mod_open.style.display = "block";
    div_disable.style.display = "none";
    const input_data = document.getElementById("input-data").value;
    const dataArray = input_data.split(",\n");
    const key_length = parseInt(dataArray.length);
    const missing_key ="'missing.png'";
    for(let i = 0;i<key_length;i++){
        bar += '<img src="'+server+''+dataArray[i]+'.png" draggable="false" id="'+dataArray[i]+'" onclick="selectSprite(event);placeFunction()" />';
    }
    contain_mod.innerHTML = bar;
}