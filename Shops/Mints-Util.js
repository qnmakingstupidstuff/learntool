function mintShopUtil(){
    const jsonProcessor = document.getElementById("mintshop_output").value;
    const json_parse = JSON.parse(jsonProcessor);
    const count = 0;
    const mint_lim = document.getElementById('mint_lim').value;
    const json_stringfy = JSON.stringify(json_parse);
    const mint_value = document.getElementById("mint_value").value;
    if(mint_lim == "0"){
        free = json_stringfy.replaceAll('"PriceMints":"0"', '"PriceMints":"'+coin_value+'"');
    }
    else{
    for (i=0;i<mint_lim;i++){
    const k = ''+i;
    free = json_stringfy.replaceAll('"PriceMints":"'+k+'"', '"PriceMints":"'+mint_value+'"');
    }
    }  
    checked_json = JSON.parse(free);
    free_done = JSON.stringify(checked_json, null, 4); 
    mintshop_output.value = "";
    mintshop_output.value = free_done;
}
function mintshopOpen(){
    const open = document.getElementById("mintShop");
    mintShop.style.display = "block";
}
function closeExceptMint(){
    const freeshop = document.getElementById("FreeShop");
    const gemshop = document.getElementById("GemShop");
    const coinshop = document.getElementById("CoinShop");
    const adsshop = document.getElementById("adsShop");
    const mintshop = document.getElementById("mintShop");
    freeshop.style.display = "none";
    gemshop.style.display = "none";
    coinshop.style.display = "none";
    adsshop.style.display = "none";
}