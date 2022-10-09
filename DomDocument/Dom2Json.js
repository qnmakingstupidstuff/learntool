//Upload File
document.getElementById('importFile').addEventListener('change', function(){
    var fr = new FileReader();
    fr.onload = function(){
        document.getElementById('documentDom').textContent = fr.result;
    }
    fr.readAsText(this.files[0]) 
})

var count_source = 0;
var count_image = 0;
var count_labels_core = 0;
var count_labels_total = 0;
var count_actions_core = 0;
var isSPC = null;
var audio_shell = 0;
var isTwinKles = null;
var storage_m = [];
var storage_a = [];
var storage_labels_name = [];
var storage_labels_index = [];
var storage_labels_duration = [];
var storage_action_index = [];
var storage_action_duration = [];
var storage_action_trigger = [];
var storage_audio_index = [];
var storage_audio_duration = [];
var storage_audio_call = [];
var storage_images = [];
var fps_core = -1;
function domRead(){
    //This is where the DOM Build
    const documentDom = document.getElementById("documentDom").value;
    const loadElement = document.getElementById('loadElement');
    const fix_core = document.getElementById('fix-option');
    const loadProcess = document.getElementById('loadProcess');
    loadElement.style.display = "block";
    //Script Info
    const version = 1.0;
    const owner = "Haruma";
    var document_split = [];
    var fps_count = -1;
    var bit_item = [];
    var m_item = [];
    document_split = documentDom.split("\n");
    for(let i = 0;i<document_split.length;i++){
        document_split[i] = document_split[i].replaceAll("\t", "")
        if (document_split[i] == ''){
            document_split.splice(i,1)
        }
        
    }
    //Try with frameRate
    var frame_find = -1;
    var bool = -1;
    var count_bititem = 0;
    var count_Melement = 0;
    fix_core.style.display = "none";
    for (let i = 0; i < document_split.length; i++){
        let frame_rate = document_split[i].search("frameRate");
        let bitmap_line = document_split[i].search('DOMBitmapItem');
        let include_M = document_split[i].search('href="M_');
        if (bitmap_line != -1){
            bit_item.push(i);
            count_bititem ++;
        }
        if (include_M != -1){
            m_item.push(i);
            count_Melement ++;
        }
        if (frame_rate != -1){
            frame_find = frame_rate
            bool = i;
        }
    }
    //Checking SPCUtil
    var spcutil = -1;
    var frame_firstindex = -1;
    var frame_lastindex = -1;
    var frame_detect = -1;
    var getFrame = document_split[bool].split(" ");
    for (let i = 0; i < getFrame.length;i++){
        let spc_detect = getFrame[i].search("SPC-Util");
        if (spc_detect != -1){
            spcutil = spc_detect;
        }
        let find_framerate = getFrame[i].search("frameRate");
        if (find_framerate != -1){
            var frame_detect = i;
            frame_firstindex = getFrame[frame_detect].indexOf('"=');
            frame_lastindex = getFrame[frame_detect].lastIndexOf('"');
        }
    }
    var take1 = getFrame[frame_detect].replaceAll('frameRate="','');
    var take2 = take1.replaceAll('"','');
    fps_count = take2;
    document.getElementById("fps_edit").value = fps_count;
    fps_core = fps_count;
    var isSPCUtil = null;
    if (spcutil != -1){
        isSPCUtil = true;
    }
    else{
        isSPCUtil = false;
    }
    //Giving variables
    if (isSPCUtil = true){
        isSPC = true
    }
    else if (isSPCUtil = false){
        isSPC = false
    }
    else{
        isSPC = null
    }
    var count_bit = 0;
    var split_core = [];
    //Checking core
    for (let i = bit_item[0];i<bit_item[0]+count_bititem;i++){
        var changed_bititem = document_split[i].replaceAll('<DOMBitmapItem name="','');
        var core_item = changed_bititem.replaceAll('" href="',' ');
        var shell_item = core_item.replaceAll(' />','');
        var split_shell = shell_item.split(" ");
        if (split_shell.length == 2){
            split_core[count_bit] += split_shell[0];
            count_bit++;
        }
    }
    for (let i = 0;i<split_core.length;i++){
        split_core[i] = split_core[i].replaceAll("undefined", "");
    }
    //Making M_Elements
    if (count_Melement != 0){
        var count_m = 0;
        var split_m = [];
        for (let i = m_item[0];i<(m_item[0]+count_Melement);i++){
            var changed_bititem = document_split[i].replaceAll('<Include href="','');
            var core_item = changed_bititem.replaceAll('.xml" />','');
            split_m[count_m] += core_item;
            count_m++;
        }
        for (let i = 0;i<split_m.length;i++){
            split_m[i] = split_m[i].replaceAll("undefined", "")
        }
    }
    count_source = count_m;
    //count A_Elements
    var push_A = [];
    var count_a = 0;
    for (let i = 0; i < document_split.length; i++){
        find_A = document_split[i].search('href="A_');
        if (find_A != -1){
            push_A[count_a] = i;
            count_a++;
        }
    }
    count_image = count_a;
    //Finding A
    if(count_a != 0){
        var count_value = 0;
        var split_a = [];
        for (let i = push_A[0];i < (push_A[0]+count_a);i++){
            var changed_bititem = document_split[i].replaceAll('<Include href="','');
            var core_item = changed_bititem.replaceAll('.xml" />','');
            split_a[count_value] += core_item;
            count_value++;
        }
        for (let i = 0;i<split_a.length;i++){
            split_a[i] = split_a[i].replaceAll("undefined", "")
        }
    }
    //Calling database
    var picture_util = document.getElementById("picture_util");
    picture_util.style.display = "none";
    for (let i = 0; i < split_core.length; i++){
        var input = document.createElement('input');
        input.type = "text";
        input.setAttribute('id',split_core[i]);
        input.setAttribute('value',split_core[i]);
        input.style.width = "250px";
        input.style.height = "auto";
        input.style.fontSize = "15px";
        picture_util.appendChild(input);
        storage_images[i] = split_core[i];
    }
    //Building M_Elements
    var m_util = document.getElementById("m_util");
    m_util.style.display = "none";
    for (let i = 0; i < split_m.length; i++){
        var input = document.createElement('input');
        input.type = "text";
        input.setAttribute('id',split_m[i]);
        input.setAttribute('value',split_m[i]);
        input.style.width = "auto";
        input.style.height = "auto";
        input.style.fontSize = "15px";
        m_util.appendChild(input);
        //Let M become JSON
        storage_m[i] = split_m[i];
    }
    //Building A_Elements
    var a_util = document.getElementById("a_util");
    a_util.style.display = "none";
    for (let i = 0; i < split_a.length; i++){
        var input = document.createElement('input');
        input.type = "text";
        input.setAttribute('id',split_a[i]);
        input.setAttribute('value',split_a[i]);
        input.style.width = "auto";
        input.style.height = "auto";
        input.style.fontSize = "15px";
        a_util.appendChild(input);
        //Let A become JSON
        storage_a[i] = split_a[i];
    }
    //Build labels core
    var first_label = -1;
    var last_labels = -1;
    var shellData = [];
    for (let i = 0; i < document_split.length; i++){
        shellData[i] = document_split[i];
        const find_label = document_split[i].search('<DOMLayer name="labels">');
        if (find_label != -1){
            first_label = i;
            shellData[i] = '';
        }
        const last_label = shellData[i].search('</DOMLayer>');
        if (last_label != -1){
            last_labels = i;
            break
        }
    }
    //ShellData Build
    shellData[last_labels] = '';
    var labels = [];
    var count_label = 0;
    for (let i = first_label; i < last_labels; i++){
        labels[count_label] = document_split[i];
        count_label++;
    }
    //Finding first domframe
    var count_domframe = 0;
    var first_domframe = -1;
    for (let i = 0; i < labels.length; i++){
        find_animate = labels[i].search("DOMFrame");
        if (find_animate != -1){
            first_domframe = i;
            break    
        }
    }
    //Calculate DomFrame
    for (let i = 0; i < labels.length; i++){
        find_animate = labels[i].search("DOMFrame");
        if (find_animate != -1){
            count_domframe++;
        }
    }
    //Animation count
    var animation_labels = [];
    var count_animation = 0;
    for (let i = first_domframe; i < (first_domframe+count_domframe); i++){
        animation_labels[count_animation] = labels[i];
        count_animation++;
    }
    count_labels_core = count_animation;
    //Build labels
    var core_labels = [];
    var core_index = [];
    var core_duration = [];
    var core_name = [];
    var core_total = [];
    var count_core_label = 0;
    for (let i = 0; i < animation_labels.length; i++){
        core_labels[i] = animation_labels[i].replaceAll('<DOMFrame index="', '');
        var core_label_01 = core_labels[i].replaceAll('" duration="',' ');
        var core_label_02 = core_label_01.replaceAll('" name="',' ');
        var shell_label = core_label_02.replaceAll('" />','');
        var core_label = shell_label.split(" ");
        if(core_label.length == 3){
            core_index[i] = core_label[0];
            core_duration[i] = core_label[1];
            core_name[i] = core_label[2];
            core_total[i] = (parseInt(core_index[i]) + parseInt(core_duration[i]));
        }
        count_core_label++;
    }
    //Labels core done
    //Importing to animation tab
    var label_util = document.getElementById("labels_util");
    label_util.style.display = "none";
    for (let i = 0; i < count_core_label; i++){
        var label_shells = document.createElement('input');
        label_shells.type = "text";
        label_shells.setAttribute('id',core_name[i]);
        label_shells.setAttribute('value',core_name[i]);
        label_shells.style.width = "auto";
        label_shells.style.height = "auto";
        label_shells.style.fontSize = "15px";
        var label_index = document.createElement('input');
        label_index.type = "text";
        label_index.setAttribute('id',core_index[i]);
        label_index.setAttribute('value',core_index[i]);
        label_index.style.width = "auto";
        label_index.style.height = "auto";
        label_index.style.fontSize = "15px";
        var label_duration = document.createElement('input');
        label_duration.type = "text";
        label_duration.setAttribute('id',core_duration[i]);
        label_duration.setAttribute('value',core_duration[i]);
        label_duration.style.width = "auto";
        label_duration.style.height = "auto";
        label_duration.style.fontSize = "15px";
        var label_total = document.createElement('input');
        label_total.type = "text";
        label_total.setAttribute('id',core_total[i]);
        label_total.setAttribute('value',core_total[i]);
        label_total.style.width = "auto";
        label_total.style.height = "auto";
        label_total.style.fontSize = "15px";
        label_util.appendChild(label_shells);
        label_util.appendChild(label_index);
        label_util.appendChild(label_duration);
        label_util.appendChild(label_total);
        var spacebar = document.createElement('br');
        label_util.appendChild(spacebar);
        //Porting Labels to JSON
        storage_labels_name[i] = core_name[i];
        storage_labels_index[i] = parseInt(core_index[i]);
        storage_labels_duration[i] = parseInt(core_duration[i]);
    }
    //Cloning core
    var core_data = [];
    for (let i = 0; i < document_split.length; i++){
        core_data[i] = document_split[i];
    }
    //Reading Animation Action
    var action_first = -1;
    var action_last = -1;
    //Getting first Shell
    for(let i = 0; i < core_data.length; i++){
        var nutshell = core_data[i].search('<DOMLayer name="actions">');
        if (nutshell != -1){
            action_first = i;
            break
        }
    }
    //Getting last shell
    for (let i = action_first; i < core_data.length; i++){
        var action_find = core_data[i].search('</DOMLayer>');
        if (action_find != -1 ){
            action_last = i;
            break
        }
    }
    //Read Structure
    var get_action = [];
    var action_count = 0;
    for (let i = action_first; i < action_last; i++){
        get_action[action_count] = core_data[i];
        action_count++;
    }
    //Get all DOMFrame
    var domFrame_count = 0;
    for (let i = 0; i < get_action.length; i++){
        find_action_trigger = get_action[i].search('<DOMFrame index="');
        if(find_action_trigger != 0){
            domFrame_count ++
        }
    }
    //Finding action
    var action_index_main = [];
    var action_duration_main = [];
    var action_index_shell = [];
    var action_core_count = 0;
    var action_shell_count = 0;
    for (let i = 0; i < get_action.length; i++){
        find_actual_action = get_action[i].search('<DOMFrame index="');
        find_action = get_action[i].search('duration');
        if ((find_actual_action != -1)){
            if (find_action != -1){
                const replace_action = get_action[i].replaceAll('<DOMFrame index="', '');
                const replace_trigger = replace_action.replaceAll('" duration="',' ');
                const replace_shell = replace_trigger.replaceAll('" />','');
                var cut_action = replace_shell.split(' ');
                if(cut_action.length == 2){
                    action_index_main[action_core_count] = cut_action[0];
                    action_duration_main[action_core_count] = cut_action[1];
                    action_core_count++;
                }
            }
            else{
                const replace_action = get_action[i].replaceAll('<DOMFrame index="', '');
                const replace_trigger = replace_action.replaceAll('">', '');
                var cut_action = replace_trigger.split(' ');
                if (cut_action.length == 1){
                    action_index_shell[action_shell_count] = cut_action[0];
                    action_shell_count++;
                }
            }
        }
    }
    //Working on action stop, use_action
    var count_event = 0;
    for (let i = 0; i < get_action.length; i++){
        let find_event = get_action[i].search('CDATA');
        if (find_event != -1){
            count_event++
        }
    }
    //Getting all events properties
    var events_list = [];
    var count_eventlist = 0;
    for (let i = 0; i < get_action.length; i++){
        let find_event = get_action[i].search('CDATA');
        if (find_event != -1){
            const replace_action = get_action[i].replaceAll('<![CDATA[', '');
            const replace_trigger = replace_action.replaceAll(';]]>', '');
            const replace_core = replace_trigger.replaceAll('fscommand("', '');
            const replace_shell = replace_core.replaceAll('")', '');
            console.log(replace_shell)
            var cut_action = new Array();
            cut_action = replace_shell;
            events_list[count_eventlist] = cut_action;
            count_eventlist++
        } 
    }
    //Counting
    count_actions_core = count_eventlist;
    //Putting to the tab
    const anim_action = document.getElementById('anim_action');
    anim_action.style.display = "none";
    for (let i = 0; i < count_eventlist; i++){
        //Core of index
        var action_index_core = document.createElement('input');
        action_index_core.type = "text";
        action_index_core.setAttribute('id',action_index_main[i]);
        action_index_core.setAttribute('value',action_index_main[i]);
        action_index_core.style.width = "auto";
        action_index_core.style.height = "auto";
        action_index_core.style.fontSize = "15px";
        anim_action.appendChild(action_index_core);
        //Core of duration
        var action_duration_core = document.createElement('input');
        action_duration_core.type = "text";
        action_duration_core.setAttribute('id',action_duration_main[i]);
        action_duration_core.setAttribute('value',action_duration_main[i]);
        action_duration_core.style.width = "auto";
        action_duration_core.style.height = "auto";
        action_duration_core.style.fontSize = "15px";
        anim_action.appendChild(action_duration_core);
        //Core of index duration
        var action_frame_core = document.createElement('input');
        action_frame_core.type = "text";
        action_frame_core.setAttribute('id',action_index_shell[i]);
        action_frame_core.setAttribute('value',action_index_shell[i]);
        action_frame_core.style.width = "auto";
        action_frame_core.style.height = "auto";
        action_frame_core.style.fontSize = "15px";
        anim_action.appendChild(action_frame_core);
        //Core of Anim Action
        var action_trigger_event = document.createElement('input');
        action_trigger_event.type = "text";
        action_trigger_event.setAttribute('id',events_list[i]);
        action_trigger_event.setAttribute('value',events_list[i]);
        action_trigger_event.style.width = "auto";
        action_trigger_event.style.height = "auto";
        action_trigger_event.style.fontSize = "15px";
        anim_action.appendChild(action_trigger_event);
        var spacebar = document.createElement('br');
        anim_action.appendChild(spacebar);
        //Porting Action
        storage_action_index[i] = parseInt(action_index_main[i]);
        storage_action_duration[i] = parseInt(action_duration_main[i]);
        storage_action_trigger[i] = (events_list[i]);
    }
    //PvZ2 Soundbank
    //Find audio
    var first_audio = -1;
    var second_audio = -1;
    for(let i = 0; i < document_split.length; i++){
        var find_audio = document_split[i].search('<DOMLayer name="audio">');
        if(find_audio != -1){
            first_audio = i;
            break
        }
    }
    //Copying the list
    var cloning_arrays = [];
    var soundbank_count = 0;
    for (let i = first_audio; i < document_split.length; i++){
        cloning_arrays[soundbank_count] = document_split[i];
        soundbank_count++;
    }
    //Find audio
    for(let i = 0; i < cloning_arrays.length; i++){
        var find_audio = cloning_arrays[i].search('</DOMLayer>');
        if(find_audio != -1){
            second_audio = i;
            break
        }
    }
    //Find first audio
    for(let i = 0; i < cloning_arrays.length; i++){
        var find_audio = cloning_arrays[i].search('<DOMLayer name="audio">');
        if(find_audio != -1){
            first_audio = i;
            break
        }
    }
    //Soundbank List
    var soundbank_list = [];
    var soundbank_pool = 0;
    for (let i = first_audio; i < second_audio; i++){
        soundbank_list[soundbank_pool] = cloning_arrays[i];
        soundbank_pool++;
    }
    //Handle Soundbank
    var audio_index_list = [];
    var audio_duration_list = [];
    var audio_total_list = [];
    var audio_count = 0;
    for(let i = 0; i < soundbank_list.length; i++){
        var find_domframe = soundbank_list[i].search("DOMFrame");
        var find_duration = soundbank_list[i].search("duration");
        if(find_domframe != -1){
            if(find_duration != -1){
                var domShell = soundbank_list[i].replaceAll('<DOMFrame index="','');
                var domShell01 = domShell.replaceAll('" duration="',' ');
                var domShell02 = domShell01.replaceAll('" />','');
                var domEpic = domShell02.split(' ');
                if (domEpic.length == 2){
                    audio_index_list[audio_count] = domEpic[0];
                    audio_duration_list[audio_count] = domEpic[1];
                    audio_total_list[audio_count] = parseInt(audio_index_list[audio_count]) + parseInt(audio_duration_list[audio_count]);
                    audio_count++;
                }
            }
        }
    }
    audio_shell = audio_count;
    //Soundbank Done
    //Handle Event Soundbank
    var audio_event = [];
    var audio_event_count = 0;
    for (let i = 0; i < soundbank_list.length; i++){
        var find_domframe = soundbank_list[i].search("CDATA");
        if(find_domframe != -1){
            var event_node = soundbank_list[i].replaceAll('<![CDATA[fscommand("', '');
            var event_node01 = event_node.replaceAll('", "', ' ');
            var event_node02 = event_node01.replaceAll('");]]>', '');
            var current_audio = event_node02.split(' ');
            if (current_audio.length == 2){
                audio_event[audio_event_count] = current_audio[1];
                audio_event_count++;
            }
        }
    }
    //Porting to Web
    var anim_audio = document.getElementById('anim_audio');
    anim_audio.style.display = "none";
    //Port JSON
    for(let i = 0; i < audio_count; i++){
        storage_audio_index[i] = parseInt(audio_index_list[i]);
        storage_audio_duration[i] = parseInt(audio_duration_list[i]);
    }
    for (let i = 0; i < soundbank_list.length; i++){
        storage_audio_call[i] = audio_event[i];
    }
    DomtoJSON()
}
function DomtoJSON(){
    var duration_count = 0;
    for (let i = 0; i < storage_labels_duration.length; i++){
        duration_count += parseInt(storage_labels_duration[i])
    }
    var output = '{\n    "$comment": "This JSON file was converted by Haruma Tool, DomDocument to JSON",\n';
    if (fps_core != -1){
        output += '    "fps-build": '+parseInt(fps_core)+',\n';
    }
    output += '	"images": ['
    if (storage_a.length != 0){
        output += '\n';
        for(let i = 0; i < storage_images.length; i++){
            if(i == (storage_images.length-1)){
                output += '        "'+storage_images[i]+'"\n';
                output += '    ],\n'
            }
            else{
                output += '        "'+storage_images[i]+'",\n';
            }
        }
    }
    else{
        output += '],\n'
    }
    output += '	"M_Database": ['
    if (storage_m.length != 0){
        output += '\n';
        for(let i = 0; i < storage_m.length; i++){
            if(i == (storage_m.length-1)){
                output += '        "'+storage_m[i]+'"\n';
                output += '    ],\n'
            }
            else{
                output += '        "'+storage_m[i]+'",\n';
            }
        }
    }
    else{
        output += '],\n'
    }
    output += '	"A_Database": ['
    if (storage_a.length != 0){
        output += '\n';
        for(let i = 0; i < storage_a.length; i++){
            if(i == (storage_a.length-1)){
                output += '        "'+storage_a[i]+'"\n';
                output += '    ],\n'
            }
            else{
                output += '        "'+storage_a[i]+'",\n';
            }
        }
    }
    else{
        output += '],\n'
    }
    output += '"#reminder": "You dont need to edit start, i only put there so you can easily use it to change action. The tool will only read duration, name and action here.",'
    output += '"#ehem": "If you add another action such as use_action, you need to decrease the number of duration by one in the next use_action you make",'
    output += '    "Labels": [\n';
    for (let i = 0; i < storage_labels_name.length; i++){
        if(i == (storage_labels_name.length - 1)){
            output += '        {\n';
            output += '           "name": "'+storage_labels_name[i]+'",\n';
            output += '           "start": '+storage_labels_index[i]+',\n';
            output += '           "duration": '+storage_labels_duration[i]+'\n';
            output += '        }\n';
        }
        else{
            output += '        {\n';
            output += '           "name": "'+storage_labels_name[i]+'",\n';
            output += '           "start": '+storage_labels_index[i]+',\n';
            output += '           "duration": '+storage_labels_duration[i]+'\n';
            output += '        },\n';
        }
    }
    output += '    ],\n';
    output += '    "actions": [\n';
    //Make action arrays
    for (let i = 0; i < storage_action_index.length; i++){
        if(i == (storage_action_index.length - 1)){
            output += '        {\n';
            output += '           "start": '+storage_action_index[i]+',\n';
            output += '           "duration": '+storage_action_duration[i]+',\n';
            output += '           "action": "'+storage_action_trigger[i]+'"\n';
            output += '        }\n';
        }
        else{
            output += '        {\n';
            output += '           "start": '+storage_action_index[i]+',\n';
            output += '           "duration": '+storage_action_duration[i]+',\n';
            output += '           "action": "'+storage_action_trigger[i]+'"\n';
            output += '        },\n';
        }
    }
    output += '    ],\n';
    //Shell Audio
    output += '"#dev_remind": "Starting from music, we will have to read start and duration.",'
    output += '    "audio": [';
    if(storage_audio_index.length != 0){
        output += '\n';
        for (let i = 0; i < storage_audio_index.length; i++){
            if(i == (storage_audio_index.length - 1)){
                output += '        {\n';
                output += '           "start": '+storage_audio_index[i]+',\n';
                output += '           "duration": '+storage_audio_duration[i]+',\n';
                output += '           "audio": "'+storage_audio_call[i]+'"\n';
                output += '        }\n';
                output += '    ],\n';
            }
            else{
                output += '        {\n';
                output += '           "start": '+storage_audio_index[i]+',\n';
                output += '           "duration": '+storage_audio_duration[i]+',\n';
                output += '           "audio": "'+storage_audio_call[i]+'"\n';
                output += '        },\n';
            }
        }
    }
    else{
        output += '],\n';
    }
    //Core Output
    output += '    "version": 1\n'
    output += '}'
    //Shell bank for Beautiful JSON
    const file_call = output;
    const json_input = JSON.parse(file_call);
    const json_handle = JSON.stringify(json_input);
    json_handle.value += json_input;
    json_beauty = JSON.parse(json_handle);
    json_final = JSON.stringify(json_beauty, null, 4);
    output = json_final;
    //Output JSON
    var json_name = document.getElementById("json_name").value;
    var text = output;
    text = text.replace(/\n/g, "\r\n");
    var blob = new Blob([text], { type: "application/json" });
    var anchor = document.createElement("a");
    anchor.download = json_name;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    var donateCall = document.getElementById('donateCall');
    donateCall.style.display = "block";
}