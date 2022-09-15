function doneFunc(){
       var plant_array = [];
       var delay_array = [];
       var packet_array = [];
       var count_array = [];
       var weight_array = [];
       var percent_array = [];
       var min_array = [];
       var mincount_array = [];
       var forcebuild_array = [];
       var usable = parseInt(count) - 1;
       var output = document.getElementById("output");
       for (k=1;k<=count;k++){
              var index = k-1;
              const handle_plant = document.getElementById('plant'+(k)).value;
              plant_array[index]=handle_plant;

              const handle_delay = document.getElementById('delay'+(k)).value;
              delay_array[index]=handle_delay;
              
              const handle_packet = document.getElementById('maxpackets'+(k)).value;
              packet_array[index]=handle_packet;
              
              const handle_count = document.getElementById('maxcount'+(k)).value;
              count_array[index]=handle_count;
              
              const handle_weight = document.getElementById('maxweight'+(k)).value;
              weight_array[index]=handle_weight;
              
              const handle_percent = document.getElementById('weight'+(k)).value;
              percent_array[index]=handle_percent;

              const handle_min = document.getElementById('minnumber'+(k)).value;
              min_array[index]=handle_min;

              const handle_mincount = document.getElementById('mincount'+(k)).value;
              mincount_array[index]=handle_mincount;

              const handle_forcebuild = document.getElementById('forceboost'+(k)).value;
              forcebuild_array[index]=handle_forcebuild;
              
       }
       output.style.display = "block";
       document.getElementById('output').value += "        {\n";
       document.getElementById('output').value += "            \"aliases\": [\n";
       document.getElementById('output').value += "                \"ConveyorBelt\"\n";
       document.getElementById('output').value += "            ],\n";
       document.getElementById('output').value += "            \"objclass\": \"ConveyorSeedBankProperties\",\n";
       document.getElementById('output').value += "            \"objdata\": {\n";
       document.getElementById('output').value += "                \"DropDelayConditions\": [\n";
       for(p=0;p<count;p++){
              document.getElementById('output').value += "                    {\n";
              document.getElementById('output').value += "                        \"Delay\": "+ delay_array[p] +",\n";   
              document.getElementById('output').value += "                        \"MaxPackets\": "+ packet_array[p] +"\n";
              if(p==usable){
                     document.getElementById('output').value += "                    }\n";
              }
              else{
                     document.getElementById('output').value += "                    },\n";
              }
       }
       document.getElementById('output').value += "                ],\n";
       document.getElementById('output').value += "                \"InitialPlantList\": [\n";
       for(p=0;p<count;p++){
              document.getElementById('output').value += "                    {\n";
              if(count_array[p] === ''){ 
                     console.log('Not Found Max Count, so skip')
              }     
              else {
              document.getElementById('output').value += "                        \"MaxCount\": "+ count_array[p] +",\n";  
              }
              if(mincount_array[p] === ''){ 
                     console.log('Not Found Min Count, so skip')
              }     
              else {
              document.getElementById('output').value += "                        \"MinCount\": "+ mincount_array[p] +",\n";
              }
              if(forcebuild_array[p] === 'false'){ 
                     console.log('No Adding Boost')
              }     
              else {
              document.getElementById('output').value += "                        \"ForceBoosted\": "+ forcebuild_array[p] +",\n";
              }
              document.getElementById('output').value += "                        \"MaxWeightFactor\": "+ weight_array[p] +",\n";
              document.getElementById('output').value += "                        \"PlantType\": \""+ plant_array[p] +"\",\n";
              document.getElementById('output').value += "                        \"Weight\": "+ percent_array[p] +",\n";
              document.getElementById('output').value += "                        \"MinWeightFactor\": "+ min_array[p] +"\n";
              if(p==usable){
                     document.getElementById('output').value += "                    }\n";
              }
              else{
                     document.getElementById('output').value += "                    },\n";
              }
       }
       document.getElementById('output').value += "                ]\n"
       document.getElementById('output').value += "            }\n"
       document.getElementById('output').value += "        },"
}