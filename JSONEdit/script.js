const json_handle = '';
function jsonFormatter(){
    const tab1 = document.getElementById("database1");
    const tab2 = document.getElementById("database2");
    const file_call = document.getElementById("input").value;
    tab2.style.display = "none";
    tab1.style.display = "block";
}
function jsonParser(){
    const tab1 = document.getElementById("database1");
    const tab2 = document.getElementById("database2");
    const file_call = document.getElementById("input").value;
    tab1.style.display = "none";
    tab2.style.display = "block";
}
function getData(){
    const file_call = document.getElementById("input").value;
    const json_input = JSON.parse(file_call);
    const json_handle = JSON.stringify(json_input);
    json_handle.value += json_input;
    if (json_input) {
        alert('Valid JSON');
    }
}
function stringfyData(){
    const file_call = document.getElementById("input").value;
    const json_input = JSON.parse(file_call);
    const json_handle = JSON.stringify(json_input);
    json_handle.value += json_input;
    const output = document.getElementById("output");
    output.value = json_handle;
}
function formatData(){
    const file_call = document.getElementById("input").value;
    const json_input = JSON.parse(file_call);
    const json_handle = JSON.stringify(json_input);
    json_handle.value += json_input;
    const output = document.getElementById("output");
    json_beauty = JSON.parse(json_handle);
    json_final = JSON.stringify(json_beauty, null, 4);
    output.value = json_final;
}
function takeDataforParse(){
    const file_call = document.getElementById("input").value;
    const json_input = JSON.parse(file_call);
    const json_handle = JSON.stringify(json_input);
    const json_parse = document.getElementById("json_parse");
    const json_ext = document.getElementById("json_ext");
    const json_animrig = document.getElementById("json_animrig");
    json_parse.value = "";
    json_ext.value = "";
    json_animrig.value = "";
    json_handle.value += json_input;
    const output = document.getElementById("output");
    json_beauty = JSON.parse(json_handle);
    json_final = JSON.stringify(json_beauty, null, 4);
    output.value = json_final;
    const json_access = json_input.objects;
    const json_count = Object.keys(json_access).length;
    const log_btg = parseInt(json_count)-1;
    for(i=0;i<json_count;i++){
        const json_value = json_access[i];
        if(json_value.aliases == undefined){
            json_parse.value += "";
        }
        else if(i == log_btg){
            json_parse.value += json_value.aliases;
        }
        else{
            json_parse.value += json_value.aliases + '\n';
        }
    }
    for(m=0;m<json_count;m++){
        const json_anim = json_access[m].objdata.PopAnim;
        if(json_anim == undefined){
            json_animrig.value += "";
        }
        else if(i == log_btg){
            json_animrig.value += json_anim;
        }
        else{
            json_animrig.value += json_anim + '\n';
        }
    }
    for(k=0;k<json_count;k++){
        const json_plant = json_access[k].objdata.AnimRigClass;
        const json_skip = json_access[k]["#comment"];
        if(json_plant == undefined){
            json_ext.value += "";
        }
        if(json_skip){
            json_ext.value += "";
        }
        else if(json_plant == "#comment"){
            json_ext.value += "";
        }
        else if(i == log_btg){
            json_ext.value += json_plant;
        }
        else{
            json_ext.value += json_plant + '\n';
        }
    }
    
}