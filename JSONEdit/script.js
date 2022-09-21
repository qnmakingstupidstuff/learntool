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
	const json_fix1 = file_call.replaceAll("\n		{},\n		","");
	const json_fix2 = json_fix1.replaceAll('\n		{\n			"######## Baseline Zombosses #######": 0\n		},\n		',"");
	const json_fix3 = json_fix2.replaceAll('\n		{\n			"######## Modern Zombosses #######": 0\n		},\n		',"");
	const json_fix4 = json_fix3.replaceAll('\n		{\n			"#comment": "####### Heian Zombies #######"\n		},\n		',"");
	const json_fix5 = json_fix4.replaceAll("\n		{},\n		","");
	const json_fix6 = json_fix5.replaceAll('{},',"");
	const json_fix7 = json_fix6.replaceAll('        {\n            "######## Baseline Zombosses #######": 0\n        },\n',"");
	const json_fix8 = json_fix7.replaceAll('        {\n            "######## Modern Zombosses #######": 0\n        },\n',"");
	const json_fix9= json_fix8.replaceAll('        {\n            "comment": "Heroes LOD Zombies"\n        },\n',"");
	console.log(json_fix9);
    const json_input = JSON.parse(json_fix9);
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
