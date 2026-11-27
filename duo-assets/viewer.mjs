var uu=0,$c=1,fu=2;var Xr=1,du=2,qs=3,On=0,sn=1,hn=2,ei=0,Ki=1,jc=2,Qc=3,el=4,pu=5,Ei=100,mu=101,gu=102,xu=103,_u=104,vu=200,yu=201,Mu=202,bu=203,Fa=204,Oa=205,Su=206,Tu=207,wu=208,Au=209,Eu=210,Cu=211,Ru=212,Iu=213,Pu=214,no=0,io=1,so=2,Zi=3,ro=4,ao=5,oo=6,co=7,tl=0,Lu=1,Du=2,kn=0,nl=1,il=2,sl=3,rl=4,al=5,ol=6,cl=7,zc="attached",Nu="detached",ll=300,Di=301,ns=302,lo=303,ho=304,qr=306,Ci=1e3,Tn=1001,Rs=1002,Rt=1003,uo=1004;var is=1005;var wt=1006,Ys=1007;var Vn=1008;var un=1009,hl=1010,ul=1011,Ks=1012,fo=1013,Gn=1014,_n=1015,ti=1016,po=1017,mo=1018,Zs=1020,fl=35902,dl=35899,pl=1021,ml=1022,vn=1023,Zn=1026,Ni=1027,go=1028,xo=1029,ss=1030,_o=1031;var vo=1033,Yr=33776,Kr=33777,Zr=33778,Jr=33779,yo=35840,Mo=35841,bo=35842,So=35843,To=36196,wo=37492,Ao=37496,Eo=37488,Co=37489,Ro=37490,Io=37491,Po=37808,Lo=37809,Do=37810,No=37811,Uo=37812,Fo=37813,Oo=37814,Bo=37815,zo=37816,ko=37817,Vo=37818,Go=37819,Ho=37820,Wo=37821,Xo=36492,qo=36494,Yo=36495,Ko=36283,Zo=36284,Jo=36285,$o=36286;var Ji=2300,$i=2301,Ua=2302,kc=2400,Vc=2401,Gc=2402,Uu=2500;var gl=0,$r=1,Js=2,Fu=3200;var xl=0,Ou=1,yn="",Dt="srgb",Ht="srgb-linear",_r="linear",xt="srgb";var Yi=7680;var Hc=519,Bu=512,zu=513,ku=514,jo=515,Vu=516,Gu=517,Qo=518,Hu=519,Ba=35044;var _l="300 es",Un=2e3,vr=2001;function vl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function od(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wu(){let s=Is("canvas");return s.style.display="block",s}var Ch={},Ps=null;function yr(...s){let e="THREE."+s.shift();Ps?Ps("log",e,...s):console.log(e,...s)}function Oe(...s){let e="THREE."+s.shift();Ps?Ps("warn",e,...s):console.warn(e,...s)}function Ze(...s){let e="THREE."+s.shift();Ps?Ps("error",e,...s):console.error(e,...s)}function Ls(...s){let e=s.join(" ");e in Ch||(Ch[e]=!0,Oe(...s))}function Xu(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rh=1234567,gr=Math.PI/180,ji=180/Math.PI;function Fn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[s&255]+Kt[s>>8&255]+Kt[s>>16&255]+Kt[s>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function lt(s,e,t){return Math.max(e,Math.min(t,s))}function yl(s,e){return(s%e+e)%e}function cd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ld(s,e,t){return s!==e?(t-s)/(e-s):0}function xr(s,e,t){return(1-t)*s+t*e}function hd(s,e,t,n){return xr(s,e,1-Math.exp(-t*n))}function ud(s,e=1){return e-Math.abs(yl(s,e*2)-e)}function fd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function dd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function pd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function md(s,e){return s+Math.random()*(e-s)}function gd(s){return s*(.5-Math.random())}function xd(s){s!==void 0&&(Rh=s);let e=Rh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _d(s){return s*gr}function vd(s){return s*ji}function yd(s){return(s&s-1)===0&&s!==0}function Md(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sd(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*d,o*l);break;case"YXY":s.set(c*d,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*d,o*h,o*l);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var jr={DEG2RAD:gr,RAD2DEG:ji,generateUUID:Fn,clamp:lt,euclideanModulo:yl,mapLinear:cd,inverseLerp:ld,lerp:xr,damp:hd,pingpong:ud,smoothstep:fd,smootherstep:dd,randInt:pd,randFloat:md,randFloatSpread:gd,seededRandom:xd,degToRad:_d,radToDeg:vd,isPowerOfTwo:yd,ceilPowerOfTwo:Md,floorPowerOfTwo:bd,setQuaternionFromProperEuler:Sd,normalize:vt,denormalize:Nn},$e=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==m){let g=c*f+l*d+h*m+u*_;g<0&&(f=-f,d=-d,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let S=Math.acos(g),b=Math.sin(S);p=Math.sin(p*S)/b,o=Math.sin(o*S)/b,c=c*p+f*o,l=l*p+d*o,h=h*p+m*o,u=u*p+_*o}else{c=c*p+f*o,l=l*p+d*o,h=h*p+m*o,u=u*p+_*o;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-o*d,e[t+2]=l*m+h*d+o*f-c*u,e[t+3]=h*m-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ih.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dc=new U,Ih=new rn,Qe=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],S=i[1],b=i[4],v=i[7],A=i[2],R=i[5],C=i[8];return r[0]=a*_+o*S+c*A,r[3]=a*g+o*b+c*R,r[6]=a*p+o*v+c*C,r[1]=l*_+h*S+u*A,r[4]=l*g+h*b+u*R,r[7]=l*p+h*v+u*C,r[2]=f*_+d*S+m*A,r[5]=f*g+d*b+m*R,r[8]=f*p+d*v+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pc.makeScale(e,t)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pc=new Qe,Ph=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){let s={enabled:!0,workingColorSpace:Ht,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yn?_r:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ht]:{primaries:e,whitePoint:n,transfer:_r,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),s}var ct=Td();function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ps,za=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=Is("canvas")),ps.width=e.width,ps.height=e.height;let i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Is("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wd=0,Ds=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(mc(i[a].image)):r.push(mc(i[a]))}else r=mc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function mc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?za.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Ad=0,gc=new U,It=class s extends pi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Tn,i=Tn,r=wt,a=Vn,o=vn,c=un,l=s.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Fn(),this.name="",this.source=new Ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=ll;It.DEFAULT_ANISOTROPY=1;var _t=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(d+1)/2,A=(p+1)/2,R=(h+f)/4,C=(u+_)/4,F=(m+g)/4;return b>v&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=R/n,r=C/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=R/i,r=F/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=F/r),this.set(n,i,r,t),this}let S=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new It(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ds(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ka{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Mr=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),fa.subVectors(this.max,lr),ms.subVectors(e.a,lr),gs.subVectors(e.b,lr),xs.subVectors(e.c,lr),yi.subVectors(gs,ms),Mi.subVectors(xs,gs),Hi.subVectors(ms,xs);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Hi.z,Hi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Hi.z,0,-Hi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Hi.y,Hi.x,0];return!xc(t,ms,gs,xs,fa)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,ms,gs,xs,fa))?!1:(da.crossVectors(yi,Mi),t=[da.x,da.y,da.z],xc(t,ms,gs,xs,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,ua=new xn,ms=new U,gs=new U,xs=new U,yi=new U,Mi=new U,Hi=new U,lr=new U,fa=new U,da=new U,Wi=new U;function xc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Wi.fromArray(s,r);let o=i.x*Math.abs(Wi.x)+i.y*Math.abs(Wi.y)+i.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ed=new xn,hr=new U,_c=new U,an=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ed.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(_c)),this.expandByPoint(hr.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ci=new U,vc=new U,pa=new U,bi=new U,yc=new U,ma=new U,Mc=new U,Ri=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vc.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(vc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(pa),o=bi.dot(this.direction),c=-bi.dot(pa),l=bi.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(vc).addScaledVector(pa,f),d}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),i=ci.dot(ci)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,r){yc.subVectors(t,e),ma.subVectors(n,e),Mc.crossVectors(yc,ma);let a=this.direction.dot(Mc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);let c=o*this.direction.dot(ma.crossVectors(bi,ma));if(c<0)return null;let l=o*this.direction.dot(yc.cross(bi));if(l<0||c+l>a)return null;let h=-o*bi.dot(Mc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,f,d,m,_,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,f,d,m,_,g)}set(e,t,n,i,r,a,o,c,l,h,u,f,d,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,m=l*h,_=l*u;t[0]=f+_*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,m=l*h,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,d=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-f*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*c,d=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Rd)}lookAt(e,t,n){let i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Si.crossVectors(n,pn),Si.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Si.crossVectors(n,pn)),Si.normalize(),ga.crossVectors(pn,Si),i[0]=Si.x,i[4]=ga.x,i[8]=pn.x,i[1]=Si.y,i[5]=ga.y,i[9]=pn.y,i[2]=Si.z,i[6]=ga.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],S=n[3],b=n[7],v=n[11],A=n[15],R=i[0],C=i[4],F=i[8],y=i[12],T=i[1],P=i[5],V=i[9],O=i[13],G=i[2],B=i[6],Y=i[10],z=i[14],Q=i[3],ue=i[7],he=i[11],ge=i[15];return r[0]=a*R+o*T+c*G+l*Q,r[4]=a*C+o*P+c*B+l*ue,r[8]=a*F+o*V+c*Y+l*he,r[12]=a*y+o*O+c*z+l*ge,r[1]=h*R+u*T+f*G+d*Q,r[5]=h*C+u*P+f*B+d*ue,r[9]=h*F+u*V+f*Y+d*he,r[13]=h*y+u*O+f*z+d*ge,r[2]=m*R+_*T+g*G+p*Q,r[6]=m*C+_*P+g*B+p*ue,r[10]=m*F+_*V+g*Y+p*he,r[14]=m*y+_*O+g*z+p*ge,r[3]=S*R+b*T+v*G+A*Q,r[7]=S*C+b*P+v*B+A*ue,r[11]=S*F+b*V+v*Y+A*he,r[15]=S*y+b*O+v*z+A*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15],S=c*d-l*f,b=o*d-l*u,v=o*f-c*u,A=a*d-l*h,R=a*f-c*h,C=a*u-o*h;return t*(_*S-g*b+p*v)-n*(m*S-g*A+p*R)+i*(m*b-_*A+p*C)-r*(m*v-_*R+g*C)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],S=u*g*l-_*f*l+_*c*d-o*g*d-u*c*p+o*f*p,b=m*f*l-h*g*l-m*c*d+a*g*d+h*c*p-a*f*p,v=h*_*l-m*u*l+m*o*d-a*_*d-h*o*p+a*u*p,A=m*u*c-h*_*c-m*o*f+a*_*f+h*o*g-a*u*g,R=t*S+n*b+i*v+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=S*C,e[1]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*p-n*f*p)*C,e[2]=(o*g*r-_*c*r+_*i*l-n*g*l-o*i*p+n*c*p)*C,e[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*d-n*c*d)*C,e[4]=b*C,e[5]=(h*g*r-m*f*r+m*i*d-t*g*d-h*i*p+t*f*p)*C,e[6]=(m*c*r-a*g*r-m*i*l+t*g*l+a*i*p-t*c*p)*C,e[7]=(a*f*r-h*c*r+h*i*l-t*f*l-a*i*d+t*c*d)*C,e[8]=v*C,e[9]=(m*u*r-h*_*r-m*n*d+t*_*d+h*n*p-t*u*p)*C,e[10]=(a*_*r-m*o*r+m*n*l-t*_*l-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*d-t*o*d)*C,e[12]=A*C,e[13]=(h*_*i-m*u*i+m*n*f-t*_*f-h*n*g+t*u*g)*C,e[14]=(m*o*i-a*_*i-m*n*c+t*_*c+a*n*g-t*o*g)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,m=r*u,_=a*h,g=a*u,p=o*u,S=c*l,b=c*h,v=c*u,A=n.x,R=n.y,C=n.z;return i[0]=(1-(_+p))*A,i[1]=(d+v)*A,i[2]=(m-b)*A,i[3]=0,i[4]=(d-v)*R,i[5]=(1-(f+p))*R,i[6]=(g+S)*R,i[7]=0,i[8]=(m+b)*C,i[9]=(g-S)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=_s.set(i[0],i[1],i[2]).length(),a=_s.set(i[4],i[5],i[6]).length(),o=_s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Ln.copy(this);let l=1/r,h=1/a,u=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Un,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,_;if(c)m=r/(a-r),_=a*r/(a-r);else if(o===Un)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===vr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Un,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,_;if(c)m=1/(a-r),_=a/(a-r);else if(o===Un)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===vr)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_s=new U,Ln=new Ke,Cd=new U(0,0,0),Rd=new U(1,1,1),Si=new U,ga=new U,pn=new U,Dh=new Ke,Nh=new rn,Bn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var Ns=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Id=0,Uh=new U,vs=new rn,li=new Ke,xa=new U,ur=new U,Pd=new U,Ld=new rn,Fh=new U(1,0,0),Oh=new U(0,1,0),Bh=new U(0,0,1),zh={type:"added"},Dd={type:"removed"},ys={type:"childadded",child:null},bc={type:"childremoved",child:null},At=class s extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new U,t=new Bn,n=new rn,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Qe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xa.copy(e):xa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ur,xa,this.up):li.lookAt(xa,ur,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),vs.setFromRotationMatrix(li),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),ys.child=e,this.dispatchEvent(ys),ys.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};At.DEFAULT_UP=new U(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new U,hi=new U,Sc=new U,ui=new U,Ms=new U,bs=new U,kh=new U,Tc=new U,wc=new U,Ac=new U,Ec=new _t,Cc=new _t,Rc=new _t,Ai=class s{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Dn.subVectors(i,t),hi.subVectors(n,t),Sc.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(hi),c=Dn.dot(Sc),l=hi.dot(hi),h=hi.dot(Sc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(a,ui.y),c.addScaledVector(o,ui.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ec.setScalar(0),Cc.setScalar(0),Rc.setScalar(0),Ec.fromBufferAttribute(e,t),Cc.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ec,r.x),a.addScaledVector(Cc,r.y),a.addScaledVector(Rc,r.z),a}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),hi.subVectors(e,t),Dn.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Dn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ms.subVectors(i,n),bs.subVectors(r,n),Tc.subVectors(e,n);let c=Ms.dot(Tc),l=bs.dot(Tc);if(c<=0&&l<=0)return t.copy(n);wc.subVectors(e,i);let h=Ms.dot(wc),u=bs.dot(wc);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ms,a);Ac.subVectors(e,r);let d=Ms.dot(Ac),m=bs.dot(Ac);if(m>=0&&d<=m)return t.copy(r);let _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(bs,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return kh.subVectors(r,i),o=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(kh,o);let p=1/(g+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Ms,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Ic(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=yl(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ic(a,r,e+1/3),this.g=Ic(a,r,e),this.b=Ic(a,r,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=qu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ct.workingToColorSpace(Zt.copy(this),e),Math.round(lt(Zt.r*255,0,255))*65536+Math.round(lt(Zt.g*255,0,255))*256+Math.round(lt(Zt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Zt.copy(this),t);let n=Zt.r,i=Zt.g,r=Zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Dt){ct.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,i=Zt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(_a);let n=xr(Ti.h,_a.h,t),i=xr(Ti.s,_a.s,t),r=xr(Ti.l,_a.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new je;je.NAMES=qu;var Nd=0,on=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Ki,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zn=class extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new U,va=new $e,Ud=0,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ba,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ba&&(e.usage=this.usage),e}};var br=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Sr=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Nt=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fd=0,Sn=new Ke,Pc=new At,Ss=new U,mn=new xn,fr=new xn,zt=new U,Wt=class s extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vl(e)?Sr:br)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(mn.min,fr.min),mn.expandByPoint(zt),zt.addVectors(mn.max,fr.max),mn.expandByPoint(zt)):(mn.expandByPoint(fr.min),mn.expandByPoint(fr.max))}mn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)zt.fromBufferAttribute(o,l),c&&(Ss.fromBufferAttribute(e,l),zt.add(Ss)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new U,c[F]=new U;let l=new U,h=new U,u=new U,f=new $e,d=new $e,m=new $e,_=new U,g=new U;function p(F,y,T){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),f.fromBufferAttribute(r,F),d.fromBufferAttribute(r,y),m.fromBufferAttribute(r,T),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),o[F].add(_),o[y].add(_),o[T].add(_),c[F].add(g),c[y].add(g),c[T].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let F=0,y=S.length;F<y;++F){let T=S[F],P=T.start,V=T.count;for(let O=P,G=P+V;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let b=new U,v=new U,A=new U,R=new U;function C(F){A.fromBufferAttribute(i,F),R.copy(A);let y=o[F];b.copy(y),b.sub(A.multiplyScalar(A.dot(y))).normalize(),v.crossVectors(R,y);let P=v.dot(c[F])<0?-1:1;a.setXYZW(F,b.x,b.y,b.z,P)}for(let F=0,y=S.length;F<y;++F){let T=S[F],P=T.start,V=T.count;for(let O=P,G=P+V;O<G;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new Et(f,h,u)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vh=new Ke,Xi=new Ri,ya=new an,Gh=new U,Ma=new U,ba=new U,Sa=new U,Lc=new U,Ta=new U,Hh=new U,wa=new U,Ut=class extends At{constructor(e=new Wt,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Lc.fromBufferAttribute(u,e),a?Ta.addScaledVector(Lc,h):Ta.addScaledVector(Lc.sub(t),h))}t.add(Ta)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(ya.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(ya,Gh)===null||Xi.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=S,A=b;v<A;v+=3){let R=o.getX(v),C=o.getX(v+1),F=o.getX(v+2);i=Aa(this,p,e,n,l,h,u,R,C,F),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let S=o.getX(g),b=o.getX(g+1),v=o.getX(g+2);i=Aa(this,a,e,n,l,h,u,S,b,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),b=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=S,A=b;v<A;v+=3){let R=v,C=v+1,F=v+2;i=Aa(this,p,e,n,l,h,u,R,C,F),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let S=g,b=g+1,v=g+2;i=Aa(this,a,e,n,l,h,u,S,b,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Od(s,e,t,n,i,r,a,o){let c;if(e.side===sn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===On,o),c===null)return null;wa.copy(o),wa.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(wa);return l<t.near||l>t.far?null:{distance:l,point:wa.clone(),object:s}}function Aa(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Ma),s.getVertexPosition(c,ba),s.getVertexPosition(l,Sa);let h=Od(s,e,t,n,Ma,ba,Sa,Hh);if(h){let u=new U;Ai.getBarycoord(Hh,Ma,ba,Sa,u),i&&(h.uv=Ai.getInterpolatedAttribute(i,o,c,l,u,new $e)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,o,c,l,u,new $e)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new U,materialIndex:0};Ai.getNormal(Ma,ba,Sa,f.normal),h.face=f,h.barycoord=u}return h}var Us=class s extends Wt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function m(_,g,p,S,b,v,A,R,C,F,y){let T=v/C,P=A/F,V=v/2,O=A/2,G=R/2,B=C+1,Y=F+1,z=0,Q=0,ue=new U;for(let he=0;he<Y;he++){let ge=he*P-O;for(let Fe=0;Fe<B;Fe++){let De=Fe*T-V;ue[_]=De*S,ue[g]=ge*b,ue[p]=G,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[g]=0,ue[p]=R>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(Fe/C),u.push(1-he/F),z+=1}}for(let he=0;he<F;he++)for(let ge=0;ge<C;ge++){let Fe=f+ge+B*he,De=f+ge+B*(he+1),rt=f+(ge+1)+B*(he+1),qe=f+(ge+1)+B*he;c.push(Fe,De,qe),c.push(De,rt,qe),Q+=6}o.addGroup(d,Q,y),d+=Q,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Jt(s){let e={};for(let t=0;t<s.length;t++){let n=rs(s[t]);for(let i in n)e[i]=n[i]}return e}function Bd(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ml(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Yu={clone:rs,merge:Jt},zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Tr=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new U,Wh=new $e,Xh=new $e,kt=class extends Tr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Wh,Xh),t.subVectors(Xh,Wh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ts=-90,ws=1,Ga=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new kt(Ts,ws,e,t);i.layers=this.layers,this.add(i);let r=new kt(Ts,ws,e,t);r.layers=this.layers,this.add(r);let a=new kt(Ts,ws,e,t);a.layers=this.layers,this.add(a);let o=new kt(Ts,ws,e,t);o.layers=this.layers,this.add(o);let c=new kt(Ts,ws,e,t);c.layers=this.layers,this.add(c);let l=new kt(Ts,ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wr=class extends It{constructor(e=[],t=Di,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ar=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Us(5,5,5),r=new Vt({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:ei});r.uniforms.tEquirect.value=t;let a=new Ut(i,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=wt),new Ga(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},gn=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vd={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Er=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Os=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ba,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tn=new U,Bs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var qh=new U,Yh=new _t,Kh=new _t,Gd=new U,Zh=new Ke,Ea=new U,Dc=new an,Jh=new Ke,Nc=new Ri,Cr=class extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zc,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ea),this.boundingBox.expandByPoint(Ea)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ea),this.boundingSphere.expandByPoint(Ea)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dc.copy(this.boundingSphere),Dc.applyMatrix4(i),e.ray.intersectsSphere(Dc)!==!1&&(Jh.copy(i).invert(),Nc.copy(e.ray).applyMatrix4(Jh),!(this.boundingBox!==null&&Nc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Yh.fromBufferAttribute(i.attributes.skinIndex,e),Kh.fromBufferAttribute(i.attributes.skinWeight,e),qh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Kh.getComponent(r);if(a!==0){let o=Yh.getComponent(r);Zh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Gd.copy(qh).applyMatrix4(Zh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},zs=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},ks=class extends It{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Rt,h=Rt,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$h=new Ke,Hd=new Ke,Rr=class s{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Hd;$h.multiplyMatrices(o,t[r]),$h.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ks(t,e,e,vn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Oe("Skeleton: No bone found with UUID:",r),a=new zs),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ii=class extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new Ke,jh=new Ke,Ca=[],Qh=new xn,Wd=new Ke,dr=new Ut,pr=new an,Ir=class extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),Qh.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Qh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),pr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,As),jh.multiplyMatrices(n,As),dr.matrixWorld=jh,dr.raycast(e,Ca);for(let a=0,o=Ca.length;a<o;a++){let c=Ca[a];c.instanceId=r,c.object=this,t.push(c)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ks(new Float32Array(i*this.count),i,this.count,go,_n));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Uc=new U,Xd=new U,qd=new Qe,Yn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Uc.subVectors(n,t).cross(Xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Uc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qd.getNormalMatrix(e),i=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new an,Yd=new $e(.5,.5),Ra=new U,Vs=class{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],S=r[12],b=r[13],v=r[14],A=r[15];if(i[0].setComponents(l-a,d-h,p-m,A-S).normalize(),i[1].setComponents(l+a,d+h,p+m,A+S).normalize(),i[2].setComponents(l+o,d+u,p+_,A+b).normalize(),i[3].setComponents(l-o,d-u,p-_,A-b).normalize(),n)i[4].setComponents(c,f,g,v).normalize(),i[5].setComponents(l-c,d-f,p-g,A-v).normalize();else if(i[4].setComponents(l-c,d-f,p-g,A-v).normalize(),t===Un)i[5].setComponents(l+c,d+f,p+g,A+v).normalize();else if(t===vr)i[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);let t=Yd.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ra.x=i.normal.x>0?e.max.x:e.min.x,Ra.y=i.normal.y>0?e.max.y:e.min.y,Ra.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gs=class extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ha=new U,Wa=new U,eu=new Ke,mr=new Ri,Ia=new an,Fc=new U,tu=new U,Qi=class extends At{constructor(e=new Wt,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ha.fromBufferAttribute(t,i-1),Wa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ha.distanceTo(Wa);e.setAttribute("lineDistance",new Nt(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(i),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;eu.copy(i).invert(),mr.copy(e.ray).applyMatrix4(eu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=l){let p=h.getX(_),S=h.getX(_+1),b=Pa(this,e,mr,c,p,S,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(d),p=Pa(this,e,mr,c,_,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=l){let p=Pa(this,e,mr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Pa(this,e,mr,c,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pa(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Ha.fromBufferAttribute(o,i),Wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ha,Wa,Fc,tu)>n)return;Fc.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Fc);if(!(l<e.near||l>e.far))return{distance:l,point:tu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var nu=new U,iu=new U,Pr=class extends Qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nu.fromBufferAttribute(t,i),iu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nu.distanceTo(iu);e.setAttribute("lineDistance",new Nt(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Lr=class extends Qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hs=class extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},su=new Ke,Wc=new Ri,La=new an,Da=new U,Dr=class extends At{constructor(e=new Wt,t=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(i),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;su.copy(i).invert(),Wc.copy(e.ray).applyMatrix4(su);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,_=d;m<_;m++){let g=l.getX(m);Da.fromBufferAttribute(u,g),ru(Da,g,c,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,_=d;m<_;m++)Da.fromBufferAttribute(u,m),ru(Da,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ru(s,e,t,n,i,r,a){let o=Wc.distanceSqToPoint(s);if(o<t){let c=new U;Wc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var es=class extends It{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pi=class extends It{constructor(e,t,n=Gn,i,r,a,o=Rt,c=Rt,l,h=Zn,u=1){if(h!==Zn&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xa=class extends Pi{constructor(e,t=Gn,n=Di,i,r,a=Rt,o=Rt,c,l=Zn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Nr=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ur=class s extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let S=p*f-a;for(let b=0;b<l;b++){let v=b*u-r;m.push(v,-S,0),_.push(0,0,1),g.push(b/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let b=S+l*p,v=S+l*(p+1),A=S+1+l*(p+1),R=S+1+l*p;d.push(b,v,R),d.push(v,A,R)}this.setIndex(d),this.setAttribute("position",new Nt(m,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var qa=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ts=class extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cn=class extends ts{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ya=class extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ka=class extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Na(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Kd(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function au(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Ku(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Za=class extends mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:r=e,o=2*t-n;break;case Gc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vc:a=e,c=2*n-t;break;case Gc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,S=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,b=(-1-d)*g+(1.5+d)*_+.5*m,v=d*g-d*_;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+S*a[l+A]+b*a[c+A]+v*a[u+A];return r}},Ja=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},$a=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ln=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Za(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ji:t=this.InterpolantFactoryMethodDiscrete;break;case $i:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ji;case this.InterpolantFactoryMethodLinear:return $i;case this.InterpolantFactoryMethodSmooth:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&od(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Ze("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ua,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[f+m]||_!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=$i;var gi=class extends ln{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Ji;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fr=class extends ln{constructor(e,t,n,i){super(e,t,n,i)}};Fr.prototype.ValueTypeName="color";var Jn=class extends ln{constructor(e,t,n,i){super(e,t,n,i)}};Jn.prototype.ValueTypeName="number";var ja=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)rn.slerpFlat(r,0,a,l-o,a,l,c);return r}},$n=class extends ln{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}};$n.prototype.ValueTypeName="quaternion";$n.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends ln{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Ji;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends ln{constructor(e,t,n,i){super(e,t,n,i)}};jn.prototype.ValueTypeName="vector";var Or=class{constructor(e="",t=-1,n=[],i=Uu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Jd(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Kd(c);c=au(c,1,h),l=au(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Jn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Oe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ze("AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,m,_){if(d.length!==0){let g=[],p=[];Ku(d,g,p,m),g.length!==0&&_.push(new u(f,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(let _ in d){let g=[],p=[];for(let S=0;S!==f[m].morphTargets.length;++S){let b=f[m];g.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new Jn(".morphTargetInfluence["+_+"]",g,p))}c=d.length*a}else{let d=".bones["+t[u].name+"]";n(jn,d+".position",f,"pos",i),n($n,d+".quaternion",f,"rot",i),n(jn,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Zd(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jn;case"vector":case"vector2":case"vector3":case"vector4":return jn;case"color":return Fr;case"quaternion":return $n;case"bool":case"boolean":return gi;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Jd(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Zd(s.type);if(s.times===void 0){let t=[],n=[];Ku(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Kn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Qa=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zu=new Qa,Qn=class{constructor(e){this.manager=e!==void 0?e:Zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var fi={},Xc=class extends Error{constructor(e,t){super(e),this.response=t}},Ws=class extends Qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Kn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:i});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=fi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,_=0,g=new ReadableStream({start(p){S();function S(){u.read().then(({done:b,value:v})=>{if(b)p.close();else{_+=v.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let R=0,C=h.length;R<C;R++){let F=h[R];F.onProgress&&F.onProgress(A)}p.enqueue(v),S()}},b=>{p.error(b)})}}});return new Response(g)}else throw new Xc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Kn.add(`file:${e}`,l);let h=fi[e];delete fi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=fi[e];if(h===void 0)throw this.manager.itemError(e),l;delete fi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Es=new WeakMap,eo=class extends Qn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Es.get(a);u===void 0&&(u=[],Es.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Is("img");function c(){h(),t&&t(this);let u=Es.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Es.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),Kn.remove(`image:${e}`);let f=Es.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}Es.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Br=class extends Qn{constructor(e){super(e)}load(e,t,n,i){let r=new It,a=new eo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Xs=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Oc=new Ke,ou=new U,cu=new U,zr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(ou),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qc=class extends zr{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},kr=class extends Xs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yc=class extends zr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},Vr=class extends Xs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Li=class extends Tr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kc=class extends zr{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var _i=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Bc=new WeakMap,Hr=class extends Qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Kn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Bc.has(a)===!0)i&&i(Bc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Kn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Bc.set(c,l),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var to=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var bl="\\[\\]\\.:\\/",$d=new RegExp("["+bl+"]","g"),Sl="[^"+bl+"]",jd="[^"+bl.replace("\\.","")+"]",Qd=/((?:WC+[\/:])*)/.source.replace("WC",Sl),ep=/(WCOD+)?/.source.replace("WCOD",jd),tp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),ip=new RegExp("^"+Qd+ep+tp+np+"$"),sp=["material","materials","bones","map"],Zc=class{constructor(e,t,n){let i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($d,"")}static parseTrackName(e){let t=ip.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);sp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Zc;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y_=new Float32Array(1);var lu=new Ke,Wr=class{constructor(e,t,n=0,i=1/0){this.ray=new Ri(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lu),this}intersectObject(e,t=!0,n=[]){return Jc(e,this,n,t),n.sort(hu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Jc(e[i],this,n,t);return n.sort(hu),n}};function hu(s,e){return s.distance-e.distance}function Jc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Jc(r[a],e,t,!0)}}function Tl(s,e,t,n){let i=rp(n);switch(t){case pl:return s*e;case go:return s*e/i.components*i.byteLength;case xo:return s*e/i.components*i.byteLength;case ss:return s*e*2/i.components*i.byteLength;case _o:return s*e*2/i.components*i.byteLength;case ml:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case vo:return s*e*4/i.components*i.byteLength;case Yr:case Kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mo:case So:return Math.max(s,16)*Math.max(e,8)/4;case yo:case bo:return Math.max(s,8)*Math.max(e,8)/2;case To:case wo:case Eo:case Co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Ro:case Io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Go:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xo:case qo:case Yo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ko:case Zo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jo:case $o:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rp(s){switch(s){case un:case hl:return{byteLength:1,components:1};case Ks:case ul:case ti:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case Gn:case fo:case _n:return{byteLength:4,components:1};case fl:case dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function vf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function op(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,am=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Im=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ng=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ng=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Og=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:cp,alphahash_pars_fragment:lp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:fp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:xp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:yp,iridescence_fragment:Mp,bumpmap_pars_fragment:bp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ap,color_fragment:Ep,color_pars_fragment:Cp,color_pars_vertex:Rp,color_vertex:Ip,common:Pp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Np,displacementmap_vertex:Up,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:Bp,colorspace_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Gp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:em,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:Kp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:jp,lights_pars_begin:Qp,lights_toon_fragment:tm,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:am,lights_fragment_begin:om,lights_fragment_maps:cm,lights_fragment_end:lm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:dm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:xm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:vm,morphinstance_vertex:ym,morphcolor_vertex:Mm,morphnormal_vertex:bm,morphtarget_pars_vertex:Sm,morphtarget_vertex:Tm,normal_fragment_begin:wm,normal_fragment_maps:Am,normal_pars_fragment:Em,normal_pars_vertex:Cm,normal_vertex:Rm,normalmap_pars_fragment:Im,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Nm,opaque_fragment:Um,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:Bm,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:Km,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:$m,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:eg,transmission_fragment:tg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:sg,uv_vertex:rg,worldpos_vertex:ag,background_vert:og,background_frag:cg,backgroundCube_vert:lg,backgroundCube_frag:hg,cube_vert:ug,cube_frag:fg,depth_vert:dg,depth_frag:pg,distance_vert:mg,distance_frag:gg,equirect_vert:xg,equirect_frag:_g,linedashed_vert:vg,linedashed_frag:yg,meshbasic_vert:Mg,meshbasic_frag:bg,meshlambert_vert:Sg,meshlambert_frag:Tg,meshmatcap_vert:wg,meshmatcap_frag:Ag,meshnormal_vert:Eg,meshnormal_frag:Cg,meshphong_vert:Rg,meshphong_frag:Ig,meshphysical_vert:Pg,meshphysical_frag:Lg,meshtoon_vert:Dg,meshtoon_frag:Ng,points_vert:Ug,points_frag:Fg,shadow_vert:Og,shadow_frag:Bg,sprite_vert:zg,sprite_frag:kg},Se={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ii={basic:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new je(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Jt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Jt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new je(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Jt([Se.points,Se.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Jt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Jt([Se.common,Se.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Jt([Se.sprite,Se.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Jt([Se.common,Se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Jt([Se.lights,Se.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ii.physical={uniforms:Jt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var ec={r:0,b:0,g:0},as=new Bn,Vg=new Ke;function Gg(s,e,t,n,i,r,a){let o=new je(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1,A=m(b);A===null?p(o,c):A&&A.isColor&&(p(A,1),v=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,v){let A=m(v);A&&(A.isCubeTexture||A.mapping===qr)?(h===void 0&&(h=new Ut(new Us(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:rs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),as.copy(v.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(as)),h.material.toneMapped=ct.getTransfer(A.colorSpace)!==xt,(u!==A||f!==A.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ut(new Ur(2,2),new Vt({name:"BackgroundMaterial",uniforms:rs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ct.getTransfer(A.colorSpace)!==xt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,v){b.getRGB(ec,Ml(s)),n.buffers.color.setClear(ec.r,ec.g,ec.b,v,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:_,addToRenderList:g,dispose:S}}function Hg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(T,P,V,O,G){let B=!1,Y=u(O,V,P);r!==Y&&(r=Y,l(r.object)),B=d(T,O,V,G),B&&m(T,O,V,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(T,P,V,O),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(T){return s.bindVertexArray(T)}function h(T){return s.deleteVertexArray(T)}function u(T,P,V){let O=V.wireframe===!0,G=n[T.id];G===void 0&&(G={},n[T.id]=G);let B=G[P.id];B===void 0&&(B={},G[P.id]=B);let Y=B[O];return Y===void 0&&(Y=f(c()),B[O]=Y),Y}function f(T){let P=[],V=[],O=[];for(let G=0;G<t;G++)P[G]=0,V[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:O,object:T,attributes:{},index:null}}function d(T,P,V,O){let G=r.attributes,B=P.attributes,Y=0,z=V.getAttributes();for(let Q in z)if(z[Q].location>=0){let he=G[Q],ge=B[Q];if(ge===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor)),he===void 0||he.attribute!==ge||ge&&he.data!==ge.data)return!0;Y++}return r.attributesNum!==Y||r.index!==O}function m(T,P,V,O){let G={},B=P.attributes,Y=0,z=V.getAttributes();for(let Q in z)if(z[Q].location>=0){let he=B[Q];he===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(he=T.instanceColor));let ge={};ge.attribute=he,he&&he.data&&(ge.data=he.data),G[Q]=ge,Y++}r.attributes=G,r.attributesNum=Y,r.index=O}function _(){let T=r.newAttributes;for(let P=0,V=T.length;P<V;P++)T[P]=0}function g(T){p(T,0)}function p(T,P){let V=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;V[T]=1,O[T]===0&&(s.enableVertexAttribArray(T),O[T]=1),G[T]!==P&&(s.vertexAttribDivisor(T,P),G[T]=P)}function S(){let T=r.newAttributes,P=r.enabledAttributes;for(let V=0,O=P.length;V<O;V++)P[V]!==T[V]&&(s.disableVertexAttribArray(V),P[V]=0)}function b(T,P,V,O,G,B,Y){Y===!0?s.vertexAttribIPointer(T,P,V,G,B):s.vertexAttribPointer(T,P,V,O,G,B)}function v(T,P,V,O){_();let G=O.attributes,B=V.getAttributes(),Y=P.defaultAttributeValues;for(let z in B){let Q=B[z];if(Q.location>=0){let ue=G[z];if(ue===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),ue!==void 0){let he=ue.normalized,ge=ue.itemSize,Fe=e.get(ue);if(Fe===void 0)continue;let De=Fe.buffer,rt=Fe.type,qe=Fe.bytesPerElement,J=rt===s.INT||rt===s.UNSIGNED_INT||ue.gpuType===fo;if(ue.isInterleavedBufferAttribute){let te=ue.data,ye=te.stride,ke=ue.offset;if(te.isInstancedInterleavedBuffer){for(let Me=0;Me<Q.locationSize;Me++)p(Q.location+Me,te.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<Q.locationSize;Me++)g(Q.location+Me);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Me=0;Me<Q.locationSize;Me++)b(Q.location+Me,ge/Q.locationSize,rt,he,ye*qe,(ke+ge/Q.locationSize*Me)*qe,J)}else{if(ue.isInstancedBufferAttribute){for(let te=0;te<Q.locationSize;te++)p(Q.location+te,ue.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let te=0;te<Q.locationSize;te++)g(Q.location+te);s.bindBuffer(s.ARRAY_BUFFER,De);for(let te=0;te<Q.locationSize;te++)b(Q.location+te,ge/Q.locationSize,rt,he,ge*qe,ge/Q.locationSize*te*qe,J)}}else if(Y!==void 0){let he=Y[z];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(Q.location,he);break;case 3:s.vertexAttrib3fv(Q.location,he);break;case 4:s.vertexAttrib4fv(Q.location,he);break;default:s.vertexAttrib1fv(Q.location,he)}}}}S()}function A(){F();for(let T in n){let P=n[T];for(let V in P){let O=P[V];for(let G in O)h(O[G].object),delete O[G];delete P[V]}delete n[T]}}function R(T){if(n[T.id]===void 0)return;let P=n[T.id];for(let V in P){let O=P[V];for(let G in O)h(O[G].object),delete O[G];delete P[V]}delete n[T.id]}function C(T){for(let P in n){let V=n[P];if(V[T.id]===void 0)continue;let O=V[T.id];for(let G in O)h(O[G].object),delete O[G];delete V[T.id]}}function F(){y(),a=!0,r!==i&&(r=i,l(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function Wg(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==vn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let F=C===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==un&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_n&&!F)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Oe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),R=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:v,maxSamples:A,samples:R}}function qg(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Yn,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let S=r?0:n,b=S*4,v=p.clippingState||null;c.value=v,v=h(m,f,b,d);for(let A=0;A!==b;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,v=d;b!==_;++b,v+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Yg(s){let e=new WeakMap;function t(a,o){return o===lo?a.mapping=Di:o===ho&&(a.mapping=ns),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===lo||o===ho)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ar(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ui=4,Ju=[.125,.215,.35,.446,.526,.582],cs=20,Kg=256,Qr=new Li,$u=new je,wl=null,Al=0,El=0,Cl=!1,Zg=new U,nc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Zg}=r;wl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wl,Al,El),this._renderer.xr.enabled=Cl,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:ti,format:vn,colorSpace:Ht,depthBuffer:!1},i=ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jg(r)),this._blurMaterial=jg(r,e,t),this._ggxMaterial=$g(r,e,t)}return i}_compileMaterial(e){let t=new Ut(new Wt,e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,n,i,r){let c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor($u),u.toneMapping=kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Us,new zn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,p=!0):(g.color.copy($u),p=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):v===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let A=this._cubeSize;$s(i,v*A,b>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(_,c),u.render(e,c)}u.toneMapping=d,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Di||e.mapping===ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;$s(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Qr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,d=u*f,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Ui?n-m+Ui:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,$s(r,g,p,3*_,2*_),i.setRenderTarget(r),i.render(o,Qr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,$s(e,g,p,3*_,2*_),i.setRenderTarget(e),i.render(o,Qr)}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=l;let f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cs-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):cs;g>cs&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);let p=[],S=0;for(let C=0;C<cs;++C){let F=C/_,y=Math.exp(-F*F/2);p.push(y),C===0?S+=y:C<g&&(S+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=m,f.mipInt.value=b-n;let v=this._sizeLods[i],A=3*v*(i>b-Ui?i-b+Ui:0),R=4*(this._cubeSize-v);$s(t,A,R,3*v,2*v),c.setRenderTarget(t),c.render(u,Qr)}};function Jg(s){let e=[],t=[],n=[],i=s,r=s-Ui+1+Ju.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Ui?c=Ju[a-s+Ui-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,S=new Float32Array(_*m*d),b=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let R=0;R<d;R++){let C=R%3*2/3-1,F=R>2?0:-1,y=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];S.set(y,_*m*R),b.set(f,g*m*R);let T=[R,R,R,R,R,R];v.set(T,p*m*R)}let A=new Wt;A.setAttribute("position",new Et(S,_)),A.setAttribute("uv",new Et(b,g)),A.setAttribute("faceIndex",new Et(v,p)),n.push(new Ut(A,null)),i>Ui&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ju(s,e,t){let n=new nn(s,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function $g(s,e,t){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function jg(s,e,t){let n=new Float32Array(cs),i=new U(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Qu(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ef(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===lo||c===ho,h=c===Di||c===ns;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new nc(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new nc(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function e0(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ls("WebGLRenderer: "+n+" extension not supported."),i}}}function t0(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,m=u.attributes.position,_=0;if(d!==null){let S=d.array;_=d.version;for(let b=0,v=S.length;b<v;b+=3){let A=S[b+0],R=S[b+1],C=S[b+2];f.push(A,R,R,C,C,A)}}else if(m!==void 0){let S=m.array;_=m.version;for(let b=0,v=S.length/3-1;b<v;b+=3){let A=b+0,R=b+1,C=b+2;f.push(A,R,R,C,C,A)}}else return;let g=new(vl(f)?Sr:br)(f,1);g.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function n0(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let S=0;S<m;S++)p+=d[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function s0(s,e,t){let n=new WeakMap,i=new _t;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],b=0;d===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let v=o.attributes.position.count*b,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*A*4*u),C=new Mr(R,v,A,u);C.type=_n,C.needsUpdate=!0;let F=b*4;for(let T=0;T<u;T++){let P=g[T],V=p[T],O=S[T],G=v*A*4*T;for(let B=0;B<P.count;B++){let Y=B*F;d===!0&&(i.fromBufferAttribute(P,B),R[G+Y+0]=i.x,R[G+Y+1]=i.y,R[G+Y+2]=i.z,R[G+Y+3]=0),m===!0&&(i.fromBufferAttribute(V,B),R[G+Y+4]=i.x,R[G+Y+5]=i.y,R[G+Y+6]=i.z,R[G+Y+7]=0),_===!0&&(i.fromBufferAttribute(O,B),R[G+Y+8]=i.x,R[G+Y+9]=i.y,R[G+Y+10]=i.z,R[G+Y+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new $e(v,A)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function r0(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var a0={[nl]:"LINEAR_TONE_MAPPING",[il]:"REINHARD_TONE_MAPPING",[sl]:"CINEON_TONE_MAPPING",[rl]:"ACES_FILMIC_TONE_MAPPING",[ol]:"AGX_TONE_MAPPING",[cl]:"NEUTRAL_TONE_MAPPING",[al]:"CUSTOM_TONE_MAPPING"};function o0(s,e,t,n,i){let r=new nn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new nn(e,t,{type:ti,depthBuffer:!1,stencilBuffer:!1}),o=new Wt;o.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Nt([0,2,0,0,2,0],2));let c=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Ut(o,c),h=new Li(-1,1,1,-1,0,1),u=null,f=null,d=!1,m,_=null,g=[],p=!1;this.setSize=function(S,b){r.setSize(S,b),a.setSize(S,b);for(let v=0;v<g.length;v++){let A=g[v];A.setSize&&A.setSize(S,b)}},this.setEffects=function(S){g=S,p=g.length>0&&g[0].isRenderPass===!0;let b=r.width,v=r.height;for(let A=0;A<g.length;A++){let R=g[A];R.setSize&&R.setSize(b,v)}},this.begin=function(S,b){if(d||S.toneMapping===kn&&g.length===0)return!1;if(_=b,b!==null){let v=b.width,A=b.height;(r.width!==v||r.height!==A)&&this.setSize(v,A)}return p===!1&&S.setRenderTarget(r),m=S.toneMapping,S.toneMapping=kn,!0},this.hasRenderPass=function(){return p},this.end=function(S,b){S.toneMapping=m,d=!0;let v=r,A=a;for(let R=0;R<g.length;R++){let C=g[R];if(C.enabled!==!1&&(C.render(S,A,v,b),C.needsSwap!==!1)){let F=v;v=A,A=F}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,c.defines={},ct.getTransfer(u)===xt&&(c.defines.SRGB_TRANSFER="");let R=a0[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(_),S.render(l,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}var yf=new It,Pl=new Pi(1,1),Mf=new Mr,bf=new Va,Sf=new wr,tf=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),af=new Float32Array(4);function Qs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=tf[i];if(r===void 0&&(r=new Float32Array(i),tf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function rc(s,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function c0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function l0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function h0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function u0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function f0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;af.set(n),s.uniformMatrix2fv(this.addr,!1,af),Ot(t,n)}}function d0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;rf.set(n),s.uniformMatrix3fv(this.addr,!1,rf),Ot(t,n)}}function p0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;sf.set(n),s.uniformMatrix4fv(this.addr,!1,sf),Ot(t,n)}}function m0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function g0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function x0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function _0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function v0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function y0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function M0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function b0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function S0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Pl.compareFunction=t.isReversedDepthBuffer()?Qo:jo,r=Pl):r=yf,t.setTexture2D(e||r,i)}function T0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bf,i)}function w0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sf,i)}function A0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mf,i)}function E0(s){switch(s){case 5126:return c0;case 35664:return l0;case 35665:return h0;case 35666:return u0;case 35674:return f0;case 35675:return d0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return y0;case 36295:return M0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return A0}}function C0(s,e){s.uniform1fv(this.addr,e)}function R0(s,e){let t=Qs(e,this.size,2);s.uniform2fv(this.addr,t)}function I0(s,e){let t=Qs(e,this.size,3);s.uniform3fv(this.addr,t)}function P0(s,e){let t=Qs(e,this.size,4);s.uniform4fv(this.addr,t)}function L0(s,e){let t=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function D0(s,e){let t=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function N0(s,e){let t=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function U0(s,e){s.uniform1iv(this.addr,e)}function F0(s,e){s.uniform2iv(this.addr,e)}function O0(s,e){s.uniform3iv(this.addr,e)}function B0(s,e){s.uniform4iv(this.addr,e)}function z0(s,e){s.uniform1uiv(this.addr,e)}function k0(s,e){s.uniform2uiv(this.addr,e)}function V0(s,e){s.uniform3uiv(this.addr,e)}function G0(s,e){s.uniform4uiv(this.addr,e)}function H0(s,e,t){let n=this.cache,i=e.length,r=rc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Pl:a=yf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function W0(s,e,t){let n=this.cache,i=e.length,r=rc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||bf,r[a])}function X0(s,e,t){let n=this.cache,i=e.length,r=rc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Sf,r[a])}function q0(s,e,t){let n=this.cache,i=e.length,r=rc(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Mf,r[a])}function Y0(s){switch(s){case 5126:return C0;case 35664:return R0;case 35665:return I0;case 35666:return P0;case 35674:return L0;case 35675:return D0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return z0;case 36294:return k0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}var Ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=E0(t.type)}},Dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y0(t.type)}},Nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function of(s,e){s.seq.push(e),s.map[e.id]=e}function K0(s,e,t){let n=s.name,i=n.length;for(Rl.lastIndex=0;;){let r=Rl.exec(n),a=Rl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){of(t,l===void 0?new Ll(o,s,e):new Dl(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Nl(o),of(t,u)),t=u}}}var js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);K0(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function cf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Z0=37297,J0=0;function $0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var lf=new Qe;function j0(s){ct._getMatrix(lf,ct.workingColorSpace,s);let e=`mat3( ${lf.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(s)){case _r:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$0(s.getShaderSource(e),o)}else return r}function Q0(s,e){let t=j0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ex={[nl]:"Linear",[il]:"Reinhard",[sl]:"Cineon",[rl]:"ACESFilmic",[ol]:"AgX",[cl]:"Neutral",[al]:"Custom"};function tx(s,e){let t=ex[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tc=new U;function nx(){ct.getLuminanceCoefficients(tc);let s=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function sx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ta(s){return s!==""}function uf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ff(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(s){return s.replace(ax,cx)}var ox=new Map;function cx(s,e){let t=st[e];if(t===void 0){let n=ox.get(e);if(n!==void 0)t=st[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}var lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(s){return s.replace(lx,hx)}function hx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function pf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ux={[Xr]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function fx(s){return ux[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dx={[Di]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE_UV"};function px(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":dx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var mx={[ns]:"ENVMAP_MODE_REFRACTION"};function gx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":mx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xx={[tl]:"ENVMAP_BLENDING_MULTIPLY",[Lu]:"ENVMAP_BLENDING_MIX",[Du]:"ENVMAP_BLENDING_ADD"};function _x(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":xx[s.combine]||"ENVMAP_BLENDING_NONE"}function vx(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yx(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=fx(t),l=px(t),h=gx(t),u=_x(t),f=vx(t),d=ix(t),m=sx(r),_=i.createProgram(),g,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ta).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ta).join(`
`),p.length>0&&(p+=`
`)):(g=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),p=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?st.tonemapping_pars_fragment:"",t.toneMapping!==kn?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Q0("linearToOutputTexel",t.outputColorSpace),nx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),a=Ul(a),a=uf(a,t),a=ff(a,t),o=Ul(o),o=uf(o,t),o=ff(o,t),a=df(a),o=df(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+g+a,v=S+p+o,A=cf(i,i.VERTEX_SHADER,b),R=cf(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(s.debug.checkShaderErrors){let V=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(A)||"",G=i.getShaderInfoLog(R)||"",B=V.trim(),Y=O.trim(),z=G.trim(),Q=!0,ue=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,R);else{let he=hf(i,A,"vertex"),ge=hf(i,R,"fragment");Ze("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+he+`
`+ge)}else B!==""?Oe("WebGLProgram: Program Info Log:",B):(Y===""||z==="")&&(ue=!1);ue&&(P.diagnostics={runnable:Q,programLog:B,vertexShader:{log:Y,prefix:g},fragmentShader:{log:z,prefix:p}})}i.deleteShader(A),i.deleteShader(R),F=new js(i,_),y=rx(i,_)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,Z0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}var Mx=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ol(e),t.set(e,n)),n}},Ol=class{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}};function bx(s,e,t,n,i,r,a){let o=new Ns,c=new Fl,l=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,T,P,V,O){let G=V.fog,B=O.geometry,Y=y.isMeshStandardMaterial?V.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),Q=z&&z.mapping===qr?z.image.height:null,ue=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let he=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ge=he!==void 0?he.length:0,Fe=0;B.morphAttributes.position!==void 0&&(Fe=1),B.morphAttributes.normal!==void 0&&(Fe=2),B.morphAttributes.color!==void 0&&(Fe=3);let De,rt,qe,J;if(ue){let ot=ii[ue];De=ot.vertexShader,rt=ot.fragmentShader}else De=y.vertexShader,rt=y.fragmentShader,c.update(y),qe=c.getVertexShaderID(y),J=c.getFragmentShaderID(y);let te=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,Me=O.isBatchedMesh===!0,Je=!!y.map,ut=!!y.matcap,tt=!!z,Ge=!!y.aoMap,X=!!y.lightMap,j=!!y.bumpMap,ce=!!y.normalMap,E=!!y.displacementMap,Ae=!!y.emissiveMap,ve=!!y.metalnessMap,Ue=!!y.roughnessMap,me=y.anisotropy>0,w=y.clearcoat>0,x=y.dispersion>0,L=y.iridescence>0,$=y.sheen>0,ne=y.transmission>0,Z=me&&!!y.anisotropyMap,Ee=w&&!!y.clearcoatMap,fe=w&&!!y.clearcoatNormalMap,Ce=w&&!!y.clearcoatRoughnessMap,Be=L&&!!y.iridescenceMap,ae=L&&!!y.iridescenceThicknessMap,xe=$&&!!y.sheenColorMap,we=$&&!!y.sheenRoughnessMap,H=!!y.specularMap,W=!!y.specularColorMap,ie=!!y.specularIntensityMap,I=ne&&!!y.transmissionMap,re=ne&&!!y.thicknessMap,se=!!y.gradientMap,Te=!!y.alphaMap,oe=y.alphaTest>0,ee=!!y.alphaHash,de=!!y.extensions,Le=kn;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=s.toneMapping);let at={shaderID:ue,shaderType:y.type,shaderName:y.name,vertexShader:De,fragmentShader:rt,defines:y.defines,customVertexShaderID:qe,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Me,batchingColor:Me&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ht,alphaToCoverage:!!y.alphaToCoverage,map:Je,matcap:ut,envMap:tt,envMapMode:tt&&z.mapping,envMapCubeUVHeight:Q,aoMap:Ge,lightMap:X,bumpMap:j,normalMap:ce,displacementMap:E,emissiveMap:Ae,normalMapObjectSpace:ce&&y.normalMapType===Ou,normalMapTangentSpace:ce&&y.normalMapType===xl,metalnessMap:ve,roughnessMap:Ue,anisotropy:me,anisotropyMap:Z,clearcoat:w,clearcoatMap:Ee,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ce,dispersion:x,iridescence:L,iridescenceMap:Be,iridescenceThicknessMap:ae,sheen:$,sheenColorMap:xe,sheenRoughnessMap:we,specularMap:H,specularColorMap:W,specularIntensityMap:ie,transmission:ne,transmissionMap:I,thicknessMap:re,gradientMap:se,opaque:y.transparent===!1&&y.blending===Ki&&y.alphaToCoverage===!1,alphaMap:Te,alphaTest:oe,alphaHash:ee,combine:y.combine,mapUv:Je&&_(y.map.channel),aoMapUv:Ge&&_(y.aoMap.channel),lightMapUv:X&&_(y.lightMap.channel),bumpMapUv:j&&_(y.bumpMap.channel),normalMapUv:ce&&_(y.normalMap.channel),displacementMapUv:E&&_(y.displacementMap.channel),emissiveMapUv:Ae&&_(y.emissiveMap.channel),metalnessMapUv:ve&&_(y.metalnessMap.channel),roughnessMapUv:Ue&&_(y.roughnessMap.channel),anisotropyMapUv:Z&&_(y.anisotropyMap.channel),clearcoatMapUv:Ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(y.sheenRoughnessMap.channel),specularMapUv:H&&_(y.specularMap.channel),specularColorMapUv:W&&_(y.specularColorMap.channel),specularIntensityMapUv:ie&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:re&&_(y.thicknessMap.channel),alphaMapUv:Te&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ce||me),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(Je||Te),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:O.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:Je&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===xt,decodeVideoTextureEmissive:Ae&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:de&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&y.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function p(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(S(T,y),b(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function S(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){let T=m[y.type],P;if(T){let V=ii[T];P=Yu.clone(V.uniforms)}else P=y.uniforms;return P}function A(y,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new yx(s,T,y,r),h.push(P),u.set(T,P)),P}function R(y){if(--y.usedTimes===0){let T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function C(y){c.remove(y)}function F(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:F}}function Sx(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Tx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,m,_,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function o(u,f,d,m,_,g){let p=a(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,m,_,g){let p=a(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Tx),n.length>1&&n.sort(f||mf),i.length>1&&i.sort(f||mf)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function wx(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new gf,s.set(n,[a])):i>=r.length?(a=new gf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ax(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new je};break;case"SpotLight":t={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function Ex(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Cx=0;function Rx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ix(s){let e=new Ax,t=Ex(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let i=new U,r=new Ke,a=new Ke;function o(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,S=0,b=0,v=0,A=0,R=0,C=0;l.sort(Rx);for(let y=0,T=l.length;y<T;y++){let P=l[y],V=P.color,O=P.intensity,G=P.distance,B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ss?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=V.r*O,u+=V.g*O,f+=V.b*O;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],O);C++}else if(P.isDirectionalLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,Q=t.get(P);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,n.directionalShadow[d]=Q,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=P.shadow.matrix,S++}n.directional[d]=Y,d++}else if(P.isSpotLight){let Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(V).multiplyScalar(O),Y.distance=G,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[_]=Y;let z=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,z.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=z.matrix,P.castShadow){let Q=t.get(P);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=B,v++}_++}else if(P.isRectAreaLight){let Y=e.get(P);Y.color.copy(V).multiplyScalar(O),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=Y,g++}else if(P.isPointLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let z=P.shadow,Q=t.get(P);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,Q.shadowCameraNear=z.camera.near,Q.shadowCameraFar=z.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=P.shadow.matrix,b++}n.point[m]=Y,m++}else if(P.isHemisphereLight){let Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(O),Y.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=Y,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==d||F.pointLength!==m||F.spotLength!==_||F.rectAreaLength!==g||F.hemiLength!==p||F.numDirectionalShadows!==S||F.numPointShadows!==b||F.numSpotShadows!==v||F.numSpotMaps!==A||F.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,F.directionalLength=d,F.pointLength=m,F.spotLength=_,F.rectAreaLength=g,F.hemiLength=p,F.numDirectionalShadows=S,F.numPointShadows=b,F.numSpotShadows=v,F.numSpotMaps=A,F.numLightProbes=C,n.version=Cx++)}function c(l,h){let u=0,f=0,d=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let b=l[p];if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(b.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(b.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function xf(s){let e=new Ix(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Px(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new xf(s),e.set(i,[o])):r>=a.length?(o=new xf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nx=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Ux=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],_f=new Ke,ea=new U,Il=new U;function Fx(s,e,t){let n=new Vs,i=new $e,r=new $e,a=new _t,o=new Ya,c=new Ka,l={},h=t.maxTextureSize,u={[On]:sn,[sn]:On,[hn]:hn},f=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Lx,fragmentShader:Dx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Wt;m.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ut(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let p=this.type;this.render=function(R,C,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;R.type===du&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Xr);let y=s.getRenderTarget(),T=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),V=s.state;V.setBlending(ei),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let O=p!==this.type;O&&C.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(B=>B.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,B=R.length;G<B;G++){let Y=R[G],z=Y.shadow;if(z===void 0){Oe("WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let Q=z.getFrameExtents();if(i.multiply(Q),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,z.mapSize.y=r.y)),z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===qs){if(Y.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new nn(i.x,i.y,{format:ss,type:ti,minFilter:wt,magFilter:wt,generateMipmaps:!1}),z.map.texture.name=Y.name+".shadowMap",z.map.depthTexture=new Pi(i.x,i.y,_n),z.map.depthTexture.name=Y.name+".shadowMapDepth",z.map.depthTexture.format=Zn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Rt,z.map.depthTexture.magFilter=Rt}else{Y.isPointLight?(z.map=new Ar(i.x),z.map.depthTexture=new Xa(i.x,Gn)):(z.map=new nn(i.x,i.y),z.map.depthTexture=new Pi(i.x,i.y,Gn)),z.map.depthTexture.name=Y.name+".shadowMap",z.map.depthTexture.format=Zn;let he=s.state.buffers.depth.getReversed();this.type===Xr?(z.map.depthTexture.compareFunction=he?Qo:jo,z.map.depthTexture.minFilter=wt,z.map.depthTexture.magFilter=wt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Rt,z.map.depthTexture.magFilter=Rt)}z.camera.updateProjectionMatrix()}let ue=z.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<ue;he++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,he),s.clear();else{he===0&&(s.setRenderTarget(z.map),s.clear());let ge=z.getViewport(he);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),V.viewport(a)}if(Y.isPointLight){let ge=z.camera,Fe=z.matrix,De=Y.distance||ge.far;De!==ge.far&&(ge.far=De,ge.updateProjectionMatrix()),ea.setFromMatrixPosition(Y.matrixWorld),ge.position.copy(ea),Il.copy(ge.position),Il.add(Nx[he]),ge.up.copy(Ux[he]),ge.lookAt(Il),ge.updateMatrixWorld(),Fe.makeTranslation(-ea.x,-ea.y,-ea.z),_f.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),z._frustum.setFromProjectionMatrix(_f,ge.coordinateSystem,ge.reversedDepth)}else z.updateMatrices(Y);n=z.getFrustum(),v(C,F,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===qs&&S(z,F),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(y,T,P)};function S(R,C){let F=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new nn(i.x,i.y,{format:ss,type:ti})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,F,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,F,d,_,null)}function b(R,C,F,y){let T=null,P=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)T=P;else if(T=F.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let V=T.uuid,O=C.uuid,G=l[V];G===void 0&&(G={},l[V]=G);let B=G[O];B===void 0&&(B=T.clone(),G[O]=B,C.addEventListener("dispose",A)),T=B}if(T.visible=C.visible,T.wireframe=C.wireframe,y===qs?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let V=s.properties.get(T);V.light=F}return T}function v(R,C,F,y,T){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===qs)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let O=e.update(R),G=R.material;if(Array.isArray(G)){let B=O.groups;for(let Y=0,z=B.length;Y<z;Y++){let Q=B[Y],ue=G[Q.materialIndex];if(ue&&ue.visible){let he=b(R,ue,y,T);R.onBeforeShadow(s,R,C,F,O,he,Q),s.renderBufferDirect(F,null,O,he,R,Q),R.onAfterShadow(s,R,C,F,O,he,Q)}}}else if(G.visible){let B=b(R,G,y,T);R.onBeforeShadow(s,R,C,F,O,B,null),s.renderBufferDirect(F,null,O,B,R,null),R.onAfterShadow(s,R,C,F,O,B,null)}}let V=R.children;for(let O=0,G=V.length;O<G;O++)v(V[O],C,F,y,T)}function A(R){R.target.removeEventListener("dispose",A);for(let F in l){let y=l[F],T=R.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}var Ox={[no]:io,[so]:oo,[ro]:co,[Zi]:ao,[io]:no,[oo]:so,[co]:ro,[ao]:Zi};function Bx(s,e){function t(){let I=!1,re=new _t,se=null,Te=new _t(0,0,0,0);return{setMask:function(oe){se!==oe&&!I&&(s.colorMask(oe,oe,oe,oe),se=oe)},setLocked:function(oe){I=oe},setClear:function(oe,ee,de,Le,at){at===!0&&(oe*=Le,ee*=Le,de*=Le),re.set(oe,ee,de,Le),Te.equals(re)===!1&&(s.clearColor(oe,ee,de,Le),Te.copy(re))},reset:function(){I=!1,se=null,Te.set(-1,0,0,0)}}}function n(){let I=!1,re=!1,se=null,Te=null,oe=null;return{setReversed:function(ee){if(re!==ee){let de=e.get("EXT_clip_control");ee?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),re=ee;let Le=oe;oe=null,this.setClear(Le)}},getReversed:function(){return re},setTest:function(ee){ee?te(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ee){se!==ee&&!I&&(s.depthMask(ee),se=ee)},setFunc:function(ee){if(re&&(ee=Ox[ee]),Te!==ee){switch(ee){case no:s.depthFunc(s.NEVER);break;case io:s.depthFunc(s.ALWAYS);break;case so:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case ro:s.depthFunc(s.EQUAL);break;case ao:s.depthFunc(s.GEQUAL);break;case oo:s.depthFunc(s.GREATER);break;case co:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Te=ee}},setLocked:function(ee){I=ee},setClear:function(ee){oe!==ee&&(re&&(ee=1-ee),s.clearDepth(ee),oe=ee)},reset:function(){I=!1,se=null,Te=null,oe=null,re=!1}}}function i(){let I=!1,re=null,se=null,Te=null,oe=null,ee=null,de=null,Le=null,at=null;return{setTest:function(ot){I||(ot?te(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(ot){re!==ot&&!I&&(s.stencilMask(ot),re=ot)},setFunc:function(ot,St,$t){(se!==ot||Te!==St||oe!==$t)&&(s.stencilFunc(ot,St,$t),se=ot,Te=St,oe=$t)},setOp:function(ot,St,$t){(ee!==ot||de!==St||Le!==$t)&&(s.stencilOp(ot,St,$t),ee=ot,de=St,Le=$t)},setLocked:function(ot){I=ot},setClear:function(ot){at!==ot&&(s.clearStencil(ot),at=ot)},reset:function(){I=!1,re=null,se=null,Te=null,oe=null,ee=null,de=null,Le=null,at=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,b=null,v=null,A=null,R=null,C=new je(0,0,0),F=0,y=!1,T=null,P=null,V=null,O=null,G=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,z=0,Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=z>=1):Q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=z>=2);let ue=null,he={},ge=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),De=new _t().fromArray(ge),rt=new _t().fromArray(Fe);function qe(I,re,se,Te){let oe=new Uint8Array(4),ee=s.createTexture();s.bindTexture(I,ee),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let de=0;de<se;de++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(re+de,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return ee}let J={};J[s.TEXTURE_2D]=qe(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=qe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=qe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=qe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(s.DEPTH_TEST),a.setFunc(Zi),j(!1),ce($c),te(s.CULL_FACE),Ge(ei);function te(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function ye(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function ke(I,re){return u[I]!==re?(s.bindFramebuffer(I,re),u[I]=re,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=re),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=re),!0):!1}function Me(I,re){let se=d,Te=!1;if(I){se=f.get(re),se===void 0&&(se=[],f.set(re,se));let oe=I.textures;if(se.length!==oe.length||se[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,de=oe.length;ee<de;ee++)se[ee]=s.COLOR_ATTACHMENT0+ee;se.length=oe.length,Te=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,Te=!0);Te&&s.drawBuffers(se)}function Je(I){return m!==I?(s.useProgram(I),m=I,!0):!1}let ut={[Ei]:s.FUNC_ADD,[mu]:s.FUNC_SUBTRACT,[gu]:s.FUNC_REVERSE_SUBTRACT};ut[xu]=s.MIN,ut[_u]=s.MAX;let tt={[vu]:s.ZERO,[yu]:s.ONE,[Mu]:s.SRC_COLOR,[Fa]:s.SRC_ALPHA,[Eu]:s.SRC_ALPHA_SATURATE,[wu]:s.DST_COLOR,[Su]:s.DST_ALPHA,[bu]:s.ONE_MINUS_SRC_COLOR,[Oa]:s.ONE_MINUS_SRC_ALPHA,[Au]:s.ONE_MINUS_DST_COLOR,[Tu]:s.ONE_MINUS_DST_ALPHA,[Cu]:s.CONSTANT_COLOR,[Ru]:s.ONE_MINUS_CONSTANT_COLOR,[Iu]:s.CONSTANT_ALPHA,[Pu]:s.ONE_MINUS_CONSTANT_ALPHA};function Ge(I,re,se,Te,oe,ee,de,Le,at,ot){if(I===ei){_===!0&&(ye(s.BLEND),_=!1);return}if(_===!1&&(te(s.BLEND),_=!0),I!==pu){if(I!==g||ot!==y){if((p!==Ei||v!==Ei)&&(s.blendEquation(s.FUNC_ADD),p=Ei,v=Ei),ot)switch(I){case Ki:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jc:s.blendFunc(s.ONE,s.ONE);break;case Qc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case el:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ze("WebGLState: Invalid blending: ",I);break}else switch(I){case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qc:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",I);break}S=null,b=null,A=null,R=null,C.set(0,0,0),F=0,g=I,y=ot}return}oe=oe||re,ee=ee||se,de=de||Te,(re!==p||oe!==v)&&(s.blendEquationSeparate(ut[re],ut[oe]),p=re,v=oe),(se!==S||Te!==b||ee!==A||de!==R)&&(s.blendFuncSeparate(tt[se],tt[Te],tt[ee],tt[de]),S=se,b=Te,A=ee,R=de),(Le.equals(C)===!1||at!==F)&&(s.blendColor(Le.r,Le.g,Le.b,at),C.copy(Le),F=at),g=I,y=!1}function X(I,re){I.side===hn?ye(s.CULL_FACE):te(s.CULL_FACE);let se=I.side===sn;re&&(se=!se),j(se),I.blending===Ki&&I.transparent===!1?Ge(ei):Ge(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let Te=I.stencilWrite;o.setTest(Te),Te&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){T!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),T=I)}function ce(I){I!==uu?(te(s.CULL_FACE),I!==P&&(I===$c?s.cullFace(s.BACK):I===fu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),P=I}function E(I){I!==V&&(Y&&s.lineWidth(I),V=I)}function Ae(I,re,se){I?(te(s.POLYGON_OFFSET_FILL),(O!==re||G!==se)&&(s.polygonOffset(re,se),O=re,G=se)):ye(s.POLYGON_OFFSET_FILL)}function ve(I){I?te(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Ue(I){I===void 0&&(I=s.TEXTURE0+B-1),ue!==I&&(s.activeTexture(I),ue=I)}function me(I,re,se){se===void 0&&(ue===null?se=s.TEXTURE0+B-1:se=ue);let Te=he[se];Te===void 0&&(Te={type:void 0,texture:void 0},he[se]=Te),(Te.type!==I||Te.texture!==re)&&(ue!==se&&(s.activeTexture(se),ue=se),s.bindTexture(I,re||J[I]),Te.type=I,Te.texture=re)}function w(){let I=he[ue];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function $(){try{s.texSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ne(){try{s.texSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Ee(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function fe(){try{s.texStorage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Ce(){try{s.texStorage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Be(){try{s.texImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ae(){try{s.texImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function xe(I){De.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),De.copy(I))}function we(I){rt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),rt.copy(I))}function H(I,re){let se=l.get(re);se===void 0&&(se=new WeakMap,l.set(re,se));let Te=se.get(I);Te===void 0&&(Te=s.getUniformBlockIndex(re,I.name),se.set(I,Te))}function W(I,re){let Te=l.get(re).get(I);c.get(re)!==Te&&(s.uniformBlockBinding(re,Te,I.__bindingPointIndex),c.set(re,Te))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ue=null,he={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,S=null,b=null,v=null,A=null,R=null,C=new je(0,0,0),F=0,y=!1,T=null,P=null,V=null,O=null,G=null,De.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:ke,drawBuffers:Me,useProgram:Je,setBlending:Ge,setMaterial:X,setFlipSided:j,setCullFace:ce,setLineWidth:E,setPolygonOffset:Ae,setScissorTest:ve,activeTexture:Ue,bindTexture:me,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:L,texImage2D:Be,texImage3D:ae,updateUBOMapping:H,uniformBlockBinding:W,texStorage2D:fe,texStorage3D:Ce,texSubImage2D:$,texSubImage3D:ne,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ee,scissor:xe,viewport:we,reset:ie}}function zx(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return d?new OffscreenCanvas(w,x):Is("canvas")}function _(w,x,L){let $=1,ne=me(w);if((ne.width>L||ne.height>L)&&($=L/Math.max(ne.width,ne.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Z=Math.floor($*ne.width),Ee=Math.floor($*ne.height);u===void 0&&(u=m(Z,Ee));let fe=x?m(Z,Ee):u;return fe.width=Z,fe.height=Ee,fe.getContext("2d").drawImage(w,0,0,Z,Ee),Oe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Ee+")."),fe}else return"data"in w&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,x,L,$,ne=!1){if(w!==null){if(s[w]!==void 0)return s[w];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=x;if(x===s.RED&&(L===s.FLOAT&&(Z=s.R32F),L===s.HALF_FLOAT&&(Z=s.R16F),L===s.UNSIGNED_BYTE&&(Z=s.R8)),x===s.RED_INTEGER&&(L===s.UNSIGNED_BYTE&&(Z=s.R8UI),L===s.UNSIGNED_SHORT&&(Z=s.R16UI),L===s.UNSIGNED_INT&&(Z=s.R32UI),L===s.BYTE&&(Z=s.R8I),L===s.SHORT&&(Z=s.R16I),L===s.INT&&(Z=s.R32I)),x===s.RG&&(L===s.FLOAT&&(Z=s.RG32F),L===s.HALF_FLOAT&&(Z=s.RG16F),L===s.UNSIGNED_BYTE&&(Z=s.RG8)),x===s.RG_INTEGER&&(L===s.UNSIGNED_BYTE&&(Z=s.RG8UI),L===s.UNSIGNED_SHORT&&(Z=s.RG16UI),L===s.UNSIGNED_INT&&(Z=s.RG32UI),L===s.BYTE&&(Z=s.RG8I),L===s.SHORT&&(Z=s.RG16I),L===s.INT&&(Z=s.RG32I)),x===s.RGB_INTEGER&&(L===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),L===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),L===s.UNSIGNED_INT&&(Z=s.RGB32UI),L===s.BYTE&&(Z=s.RGB8I),L===s.SHORT&&(Z=s.RGB16I),L===s.INT&&(Z=s.RGB32I)),x===s.RGBA_INTEGER&&(L===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),L===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),L===s.UNSIGNED_INT&&(Z=s.RGBA32UI),L===s.BYTE&&(Z=s.RGBA8I),L===s.SHORT&&(Z=s.RGBA16I),L===s.INT&&(Z=s.RGBA32I)),x===s.RGB&&(L===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),L===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),x===s.RGBA){let Ee=ne?_r:ct.getTransfer($);L===s.FLOAT&&(Z=s.RGBA32F),L===s.HALF_FLOAT&&(Z=s.RGBA16F),L===s.UNSIGNED_BYTE&&(Z=Ee===xt?s.SRGB8_ALPHA8:s.RGBA8),L===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),L===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(w,x){let L;return w?x===null||x===Gn||x===Zs?L=s.DEPTH24_STENCIL8:x===_n?L=s.DEPTH32F_STENCIL8:x===Ks&&(L=s.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gn||x===Zs?L=s.DEPTH_COMPONENT24:x===_n?L=s.DEPTH_COMPONENT32F:x===Ks&&(L=s.DEPTH_COMPONENT16),L}function A(w,x){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rt&&w.minFilter!==wt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){let x=w.target;x.removeEventListener("dispose",R),F(x),x.isVideoTexture&&h.delete(x)}function C(w){let x=w.target;x.removeEventListener("dispose",C),T(x)}function F(w){let x=n.get(w);if(x.__webglInit===void 0)return;let L=w.source,$=f.get(L);if($){let ne=$[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&y(w),Object.keys($).length===0&&f.delete(L)}n.remove(w)}function y(w){let x=n.get(w);s.deleteTexture(x.__webglTexture);let L=w.source,$=f.get(L);delete $[x.__cacheKey],a.memory.textures--}function T(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ne=0;ne<x.__webglFramebuffer[$].length;ne++)s.deleteFramebuffer(x.__webglFramebuffer[$][ne]);else s.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)s.deleteFramebuffer(x.__webglFramebuffer[$]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let L=w.textures;for(let $=0,ne=L.length;$<ne;$++){let Z=n.get(L[$]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(L[$])}n.remove(w)}let P=0;function V(){P=0}function O(){let w=P;return w>=i.maxTextures&&Oe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function G(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function B(w,x){let L=n.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&L.__version!==w.version){let $=w.image;if($===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{J(L,w,x);return}}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,L.__webglTexture,s.TEXTURE0+x)}function Y(w,x){let L=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){J(L,w,x);return}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,L.__webglTexture,s.TEXTURE0+x)}function z(w,x){let L=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){J(L,w,x);return}t.bindTexture(s.TEXTURE_3D,L.__webglTexture,s.TEXTURE0+x)}function Q(w,x){let L=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&L.__version!==w.version){te(L,w,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+x)}let ue={[Ci]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[Rs]:s.MIRRORED_REPEAT},he={[Rt]:s.NEAREST,[uo]:s.NEAREST_MIPMAP_NEAREST,[is]:s.NEAREST_MIPMAP_LINEAR,[wt]:s.LINEAR,[Ys]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},ge={[Bu]:s.NEVER,[Hu]:s.ALWAYS,[zu]:s.LESS,[jo]:s.LEQUAL,[ku]:s.EQUAL,[Qo]:s.GEQUAL,[Vu]:s.GREATER,[Gu]:s.NOTEQUAL};function Fe(w,x){if(x.type===_n&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===wt||x.magFilter===Ys||x.magFilter===is||x.magFilter===Vn||x.minFilter===wt||x.minFilter===Ys||x.minFilter===is||x.minFilter===Vn)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,ue[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,ue[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,ue[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,he[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rt||x.minFilter!==is&&x.minFilter!==Vn||x.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function De(w,x){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));let $=x.source,ne=f.get($);ne===void 0&&(ne={},f.set($,ne));let Z=G(x);if(Z!==w.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,L=!0),ne[Z].usedTimes++;let Ee=ne[w.__cacheKey];Ee!==void 0&&(ne[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(x)),w.__cacheKey=Z,w.__webglTexture=ne[Z].texture}return L}function rt(w,x,L){return Math.floor(Math.floor(w/L)/x)}function qe(w,x,L,$){let Z=w.updateRanges;if(Z.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,L,$,x.data);else{Z.sort((ae,xe)=>ae.start-xe.start);let Ee=0;for(let ae=1;ae<Z.length;ae++){let xe=Z[Ee],we=Z[ae],H=xe.start+xe.count,W=rt(we.start,x.width,4),ie=rt(xe.start,x.width,4);we.start<=H+1&&W===ie&&rt(we.start+we.count-1,x.width,4)===W?xe.count=Math.max(xe.count,we.start+we.count-xe.start):(++Ee,Z[Ee]=we)}Z.length=Ee+1;let fe=s.getParameter(s.UNPACK_ROW_LENGTH),Ce=s.getParameter(s.UNPACK_SKIP_PIXELS),Be=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let ae=0,xe=Z.length;ae<xe;ae++){let we=Z[ae],H=Math.floor(we.start/4),W=Math.ceil(we.count/4),ie=H%x.width,I=Math.floor(H/x.width),re=W,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,ie,I,re,se,L,$,x.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,fe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),s.pixelStorei(s.UNPACK_SKIP_ROWS,Be)}}function J(w,x,L){let $=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=s.TEXTURE_3D);let ne=De(w,x),Z=x.source;t.bindTexture($,w.__webglTexture,s.TEXTURE0+L);let Ee=n.get(Z);if(Z.version!==Ee.__version||ne===!0){t.activeTexture(s.TEXTURE0+L);let fe=ct.getPrimaries(ct.workingColorSpace),Ce=x.colorSpace===yn?null:ct.getPrimaries(x.colorSpace),Be=x.colorSpace===yn||fe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ae=_(x.image,!1,i.maxTextureSize);ae=Ue(x,ae);let xe=r.convert(x.format,x.colorSpace),we=r.convert(x.type),H=b(x.internalFormat,xe,we,x.colorSpace,x.isVideoTexture);Fe($,x);let W,ie=x.mipmaps,I=x.isVideoTexture!==!0,re=Ee.__version===void 0||ne===!0,se=Z.dataReady,Te=A(x,ae);if(x.isDepthTexture)H=v(x.format===Ni,x.type),re&&(I?t.texStorage2D(s.TEXTURE_2D,1,H,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,H,ae.width,ae.height,0,xe,we,null));else if(x.isDataTexture)if(ie.length>0){I&&re&&t.texStorage2D(s.TEXTURE_2D,Te,H,ie[0].width,ie[0].height);for(let oe=0,ee=ie.length;oe<ee;oe++)W=ie[oe],I?se&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,W.width,W.height,xe,we,W.data):t.texImage2D(s.TEXTURE_2D,oe,H,W.width,W.height,0,xe,we,W.data);x.generateMipmaps=!1}else I?(re&&t.texStorage2D(s.TEXTURE_2D,Te,H,ae.width,ae.height),se&&qe(x,ae,xe,we)):t.texImage2D(s.TEXTURE_2D,0,H,ae.width,ae.height,0,xe,we,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,H,ie[0].width,ie[0].height,ae.depth);for(let oe=0,ee=ie.length;oe<ee;oe++)if(W=ie[oe],x.format!==vn)if(xe!==null)if(I){if(se)if(x.layerUpdates.size>0){let de=Tl(W.width,W.height,x.format,x.type);for(let Le of x.layerUpdates){let at=W.data.subarray(Le*de/W.data.BYTES_PER_ELEMENT,(Le+1)*de/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Le,W.width,W.height,1,xe,at)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,W.width,W.height,ae.depth,xe,W.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,H,W.width,W.height,ae.depth,0,W.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,W.width,W.height,ae.depth,xe,we,W.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,H,W.width,W.height,ae.depth,0,xe,we,W.data)}else{I&&re&&t.texStorage2D(s.TEXTURE_2D,Te,H,ie[0].width,ie[0].height);for(let oe=0,ee=ie.length;oe<ee;oe++)W=ie[oe],x.format!==vn?xe!==null?I?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,W.width,W.height,xe,W.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,H,W.width,W.height,0,W.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,W.width,W.height,xe,we,W.data):t.texImage2D(s.TEXTURE_2D,oe,H,W.width,W.height,0,xe,we,W.data)}else if(x.isDataArrayTexture)if(I){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,H,ae.width,ae.height,ae.depth),se)if(x.layerUpdates.size>0){let oe=Tl(ae.width,ae.height,x.format,x.type);for(let ee of x.layerUpdates){let de=ae.data.subarray(ee*oe/ae.data.BYTES_PER_ELEMENT,(ee+1)*oe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,xe,we,de)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,we,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,H,ae.width,ae.height,ae.depth,0,xe,we,ae.data);else if(x.isData3DTexture)I?(re&&t.texStorage3D(s.TEXTURE_3D,Te,H,ae.width,ae.height,ae.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,we,ae.data)):t.texImage3D(s.TEXTURE_3D,0,H,ae.width,ae.height,ae.depth,0,xe,we,ae.data);else if(x.isFramebufferTexture){if(re)if(I)t.texStorage2D(s.TEXTURE_2D,Te,H,ae.width,ae.height);else{let oe=ae.width,ee=ae.height;for(let de=0;de<Te;de++)t.texImage2D(s.TEXTURE_2D,de,H,oe,ee,0,xe,we,null),oe>>=1,ee>>=1}}else if(ie.length>0){if(I&&re){let oe=me(ie[0]);t.texStorage2D(s.TEXTURE_2D,Te,H,oe.width,oe.height)}for(let oe=0,ee=ie.length;oe<ee;oe++)W=ie[oe],I?se&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,xe,we,W):t.texImage2D(s.TEXTURE_2D,oe,H,xe,we,W);x.generateMipmaps=!1}else if(I){if(re){let oe=me(ae);t.texStorage2D(s.TEXTURE_2D,Te,H,oe.width,oe.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,we,ae)}else t.texImage2D(s.TEXTURE_2D,0,H,xe,we,ae);g(x)&&p($),Ee.__version=Z.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function te(w,x,L){if(x.image.length!==6)return;let $=De(w,x),ne=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+L);let Z=n.get(ne);if(ne.version!==Z.__version||$===!0){t.activeTexture(s.TEXTURE0+L);let Ee=ct.getPrimaries(ct.workingColorSpace),fe=x.colorSpace===yn?null:ct.getPrimaries(x.colorSpace),Ce=x.colorSpace===yn||Ee===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Be=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let ee=0;ee<6;ee++)!Be&&!ae?xe[ee]=_(x.image[ee],!0,i.maxCubemapSize):xe[ee]=ae?x.image[ee].image:x.image[ee],xe[ee]=Ue(x,xe[ee]);let we=xe[0],H=r.convert(x.format,x.colorSpace),W=r.convert(x.type),ie=b(x.internalFormat,H,W,x.colorSpace),I=x.isVideoTexture!==!0,re=Z.__version===void 0||$===!0,se=ne.dataReady,Te=A(x,we);Fe(s.TEXTURE_CUBE_MAP,x);let oe;if(Be){I&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,ie,we.width,we.height);for(let ee=0;ee<6;ee++){oe=xe[ee].mipmaps;for(let de=0;de<oe.length;de++){let Le=oe[de];x.format!==vn?H!==null?I?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,Le.width,Le.height,H,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,ie,Le.width,Le.height,0,Le.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,0,0,Le.width,Le.height,H,W,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de,ie,Le.width,Le.height,0,H,W,Le.data)}}}else{if(oe=x.mipmaps,I&&re){oe.length>0&&Te++;let ee=me(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,ie,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe[ee].width,xe[ee].height,H,W,xe[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ie,xe[ee].width,xe[ee].height,0,H,W,xe[ee].data);for(let de=0;de<oe.length;de++){let at=oe[de].image[ee].image;I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,at.width,at.height,H,W,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,ie,at.width,at.height,0,H,W,at.data)}}else{I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,H,W,xe[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ie,H,W,xe[ee]);for(let de=0;de<oe.length;de++){let Le=oe[de];I?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,0,0,H,W,Le.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,de+1,ie,H,W,Le.image[ee])}}}g(x)&&p(s.TEXTURE_CUBE_MAP),Z.__version=ne.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ye(w,x,L,$,ne,Z){let Ee=r.convert(L.format,L.colorSpace),fe=r.convert(L.type),Ce=b(L.internalFormat,Ee,fe,L.colorSpace),Be=n.get(x),ae=n.get(L);if(ae.__renderTarget=x,!Be.__hasExternalTextures){let xe=Math.max(1,x.width>>Z),we=Math.max(1,x.height>>Z);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,Ce,xe,we,x.depth,0,Ee,fe,null):t.texImage2D(ne,Z,Ce,xe,we,0,Ee,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),Ae(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,ne,ae.__webglTexture,0,E(x)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,ne,ae.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(w,x,L){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){let $=x.depthTexture,ne=$&&$.isDepthTexture?$.type:null,Z=v(x.stencilBuffer,ne),Ee=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ae(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,E(x),Z,x.width,x.height):L?s.renderbufferStorageMultisample(s.RENDERBUFFER,E(x),Z,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Z,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,w)}else{let $=x.textures;for(let ne=0;ne<$.length;ne++){let Z=$[ne],Ee=r.convert(Z.format,Z.colorSpace),fe=r.convert(Z.type),Ce=b(Z.internalFormat,Ee,fe,Z.colorSpace);Ae(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,E(x),Ce,x.width,x.height):L?s.renderbufferStorageMultisample(s.RENDERBUFFER,E(x),Ce,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(w,x,L){let $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=n.get(x.depthTexture);if(ne.__renderTarget=x,(!ne.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),ne.__webglTexture===void 0){ne.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,x.depthTexture);let Be=r.convert(x.depthTexture.format),ae=r.convert(x.depthTexture.type),xe;x.depthTexture.format===Zn?xe=s.DEPTH_COMPONENT24:x.depthTexture.format===Ni&&(xe=s.DEPTH24_STENCIL8);for(let we=0;we<6;we++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xe,x.width,x.height,0,Be,ae,null)}}else B(x.depthTexture,0);let Z=ne.__webglTexture,Ee=E(x),fe=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+L:s.TEXTURE_2D,Ce=x.depthTexture.format===Ni?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Zn)Ae(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,fe,Z,0,Ee):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,fe,Z,0);else if(x.depthTexture.format===Ni)Ae(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,fe,Z,0,Ee):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,fe,Z,0);else throw new Error("Unknown depthTexture format")}function Je(w){let x=n.get(w),L=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ne)};$.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=$}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(L)for(let $=0;$<6;$++)Me(x.__webglFramebuffer[$],w,$);else{let $=w.texture.mipmaps;$&&$.length>0?Me(x.__webglFramebuffer[0],w,0):Me(x.__webglFramebuffer,w,0)}else if(L){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=s.createRenderbuffer(),ke(x.__webglDepthbuffer[$],w,!1);else{let ne=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,Z)}}else{let $=w.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),ke(x.__webglDepthbuffer,w,!1);else{let ne=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,Z)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(w,x,L){let $=n.get(w);x!==void 0&&ye($.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),L!==void 0&&Je(w)}function tt(w){let x=w.texture,L=n.get(w),$=n.get(x);w.addEventListener("dispose",C);let ne=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=x.version,a.memory.textures++),Z){L.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[fe]=[];for(let Ce=0;Ce<x.mipmaps.length;Ce++)L.__webglFramebuffer[fe][Ce]=s.createFramebuffer()}else L.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)L.__webglFramebuffer[fe]=s.createFramebuffer()}else L.__webglFramebuffer=s.createFramebuffer();if(Ee)for(let fe=0,Ce=ne.length;fe<Ce;fe++){let Be=n.get(ne[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&Ae(w)===!1){L.__webglMultisampledFramebuffer=s.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){let Ce=ne[fe];L.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,L.__webglColorRenderbuffer[fe]);let Be=r.convert(Ce.format,Ce.colorSpace),ae=r.convert(Ce.type),xe=b(Ce.internalFormat,Be,ae,Ce.colorSpace,w.isXRRenderTarget===!0),we=E(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,xe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,L.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(L.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)ye(L.__webglFramebuffer[fe][Ce],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce);else ye(L.__webglFramebuffer[fe],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(x)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let fe=0,Ce=ne.length;fe<Ce;fe++){let Be=ne[fe],ae=n.get(Be),xe=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(xe=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,ae.__webglTexture),Fe(xe,Be),ye(L.__webglFramebuffer,w,Be,s.COLOR_ATTACHMENT0+fe,xe,0),g(Be)&&p(xe)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,$.__webglTexture),Fe(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)ye(L.__webglFramebuffer[Ce],w,x,s.COLOR_ATTACHMENT0,fe,Ce);else ye(L.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,fe,0);g(x)&&p(fe),t.unbindTexture()}w.depthBuffer&&Je(w)}function Ge(w){let x=w.textures;for(let L=0,$=x.length;L<$;L++){let ne=x[L];if(g(ne)){let Z=S(w),Ee=n.get(ne).__webglTexture;t.bindTexture(Z,Ee),p(Z),t.unbindTexture()}}}let X=[],j=[];function ce(w){if(w.samples>0){if(Ae(w)===!1){let x=w.textures,L=w.width,$=w.height,ne=s.COLOR_BUFFER_BIT,Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=n.get(w),fe=x.length>1;if(fe)for(let Be=0;Be<x.length;Be++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let Ce=w.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Be=0;Be<x.length;Be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Be]);let ae=n.get(x[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ae,0)}s.blitFramebuffer(0,0,L,$,0,0,L,$,ne,s.NEAREST),c===!0&&(X.length=0,j.length=0,X.push(s.COLOR_ATTACHMENT0+Be),w.depthBuffer&&w.resolveDepthBuffer===!1&&(X.push(Z),j.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Be=0;Be<x.length;Be++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Be]);let ae=n.get(x[Be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function E(w){return Math.min(i.maxSamples,w.samples)}function Ae(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Ue(w,x){let L=w.colorSpace,$=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==Ht&&L!==yn&&(ct.getTransfer(L)===xt?($!==vn||ne!==un)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",L)),x}function me(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=B,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=Q,this.rebindTextures=ut,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kx(s,e){function t(n,i=yn){let r,a=ct.getTransfer(i);if(n===un)return s.UNSIGNED_BYTE;if(n===po)return s.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===hl)return s.BYTE;if(n===ul)return s.SHORT;if(n===Ks)return s.UNSIGNED_SHORT;if(n===fo)return s.INT;if(n===Gn)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===ti)return s.HALF_FLOAT;if(n===pl)return s.ALPHA;if(n===ml)return s.RGB;if(n===vn)return s.RGBA;if(n===Zn)return s.DEPTH_COMPONENT;if(n===Ni)return s.DEPTH_STENCIL;if(n===go)return s.RED;if(n===xo)return s.RED_INTEGER;if(n===ss)return s.RG;if(n===_o)return s.RG_INTEGER;if(n===vo)return s.RGBA_INTEGER;if(n===Yr||n===Kr||n===Zr||n===Jr)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===Mo||n===bo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===wo||n===Ao||n===Eo||n===Co||n===Ro||n===Io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===wo)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Eo)return r.COMPRESSED_R11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===Io)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Vo||n===Go||n===Ho||n===Wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===qo||n===Yo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xo)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ko||n===Zo||n===Jo||n===$o)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:Vx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zl=class extends pi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,_=typeof XRWebGLBinding<"u",g=new Bl,p={},S=t.getContextAttributes(),b=null,v=null,A=[],R=[],C=new $e,F=null,y=new kt;y.viewport=new _t;let T=new kt;T.viewport=new _t;let P=[y,T],V=new to,O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=A[J];return te===void 0&&(te=new Fs,A[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=A[J];return te===void 0&&(te=new Fs,A[J]=te),te.getGripSpace()},this.getHand=function(J){let te=A[J];return te===void 0&&(te=new Fs,A[J]=te),te.getHandSpace()};function B(J){let te=R.indexOf(J.inputSource);if(te===-1)return;let ye=A[te];ye!==void 0&&(ye.update(J.inputSource,J.frame,l||a),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",z);for(let J=0;J<A.length;J++){let te=R[J];te!==null&&(R[J]=null,A[J].disconnect(te))}O=null,G=null,g.reset();for(let J in p)delete p[J];e.setRenderTarget(b),d=null,f=null,u=null,i=null,v=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ke=null,Me=null;S.depth&&(Me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?Ni:Zn,ke=S.stencil?Zs:Gn);let Je={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Je),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new nn(f.textureWidth,f.textureHeight,{format:vn,type:un,depthTexture:new Pi(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new nn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(J){for(let te=0;te<J.removed.length;te++){let ye=J.removed[te],ke=R.indexOf(ye);ke>=0&&(R[ke]=null,A[ke].disconnect(ye))}for(let te=0;te<J.added.length;te++){let ye=J.added[te],ke=R.indexOf(ye);if(ke===-1){for(let Je=0;Je<A.length;Je++)if(Je>=R.length){R.push(ye),ke=Je;break}else if(R[Je]===null){R[Je]=ye,ke=Je;break}if(ke===-1)break}let Me=A[ke];Me&&Me.connect(ye)}}let Q=new U,ue=new U;function he(J,te,ye){Q.setFromMatrixPosition(te.matrixWorld),ue.setFromMatrixPosition(ye.matrixWorld);let ke=Q.distanceTo(ue),Me=te.projectionMatrix.elements,Je=ye.projectionMatrix.elements,ut=Me[14]/(Me[10]-1),tt=Me[14]/(Me[10]+1),Ge=(Me[9]+1)/Me[5],X=(Me[9]-1)/Me[5],j=(Me[8]-1)/Me[0],ce=(Je[8]+1)/Je[0],E=ut*j,Ae=ut*ce,ve=ke/(-j+ce),Ue=ve*-j;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ue),J.translateZ(ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Me[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let me=ut+ve,w=tt+ve,x=E-Ue,L=Ae+(ke-Ue),$=Ge*tt/w*me,ne=X*tt/w*me;J.projectionMatrix.makePerspective(x,L,$,ne,me,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ge(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let te=J.near,ye=J.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),V.near=T.near=y.near=te,V.far=T.far=y.far=ye,(O!==V.near||G!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),O=V.near,G=V.far),V.layers.mask=J.layers.mask|6,y.layers.mask=V.layers.mask&3,T.layers.mask=V.layers.mask&5;let ke=J.parent,Me=V.cameras;ge(V,ke);for(let Je=0;Je<Me.length;Je++)ge(Me[Je],ke);Me.length===2?he(V,y,T):V.projectionMatrix.copy(y.projectionMatrix),Fe(J,V,ke)};function Fe(J,te,ye){ye===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ji*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(J){return p[J]};let De=null;function rt(J,te){if(h=te.getViewerPose(l||a),m=te,h!==null){let ye=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ke=!1;ye.length!==V.cameras.length&&(V.cameras.length=0,ke=!0);for(let tt=0;tt<ye.length;tt++){let Ge=ye[tt],X=null;if(d!==null)X=d.getViewport(Ge);else{let ce=u.getViewSubImage(f,Ge);X=ce.viewport,tt===0&&(e.setRenderTargetTextures(v,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(v))}let j=P[tt];j===void 0&&(j=new kt,j.layers.enable(tt),j.viewport=new _t,P[tt]=j),j.matrix.fromArray(Ge.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ge.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(X.x,X.y,X.width,X.height),tt===0&&(V.matrix.copy(j.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ke===!0&&V.cameras.push(j)}let Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let tt=u.getDepthInformation(ye[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,i.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let tt=0;tt<ye.length;tt++){let Ge=ye[tt].camera;if(Ge){let X=p[Ge];X||(X=new Nr,p[Ge]=X);let j=u.getCameraImage(Ge);X.sourceTexture=j}}}}for(let ye=0;ye<A.length;ye++){let ke=R[ye],Me=A[ye];ke!==null&&Me!==void 0&&Me.update(ke,te,l||a)}De&&De(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let qe=new vf;qe.setAnimationLoop(rt),this.setAnimationLoop=function(J){De=J},this.dispose=function(){}}},os=new Bn,Hx=new Ke;function Wx(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ml(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,S,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,S,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===sn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===sn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=e.get(p),b=S.envMap,v=S.envMapRotation;b&&(g.envMap.value=b,os.copy(v),os.x*=-1,os.y*=-1,os.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(os)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xx(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let v=b.program;n.uniformBlockBinding(S,v)}function l(S,b){let v=i[S.id];v===void 0&&(m(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",g));let A=b.program;n.updateUBOMapping(S,A);let R=e.render.frame;r[S.id]!==R&&(f(S),r[S.id]=R)}function h(S){let b=u();S.__bindingPointIndex=b;let v=s.createBuffer(),A=S.__size,R=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let b=i[S.id],v=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let R=0,C=v.length;R<C;R++){let F=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,T=F.length;y<T;y++){let P=F[y];if(d(P,R,y,A)===!0){let V=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],G=0;for(let B=0;B<O.length;B++){let Y=O[B],z=_(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,V+G,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,G),G+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,b,v,A){let R=S.value,C=b+"_"+v;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{let F=A[C];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return A[C]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function m(S){let b=S.uniforms,v=0,A=16;for(let C=0,F=b.length;C<F;C++){let y=Array.isArray(b[C])?b[C]:[b[C]];for(let T=0,P=y.length;T<P;T++){let V=y[T],O=Array.isArray(V.value)?V.value:[V.value];for(let G=0,B=O.length;G<B;G++){let Y=O[G],z=_(Y),Q=v%A,ue=Q%z.boundary,he=Q+ue;v+=ue,he!==0&&A-he<z.storage&&(v+=A-he),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=z.storage}}}let R=v%A;return R>0&&(v+=A-R),S.__size=v,S.__cache={},this}function _(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",S),b}function g(S){let b=S.target;b.removeEventListener("dispose",g);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function Yx(){return ni===null&&(ni=new ks(qx,16,16,ss,ti),ni.name="DFG_LUT",ni.minFilter=wt,ni.magFilter=wt,ni.wrapS=Tn,ni.wrapT=Tn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var ic=class{constructor(e={}){let{canvas:t=Wu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=un}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=d,g=new Set([vo,_o,xo]),p=new Set([un,Gn,Ks,Zs,po,mo]),S=new Uint32Array(4),b=new Int32Array(4),v=null,A=null,R=[],C=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=Dt;let P=0,V=0,O=null,G=-1,B=null,Y=new _t,z=new _t,Q=null,ue=new je(0),he=0,ge=t.width,Fe=t.height,De=1,rt=null,qe=null,J=new _t(0,0,ge,Fe),te=new _t(0,0,ge,Fe),ye=!1,ke=new Vs,Me=!1,Je=!1,ut=new Ke,tt=new U,Ge=new _t,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function ce(){return O===null?De:1}let E=n;function Ae(M,N){return t.getContext(M,N)}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",ot,!1),E===null){let N="webgl2";if(E=Ae(N,M),E===null)throw Ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ze("WebGLRenderer: "+M.message),M}let ve,Ue,me,w,x,L,$,ne,Z,Ee,fe,Ce,Be,ae,xe,we,H,W,ie,I,re,se,Te,oe;function ee(){ve=new e0(E),ve.init(),se=new kx(E,ve),Ue=new Xg(E,ve,e,se),me=new Bx(E,ve),Ue.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),w=new i0(E),x=new Sx,L=new zx(E,ve,me,x,Ue,se,w),$=new Yg(y),ne=new Qg(y),Z=new op(E),Te=new Hg(E,Z),Ee=new t0(E,Z,w,Te),fe=new r0(E,Ee,Z,w),ie=new s0(E,Ue,L),we=new qg(x),Ce=new bx(y,$,ne,ve,Ue,Te,we),Be=new Wx(y,x),ae=new wx,xe=new Px(ve),W=new Gg(y,$,ne,me,fe,m,c),H=new Fx(y,fe,Ue),oe=new Xx(E,w,Ue,me),I=new Wg(E,ve,w),re=new n0(E,ve,w),w.programs=Ce.programs,y.capabilities=Ue,y.extensions=ve,y.properties=x,y.renderLists=ae,y.shadowMap=H,y.state=me,y.info=w}ee(),_!==un&&(F=new o0(_,t.width,t.height,i,r));let de=new zl(y,E);this.xr=de,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let M=ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(M){M!==void 0&&(De=M,this.setSize(ge,Fe,!1))},this.getSize=function(M){return M.set(ge,Fe)},this.setSize=function(M,N,K=!0){if(de.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=M,Fe=N,t.width=Math.floor(M*De),t.height=Math.floor(N*De),K===!0&&(t.style.width=M+"px",t.style.height=N+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(ge*De,Fe*De).floor()},this.setDrawingBufferSize=function(M,N,K){ge=M,Fe=N,De=K,t.width=Math.floor(M*K),t.height=Math.floor(N*K),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(_===un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Y)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,N,K,q){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,N,K,q),me.viewport(Y.copy(J).multiplyScalar(De).round())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,N,K,q){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,N,K,q),me.scissor(z.copy(te).multiplyScalar(De).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(M){me.setScissorTest(ye=M)},this.setOpaqueSort=function(M){rt=M},this.setTransparentSort=function(M){qe=M},this.getClearColor=function(M){return M.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,K=!0){let q=0;if(M){let k=!1;if(O!==null){let _e=O.texture.format;k=g.has(_e)}if(k){let _e=O.texture.type,Re=p.has(_e),be=W.getClearColor(),Ie=W.getClearAlpha(),Ne=be.r,Ye=be.g,He=be.b;Re?(S[0]=Ne,S[1]=Ye,S[2]=He,S[3]=Ie,E.clearBufferuiv(E.COLOR,0,S)):(b[0]=Ne,b[1]=Ye,b[2]=He,b[3]=Ie,E.clearBufferiv(E.COLOR,0,b))}else q|=E.COLOR_BUFFER_BIT}N&&(q|=E.DEPTH_BUFFER_BIT),K&&(q|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),W.dispose(),ae.dispose(),xe.dispose(),x.dispose(),$.dispose(),ne.dispose(),fe.dispose(),Te.dispose(),oe.dispose(),Ce.dispose(),de.dispose(),de.removeEventListener("sessionstart",Bi),de.removeEventListener("sessionend",or),En.stop()};function Le(M){M.preventDefault(),yr("WebGLRenderer: Context Lost."),T=!0}function at(){yr("WebGLRenderer: Context Restored."),T=!1;let M=w.autoReset,N=H.enabled,K=H.autoUpdate,q=H.needsUpdate,k=H.type;ee(),w.autoReset=M,H.enabled=N,H.autoUpdate=K,H.needsUpdate=q,H.type=k}function ot(M){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function St(M){let N=M.target;N.removeEventListener("dispose",St),$t(N)}function $t(M){Wn(M),x.remove(M)}function Wn(M){let N=x.get(M).programs;N!==void 0&&(N.forEach(function(K){Ce.releaseProgram(K)}),M.isShaderMaterial&&Ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,K,q,k,_e){N===null&&(N=X);let Re=k.isMesh&&k.matrixWorld.determinant()<0,be=Mn(M,N,K,q,k);me.setMaterial(q,Re);let Ie=K.index,Ne=1;if(q.wireframe===!0){if(Ie=Ee.getWireframeAttribute(K),Ie===void 0)return;Ne=2}let Ye=K.drawRange,He=K.attributes.position,it=Ye.start*Ne,pt=(Ye.start+Ye.count)*Ne;_e!==null&&(it=Math.max(it,_e.start*Ne),pt=Math.min(pt,(_e.start+_e.count)*Ne)),Ie!==null?(it=Math.max(it,0),pt=Math.min(pt,Ie.count)):He!=null&&(it=Math.max(it,0),pt=Math.min(pt,He.count));let yt=pt-it;if(yt<0||yt===1/0)return;Te.setup(k,q,be,K,Ie);let Tt,mt=I;if(Ie!==null&&(Tt=Z.get(Ie),mt=re,mt.setIndex(Tt)),k.isMesh)q.wireframe===!0?(me.setLineWidth(q.wireframeLinewidth*ce()),mt.setMode(E.LINES)):mt.setMode(E.TRIANGLES);else if(k.isLine){let Ve=q.linewidth;Ve===void 0&&(Ve=1),me.setLineWidth(Ve*ce()),k.isLineSegments?mt.setMode(E.LINES):k.isLineLoop?mt.setMode(E.LINE_LOOP):mt.setMode(E.LINE_STRIP)}else k.isPoints?mt.setMode(E.POINTS):k.isSprite&&mt.setMode(E.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ls("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ve=k._multiDrawStarts,gt=k._multiDrawCounts,ft=k._multiDrawCount,Qt=Ie?Z.get(Ie).bytesPerElement:1,ai=x.get(q).currentProgram.getUniforms();for(let Xt=0;Xt<ft;Xt++)ai.setValue(E,"_gl_DrawID",Xt),mt.render(Ve[Xt]/Qt,gt[Xt])}else if(k.isInstancedMesh)mt.renderInstances(it,yt,k.count);else if(K.isInstancedBufferGeometry){let Ve=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,gt=Math.min(K.instanceCount,Ve);mt.renderInstances(it,yt,gt)}else mt.render(it,yt)};function fs(M,N,K){M.transparent===!0&&M.side===hn&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,zi(M,N,K),M.side=On,M.needsUpdate=!0,zi(M,N,K),M.side=hn):zi(M,N,K)}this.compile=function(M,N,K=null){K===null&&(K=M),A=xe.get(K),A.init(N),C.push(A),K.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),M!==K&&M.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights();let q=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let _e=k.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){let be=_e[Re];fs(be,K,k),q.add(be)}else fs(_e,K,k),q.add(_e)}),A=C.pop(),q},this.compileAsync=function(M,N,K=null){let q=this.compile(M,N,K);return new Promise(k=>{function _e(){if(q.forEach(function(Re){x.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){k(M);return}setTimeout(_e,10)}ve.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let jt=null;function ri(M){jt&&jt(M)}function Bi(){En.stop()}function or(){En.start()}let En=new vf;En.setAnimationLoop(ri),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(M){jt=M,de.setAnimationLoop(M),M===null?En.stop():En.start()},de.addEventListener("sessionstart",Bi),de.addEventListener("sessionend",or),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;let K=de.enabled===!0&&de.isPresenting===!0,q=F!==null&&(O===null||K)&&F.begin(y,O);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(N),N=de.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,N,O),A=xe.get(M,C.length),A.init(N),C.push(A),ut.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ke.setFromProjectionMatrix(ut,Un,N.reversedDepth),Je=this.localClippingEnabled,Me=we.init(this.clippingPlanes,Je),v=ae.get(M,R.length),v.init(),R.push(v),de.enabled===!0&&de.isPresenting===!0){let Re=y.xr.getDepthSensingMesh();Re!==null&&Xn(Re,N,-1/0,y.sortObjects)}Xn(M,N,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(rt,qe),j=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,j&&W.addToRenderList(v,M),this.info.render.frame++,Me===!0&&we.beginShadows();let k=A.state.shadowsArray;if(H.render(k,M,N),Me===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&F.hasRenderPass())===!1){let Re=v.opaque,be=v.transmissive;if(A.setupLights(),N.isArrayCamera){let Ie=N.cameras;if(be.length>0)for(let Ne=0,Ye=Ie.length;Ne<Ye;Ne++){let He=Ie[Ne];Cn(Re,be,M,He)}j&&W.render(M);for(let Ne=0,Ye=Ie.length;Ne<Ye;Ne++){let He=Ie[Ne];cr(v,M,He,He.viewport)}}else be.length>0&&Cn(Re,be,M,N),j&&W.render(M),cr(v,M,N)}O!==null&&V===0&&(L.updateMultisampleRenderTarget(O),L.updateRenderTargetMipmap(O)),q&&F.end(y),M.isScene===!0&&M.onAfterRender(y,M,N),Te.resetDefaultState(),G=-1,B=null,C.pop(),C.length>0?(A=C[C.length-1],Me===!0&&we.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?v=R[R.length-1]:v=null};function Xn(M,N,K,q){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ke.intersectsSprite(M)){q&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ut);let Re=fe.update(M),be=M.material;be.visible&&v.push(M,Re,be,K,Ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ke.intersectsObject(M))){let Re=fe.update(M),be=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ge.copy(Re.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(ut)),Array.isArray(be)){let Ie=Re.groups;for(let Ne=0,Ye=Ie.length;Ne<Ye;Ne++){let He=Ie[Ne],it=be[He.materialIndex];it&&it.visible&&v.push(M,Re,it,K,Ge.z,He)}}else be.visible&&v.push(M,Re,be,K,Ge.z,null)}}let _e=M.children;for(let Re=0,be=_e.length;Re<be;Re++)Xn(_e[Re],N,K,q)}function cr(M,N,K,q){let{opaque:k,transmissive:_e,transparent:Re}=M;A.setupLightsView(K),Me===!0&&we.setGlobalState(y.clippingPlanes,K),q&&me.viewport(Y.copy(q)),k.length>0&&fn(k,N,K),_e.length>0&&fn(_e,N,K),Re.length>0&&fn(Re,N,K),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Cn(M,N,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){let it=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new nn(1,1,{generateMipmaps:!0,type:it?ti:un,minFilter:Vn,samples:Ue.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let _e=A.state.transmissionRenderTarget[q.id],Re=q.viewport||Y;_e.setSize(Re.z*y.transmissionResolutionScale,Re.w*y.transmissionResolutionScale);let be=y.getRenderTarget(),Ie=y.getActiveCubeFace(),Ne=y.getActiveMipmapLevel();y.setRenderTarget(_e),y.getClearColor(ue),he=y.getClearAlpha(),he<1&&y.setClearColor(16777215,.5),y.clear(),j&&W.render(K);let Ye=y.toneMapping;y.toneMapping=kn;let He=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),Me===!0&&we.setGlobalState(y.clippingPlanes,q),fn(M,K,q),L.updateMultisampleRenderTarget(_e),L.updateRenderTargetMipmap(_e),ve.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let pt=0,yt=N.length;pt<yt;pt++){let Tt=N[pt],{object:mt,geometry:Ve,material:gt,group:ft}=Tt;if(gt.side===hn&&mt.layers.test(q.layers)){let Qt=gt.side;gt.side=sn,gt.needsUpdate=!0,vi(mt,K,q,Ve,gt,ft),gt.side=Qt,gt.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(_e),L.updateRenderTargetMipmap(_e))}y.setRenderTarget(be,Ie,Ne),y.setClearColor(ue,he),He!==void 0&&(q.viewport=He),y.toneMapping=Ye}function fn(M,N,K){let q=N.isScene===!0?N.overrideMaterial:null;for(let k=0,_e=M.length;k<_e;k++){let Re=M[k],{object:be,geometry:Ie,group:Ne}=Re,Ye=Re.material;Ye.allowOverride===!0&&q!==null&&(Ye=q),be.layers.test(K.layers)&&vi(be,N,K,Ie,Ye,Ne)}}function vi(M,N,K,q,k,_e){M.onBeforeRender(y,N,K,q,k,_e),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(y,N,K,q,M,_e),k.transparent===!0&&k.side===hn&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,y.renderBufferDirect(K,N,q,k,M,_e),k.side=On,k.needsUpdate=!0,y.renderBufferDirect(K,N,q,k,M,_e),k.side=hn):y.renderBufferDirect(K,N,q,k,M,_e),M.onAfterRender(y,N,K,q,k,_e)}function zi(M,N,K){N.isScene!==!0&&(N=X);let q=x.get(M),k=A.state.lights,_e=A.state.shadowsArray,Re=k.state.version,be=Ce.getParameters(M,k.state,_e,N,K),Ie=Ce.getProgramCacheKey(be),Ne=q.programs;q.environment=M.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(M.isMeshStandardMaterial?ne:$).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",St),Ne=new Map,q.programs=Ne);let Ye=Ne.get(Ie);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===Re)return qn(M,be),Ye}else be.uniforms=Ce.getUniforms(M),M.onBeforeCompile(be,y),Ye=Ce.acquireProgram(be,Ie),Ne.set(Ie,Ye),q.uniforms=be.uniforms;let He=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=we.uniform),qn(M,be),q.needsLights=ki(M),q.lightsStateVersion=Re,q.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Ye,q.uniformsList=null,Ye}function Rn(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=js.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function qn(M,N){let K=x.get(M);K.outputColorSpace=N.outputColorSpace,K.batching=N.batching,K.batchingColor=N.batchingColor,K.instancing=N.instancing,K.instancingColor=N.instancingColor,K.instancingMorph=N.instancingMorph,K.skinning=N.skinning,K.morphTargets=N.morphTargets,K.morphNormals=N.morphNormals,K.morphColors=N.morphColors,K.morphTargetsCount=N.morphTargetsCount,K.numClippingPlanes=N.numClippingPlanes,K.numIntersection=N.numClipIntersection,K.vertexAlphas=N.vertexAlphas,K.vertexTangents=N.vertexTangents,K.toneMapping=N.toneMapping}function Mn(M,N,K,q,k){N.isScene!==!0&&(N=X),L.resetTextureUnits();let _e=N.fog,Re=q.isMeshStandardMaterial?N.environment:null,be=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ht,Ie=(q.isMeshStandardMaterial?ne:$).get(q.envMap||Re),Ne=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!K.morphAttributes.position,it=!!K.morphAttributes.normal,pt=!!K.morphAttributes.color,yt=kn;q.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(yt=y.toneMapping);let Tt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=Tt!==void 0?Tt.length:0,Ve=x.get(q),gt=A.state.lights;if(Me===!0&&(Je===!0||M!==B)){let D=M===B&&q.id===G;we.setState(q,M,D)}let ft=!1;q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==gt.state.version||Ve.outputColorSpace!==be||k.isBatchedMesh&&Ve.batching===!1||!k.isBatchedMesh&&Ve.batching===!0||k.isBatchedMesh&&Ve.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ve.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ve.instancing===!1||!k.isInstancedMesh&&Ve.instancing===!0||k.isSkinnedMesh&&Ve.skinning===!1||!k.isSkinnedMesh&&Ve.skinning===!0||k.isInstancedMesh&&Ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ve.instancingMorph===!1&&k.morphTexture!==null||Ve.envMap!==Ie||q.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==we.numPlanes||Ve.numIntersection!==we.numIntersection)||Ve.vertexAlphas!==Ne||Ve.vertexTangents!==Ye||Ve.morphTargets!==He||Ve.morphNormals!==it||Ve.morphColors!==pt||Ve.toneMapping!==yt||Ve.morphTargetsCount!==mt)&&(ft=!0):(ft=!0,Ve.__version=q.version);let Qt=Ve.currentProgram;ft===!0&&(Qt=zi(q,N,k));let ai=!1,Xt=!1,Vi=!1,Mt=Qt.getUniforms(),qt=Ve.uniforms;if(me.useProgram(Qt.program)&&(ai=!0,Xt=!0,Vi=!0),q.id!==G&&(G=q.id,Xt=!0),ai||B!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Mt.setValue(E,"projectionMatrix",M.projectionMatrix),Mt.setValue(E,"viewMatrix",M.matrixWorldInverse);let le=Mt.map.cameraPosition;le!==void 0&&le.setValue(E,tt.setFromMatrixPosition(M.matrixWorld)),Ue.logarithmicDepthBuffer&&Mt.setValue(E,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Mt.setValue(E,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,Xt=!0,Vi=!0)}if(Ve.needsLights&&(gt.state.directionalShadowMap.length>0&&Mt.setValue(E,"directionalShadowMap",gt.state.directionalShadowMap,L),gt.state.spotShadowMap.length>0&&Mt.setValue(E,"spotShadowMap",gt.state.spotShadowMap,L),gt.state.pointShadowMap.length>0&&Mt.setValue(E,"pointShadowMap",gt.state.pointShadowMap,L)),k.isSkinnedMesh){Mt.setOptional(E,k,"bindMatrix"),Mt.setOptional(E,k,"bindMatrixInverse");let D=k.skeleton;D&&(D.boneTexture===null&&D.computeBoneTexture(),Mt.setValue(E,"boneTexture",D.boneTexture,L))}k.isBatchedMesh&&(Mt.setOptional(E,k,"batchingTexture"),Mt.setValue(E,"batchingTexture",k._matricesTexture,L),Mt.setOptional(E,k,"batchingIdTexture"),Mt.setValue(E,"batchingIdTexture",k._indirectTexture,L),Mt.setOptional(E,k,"batchingColorTexture"),k._colorsTexture!==null&&Mt.setValue(E,"batchingColorTexture",k._colorsTexture,L));let en=K.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&ie.update(k,K,Qt),(Xt||Ve.receiveShadow!==k.receiveShadow)&&(Ve.receiveShadow=k.receiveShadow,Mt.setValue(E,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qt.envMap.value=Ie,qt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(qt.envMapIntensity.value=N.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Yx()),Xt&&(Mt.setValue(E,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&ds(qt,Vi),_e&&q.fog===!0&&Be.refreshFogUniforms(qt,_e),Be.refreshMaterialUniforms(qt,q,De,Fe,A.state.transmissionRenderTarget[M.id]),js.upload(E,Rn(Ve),qt,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(js.upload(E,Rn(Ve),qt,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Mt.setValue(E,"center",k.center),Mt.setValue(E,"modelViewMatrix",k.modelViewMatrix),Mt.setValue(E,"normalMatrix",k.normalMatrix),Mt.setValue(E,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let D=q.uniformsGroups;for(let le=0,pe=D.length;le<pe;le++){let ze=D[le];oe.update(ze,Qt),oe.bind(ze,Qt)}}return Qt}function ds(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function ki(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,N,K){let q=x.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),x.get(M.texture).__webglTexture=N,x.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let K=x.get(M);K.__webglFramebuffer=N,K.__useDefaultFramebuffer=N===void 0};let aa=E.createFramebuffer();this.setRenderTarget=function(M,N=0,K=0){O=M,P=N,V=K;let q=null,k=!1,_e=!1;if(M){let be=x.get(M);if(be.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(E.FRAMEBUFFER,be.__webglFramebuffer),Y.copy(M.viewport),z.copy(M.scissor),Q=M.scissorTest,me.viewport(Y),me.scissor(z),me.setScissorTest(Q),G=-1;return}else if(be.__webglFramebuffer===void 0)L.setupRenderTarget(M);else if(be.__hasExternalTextures)L.rebindTextures(M,x.get(M.texture).__webglTexture,x.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ye=M.depthTexture;if(be.__boundDepthTexture!==Ye){if(Ye!==null&&x.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(M)}}let Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(_e=!0);let Ne=x.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?q=Ne[N][K]:q=Ne[N],k=!0):M.samples>0&&L.useMultisampledRTT(M)===!1?q=x.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?q=Ne[K]:q=Ne,Y.copy(M.viewport),z.copy(M.scissor),Q=M.scissorTest}else Y.copy(J).multiplyScalar(De).floor(),z.copy(te).multiplyScalar(De).floor(),Q=ye;if(K!==0&&(q=aa),me.bindFramebuffer(E.FRAMEBUFFER,q)&&me.drawBuffers(M,q),me.viewport(Y),me.scissor(z),me.setScissorTest(Q),k){let be=x.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,K)}else if(_e){let be=N;for(let Ie=0;Ie<M.textures.length;Ie++){let Ne=x.get(M.textures[Ie]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,K,be)}}else if(M!==null&&K!==0){let be=x.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,be.__webglTexture,K)}G=-1},this.readRenderTargetPixels=function(M,N,K,q,k,_e,Re,be=0){if(!(M&&M.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){me.bindFramebuffer(E.FRAMEBUFFER,Ie);try{let Ne=M.textures[be],Ye=Ne.format,He=Ne.type;if(!Ue.textureFormatReadable(Ye)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(He)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-q&&K>=0&&K<=M.height-k&&(M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+be),E.readPixels(N,K,q,k,se.convert(Ye),se.convert(He),_e))}finally{let Ne=O!==null?x.get(O).__webglFramebuffer:null;me.bindFramebuffer(E.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,N,K,q,k,_e,Re,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(N>=0&&N<=M.width-q&&K>=0&&K<=M.height-k){me.bindFramebuffer(E.FRAMEBUFFER,Ie);let Ne=M.textures[be],Ye=Ne.format,He=Ne.type;if(!Ue.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,it),E.bufferData(E.PIXEL_PACK_BUFFER,_e.byteLength,E.STREAM_READ),M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+be),E.readPixels(N,K,q,k,se.convert(Ye),se.convert(He),0);let pt=O!==null?x.get(O).__webglFramebuffer:null;me.bindFramebuffer(E.FRAMEBUFFER,pt);let yt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Xu(E,yt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,it),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,_e),E.deleteBuffer(it),E.deleteSync(yt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,K=0){let q=Math.pow(2,-K),k=Math.floor(M.image.width*q),_e=Math.floor(M.image.height*q),Re=N!==null?N.x:0,be=N!==null?N.y:0;L.setTexture2D(M,0),E.copyTexSubImage2D(E.TEXTURE_2D,K,0,0,Re,be,k,_e),me.unbindTexture()};let oa=E.createFramebuffer(),dn=E.createFramebuffer();this.copyTextureToTexture=function(M,N,K=null,q=null,k=0,_e=null){_e===null&&(k!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=k,k=0):_e=0);let Re,be,Ie,Ne,Ye,He,it,pt,yt,Tt=M.isCompressedTexture?M.mipmaps[_e]:M.image;if(K!==null)Re=K.max.x-K.min.x,be=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,Ne=K.min.x,Ye=K.min.y,He=K.isBox3?K.min.z:0;else{let en=Math.pow(2,-k);Re=Math.floor(Tt.width*en),be=Math.floor(Tt.height*en),M.isDataArrayTexture?Ie=Tt.depth:M.isData3DTexture?Ie=Math.floor(Tt.depth*en):Ie=1,Ne=0,Ye=0,He=0}q!==null?(it=q.x,pt=q.y,yt=q.z):(it=0,pt=0,yt=0);let mt=se.convert(N.format),Ve=se.convert(N.type),gt;N.isData3DTexture?(L.setTexture3D(N,0),gt=E.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(L.setTexture2DArray(N,0),gt=E.TEXTURE_2D_ARRAY):(L.setTexture2D(N,0),gt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,N.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,N.unpackAlignment);let ft=E.getParameter(E.UNPACK_ROW_LENGTH),Qt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ai=E.getParameter(E.UNPACK_SKIP_PIXELS),Xt=E.getParameter(E.UNPACK_SKIP_ROWS),Vi=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Tt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Tt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ne),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ye),E.pixelStorei(E.UNPACK_SKIP_IMAGES,He);let Mt=M.isDataArrayTexture||M.isData3DTexture,qt=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let en=x.get(M),D=x.get(N),le=x.get(en.__renderTarget),pe=x.get(D.__renderTarget);me.bindFramebuffer(E.READ_FRAMEBUFFER,le.__webglFramebuffer),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ze=0;ze<Ie;ze++)Mt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,x.get(M).__webglTexture,k,He+ze),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,x.get(N).__webglTexture,_e,yt+ze)),E.blitFramebuffer(Ne,Ye,Re,be,it,pt,Re,be,E.DEPTH_BUFFER_BIT,E.NEAREST);me.bindFramebuffer(E.READ_FRAMEBUFFER,null),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||x.has(M)){let en=x.get(M),D=x.get(N);me.bindFramebuffer(E.READ_FRAMEBUFFER,oa),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,dn);for(let le=0;le<Ie;le++)Mt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,en.__webglTexture,k,He+le):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,en.__webglTexture,k),qt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,D.__webglTexture,_e,yt+le):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,D.__webglTexture,_e),k!==0?E.blitFramebuffer(Ne,Ye,Re,be,it,pt,Re,be,E.COLOR_BUFFER_BIT,E.NEAREST):qt?E.copyTexSubImage3D(gt,_e,it,pt,yt+le,Ne,Ye,Re,be):E.copyTexSubImage2D(gt,_e,it,pt,Ne,Ye,Re,be);me.bindFramebuffer(E.READ_FRAMEBUFFER,null),me.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else qt?M.isDataTexture||M.isData3DTexture?E.texSubImage3D(gt,_e,it,pt,yt,Re,be,Ie,mt,Ve,Tt.data):N.isCompressedArrayTexture?E.compressedTexSubImage3D(gt,_e,it,pt,yt,Re,be,Ie,mt,Tt.data):E.texSubImage3D(gt,_e,it,pt,yt,Re,be,Ie,mt,Ve,Tt):M.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,_e,it,pt,Re,be,mt,Ve,Tt.data):M.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,_e,it,pt,Tt.width,Tt.height,mt,Tt.data):E.texSubImage2D(E.TEXTURE_2D,_e,it,pt,Re,be,mt,Ve,Tt);E.pixelStorei(E.UNPACK_ROW_LENGTH,ft),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Qt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ai),E.pixelStorei(E.UNPACK_SKIP_ROWS,Xt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Vi),_e===0&&N.generateMipmaps&&E.generateMipmap(gt),me.unbindTexture()},this.initRenderTarget=function(M){x.get(M).__webglFramebuffer===void 0&&L.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?L.setTextureCube(M,0):M.isData3DTexture?L.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?L.setTexture2DArray(M,0):L.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){P=0,V=0,O=null,me.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Tf=`
uniform sampler2D navLetters,studioSky;
uniform float viewTilt,navSpeed,navPress,navDownX,solidGlass;
// Wrap the existing tab strip, rather than sizing the carrier from the ink atlas.
// 94 is the distance between tab centres, 47 x 24.4 the resting lens half-size.
// Equal radial padding keeps the outer and inner endcaps concentric on a side tab.
const vec2 railCenter=vec2(445.,573.);
const vec2 railHalf=vec2(94.+47.,24.4)+vec2(5.);
vec4 capsule(vec2 p,vec2 halfSize){
  vec2 d=vec2(p.x-clamp(p.x,-halfSize.x+halfSize.y,halfSize.x-halfSize.y),p.y);
  float l=length(d);
  return vec4(d/max(l,.001),l-halfSize.y,halfSize.y);
}
vec3 bevel(vec4 shape,float radius){
  float h=1.-clamp(-shape.z/radius,0.,1.);
  return vec3(shape.xy*h,sqrt(max(.007,1.-h*h)));
}
// An actual transmitted ray samples the screen behind each curved interface.
vec2 opticalRay(vec3 N,float thickness,float eta){
  vec3 R=refract(vec3(0.,0.,-1.),normalize(N),eta);
  return thickness*R.xy/max(.35,-R.z);
}
vec3 skyAt(vec2 p){
  vec2 u=(p-vec2(232.,512.))/vec2(424.,132.);
  u+=vec2(.084*(viewTilt-.5),-.125*(viewTilt-.5));
  vec3 sky=texture2D(studioSky,clamp(u,.001,.999)).rgb;
  return mix(sky,sky*vec3(.18,.29,.42)+vec3(.012,.023,.037),nightK);
}
float footprint(vec2 p){
  vec4 b=capsule(p-railCenter,railHalf);
  return 1.-smoothstep(-2.,25.,b.z);
}
vec3 skyFilm(vec3 paper,vec2 p){
  // A faint, continuous sky reflection outside the glass makes the refraction
  // at its edge legible. It fades to unaltered paper, not to a rectangular card.
  return mix(paper,skyAt(p),.13*footprint(p));
}
vec3 glassBar(vec3 back,vec2 p){
  vec4 bar=capsule(p-railCenter,railHalf);
  if(bar.z>25.)return back;
  float aa=clamp(fwidth(bar.z)*.68,.46,1.65),cover=1.-smoothstep(-aa,aa,bar.z);
  vec3 floorColor=skyFilm(back,p);
  float shadow=capsule(p-railCenter-vec2(0.,2.9),railHalf-vec2(1.)).z;
  floorColor*=1.-vec3(.172,.137,.090)*exp(-max(shadow,0.)*.22);
  if(cover<.001)return floorColor;
  float same=1.-smoothstep(28.,62.,abs(navDownX-pillX)),squeeze=navPress*same;
  float vel=clamp(navSpeed*.00068,-1.,1.);
  vec2 mid=vec2(pillX,573.+.65*squeeze);
  vec2 halfLens=vec2(47.+abs(vel)*6.4+1.3*squeeze,24.4-abs(vel)*1.1-1.4*squeeze);
  vec4 bubble=capsule(p-mid,halfLens);float lc=1.-smoothstep(-aa,aa,bubble.z);
  vec3 bodyN=bevel(bar,10.8),lensN=bevel(bubble,10.2);
  // Avoid needless optical texture reads for reduced-transparency settings.
  vec3 glass=mix(vec3(.959,.973,.991),vec3(.063,.11,.17),nightK);
  if(solidGlass<.5){
    vec2 bend=opticalRay(bodyN,20.,.72);
    vec2 inner=lc*(opticalRay(lensN,28.,.67)-.19*(p-mid)+vec2(-12.,2.2)*vel);
    vec2 sampleP=p+bend+inner;
    vec2 uv=sampleP/appSize,offset=(bodyN.xy*.9+lensN.xy*lc*.5)/appSize;
    vec3 through=litPaper((texture2D(art,uv+offset).rgb+texture2D(art,uv-offset).rgb)*.5);
    vec3 env=skyAt(sampleP);
    vec3 transmit=skyFilm(through,sampleP);
    float edge=1.-bodyN.z,bead=lc*(1.-lensN.z);
    // Clear core; thicker curved regions catch the sky. The second interface
    // has its own magnification, edge dispersion and directional highlights.
    glass=mix(transmit,env,.165+.26*edge+lc*.205+.22*bead);
    glass=mix(glass,mix(vec3(.61,.85,.995),vec3(.18,.43,.66),nightK),lc*(.10+.08*bead+.26*nightK));
    vec3 reflected=skyAt(p+bodyN.xy*71.+lc*lensN.xy*78.+vec2(21.*viewTilt,-8.));
    glass=mix(glass,reflected,.105*edge+.21*edge*edge+lc*(.042+.32*bead));
    vec2 light=normalize(vec2(-.78+1.27*viewTilt,-.83));
    float top=max(0.,dot(bodyN.xy,light)),bottom=max(0.,-dot(bodyN.xy,light));
    float ltop=max(0.,dot(lensN.xy,light)),lbottom=max(0.,-dot(lensN.xy,light));
    float lobe=.5+.5*cos((p.x+49.*viewTilt)*.032+.021*p.y);
    float rim=exp(-abs(bar.z+1.05)*.93),cut=exp(-abs(bar.z+3.7)*.53);
    glass-=cut*(.24+.76*bottom)*vec3(.213,.145,.074);
    glass+=cut*top*vec3(.010,.024,.036);
    glass=mix(glass,vec3(.998,1.,1.),(rim*(.42+.55*top)+.16*top*(1.-bodyN.z))*(1.-.67*nightK));
    float lensRim=exp(-abs(bubble.z+1.10)*.80),lensCut=exp(-abs(bubble.z+3.5)*.59);
    glass-=lc*lensCut*(.26+.74*lbottom)*vec3(.185,.132,.071);
    glass=mix(glass,vec3(.99,1.,1.),lc*lensRim*(.27+.69*ltop)*(1.-.66*nightK));
    vec2 spill=bodyN.xy*7.+lc*lensN.xy*8.;
    float dispersion=skyAt(sampleP+spill).r-skyAt(sampleP-spill).r;
    glass+=vec3(1.,.06,-.78)*dispersion*(.13+.15*bead);
    glass+=vec3(.029,.033,.043)*(edge+.74*bead)*lobe;
  }else{
    glass=mix(glass,mix(vec3(.795,.895,.975),vec3(.075,.20,.33),nightK),lc);
    glass=mix(glass,mix(vec3(.78,.84,.89),vec3(.19,.31,.42),nightK),.52*exp(-abs(bar.z+1.)));
  }
  // On hold only the intended glyph group moves, not its rectangular hit zone.
  float iconBand=1.-smoothstep(30.55,32.25,p.y-541.);
  float pressInk=navPress*iconBand*(1.-smoothstep(39.,52.,abs(p.x-navDownX)));
  vec2 glyphP=p+(p-vec2(navDownX,573.))*.048*pressInk-vec2(0.,.8*pressInk);
  // This is the independent, original glyph atlas: never rescale it with the carrier.
  vec2 tex=(glyphP-vec2(286.,541.))/vec2(318.,128.);
  vec4 a=texture2D(navLetters,tex),b=texture2D(navLetters,tex+vec2(0.,.5));
  vec4 ink=mix(a,b,1.-smoothstep(27.,56.,abs(p.x-pillX)));
  return mix(floorColor,mix(glass,ink.rgb,ink.a),cover);
}
`;var wf=`
uniform float nightK;
vec3 pageFloor(){return mix(vec3(.9294,.95294,.98431),vec3(.02353,.04706,.08235),nightK);}
uniform vec2 scrollLight; // x: actual motion envelope, y: damped phone pose
vec3 litPaper(vec3 c){
  if(nightK>.5)return c;
  float lo=min(c.r,min(c.g,c.b)),hi=max(c.r,max(c.g,c.b));
  float paper=smoothstep(.65,.91,lo)*(1.-smoothstep(.062,.128,hi-lo))
    *(1.-smoothstep(.004,.033,c.g-c.b));
  return c+(1.-c)*vec3(.665,.655,.57)*paper;
}
vec3 sweepLight(vec3 c,vec2 p){
  if(scrollLight.x<.001)return c;
  float d=dot(p,vec2(.943,-.332))-mix(-270.,905.,scrollLight.y);
  float body=exp2(-d*d/4500.),thread=exp2(-(d-6.)*(d-6.)/160.);
  float shoulder=exp2(-(d+55.)*(d+55.)/790.);
  float ink=smoothstep(.13,.71,dot(c,vec3(.2126,.7152,.0722)));
  float a=scrollLight.x*(.20+.80*ink);
  c*=1.-vec3(.029,.016,.004)*shoulder*a;
  return mix(c,vec3(1.,1.,.997),a*(.14*body+.13*thread));
}
`;var er={connect:[[],[106,191,249,369,447]],locations:[[212,269,332,390],[131,209,287,365,443]],profile:[[189,306],[160,281,345,394]],premium:[[194,342],[160,281,344,388]]},Cf=Object.keys(er),Rf=s=>Cf.indexOf(s);function na(s,e,t){let n=+(e>=445),i=er[s][n],r=0;for(;r<i.length&&t>=i[r];)r++;return n*7+r}function If(s,e){return e<44||e>=531||s<205&&e<96}function Af(s){return s.map((e,t)=>"if(p.y<"+e+".)return "+t+";").join("")+"return "+s.length+";"}var Pf=`
uniform int revealPage;
uniform float changing;
uniform vec2 wave[14],oldHalf;
uniform mat3 oldLeft,oldRight;
uniform sampler2D oldFrame;
bool fixedUI(vec2 p){return p.y<44.||p.y>=531.||(p.x<205.&&p.y<96.);}
int rowFor(vec2 p,bool right){
`+Cf.map((s,e)=>"if(revealPage=="+e+"){if(right){"+Af(er[s][1])+"}"+Af(er[s][0])+"}").join(`
`)+`
  return 0;
}
vec2 blockMotion(vec2 p){bool right=p.x>=445.;return wave[(right?7:0)+rowFor(p,right)];}
vec3 previousPixel(vec2 p){
  bool right=p.x>=445.;float strength=right?oldHalf.y:oldHalf.x;
  vec2 uv=(p+vec2(0.,(1.-strength)*1.65))/vec2(890.,626.);
  vec3 q=right?oldRight*vec3(uv,1.):oldLeft*vec3(uv,1.);
  return texture2D(oldFrame,clamp(.5+.5*q.xy/q.z,vec2(.001),vec2(.999))).rgb;
}
`,Lf=s=>Math.min(1,Math.max(0,s)),Kx=s=>s*s*(3-2*s),Zx=s=>(1-(1+6*s)*Math.exp(-6*s))/(1-7*Math.exp(-6)),Vl=[90,178],Ef=[0,70],Df=[24,19],Nf=288;function Uf(s,e){let t=+(e>=7),n=e%7,i=Lf((s-Vl[t]-n*Df[t])/Nf),r=i<=0?0:i>=1?1:Zx(i);return[r,(t?5.3:6.3)*(1-r)*(1-r)]}function Gl(s,e){return 1-Kx(Lf((s-Ef[e])/(Vl[e]-Ef[e])))}function Ff(s){return Math.max(...er[s].map((e,t)=>Vl[t]+e.length*Df[t]+Nf))}function Hl(s){return er[s].flatMap((e,t)=>Array.from({length:e.length+1},(n,i)=>t*7+i))}function tr(s){return s.startsWith("B3_power")?0:s.startsWith("B3_mode")?7:{B3_row_nl:8,B3_premium:10,B3_row_de:11,B3_row_fi:12}[s]??0}var nr=890,ir=626,Of=.001,zf=.158600013/nr,Xl=.1118/ir,Jx=12e-5,Bf=s=>Math.max(0,Math.min(1,s)),Wl=s=>s*s*(3-2*s);function $x(s){let{x:e,y:t,w:n,h:i,r}=s,a=s.height*.64,o=e+n/2,c=t+i/2,l=[],h=[],u=[],f=[];function d(p,S,b,v,A=p,R=S){return l.push((p-o)*zf,b,(S-c)*Xl),h.push(A/nr,R/ir),u.push(v),u.length-1}let m=d(o,c,a*Of,0),_=[];for(let[p,S,b]of[[1.15,1,0],[.36,.87,.08],[0,.48,.2],[.24,.13,.37],[.55,0,.44]]){let v=[],A=Math.max(.1,r-p);for(let[R,C,F]of[[e+n-r,t+r,-Math.PI/2],[e+n-r,t+i-r,0],[e+r,t+i-r,Math.PI/2],[e+r,t+r,Math.PI]])for(let y=0;y<=14;y++){let T=F+Math.PI*.5*y/14,P=Math.cos(T),V=Math.sin(T),O=Math.min(A,r-1.15);v.push(d(R+P*A,C+V*A,S*a*Of,b,R+P*O,C+V*O))}_.push(v)}for(let p=0;p<_[0].length;p++){let S=(p+1)%_[0].length;f.push(m,_[0][S],_[0][p]);for(let b=1;b<_.length;b++)f.push(_[b-1][p],_[b-1][S],_[b][S],_[b-1][p],_[b][S],_[b][p])}let g=new Wt;return g.setIndex(f),g.setAttribute("position",new Nt(l,3)),g.setAttribute("uv",new Nt(h,2)),g.setAttribute("edgeShade",new Nt(u,1)),g.computeBoundingSphere(),g}function kf(s,e){let n=document.createElement("canvas");n.width=nr*2,n.height=ir*2;let i=n.getContext("2d");i.scale(2,2);let r=new es(n);r.flipY=!1,r.colorSpace=yn;let a=new Map,o={ScreenL:s.getObjectByName("ScreenL"),ScreenR:s.getObjectByName("ScreenR")},c=!1,l=[],h=null,u="[]",f="[]",d=1,m=1,_="",g=0;function p(v){for(let A of l)A.removeFromParent();l=[],i.clearRect(0,0,nr,ir);for(let[A,R]of v.entries()){let{x:C,y:F,w:y,h:T,r:P}=R,V=C+y/2<nr/2?"ScreenL":"ScreenR";i.save(),i.fillStyle=c?"#060c15":"#edf3fb",i.shadowColor=c?"rgba(0,0,0,.55)":"rgba(41,51,66,.16)",i.shadowBlur=5.2*2,i.shadowOffsetY=1.7*2,i.beginPath(),i.roundRect(C+.65,F+.35,y-1.3,T-.9,Math.max(1,P-.65)),i.fill(),i.restore(),i.fillStyle=c?"#060c15":"#edf3fb",i.beginPath(),i.roundRect(C,F,y,T,P),i.fill();let O=[C,F,y,T,P,R.height].join(":"),G=a.get(O);G||(G=$x(R),a.set(O,G));let B=new Ut(G,e);B.name="iOS / "+R.id,B.userData={owner:V,relief:R.id,rect:R,phase:A*.12,hover:0},B.position.set((C+y/2-nr/2)*zf,Jx+4e-6,(F+T/2-ir/2)*Xl),o[V].add(B),l.push(B)}r.needsUpdate=!0,u=JSON.stringify(v)}function S(v,A,R=!1){c!==R&&(c=R,u="");let C=JSON.stringify(v);if(A){C!==u&&p(v),h=null,f=C,d=1;return}if(C===u){h=null,f=C,d=1;return}h=v,f=C,m=d}function b(v,A,R,C,F,y,T,P,V){h?v<.5&&!T?d=m*(1-Wl(v*2)):(p(h),h=null,d=T?1:Wl(Bf((v-.5)*2))):u===f&&d<1&&(d=T?1:Math.max(d,Wl(Bf((v-.5)*2)))),g=0;for(let O of l){let G=O.userData,B=y===G.relief?F:0,Y=G.relief===_&&!T?1:0;G.hover+=(Y-G.hover)*(1-Math.exp(-A/80)),Math.abs(G.hover-Y)<.009?G.hover=Y:g=1;let z=C*(.5-.5*Math.cos(Math.PI*2*(R/5200+G.phase))),Q=na(V,G.rect.x+G.rect.w/2,G.rect.y+G.rect.h/2),ue=P[2*Q];O.visible=d*ue>.002,O.position.z=(G.rect.y+G.rect.h/2-ir/2+P[2*Q+1])*Xl,O.scale.set(1,Math.max(.001,ue*d*(1-.44*B+.12*G.hover+.22*z)),1),O.updateMatrixWorld(!0)}return l.length?d:0}return{mask:r,change:S,frame:b,get meshes(){return l},hover:v=>{_=v||""},moving:()=>!!g,dispose:()=>{p([]);for(let v of a.values())v.dispose();a.clear(),r.dispose(),e.dispose()}}}function Vf(s,e,t,n,i,r,a,o){let c=n.map(_=>o(_.geometry)),l=[],h=new $e,u=new Ke,f=-1,d=i.value;function m(_){if(s.getDrawingBufferSize(h),!h.x||!h.y)return;let g=Math.min(1,1720/h.x,1220/h.y),p=Math.max(1,Math.round(g*h.x)),S=Math.max(1,Math.round(g*h.y));_||(i.value=d);let b=_?f===0?1:0:Math.max(0,f),v=l[b];v||(v=l[b]=new nn(p,S,{depthBuffer:!0,stencilBuffer:!1,minFilter:wt,magFilter:wt}),v.texture.generateMipmaps=!1,v.texture.name="Duo \xB7 outgoing surface"),(v.width!==p||v.height!==S)&&v.setSize(p,S);let A=s.getRenderTarget();try{s.setRenderTarget(v),s.render(e,t)}finally{s.setRenderTarget(A)}for(let R=0;R<2;R++){let C=u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(n[R].matrixWorld).multiply(c[R]).elements;(R?a:r).value.set(C[0],C[4],C[12],C[1],C[5],C[13],C[3],C[7],C[15])}i.value=v.texture,f=b}return{record:m,dispose(){for(let _ of l)_.dispose()}}}function ql(s,e){if(e===gl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Js||e===$r){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Js)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ac=class extends Qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ql(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new jl(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new Jl(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new dh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=_i.extractUrlBase(e);a=_i.resolveURL(l,this.path)}else a=_i.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ws(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===qf){try{a[ht.KHR_BINARY_GLTF]=new ph(e)}catch(u){i&&i(u);return}r=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Mh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ht.KHR_MATERIALS_UNLIT:a[u]=new $l;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[u]=new mh(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[u]=new gh;break;case ht.KHR_MESH_QUANTIZATION:a[u]=new xh;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function jx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Jl=class{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new je(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ht);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Gr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vr(h),l.distance=u;break;case"spot":l=new kr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},$l=class{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return zn}extendParams(e,t,n){let i=[];e.color=new je(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ht),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Dt))}return Promise.all(i)}},jl=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ql=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(o,o)}return Promise.all(r)}},eh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},th=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},nh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ht)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Dt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},ih=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},sh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(o[0],o[1],o[2],Ht),Promise.all(r)}},rh=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},ah=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(o[0],o[1],o[2],Ht),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Dt)),Promise.all(r)}},oh=class{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},ch=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},lh=class{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},hh=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},uh=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},fh=class{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},dh=class{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let m of u){let _=new Ke,g=new U,p=new rn,S=new U(1,1,1),b=new Ir(m.geometry,m.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&S.fromBufferAttribute(c.SCALE,v),b.setMatrixAt(v,_.compose(g,p,S));for(let v in c)if(v==="_COLOR_0"){let A=c[v];b.instanceColor=new Ii(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);At.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),d.push(b)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},qf="glTF",ia=12,Gf={JSON:1313821514,BIN:5130562},ph=class{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ia),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ia,r=new DataView(e,ia),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Gf.JSON){let l=new Uint8Array(e,ia+a,o);this.content=n.decode(l)}else if(c===Gf.BIN){let l=ia+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},mh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=vh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=vh[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=sr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let m in d.attributes){let _=d.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}u(d)},o,l,Ht,f)})})}},gh=class{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},xh=class{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}},oc=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*l,_=m-l,g=-2*d+3*f,p=d-f,S=1-g,b=p-f+u;for(let v=0;v!==o;v++){let A=a[_+v+o],R=a[_+v+c]*h,C=a[m+v+o],F=a[m+v]*h;r[v]=S*A+b*R+g*C+p*F}return r}},Qx=new rn,_h=class extends oc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Qx.fromArray(r).normalize().toArray(r),r}},wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hf={9728:Rt,9729:wt,9984:uo,9985:Ys,9986:is,9987:Vn},Wf={33071:Tn,33648:Rs,10497:Ci},Yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},e_={CUBICSPLINE:void 0,LINEAR:$i,STEP:Ji},Kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function t_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ts({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:On})),s.DefaultMaterial}function ls(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function si(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function n_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function i_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function s_(s){let e,t=s.extensions&&s.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zl(t.attributes):e=s.indices+":"+Zl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Zl(s.targets[n]);return e}function Zl(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function yh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function r_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var a_=new Ke,Mh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Br(this.options.manager):this.textureLoader=new Hr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ws(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ls(r,o,i),si(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(_i.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Yl[i.type],o=sr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Et(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Yl[i.type],l=sr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,_,g;if(d&&d!==u){let p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=t.cache.get(S);b||(_=new l(o,p*d,i.count*d/h),b=new Os(_,d/h),t.cache.add(S,b)),g=new Bs(b,c,f%d/h,m)}else o===null?_=new l(i.count*c):_=new l(o,f,i.count*c),g=new Et(_,c,m);if(i.sparse!==void 0){let p=Yl.SCALAR,S=sr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,A=new S(a[1],b,i.sparse.count*p),R=new l(a[2],v,i.sparse.count*c);o!==null&&(g=new Et(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,F=A.length;C<F;C++){let y=A[C];if(g.setX(y,R[C*c]),c>=2&&g.setY(y,R[C*c+1]),c>=3&&g.setZ(y,R[C*c+2]),c>=4&&g.setW(y,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Hf[f.magFilter]||wt,h.minFilter=Hf[f.minFilter]||Vn,h.wrapS=Wf[f.wrapS]||Ci,h.wrapT=Wf[f.wrapT]||Ci,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rt&&h.minFilter!==wt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(_){let g=new It(_);g.needsUpdate=!0,f(g)}),t.load(_i.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),si(u,a),u.userData.mimeType=a.mimeType||r_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Hs,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Gs,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ts}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ht.KHR_MATERIALS_UNLIT]){let u=i[ht.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new je(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Ht),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=hn);let h=r.alphaMode||Kl.OPAQUE;if(h===Kl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Kl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==zn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==zn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==zn){let u=r.emissiveFactor;o.emissive=new je().setRGB(u[0],u[1],u[2],Ht)}return r.emissiveTexture!==void 0&&a!==zn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Dt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),si(u,r),t.associations.set(u,{materials:e}),r.extensions&&ls(i,u,r),u})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Xf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=s_(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Xf(new Wt,l,t),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?t_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let _=h[d],g=a[d],p,S=l[d];if(g.mode===wn.TRIANGLES||g.mode===wn.TRIANGLE_STRIP||g.mode===wn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Cr(_,S):new Ut(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===wn.TRIANGLE_STRIP?p.geometry=ql(p.geometry,$r):g.mode===wn.TRIANGLE_FAN&&(p.geometry=ql(p.geometry,Js));else if(g.mode===wn.LINES)p=new Pr(_,S);else if(g.mode===wn.LINE_STRIP)p=new Qi(_,S);else if(g.mode===wn.LINE_LOOP)p=new Lr(_,S);else if(g.mode===wn.POINTS)p=new Dr(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&i_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),si(p,r),g.extensions&&ls(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ls(i,u[0],r),u[0];let f=new gn;r.extensions&&ls(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(jr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Li(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new Ke;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Rr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],m=i.samplers[d.sampler],_=d.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,S=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(m),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let b=0,v=f.length;b<v;b++){let A=f[b],R=d[b],C=m[b],F=_[b],y=g[b];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let T=n._createAnimationTracks(A,R,C,F,y);if(T)for(let P=0;P<T.length;P++)p.push(T[P])}let S=new Or(r,void 0,p);return si(S,i),S})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,a_)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new zs:l.length>1?h=new gn:l.length===1?h=l[0]:h=new At,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),si(h,r),r.extensions&&ls(n,h,r),r.matrix!==void 0){let u=new Ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new gn;n.name&&(r.name=i.createUniqueName(n.name)),si(r,n),n.extensions&&ls(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof on||f instanceof It)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];Fi[r.path]===Fi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Fi[r.path]){case Fi.weights:l=Jn;break;case Fi.rotation:l=$n;break;case Fi.translation:case Fi.scale:l=jn;break;default:switch(n.itemSize){case 1:l=Jn;break;case 2:case 3:default:l=jn;break}break}let h=i.interpolation!==void 0?e_[i.interpolation]:$i,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let m=new l(c[f]+"."+Fi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=yh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof $n?_h:oc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function o_(s,e,t){let n=e.attributes,i=new xn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),o.normalized){let h=yh(sr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new U,c=new U;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let _=yh(sr[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new an;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Xf(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=vh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ct.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),si(s,e),o_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?n_(s,e.targets,t):s})}var bh={"cap-off":[2,2,440,440],"cap-on":[446,2,440,440],"nav-power-on":[2,448,64,64],"nav-power":[80,448,64,64],"nav-globe":[158,448,64,64],"nav-globe-on":[236,448,64,64],"nav-person":[314,448,64,64],"nav-person-on":[392,448,64,64],search:[470,448,64,64],"saved-small":[548,448,64,64],"signal-small":[626,448,64,64],fastest:[704,448,64,64],chevron:[782,448,64,64],"heart-active":[860,448,64,64],"heart-rest":[938,448,64,64],person:[1016,448,64,64],status:[2,521,1130,86]};var Hn=890,An=626,c_=[469,257,397,104],Sh=[480,171,353,104],Yf={nl:26,de:39,fi:51,se:58,us:124,jp:186},rr=["connect","locations","profile"],l_="nav-power-on nav-power nav-globe nav-globe-on nav-person nav-person-on flag-jp flag-us flag-se flag-fi flag-fi-rim flag-de flag-nl brand search saved-small signal-small fastest chevron heart-active heart-rest person glow-screen atmo-disc atmo-cloud".split(" "),Kf={bg:"#edf3fb",ink:"#102035",sub:"#52657c",blue:"#0965b8",card:"#fff",tint:"#dfedfc",track:"#e6eef8",selected:"#dcecfb",quiet:"#f9fcff",badge:"#e1effc"},Zf={bg:"#060c15",ink:"#f1f6fe",sub:"#a5b5cc",blue:"#82c7ff",card:"#101c2c",tint:"#0d2d4f",track:"#152438",selected:"#0e2c4d",quiet:"#101c2c",badge:"#1a2c43"};async function Jf(s,e){let t=e==="ru"?"":"-"+e,n=[["night","ios/night-art.webp"],...l_.map(a=>[a,"ios/"+a+".svg"]),["home-plate","ios/home-plate"+t+".webp"],["studio-sky","studio-sky.webp"],...["medal-blue","medal-gold","brand-light"].map(a=>[a,"ios/"+a+".webp"])],i=await Promise.all(n.map(async([a,o])=>[a,await s(o)])),r=[["Duo Manrope","manrope-latin-wght-normal.woff2","U+0000-024F,U+2000-206F,U+20A0-20CF,U+2190-21FF","200 800"]];return e==="ru"&&r.push(["Duo Manrope","manrope-cyrillic-wght-normal.woff2","U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116","200 800"]),e==="zh"&&r.push(["Duo Han","noto-sc-ui.woff2","U+2E80-FFFF","400 700"]),await Promise.all(r.map(async([a,o,c,l])=>{let h=new FontFace(a,'url("'+new URL("ios/"+o,import.meta.url).href+'")',{weight:l,unicodeRange:c});try{await h.load(),document.fonts.add(h)}catch{}})),Object.fromEntries(i)}function $f(s,e,t,n,i,r,a=!1){let o=a?Zf:Kf,{bg:c,ink:l,sub:h,blue:u,card:f,tint:d}=o,m=(X=Hn,j=An,ce=t)=>{let E=document.createElement("canvas");return E.width=Math.round(X*ce),E.height=Math.round(j*ce),E},_=m(),g=m(),p=m(318,128,2.5),S=m(397,48,2.5);function b(X,j,ce,E=!1){let Ae=X.getContext("2d",{alpha:E});return Ae.setTransform(X.width/j,0,0,X.height/ce,0,0),Ae}let v=b(_,Hn,An),A=b(g,Hn,An),R=b(p,318,128,!0),C=b(S,397,48,!0),F=[],y=[],T='"Duo Manrope","Duo Han","PingFang SC","Microsoft YaHei","Noto Sans CJK SC",Arial,sans-serif',P=(X,j,ce,E,Ae,ve,Ue=.75)=>y.push({id:X,x:j,y:ce,w:E,h:Ae,r:ve,height:Ue}),V=(X,j,ce,E,Ae)=>F.push({id:X,x:j,y:ce,w:E,h:Ae});function O(X,j,ce,E,Ae,ve,Ue){X.fillStyle=Ue,X.beginPath(),X.roundRect(j,ce,E,Ae,ve),X.fill()}function G(X,j,ce){X.font=ce+" "+j+"px "+T}function B(X,j,ce,E,Ae=15,ve=500,Ue=l,me="left",w=0){if(G(X,Ae,ve),w){let x=X.measureText(j).width;x>w&&G(X,Ae*w/x,ve)}X.fillStyle=Ue,X.textAlign=me,X.textBaseline="alphabetic",X.fillText(j,ce,E)}function Y(X,j,ce,E,Ae,ve=14,Ue=21,me=h){G(X,ve,450);let w="",x=r==="zh"?"":" ";for(let L of x?j.split(" "):Array.from(j)){let $=w+(w?x:"")+L;w&&X.measureText($).width>Ae?(B(X,w,ce,E,ve,450,me),w=L,E+=Ue):w=$}w&&B(X,w,ce,E,ve,450,me)}let z=(X,j,ce,E,Ae=22,ve=Ae)=>{a&&bh[j]?X.drawImage(n.night,...bh[j],ce,E,Ae,ve):X.drawImage(n[j],ce,E,Ae,ve)};function Q(X,j,ce,E,Ae,ve,Ue){X.save(),X.beginPath(),X.roundRect(j,ce,E,Ae,ve),X.clip(),Ue(),X.restore()}function ue(X,j,ce,E,Ae){Q(X,ce,E,Ae,Ae,Ae/2,()=>{z(X,"flag-"+j,ce,E,Ae),j==="fi"&&z(X,"flag-fi-rim",ce,E,Ae)})}let he=X=>i.servers[X][1]+" \xB7 VLESS \xB7 "+Yf[X]+" "+i.ms,ge={size:11,weight:600,baseline:42.25},Fe=[];function De(){R.clearRect(0,0,318,128),Fe.length=0;for(let X=0;X<2;X++)for(let j=0;j<3;j++){let ce=65+94*j,E=X*64,Ae=["power","globe","person"][j];z(R,"nav-"+Ae+(X?"-on":""),ce-10.25,E+11.6,20.5);let ve=i.nav[rr[j]],Ue=ge.baseline;if(B(R,ve,ce,E+Ue,ge.size,ge.weight,X?u:h,"center"),!X){let me=R.measureText(ve);Fe.push([ve,-me.actualBoundingBoxLeft,Ue-32-me.actualBoundingBoxAscent,me.actualBoundingBoxRight,Ue-32+me.actualBoundingBoxDescent])}}}De();let rt="";function qe(X){return a===X?!1:(a=X,o=a?Zf:Kf,{bg:c,ink:l,sub:h,blue:u,card:f,tint:d}=o,De(),rt="",!0)}function J(X,j){let ce=X+"|"+j;return ce===rt?!1:(rt=ce,C.clearRect(0,0,397,48),B(C,i.time,2,14,12,500,h),B(C,i.ip,183,14,12,500,h),B(C,X,2,36,15,600),B(C,j,183,36,15,600),!0)}function te(X,j,ce,E,Ae,ve){O(X,j,ce,E,Ae,Ae/2,o.track),B(X,i.regular,j+E*.25,ce+Ae*.5+5,13,550,ve?h:l,"center",E*.5-22),B(X,i.limited,j+E*.75,ce+Ae*.5+5,13,550,ve?l:h,"center",E*.5-22)}function ye(X){B(v,i.nav.locations,44,140,24,650),Y(v,i.loc.lead,44,170,351,14,21),P("mode",44,220,353,43,21,.65),te(v,44,220,353,43,X.limited),V("seg-0",44,220,176,43),V("seg-1",220,220,177,43),P("search",44,277,353,49,17),O(v,44,277,353,49,17,f),z(v,"search",60,292,19),Q(v,87,280,302,43,0,()=>B(v,X.query||i.loc.search,90,308,14,450,X.query?l:h)),V("search",44,277,353,49),P("filter",44,338,172.5,44,16,.65),O(v,44,338,172.5,44,16,X.filter?o.selected:f),z(v,"saved-small",58,352,16),B(v,i.loc.saved,83,366,13,560,u),V("filter",44,338,172.5,44),P("check",224.5,338,172.5,44,16,.65),O(v,224.5,338,172.5,44,16,f),z(v,"signal-small",238,352,16),B(v,X.checked?i.loc.checked:i.loc.check,261,366,13,560,u,"left",124),V("check",224.5,338,172.5,44),P("fastest",44,398,353,69,21),O(v,44,398,353,69,21,d),z(v,"fastest",59,420,24),B(v,i.loc.fast,98,427,16,600),B(v,i.loc.fastSub,98,449,12.5,500,h),z(v,"chevron",366,424,16),V("fastest",44,398,353,69);let j=Object.keys(Yf).filter(ce=>(!X.filter||X.fav[ce])&&i.servers[ce].join(" ").toLocaleLowerCase(r).includes(X.query.trim().toLocaleLowerCase(r)));j.forEach((ce,E)=>{let ve=59+E*78,Ue=368;P("row-"+ce,475,ve,Ue,66,21,.91),O(v,475,ve,Ue,66,21,ce===X.server?o.selected:f),ue(v,ce,491,ve+17,32),B(v,i.servers[ce][0],536,ve+29,16,560),B(v,he(ce),536,ve+50,12.7,500,h),z(v,X.fav[ce]?"heart-active":"heart-rest",475+Ue-39,ve+22,22),V("server-"+ce,475,ve,Ue-55,66),V("fav-"+ce,475+Ue-55,ve,55,66)}),j.length||(O(v,475,59,368,68,21,f),B(v,X.query?i.loc.noMatch:i.loc.empty,499,100,15,500,h))}function ke(X){let[j,ce,E,Ae]=Sh;P("premium-card",j,ce,E,Ae,24,.9),Q(v,j,ce,E,Ae,24,()=>{let ve=v.createLinearGradient(j,ce,j+E,ce);ve.addColorStop(0,"#081c50"),ve.addColorStop(.46,"#081c50"),ve.addColorStop(.79,"#075be9"),ve.addColorStop(1,"#00c8ff"),O(v,j,ce,E,Ae,24,ve),v.save(),v.globalCompositeOperation="screen",z(v,"glow-screen",j+154,ce-60,320,270),v.restore(),z(v,"atmo-disc",j+196,ce-45,222,111),z(v,"atmo-cloud",j-117,ce+38,356,122),B(v,i.profile.plan,j+18,ce+44,16.5,640,"#fff","left",E-176),B(v,i.profile.active,j+18,ce+68,12.5,490,"#e0edff","left",E-176)}),X.premium||V("premium",j,ce,E,Ae)}function Me(X,j,ce){B(v,j,480,X,13,480,h),B(v,ce,833,X,14.2,570,l,"right")}function Je(X){B(v,X.premium?i.premium.title:i.nav.profile,44,140,22,650),B(v,i.profile.caption,44,165,13,470,h),X.premium?(O(v,44,207,40,40,14,o.badge),z(v,"person",54,217,20),B(v,i.premium.tag,44,292,20,610),B(v,i.premium.note,44,321,12.5,480,h),P("done",44,366,151,44,22,.6),O(v,44,366,151,44,22,o.tint),B(v,i.premium.back,119.5,394,14,620,u,"center"),V("premium-close",44,366,151,44)):(O(v,44,210,353,69,21,o.quiet),O(v,59,225,39,39,15,o.badge),z(v,"person",67,233,23),B(v,i.profile.me,113,240,15.2,610),B(v,i.profile.demo,113,259,12.2,475,h),B(v,i.profile.location,45,343,13,495,h),ue(v,X.server,45,361,21),B(v,i.servers[X.server][0],77,377,15,540)),B(v,i.profile.sub,480,145,13.2,545,h),ke(X),X.premium?(Me(323,i.premium.term,i.premium.date),Me(367,i.premium.locations,i.premium.countries),Me(411,i.premium.devices,i.premium.deviceCount)):(B(v,i.profile.preview,481,309,13,570,u),z(v,"chevron",489+v.measureText(i.profile.preview).width,295,15),V("premium",477,282,356,44),Me(377,i.premium.locations,i.premium.countries),Me(415,i.profile.saved,String(Object.values(X.fav).filter(Boolean).length)))}function ut(X){F.length=y.length=0,O(v,0,0,Hn,An,0,c);let j=s.naturalWidth/Hn,ce=s.naturalHeight/An;if(a?z(v,"status",164,0,565,43):v.drawImage(s,164*j,0,565*j,43*ce,164,0,565,43),z(v,"brand",29,59,24),B(v,"Geodema VPN",61,78,15.6,650),X.tab==="connect"&&!X.premium){if(a){O(A,0,0,Hn,An,0,f),z(A,X.phase==="on"?"cap-on":"cap-off",134.5,184,176,176),z(A,"chevron",834,143,16);for(let[Ue,me]of[["de",411],["fi",487]])ue(A,Ue,484,me-16,32),B(A,i.servers[Ue][0],529,me-2,16,550),B(A,he(Ue),529,me+16,12,480,h)}else A.drawImage(e,0,0,Hn,An);A.drawImage(n["home-plate"],...c_);let E=(a?{off:"#1787ee",connecting:"#82c7ff",on:"#74dcb1"}:{off:"#91a0b4",connecting:"#198bfb",on:"#17bb9c"})[X.phase];G(v,16,570);let Ae=i.phase[X.phase],ve=222-v.measureText(Ae).width/2;O(v,ve-15,149,7,7,3.5,E),B(v,Ae,230,159,16,570,l,"center"),B(v,i.cta[X.phase],222,391,16,570,l,"center"),!a&&X.phase==="off"&&Q(A,134,184,177,177,88,()=>{A.filter="grayscale(.82)",A.drawImage(e,0,0,Hn,An)}),te(A,468,51,355,46,X.limited),O(A,481,124,333,54,6,f),ue(A,X.server,484,135,32),B(A,i.servers[X.server][0],529,149,16,550),B(A,he(X.server),529,167,12,480,h);for(let[Ue,me]of[["de",411],["fi",487]])O(A,813,me-15,35,30,5,f),z(A,X.fav[Ue]?"heart-active":"heart-rest",820.5,me-11,22);V("power",138,365,171,46)}else X.tab==="locations"&&!X.premium?ye(X):Je(X);rr.forEach((E,Ae)=>V("tab-"+E,297+Ae*97,540,97,66))}function tt(X,j){for(let ce=F.length-1;ce>=0;ce--){let E=F[ce];if(X>=E.x&&X<=E.x+E.w&&j>=E.y&&j<=E.y+E.h)return E.id}return""}function Ge(X){let j=F.find(ce=>ce.id===X);return j?[j.x,j.y,j.w,j.h]:null}return J("00:00:00","\u2014"),{base:_,faces:g,navInk:p,navInkBounds:Fe,tele:S,telemetry:J,setTheme:qe,paint:ut,lookup:tt,rect:Ge,plates:y}}var nd=s=>new URL(s,import.meta.url).href,hs=[0,18,35,52,70],us=Math.PI*2,sa=s=>Math.max(0,Math.min(1,s)),lc=s=>s*s*(3-2*s),h_="varying vec2 vUV;varying vec3 vFaceClip;void main(){vUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);vFaceClip=gl_Position.xyw;}",u_="attribute float edgeShade;varying float edge;varying vec2 vUV;void main(){edge=edgeShade;vUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",f_="varying float edge;varying vec2 vUV;void main(){edge=0.;vUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",jf="uniform mat4 aPose,bPose;uniform vec2 yawTurn;varying float softDelta;varying vec4 aClip,bClip;varying vec3 localShell;varying vec2 studioUV;void main(){vec3 n=normalize(normalMatrix*normal),rest=vec3(yawTurn.x*n.x-yawTurn.y*n.z,n.y,yawTurn.y*n.x+yawTurn.x*n.z),key=vec3(-.64,.54,.545);softDelta=pow(max(dot(n,key),0.),3.)-pow(max(dot(rest,key),0.),3.);studioUV=uv;localShell=position;vec4 p=vec4(position,1.);aClip=aPose*p;bClip=bPose*p;gl_Position=projectionMatrix*modelViewMatrix*p;}",d_=["uniform sampler2D aMap,bMap,wallArt; uniform float mixPose,desaturate,opacity,bodyMask,uiWall,nightK,metal; varying float softDelta;varying vec4 aClip,bClip; varying vec3 localShell;varying vec2 studioUV;","void main(){if(bodyMask>.5&&localShell.y>-.00085){vec2 q=abs(localShell.xz)-vec2(.06865,.04525);float d=length(max(q,0.))+min(max(q.x,q.y),0.)-.01065;if(d<-.00025)discard;}vec4 a=texture2D(aMap,.5+.5*aClip.xy/aClip.w);vec4 b=texture2D(bMap,.5+.5*bClip.xy/bClip.w);","vec2 w=vec2((1.-mixPose)*a.a,mixPose*b.a);vec3 c=(a.rgb*w.x+b.rgb*w.y)/max(.0001,w.x+w.y)+metal*softDelta*vec3(.18,.21,.24);","if(w.x+w.y<.05)c=vec3(.45,.51,.61);c=mix(c,vec3(dot(c,vec3(.2126,.7152,.0722)))*.86,desaturate);if(uiWall>.5&&uiWall<1.5){float studio=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(.939,.950,.960),vec3(.106,.166,.23),nightK)*mix(.963,1.039,smoothstep(.20,.97,studio));}else if(uiWall>1.5){vec2 p=studioUV*vec2(890.,626.),core=clamp(p,vec2(493.,281.),vec2(842.,337.)),d=p-core;vec3 pigment=texture2D(wallArt,(core+d*min(1.,21./max(length(d),.001)))/vec2(890.,626.)).rgb;float light=dot(c,vec3(.213,.715,.072));c=pigment*(.86+.13*sqrt(clamp(light,0.,1.)))+vec3(.005,.007,.010);}if(nightK>.5&&uiWall<.5){float metal=dot(c,vec3(.213,.715,.072));c=c*vec3(.46,.58,.72)+vec3(.018,.037,.060)*smoothstep(.06,.65,metal);}gl_FragColor=vec4(mix(mix(vec3(.9765,.9843,.9922),vec3(.024,.047,.082),nightK),c,opacity),1.);}"].join(`
`),id=[wf,"uniform sampler2D oldArt,art,coin;uniform float blendK,homeK,goldK;","uniform vec4 backPose,frontPose;uniform vec3 holdHeart;uniform vec2 squash;varying vec2 vUV;","const vec2 appSize=vec2(890.,626.);uniform vec3 favPulse;","vec2 heartUV(vec2 uv){vec2 h=uv*appSize-holdHeart.xy;uv+=h*(holdHeart.z*.115*(1.-smoothstep(12.,21.,length(h))))/appSize;vec2 d=uv*appSize-favPulse.xy;float mask=1.-smoothstep(12.,19.,length(d));return uv-d*(favPulse.z*mask)/appSize;}","float rr(vec2 p,vec2 s,float r){vec2 q=abs(p-s*.5)-s*.5+r;return min(max(q.x,q.y),0.)+length(max(q,0.))-r;}","vec3 sprite(vec3 color,vec2 xy,vec4 pose,float sx,float cy,float amount){"," vec2 d=xy-pose.xy;float c=cos(pose.w),s=sin(pose.w);vec2 u=vec2(c*d.x+s*d.y,-s*d.x+c*d.y)/(pose.z*vec2(sx,1.))+vec2(.5,cy);"," if(min(u.x,u.y)<0.||max(u.x,u.y)>1.)return color;vec4 tex=texture2D(coin,u);return mix(color,tex.rgb,tex.a*amount);}","vec3 campaign(vec3 color,vec2 local,vec2 wh,float radius,float cy,float amount){"," if(amount<.001||rr(local,wh,radius)>-.5)return color;"," return sprite(sprite(color,local,backPose,squash.x,cy,amount),local,frontPose,squash.y,cy,amount);}"].join(`
`),Qf=id+`
uniform float pillX;
`+Tf+Pf+["uniform sampler2D contact,lightMap,underMask,telemetry;uniform float lightX,plateK,surface,modePos,locK;uniform vec4 goldRect;varying float edge;","void main(){vec2 px=vUV*appSize;float border=rr(px,appSize,58.);float aa=max(.45,fwidth(border)*.67);if(border>aa){gl_FragColor=vec4(.017,.021,.026,1.);return;}","bool animate=changing>.5&&!fixedUI(px);vec2 part=vec2(1.,0.);if(animate)part=blockMotion(px);","vec2 uv=vUV;if(surface<.5)uv.y-=part.y/appSize.y;vec2 ap=uv*appSize;","uv=heartUV(uv);vec3 c=texture2D(art,uv).rgb;if(blendK<.999)c=mix(texture2D(oldArt,uv).rgb,c,blendK);","float segment=1.-smoothstep(-.65,.65,rr(ap-vec2(47.+173.5*modePos,223.),vec2(173.5,37.),18.5));","float trackInk=1.-smoothstep(.037,.135,distance(c,vec3(.082,.141,.220)));c=mix(c,mix(vec3(1.),vec3(.184,.253,.329),nightK),segment*locK*mix(smoothstep(.69,.89,min(c.r,min(c.g,c.b))),trackInk,nightK));if(homeK>.01){vec3 ao=texture2D(contact,uv).rgb;if(px.x>445.){float shadow=1.-dot(ao,vec3(.213,.715,.072));c*=1.-shadow*vec3(.31,.282,.25);}else c*=mix(vec3(1.),ao,.89);}","vec2 tv=(ap-vec2(467.,198.))/vec2(397.,48.);if(homeK>.001&&min(tv.x,tv.y)>=0.&&max(tv.x,tv.y)<=1.){vec4 t=texture2D(telemetry,tv);c=mix(c,t.rgb,t.a);}","vec2 gp=ap-goldRect.xy;if(goldK>.001&&rr(gp,goldRect.zw,24.)<-.5){vec2 lu=(gp+vec2(26.-lightX,8.))/vec2(462.,353.);vec4 l=texture2D(lightMap,vec2(1.-lu.y,.135+.73*lu.x));c+=l.rgb*l.a*.24;}","c=campaign(c,gp,goldRect.zw,24.,.507,goldK);","if(surface<.5&&plateK>.002){vec4 m=texture2D(underMask,uv);c=mix(c,m.rgb,m.a*plateK);}else if(surface>.5)c*=1.-vec3(.145,.127,.112)*edge*plateK;","c=litPaper(mix(pageFloor(),c,part.x));if(surface<.5&&px.y>510.)c=glassBar(c,px);c=sweepLight(c,px);if(animate&&surface<.5){float oldK=px.x<445.?oldHalf.x:oldHalf.y;if(oldK>.001)c=mix(c,previousPixel(px),oldK);}","gl_FragColor=vec4(mix(c,vec3(.017,.021,.026),smoothstep(-aa,aa,border)),1.);}"].join(`
`),p_=id+["uniform float hasCoins,hasCap,chrome,shade,isThumb,isMode,starting,spin,faceOpacity;uniform mat3 clipToInk;varying vec3 vFaceClip;","void main(){vec2 uv=heartUV(vUV);vec2 q=uv*appSize-vec2(222.5,272.);float r=length(q);if(hasCap>.5){q*=1.+.047*shade*(1.-smoothstep(40.,72.,r));float a=chrome*smoothstep(64.,71.,r)*(1.-smoothstep(84.,88.,r));uv=(vec2(222.5,272.)+mat2(cos(a),-sin(a),sin(a),cos(a))*q)/appSize;}","vec2 screenUV=uv;if(isMode>.5){vec3 ink=clipToInk*vFaceClip;screenUV=ink.xy/ink.z;}vec3 c=texture2D(art,screenUV).rgb;if(blendK<.999)c=mix(texture2D(oldArt,screenUV).rgb,c,blendK);if(isThumb>.5){float mask=1.-smoothstep(.037,.135,distance(c,vec3(.082,.141,.220)));c=mix(c,mix(vec3(1.),vec3(.184,.253,.329),nightK),mix(smoothstep(.73,.89,min(c.r,min(c.g,c.b))),mask,nightK));}","if(hasCap>.5&&starting>.001){float ang=atan(q.y,q.x);float arc=pow(.5+.5*cos(ang-spin),2.3);float edge=1.-smoothstep(1.5,3.5,abs(r-74.));c=mix(c,vec3(.08,.56,.96),edge*(.2+.8*arc)*starting);}","if(hasCoins>.5)c=campaign(c,vUV*appSize-vec2(469.,257.),vec2(397.,104.),23.,.5306,1.);vec2 screenPx=(isMode>.5?screenUV:vUV)*appSize;c=litPaper(c);gl_FragColor=vec4(mix(mix(vec3(.9765,.9843,.9922),pageFloor(),nightK),sweepLight(c,screenPx),faceOpacity),1.);}"].join(`
`);function ra(s){return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=()=>t(Error("\u0420\u0435\u0441\u0443\u0440\u0441 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F: "+s)),n.src=nd(s)})}function m_(s,e){for(;e;e=e.parent){let t=s.parser.associations.get(e)?.nodes;if(t!==void 0)return s.parser.json.nodes[t].name}return""}function ed(s){let e=s.attributes.uv,t=s.attributes.position,n=e.getX(0),i=e.getY(0),r=0,a=0,o=0,c=0;for(let p=1;p<e.count;p++){let S=(e.getX(p)-n)**2+(e.getY(p)-i)**2;S>o&&(o=S,r=p)}let l=e.getX(r)-n,h=e.getY(r)-i;for(let p=1;p<e.count;p++){let S=l*(e.getY(p)-i)-h*(e.getX(p)-n);Math.abs(S)>Math.abs(c)&&(c=S,a=p)}if(Math.abs(c)<1e-8)throw Error("Mode rail requires planar UVs");let u=new U().fromBufferAttribute(t,0),f=new U().fromBufferAttribute(t,r).sub(u),d=new U().fromBufferAttribute(t,a).sub(u),m=f.clone().multiplyScalar(e.getY(a)-i).addScaledVector(d,-h).divideScalar(c),_=d.clone().multiplyScalar(l).addScaledVector(f,n-e.getX(a)).divideScalar(c),g=u.addScaledVector(m,-n).addScaledVector(_,-i);return new Ke().makeBasis(m,_,new U().crossVectors(m,_).normalize()).setPosition(g)}var td={B3_row_fi:[1.4,5600,0],B3_row_de:[1.3,5600,.12],B3_row_nl:[.8,5600,.24],B3_premium:[.5,6700,.4],B3_mode_thumb:[.3,5200,.55],B3_power_cap:[.5,4300,.7]},Pe=s=>({value:s});async function sd(s,e,t,n,i){let r=i==="ru"?"":"-"+i,[a,o,c,l,h,...u]=await Promise.all([new ac().loadAsync(nd("duo.glb?v=curved-3")),ra("display"+r+".webp"),ra("faces"+r+".webp"),ra("contact.webp"),Jf(ra,i),...hs.map(D=>ra("studio-"+D+".webp"))]),f=new Er,d=a.scene;f.add(d);let m=d.getObjectByName("DuoCam");if(!m?.isPerspectiveCamera)throw Error("Missing Blender camera");let _=d.getObjectByName("DuoOpen");if(!_||_.parent!==d)throw Error("Missing DuoOpen handset rig");let g=new gn,p=Pe(new $e(1,0));d.add(g),g.add(_);let S=matchMedia("(max-width:650px)").matches?1.5:2,b=$f(o,c,S,h,n,i,!!t.dark);b.paint(t);let v=[],A=(D,le=!1)=>{let pe=D instanceof HTMLCanvasElement?new es(D):new It(D);return pe.flipY=le,pe.colorSpace=yn,pe.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),pe.needsUpdate=!0,v.push(pe),pe},R=[b.base,b.faces].map(D=>{let le=document.createElement("canvas");le.width=D.width,le.height=D.height;let pe=le.getContext("2d",{alpha:!1});return pe.drawImage(D,0,0),{c:D,ctx:pe,next:A(D),prev:A(le)}}),[C,F]=R,y=u.map(D=>A(D,!0)),T=A(h["medal-blue"]),P=A(h["medal-gold"]),V=()=>({backPose:Pe(new _t),frontPose:Pe(new _t),squash:Pe(new $e(1,1))}),O=V(),G=V(),B=Pe(new U(-100,-100,0)),Y=Pe(0),z=Pe(351),Q=Pe(0),ue=Pe(0),he=Pe(new U(-100,-100,0)),ge=Pe(new $e),Fe=Pe(+!!t.dark),De={nightK:Fe,favPulse:B,holdHeart:he,scrollLight:ge,blendK:Pe(1),homeK:Pe(1),goldK:Pe(0)},rt=Pe(new Qe),qe=Pe(A(b.navInk)),J=Pe(A(b.tele)),te=Pe(0),ye=Pe(0),ke=Pe(0),Me=Pe(-500),Je=Pe(A(h["studio-sky"])),ut=Pe(1),tt=Pe(0),Ge=Pe(new Float32Array(28)),X=Pe(new $e),j=Pe(0),ce=Pe(C.next),E=Pe(new Qe),Ae=Pe(new Qe);for(let D=0;D<14;D++)Ge.value[2*D]=1;let ve=Pe(0),Ue=Pe(0),me=Pe(Number(matchMedia("(prefers-reduced-transparency:reduce)").matches)),w=Pe(0),x=Pe(0),L=Pe(null),$=new Vt({vertexShader:f_,fragmentShader:Qf,uniforms:{...De,...G,surface:Pe(0),underMask:L,plateK:x,pillX:z,modePos:Q,locK:ue,revealPage:tt,wave:Ge,oldHalf:X,changing:j,oldFrame:ce,oldLeft:E,oldRight:Ae,navLetters:qe,telemetry:J,viewTilt:te,navSpeed:ye,navPress:ke,navDownX:Me,studioSky:Je,solidGlass:me,art:Pe(C.next),oldArt:Pe(C.prev),coin:Pe(P),lightMap:Pe(A(h["brand-light"])),lightX:w,contact:Pe(A(l)),goldRect:Pe(new _t(...Sh))}}),ne=new Vt({vertexShader:u_,fragmentShader:Qf,side:hn,uniforms:{...$.uniforms,surface:Pe(1)}}),Z=kf(d,ne);L.value=Z.mask;let Ee=[],fe=[],Ce=[],Be=[],ae=[],xe=new Set,we=new Map,H=[];d.traverse(D=>{td[D.name]&&H.push({o:D,base:D.position.clone(),spec:td[D.name],rise:0});let le=D.userData.endPose;if(le&&Be.push({o:D,qa:D.quaternion.clone(),qb:le.rotation?new rn().fromArray(le.rotation):D.quaternion.clone(),a:D.position.clone(),b:le.translation?new U().fromArray(le.translation):D.position.clone()}),!D.isMesh)return;let pe=m_(a,D),ze=D.material;xe.add(ze);let We=ze.name.replace(/^Web /,"");Ee.push(D),D.userData.owner=pe,D.userData.slot=We,we.has(pe)||we.set(pe,[]),we.get(pe).push(D);let Xe=/^(Screen|Body|Back)[LR]$/.test(pe);if(Xe){let dt=D.geometry.attributes.position,nt=new Float32Array(dt.array),Gt=[];for(let Bt=0;Bt<dt.count;Bt++){let Ct=1-Math.abs(nt[3*Bt])/.007;Ct>0&&Gt.push([Bt,Ct*Ct])}ae.push({pos:dt,copy:nt,edges:Gt,side:pe.endsWith("R")?1:-1}),D.geometry.boundingSphere?.expandByPoint(new U(0,.001,0)),pe.startsWith("Screen")||D.geometry.setAttribute("studioRest",new Et(nt,3))}if(pe==="ScreenL"||pe==="ScreenR"){D.material=$;return}if(We==="B3 Top"||We==="B3 Cap Top"){let dt={...De,...O,art:Pe(F.next),oldArt:Pe(F.prev),coin:Pe(T),hasCoins:Pe(+(pe==="B3_premium")),hasCap:Pe(+(pe==="B3_power_cap")),isThumb:Pe(+(pe==="B3_mode_thumb")),isMode:Pe(Number(pe.startsWith("B3_mode_"))),clipToInk:rt,faceOpacity:Pe(1),starting:ve,spin:Ue,chrome:Y,shade:Pe(0)};D.material=new Vt({vertexShader:h_,fragmentShader:p_,uniforms:dt}),Ce.push({o:D,u:dt});return}let et={nightK:Fe,yawTurn:p,metal:Pe(+!pe.startsWith("B3_")),wallArt:Pe(F.next),aPose:Pe(new Ke),bPose:Pe(new Ke),aMap:Pe(y[0]),bMap:Pe(y[1]),mixPose:Pe(0),desaturate:Pe(0),opacity:Pe(1),bodyMask:Pe(Number(pe.startsWith("Body"))),uiWall:Pe(We==="B3 Side"?pe==="B3_premium"?2:/^B3_(row_|mode_)/.test(pe)?1:0:0)};D.material=new Vt({vertexShader:Xe?"attribute vec3 studioRest;"+jf.replace("aClip=aPose*p;bClip=bPose*p;","aClip=aPose*vec4(studioRest,1.);bClip=bPose*vec4(studioRest,1.);"):jf,fragmentShader:d_,uniforms:et}),fe.push({o:D,u:et,mats:[]})});let W=Ce.find(({o:D})=>D.userData.owner==="B3_mode_track").o,ie=ed(W.geometry),I=new Ke;function re(){let D=I.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse).multiply(W.matrixWorld).multiply(ie).elements;rt.value.set(D[0],D[4],D[12],D[1],D[5],D[13],D[3],D[7],D[15]).invert()}let se=Vf(e,f,m,["ScreenL","ScreenR"].map(D=>we.get(D)[0]),ce,E,Ae,ed);xe.forEach(D=>D.dispose());let Te=new Set(Be.map(D=>D.o)),oe=d.getObjectByName("B3_mode_thumb"),ee=.158600013*175/890,de=[...we.keys()].filter(D=>D.startsWith("B3_")).map(D=>{let le=d.getObjectByName(D);return{o:le,base:le.position.clone(),sy:le.scale.y,slot:tr(D),depth:D.startsWith("B3_row_")?.7:D.startsWith("B3_mode")?.83:D==="B3_premium"?.82:1}}),Le={...t},at=Le,ot=Ee,St=0,$t=0,Wn=1,fs=0,jt=0,ri=0,Bi="",or="",En="",Xn=0,cr=0,Cn=351,fn=0,vi=999,zi=-1,Rn="",qn=0,Mn=!1,ds="connect",ki=Hl("connect"),aa=0,oa=!1,dn=D=>D.premium?"premium":D.tab;function M(D){if(zi===D)return;zi=D;let le=.130899694*(1-lc(D)),pe=.0035*Math.tan(le),ze=Math.sin(le),We=Math.cos(le);for(let{pos:Xe,copy:et,edges:dt,side:nt}of ae){for(let[Gt,Bt]of dt)Xe.setX(Gt,et[3*Gt]+nt*ze*pe*Bt),Xe.setY(Gt,et[3*Gt+1]+We*pe*Bt);Xe.needsUpdate=!0}}function N(D,le=0,pe=0,ze=0){g.rotation.y=ze,p.value.set(Math.cos(ze),Math.sin(ze));let We=lc(sa(D));for(let Xe of Be)Xe.o.quaternion.slerpQuaternions(Xe.qa,Xe.qb,We),Xe.o.position.lerpVectors(Xe.a,Xe.b,We);for(let Xe of de){Te.has(Xe.o)||Xe.o.position.copy(Xe.base);let et=Ge.value[2*Xe.slot],dt=Ge.value[2*Xe.slot+1],nt=oa?Xe.depth:1;Xe.o.position.z+=dt*.1118/An,Xe.o.position.y*=nt,Xe.o.scale.y=Xe.sy*nt*(.83+.17*et)}for(let Xe of H){let[et,dt,nt]=Xe.spec;Xe.rise=et*pe*(.5-.5*Math.cos(us*(le/dt+nt))),Xe.o.position.y+=.001*(Xe.rise-(Bi===Xe.o.name?(Bi==="B3_power_cap"?.53:.42)*Xn:0))}oe.position.x+=jt*ee,d.updateMatrixWorld(!0),m.updateMatrixWorld(!0)}m.aspect=1.6,m.updateProjectionMatrix();let K=new Ke;for(let D of hs){N(D/70),K.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse);for(let le of fe)le.mats.push(new Ke().multiplyMatrices(K,le.o.matrixWorld))}oa=!0;function q(D,le){if(!le)for(let ze of dn(D)==="connect"?R:[C])Wn>.001&&(ze.ctx.globalAlpha=Wn,ze.ctx.drawImage(ze.c,0,0),ze.ctx.globalAlpha=1),ze.prev.needsUpdate=!0;Le=D,ri=Number(D.limited),Fe.value=+!!D.dark,b.setTheme(!!D.dark)&&(qe.value.needsUpdate=!0),b.paint(D),Z.change([...b.plates],le,!!D.dark);let pe=dn(D)==="connect";De.homeK.value=Number(pe),De.goldK.value=Number(D.tab==="profile"||D.premium),ue.value=+(dn(D)==="locations"),C.next.needsUpdate=!0,pe&&(F.next.needsUpdate=!0),fs=le?0:155,$t=0,Wn=le?1:0,ot=Ee.filter(ze=>pe||!ze.userData.owner.startsWith("B3_")),le&&(jt=ri)}function k(){j.value=0,X.value.set(0,0);for(let D=0;D<14;D++)Ge.value[2*D]=1,Ge.value[2*D+1]=0;ut.value=1,Rn=""}function _e(D){ds=D,tt.value=Rf(D),ki=Hl(D),aa=Ff(D)}function Re(D,le=!1){if(at={...D,fav:{...D.fav}},Cn={connect:351,locations:445,profile:539}[D.tab],le){Mn=!1,k(),_e(dn(at)),z.value=Cn,fn=0,q(at,!0);return}Mn=dn(at)!==dn(Le),Mn||q(at,!1)}function be(D,le){if(le&&(Rn||Mn)&&(Mn=!1,k(),_e(dn(at)),q(at,!0)),Mn?(se.record(!!Rn&&(X.value.x>.001||X.value.y>.001)),Mn=!1,_e(dn(at)),q(at,!0),Rn="reveal",qn=0,j.value=1):Rn&&(qn+=Math.min(D,70)),Rn)if(qn>=aa)k();else{X.value.set(Gl(qn,0),Gl(qn,1));for(let pe=0;pe<14;pe++){let[ze,We]=Uf(qn,pe);Ge.value[2*pe]=ze,Ge.value[2*pe+1]=We}ut.value=ki.reduce((pe,ze)=>pe+Ge.value[2*ze],0)/ki.length}if(D=Math.min(D,48),le)z.value=Cn,fn=0;else{let pe=D*.001,ze=z.value-Cn,We=18.5,Xe=(fn+We*ze)*pe,et=Math.exp(-We*pe);z.value=Cn+(ze+Xe)*et,fn=(fn-We*Xe)*et,Math.abs(z.value-Cn)<.035&&Math.abs(fn)<.65&&(z.value=Cn,fn=0)}ye.value=fn}let Ie="",Ne="";function Ye(D){if(Le.premium||Le.tab==="profile")return null;if(Le.tab==="locations"){let le=b.rect("fav-"+D);return le?[le[0]+27,le[1]+le[3]/2]:null}return D==="de"?[831.5,411]:D==="fi"?[831.5,487]:null}function He(D,le){let pe=Ye(D);!pe||le||Le.tab==="locations"&&Le.filter&&Le.fav[D]||(B.value.set(...pe,0),vi=0)}function it(D,le,pe=""){or=D,En=dn(Le);let ze=D.startsWith("fav-")?Ye(D.slice(4)):null;he.value.set(...ze||[-100,-100],0),Ie=ze?"":pe||(En==="profile"&&D==="premium"?"premium-card":""),Bi=ze?"":D==="power"?"B3_power_cap":le?.startsWith("B3_mode")?"B3_mode_thumb":le?.startsWith("B3_")?le:"",Me.value={"tab-connect":351,"tab-locations":445,"tab-profile":539}[D]??-500}function pt(D,le,pe,ze){let We=pe/1e3,Xe=Math.sin(us*We/3.85+.35)*ze,et=Math.sin(us*We/4.75-1.05)*ze,dt=Math.sin(us*We/4.3+.1)*ze,nt=Math.sin(us*We/5.2-.65)*ze;D.backPose.value.set((le?266:246)+2.5*Xe,(le?55:60)-3.6*Xe,le?105:110,(le?.24:.32)+.145*dt),D.frontPose.value.set((le?320:299)+3.4*et,(le?79:67)-4.8*et,le?149:151,(le?-.105:-.04)-.14*nt),D.squash.value.set(.963+.034*dt,.986+.025*nt)}let yt=new U,Tt=[d.getObjectByName("BodyL"),d.getObjectByName("BodyR")],mt=-1,Ve=0;function gt(){if(St===mt&&g.rotation.y===Ve)return;mt=St,Ve=g.rotation.y;let D=1,le=-1,pe=-1,ze=1;for(let We=0;We<2;We++)for(let Xe=-1;Xe<=12;Xe++)for(let et of[-1,1])for(let dt of[-.00535,45e-5]){let nt=Math.max(0,Xe)*Math.PI/24,Gt=(We?1:-1)*(Xe<0?0:.0688+.0135*Math.sin(nt)),Bt=et*(.0454+.0135*Math.cos(nt));yt.set(Gt,dt,Bt).applyMatrix4(Tt[We].matrixWorld).project(m),D=Math.min(D,yt.x),le=Math.max(le,yt.x),pe=Math.max(pe,yt.y),ze=Math.min(ze,yt.y)}s.style.clipPath="inset("+[(1-pe)*50-.36,(1-le)*50-.55,(1+ze)*50-.5,(1+D)*50-.55].map(We=>Math.max(0,We).toFixed(2)+"%").join(" ")+")"}function ft(D,le,pe){if(mt=-1,!(!D||!le)){if(e.setPixelRatio(Math.min(Math.max(window.devicePixelRatio||1,pe?1.65:1.75),2.25,3200/D)),e.setSize(D,le,!1),m.clearViewOffset(),m.aspect=1.6,pe){let We=1210*le/D;m.setViewOffset(1600,1e3,390/2,500-We/2,1210,We)}m.updateProjectionMatrix()}}function Qt(D,{dt:le=0,age:pe=0,floatAge:ze=pe,lift:We=0,yaw:Xe=0,coinAmp:et=0,pressure:dt=0,reduced:nt=!1,dial:Gt=0,sheen:Bt=0}={}){cr++,St=sa(D),be(le,nt),$t+=le,Wn=!fs||nt?1:lc(sa($t/fs)),De.blendK.value=Wn;let Ct=De.homeK.value;jt=nt?ri:jt+(ri-jt)*(1-Math.exp(-Math.min(le,48)/68)),Math.abs(jt-ri)<.001&&(jt=ri),Q.value=jt,te.value=1-St,ke.value=Me.value>0?dt:0,ge.value.set(nt||me.value?0:Bt,St),ve.value=+(Le.phase==="connecting"),Ue.value=nt?-.7:Gt*Math.PI*4.5-.8,vi=nt?999:vi+le;let In=sa(vi/360);B.value.z=(1-In)*.31*Math.sin(Math.PI*1.7*In),Y.value=et*(.5-.5*Math.cos(us*pe/2e3))*.5585*+(Le.phase==="on"),Xn=En===dn(Le)?dt:0,he.value.z=Xn,w.value=(.5-.5*Math.cos(us*pe/2e3))*12*et,pt(O,!1,pe,et),pt(G,!0,pe,et),M(St),N(St,ze,We,nt?0:Xe),Ct>1e-4&&re(),gt(),x.value=Z.frame(Wn,le,ze,We,Xn,Ie,nt,Ge.value,ds);let Lt=0,ca=St*70;for(;Lt<hs.length-2&&ca>hs[Lt+1];)Lt++;let la=sa((ca-hs[Lt])/(hs[Lt+1]-hs[Lt]));for(let bn of Ee){let Yt=bn.userData.owner;Yt.startsWith("B3_")&&(bn.visible=Ct*Ge.value[2*tr(Yt)]>.001)}for(let bn of fe){let{u:Yt,o:Gi}=bn;Yt.aMap.value=y[Lt],Yt.bMap.value=y[Lt+1],Yt.mixPose.value=la,Yt.aPose.value.copy(bn.mats[Lt]),Yt.bPose.value.copy(bn.mats[Lt+1]),Yt.opacity.value=Gi.userData.owner.startsWith("B3_")?Ct*Ge.value[2*tr(Gi.userData.owner)]:1,Yt.desaturate.value=Le.phase!=="on"&&Gi.userData.owner==="B3_power_teal"?1:0}for(let{o:bn,u:Yt}of Ce)Yt.shade.value=Bi===bn.userData.owner?Xn:0,Yt.faceOpacity.value=Ct*Ge.value[2*tr(bn.userData.owner)];e.render(f,m)}let ai=new Wr,Xt=new $e;function Vi(D,le){let pe=s.getBoundingClientRect();if(!pe.width||!pe.height||D<pe.left||D>pe.right||le<pe.top||le>pe.bottom)return null;Xt.set((D-pe.left)/pe.width*2-1,1-(le-pe.top)/pe.height*2),ai.setFromCamera(Xt,m);let ze=ai.intersectObjects([...Z.meshes.filter(Ct=>Ct.visible),...ot],!1)[0];if(!ze)return null;let We=ze.object.userData.owner,Xe=ze.uv;if(!Xe)return null;let et=Xe.x*Hn+(We==="B3_mode_thumb"?jt*175:0),dt=Xe.y*An,nt="";if(We.startsWith("B3_power_"))nt="power";else if(We.startsWith("B3_mode_"))nt=et<645?"seg-0":"seg-1";else if(We==="B3_premium")nt="premium";else if(We.startsWith("B3_row_")){let Ct=We.slice(7);nt=Ct==="nl"?"tab-locations":et>780?"fav-"+Ct:"server-"+Ct}else if(We==="ScreenL"||We==="ScreenR"){let Ct=!ze.object.userData.relief&&!If(et,dt)?Ge.value[2*na(ds,et,dt)+1]:0;nt=b.lookup(et,dt-Ct)}let Gt=dt>=540&&dt<=606&&(We==="ScreenL"||We==="ScreenR")&&nt.startsWith("tab-"),Bt=We.startsWith("B3_")?tr(We):na(ds,et,dt);return!Gt&&(Mn||Ge.value[2*Bt]<.62)?null:nt?{id:nt,owner:We,panel:ze.object.userData.relief||""}:null}function Mt(D,le,pe){let ze=[...Z.meshes.filter(nt=>nt.visible&&nt.userData.owner===D),...we.get(D)||[]],We=new $e,Xe=new $e,et=new $e,dt=new $e(le/Hn,pe/An);for(let nt of ze){if(!nt.visible)continue;let Gt=nt.geometry,Bt=Gt.attributes.uv,Ct=Gt.attributes.position,In=Gt.index;if(Bt)for(let Lt=0,ca=In?In.count:Ct.count;Lt<ca;Lt+=3){let la=In?In.getX(Lt):Lt,bn=In?In.getX(Lt+1):Lt+1,Yt=In?In.getX(Lt+2):Lt+2;We.fromBufferAttribute(Bt,la),Xe.fromBufferAttribute(Bt,bn),et.fromBufferAttribute(Bt,Yt);let Gi=(Xe.y-et.y)*(We.x-et.x)+(et.x-Xe.x)*(We.y-et.y);if(Math.abs(Gi)<1e-12)continue;let hc=((Xe.y-et.y)*(dt.x-et.x)+(et.x-Xe.x)*(dt.y-et.y))/Gi,uc=((et.y-We.y)*(dt.x-et.x)+(We.x-et.x)*(dt.y-et.y))/Gi,Eh=1-hc-uc;if(Math.min(hc,uc,Eh)<-2e-5)continue;let fc=new U().fromBufferAttribute(Ct,la).multiplyScalar(hc).addScaledVector(new U().fromBufferAttribute(Ct,bn),uc).addScaledVector(new U().fromBufferAttribute(Ct,Yt),Eh);fc.applyMatrix4(nt.matrixWorld).project(m);let ha=s.getBoundingClientRect();return[ha.left+(fc.x+1)*ha.width/2,ha.top+(1-fc.y)*ha.height/2]}}return null}function qt(){se.dispose(),Z.dispose(),v.forEach(D=>D.dispose()),new Set(Ee.map(D=>D.material)).forEach(D=>D.dispose()),Ee.forEach(D=>D.geometry.dispose()),e.dispose()}function en(D){return[D.backPose.value.toArray(),D.frontPose.value.toArray()]}return{resize:ft,update:Re,render:Qt,hit:Vi,dispose:qt,point:Mt,setPress:it,favorite:He,hover:D=>(D=D||"",Ne===D?!1:(Ne=D,Z.hover(D),!0)),setTelemetry:(D,le)=>{b.telemetry(D,le)&&(J.value.needsUpdate=!0)},moving:()=>Mn||!!Rn||z.value!==Cn||vi<360||Wn<1||jt!==ri||Z.moving(),still:()=>(e.render(f,m),s.toDataURL("image/png")),info:()=>({theme:Fe.value?"dark":"light",objects:we.size,drawMeshes:Ee.length,triangles:e.info.render.triangles,progress:St,page:dn(Le),pageOpacity:ut.value,transition:Mn?"queued":Rn,reveal:{age:qn,slots:ki,alpha:ki.map(D=>Ge.value[2*D]),old:X.value.toArray()},hingeAngle:.130899694*(1-lc(St)),dpr:e.getPixelRatio(),panels:Z.meshes.length,panelHeightMM:Object.fromEntries(Z.meshes.map(D=>[D.userData.relief,D.userData.rect.height*.64*D.scale.y])),plate:x.value,frames:cr,blend:Wn,home:De.homeK.value,yawDegrees:jr.radToDeg(g.rotation.y),optics:{sheen:ge.value.x,sweep:ge.value.y,navDownX:Me.value,navInk:b.navInkBounds},pressure:Xn,pressId:or,thumb:jt,navX:z.value,heart:B.value.z,blue:en(O),gold:en(G),liftMM:Object.fromEntries(H.map(D=>[D.o.name,D.rise]))})}}function rd(s){return new ic({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"})}var Th={nl:["203.0.113",20],de:["198.51.100",45],fi:["192.0.2",70],se:["203.0.113",95],us:["198.51.100",120],jp:["192.0.2",145]},wh=1650;function g_(s){let e=Math.max(0,Math.floor(s/1e3));return[Math.floor(e/3600),Math.floor(e/60)%60,e%60].map(t=>String(t).padStart(2,"0")).join(":")}function ad(){let s="off",e=0,t=0,n="nl",i=0,r="\u2014",a=()=>{s="off",e=t=0,r="\u2014"},o=(c,l)=>{s="connecting",n=l,e=c+wh,t=0,r="\u2014"};return{get phase(){return s},get deadline(){return e},tap(c,l){s==="off"?o(c,l):a()},changeRoute(c,l){s!=="off"&&o(c,l)},settle(c){if(s!=="connecting"||c<e)return!1;s="on",t=e,e=0;let[l,h]=Th[n];return r=l+"."+(h+i++%19),!0},snapshot(c){return{phase:s,server:n,seq:i,elapsed:s==="on"?Math.max(0,c-t):0,remaining:s==="connecting"?Math.max(0,e-c):0}},resume(c,l,h,u){if(!(!c||!Object.hasOwn(Th,u)||c.server!==u||!Number.isSafeInteger(c.seq)||c.seq<0)){if(i=Math.min(c.seq,1e6),n=u,c.phase==="connecting"&&Number.isFinite(c.remaining))s="connecting",e=l+Math.min(wh,Math.max(0,c.remaining))-h;else if(c.phase==="on"&&Number.isFinite(c.elapsed)){s="on",t=l-Math.min(30*864e5,Math.max(0,c.elapsed))-h;let[f,d]=Th[u];r=f+"."+(d+Math.max(0,i-1)%19)}}},view(c){return{phase:s,clock:g_(s==="on"?c-t:0),ip:r,progress:s==="connecting"?Math.min(1,Math.max(0,1-(e-c)/wh)):0,next:s==="on"?1e3-Math.max(0,c-t)%1e3:s==="connecting"?Math.max(1,e-c):0}}}}var x_={nav:{connect:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",locations:"\u041B\u043E\u043A\u0430\u0446\u0438\u0438",profile:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C"},phase:{off:"VPN \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D",connecting:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026",on:"VPN \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0451\u043D"},cta:{off:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C",connecting:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",on:"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C"},time:"\u0412\u0440\u0435\u043C\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",ip:"IP-\u0430\u0434\u0440\u0435\u0441",regular:"\u041E\u0431\u044B\u0447\u043D\u044B\u0439",limited:"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u0430\u044F \u0441\u0435\u0442\u044C",ms:"\u043C\u0441",servers:{nl:["\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B","\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C"],de:["\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F","\u0424\u0440\u0430\u043D\u043A\u0444\u0443\u0440\u0442"],fi:["\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F","\u0425\u0435\u043B\u044C\u0441\u0438\u043D\u043A\u0438"],se:["\u0428\u0432\u0435\u0446\u0438\u044F","\u0421\u0442\u043E\u043A\u0433\u043E\u043B\u044C\u043C"],us:["\u0421\u0428\u0410","\u041D\u044C\u044E-\u0419\u043E\u0440\u043A"],jp:["\u042F\u043F\u043E\u043D\u0438\u044F","\u0422\u043E\u043A\u0438\u043E"]},loc:{lead:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0443 \u0438\u043B\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u043A \u0441\u0430\u043C\u043E\u043C\u0443 \u0431\u044B\u0441\u0442\u0440\u043E\u043C\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0443.",search:"\u0421\u0442\u0440\u0430\u043D\u0430 \u0438\u043B\u0438 \u0433\u043E\u0440\u043E\u0434",saved:"\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",check:"\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0432\u044F\u0437\u044C",checked:"\u0421\u0432\u044F\u0437\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430",fast:"\u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439",fastSub:"\u0421 \u043D\u0430\u0438\u043C\u0435\u043D\u044C\u0448\u0435\u0439 \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u043E\u0439",empty:"\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u043B\u043E\u043A\u0430\u0446\u0438\u0439",noMatch:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"},profile:{caption:"\u0410\u043A\u043A\u0430\u0443\u043D\u0442 Geodema",me:"\u0414\u0435\u043C\u043E-\u043F\u0440\u043E\u0444\u0438\u043B\u044C",demo:"\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442",sub:"\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430",location:"\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u0430\u044F \u043B\u043E\u043A\u0430\u0446\u0438\u044F",saved:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C",plan:"Geodema Premium",active:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E 2 \u0434\u0435\u043A\u0430\u0431\u0440\u044F",preview:"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"},premium:{title:"\u041C\u043E\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430",tag:"Premium",term:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E",date:"2 \u0434\u0435\u043A\u0430\u0431\u0440\u044F",locations:"\u041B\u043E\u043A\u0430\u0446\u0438\u0438",countries:"20+ \u0441\u0442\u0440\u0430\u043D",devices:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430",deviceCount:"\u0414\u043E 5 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E",back:"\u0413\u043E\u0442\u043E\u0432\u043E",note:"\u0414\u0435\u043C\u043E \xB7 \u0431\u0435\u0437 \u043E\u043F\u043B\u0430\u0442\u044B"},shell:{title:"\u041A\u0430\u043A \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C 3D-\u0434\u0435\u043C\u043E",loading:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C 3D\u2026",kicker:"GEODEMA DUO \xB7 \u0418\u041D\u0422\u0415\u0420\u0410\u041A\u0422\u0418\u0412\u041D\u041E\u0415 \u0414\u0415\u041C\u041E",help:"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u0438 \u0434\u043E\u0436\u0434\u0438\u0442\u0435\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043B\u043E\u043A\u0430\u0446\u0438\u044E \u0438\u043B\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044C Premium. \u0421\u0442\u0440\u0435\u043B\u043A\u0438 \u2190 \u2192 \u043C\u0435\u043D\u044F\u044E\u0442 \u0432\u043A\u043B\u0430\u0434\u043A\u0443, \u043F\u0440\u043E\u0431\u0435\u043B \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u0438\u0442\u0430\u043D\u0438\u0435\u043C, Esc \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 Premium.",idle:"\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0431\u0435\u0437 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E VPN-\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F.",compare:"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u0445\u0438\u0440\u043E",canvas:"\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 3D-\u0442\u0435\u043B\u0435\u0444\u043E\u043D Geodema"},say:{ready:"\u0414\u0435\u043C\u043E \u0433\u043E\u0442\u043E\u0432\u043E.",search:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0443 \u0438\u043B\u0438 \u0433\u043E\u0440\u043E\u0434.",input:"\u041F\u043E\u0438\u0441\u043A \u0441\u0442\u0440\u0430\u043D\u044B \u0438\u043B\u0438 \u0433\u043E\u0440\u043E\u0434\u0430",added:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C: ",removed:"\u0418\u0437 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E: ",server:"\u0412\u044B\u0431\u0440\u0430\u043D\u0430 \u043B\u043E\u043A\u0430\u0446\u0438\u044F: ",all:"\u0412\u0441\u0435 \u043B\u043E\u043A\u0430\u0446\u0438\u0438.",saved:"\u0422\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043B\u043E\u043A\u0430\u0446\u0438\u0438.",pending:"\u0414\u0435\u043C\u043E: \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435.",on:"\u0414\u0435\u043C\u043E-VPN \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0451\u043D.",off:"\u0414\u0435\u043C\u043E-VPN \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D.",cancel:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E.",checking:"\u0414\u0435\u043C\u043E: \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B.",fallback:"\u041F\u043E\u043A\u0430\u0437\u0430\u043D \u0441\u0442\u0430\u0442\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u043D\u0434\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430.",restore:"3D \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E, \u0432\u044B\u0431\u043E\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D."}},__={nav:{connect:"Connection",locations:"Locations",profile:"Profile"},phase:{off:"VPN is off",connecting:"Connecting\u2026",on:"VPN connected"},cta:{off:"Connect",connecting:"Cancel",on:"Disconnect"},time:"Connection time",ip:"IP address",regular:"Standard",limited:"Restricted network",ms:"ms",servers:{nl:["Netherlands","Amsterdam"],de:["Germany","Frankfurt"],fi:["Finland","Helsinki"],se:["Sweden","Stockholm"],us:["United States","New York"],jp:["Japan","Tokyo"]},loc:{lead:"Choose a country or connect to the fastest server.",search:"Country or city",saved:"Favorites",check:"Check latency",checked:"Latency checked",fast:"Fastest server",fastSub:"Lowest latency",empty:"No favorite locations yet",noMatch:"No locations found"},profile:{caption:"Geodema account",me:"Demo profile",demo:"Personal account",sub:"Subscription",location:"Selected location",saved:"Favorites",plan:"Geodema Premium",active:"Active until December 2",preview:"View subscription"},premium:{title:"My subscription",tag:"Premium",term:"Active until",date:"December 2",locations:"Locations",countries:"20+ countries",devices:"Devices",deviceCount:"Up to 5 at once",back:"Done",note:"Demo \xB7 no payment"},shell:{title:"Try the 3D demo",loading:"Loading 3D\u2026",kicker:"GEODEMA DUO \xB7 INTERACTIVE DEMO",help:"Press power and wait for the connection. Save a favorite location or open Premium. Use \u2190 \u2192 to switch tabs, Space for power, and Esc to close Premium.",idle:"A visual demo, not a real VPN connection.",compare:"Compare with the original hero",canvas:"Geodema interactive 3D phone"},say:{ready:"Demo ready.",search:"Type a country or city.",input:"Search by country or city",added:"Added to favorites: ",removed:"Removed from favorites: ",server:"Selected location: ",all:"All locations.",saved:"Favorite locations only.",pending:"Demo: establishing a connection.",on:"Demo VPN connected.",off:"Demo VPN is off.",cancel:"Connection canceled.",checking:"Demo latency values updated.",fallback:"Showing the static phone render.",restore:"3D restored. Your selections were kept."}},v_={nav:{connect:"\u8FDE\u63A5",locations:"\u8282\u70B9",profile:"\u6211\u7684"},phase:{off:"VPN \u672A\u8FDE\u63A5",connecting:"\u6B63\u5728\u8FDE\u63A5\u2026",on:"VPN \u5DF2\u8FDE\u63A5"},cta:{off:"\u8FDE\u63A5",connecting:"\u53D6\u6D88",on:"\u65AD\u5F00\u8FDE\u63A5"},time:"\u8FDE\u63A5\u65F6\u957F",ip:"IP \u5730\u5740",regular:"\u6807\u51C6\u6A21\u5F0F",limited:"\u53D7\u9650\u7F51\u7EDC",ms:"\u6BEB\u79D2",servers:{nl:["\u8377\u5170","\u963F\u59C6\u65AF\u7279\u4E39"],de:["\u5FB7\u56FD","\u6CD5\u5170\u514B\u798F"],fi:["\u82AC\u5170","\u8D6B\u5C14\u8F9B\u57FA"],se:["\u745E\u5178","\u65AF\u5FB7\u54E5\u5C14\u6469"],us:["\u7F8E\u56FD","\u7EBD\u7EA6"],jp:["\u65E5\u672C","\u4E1C\u4EAC"]},loc:{lead:"\u9009\u62E9\u56FD\u5BB6\u6216\u8FDE\u63A5\u5230\u5EF6\u8FDF\u6700\u4F4E\u7684\u8282\u70B9\u3002",search:"\u56FD\u5BB6\u6216\u57CE\u5E02",saved:"\u6536\u85CF",check:"\u68C0\u6D4B\u5EF6\u8FDF",checked:"\u5DF2\u68C0\u6D4B\u5EF6\u8FDF",fast:"\u6700\u5FEB\u8282\u70B9",fastSub:"\u81EA\u52A8\u9009\u62E9\u5EF6\u8FDF\u6700\u4F4E\u7684\u8282\u70B9",empty:"\u8FD8\u6CA1\u6709\u6536\u85CF\u7684\u8282\u70B9",noMatch:"\u672A\u627E\u5230\u5339\u914D\u7684\u8282\u70B9"},profile:{caption:"Geodema \u8D26\u6237",me:"\u6F14\u793A\u8D26\u6237",demo:"\u4E2A\u4EBA\u8D26\u6237",sub:"\u8BA2\u9605",location:"\u5F53\u524D\u8282\u70B9",saved:"\u5DF2\u6536\u85CF",plan:"Geodema Premium",active:"\u6709\u6548\u671F\u81F3 12 \u6708 2 \u65E5",preview:"\u67E5\u770B\u8BA2\u9605"},premium:{title:"\u6211\u7684\u8BA2\u9605",tag:"Premium",term:"\u6709\u6548\u671F\u81F3",date:"12 \u6708 2 \u65E5",locations:"\u8282\u70B9",countries:"20 \u591A\u4E2A\u56FD\u5BB6",devices:"\u8BBE\u5907",deviceCount:"\u6700\u591A\u540C\u65F6\u4F7F\u7528 5 \u53F0",back:"\u5B8C\u6210",note:"\u529F\u80FD\u6F14\u793A \xB7 \u65E0\u9700\u4ED8\u6B3E"},shell:{title:"\u4F53\u9A8C 3D \u6F14\u793A",loading:"\u6B63\u5728\u52A0\u8F7D 3D\u2026",kicker:"GEODEMA DUO \xB7 \u4EA4\u4E92\u6F14\u793A",help:"\u70B9\u6309\u7535\u6E90\u6309\u94AE\u5E76\u7B49\u5F85\u8FDE\u63A5\u3002\u4F60\u53EF\u4EE5\u6536\u85CF\u8282\u70B9\u6216\u67E5\u770B Premium \u8BA2\u9605\u3002\u4F7F\u7528 \u2190 \u2192 \u5207\u6362\u6807\u7B7E\u9875\uFF0C\u7A7A\u683C\u952E\u63A7\u5236\u8FDE\u63A5\uFF0CEsc \u5173\u95ED\u8BA2\u9605\u8BE6\u60C5\u3002",idle:"\u6B64\u6F14\u793A\u4E0D\u4F1A\u5EFA\u7ACB\u771F\u5B9E\u7684 VPN \u8FDE\u63A5\u3002",compare:"\u5BF9\u6BD4\u539F\u7248\u9996\u9875",canvas:"Geodema \u4EA4\u4E92\u5F0F 3D \u624B\u673A"},say:{ready:"\u6F14\u793A\u5DF2\u5C31\u7EEA\u3002",search:"\u8F93\u5165\u56FD\u5BB6\u6216\u57CE\u5E02\u3002",input:"\u641C\u7D22\u56FD\u5BB6\u6216\u57CE\u5E02",added:"\u5DF2\u6536\u85CF\uFF1A",removed:"\u5DF2\u53D6\u6D88\u6536\u85CF\uFF1A",server:"\u5F53\u524D\u8282\u70B9\uFF1A",all:"\u663E\u793A\u6240\u6709\u8282\u70B9\u3002",saved:"\u4EC5\u663E\u793A\u6536\u85CF\u7684\u8282\u70B9\u3002",pending:"\u6F14\u793A\uFF1A\u6B63\u5728\u5EFA\u7ACB\u8FDE\u63A5\u3002",on:"\u6F14\u793A VPN \u5DF2\u8FDE\u63A5\u3002",off:"\u6F14\u793A VPN \u5DF2\u65AD\u5F00\u3002",cancel:"\u5DF2\u53D6\u6D88\u8FDE\u63A5\u3002",checking:"\u6F14\u793A\u5EF6\u8FDF\u6570\u636E\u5DF2\u66F4\u65B0\u3002",fallback:"\u6B63\u5728\u663E\u793A\u624B\u673A\u7684\u9759\u6001\u6E32\u67D3\u56FE\u3002",restore:"3D \u5DF2\u6062\u590D\uFF0C\u9009\u62E9\u4ECD\u7136\u4FDD\u7559\u3002"}},Ah={ru:x_,en:__,zh:v_};var Oi=s=>Math.max(0,Math.min(1,s)),ar=s=>s*s*(3-2*s);async function QM(s,e){let t=s.querySelector("[data-duo-model]"),n=s.querySelector("[data-hero-stage]"),i=s.querySelector("[data-hero-banner]"),r=s.querySelector("[data-hero-track]"),a=s.querySelector("[data-hero-text]"),o=s.querySelector("[data-hero-shadow]"),c=matchMedia("(min-width:75rem)"),l=matchMedia("(prefers-reduced-motion:reduce)"),h=s.dataset.duoLocale||document.documentElement.lang,u=h.startsWith("zh")?"zh":h.startsWith("en")?"en":"ru",f=Ah[u],d=ad(),m={dark:document.documentElement.dataset.theme==="dark",tab:"connect",phase:"off",server:"nl",fav:{nl:!0,de:!1,fi:!1,se:!1,us:!1,jp:!1},filter:!1,limited:!1,query:"",checked:!1,premium:!1},_=0,g=0,p,S,b=!1,v=!0,A=0,R=0,C=0,F=0,y=1,T=0,P=1,V=1,O=0,G=0,B=0,Y=0,z=1,Q=!1,ue={},he=0,ge=-1/0,Fe=0,De=0,rt=0,qe=null,J=!1,te=!1,ye=!1,ke=null,Me=new AbortController,Je={signal:Me.signal},ut={passive:!0,signal:Me.signal},tt="geodema:duo:next-locale";try{let H=sessionStorage.getItem(tt);if(H){sessionStorage.removeItem(tt);let W=JSON.parse(H),ie=Date.now()-W.at;if(W.to===u&&ie>=0&&ie<3e4&&rr.includes(W.tab)&&Object.hasOwn(f.servers,W.server)){m.tab=W.tab,m.server=W.server,m.premium=W.premium===!0,m.limited=W.limited===!0,m.filter=W.filter===!0;for(let I of Object.keys(m.fav))m.fav[I]=W.fav?.[I]===!0;d.resume(W.session,performance.now(),ie,m.server),d.settle(performance.now()),m.phase=d.phase}}}catch{}document.addEventListener("click",H=>{let W=H.target.closest?.("a[hreflang]");if(!b||!W||H.button!==0||H.metaKey||H.ctrlKey||H.shiftKey||H.altKey)return;let ie=new URL(W.href,location.href),I=(W.hreflang||"").split("-")[0],re=[...document.querySelectorAll('link[rel~="alternate"][hreflang]')].find(se=>se.hreflang===W.hreflang);if(!(!re||ie.origin!==location.origin||ie.pathname!==new URL(re.href).pathname||I===u||!Object.hasOwn(Ah,I)))try{sessionStorage.setItem(tt,JSON.stringify({to:I,at:Date.now(),tab:m.tab,server:m.server,premium:m.premium,limited:m.limited,filter:m.filter,fav:m.fav,session:d.snapshot(performance.now())}))}catch{}},Je);function Ge(H){let W=document.querySelector("[data-duo-status]");W?W.textContent=H:document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>Ge(H),{once:!0,signal:Me.signal})}function X(){clearTimeout(g),g=0,cancelAnimationFrame(A),clearTimeout(R),A=R=0,G=0}function j(H=!1){if(!ke)return;let W=ke;ke=null,W.remove(),H&&t.focus({preventScroll:!0})}function ce(){b=!1,qe=null,j(),document.activeElement===t&&t.blur(),t.setAttribute("aria-hidden","true"),a.inert=!1,s.removeAttribute("data-duo-text-hidden"),t.tabIndex=-1,t.style.cursor="",n.style.transform="",a.style.opacity="",a.style.transform="",o.style.opacity="",i.style.transform="",X(),e()}function E(){t.dataset.theme=m.dark?"dark":"light",t.dataset.tab=m.tab,t.dataset.power=m.phase,t.dataset.locale=u,t.dataset.favoriteDe=String(m.fav.de),t.dataset.favoriteFi=String(m.fav.fi),t.dataset.server=m.server,t.dataset.filter=m.filter?"saved":"all",t.dataset.network=m.limited?"limited":"regular",t.dataset.query=m.query,t.dataset.premium=String(m.premium),t.setAttribute("aria-label",f.shell.canvas+". "+(m.premium?f.premium.title:f.nav[m.tab])+". "+f.phase[m.phase]+".")}function Ae(H){return d.settle(H)?(m.phase=d.phase,b&&(S.update(m,l.matches),E(),Ge(f.say.on)),!0):!1}function ve(){clearTimeout(_),clearTimeout(g),g=0,m.phase=d.phase,d.deadline&&(_=setTimeout(()=>{J||(Ae(performance.now())?L():d.deadline&&ve())},Math.max(1,Math.ceil(d.deadline-performance.now())+1)))}function Ue(H){let W=d.view(H);return m.tab==="connect"&&!m.premium&&(S.setTelemetry(W.clock,W.ip),t.dataset.elapsed=W.clock,t.dataset.ip=W.ip),W}function me(){ye?F=l.matches?0:Oi(window.scrollY/y):F=l.matches?.62:.48+.52*Oi((window.scrollY-T)/Math.max(1,i.offsetHeight*.86))}function w(){if(!b)return;ye=c.matches,P=parseFloat(getComputedStyle(document.documentElement).fontSize)/16;let H=parseFloat(getComputedStyle(i).top)||0;T=r.getBoundingClientRect().top+window.scrollY,y=Math.max(1,T+r.offsetHeight-i.offsetHeight-H);let W=Math.min(i.offsetHeight,document.documentElement.clientHeight-H)/P;V=Math.min(1,Math.max(.6,(W-48)/954.7)),O=214.7+620.2-W/2,S.resize(t.clientWidth,t.clientHeight,!ye),me(),C=F,Fe=0,L()}function x(H=0){if(ye&&!l.matches){let W=ar(C),ie=Oi(C/.6);n.style.transform="translate3d(0,"+((H-O*W)*P).toFixed(2)+"px,0) scale("+(1+(V-1)*W).toFixed(5)+")",a.style.opacity=String((1-ie)**2),a.style.transform="translateY("+(-56*ie*P).toFixed(2)+"px)",a.inert=ie>.6,s.toggleAttribute("data-duo-text-hidden",ie>.6),o.style.opacity=String((1-ar(Oi(C/.5)))*(1-.06*Math.abs(H)/7))}else n.style.transform="",a.style.opacity="",a.style.transform="",o.style.opacity="",a.inert=!1,s.removeAttribute("data-duo-text-hidden")}function L(H=!0){if(!b||!v||document.hidden||te||(H&&R&&(clearTimeout(R),R=0),A||R))return;let W=()=>{R=0,A=requestAnimationFrame($)};H?W():R=setTimeout(W,Math.max(0,33-(performance.now()-G)-5))}function $(H){if(A=0,!b||!v||document.hidden||te)return;let W=G?Math.min(180,Math.max(0,H-G)):16;G=H;let ie=C;C+=(F-C)*(1-Math.exp(-Math.min(W,48)/65)),Math.abs(C-F)<25e-5&&(C=F);let I=H-ge>170&&C===F;Ae(H);let re=Ue(H),se=l.matches,Te=!se&&H-ge<210?Math.min(1,Math.sqrt(950*Math.abs(C-ie)/Math.max(8,W))):0;Fe=se?0:Fe+(Te-Fe)*(1-Math.exp(-W/(Te>Fe?48:115))),!Te&&Fe<.004&&(Fe=0),!se&&!qe&&(B+=W);let oe=!Q&&!qe&&!ke&&I?1:0;se?(Y=0,z=0):qe?z=0:(z+=(oe-z)*(1-Math.exp(-W/(oe?340:105))),Math.abs(z-oe)<.004&&(z=oe),Y+=W*z),qe||(he+=((I&&!se?1:0)-he)*(1-Math.exp(-W/200))),se&&(he=0);let ee=1-ar(Oi((ye?C:C-.48)/(ye?.035:.12))),de=se?0:ee*ar(Oi((Y-900)/1600)),Le=1-ar(Oi((C-(ye?0:.48))/(ye?.47:.31))),at=se?0:3.6*Math.PI/180*Le*ar(Oi((Y-220)/1150))*Math.sin(2*Math.PI*Y/8400),ot=qe||H<rt?1:0;De=se?qe?.4:0:De+(ot-De)*(1-Math.exp(-W/(ot?36:86))),!ot&&De<.004&&(De=0),x(7*de*Math.sin(2*Math.PI*Y/6400)),ue={age:B,floatAge:Y,lift:de,yaw:at,coinAmp:he,pressure:De,sheen:Fe},S.render(C,{...ue,dt:W,reduced:se,dial:re.progress});let St=C!==F||Fe>0||S.moving()||!se&&(H<rt||Math.abs(ot-De)>.006),$t=!se&&(ee>.001||Le>.001||m.tab==="connect"||m.tab==="profile"||m.premium);St||$t?L(St):(G=0,clearTimeout(g),re.phase==="on"&&m.tab==="connect"&&!m.premium&&(g=setTimeout(()=>L(),Math.ceil(re.next)+2)))}function ne(H,W=!1){S.update(m,l.matches,W),clearTimeout(g),g=0,E(),H&&Ge(H),L()}function Z(){if(ke){ke.focus({preventScroll:!0});return}let H=document.createElement("input");H.type="search",H.className="duo-ime",H.tabIndex=-1,H.lang=u,H.setAttribute("aria-label",f.say.input),H.setAttribute("enterkeyhint","search"),H.autocomplete="off",s.append(H),ke=H,H.value=m.query,H.addEventListener("input",()=>{m.query=H.value.slice(0,64),ne("")}),H.addEventListener("keydown",W=>{(W.key==="Escape"||W.key==="Enter")&&(W.preventDefault(),j(!0))}),H.addEventListener("blur",()=>{ke===H&&j()},{once:!0}),H.focus({preventScroll:!0}),Ge(f.say.search)}function Ee(H){if(!H||!b)return;let W="",ie=!1;H!=="search"&&j();let I=performance.now();if(H==="power"){if(m.tab!=="connect"||m.premium)return;let re=d.phase;d.tap(I,m.server),ve(),W=d.phase==="connecting"?f.say.pending:re==="connecting"?f.say.cancel:f.say.off}else if(H.startsWith("tab-")){let re=H.slice(4);ie=m.tab!==re||m.premium,m.tab=re,m.premium=!1,W=f.nav[re]}else if(H.startsWith("fav-")){let re=H.slice(4);S.favorite(re,l.matches),m.fav[re]=!m.fav[re],W=(m.fav[re]?f.say.added:f.say.removed)+f.servers[re][0]}else if(H.startsWith("server-")||H==="fastest"){let re=H==="fastest"?"nl":H.slice(7);re!==m.server&&(m.server=re,d.changeRoute(I,re),ve()),W=f.say.server+f.servers[re][0]}else if(H.startsWith("seg-")){let re=H==="seg-1";m.limited!==re&&(m.limited=re,d.changeRoute(I,m.server),ve()),W=m.limited?f.limited:f.regular}else if(H==="filter")m.filter=!m.filter,W=m.filter?f.say.saved:f.say.all;else if(H==="check")m.checked=!0,W=f.say.checking;else if(H==="search"){Z();return}else if(H==="premium"||H==="premium-close")m.premium=H==="premium",ie=!0,W=m.premium?f.premium.title:f.nav[m.tab];else return;ne(W,ie)}function fe(H){if(J||!s.isConnected)return;s.classList.remove("hero-static"),b=!0,m.dark=document.documentElement.dataset.theme==="dark",d.settle(performance.now()),m.phase=d.phase,S.update(m,!0),ve();let W=Ue(performance.now());if(E(),w(),x(),S.render(C,{...ue,reduced:l.matches,dial:W.progress}),p.getContext().isContextLost()){te=!0,ce();return}s.querySelector("[data-duo-static-slot]").replaceChildren(),t.removeAttribute("aria-hidden"),t.tabIndex=0,s.dataset.duoState="ready",s.setAttribute("data-duo-ready",""),Ge(H)}let Ce,Be;window.addEventListener("pagehide",H=>{if(H.persisted){X();return}J=!0,b=!1,clearTimeout(_),X(),Me.abort(),Ce?.disconnect(),Be?.disconnect(),j(),S?.dispose(),delete window.duoProof},Je);function ae(){(qe||De)&&(qe=null,rt=0,L())}try{let H=function(){Q=!1,t.style.cursor="",S.hover("")&&L()},W=function(){let ie=!v||document.hidden;s.toggleAttribute("data-paused",ie),ie?(qe=null,H(),Fe=0,ge=-1/0,rt=De=0,X()):(me(),L())};var xe=H,we=W;if(p=rd(t),S=await sd(t,p,m,f,u),J||!s.isConnected){S.dispose();return}t.addEventListener("pointerdown",ie=>{if(!b||!ie.isPrimary||ie.button!==0||qe){ae();return}let I=S.hit(ie.clientX,ie.clientY);I&&(qe={pid:ie.pointerId,...I,x:ie.clientX,y:ie.clientY,scroll:window.scrollY},S.setPress(I.id,I.owner,I.panel),rt=0,L())},ut),window.addEventListener("pointermove",ie=>{qe&&ie.pointerId===qe.pid&&Math.hypot(ie.clientX-qe.x,ie.clientY-qe.y)>7&&ae()},ut),t.addEventListener("pointermove",ie=>{if(b&&ie.pointerType!=="touch"){let I=S.hit(ie.clientX,ie.clientY);Q=!!I,t.style.cursor=I?"pointer":"",S.hover(I?.panel)&&L()}},ut),t.addEventListener("pointerleave",H,ut),window.addEventListener("pointerup",ie=>{let I=qe;if(!(!I||I.pid!==ie.pointerId)){if(qe=null,!b||Math.hypot(ie.clientX-I.x,ie.clientY-I.y)>7||Math.abs(window.scrollY-I.scroll)>3||S.hit(ie.clientX,ie.clientY)?.id!==I.id){L();return}l.matches||(De=Math.max(De,.4),rt=performance.now()+72),Ee(I.id),L()}},ut),window.addEventListener("pointercancel",ae,ut),window.addEventListener("blur",()=>{H(),ae()},Je),window.addEventListener("wheel",ae,ut),window.addEventListener("scroll",()=>{qe&&Math.abs(window.scrollY-qe.scroll)>3&&ae(),Q&&H(),ge=performance.now(),me(),L()},ut),t.addEventListener("keydown",ie=>{if(ie.altKey||ie.ctrlKey||ie.metaKey||ie.repeat)return;let I="",re=rr.indexOf(m.tab);(ie.key==="ArrowLeft"||ie.key==="ArrowRight")&&(I="tab-"+rr[(re+(ie.key==="ArrowRight"?1:2))%3]),(ie.code==="Space"||ie.key==="Enter")&&m.tab==="connect"&&!m.premium&&(I="power"),ie.code==="KeyF"&&m.tab!=="profile"&&!m.premium&&(I="fav-de"),(ie.key==="Escape"||ie.key==="Enter")&&m.premium&&(I="premium-close"),I&&(ie.preventDefault(),S.setPress(I,""),rt=performance.now()+85,Ee(I))},Je),window.addEventListener("resize",w,ut),c.addEventListener("change",w,Je),l.addEventListener("change",w,Je),Ce=new ResizeObserver(w),Ce.observe(t),Be=new IntersectionObserver(([ie])=>{v=ie.isIntersecting,W()},{rootMargin:"0px"}),Be.observe(i),document.addEventListener("visibilitychange",W,Je),t.addEventListener("webglcontextlost",ie=>{ie.preventDefault(),te=!0,ce()},Je),t.addEventListener("webglcontextrestored",()=>{J||(te=!1,fe(f.say.restore))},Je),new URLSearchParams(location.search).has("proof")&&(window.duoProof={point:S.point,info:()=>({...S.info(),session:d.view(performance.now()),loc:u,labels:[...Object.values(f.nav),f.phase[m.phase],f.profile.active]}),frame:S.still}),window.addEventListener("pageshow",ie=>{ie.persisted&&(w(),L())},Je),window.addEventListener("geodema:theme",()=>{if(m.dark=document.documentElement.dataset.theme==="dark",!b||te||J)return;S.update(m,!0),E();let ie=Ue(performance.now());v&&!document.hidden&&S.render(C,{...ue,reduced:l.matches,dial:ie.progress}),L()},Je),fe(f.say.ready)}catch(H){J||(console.warn("Geodema Duo: 3D \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E.",H),ce()),Me.abort(),Ce?.disconnect(),Be?.disconnect(),clearTimeout(_),S?S.dispose():p?.dispose()}}export{QM as startDuo};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
