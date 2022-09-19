function adsShopUtil(){
    const jsonProcessor = document.getElementById("adsshop_output").value;
    const json_parse = JSON.parse(jsonProcessor);
    const json_stringfy = JSON.stringify(json_parse);
    free = json_stringfy.replaceAll('"IsAdPlacement":false', '"IsAdPlacement":true');
    checked_json = JSON.parse(free);
    free_done = JSON.stringify(checked_json, null, 4);
    adsshop_output.value = "";
    adsshop_output.value = free_done;

}
function adsshopOpen(){
    const open = document.getElementById("adsShop");
    adsShop.style.display = "block";
}
function closeExceptAds(){
    const freeshop = document.getElementById("FreeShop");
    const gemshop = document.getElementById("GemShop");
    const coinshop = document.getElementById("CoinShop");
    const adsshop = document.getElementById("adsShop");
    const mintshop = document.getElementById("mintShop");
    gemshop.style.display = "none";
    mintshop.style.display = "none";
    freeshop.style.display = "none";
    coinshop.style.display = "none";
}