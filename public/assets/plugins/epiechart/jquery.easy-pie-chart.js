(function(){(function(e){return e.easyPieChart=function(t,n){var i,o,a,s,r,l,c,u=this;return this.el=t,this.$el=e(t),this.$el.data("easyPieChart",this),this.init=function(){var t;return u.options=e.extend({},e.easyPieChart.defaultOptions,n),t=parseInt(u.$el.data("percent"),10),u.percentage=0,u.canvas=e("<canvas width='"+u.options.size+"' height='"+u.options.size+"'></canvas>").get(0),u.$el.append(u.canvas),"undefined"!=typeof G_vmlCanvasManager&&null!==G_vmlCanvasManager&&G_vmlCanvasManager.initElement(u.canvas),u.ctx=u.canvas.getContext("2d"),u.ctx.translate(u.options.size/2,u.options.size/2),u.$el.addClass("easyPieChart"),u.$el.css({width:u.options.size,height:u.options.size,lineHeight:""+u.options.size+"px"}),u.update(t),u},this.update=function(e){return u.options.animate===!1?a(e):o(u.percentage,e)},l=function(){var e,t,n;for(u.ctx.fillStyle=u.options.scaleColor,u.ctx.lineWidth=1,n=[],e=t=0;24>=t;e=++t)n.push(i(e));return n},i=function(e){var t;return t=0===e%6?0:.017*u.options.size,u.ctx.save(),u.ctx.rotate(e*Math.PI/12),u.ctx.fillRect(u.options.size/2-t,0,.05*-u.options.size+t,1),u.ctx.restore()},c=function(){var e;return e=u.options.size/2-u.options.lineWidth/2,u.options.scaleColor!==!1&&(e-=.08*u.options.size),u.ctx.beginPath(),u.ctx.arc(0,0,e,0,2*Math.PI,!0),u.ctx.closePath(),u.ctx.strokeStyle=u.options.trackColor,u.ctx.lineWidth=u.options.lineWidth,u.ctx.stroke()},r=function(){return u.options.scaleColor!==!1&&l(),u.options.trackColor!==!1?c():void 0},a=function(t){var n;return r(),u.ctx.strokeStyle=e.isFunction(u.options.barColor)?u.options.barColor(t):u.options.barColor,u.ctx.lineCap=u.options.lineCap,n=u.options.size/2-u.options.lineWidth/2,u.options.scaleColor!==!1&&(n-=.08*u.options.size),u.ctx.save(),u.ctx.rotate(-Math.PI/2),u.ctx.beginPath(),u.ctx.arc(0,0,n,0,2*Math.PI*t/100,!1),u.ctx.stroke(),u.ctx.restore()},o=function(e,t){var n,i,o;return i=30,o=i*u.options.animate/1e3,n=0,u.options.onStart.call(u),u.percentage=t,u.animation&&(clearInterval(u.animation),u.animation=!1),u.animation=setInterval(function(){return u.ctx.clearRect(-u.options.size/2,-u.options.size/2,u.options.size,u.options.size),r.call(u),a.call(u,[s(n,e,t-e,o)]),n++,n/o>1?(clearInterval(u.animation),u.animation=!1,u.options.onStop.call(u)):void 0},1e3/i)},s=function(e,t,n,i){return e/=i/2,1>e?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},this.init()},e.easyPieChart.defaultOptions={barColor:"#ef1e25",trackColor:"#f2f2f2",scaleColor:"#dfe0e0",lineCap:"round",size:110,lineWidth:3,animate:!1,onStart:e.noop,onStop:e.noop},e.fn.easyPieChart=function(t){return e.each(this,function(n,i){var o;return o=e(i),o.data("easyPieChart")?void 0:o.data("easyPieChart",new e.easyPieChart(i,t))})},void 0})(jQuery)}).call(this);