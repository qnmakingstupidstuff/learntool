function downloadAliases(){
    var text = document.getElementById("json_parse").value;
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "Aliases.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
function downloadAnimRig(){
    var text = document.getElementById("json_ext").value;
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "AnimRig.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
function downloadPopAnim(){
    var text = document.getElementById("json_animrig").value;
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "PopAnim.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
function download(){
    var text = document.getElementById("output").value;
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "Modified.json";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}