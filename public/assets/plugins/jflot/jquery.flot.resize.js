/* Inline dependency: 
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(e,t,n){function i(){o=t[s](function(){a.each(function(){var t=e(this),n=t.width(),i=t.height(),o=e.data(this,c);(n!==o.w||i!==o.h)&&t.trigger(l,[o.w=n,o.h=i])}),i()},r[u])}var o,a=e([]),r=e.resize=e.extend(e.resize,{}),s="setTimeout",l="resize",c=l+"-special-event",u="delay",d="throttleWindow";r[u]=250,r[d]=!0,e.event.special[l]={setup:function(){if(!r[d]&&this[s])return!1;var t=e(this);a=a.add(t),e.data(this,c,{w:t.width(),h:t.height()}),1===a.length&&i()},teardown:function(){if(!r[d]&&this[s])return!1;var t=e(this);a=a.not(t),t.removeData(c),a.length||clearTimeout(o)},add:function(t){function i(t,i,a){var r=e(this),s=e.data(this,c);s.w=i!==n?i:r.width(),s.h=a!==n?a:r.height(),o.apply(this,arguments)}if(!r[d]&&this[s])return!1;var o;return e.isFunction(t)?(o=t,i):(o=t.handler,t.handler=i,void 0)}}})(jQuery,this),function(e){function t(e){function t(){var t=e.getPlaceholder();0!=t.width()&&0!=t.height()&&(e.resize(),e.setupGrid(),e.draw())}function n(e){e.getPlaceholder().resize(t)}function i(e){e.getPlaceholder().unbind("resize",t)}e.hooks.bindEvents.push(n),e.hooks.shutdown.push(i)}var n={};e.plot.plugins.push({init:t,options:n,name:"resize",version:"1.0"})}(jQuery);