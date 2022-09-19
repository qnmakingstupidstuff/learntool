function coinShopUtil(){
    const jsonProcessor = document.getElementById("coinshop_output").value;
    const json_parse = JSON.parse(jsonProcessor);
    const count = 0;
    const coin_lim = document.getElementById('coin_lim').value;
    const json_stringfy = JSON.stringify(json_parse);
    const coin_value = document.getElementById("coin_value").value;
    if(coin_lim == "0"){
        free = json_stringfy.replaceAll('"PriceCoins":"0"', '"PriceCoins":"'+coin_value+'"');
    }
    else{
    for (i=0;i<coin_lim;i++){
    const k = ''+i;
    free = json_stringfy.replaceAll('"PriceCoins":"'+k+'"', '"PriceCoins":"'+coin_value+'"');
    }
    }  
    checked_json = JSON.parse(free);
    free_done = JSON.stringify(checked_json, null, 4); 
    coinshop_output.value = "";
    coinshop_output.value = free_done;
}
function coinshopOpen(){
    const open = document.getElementById("CoinShop");
    CoinShop.style.display = "block";
}
function closeExceptCoin(){
    const freeshop = document.getElementById("FreeShop");
    const gemshop = document.getElementById("GemShop");
    const coinshop = document.getElementById("CoinShop");
    const adsshop = document.getElementById("adsShop");
    const mintshop = document.getElementById("mintShop");
    gemshop.style.display = "none";
    mintshop.style.display = "none";
    freeshop.style.display = "none";
    adsshop.style.display = "none";
}