$(window).load(function(){function e(){b.setData([t()]),b.draw(),setTimeout(e,y)}function t(){for(m.length>0&&(m=m.slice(1));v>m.length;){var e=m.length>0?m[m.length-1]:50,t=e+10*Math.random()-5;0>t&&(t=0),t>100&&(t=100),m.push(t)}for(var i=[],n=0;m.length>n;++n)i.push([n,m[n]]);return i}function i(e,t,i){$('<div class="ct">'+i+"</div>").css({position:"absolute",display:"none",top:t,left:e+10,border:"1px solid #000",padding:"3px",opacity:"0.7","background-color":"#000",color:"#fff"}).appendTo("body").fadeIn(200)}if($("#chart_activity").length>0){for(var n=[],a=[],s=0;7>s;s+=1)n.push([s,parseInt(30*Math.random())]),a.push([s,parseInt(30*Math.random())]);$.plot($("#chart_activity"),[{data:n,label:"stuff"},{data:a,label:"contacts"}],{xaxis:{show:!0},yaxis:{show:!0}})}if($(".visitsChart-2").length>0){for(var r=[],s=1;30>=s;s+=1)r.push([s,parseInt(30*Math.random())]);$.plot($(".visitsChart-2"),[{data:r}],{xaxis:{show:!0},yaxis:{show:!0}})}if($("#main_chart").length>0){var o=[[1,1235],[2,1245],[3,1590],[4,1420],[5,1713],[6,1921],[7,1869],[8,1790],[9,2314],[10,2490],[11,2175],[12,1989]],l=[[1,140],[2,246],[3,530],[4,788],[5,832],[6,962],[7,1280],[8,1299],[9,1410],[10,1569],[11,1492],[12,1350]],u=[[1,50],[2,100],[3,140],[4,190],[5,250],[6,360],[7,440],[8,650],[9,750],[10,810],[11,980],[12,1102]];$.plot($("#main_chart"),[{data:o,label:"visits"},{data:l,label:"unique"},{data:u,label:"sales"}],{series:{lines:{show:!0},points:{show:!0}},grid:{hoverable:!0,clickable:!0},yaxis:{min:1,max:3e3,tickLength:0},xaxis:{labelWidth:30,tickLength:0}})}if($("#chart-2").length>0){for(var r=[],s=0;10>=s;s+=1)r.push([s,parseInt(30*Math.random())]);for(var c=[],s=0;10>=s;s+=1)c.push([s,parseInt(30*Math.random())]);for(var h=[],s=0;10>=s;s+=1)h.push([s,parseInt(30*Math.random())]);var d=0,p=!0,f=!1,g=!1;$.plot($("#chart-2"),[{data:r,label:"data 1"},{data:c,label:"data 2"},{data:h,label:"data 3"}],{series:{stack:d,lines:{show:f,fill:!0,steps:g},bars:{show:p,barWidth:.6}}})}if($("#chart-3").length>0){for(var m=[],s=0;5>s;s++)m[s]={label:"Series"+(s+1),data:Math.floor(100*Math.random())+1};$.plot($("#chart-3"),m,{series:{pie:{show:!0}},legend:{show:!1}})}if($("#chart-4").length>0){var m=[],v=300,y=30,b=$.plot($("#chart-4"),[t()],{series:{shadowSize:0},yaxis:{min:0,max:100},xaxis:{show:!1}});e()}var x=null;$("#main_chart").bind("plothover",function(e,t,n){if($("#x").text(t.x.toFixed(2)),$("#y").text(t.y.toFixed(2)),n){if(x!=n.dataIndex){x=n.dataIndex,$(".ct").remove();var a=n.datapoint[0].toFixed(2),s=n.datapoint[1].toFixed(2);i(n.pageX,n.pageY,n.series.label+" of "+Math.round(a)+" = "+Math.round(s))}}else $(".ct").remove(),x=null})});