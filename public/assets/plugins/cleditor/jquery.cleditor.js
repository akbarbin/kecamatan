/**
 @preserve CLEditor WYSIWYG HTML Editor v1.3.0
 http://premiumsoftware.net/cleditor
 requires jQuery v1.4.2 or later

 Copyright 2010, Chris Landowski, Premium Software, LLC
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function(e){function t(t){var n=this,i=t.target,o=e.data(i,S),a=J[o],s=a.popupName,r=Q[s];if(!n.disabled&&e(i).attr($)!=$){var l={editor:n,button:i,buttonName:o,popup:r,popupName:s,command:a.command,useCSS:n.options.useCSS};if(a.buttonClick&&a.buttonClick(t,l)===!1)return!1;if("source"==o)x(n)?(delete n.range,n.$area.hide(),n.$frame.show(),i.title=a.title):(n.$frame.hide(),n.$area.show(),i.title="Show Rich Text"),setTimeout(function(){b(n)},100);else if(!x(n)){if(s){var d=e(r);if("url"==s){if("link"==o&&""===E(n))return D(n,"A selection is required when inserting a link.",i),!1;d.children(":button").unbind(A).bind(A,function(){var t=d.find(":text"),i=e.trim(t.val());""!==i&&c(n,l.command,i,null,l.button),t.val("http://"),f(),u(n)})}else"pastetext"==s&&d.children(":button").unbind(A).bind(A,function(){var e=d.find("textarea"),t=e.val().replace(/\n/g,"<br />");""!==t&&c(n,l.command,t,null,l.button),e.val(""),f(),u(n)});if(i!==e.data(r,R))return _(n,r,i),!1;return}if("print"==o)n.$frame[0].contentWindow.print();else if(!c(n,l.command,l.value,l.useCSS,i))return!1}u(n)}}function n(t){var n=e(t.target).closest("div");n.css(k,n.data(S)?"#FFF":"#FFC")}function i(t){e(t.target).closest("div").css(k,"transparent")}function o(t){var n=this,i=t.data.popup,o=t.target;if(i!==Q.msg&&!e(i).hasClass(V)){var a,s=e.data(i,R),r=e.data(s,S),l=J[r],d=l.command,h=n.options.useCSS;"font"==r?a=o.style.fontFamily.replace(/"/g,""):"size"==r?("DIV"==o.tagName&&(o=o.children[0]),a=o.innerHTML):"style"==r?a="<"+o.tagName+">":"color"==r?a=p(o.style.backgroundColor):"highlight"==r&&(a=p(o.style.backgroundColor),ie?d="backcolor":h=!0);var m={editor:n,button:s,buttonName:r,popup:i,popupName:l.popupName,command:d,value:a,useCSS:h};if(!l.popupClick||l.popupClick(t,m)!==!1){if(m.command&&!c(n,m.command,m.value,m.useCSS,s))return!1;f(),u(n)}}}function a(e){for(var t=1,n=0,i=0;e.length>i;++i)t=(t+e.charCodeAt(i))%65521,n=(n+t)%65521;return n<<16|t}function s(e){e.$area.val(""),I(e)}function r(t,o,a,s,r){if(Q[t])return Q[t];var l=e(P).hide().addClass(W).appendTo("body");if(s)l.html(s);else if("color"==t){var c=o.colors.split(" ");10>c.length&&l.width("auto"),e.each(c,function(t,n){e(P).appendTo(l).css(k,"#"+n)}),a=U}else"font"==t?e.each(o.fonts.split(","),function(t,n){e(P).appendTo(l).css("fontFamily",n).html(n)}):"size"==t?e.each(o.sizes.split(","),function(t,n){e(P).appendTo(l).html("<font size="+n+">"+n+"</font>")}):"style"==t?e.each(o.styles,function(t,n){e(P).appendTo(l).html(n[1]+n[0]+n[1].replace("<","</"))}):"url"==t?(l.html('Enter URL:<br><input type=text value="http://" size=35><br><input type=button value="Submit">'),a=V):"pastetext"==t&&(l.html("Paste your content here and click submit.<br /><textarea cols=40 rows=3></textarea><br /><input type=button value=Submit>"),a=V);return a||s||(a=q),l.addClass(a),ie&&l.attr(M,"on").find("div,font,p,h1,h2,h3,h4,h5,h6").attr(M,"on"),(l.hasClass(q)||r===!0)&&l.children().hover(n,i),Q[t]=l[0],l[0]}function l(e,t){t?(e.$area.attr($,$),e.disabled=!0):(e.$area.removeAttr($),delete e.disabled);try{ie?e.doc.body.contentEditable=!t:e.doc.designMode=t?"off":"on"}catch(n){}b(e)}function c(e,t,n,i,o){y(e),ie||((void 0===i||null===i)&&(i=e.options.useCSS),e.doc.execCommand("styleWithCSS",0,i.toString()));var a,s=!0;if(ie&&"inserthtml"==t.toLowerCase())d(e).pasteHTML(n);else{try{s=e.doc.execCommand(t,0,n||null)}catch(r){a=r.description,s=!1}s||("cutcopypaste".indexOf(t)>-1?D(e,"For security reasons, your browser does not support the "+t+" command. Try using the keyboard shortcut or context menu instead.",o):D(e,a?a:"Error executing the "+t+" command.",o))}return b(e),s}function u(e){setTimeout(function(){x(e)?e.$area.focus():e.$frame[0].contentWindow.focus(),b(e)},0)}function d(e){return ie?h(e).createRange():h(e).getRangeAt(0)}function h(e){return ie?e.doc.selection:e.$frame[0].contentWindow.getSelection()}function p(e){var t=/rgba?\((\d+), (\d+), (\d+)/.exec(e),n=e.split("");if(t)for(e=(t[1]<<16|t[2]<<8|t[3]).toString(16);6>e.length;)e="0"+e;return"#"+(6==e.length?e:n[1]+n[1]+n[2]+n[2]+n[3]+n[3])}function f(){e.each(Q,function(t,n){e(n).hide().unbind(A).removeData(R)})}function m(){var t="jquery.cleditor.css",n=e("link[href$='"+t+"']").attr("href");return n.substr(0,n.length-t.length)+"images/"}function g(e){return"url("+m()+e+")"}function v(t){var n=t.$main,i=t.options;t.$frame&&t.$frame.remove();var o=t.$frame=e('<iframe frameborder="0" src="javascript:true;">').hide().appendTo(n),a=o[0].contentWindow,s=t.doc=a.document,r=e(s);s.open(),s.write(i.docType+"<html>"+(""===i.docCSSFile?"":'<head><link rel="stylesheet" type="text/css" href="'+i.docCSSFile+'" /></head>')+'<body style="'+i.bodyStyle+'"></body></html>'),s.close(),ie&&r.click(function(){u(t)}),I(t),ie&&(r.bind("beforedeactivate beforeactivate selectionchange keypress",function(e){if("beforedeactivate"==e.type)t.inactive=!0;else if("beforeactivate"==e.type)!t.inactive&&t.range&&t.range.length>1&&t.range.shift(),delete t.inactive;else if(!t.inactive)for(t.range||(t.range=[]),t.range.unshift(d(t));t.range.length>2;)t.range.pop()}),o.focus(function(){y(t)})),(e.browser.mozilla?r:e(a)).blur(function(){w(t,!0)}),r.click(f).bind("keyup mouseup",function(){b(t)}),G?t.$area.show():o.show(),e(function(){var e=t.$toolbar,a=e.children("div:last"),s=n.width(),r=a.offset().top+a.outerHeight()-e.offset().top+1;e.height(r),r=(/%/.test(""+i.height)?n.height():parseInt(i.height))-r,o.width(s).height(r),t.$area.width(s).height(Y?r-2:r),l(t,t.disabled),b(t)})}function b(t){G||!e.browser.webkit||t.focused||(t.$frame[0].contentWindow.focus(),window.focus(),t.focused=!0);var n=t.doc;ie&&(n=d(t));var i=x(t);e.each(t.$toolbar.find("."+H),function(o,a){var s=e(a),r=e.cleditor.buttons[e.data(a,S)],l=r.command,c=!0;if(t.disabled)c=!1;else if(r.getEnabled){var u={editor:t,button:a,buttonName:r.name,popup:Q[r.popupName],popupName:r.popupName,command:r.command,useCSS:t.options.useCSS};c=r.getEnabled(u),void 0===c&&(c=!0)}else if((i||G)&&"source"!=r.name||ie&&("undo"==l||"redo"==l))c=!1;else if(l&&"print"!=l&&(ie&&"hilitecolor"==l&&(l="backcolor"),!ie||"inserthtml"!=l))try{c=n.queryCommandEnabled(l)}catch(d){c=!1}c?(s.removeClass(j),s.removeAttr($)):(s.addClass(j),s.attr($,$))})}function y(e){ie&&e.range&&e.range[0].select()}function C(e){setTimeout(function(){x(e)?e.$area.select():c(e,"selectall")},0)}function T(t){y(t);var n=d(t);if(ie)return n.htmlText;var i=e("<layer>")[0];i.appendChild(n.cloneContents());var o=i.innerHTML;return i=null,o}function E(e){return y(e),ie?d(e).text:h(e).toString()}function D(e,t,n){var i=r("msg",e.options,X);i.innerHTML=t,_(e,i,n)}function _(t,n,i){var a,s,r,l=e(n);if(i){var c=e(i);a=c.offset(),s=--a.left,r=a.top+c.height()}else{var u=t.$toolbar;a=u.offset(),s=Math.floor((u.width()-l.width())/2)+a.left,r=a.top+u.height()-2}f(),l.css({left:s,top:r}).show(),i&&(e.data(n,R,i),l.bind(A,{popup:n},e.proxy(o,t))),setTimeout(function(){l.find(":text,textarea").eq(0).focus().select()},100)}function x(e){return e.$area.is(":visible")}function I(t,n){var i=t.$area.val(),o=t.options,s=o.updateFrame,r=e(t.doc.body);if(s){var l=a(i);if(n&&t.areaChecksum==l)return;t.areaChecksum=l}var c=s?s(i):i;c=c.replace(/<(?=\/?script)/gi,"&lt;"),o.updateTextArea&&(t.frameChecksum=a(c)),c!=r.html()&&(r.html(c),e(t).triggerHandler(N))}function w(t,n){var i=e(t.doc.body).html(),o=t.options,s=o.updateTextArea,r=t.$area;if(s){var l=a(i);if(n&&t.frameChecksum==l)return;t.frameChecksum=l}var c=s?s(i):i;o.updateFrame&&(t.areaChecksum=a(c)),c!=r.val()&&(r.val(c),e(t).triggerHandler(N))}e.cleditor={defaultOptions:{width:500,height:250,controls:"bold italic underline strikethrough subscript superscript | font size style | color highlight removeformat | bullets numbering | outdent indent | alignleft center alignright justify | undo redo | rule image link unlink | cut copy paste pastetext | print source",colors:"FFF FCC FC9 FF9 FFC 9F9 9FF CFF CCF FCF CCC F66 F96 FF6 FF3 6F9 3FF 6FF 99F F9F BBB F00 F90 FC6 FF0 3F3 6CC 3CF 66C C6C 999 C00 F60 FC3 FC0 3C0 0CC 36F 63F C3C 666 900 C60 C93 990 090 399 33F 60C 939 333 600 930 963 660 060 366 009 339 636 000 300 630 633 330 030 033 006 309 303",fonts:"Arial,Arial Black,Comic Sans MS,Courier New,Narrow,Garamond,Georgia,Impact,Sans Serif,Serif,Tahoma,Trebuchet MS,Verdana",sizes:"1,2,3,4,5,6,7",styles:[["Paragraph","<p>"],["Header 1","<h1>"],["Header 2","<h2>"],["Header 3","<h3>"],["Header 4","<h4>"],["Header 5","<h5>"],["Header 6","<h6>"]],useCSS:!1,docType:'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">',docCSSFile:"",bodyStyle:"margin:10px; font:10pt Arial,Verdana; cursor:text"},buttons:{init:"bold,,|italic,,|underline,,|strikethrough,,|subscript,,|superscript,,|font,,fontname,|size,Font Size,fontsize,|style,,formatblock,|color,Font Color,forecolor,|highlight,Text Highlight Color,hilitecolor,color|removeformat,Remove Formatting,|bullets,,insertunorderedlist|numbering,,insertorderedlist|outdent,,|indent,,|alignleft,Align Text Left,justifyleft|center,,justifycenter|alignright,Align Text Right,justifyright|justify,,justifyfull|undo,,|redo,,|rule,Insert Horizontal Rule,inserthorizontalrule|image,Insert Image,insertimage,url|link,Insert Hyperlink,createlink,url|unlink,Remove Hyperlink,|cut,,|copy,,|paste,,|pastetext,Paste as Text,inserthtml,|print,,|source,Show Source"},imagesPath:function(){return m()}},e.fn.cleditor=function(t){var n=e([]);return this.each(function(i,o){if("TEXTAREA"==o.tagName){var a=e.data(o,K);a||(a=new cleditor(o,t)),n=n.add(a)}}),n};var O,k="backgroundColor",R="button",S="buttonName",N="change",K="cleditor",A="click",$="disabled",P="<div>",M="unselectable",L="cleditorMain",F="cleditorToolbar",B="cleditorGroup",H="cleditorButton",j="cleditorDisabled",z="cleditorDivider",W="cleditorPopup",q="cleditorList",U="cleditorColor",V="cleditorPrompt",X="cleditorMsg",Y=/msie\s6/i.test(navigator.userAgent),G=/iphone|ipad|ipod/i.test(navigator.userAgent),Q={},J=e.cleditor.buttons;e.each(J.init.split("|"),function(e,t){var n=t.split(","),i=n[0];J[i]={stripIndex:e,name:i,title:""===n[1]?i.charAt(0).toUpperCase()+i.substr(1):n[1],command:""===n[2]?i:n[2],popupName:""===n[3]?i:n[3]}}),delete J.init,cleditor=function(o,a){var s=this;s.options=a=e.extend({},e.cleditor.defaultOptions,a);var l=s.$area=e(o).hide().data(K,s).blur(function(){I(s,!0)}),c=s.$main=e(P).addClass(L).width(a.width).height(a.height),u=s.$toolbar=e(P).addClass(F).appendTo(c),d=e(P).addClass(B).appendTo(u);e.each(a.controls.split(" "),function(o,l){if(""===l)return!0;if("|"==l)e(P).addClass(z).appendTo(d),d=e(P).addClass(B).appendTo(u);else{var c=J[l],h=e(P).data(S,c.name).addClass(H).attr("title",c.title).bind(A,e.proxy(t,s)).appendTo(d).hover(n,i),p={};c.css?p=c.css:c.image&&(p.backgroundImage=g(c.image)),c.stripIndex&&(p.backgroundPosition=-24*c.stripIndex),h.css(p),ie&&h.attr(M,"on"),c.popupName&&r(c.popupName,a,c.popupClass,c.popupContent,c.popupHover)}}),c.insertBefore(l).append(l),O||(e(document).click(function(t){var n=e(t.target);n.add(n.parents()).is("."+V)||f()}),O=!0),/auto|%/.test(""+a.width+a.height)&&e(window).resize(function(){v(s)}),v(s)};var Z=cleditor.prototype,et=[["clear",s],["disable",l],["execCommand",c],["focus",u],["hidePopups",f],["sourceMode",x,!0],["refresh",v],["select",C],["selectedHTML",T,!0],["selectedText",E,!0],["showMessage",D],["updateFrame",I],["updateTextArea",w]];e.each(et,function(e,t){Z[t[0]]=function(){for(var e=this,n=[e],i=0;arguments.length>i;i++)n.push(arguments[i]);var o=t[1].apply(e,n);return t[2]?o:e}}),Z.change=function(t){var n=e(this);return t?n.bind(N,t):n.trigger(N)}})(jQuery);