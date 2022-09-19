function gemShopUtil(){
    const jsonProcessor = document.getElementById("gemshop_output").value;
    const json_parse = JSON.parse(jsonProcessor);
    const count = 0;
    const gem_lim = document.getElementById('gem_lim').value;
    const json_stringfy = JSON.stringify(json_parse);
    const gem_value = document.getElementById("gem_value").value;
    if(gem_lim == "0"){
        free = json_stringfy.replaceAll('"PriceGems":"0"', '"PriceGems":"'+gem_value+'"');
    }
    else{
    for (i=0;i<gem_lim;i++){
    const k = ''+i;
    free = json_stringfy.replaceAll('"PriceGems":"'+k+'"', '"PriceGems":"'+gem_value+'"');
    }
    }  
    checked_json = JSON.parse(free);
    free_done = JSON.stringify(checked_json, null, 4); 
    gemshop_output.value = "";
    gemshop_output.value = free_done;
}
function gemshopOpen(){
    const open = document.getElementById("GemShop");
    GemShop.style.display = "block";
}
function closeExceptGem(){
    const freeshop = document.getElementById("FreeShop");
    const gemshop = document.getElementById("GemShop");
    const coinshop = document.getElementById("CoinShop");
    const adsshop = document.getElementById("adsShop");
    const mintshop = document.getElementById("mintShop");
    freeshop.style.display = "none";
    mintshop.style.display = "none";
    coinshop.style.display = "none";
    adsshop.style.display = "none";
}