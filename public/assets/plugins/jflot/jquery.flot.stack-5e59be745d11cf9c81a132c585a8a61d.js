(function(e){function t(e){function t(e,t){for(var n=null,i=0;t.length>i&&e!=t[i];++i)t[i].stack==e.stack&&(n=t[i]);return n}function n(e,n,i){if(null!=n.stack){var o=t(n,e.getData());if(o){for(var a,r,s,l,c,u,d,h=i.pointsize,p=i.points,f=o.datapoints.pointsize,g=o.datapoints.points,v=[],b=n.lines.show,y=n.bars.horizontal,C=h>2&&(y?i.format[2].x:i.format[2].y),T=b&&n.lines.steps,E=!0,D=y?1:0,x=y?0:1,_=0,I=0;;){if(_>=p.length)break;if(d=v.length,null==p[_]){for(m=0;h>m;++m)v.push(p[_+m]);_+=h}else if(I>=g.length){if(!b)for(m=0;h>m;++m)v.push(p[_+m]);_+=h}else if(null==g[I]){for(m=0;h>m;++m)v.push(null);E=!0,I+=f}else{if(a=p[_+D],r=p[_+x],l=g[I+D],c=g[I+x],u=0,a==l){for(m=0;h>m;++m)v.push(p[_+m]);v[d+x]+=c,u=c,_+=h,I+=f}else if(a>l){if(b&&_>0&&null!=p[_-h]){for(s=r+(p[_-h+x]-r)*(l-a)/(p[_-h+D]-a),v.push(l),v.push(s+c),m=2;h>m;++m)v.push(p[_+m]);u=c}I+=f}else{if(E&&b){_+=h;continue}for(m=0;h>m;++m)v.push(p[_+m]);b&&I>0&&null!=g[I-f]&&(u=c+(g[I-f+x]-c)*(a-l)/(g[I-f+D]-l)),v[d+x]+=u,_+=h}E=!1,d!=v.length&&C&&(v[d+2]+=u)}if(T&&d!=v.length&&d>0&&null!=v[d]&&v[d]!=v[d-h]&&v[d+1]!=v[d-h+1]){for(m=0;h>m;++m)v[d+h+m]=v[d+m];v[d+1]=v[d-h+1]}}i.points=v}}}e.hooks.processDatapoints.push(n)}var n={series:{stack:null}};e.plot.plugins.push({init:t,options:n,name:"stack",version:"1.2"})})(jQuery);