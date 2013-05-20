(function(e){e.color={},e.color.make=function(t,n,i,o){var a={};return a.r=t||0,a.g=n||0,a.b=i||0,a.a=null!=o?o:1,a.add=function(e,t){for(var n=0;e.length>n;++n)a[e.charAt(n)]+=t;return a.normalize()},a.scale=function(e,t){for(var n=0;e.length>n;++n)a[e.charAt(n)]*=t;return a.normalize()},a.toString=function(){return a.a>=1?"rgb("+[a.r,a.g,a.b].join(",")+")":"rgba("+[a.r,a.g,a.b,a.a].join(",")+")"},a.normalize=function(){function e(e,t,n){return e>t?e:t>n?n:t}return a.r=e(0,parseInt(a.r),255),a.g=e(0,parseInt(a.g),255),a.b=e(0,parseInt(a.b),255),a.a=e(0,a.a,1),a},a.clone=function(){return e.color.make(a.r,a.b,a.g,a.a)},a.normalize()},e.color.extract=function(t,n){var i;do{if(i=t.css(n).toLowerCase(),""!=i&&"transparent"!=i)break;t=t.parent()}while(!e.nodeName(t.get(0),"body"));return"rgba(0, 0, 0, 0)"==i&&(i="transparent"),e.color.parse(i)},e.color.parse=function(n){var i,o=e.color.make;if(i=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n))return o(parseInt(i[1],10),parseInt(i[2],10),parseInt(i[3],10));if(i=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n))return o(parseInt(i[1],10),parseInt(i[2],10),parseInt(i[3],10),parseFloat(i[4]));if(i=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n))return o(2.55*parseFloat(i[1]),2.55*parseFloat(i[2]),2.55*parseFloat(i[3]));if(i=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n))return o(2.55*parseFloat(i[1]),2.55*parseFloat(i[2]),2.55*parseFloat(i[3]),parseFloat(i[4]));if(i=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n))return o(parseInt(i[1],16),parseInt(i[2],16),parseInt(i[3],16));if(i=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n))return o(parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16),parseInt(i[3]+i[3],16));var a=e.trim(n).toLowerCase();return"transparent"==a?o(255,255,255,0):(i=t[a]||[0,0,0],o(i[0],i[1],i[2]))};var t={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery),function(e){function t(t,o,a,r){function s(e,t){t=[Ct].concat(t);for(var n=0;e.length>n;++n)e[n].apply(this,t)}function l(){for(var t=0;r.length>t;++t){var n=r[t];n.init(Ct),n.options&&e.extend(!0,rt,n.options)}}function c(t){var n;for(e.extend(!0,rt,t),null==rt.xaxis.color&&(rt.xaxis.color=rt.grid.color),null==rt.yaxis.color&&(rt.yaxis.color=rt.grid.color),null==rt.xaxis.tickColor&&(rt.xaxis.tickColor=rt.grid.tickColor),null==rt.yaxis.tickColor&&(rt.yaxis.tickColor=rt.grid.tickColor),null==rt.grid.borderColor&&(rt.grid.borderColor=rt.grid.color),null==rt.grid.tickColor&&(rt.grid.tickColor=e.color.parse(rt.grid.color).scale("a",.22).toString()),n=0;Math.max(1,rt.xaxes.length)>n;++n)rt.xaxes[n]=e.extend(!0,{},rt.xaxis,rt.xaxes[n]);for(n=0;Math.max(1,rt.yaxes.length)>n;++n)rt.yaxes[n]=e.extend(!0,{},rt.yaxis,rt.yaxes[n]);for(rt.xaxis.noTicks&&null==rt.xaxis.ticks&&(rt.xaxis.ticks=rt.xaxis.noTicks),rt.yaxis.noTicks&&null==rt.yaxis.ticks&&(rt.yaxis.ticks=rt.yaxis.noTicks),rt.x2axis&&(rt.xaxes[1]=e.extend(!0,{},rt.xaxis,rt.x2axis),rt.xaxes[1].position="top"),rt.y2axis&&(rt.yaxes[1]=e.extend(!0,{},rt.yaxis,rt.y2axis),rt.yaxes[1].position="right"),rt.grid.coloredAreas&&(rt.grid.markings=rt.grid.coloredAreas),rt.grid.coloredAreasColor&&(rt.grid.markingsColor=rt.grid.coloredAreasColor),rt.lines&&e.extend(!0,rt.series.lines,rt.lines),rt.points&&e.extend(!0,rt.series.points,rt.points),rt.bars&&e.extend(!0,rt.series.bars,rt.bars),null!=rt.shadowSize&&(rt.series.shadowSize=rt.shadowSize),n=0;rt.xaxes.length>n;++n)m(ht,n+1).options=rt.xaxes[n];for(n=0;rt.yaxes.length>n;++n)m(pt,n+1).options=rt.yaxes[n];for(var i in yt)rt.hooks[i]&&rt.hooks[i].length&&(yt[i]=yt[i].concat(rt.hooks[i]));s(yt.processOptions,[rt])}function u(e){at=d(e),v(),b()}function d(t){for(var n=[],i=0;t.length>i;++i){var o=e.extend(!0,{},rt.series);null!=t[i].data?(o.data=t[i].data,delete t[i].data,e.extend(!0,o,t[i]),t[i].data=o.data):o.data=t[i],n.push(o)}return n}function h(e,t){var n=e[t+"axis"];return"object"==typeof n&&(n=n.n),"number"!=typeof n&&(n=1),n}function p(){return e.grep(ht.concat(pt),function(e){return e})}function f(e){var t,n,i={};for(t=0;ht.length>t;++t)n=ht[t],n&&n.used&&(i["x"+n.n]=n.c2p(e.left));for(t=0;pt.length>t;++t)n=pt[t],n&&n.used&&(i["y"+n.n]=n.c2p(e.top));return void 0!==i.x1&&(i.x=i.x1),void 0!==i.y1&&(i.y=i.y1),i}function g(e){var t,n,i,o={};for(t=0;ht.length>t;++t)if(n=ht[t],n&&n.used&&(i="x"+n.n,null==e[i]&&1==n.n&&(i="x"),null!=e[i])){o.left=n.p2c(e[i]);break}for(t=0;pt.length>t;++t)if(n=pt[t],n&&n.used&&(i="y"+n.n,null==e[i]&&1==n.n&&(i="y"),null!=e[i])){o.top=n.p2c(e[i]);break}return o}function m(t,n){return t[n-1]||(t[n-1]={n:n,direction:t==ht?"x":"y",options:e.extend(!0,{},t==ht?rt.xaxis:rt.yaxis)}),t[n-1]}function v(){var t,n=at.length,i=[],o=[];for(t=0;at.length>t;++t){var a=at[t].color;null!=a&&(--n,"number"==typeof a?o.push(a):i.push(e.color.parse(at[t].color)))}for(t=0;o.length>t;++t)n=Math.max(n,o[t]+1);var r=[],s=0;for(t=0;n>r.length;){var l;l=rt.colors.length==t?e.color.make(100,100,100):e.color.parse(rt.colors[t]);var c=1==s%2?-1:1;l.scale("rgb",1+.2*c*Math.ceil(s/2)),r.push(l),++t,t>=rt.colors.length&&(t=0,++s)}var u,d=0;for(t=0;at.length>t;++t){if(u=at[t],null==u.color?(u.color=r[d].toString(),++d):"number"==typeof u.color&&(u.color=r[u.color].toString()),null==u.lines.show){var p,f=!0;for(p in u)if(u[p]&&u[p].show){f=!1;break}f&&(u.lines.show=!0)}u.xaxis=m(ht,h(u,"x")),u.yaxis=m(pt,h(u,"y"))}}function b(){function t(e,t,n){e.datamin>t&&t!=-m&&(e.datamin=t),n>e.datamax&&n!=m&&(e.datamax=n)}var n,i,o,a,r,l,c,u,d,h,f=Number.POSITIVE_INFINITY,g=Number.NEGATIVE_INFINITY,m=Number.MAX_VALUE;for(e.each(p(),function(e,t){t.datamin=f,t.datamax=g,t.used=!1}),n=0;at.length>n;++n)r=at[n],r.datapoints={points:[]},s(yt.processRawData,[r,r.data,r.datapoints]);for(n=0;at.length>n;++n){r=at[n];var v=r.data,b=r.datapoints.format;if(b||(b=[],b.push({x:!0,number:!0,required:!0}),b.push({y:!0,number:!0,required:!0}),(r.bars.show||r.lines.show&&r.lines.fill)&&(b.push({y:!0,number:!0,required:!1,defaultValue:0}),r.bars.horizontal&&(delete b[b.length-1].y,b[b.length-1].x=!0)),r.datapoints.format=b),null==r.datapoints.pointsize)for(r.datapoints.pointsize=b.length,c=r.datapoints.pointsize,l=r.datapoints.points,insertSteps=r.lines.show&&r.lines.steps,r.xaxis.used=r.yaxis.used=!0,i=o=0;v.length>i;++i,o+=c){h=v[i];var y=null==h;if(!y)for(a=0;c>a;++a)u=h[a],d=b[a],d&&(d.number&&null!=u&&(u=+u,isNaN(u)?u=null:1/0==u?u=m:u==-1/0&&(u=-m)),null==u&&(d.required&&(y=!0),null!=d.defaultValue&&(u=d.defaultValue))),l[o+a]=u;if(y)for(a=0;c>a;++a)u=l[o+a],null!=u&&(d=b[a],d.x&&t(r.xaxis,u,u),d.y&&t(r.yaxis,u,u)),l[o+a]=null;else if(insertSteps&&o>0&&null!=l[o-c]&&l[o-c]!=l[o]&&l[o-c+1]!=l[o+1]){for(a=0;c>a;++a)l[o+c+a]=l[o+a];l[o+1]=l[o-c+1],o+=c}}}for(n=0;at.length>n;++n)r=at[n],s(yt.processDatapoints,[r,r.datapoints]);for(n=0;at.length>n;++n){r=at[n],l=r.datapoints.points,c=r.datapoints.pointsize;var C=f,T=f,E=g,D=g;for(i=0;l.length>i;i+=c)if(null!=l[i])for(a=0;c>a;++a)u=l[i+a],d=b[a],d&&u!=m&&u!=-m&&(d.x&&(C>u&&(C=u),u>E&&(E=u)),d.y&&(T>u&&(T=u),u>D&&(D=u)));if(r.bars.show){var x="left"==r.bars.align?0:-r.bars.barWidth/2;r.bars.horizontal?(T+=x,D+=x+r.bars.barWidth):(C+=x,E+=x+r.bars.barWidth)}t(r.xaxis,C,E),t(r.yaxis,T,D)}e.each(p(),function(e,t){t.datamin==f&&(t.datamin=null),t.datamax==g&&(t.datamax=null)})}function y(n,i){var o=document.createElement("canvas");return o.className=i,o.width=gt,o.height=mt,n||e(o).css({position:"absolute",left:0,top:0}),e(o).appendTo(t),o.getContext||(o=window.G_vmlCanvasManager.initElement(o)),o.getContext("2d").save(),o}function C(){if(gt=t.width(),mt=t.height(),0>=gt||0>=mt)throw"Invalid dimensions for plot, width = "+gt+", height = "+mt}function T(e){e.width!=gt&&(e.width=gt),e.height!=mt&&(e.height=mt);var t=e.getContext("2d");t.restore(),t.save()}function E(){var n,i=t.children("canvas.base"),o=t.children("canvas.overlay");0==i.length||0==o?(t.html(""),t.css({padding:0}),"static"==t.css("position")&&t.css("position","relative"),C(),st=y(!0,"base"),lt=y(!1,"overlay"),n=!1):(st=i.get(0),lt=o.get(0),n=!0),ut=st.getContext("2d"),dt=lt.getContext("2d"),ct=e([lt,st]),n&&(t.data("plot").shutdown(),Ct.resize(),dt.clearRect(0,0,gt,mt),ct.unbind(),t.children().not([st,lt]).remove()),t.data("plot",Ct)}function D(){rt.grid.hoverable&&(ct.mousemove(V),ct.mouseleave(X)),rt.grid.clickable&&ct.click(Y),s(yt.bindEvents,[ct])}function x(){Et&&clearTimeout(Et),ct.unbind("mousemove",V),ct.unbind("mouseleave",X),ct.unbind("click",Y),s(yt.shutdown,[ct])}function _(e){function t(e){return e}var n,i,o=e.options.transform||t,a=e.options.inverseTransform;"x"==e.direction?(n=e.scale=vt/Math.abs(o(e.max)-o(e.min)),i=Math.min(o(e.max),o(e.min))):(n=e.scale=bt/Math.abs(o(e.max)-o(e.min)),n=-n,i=Math.max(o(e.max),o(e.min))),e.p2c=o==t?function(e){return(e-i)*n}:function(e){return(o(e)-i)*n},e.c2p=a?function(e){return a(i+e/n)}:function(e){return i+e/n}}function I(n){function i(i,o){return e('<div style="position:absolute;top:-10000px;'+o+'font-size:smaller">'+'<div class="'+n.direction+"Axis "+n.direction+n.n+'Axis">'+i.join("")+"</div></div>").appendTo(t)}var o,a,r,s=n.options,l=n.ticks||[],c=[],u=s.labelWidth,d=s.labelHeight;if("x"==n.direction){if(null==u&&(u=Math.floor(gt/(l.length>0?l.length:1))),null==d){for(c=[],o=0;l.length>o;++o)a=l[o].label,a&&c.push('<div class="tickLabel" style="float:left;width:'+u+'px">'+a+"</div>");c.length>0&&(c.push('<div style="clear:left"></div>'),r=i(c,"width:10000px;"),d=r.height(),r.remove())}}else if(null==u||null==d){for(o=0;l.length>o;++o)a=l[o].label,a&&c.push('<div class="tickLabel">'+a+"</div>");c.length>0&&(r=i(c,""),null==u&&(u=r.children().width()),null==d&&(d=r.find("div.tickLabel").height()),r.remove())}null==u&&(u=0),null==d&&(d=0),n.labelWidth=u,n.labelHeight=d}function w(t){var n=t.labelWidth,i=t.labelHeight,o=t.options.position,a=t.options.tickLength,r=rt.grid.axisMargin,s=rt.grid.labelMargin,l="x"==t.direction?ht:pt,c=e.grep(l,function(e){return e&&e.options.position==o&&e.reserveSpace});e.inArray(t,c)==c.length-1&&(r=0),null==a&&(a="full");var u=e.grep(l,function(e){return e&&e.reserveSpace}),d=0==e.inArray(t,u);d||"full"!=a||(a=5),isNaN(+a)||(s+=+a),"x"==t.direction?(i+=s,"bottom"==o?(ft.bottom+=i+r,t.box={top:mt-ft.bottom,height:i}):(t.box={top:ft.top+r,height:i},ft.top+=i+r)):(n+=s,"left"==o?(t.box={left:ft.left+r,width:n},ft.left+=n+r):(ft.right+=n+r,t.box={left:gt-ft.right,width:n})),t.position=o,t.tickLength=a,t.box.padding=s,t.innermost=d}function k(e){"x"==e.direction?(e.box.left=ft.left,e.box.width=vt):(e.box.top=ft.top,e.box.height=bt)}function O(){var t,n=p();if(e.each(n,function(e,t){t.show=t.options.show,null==t.show&&(t.show=t.used),t.reserveSpace=t.show||t.options.reserveSpace,S(t)}),allocatedAxes=e.grep(n,function(e){return e.reserveSpace}),ft.left=ft.right=ft.top=ft.bottom=0,rt.grid.show){for(e.each(allocatedAxes,function(e,t){R(t),N(t),K(t,t.ticks),I(t)}),t=allocatedAxes.length-1;t>=0;--t)w(allocatedAxes[t]);var i=rt.grid.minBorderMargin;if(null==i)for(i=0,t=0;at.length>t;++t)i=Math.max(i,at[t].points.radius+at[t].points.lineWidth/2);for(var o in ft)ft[o]+=rt.grid.borderWidth,ft[o]=Math.max(i,ft[o])}vt=gt-ft.left-ft.right,bt=mt-ft.bottom-ft.top,e.each(n,function(e,t){_(t)}),rt.grid.show&&(e.each(allocatedAxes,function(e,t){k(t)}),L()),q()}function S(e){var t=e.options,n=+(null!=t.min?t.min:e.datamin),i=+(null!=t.max?t.max:e.datamax),o=i-n;if(0==o){var a=0==i?1:.01;null==t.min&&(n-=a),(null==t.max||null!=t.min)&&(i+=a)}else{var r=t.autoscaleMargin;null!=r&&(null==t.min&&(n-=o*r,0>n&&null!=e.datamin&&e.datamin>=0&&(n=0)),null==t.max&&(i+=o*r,i>0&&null!=e.datamax&&0>=e.datamax&&(i=0)))}e.min=n,e.max=i}function R(t){var i,o=t.options;i="number"==typeof o.ticks&&o.ticks>0?o.ticks:.3*Math.sqrt("x"==t.direction?gt:mt);var a,r,s,l,c,u,d,h=(t.max-t.min)/i;if("time"==o.mode){var p={second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,year:1e3*525949.2*60},f=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]],g=0;null!=o.minTickSize&&(g="number"==typeof o.tickSize?o.tickSize:o.minTickSize[0]*p[o.minTickSize[1]]);for(var c=0;f.length-1>c&&!((f[c][0]*p[f[c][1]]+f[c+1][0]*p[f[c+1][1]])/2>h&&f[c][0]*p[f[c][1]]>=g);++c);a=f[c][0],s=f[c][1],"year"==s&&(u=Math.pow(10,Math.floor(Math.log(h/p.year)/Math.LN10)),d=h/p.year/u,a=1.5>d?1:3>d?2:7.5>d?5:10,a*=u),t.tickSize=o.tickSize||[a,s],r=function(e){var t=[],i=e.tickSize[0],o=e.tickSize[1],a=new Date(e.min),r=i*p[o];"second"==o&&a.setUTCSeconds(n(a.getUTCSeconds(),i)),"minute"==o&&a.setUTCMinutes(n(a.getUTCMinutes(),i)),"hour"==o&&a.setUTCHours(n(a.getUTCHours(),i)),"month"==o&&a.setUTCMonth(n(a.getUTCMonth(),i)),"year"==o&&a.setUTCFullYear(n(a.getUTCFullYear(),i)),a.setUTCMilliseconds(0),r>=p.minute&&a.setUTCSeconds(0),r>=p.hour&&a.setUTCMinutes(0),r>=p.day&&a.setUTCHours(0),r>=4*p.day&&a.setUTCDate(1),r>=p.year&&a.setUTCMonth(0);var s,l=0,c=Number.NaN;do if(s=c,c=a.getTime(),t.push(c),"month"==o)if(1>i){a.setUTCDate(1);var u=a.getTime();a.setUTCMonth(a.getUTCMonth()+1);var d=a.getTime();a.setTime(c+l*p.hour+(d-u)*i),l=a.getUTCHours(),a.setUTCHours(0)}else a.setUTCMonth(a.getUTCMonth()+i);else"year"==o?a.setUTCFullYear(a.getUTCFullYear()+i):a.setTime(c+r);while(e.max>c&&c!=s);return t},l=function(t,n){var i=new Date(t);if(null!=o.timeformat)return e.plot.formatDate(i,o.timeformat,o.monthNames);var a=n.tickSize[0]*p[n.tickSize[1]],r=n.max-n.min,s=o.twelveHourClock?" %p":"";return fmt=p.minute>a?"%h:%M:%S"+s:p.day>a?2*p.day>r?"%h:%M"+s:"%b %d %h:%M"+s:p.month>a?"%b %d":p.year>a?p.year>r?"%b":"%b %y":"%y",e.plot.formatDate(i,fmt,o.monthNames)}}else{var m=o.tickDecimals,v=-Math.floor(Math.log(h)/Math.LN10);null!=m&&v>m&&(v=m),u=Math.pow(10,-v),d=h/u,1.5>d?a=1:3>d?(a=2,d>2.25&&(null==m||m>=v+1)&&(a=2.5,++v)):a=7.5>d?5:10,a*=u,null!=o.minTickSize&&o.minTickSize>a&&(a=o.minTickSize),t.tickDecimals=Math.max(0,null!=m?m:v),t.tickSize=o.tickSize||a,r=function(e){var t,i=[],o=n(e.min,e.tickSize),a=0,r=Number.NaN;do t=r,r=o+a*e.tickSize,i.push(r),++a;while(e.max>r&&r!=t);return i},l=function(e,t){return e.toFixed(t.tickDecimals)}}if(null!=o.alignTicksWithAxis){var b=("x"==t.direction?ht:pt)[o.alignTicksWithAxis-1];if(b&&b.used&&b!=t){var y=r(t);if(y.length>0&&(null==o.min&&(t.min=Math.min(t.min,y[0])),null==o.max&&y.length>1&&(t.max=Math.max(t.max,y[y.length-1]))),r=function(e){var t,n,i=[];for(n=0;b.ticks.length>n;++n)t=(b.ticks[n].v-b.min)/(b.max-b.min),t=e.min+t*(e.max-e.min),i.push(t);return i},"time"!=t.mode&&null==o.tickDecimals){var C=Math.max(0,-Math.floor(Math.log(h)/Math.LN10)+1),T=r(t);T.length>1&&/\..*0$/.test((T[1]-T[0]).toFixed(C))||(t.tickDecimals=C)}}}t.tickGenerator=r,t.tickFormatter=e.isFunction(o.tickFormatter)?function(e,t){return""+o.tickFormatter(e,t)}:l}function N(t){var n=t.options.ticks,i=[];null==n||"number"==typeof n&&n>0?i=t.tickGenerator(t):n&&(i=e.isFunction(n)?n({min:t.min,max:t.max}):n);var o,a;for(t.ticks=[],o=0;i.length>o;++o){var r=null,s=i[o];"object"==typeof s?(a=+s[0],s.length>1&&(r=s[1])):a=+s,null==r&&(r=t.tickFormatter(a,t)),isNaN(a)||t.ticks.push({v:a,label:r})}}function K(e,t){e.options.autoscaleMargin&&t.length>0&&(null==e.options.min&&(e.min=Math.min(e.min,t[0].v)),null==e.options.max&&t.length>1&&(e.max=Math.max(e.max,t[t.length-1].v)))}function A(){ut.clearRect(0,0,gt,mt);var e=rt.grid;e.show&&e.backgroundColor&&M(),e.show&&!e.aboveData&&$();for(var t=0;at.length>t;++t)s(yt.drawSeries,[ut,at[t]]),F(at[t]);s(yt.draw,[ut]),e.show&&e.aboveData&&$()}function P(e,t){var n,o,a,r,s=p();for(i=0;s.length>i;++i)if(n=s[i],n.direction==t&&(r=t+n.n+"axis",e[r]||1!=n.n||(r=t+"axis"),e[r])){o=e[r].from,a=e[r].to;break}if(e[r]||(n="x"==t?ht[0]:pt[0],o=e[t+"1"],a=e[t+"2"]),null!=o&&null!=a&&o>a){var l=o;o=a,a=l}return{from:o,to:a,axis:n}}function M(){ut.save(),ut.translate(ft.left,ft.top),ut.fillStyle=ot(rt.grid.backgroundColor,bt,0,"rgba(255, 255, 255, 0)"),ut.fillRect(0,0,vt,bt),ut.restore()}function $(){var t;ut.save(),ut.translate(ft.left,ft.top);var n=rt.grid.markings;if(n){if(e.isFunction(n)){var i=Ct.getAxes();i.xmin=i.xaxis.min,i.xmax=i.xaxis.max,i.ymin=i.yaxis.min,i.ymax=i.yaxis.max,n=n(i)}for(t=0;n.length>t;++t){var o=n[t],a=P(o,"x"),r=P(o,"y");null==a.from&&(a.from=a.axis.min),null==a.to&&(a.to=a.axis.max),null==r.from&&(r.from=r.axis.min),null==r.to&&(r.to=r.axis.max),a.to<a.axis.min||a.from>a.axis.max||r.to<r.axis.min||r.from>r.axis.max||(a.from=Math.max(a.from,a.axis.min),a.to=Math.min(a.to,a.axis.max),r.from=Math.max(r.from,r.axis.min),r.to=Math.min(r.to,r.axis.max),(a.from!=a.to||r.from!=r.to)&&(a.from=a.axis.p2c(a.from),a.to=a.axis.p2c(a.to),r.from=r.axis.p2c(r.from),r.to=r.axis.p2c(r.to),a.from==a.to||r.from==r.to?(ut.beginPath(),ut.strokeStyle=o.color||rt.grid.markingsColor,ut.lineWidth=o.lineWidth||rt.grid.markingsLineWidth,ut.moveTo(a.from,r.from),ut.lineTo(a.to,r.to),ut.stroke()):(ut.fillStyle=o.color||rt.grid.markingsColor,ut.fillRect(a.from,r.to,a.to-a.from,r.from-r.to))))}}for(var i=p(),s=rt.grid.borderWidth,l=0;i.length>l;++l){var c,u,d,h,f=i[l],g=f.box,m=f.tickLength;if(f.show&&0!=f.ticks.length){for(ut.strokeStyle=f.options.tickColor||e.color.parse(f.options.color).scale("a",.22).toString(),ut.lineWidth=1,"x"==f.direction?(c=0,u="full"==m?"top"==f.position?0:bt:g.top-ft.top+("top"==f.position?g.height:0)):(u=0,c="full"==m?"left"==f.position?0:vt:g.left-ft.left+("left"==f.position?g.width:0)),f.innermost||(ut.beginPath(),d=h=0,"x"==f.direction?d=vt:h=bt,1==ut.lineWidth&&(c=Math.floor(c)+.5,u=Math.floor(u)+.5),ut.moveTo(c,u),ut.lineTo(c+d,u+h),ut.stroke()),ut.beginPath(),t=0;f.ticks.length>t;++t){var v=f.ticks[t].v;d=h=0,f.min>v||v>f.max||"full"==m&&s>0&&(v==f.min||v==f.max)||("x"==f.direction?(c=f.p2c(v),h="full"==m?-bt:m,"top"==f.position&&(h=-h)):(u=f.p2c(v),d="full"==m?-vt:m,"left"==f.position&&(d=-d)),1==ut.lineWidth&&("x"==f.direction?c=Math.floor(c)+.5:u=Math.floor(u)+.5),ut.moveTo(c,u),ut.lineTo(c+d,u+h))}ut.stroke()}}s&&(ut.lineWidth=s,ut.strokeStyle=rt.grid.borderColor,ut.strokeRect(-s/2,-s/2,vt+s,bt+s)),ut.restore()}function L(){t.find(".tickLabels").remove();for(var e=['<div class="tickLabels" style="font-size:smaller">'],n=p(),i=0;n.length>i;++i){var o=n[i],a=o.box;if(o.show){e.push('<div class="'+o.direction+"Axis "+o.direction+o.n+'Axis" style="color:'+o.options.color+'">');for(var r=0;o.ticks.length>r;++r){var s=o.ticks[r];if(!(!s.label||s.v<o.min||s.v>o.max)){var l,c={};"x"==o.direction?(l="center",c.left=Math.round(ft.left+o.p2c(s.v)-o.labelWidth/2),"bottom"==o.position?c.top=a.top+a.padding:c.bottom=mt-(a.top+a.height-a.padding)):(c.top=Math.round(ft.top+o.p2c(s.v)-o.labelHeight/2),"left"==o.position?(c.right=gt-(a.left+a.width-a.padding),l="right"):(c.left=a.left+a.padding,l="left")),c.width=o.labelWidth;var u=["position:absolute","text-align:"+l];for(var d in c)u.push(d+":"+c[d]+"px");e.push('<div class="tickLabel" style="'+u.join(";")+'">'+s.label+"</div>")}}e.push("</div>")}}e.push("</div>"),t.append(e.join(""))}function F(e){e.lines.show&&B(e),e.bars.show&&W(e),e.points.show&&H(e)}function B(e){function t(e,t,n,i,o){var a=e.points,r=e.pointsize,s=null,l=null;ut.beginPath();for(var c=r;a.length>c;c+=r){var u=a[c-r],d=a[c-r+1],h=a[c],p=a[c+1];if(null!=u&&null!=h){if(p>=d&&o.min>d){if(o.min>p)continue;u=(o.min-d)/(p-d)*(h-u)+u,d=o.min}else if(d>=p&&o.min>p){if(o.min>d)continue;h=(o.min-d)/(p-d)*(h-u)+u,p=o.min}if(d>=p&&d>o.max){if(p>o.max)continue;u=(o.max-d)/(p-d)*(h-u)+u,d=o.max}else if(p>=d&&p>o.max){if(d>o.max)continue;h=(o.max-d)/(p-d)*(h-u)+u,p=o.max}if(h>=u&&i.min>u){if(i.min>h)continue;d=(i.min-u)/(h-u)*(p-d)+d,u=i.min}else if(u>=h&&i.min>h){if(i.min>u)continue;p=(i.min-u)/(h-u)*(p-d)+d,h=i.min}if(u>=h&&u>i.max){if(h>i.max)continue;d=(i.max-u)/(h-u)*(p-d)+d,u=i.max}else if(h>=u&&h>i.max){if(u>i.max)continue;p=(i.max-u)/(h-u)*(p-d)+d,h=i.max}(u!=s||d!=l)&&ut.moveTo(i.p2c(u)+t,o.p2c(d)+n),s=h,l=p,ut.lineTo(i.p2c(h)+t,o.p2c(p)+n)}}ut.stroke()}function n(e,t,n){for(var i=e.points,o=e.pointsize,a=Math.min(Math.max(0,n.min),n.max),r=0,s=!1,l=1,c=0,u=0;;){if(o>0&&r>i.length+o)break;r+=o;var d=i[r-o],h=i[r-o+l],p=i[r],f=i[r+l];if(s){if(o>0&&null!=d&&null==p){u=r,o=-o,l=2;continue}if(0>o&&r==c+o){ut.fill(),s=!1,o=-o,l=1,r=c=u+o;continue}}if(null!=d&&null!=p){if(p>=d&&t.min>d){if(t.min>p)continue;h=(t.min-d)/(p-d)*(f-h)+h,d=t.min}else if(d>=p&&t.min>p){if(t.min>d)continue;f=(t.min-d)/(p-d)*(f-h)+h,p=t.min}if(d>=p&&d>t.max){if(p>t.max)continue;h=(t.max-d)/(p-d)*(f-h)+h,d=t.max}else if(p>=d&&p>t.max){if(d>t.max)continue;f=(t.max-d)/(p-d)*(f-h)+h,p=t.max}if(s||(ut.beginPath(),ut.moveTo(t.p2c(d),n.p2c(a)),s=!0),h>=n.max&&f>=n.max)ut.lineTo(t.p2c(d),n.p2c(n.max)),ut.lineTo(t.p2c(p),n.p2c(n.max));else if(n.min>=h&&n.min>=f)ut.lineTo(t.p2c(d),n.p2c(n.min)),ut.lineTo(t.p2c(p),n.p2c(n.min));else{var g=d,m=p;f>=h&&n.min>h&&f>=n.min?(d=(n.min-h)/(f-h)*(p-d)+d,h=n.min):h>=f&&n.min>f&&h>=n.min&&(p=(n.min-h)/(f-h)*(p-d)+d,f=n.min),h>=f&&h>n.max&&n.max>=f?(d=(n.max-h)/(f-h)*(p-d)+d,h=n.max):f>=h&&f>n.max&&n.max>=h&&(p=(n.max-h)/(f-h)*(p-d)+d,f=n.max),d!=g&&ut.lineTo(t.p2c(g),n.p2c(h)),ut.lineTo(t.p2c(d),n.p2c(h)),ut.lineTo(t.p2c(p),n.p2c(f)),p!=m&&(ut.lineTo(t.p2c(p),n.p2c(f)),ut.lineTo(t.p2c(m),n.p2c(f)))}}}}ut.save(),ut.translate(ft.left,ft.top),ut.lineJoin="round";var i=e.lines.lineWidth,o=e.shadowSize;if(i>0&&o>0){ut.lineWidth=o,ut.strokeStyle="rgba(0,0,0,0.1)";var a=Math.PI/18;t(e.datapoints,Math.sin(a)*(i/2+o/2),Math.cos(a)*(i/2+o/2),e.xaxis,e.yaxis),ut.lineWidth=o/2,t(e.datapoints,Math.sin(a)*(i/2+o/4),Math.cos(a)*(i/2+o/4),e.xaxis,e.yaxis)}ut.lineWidth=i,ut.strokeStyle=e.color;var r=z(e.lines,e.color,0,bt);r&&(ut.fillStyle=r,n(e.datapoints,e.xaxis,e.yaxis)),i>0&&t(e.datapoints,0,0,e.xaxis,e.yaxis),ut.restore()}function H(e){function t(e,t,n,i,o,a,r,s){for(var l=e.points,c=e.pointsize,u=0;l.length>u;u+=c){var d=l[u],h=l[u+1];null==d||a.min>d||d>a.max||r.min>h||h>r.max||(ut.beginPath(),d=a.p2c(d),h=r.p2c(h)+i,"circle"==s?ut.arc(d,h,t,0,o?Math.PI:2*Math.PI,!1):s(ut,d,h,t,o),ut.closePath(),n&&(ut.fillStyle=n,ut.fill()),ut.stroke())}}ut.save(),ut.translate(ft.left,ft.top);var n=e.points.lineWidth,i=e.shadowSize,o=e.points.radius,a=e.points.symbol;if(n>0&&i>0){var r=i/2;ut.lineWidth=r,ut.strokeStyle="rgba(0,0,0,0.1)",t(e.datapoints,o,null,r+r/2,!0,e.xaxis,e.yaxis,a),ut.strokeStyle="rgba(0,0,0,0.2)",t(e.datapoints,o,null,r/2,!0,e.xaxis,e.yaxis,a)}ut.lineWidth=n,ut.strokeStyle=e.color,t(e.datapoints,o,z(e.points,e.color),0,!1,e.xaxis,e.yaxis,a),ut.restore()}function j(e,t,n,i,o,a,r,s,l,c,u,d){var h,p,f,g,m,v,b,y,C;u?(y=v=b=!0,m=!1,h=n,p=e,g=t+i,f=t+o,h>p&&(C=p,p=h,h=C,m=!0,v=!1)):(m=v=b=!0,y=!1,h=e+i,p=e+o,f=n,g=t,f>g&&(C=g,g=f,f=C,y=!0,b=!1)),s.min>p||h>s.max||l.min>g||f>l.max||(s.min>h&&(h=s.min,m=!1),p>s.max&&(p=s.max,v=!1),l.min>f&&(f=l.min,y=!1),g>l.max&&(g=l.max,b=!1),h=s.p2c(h),f=l.p2c(f),p=s.p2c(p),g=l.p2c(g),r&&(c.beginPath(),c.moveTo(h,f),c.lineTo(h,g),c.lineTo(p,g),c.lineTo(p,f),c.fillStyle=r(f,g),c.fill()),d>0&&(m||v||b||y)&&(c.beginPath(),c.moveTo(h,f+a),m?c.lineTo(h,g+a):c.moveTo(h,g+a),b?c.lineTo(p,g+a):c.moveTo(p,g+a),v?c.lineTo(p,f+a):c.moveTo(p,f+a),y?c.lineTo(h,f+a):c.moveTo(h,f+a),c.stroke()))}function W(e){function t(t,n,i,o,a,r,s){for(var l=t.points,c=t.pointsize,u=0;l.length>u;u+=c)null!=l[u]&&j(l[u],l[u+1],l[u+2],n,i,o,a,r,s,ut,e.bars.horizontal,e.bars.lineWidth)}ut.save(),ut.translate(ft.left,ft.top),ut.lineWidth=e.bars.lineWidth,ut.strokeStyle=e.color;var n="left"==e.bars.align?0:-e.bars.barWidth/2,i=e.bars.fill?function(t,n){return z(e.bars,e.color,t,n)}:null;t(e.datapoints,n,n+e.bars.barWidth,0,i,e.xaxis,e.yaxis),ut.restore()}function z(t,n,i,o){var a=t.fill;if(!a)return null;if(t.fillColor)return ot(t.fillColor,i,o,n);var r=e.color.parse(n);return r.a="number"==typeof a?a:.4,r.normalize(),r.toString()}function q(){if(t.find(".legend").remove(),rt.legend.show){for(var n,i,o=[],a=!1,r=rt.legend.labelFormatter,s=0;at.length>s;++s)n=at[s],i=n.label,i&&(0==s%rt.legend.noColumns&&(a&&o.push("</tr>"),o.push("<tr>"),a=!0),r&&(i=r(i,n)),o.push('<td class="legendColorBox"><div style="'+rt.legend.labelBoxBorderColor+'"><div style="width:15px;height:0;border:3px solid '+n.color+';overflow:hidden"></div></div></td>'+'<td class="legendLabel"><span>'+i+"</span></td>"));if(a&&o.push("</tr>"),0!=o.length){var l='<table style="font-size: 11px; color:'+rt.grid.color+'">'+o.join("")+"</table>";if(null!=rt.legend.container)e(rt.legend.container).html(l);else{var c="",u=rt.legend.position,d=rt.legend.margin;null==d[0]&&(d=[d,d]),"n"==u.charAt(0)?c+="top:"+(d[1]+ft.top)+"px;":"s"==u.charAt(0)&&(c+="bottom:"+(d[1]+ft.bottom)+"px;"),"e"==u.charAt(1)?c+="right:"+(d[0]+ft.right)+"px;":"w"==u.charAt(1)&&(c+="left:"+(d[0]+ft.left)+"px;");var h=e('<div class="legend">'+l.replace('style="','style="position:absolute;'+c+";")+"</div>").appendTo(t);if(0!=rt.legend.backgroundOpacity){var p=rt.legend.backgroundColor;null==p&&(p=rt.grid.backgroundColor,p=p&&"string"==typeof p?e.color.parse(p):e.color.extract(h,"background-color"),p.a=1,p=p.toString());var f=h.children();e('<div style="position:absolute;width:'+f.width()+"px;height:"+f.height()+"px;"+c+"background-color:"+p+';"> </div>').prependTo(h).css("opacity",rt.legend.backgroundOpacity)}}}}}function U(e,t,n){var i,o,a=rt.grid.mouseActiveRadius,r=a*a+1,s=null;for(i=at.length-1;i>=0;--i)if(n(at[i])){var l=at[i],c=l.xaxis,u=l.yaxis,d=l.datapoints.points,h=l.datapoints.pointsize,p=c.c2p(e),f=u.c2p(t),g=a/c.scale,m=a/u.scale;if(c.options.inverseTransform&&(g=Number.MAX_VALUE),u.options.inverseTransform&&(m=Number.MAX_VALUE),l.lines.show||l.points.show)for(o=0;d.length>o;o+=h){var v=d[o],b=d[o+1];if(null!=v&&!(v-p>g||-g>v-p||b-f>m||-m>b-f)){var y=Math.abs(c.p2c(v)-e),C=Math.abs(u.p2c(b)-t),T=y*y+C*C;r>T&&(r=T,s=[i,o/h])}}if(l.bars.show&&!s){var E="left"==l.bars.align?0:-l.bars.barWidth/2,D=E+l.bars.barWidth;for(o=0;d.length>o;o+=h){var v=d[o],b=d[o+1],x=d[o+2];null!=v&&(at[i].bars.horizontal?Math.max(x,v)>=p&&p>=Math.min(x,v)&&f>=b+E&&b+D>=f:p>=v+E&&v+D>=p&&f>=Math.min(x,b)&&Math.max(x,b)>=f)&&(s=[i,o/h])}}}return s?(i=s[0],o=s[1],h=at[i].datapoints.pointsize,{datapoint:at[i].datapoints.points.slice(o*h,(o+1)*h),dataIndex:o,series:at[i],seriesIndex:i}):null}function V(e){rt.grid.hoverable&&G("plothover",e,function(e){return 0!=e.hoverable})}function X(e){rt.grid.hoverable&&G("plothover",e,function(){return!1})}function Y(e){G("plotclick",e,function(e){return 0!=e.clickable})}function G(e,n,i){var o=ct.offset(),a=n.pageX-o.left-ft.left,r=n.pageY-o.top-ft.top,s=f({left:a,top:r});s.pageX=n.pageX,s.pageY=n.pageY;var l=U(a,r,i);if(l&&(l.pageX=parseInt(l.series.xaxis.p2c(l.datapoint[0])+o.left+ft.left),l.pageY=parseInt(l.series.yaxis.p2c(l.datapoint[1])+o.top+ft.top)),rt.grid.autoHighlight){for(var c=0;Tt.length>c;++c){var u=Tt[c];u.auto!=e||l&&u.series==l.series&&u.point[0]==l.datapoint[0]&&u.point[1]==l.datapoint[1]||et(u.series,u.point)}l&&Z(l.series,l.datapoint,e)}t.trigger(e,[s,l])}function J(){Et||(Et=setTimeout(Q,30))}function Q(){Et=null,dt.save(),dt.clearRect(0,0,gt,mt),dt.translate(ft.left,ft.top);var e,t;for(e=0;Tt.length>e;++e)t=Tt[e],t.series.bars.show?it(t.series,t.point):nt(t.series,t.point);dt.restore(),s(yt.drawOverlay,[dt])}function Z(e,t,n){if("number"==typeof e&&(e=at[e]),"number"==typeof t){var i=e.datapoints.pointsize;t=e.datapoints.points.slice(i*t,i*(t+1))}var o=tt(e,t);-1==o?(Tt.push({series:e,point:t,auto:n}),J()):n||(Tt[o].auto=!1)}function et(e,t){null==e&&null==t&&(Tt=[],J()),"number"==typeof e&&(e=at[e]),"number"==typeof t&&(t=e.data[t]);var n=tt(e,t);-1!=n&&(Tt.splice(n,1),J())}function tt(e,t){for(var n=0;Tt.length>n;++n){var i=Tt[n];if(i.series==e&&i.point[0]==t[0]&&i.point[1]==t[1])return n}return-1}function nt(t,n){var i=n[0],o=n[1],a=t.xaxis,r=t.yaxis;if(!(a.min>i||i>a.max||r.min>o||o>r.max)){var s=t.points.radius+t.points.lineWidth/2;dt.lineWidth=s,dt.strokeStyle=e.color.parse(t.color).scale("a",.5).toString();var l=1.5*s,i=a.p2c(i),o=r.p2c(o);dt.beginPath(),"circle"==t.points.symbol?dt.arc(i,o,l,0,2*Math.PI,!1):t.points.symbol(dt,i,o,l,!1),dt.closePath(),dt.stroke()}}function it(t,n){dt.lineWidth=t.bars.lineWidth,dt.strokeStyle=e.color.parse(t.color).scale("a",.5).toString();var i=e.color.parse(t.color).scale("a",.5).toString(),o="left"==t.bars.align?0:-t.bars.barWidth/2;j(n[0],n[1],n[2]||0,o,o+t.bars.barWidth,0,function(){return i},t.xaxis,t.yaxis,dt,t.bars.horizontal,t.bars.lineWidth)}function ot(t,n,i,o){if("string"==typeof t)return t;for(var a=ut.createLinearGradient(0,i,0,n),r=0,s=t.colors.length;s>r;++r){var l=t.colors[r];if("string"!=typeof l){var c=e.color.parse(o);null!=l.brightness&&(c=c.scale("rgb",l.brightness)),null!=l.opacity&&(c.a*=l.opacity),l=c.toString()}a.addColorStop(r/(s-1),l)}return a}var at=[],rt={colors:["#005683","#0099D7","#D43F26","#FFAA31","#C22439","#673499"],legend:{show:!0,noColumns:0,labelFormatter:null,labelBoxBorderColor:"#DDD",container:null,position:"ne",margin:[-5,-25],backgroundColor:"",backgroundOpacity:1},xaxis:{show:null,position:"bottom",mode:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:!1},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#DDD",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:1,barWidth:1,fill:!0,fillColor:{colors:[{opacity:.7},{opacity:1}]},align:"left",horizontal:!1},shadowSize:0},grid:{show:!0,aboveData:!1,color:"#666",backgroundColor:null,borderColor:"#F9F9F9",tickColor:"#DDD",labelMargin:10,axisMargin:10,borderWidth:0,minBorderMargin:10,markings:null,markingsColor:"#DDD",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:5},hooks:{}},st=null,lt=null,ct=null,ut=null,dt=null,ht=[],pt=[],ft={left:0,right:0,top:0,bottom:0},gt=0,mt=0,vt=0,bt=0,yt={processOptions:[],processRawData:[],processDatapoints:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},Ct=this;Ct.setData=u,Ct.setupGrid=O,Ct.draw=A,Ct.getPlaceholder=function(){return t},Ct.getCanvas=function(){return st},Ct.getPlotOffset=function(){return ft},Ct.width=function(){return vt},Ct.height=function(){return bt},Ct.offset=function(){var e=ct.offset();return e.left+=ft.left,e.top+=ft.top,e},Ct.getData=function(){return at},Ct.getAxes=function(){var t={};return e.each(ht.concat(pt),function(e,n){n&&(t[n.direction+(1!=n.n?n.n:"")+"axis"]=n)}),t},Ct.getXAxes=function(){return ht},Ct.getYAxes=function(){return pt},Ct.c2p=f,Ct.p2c=g,Ct.getOptions=function(){return rt},Ct.highlight=Z,Ct.unhighlight=et,Ct.triggerRedrawOverlay=J,Ct.pointOffset=function(e){return{left:parseInt(ht[h(e,"x")-1].p2c(+e.x)+ft.left),top:parseInt(pt[h(e,"y")-1].p2c(+e.y)+ft.top)}},Ct.shutdown=x,Ct.resize=function(){C(),T(st),T(lt)},Ct.hooks=yt,l(Ct),c(a),E(),u(o),O(),A(),D();var Tt=[],Et=null}function n(e,t){return t*Math.floor(e/t)}e.plot=function(n,i,o){var a=new t(e(n),i,o,e.plot.plugins);return a},e.plot.version="0.7",e.plot.plugins=[],e.plot.formatDate=function(e,t,n){var i=function(e){return e=""+e,1==e.length?"0"+e:e},o=[],a=!1,r=!1,s=e.getUTCHours(),l=12>s;null==n&&(n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),-1!=t.search(/%p|%P/)&&(s>12?s-=12:0==s&&(s=12));for(var c=0;t.length>c;++c){var u=t.charAt(c);if(a){switch(u){case"h":u=""+s;break;case"H":u=i(s);break;case"M":u=i(e.getUTCMinutes());
break;case"S":u=i(e.getUTCSeconds());break;case"d":u=""+e.getUTCDate();break;case"m":u=""+(e.getUTCMonth()+1);break;case"y":u=""+e.getUTCFullYear();break;case"b":u=""+n[e.getUTCMonth()];break;case"p":u=l?"am":"pm";break;case"P":u=l?"AM":"PM";break;case"0":u="",r=!0}u&&r&&(u=i(u),r=!1),o.push(u),r||(a=!1)}else"%"==u?a=!0:o.push(u)}return o.join("")}}(jQuery);