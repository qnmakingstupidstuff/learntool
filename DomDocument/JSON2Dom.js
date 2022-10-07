//Upload File
document.getElementById('json_input').addEventListener('change',function(){
    var fr = new FileReader();
    var json_take = ''
    fr.onload = function(){
        json_take += fr.result;
        document.getElementById('output').textContent = json_take;
    }
    fr.readAsText(this.files[0])
})
//Real Function JSON to DOM OneStep
function JSON2Dom(){
    var json_data = document.getElementById('output').value;
    const file_call = json_data;
    const json_input = JSON.parse(file_call);
    const json_handle = JSON.stringify(json_input);
    json_handle.value += json_input;
    json_beauty = JSON.parse(json_handle);
    json_final = JSON.stringify(json_beauty, null, 4);
    json_data = json_final;
    json_split = json_data.split('\n');
    //Find FPS
    let find_fps_data = -1;
    for(let i = 0; i < json_split.length; i++){
        var find_fps = json_split[i].search('fps-build');
        if (find_fps != -1){
            find_fps_data = i;
            break
        }
    }
    let object_fps = json_split[find_fps_data];
    object_fps = object_fps.replaceAll('    "fps-build": ','');
    object_fps = object_fps.replaceAll(',','');
    //Done FPS
    //Making the output
    domxml = '';
    domxml += '<DOMDocument __ABOUT__="This XFL is convert from PAM file, By SPC-Util." frameRate="'+object_fps+'" width="0" height="0" xflVersion="2.97" xmlns="http://ns.adobe.com/xfl/2008/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n';
    domxml += '	<media>\n';
    //Find images
    var find_img_data = -1;
    for(let i = 0; i < json_split.length; i++){
        var find_img = json_split[i].search('images');
        if (find_img != -1){
            find_img_data = i;
            break
        }
    }
    //Find M Elements
    var find_m_data = -1;
    for(let i = 0; i < json_split.length; i++){
        var find_m = json_split[i].search('M_Database');
        if (find_m != -1){
            find_m_data = i;
            break
        }
    }
    //Let images into Array
    var images_array = new Array();
    let count_images = 0;
    for (let i = find_img_data; i < find_m_data; i++){
        images_array[count_images] = json_split[i];
        count_images++
    }
    //Handle first and last
    images_array.shift();
    images_array.pop();
    for (let i = 0; i < images_array.length;i++){
        var images = images_array[i].replaceAll('",','')
        images = images.replaceAll('        "','')
        images = images.replaceAll('"','')
        domxml += '		<DOMBitmapItem name="'+ images + '" href="' + images +'.png" />\n'
    }
    domxml += '	</media>\n';
    //End media
    //Find A Elements
    var find_a_data = -1;
    for(let i = 0; i < json_split.length; i++){
        var find_a = json_split[i].search('A_Database');
        if (find_a != -1){
            find_a_data = i;
            break
        }
    }
    //Let M into Array
    var media_array = new Array();
    let count_media = 0;
    for (let i = find_m_data; i < find_a_data; i++){
        media_array[count_media] = json_split[i];
        count_media++
    }
    media_array.shift();
    media_array.pop();
    //Importing M Elements
    domxml += '	<symbols>\n';
    for (let i = 0; i < media_array.length; i++){
        var m_element = media_array[i];
        m_element = m_element.replaceAll('",','');
        m_element = m_element.replaceAll('        "','');        
        m_element = m_element.replaceAll('"','')
        domxml += '		<Include href="'+m_element+'.xml" />\n'
    }
    //Find Labels Elements
    var find_label_data = -1;
    for(let i = 0; i < json_split.length; i++){
        var find_a = json_split[i].search('Labels');
        if (find_a != -1){
            find_label_data = i;
            break
        }
    }
    //Let A into Array
    var sprite_array = [];
    let count_sprite = 0;
    for (let i = find_a_data; i < find_label_data; i++){
        sprite_array[count_sprite] = json_split[i];
        count_sprite++
    }
    sprite_array.shift();
    sprite_array.pop();
    sprite_array.pop();
    sprite_array.pop();
    //Importing A Elements
    for (let i = 0; i < sprite_array.length; i++){
        var a_element = sprite_array[i];
        a_element = a_element.replaceAll('",','');
        a_element = a_element.replaceAll('        "','');        
        a_element = a_element.replaceAll('"','')
        domxml += '		<Include href="'+a_element+'.xml" />\n'
    }
    domxml += '	</symbols>\n';
    domxml += '	<timelines>\n		<DOMTimeline name="Anim">\n			<layers>\n				<DOMLayer name="labels">\n					<frames>\n';
    //Find actions Elements
    var find_action_data = -1;
    for(let i = 0; i < json_split.length; i++){
        var find_a = json_split[i].search('actions');
        if (find_a != -1){
            find_action_data = i;
            break
        }
    }
    //Let labels into Array
    var labels_name_array = [];
    var labels_duration_array = [];
    var count_label_name = 0;
    var count_label_duration = 0;
    for(let i = find_label_data; i < find_action_data; i++){
        var label_find_name = json_split[i].search('name');
        var label_find_duration = json_split[i].search('duration');
        if (label_find_name != -1){
            labels_name_array[count_label_name] = json_split[i];
            count_label_name++;
        }
        if (label_find_duration != -1){
            labels_duration_array[count_label_duration] = json_split[i];
            count_label_duration++;
        }
    }
    //Handle labels array
    for (let i = 0; i < labels_name_array.length; i++){
        let search_name = labels_name_array[i].replaceAll('            "name": "','');
        search_name = search_name.replaceAll('",','');
        labels_name_array[i] = search_name;
    }
    for (let i = 0; i < labels_duration_array.length; i++){
        let search_duration = labels_duration_array[i].replaceAll('            "duration": ','');
        search_duration = search_duration.replaceAll('",','');
        labels_duration_array[i] = parseInt(search_duration);
    }
    let label_change = 0;
    for (let i = 0; i < labels_name_array.length; i ++){
        domxml += '						<DOMFrame index="'+label_change+'" duration="'+labels_duration_array[i]+'" name="'+labels_name_array[i]+'" />\n';
        label_change += labels_duration_array[i];
    }
    domxml += '					</frames>\n				</DOMLayer>\n				<DOMLayer name="actions">\n					<frames>\n';
    //Find audio
    var find_audio_data = -1;
    for(let i = 0; i < json_split.length; i++){
        var find_audio = json_split[i].search('audio');
        if (find_audio != -1){
            find_audio_data = i;
            break
        }
    }
    var count_action_figure = 0;
    let action_arrays = [];
    for (let i = find_action_data; i < find_audio_data; i++){
        action_arrays[count_action_figure] = json_split[i];
        count_action_figure++;
    }
    action_arrays.pop();
    action_arrays.shift();
    //Split action
    let action_duration = [];
    let action_animate = [];
    let count_action_duration = 0;
    let count_action_animate = 0;
    for(let i = 0; i < action_arrays.length; i++ ){
        let duration_find = action_arrays[i].search('duration');
        let action_find = action_arrays[i].search('action');
        if(duration_find != -1){
            let storage_action = action_arrays[i];
            storage_action = storage_action.replaceAll('            "duration": ','');
            storage_action = storage_action.replaceAll(',','')
            action_duration[count_action_duration] = parseInt(storage_action);
            count_action_duration++
        }
        if (action_find != -1){
            let storage_action = action_arrays[i];
            storage_action = storage_action.replaceAll('            "action": "','');
            storage_action = storage_action.replaceAll('"','');
            storage_action = storage_action.replaceAll('",','');
            let stop_action = 'stop()'
            if (storage_action != stop_action){
                action_animate[count_action_animate] = 'fscommand("'+storage_action+'")';
                count_action_animate++;
            }
            else{
                action_animate[count_action_animate] = storage_action;
                count_action_animate++;
            }
        }
    }
    //Adding action to DOM
    let start = 0;
    for (let i = 0; i < action_duration.length; i++){
        domxml += '						<DOMFrame index="'+ start + '" duration="'+action_duration[i]+'" />\n'
        start = start + action_duration[i];
        domxml += '						<DOMFrame index="'+start+'">\n';
        domxml += '							<Actionscript>\n								<script>\n';
        domxml += '									<![CDATA['+ action_animate[i] +';]]>\n'
        domxml += '								</script>\n							</Actionscript>\n						</DOMFrame>\n';
        start++;
    }
    domxml += '					</frames>\n				</DOMLayer>\n				<DOMLayer name="audio">\n					<frames>\n'
    //Making Audio Arrays
    //Find version
    var find_version_data = -1;
    for(let i = 0; i < json_split.length; i++){
        var find_version = json_split[i].search('version');
        if (find_version != -1){
            find_version_data = i;
            break
        }
    }
    var count_audio_figure = 0;
    let audio_arrays = [];
    for (let i = find_audio_data; i < find_version_data; i++){
        audio_arrays[count_audio_figure] = json_split[i];
        count_audio_figure++;
    }
    audio_arrays.pop();
    audio_arrays.shift();
    //Getting audio arrays
    let audio_start_arrays = [];
    let audio_duration_arrays = [];
    let audio_call_arrays = [];
    let count_music_start = 0;
    let count_music_duration = 0;
    let count_music_call = 0;
    for (let i = 0; i < audio_arrays.length; i++){
        let audio_start_find = audio_arrays[i].search('start');
        let audio_duration_find = audio_arrays[i].search('duration');
        let audio_call_find = audio_arrays[i].search('audio');
        if (audio_start_find != -1){
            let audio_core = audio_arrays[i];
            audio_core = audio_core.replaceAll('            "start": ','');
            audio_core = audio_core.replaceAll(',','');
            audio_start_arrays[count_music_start] = parseInt(audio_core);
            count_music_start++
        }
        if (audio_duration_find != -1){
            let audio_core = audio_arrays[i];
            audio_core = audio_core.replaceAll('            "duration": ','');
            audio_core = audio_core.replaceAll(',','');
            audio_duration_arrays[count_music_duration] = parseInt(audio_core);
            count_music_duration++
        }
        if (audio_call_find != -1){
            let audio_core = audio_arrays[i];
            audio_core = audio_core.replaceAll('            "audio": "','');
            audio_core = audio_core.replaceAll('"','');
            audio_call_arrays[count_music_call] = audio_core;
            count_music_call++
        }
    }
    for (let i = 0; i < audio_start_arrays.length; i++){
        let total = audio_start_arrays[i] + audio_duration_arrays[i];
        domxml += '						<DOMFrame index="'+audio_start_arrays[i]+'" duration="'+audio_duration_arrays[i]+'" />\n'
        domxml += '						<DOMFrame index="'+total+'">\n'
        domxml += '							<Actionscript>\n								<script>\n';
        domxml += '									<![CDATA[fscommand("PlaySample", "'+audio_call_arrays[i]+'");]]>\n'
        domxml += '								</script>\n							</Actionscript>\n';
        domxml += '						</DOMFrame>\n';
    }
    domxml += '					</frames>\n				</DOMLayer>\n				<DOMLayer name="animation">\n					<frames>\n						<DOMFrame index="0" duration="'+label_change+'">\n							<elements>\n								<DOMSymbolInstance libraryItemName="A_Main" />\n							</elements>\n						</DOMFrame>\n					</frames>\n				</DOMLayer>\n			</layers>\n		</DOMTimeline>\n	</timelines>\n</DOMDocument>';
    //DOMXML
    var xml_name = document.getElementById("xml_name").value;
    var text = domxml;
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "text/xml" });
    var anchor = document.createElement("a");
    anchor.download = xml_name;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}