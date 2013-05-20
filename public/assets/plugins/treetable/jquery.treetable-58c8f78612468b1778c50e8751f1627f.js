/*
 * jQuery treeTable Plugin 3.0.0
 * http://ludo.cubicphuse.nl/jquery-treetable
 *
 * Copyright 2013, Ludo van den Boom
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function(){var e,t,i,n;e=jQuery,t=function(){function t(t,i,n){var o;this.row=t,this.tree=i,this.settings=n,this.id=this.row.data(this.settings.nodeIdAttr),o=this.row.data(this.settings.parentIdAttr),null!=o&&""!==o&&(this.parentId=o),this.treeCell=e(this.row.children(this.settings.columnElType)[this.settings.column]),this.expander=e(this.settings.expanderTemplate),this.indenter=e(this.settings.indenterTemplate),this.children=[],this.initialized=!1,this.treeCell.prepend(this.indenter)}return t.prototype.addChild=function(e){return this.children.push(e)},t.prototype.ancestors=function(){var e,t;for(t=this,e=[];t=t.parentNode();)e.push(t);return e},t.prototype.collapse=function(){return this._hideChildren(),this.row.removeClass("expanded").addClass("collapsed"),this.expander.attr("title",this.settings.stringExpand),this.initialized&&null!=this.settings.onNodeCollapse&&this.settings.onNodeCollapse.apply(this),this},t.prototype.expand=function(){return this.initialized&&null!=this.settings.onNodeExpand&&this.settings.onNodeExpand.apply(this),this.row.removeClass("collapsed").addClass("expanded"),this._showChildren(),this.expander.attr("title",this.settings.stringCollapse),this},t.prototype.expanded=function(){return this.row.hasClass("expanded")},t.prototype.hide=function(){return this._hideChildren(),this.row.hide(),this},t.prototype.isBranchNode=function(){return this.children.length>0||this.row.data(this.settings.branchAttr)===!0?!0:!1},t.prototype.level=function(){return this.ancestors().length},t.prototype.parentNode=function(){return null!=this.parentId?this.tree[this.parentId]:null},t.prototype.removeChild=function(t){var i=e.inArray(t,this.children);return this.children.splice(i,1)},t.prototype.render=function(){var t,i=this.settings;return i.expandable===!0&&this.isBranchNode()&&(this.indenter.html(this.expander),t=i.clickableNodeNames===!0?this.treeCell:this.expander,t.unbind("click.treetable").bind("click.treetable",function(t){return e(this).parents("table").treetable("node",e(this).parents("tr").data(i.nodeIdAttr)).toggle(),t.preventDefault()})),i.expandable===!0&&"collapsed"===i.initialState?this.collapse():this.expand(),this.indenter[0].style.paddingLeft=""+this.level()*i.indent+"px",this},t.prototype.reveal=function(){return null!=this.parentId&&this.parentNode().reveal(),this.expand()},t.prototype.setParent=function(e){return null!=this.parentId&&this.tree[this.parentId].removeChild(this),this.parentId=e.id,this.row.data(this.settings.parentIdAttr,e.id),e.addChild(this)},t.prototype.show=function(){return this.initialized||this._initialize(),this.row.show(),this.expanded()&&this._showChildren(),this},t.prototype.toggle=function(){return this.expanded()?this.collapse():this.expand(),this},t.prototype._hideChildren=function(){var e,t,i,n,o;for(n=this.children,o=[],t=0,i=n.length;i>t;t++)e=n[t],o.push(e.hide());return o},t.prototype._initialize=function(){return this.render(),null!=this.settings.onNodeInitialized&&this.settings.onNodeInitialized.apply(this),this.initialized=!0},t.prototype._showChildren=function(){var e,t,i,n,o;for(n=this.children,o=[],t=0,i=n.length;i>t;t++)e=n[t],o.push(e.show());return o},t}(),i=function(){function i(e,t){this.table=e,this.settings=t,this.tree={},this.nodes=[],this.roots=[]}return i.prototype.collapseAll=function(){var e,t,i,n,o;for(n=this.nodes,o=[],t=0,i=n.length;i>t;t++)e=n[t],o.push(e.collapse());return o},i.prototype.expandAll=function(){var e,t,i,n,o;for(n=this.nodes,o=[],t=0,i=n.length;i>t;t++)e=n[t],o.push(e.expand());return o},i.prototype.loadRows=function(i){var n,o,s;if(null!=i)for(s=0;i.length>s;s++)o=e(i[s]),null!=o.data(this.settings.nodeIdAttr)&&(n=new t(o,this.tree,this.settings),this.nodes.push(n),this.tree[n.id]=n,null!=n.parentId?this.tree[n.parentId].addChild(n):this.roots.push(n));return this},i.prototype.move=function(t,i){return t!==i&&i.id!==t.parentId&&-1===e.inArray(t,i.ancestors())&&(t.setParent(i),this._moveRows(t,i),1===t.parentNode().children.length&&t.parentNode().render()),this},i.prototype.render=function(){var e,t,i,n;for(n=this.roots,t=0,i=n.length;i>t;t++)e=n[t],e.show();return this},i.prototype._moveRows=function(e,t){var i,n,o,s,a;for(e.row.insertAfter(t.row),e.render(),s=e.children,a=[],n=0,o=s.length;o>n;n++)i=s[n],a.push(this._moveRows(i,e));return a},i.prototype.unloadBranch=function(t){var i,n;for(n=0;t.children.length>n;n++)i=t.children[n],this.unloadBranch(i),i.row.remove(),delete this.tree[i.id],this.nodes.splice(e.inArray(i,this.nodes),1);return t.children=[],this},i}(),n={init:function(t){var n;return n=e.extend({branchAttr:"ttBranch",clickableNodeNames:!1,column:0,columnElType:"td",expandable:!1,expanderTemplate:"<a href='#'>&nbsp;</a>",indent:19,indenterTemplate:"<span class='indenter'></span>",initialState:"collapsed",nodeIdAttr:"ttId",parentIdAttr:"ttParentId",stringExpand:"Expand",stringCollapse:"Collapse",onInitialized:null,onNodeCollapse:null,onNodeExpand:null,onNodeInitialized:null},t),this.each(function(){var t,o;return o=new i(this,n),o.loadRows(this.rows).render(),t=e(this).addClass("treetable").data("treetable",o),null!=n.onInitialized&&n.onInitialized.apply(o),t})},destroy:function(){return this.each(function(){return e(this).removeData("treetable").removeClass("treetable")})},collapseAll:function(){return this.data("treetable").collapseAll(),this},collapseNode:function(e){var t=this.data("treetable").tree[e];if(!t)throw new Error("Unknown node '"+e+"'");return t.collapse(),this},expandAll:function(){return this.data("treetable").expandAll(),this},expandNode:function(e){var t=this.data("treetable").tree[e];if(!t)throw new Error("Unknown node '"+e+"'");return t.expand(),this},loadBranch:function(t,i){return i=e(i),t.children.length>0?i.insertAfter(t.children[t.children.length-1].row):i.insertAfter(t.row),this.data("treetable").loadRows(i),this},move:function(e,t){var i,n;return n=this.data("treetable").tree[e],i=this.data("treetable").tree[t],this.data("treetable").move(n,i),this},node:function(e){return this.data("treetable").tree[e]},reveal:function(e){var t=this.data("treetable").tree[e];if(!t)throw new Error("Unknown node '"+e+"'");return t.reveal(),this},unloadBranch:function(e){return this.data("treetable").unloadBranch(e),this}},e.fn.treetable=function(t){return n[t]?n[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?e.error("Method "+t+" does not exist on jQuery.treetable"):n.init.apply(this,arguments)},this.TreeTable||(this.TreeTable={}),this.TreeTable.Node=t,this.TreeTable.Tree=i}).call(this);