function domRead(){
    //This is where the DOM Build
    const documentDom = document.getElementById("documentDom").value;
    const loadElement = document.getElementById('loadElement');
    const fix_core = document.getElementById('fix-option');
    const loadProcess = document.getElementById('loadProcess');
    loadElement.style.display = "none";
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
    fix_core.style.display = "block";
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
    var isSPCUtil = null;
    if (spcutil != -1){
        isSPCUtil = true;
    }
    else{
        isSPCUtil = false;
    }
    var count_bit = 0;
    var split_core = [];
    //Checking core
    for (let i = bit_item[0];i<count_bititem;i++){
        var changed_bititem = document_split[i].replaceAll('name="','');
        var core_item = changed_bititem.replaceAll('"','');
        var split_shell = core_item.split(" ");
        if (split_shell.length <= 4){
            split_core[count_bit] += split_shell[1]
        }
        count_bit++;
    }
    for (let i = 0;i<split_core.length;i++){
        split_core[i] = split_core[i].replaceAll("undefined", "")
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
    picture_util.style.display = "block";
    for (let i = 0; i < split_core.length; i++){
        var input = document.createElement('input');
        input.type = "text";
        input.setAttribute('id',split_core[i]);
        input.setAttribute('value',split_core[i]);
        input.style.width = "250px";
        input.style.height = "auto";
        input.style.fontSize = "15px";
        picture_util.appendChild(input);
    }
    //Building M_Elements
    var m_util = document.getElementById("m_util");
    m_util.style.display = "block";
    for (let i = 0; i < split_m.length; i++){
        var input = document.createElement('input');
        input.type = "text";
        input.setAttribute('id',split_m[i]);
        input.setAttribute('value',split_m[i]);
        input.style.width = "auto";
        input.style.height = "auto";
        input.style.fontSize = "15px";
        m_util.appendChild(input);
    }
    //Building A_Elements
    var a_util = document.getElementById("a_util");
    a_util.style.display = "block";
    for (let i = 0; i < split_a.length; i++){
        var input = document.createElement('input');
        input.type = "text";
        input.setAttribute('id',split_a[i]);
        input.setAttribute('value',split_a[i]);
        input.style.width = "auto";
        input.style.height = "auto";
        input.style.fontSize = "15px";
        a_util.appendChild(input);
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
    //Counting domframe
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
    var animation_labels = [];
    var count_animation = 0;
    for (let i = first_domframe; i < (first_domframe+count_domframe); i++){
        animation_labels[count_animation] = labels[i];
        count_animation++;
    }
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
    label_util.style.display = "block";
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
            var cut_action = replace_trigger.split(' ');
            events_list[count_eventlist] = cut_action;
            count_eventlist++
        } 
    }
    console.log(count_eventlist)
    //Putting to the tab
    const anim_action = document.getElementById('anim_action');
    anim_action.style.display = "block";
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
    }
}