define(["exports","./arrayRemoveDuplicates-282884ca","./Matrix2-b55a7626","./when-229515d6","./ComponentDatatype-a951e6f0","./PolylinePipeline-b78e4d89"],(function(e,t,i,n,o,r){"use strict";const a={};function s(e,t){return o.CesiumMath.equalsEpsilon(e.latitude,t.latitude,o.CesiumMath.EPSILON10)&&o.CesiumMath.equalsEpsilon(e.longitude,t.longitude,o.CesiumMath.EPSILON10)}const l=new i.Cartographic,h=new i.Cartographic;const c=new Array(2),g=new Array(2),p={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};a.computePositions=function(e,a,u,d,y,m){const P=function(e,o,r,a){const c=(o=t.arrayRemoveDuplicates(o,i.Cartesian3.equalsEpsilon)).length;if(c<2)return;const g=n.defined(a),p=n.defined(r),u=new Array(c),d=new Array(c),y=new Array(c),m=o[0];u[0]=m;const P=e.cartesianToCartographic(m,l);p&&(P.height=r[0]),d[0]=P.height,y[0]=g?a[0]:0;let f=d[0]===y[0],A=1;for(let t=1;t<c;++t){const n=o[t],l=e.cartesianToCartographic(n,h);p&&(l.height=r[t]),f=f&&0===l.height,s(P,l)?P.height<l.height&&(d[A-1]=l.height):(u[A]=n,d[A]=l.height,y[A]=g?a[t]:0,f=f&&d[A]===y[A],i.Cartographic.clone(l,P),++A)}return f||A<2?void 0:(u.length=A,d.length=A,y.length=A,{positions:u,topHeights:d,bottomHeights:y})}(e,a,u,d);if(!n.defined(P))return;a=P.positions,u=P.topHeights,d=P.bottomHeights;const f=a.length,A=f-2;let C,w;const b=o.CesiumMath.chordLength(y,e.maximumRadius),v=p;if(v.minDistance=b,v.ellipsoid=e,m){let e,t=0;for(e=0;e<f-1;e++)t+=r.PolylinePipeline.numberOfPoints(a[e],a[e+1],b)+1;C=new Float64Array(3*t),w=new Float64Array(3*t);const i=c,n=g;v.positions=i,v.height=n;let o=0;for(e=0;e<f-1;e++){i[0]=a[e],i[1]=a[e+1],n[0]=u[e],n[1]=u[e+1];const t=r.PolylinePipeline.generateArc(v);C.set(t,o),n[0]=d[e],n[1]=d[e+1],w.set(r.PolylinePipeline.generateArc(v),o),o+=t.length}}else v.positions=a,v.height=u,C=new Float64Array(r.PolylinePipeline.generateArc(v)),v.height=d,w=new Float64Array(r.PolylinePipeline.generateArc(v));return{bottomPositions:w,topPositions:C,numCorners:A}},e.WallGeometryLibrary=a}));
