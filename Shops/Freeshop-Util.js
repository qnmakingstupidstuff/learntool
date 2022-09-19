function freeShopUtil(){
    const jsonProcessor = document.getElementById("freeshop_output").value;
    const json_parse = JSON.parse(jsonProcessor);
    const json_stringfy = JSON.stringify(json_parse);
    free = json_stringfy.replaceAll('"IsFree":false', '"IsFree":true');
    checked_json = JSON.parse(free);
    free_done = JSON.stringify(checked_json, null, 4);
    freeshop_output.value = "";
    freeshop_output.value = free_done;

}
function freeshopOpen(){
    const open = document.getElementById("FreeShop");
    FreeShop.style.display = "block";
}
function closeExceptFree(){
    const freeshop = document.getElementById("FreeShop");
    const gemshop = document.getElementById("GemShop");
    const coinshop = document.getElementById("CoinShop");
    const adsshop = document.getElementById("adsShop");
    const mintshop = document.getElementById("mintShop");
    gemshop.style.display = "none";
    mintshop.style.display = "none";
    coinshop.style.display = "none";
    adsshop.style.display = "none";
}