var count = 0;
var i = 0;
var delay_array = [];
function addingFunc(){
       var btn = document.getElementById('btn');
       var x = document.getElementById('addplant').value;
       var y = document.getElementById('plantChoice');
       var m = document.getElementById('output');
       btn.onclick = function(){
              if(i<= count){
                     i++;
                     const el = document.createElement('div');
                     el.setAttribute('id', 'event'+i);
                     el.classList.add('mdui-card');
                     el.style.float = 'center';
                     el.style.width = "800px";
                     el.style.height = "150px";
                     plantChoice.appendChild(el);
                     var input = document.createElement('input');
                     var delay_bar = document.createElement('input');
                     var max_packet = document.createElement('input');
                     var max_number = document.createElement('input');
                     var max_weight = document.createElement('input');
                     var percentage = document.createElement('input');
                     var min_number = document.createElement('input');
                     var min_count = document.createElement('input');
                     var forceboosted = document.createElement('select');
                     var forceboosted_true = document.createElement('option');
                     var forceboosted_false = document.createElement('option');
                     input.type = "text";
                     input.setAttribute('id','plant'+i);
                     input.setAttribute('value','');
                     input.setAttribute('placeholder','Plant '+i);
			input.classList.add('mdui-textfield-input');
                     input.style.fontSize = "23px";
                     input.style.width = "200px";
                     input.style.float = "left";
                     input.style.marginLeft = "20px";
                     input.style.textAlign = "center";
                     el.appendChild(input);
                     delay_bar.type = "text";
                     delay_bar.setAttribute('id','delay'+i);
                     delay_bar.setAttribute('placeholder','Delay ');
                     delay_bar.setAttribute('value','');
                     delay_bar.classList.add('mdui-textfield-input');
                     delay_bar.style.fontSize = "23px";
                     delay_bar.style.width = "100px";
                     delay_bar.style.float = "left";
                     delay_bar.style.marginLeft = "40px";
                     delay_bar.style.textAlign = "center";
                     el.appendChild(delay_bar);
                     max_packet.type = "text";
                     max_packet.setAttribute('id','maxpackets'+i);
                     max_packet.setAttribute('placeholder','Max Packets ');
                     max_packet.setAttribute('value','');
                     max_packet.classList.add('mdui-textfield-input');
                     max_packet.style.fontSize = "23px";
                     max_packet.style.width = "150px";
                     max_packet.style.float = "left";
                     max_packet.style.marginLeft = "40px";
                     max_packet.style.textAlign = "center";
                     el.appendChild(max_packet);
                     max_number.type = "text";
                     max_number.setAttribute('id','maxcount'+i);
                     max_number.setAttribute('placeholder','Max Count ');
                     max_number.setAttribute('value','');
                     max_number.classList.add('mdui-textfield-input');
                     max_number.style.fontSize = "23px";
                     max_number.style.width = "150px";
                     max_number.style.float = "left";
                     max_number.style.marginLeft = "60px";
                     max_number.style.textAlign = "center";
                     el.appendChild(max_number);
                     max_weight.type = "text";
                     max_weight.setAttribute('id','maxweight'+i);
                     max_weight.setAttribute('placeholder','Max Weight Factor');
                     max_weight.setAttribute('value','0');
                     max_weight.classList.add('mdui-textfield-input');
                     max_weight.style.fontSize = "23px";
                     max_weight.style.width = "200px";
                     max_weight.style.float = "left";
                     max_weight.style.marginLeft = "20px";
                     max_weight.style.textAlign = "center";
                     el.appendChild(max_weight);
                     percentage.type = "text";
                     percentage.setAttribute('id','weight'+i);
                     percentage.setAttribute('placeholder','Weight ');
                     percentage.setAttribute('value','');
                     percentage.classList.add('mdui-textfield-input');
                     percentage.style.fontSize = "23px";
                     percentage.style.width = "150px";
                     percentage.style.float = "left";
                     percentage.style.marginLeft = "60px";
                     percentage.style.textAlign = "center";
                     el.appendChild(percentage);
                     min_number.type = "text";
                     min_number.setAttribute('id','minnumber'+i);
                     min_number.setAttribute('placeholder','Min Weight Factor');
                     min_number.setAttribute('value','');
                     min_number.classList.add('mdui-textfield-input');
                     min_number.style.fontSize = "23px";
                     min_number.style.width = "200px";
                     min_number.style.float = "left";
                     min_number.style.marginLeft = "50px";
                     min_number.style.textAlign = "center";
                     el.appendChild(min_number);
                     min_count.type = "text";
                     min_count.setAttribute('id','mincount'+i);
                     min_count.setAttribute('placeholder','Min Count');
                     min_count.setAttribute('value','');
                     min_count.classList.add('mdui-textfield-input');
                     min_count.style.fontSize = "23px";
                     min_count.style.width = "200px";
                     min_count.style.float = "left";
                     min_count.style.marginLeft = "20px";
                     min_count.style.textAlign = "center";
                     el.appendChild(min_count);
                     forceboosted.setAttribute('id','forceboost'+i);
                     forceboosted.classList.add('mdui-select');
                     forceboosted.style.fontSize = "23px";
                     forceboosted.style.width = "200px";
                     forceboosted.style.float = "left";
                     forceboosted.style.marginLeft = "60px";
                     forceboosted.style.textAlign = "center";
                     forceboosted.setAttribute('mdui-select','');
                     forceboosted_true.setAttribute('id','forceboost'+i);
			forceboosted_true.setAttribute('value','true');
                     forceboosted_true.style.fontSize = "23px";
                     forceboosted_true.style.textAlign = "center";
                     forceboosted_false.setAttribute('id','forceboost'+i);
			forceboosted_false.setAttribute('value','false');
                     forceboosted_false.style.fontSize = "23px";
                     forceboosted_false.style.textAlign = "center";
                     forceboosted_false.innerText = "False";
                     forceboosted_true.innerText = "True";
                     forceboosted.marginTop = "30px";
                     forceboosted.appendChild(forceboosted_false);
                     forceboosted.appendChild(forceboosted_true);
                     el.appendChild(forceboosted);
                     y.innerHTML += '</br>'
              }
              count++;
       }
       
}
