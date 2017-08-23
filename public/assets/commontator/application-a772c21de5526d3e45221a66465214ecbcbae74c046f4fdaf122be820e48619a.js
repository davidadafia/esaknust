!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global,t=n._,e=Array.prototype,r=Object.prototype,i=e.push,o=e.slice,a=r.toString,u=r.hasOwnProperty,c=Array.isArray,l=Object.keys,f=Object.create,s=function(){},p=function(n){return n instanceof p?n:this instanceof p?void(this._wrapped=n):new p(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=p),exports._=p):n._=p,p.VERSION="1.8.3";var d=function(n,t,e){if(void 0===t)return n;switch(null==e?3:e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,i){return n.call(t,e,r,i)};case 4:return function(e,r,i,o){return n.call(t,e,r,i,o)}}return function(){return n.apply(t,arguments)}},h=function(n,t,e){return null==n?p.identity:p.isFunction(n)?d(n,t,e):p.isObject(n)?p.matcher(n):p.property(n)};p.iteratee=function(n,t){return h(n,t,Infinity)};var v=function(n,t){return t=null==t?n.length-1:+t,function(){var e,r=Math.max(arguments.length-t,0),i=Array(r);for(e=0;e<r;e++)i[e]=arguments[e+t];switch(t){case 0:return n.call(this,i);case 1:return n.call(this,arguments[0],i);case 2:return n.call(this,arguments[0],arguments[1],i)}var o=Array(t+1);for(e=0;e<t;e++)o[e]=arguments[e];return o[t]=i,n.apply(this,o)}},m=function(n){if(!p.isObject(n))return{};if(f)return f(n);s.prototype=n;var t=new s;return s.prototype=null,t},g=function(n){return function(t){return null==t?void 0:t[n]}},y=Math.pow(2,53)-1,x=g("length"),b=function(n){var t=x(n);return"number"==typeof t&&t>=0&&t<=y};p.each=p.forEach=function(n,t,e){t=d(t,e);var r,i;if(b(n))for(r=0,i=n.length;r<i;r++)t(n[r],r,n);else{var o=p.keys(n);for(r=0,i=o.length;r<i;r++)t(n[o[r]],o[r],n)}return n},p.map=p.collect=function(n,t,e){t=h(t,e);for(var r=!b(n)&&p.keys(n),i=(r||n).length,o=Array(i),a=0;a<i;a++){var u=r?r[a]:a;o[a]=t(n[u],u,n)}return o};var w=function(n){var t=function(t,e,r,i){var o=!b(t)&&p.keys(t),a=(o||t).length,u=n>0?0:a-1;for(i||(r=t[o?o[u]:u],u+=n);u>=0&&u<a;u+=n){var c=o?o[u]:u;r=e(r,t[c],c,t)}return r};return function(n,e,r,i){var o=arguments.length>=3;return t(n,d(e,i,4),r,o)}};p.reduce=p.foldl=p.inject=w(1),p.reduceRight=p.foldr=w(-1),p.find=p.detect=function(n,t,e){var r;if(void 0!==(r=b(n)?p.findIndex(n,t,e):p.findKey(n,t,e))&&-1!==r)return n[r]},p.filter=p.select=function(n,t,e){var r=[];return t=h(t,e),p.each(n,function(n,e,i){t(n,e,i)&&r.push(n)}),r},p.reject=function(n,t,e){return p.filter(n,p.negate(h(t)),e)},p.every=p.all=function(n,t,e){t=h(t,e);for(var r=!b(n)&&p.keys(n),i=(r||n).length,o=0;o<i;o++){var a=r?r[o]:o;if(!t(n[a],a,n))return!1}return!0},p.some=p.any=function(n,t,e){t=h(t,e);for(var r=!b(n)&&p.keys(n),i=(r||n).length,o=0;o<i;o++){var a=r?r[o]:o;if(t(n[a],a,n))return!0}return!1},p.contains=p.includes=p.include=function(n,t,e,r){return b(n)||(n=p.values(n)),("number"!=typeof e||r)&&(e=0),p.indexOf(n,t,e)>=0},p.invoke=v(function(n,t,e){var r=p.isFunction(t);return p.map(n,function(n){var i=r?t:n[t];return null==i?i:i.apply(n,e)})}),p.pluck=function(n,t){return p.map(n,p.property(t))},p.where=function(n,t){return p.filter(n,p.matcher(t))},p.findWhere=function(n,t){return p.find(n,p.matcher(t))},p.max=function(n,t,e){var r,i,o=-Infinity,a=-Infinity;if(null==t&&null!=n){n=b(n)?n:p.values(n);for(var u=0,c=n.length;u<c;u++)(r=n[u])>o&&(o=r)}else t=h(t,e),p.each(n,function(n,e,r){((i=t(n,e,r))>a||i===-Infinity&&o===-Infinity)&&(o=n,a=i)});return o},p.min=function(n,t,e){var r,i,o=Infinity,a=Infinity;if(null==t&&null!=n){n=b(n)?n:p.values(n);for(var u=0,c=n.length;u<c;u++)(r=n[u])<o&&(o=r)}else t=h(t,e),p.each(n,function(n,e,r){((i=t(n,e,r))<a||i===Infinity&&o===Infinity)&&(o=n,a=i)});return o},p.shuffle=function(n){return p.sample(n,Infinity)},p.sample=function(n,t,e){if(null==t||e)return b(n)||(n=p.values(n)),n[p.random(n.length-1)];var r=b(n)?p.clone(n):p.values(n),i=x(r);t=Math.max(Math.min(t,i),0);for(var o=i-1,a=0;a<t;a++){var u=p.random(a,o),c=r[a];r[a]=r[u],r[u]=c}return r.slice(0,t)},p.sortBy=function(n,t,e){return t=h(t,e),p.pluck(p.map(n,function(n,e,r){return{value:n,index:e,criteria:t(n,e,r)}}).sort(function(n,t){var e=n.criteria,r=t.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(e<r||void 0===r)return-1}return n.index-t.index}),"value")};var I=function(n,t){return function(e,r,i){var o=t?[[],[]]:{};return r=h(r,i),p.each(e,function(t,i){var a=r(t,i,e);n(o,t,a)}),o}};p.groupBy=I(function(n,t,e){p.has(n,e)?n[e].push(t):n[e]=[t]}),p.indexBy=I(function(n,t,e){n[e]=t}),p.countBy=I(function(n,t,e){p.has(n,e)?n[e]++:n[e]=1}),p.toArray=function(n){return n?p.isArray(n)?o.call(n):b(n)?p.map(n,p.identity):p.values(n):[]},p.size=function(n){return null==n?0:b(n)?n.length:p.keys(n).length},p.partition=I(function(n,t,e){n[e?0:1].push(t)},!0),p.first=p.head=p.take=function(n,t,e){if(null!=n)return null==t||e?n[0]:p.initial(n,n.length-t)},p.initial=function(n,t,e){return o.call(n,0,Math.max(0,n.length-(null==t||e?1:t)))},p.last=function(n,t,e){if(null!=n)return null==t||e?n[n.length-1]:p.rest(n,Math.max(0,n.length-t))},p.rest=p.tail=p.drop=function(n,t,e){return o.call(n,null==t||e?1:t)},p.compact=function(n){return p.filter(n,p.identity)};var A=function(n,t,e,r){r=r||[];for(var i=r.length,o=0,a=x(n);o<a;o++){var u=n[o];if(b(u)&&(p.isArray(u)||p.isArguments(u)))if(t)for(var c=0,l=u.length;c<l;)r[i++]=u[c++];else A(u,t,e,r),i=r.length;else e||(r[i++]=u)}return r};p.flatten=function(n,t){return A(n,t,!1)},p.without=v(function(n,t){return p.difference(n,t)}),p.uniq=p.unique=function(n,t,e,r){p.isBoolean(t)||(r=e,e=t,t=!1),null!=e&&(e=h(e,r));for(var i=[],o=[],a=0,u=x(n);a<u;a++){var c=n[a],l=e?e(c,a,n):c;t?(a&&o===l||i.push(c),o=l):e?p.contains(o,l)||(o.push(l),i.push(c)):p.contains(i,c)||i.push(c)}return i},p.union=v(function(n){return p.uniq(A(n,!0,!0))}),p.intersection=function(n){for(var t=[],e=arguments.length,r=0,i=x(n);r<i;r++){var o=n[r];if(!p.contains(t,o)){var a;for(a=1;a<e&&p.contains(arguments[a],o);a++);a===e&&t.push(o)}}return t},p.difference=v(function(n,t){return t=A(t,!0,!0),p.filter(n,function(n){return!p.contains(t,n)})}),p.unzip=function(n){for(var t=n&&p.max(n,x).length||0,e=Array(t),r=0;r<t;r++)e[r]=p.pluck(n,r);return e},p.zip=v(p.unzip),p.object=function(n,t){for(var e={},r=0,i=x(n);r<i;r++)t?e[n[r]]=t[r]:e[n[r][0]]=n[r][1];return e};var E=function(n){return function(t,e,r){e=h(e,r);for(var i=x(t),o=n>0?0:i-1;o>=0&&o<i;o+=n)if(e(t[o],o,t))return o;return-1}};p.findIndex=E(1),p.findLastIndex=E(-1),p.sortedIndex=function(n,t,e,r){e=h(e,r,1);for(var i=e(t),o=0,a=x(n);o<a;){var u=Math.floor((o+a)/2);e(n[u])<i?o=u+1:a=u}return o};var j=function(n,t,e){return function(r,i,a){var u=0,c=x(r);if("number"==typeof a)n>0?u=a>=0?a:Math.max(a+c,u):c=a>=0?Math.min(a+1,c):a+c+1;else if(e&&a&&c)return a=e(r,i),r[a]===i?a:-1;if(i!==i)return a=t(o.call(r,u,c),p.isNaN),a>=0?a+u:-1;for(a=n>0?u:c-1;a>=0&&a<c;a+=n)if(r[a]===i)return a;return-1}};p.indexOf=j(1,p.findIndex,p.sortedIndex),p.lastIndexOf=j(-1,p.findLastIndex),p.range=function(n,t,e){null==t&&(t=n||0,n=0),e=e||1;for(var r=Math.max(Math.ceil((t-n)/e),0),i=Array(r),o=0;o<r;o++,n+=e)i[o]=n;return i};var _=function(n,t,e,r,i){if(!(r instanceof t))return n.apply(e,i);var o=m(n.prototype),a=n.apply(o,i);return p.isObject(a)?a:o};p.bind=v(function(n,t,e){if(!p.isFunction(n))throw new TypeError("Bind must be called on a function");var r=v(function(i){return _(n,r,t,this,e.concat(i))});return r}),p.partial=v(function(n,t){var e=p.partial.placeholder,r=function(){for(var i=0,o=t.length,a=Array(o),u=0;u<o;u++)a[u]=t[u]===e?arguments[i++]:t[u];for(;i<arguments.length;)a.push(arguments[i++]);return _(n,r,this,this,a)};return r}),p.partial.placeholder=p,p.bindAll=v(function(n,t){t=A(t,!1,!1);var e=t.length;if(e<1)throw new Error("bindAll must be passed function names");for(;e--;){var r=t[e];n[r]=p.bind(n[r],n)}}),p.memoize=function(n,t){var e=function(r){var i=e.cache,o=""+(t?t.apply(this,arguments):r);return p.has(i,o)||(i[o]=n.apply(this,arguments)),i[o]};return e.cache={},e},p.delay=v(function(n,t,e){return setTimeout(function(){return n.apply(null,e)},t)}),p.defer=p.partial(p.delay,p,1),p.throttle=function(n,t,e){var r,i,o,a=null,u=0;e||(e={});var c=function(){u=!1===e.leading?0:p.now(),a=null,o=n.apply(r,i),a||(r=i=null)};return function(){var l=p.now();u||!1!==e.leading||(u=l);var f=t-(l-u);return r=this,i=arguments,f<=0||f>t?(a&&(clearTimeout(a),a=null),u=l,o=n.apply(r,i),a||(r=i=null)):a||!1===e.trailing||(a=setTimeout(c,f)),o}},p.debounce=function(n,t,e){var r,i,o,a,u,c=function(){var l=p.now()-a;l<t&&l>=0?r=setTimeout(c,t-l):(r=null,e||(u=n.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,a=p.now();var l=e&&!r;return r||(r=setTimeout(c,t)),l&&(u=n.apply(o,i),o=i=null),u}},p.wrap=function(n,t){return p.partial(t,n)},p.negate=function(n){return function(){return!n.apply(this,arguments)}},p.compose=function(){var n=arguments,t=n.length-1;return function(){for(var e=t,r=n[t].apply(this,arguments);e--;)r=n[e].call(this,r);return r}},p.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},p.before=function(n,t){var e;return function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=null),e}},p.once=p.partial(p.before,2),p.restArgs=v;var C=!{toString:null}.propertyIsEnumerable("toString"),k=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],O=function(n,t){var e=k.length,i=n.constructor,o=p.isFunction(i)&&i.prototype||r,a="constructor";for(p.has(n,a)&&!p.contains(t,a)&&t.push(a);e--;)(a=k[e])in n&&n[a]!==o[a]&&!p.contains(t,a)&&t.push(a)};p.keys=function(n){if(!p.isObject(n))return[];if(l)return l(n);var t=[];for(var e in n)p.has(n,e)&&t.push(e);return C&&O(n,t),t},p.allKeys=function(n){if(!p.isObject(n))return[];var t=[];for(var e in n)t.push(e);return C&&O(n,t),t},p.values=function(n){for(var t=p.keys(n),e=t.length,r=Array(e),i=0;i<e;i++)r[i]=n[t[i]];return r},p.mapObject=function(n,t,e){t=h(t,e);for(var r=p.keys(n),i=r.length,o={},a=0;a<i;a++){var u=r[a];o[u]=t(n[u],u,n)}return o},p.pairs=function(n){for(var t=p.keys(n),e=t.length,r=Array(e),i=0;i<e;i++)r[i]=[t[i],n[t[i]]];return r},p.invert=function(n){for(var t={},e=p.keys(n),r=0,i=e.length;r<i;r++)t[n[e[r]]]=e[r];return t},p.functions=p.methods=function(n){var t=[];for(var e in n)p.isFunction(n[e])&&t.push(e);return t.sort()};var S=function(n,t){return function(e){var r=arguments.length;if(r<2||null==e)return e;for(var i=1;i<r;i++)for(var o=arguments[i],a=n(o),u=a.length,c=0;c<u;c++){var l=a[c];t&&void 0!==e[l]||(e[l]=o[l])}return e}};p.extend=S(p.allKeys),p.extendOwn=p.assign=S(p.keys),p.findKey=function(n,t,e){t=h(t,e);for(var r,i=p.keys(n),o=0,a=i.length;o<a;o++)if(r=i[o],t(n[r],r,n))return r};var T=function(n,t,e){return t in e};p.pick=v(function(n,t){var e={},r=t[0];if(null==n)return e;p.isFunction(r)?(t.length>1&&(r=d(r,t[1])),t=p.allKeys(n)):(r=T,t=A(t,!1,!1),n=Object(n));for(var i=0,o=t.length;i<o;i++){var a=t[i],u=n[a];r(u,a,n)&&(e[a]=u)}return e}),p.omit=v(function(n,t){var e,r=t[0];return p.isFunction(r)?(r=p.negate(r),t.length>1&&(e=t[1])):(t=p.map(A(t,!1,!1),String),r=function(n,e){return!p.contains(t,e)}),p.pick(n,r,e)}),p.defaults=S(p.allKeys,!0),p.create=function(n,t){var e=m(n);return t&&p.extendOwn(e,t),e},p.clone=function(n){return p.isObject(n)?p.isArray(n)?n.slice():p.extend({},n):n},p.tap=function(n,t){return t(n),n},p.isMatch=function(n,t){var e=p.keys(t),r=e.length;if(null==n)return!r;for(var i=Object(n),o=0;o<r;o++){var a=e[o];if(t[a]!==i[a]||!(a in i))return!1}return!0};var M,R;M=function(n,t,e,r){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;if(n!==n)return t!==t;var i=typeof n;return("function"===i||"object"===i||"object"==typeof t)&&R(n,t,e,r)},R=function(n,t,e,r){n instanceof p&&(n=n._wrapped),t instanceof p&&(t=t._wrapped);var i=a.call(n);if(i!==a.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t}var o="[object Array]"===i;if(!o){if("object"!=typeof n||"object"!=typeof t)return!1;var u=n.constructor,c=t.constructor;if(u!==c&&!(p.isFunction(u)&&u instanceof u&&p.isFunction(c)&&c instanceof c)&&"constructor"in n&&"constructor"in t)return!1}e=e||[],r=r||[];for(var l=e.length;l--;)if(e[l]===n)return r[l]===t;if(e.push(n),r.push(t),o){if((l=n.length)!==t.length)return!1;for(;l--;)if(!M(n[l],t[l],e,r))return!1}else{var f,s=p.keys(n);if(l=s.length,p.keys(t).length!==l)return!1;for(;l--;)if(f=s[l],!p.has(t,f)||!M(n[f],t[f],e,r))return!1}return e.pop(),r.pop(),!0},p.isEqual=function(n,t){return M(n,t)},p.isEmpty=function(n){return null==n||(b(n)&&(p.isArray(n)||p.isString(n)||p.isArguments(n))?0===n.length:0===p.keys(n).length)},p.isElement=function(n){return!(!n||1!==n.nodeType)},p.isArray=c||function(n){return"[object Array]"===a.call(n)},p.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},p.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){p["is"+n]=function(t){return a.call(t)==="[object "+n+"]"}}),p.isArguments(arguments)||(p.isArguments=function(n){return p.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(p.isFunction=function(n){return"function"==typeof n||!1}),p.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},p.isNaN=function(n){return p.isNumber(n)&&n!==+n},p.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)},p.isNull=function(n){return null===n},p.isUndefined=function(n){return void 0===n},p.has=function(n,t){return null!=n&&u.call(n,t)},p.noConflict=function(){return n._=t,this},p.identity=function(n){return n},p.constant=function(n){return function(){return n}},p.noop=function(){},p.property=g,p.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},p.matcher=p.matches=function(n){return n=p.extendOwn({},n),function(t){return p.isMatch(t,n)}},p.times=function(n,t,e){var r=Array(Math.max(0,n));t=d(t,e,1);for(var i=0;i<n;i++)r[i]=t(i);return r},p.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},p.now=Date.now||function(){return(new Date).getTime()};var $={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},F=p.invert($),N=function(n){var t=function(t){return n[t]},e="(?:"+p.keys(n).join("|")+")",r=RegExp(e),i=RegExp(e,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(i,t):n}};p.escape=N($),p.unescape=N(F),p.result=function(n,t,e){var r=null==n?void 0:n[t];return void 0===r&&(r=e),p.isFunction(r)?r.call(n):r};var B=0;p.uniqueId=function(n){var t=++B+"";return n?n+t:t},p.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var L=/(.)^/,D={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},q=/\\|'|\r|\n|\u2028|\u2029/g,P=function(n){return"\\"+D[n]};p.template=function(n,t,e){!t&&e&&(t=e),t=p.defaults({},t,p.templateSettings);var r=RegExp([(t.escape||L).source,(t.interpolate||L).source,(t.evaluate||L).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(r,function(t,e,r,a,u){return o+=n.slice(i,u).replace(q,P),i=u+t.length,e?o+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";var a;try{a=new Function(t.variable||"obj","_",o)}catch(n){throw n.source=o,n}var u=function(n){return a.call(this,n,p)},c=t.variable||"obj";return u.source="function("+c+"){\n"+o+"}",u},p.chain=function(n){var t=p(n);return t._chain=!0,t};var K=function(n,t){return n._chain?p(t).chain():t};p.mixin=function(n){p.each(p.functions(n),function(t){var e=p[t]=n[t];p.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),K(this,e.apply(p,n))}})},p.mixin(p),p.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];p.prototype[n]=function(){var e=this._wrapped;return t.apply(e,arguments),"shift"!==n&&"splice"!==n||0!==e.length||delete e[0],K(this,e)}}),p.each(["concat","join","slice"],function(n){var t=e[n];p.prototype[n]=function(){return K(this,t.apply(this._wrapped,arguments))}}),p.prototype.value=function(){return this._wrapped},p.prototype.valueOf=p.prototype.toJSON=p.prototype.value,p.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return p})}(),function(n,t){var e={BACKSPACE:8,TAB:9,RETURN:13,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,COMMA:188,SPACE:32,HOME:36,END:35},r={triggerChar:"@",onDataRequest:n.noop,minChars:2,allowRepeat:!1,showAvatars:!0,elastic:!0,defaultValue:"",onCaret:!1,classes:{autoCompleteItemActive:"active"},templates:{wrapper:t.template('<div class="mentions-input-box"></div>'),autocompleteList:t.template('<div class="mentions-autocomplete-list"></div>'),autocompleteListItem:t.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><%= content %></li>'),autocompleteListItemAvatar:t.template('<img src="<%= avatar %>" />'),autocompleteListItemIcon:t.template('<div class="icon <%= icon %>"></div>'),mentionsOverlay:t.template('<div class="mentions"><div></div></div>'),mentionItemSyntax:t.template("@[<%= value %>](<%= type %>:<%= id %>)"),mentionItemHighlight:t.template("<strong><span><%= value %></span></strong>")}},i={htmlEncode:function(n){return t.escape(n)},regexpEncode:function(n){return n.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},highlightTerm:function(n,t){return t||t.length?n.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+t+")(?![^<>]*>)(?![^&;]+;)","gi"),"<b>$1</b>"):n},setCaratPosition:function(n,t){if(n.createTextRange){var e=n.createTextRange();e.move("character",t),e.select()}else n.selectionStart?(n.focus(),n.setSelectionRange(t,t)):n.focus()},rtrim:function(n){return n.replace(/\s+$/,"")}},o=function(o){function a(){O=n(k),"true"!==O.attr("data-mentions-input")&&(S=O.parent(),M=n(o.templates.wrapper()),O.wrapAll(M),M=S.find("> div.mentions-input-box"),O.attr("data-mentions-input","true"),O.bind("keydown",w),O.bind("keypress",b),O.bind("click",g),O.bind("blur",y),navigator.userAgent.indexOf("MSIE 8")>-1?O.bind("propertychange",x):O.bind("input",x),o.elastic&&O.elastic())}function u(){T=n(o.templates.autocompleteList()),T.appendTo(M),T.delegate("li","mousedown",m)}function c(){R=n(o.templates.mentionsOverlay()),R.prependTo(M)}function l(){var n=d();t.each(F,function(t){var e=o.templates.mentionItemSyntax(t);n=n.replace(new RegExp(i.regexpEncode(t.value),"g"),e)});var e=i.htmlEncode(n);t.each(F,function(n){var r=t.extend({},n,{value:i.htmlEncode(n.value)}),a=o.templates.mentionItemSyntax(r),u=o.templates.mentionItemHighlight(r);e=e.replace(new RegExp(i.regexpEncode(a),"g"),u)}),e=e.replace(/\n/g,"<br />"),e=e.replace(/ {2}/g,"&nbsp; "),O.data("messageText",n),O.trigger("updated"),R.find("div").html(e)}function f(){B=[]}function s(){var n=d();F=t.reject(F,function(t){return!t.value||-1==n.indexOf(t.value)}),F=t.compact(F)}function p(n){var e=d(),r=new RegExp("\\"+o.triggerChar+L,"gi");r.exec(e);var a=r.lastIndex-L.length-1,u=r.lastIndex,c=e.substr(0,a),s=e.substr(u,e.length),p=(c+n.value).length+1;t.find(F,function(t){return t.id==n.id})||F.push(n),f(),L="",I();var h=c+n.value+" "+s;O.val(h),O.trigger("mention"),l(),O.focus(),i.setCaratPosition(O[0],p)}function d(){return n.trim(O.val())}function h(t){var e,r,i,o,a,u,c,l,f,s,p;if((f=t[0])&&n(f).is("textarea")&&null!=f.selectionEnd){for(c={position:"absolute",overflow:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word",boxSizing:"content-box",top:0,left:-9999},l=["boxSizing","fontFamily","fontSize","fontStyle","fontVariant","fontWeight","height","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","textDecoration","textIndent","textTransform","width","word-spacing"],s=0,p=l.length;s<p;s++)a=l[s],c[a]=n(f).css(a);return i=document.createElement("div"),n(i).css(c),n(f).after(i),r=document.createTextNode(f.value.substring(0,f.selectionEnd)),e=document.createTextNode(f.value.substring(f.selectionEnd)),o=document.createElement("span"),o.innerHTML="&nbsp;",i.appendChild(r),i.appendChild(o),i.appendChild(e),i.scrollTop=f.scrollTop,u=n(o).position(),n(i).remove(),u}}function v(){var t=n(O).offset().top,e=n("body").offset().top;n(window).scrollTop()>t&&n(window).scrollTop(t-e)}function m(){var t=n(this);return p(N[t.attr("data-uid")]),v(),!1}function g(){f()}function y(){I()}function x(){l(),s();var n=t.lastIndexOf(B,o.triggerChar);n>-1&&(L=B.slice(n+1).join(""),L=i.rtrim(L),t.defer(t.bind(j,this,L)))}function b(n){if(n.keyCode!==e.BACKSPACE){var t=String.fromCharCode(n.which||n.keyCode);B.push(t)}}function w(r){if(r.keyCode===e.LEFT||r.keyCode===e.RIGHT||r.keyCode===e.HOME||r.keyCode===e.END)return t.defer(f),void(navigator.userAgent.indexOf("MSIE 9")>-1&&t.defer(l));if(r.keyCode===e.BACKSPACE)return void(B=B.slice(0,-1+B.length));if(!T.is(":visible"))return!0;switch(r.keyCode){case e.UP:case e.DOWN:var i=null;return i=r.keyCode===e.DOWN?$&&$.length?$.next():T.find("li").first():n($).prev(),i.length&&A(i),!1;case e.RETURN:case e.TAB:if($&&$.length)return $.trigger("mousedown"),!1}return!0}function I(){$=null,T.empty().hide()}function A(n){n.addClass(o.classes.autoCompleteItemActive),n.siblings().removeClass(o.classes.autoCompleteItemActive),$=n}function E(e,r){if(T.show(),!o.allowRepeat){var a=t.pluck(F,"value");r=t.reject(r,function(n){return t.include(a,n.name)})}if(!r.length)return void I();T.empty();var u=n("<ul>").appendTo(T).hide();t.each(r,function(r,a){var c=t.uniqueId("mention_");N[c]=t.extend({},r,{value:r.name});var l=n(o.templates.autocompleteListItem({id:i.htmlEncode(r.id),display:i.htmlEncode(r.name),type:i.htmlEncode(r.type),content:i.highlightTerm(i.htmlEncode(r.display?r.display:r.name),e)})).attr("data-uid",c);if(0===a&&A(l),o.showAvatars){var f;f=n(r.avatar?o.templates.autocompleteListItemAvatar({avatar:r.avatar}):o.templates.autocompleteListItemIcon({icon:r.icon})),f.prependTo(l)}l=l.appendTo(u)}),T.show(),o.onCaret&&_(T,O),u.show()}function j(n){n&&n.length&&n.length>=o.minChars?o.onDataRequest.call(this,"search",n,function(t){E(n,t)}):I()}function _(n,t){var e=h(t),r=parseInt(t.css("line-height"),10)||18;n.css("width","15em"),n.css("left",e.left),n.css("top",r+e.top);var i=t.offset().left+t.width(),o=n.offset().left+n.width();i<=o&&n.css("left",Math.abs(n.position().left-(o-i)))}function C(n){F=[];for(var t,e=i.htmlEncode(n),r=new RegExp("("+o.triggerChar+")\\[(.*?)\\]\\((.*?):(.*?)\\)","gi"),a=e;null!=(t=r.exec(e));)a=a.replace(t[0],t[1]+t[2]),F.push({id:t[4],type:t[3],value:t[2],trigger:t[1]});O.val(a),l()}var k,O,S,T,M,R,$,F=[],N={},B=[],L="";return o=n.extend(!0,{},r,o),{init:function(n){k=n,a(),u(),c(),C(o.defaultValue),o.prefillMention&&p(o.prefillMention)},val:function(n){t.isFunction(n)&&n.call(this,F.length?O.data("messageText"):d())},reset:function(){C()},getMentions:function(n){t.isFunction(n)&&n.call(this,F)}}};n.fn.mentionsInput=function(e,r){var i=arguments;return"object"!=typeof e&&e||(r=e),this.each(function(){var a=n.data(this,"mentionsInput")||n.data(this,"mentionsInput",new o(r));return t.isFunction(a[e])?a[e].apply(this,Array.prototype.slice.call(i,1)):"object"!=typeof e&&e?void n.error("Method "+e+" does not exist"):a.init.call(this,this)})}}(jQuery,_),window.Commontator={},Commontator._=window._.noConflict(),Commontator.initMentions=function(){$(".comment_form_field textarea:not(.mentions-added)").each(function(n,t){$textarea=$(t),$form=$textarea.parents("form"),threadId=$textarea.parents(".thread").attr("id").match(/[\d]+/)[0],$textarea.addClass("mentions-added"),currentValue=$textarea.val(),$textarea.mentionsInput({elastic:!1,showAvatars:!1,allowRepeat:!0,minChars:3,onDataRequest:function(n,t,e){$.getJSON("/commontator/threads/"+threadId+"/mentions.json",{q:t},function(n){e.call(this,n.mentions)})}}),$textarea.val(currentValue),$textarea.on("focusout",function(){$textarea.mentionsInput("getMentions",function(n){$form.find('input[name="mentioned_ids[]"]').remove(),$(n).each(function(n,t){$input=$("<input>",{type:"hidden",name:"mentioned_ids[]",value:t.id}),$form.append($input)})})})})};