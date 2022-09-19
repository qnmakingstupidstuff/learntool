function submittingData(){
    const shop = document.getElementById("products-pick").selectedIndex;
    switch (shop){
        case 0:
            freeshopOpen();
            closeExceptFree();
            break;
        case 1:
            gemshopOpen();
            closeExceptGem();
            break;
        case 2:
            coinshopOpen();
            closeExceptCoin();
            break;
        case 3: 
            adsshopOpen();
            closeExceptAds();
            break;
        case 4:
            mintshopOpen();
            closeExceptMint();
            break;
    }
}