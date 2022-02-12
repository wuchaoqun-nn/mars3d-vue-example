define(["exports","./GeometryOffsetAttribute-ab0e4d08","./Transforms-d02c468e","./Matrix2-b55a7626","./RuntimeError-138b7f6a","./ComponentDatatype-a951e6f0","./when-229515d6","./EllipseGeometryLibrary-4a9814e5","./GeometryAttribute-87039926","./GeometryAttributes-b253752a","./GeometryInstance-7645526d","./GeometryPipeline-92dd3555","./IndexDatatype-fd718d71","./VertexFormat-981218c3"],(function(t,e,i,r,n,o,a,s,l,u,m,c,p,y){"use strict";const d=new r.Cartesian3,f=new r.Cartesian3,A=new r.Cartesian3,x=new r.Cartesian3,h=new r.Cartesian2,g=new r.Matrix3,_=new r.Matrix3,b=new i.Quaternion,C=new r.Cartesian3,w=new r.Cartesian3,E=new r.Cartesian3,M=new r.Cartographic,I=new r.Cartesian3,T=new r.Cartesian2,G=new r.Cartesian2;function N(t,n,m){const c=n.vertexFormat,p=n.center,y=n.semiMajorAxis,x=n.semiMinorAxis,N=n.ellipsoid,P=n.stRotation,F=m?t.length/3*2:t.length/3,v=n.shadowVolume,V=c.st?new Float32Array(2*F):void 0,D=c.normal?new Float32Array(3*F):void 0,O=c.tangent?new Float32Array(3*F):void 0,S=c.bitangent?new Float32Array(3*F):void 0,L=v?new Float32Array(3*F):void 0;let R=0,j=C,z=w,k=E;const B=new i.GeographicProjection(N),Y=B.project(N.cartesianToCartographic(p,M),I),H=N.scaleToGeodeticSurface(p,d);N.geodeticSurfaceNormal(H,H);let U=g,Q=_;if(0!==P){let t=i.Quaternion.fromAxisAngle(H,P,b);U=r.Matrix3.fromQuaternion(t,U),t=i.Quaternion.fromAxisAngle(H,-P,b),Q=r.Matrix3.fromQuaternion(t,Q)}else U=r.Matrix3.clone(r.Matrix3.IDENTITY,U),Q=r.Matrix3.clone(r.Matrix3.IDENTITY,Q);const W=r.Cartesian2.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,T),J=r.Cartesian2.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,G);let q=t.length;const Z=m?q:0,K=Z/3*2;for(let e=0;e<q;e+=3){const i=e+1,n=e+2,o=r.Cartesian3.fromArray(t,e,d);if(c.st){const t=r.Matrix3.multiplyByVector(U,o,f),e=B.project(N.cartesianToCartographic(t,M),A);r.Cartesian3.subtract(e,Y,e),h.x=(e.x+y)/(2*y),h.y=(e.y+x)/(2*x),W.x=Math.min(h.x,W.x),W.y=Math.min(h.y,W.y),J.x=Math.max(h.x,J.x),J.y=Math.max(h.y,J.y),m&&(V[R+K]=h.x,V[R+1+K]=h.y),V[R++]=h.x,V[R++]=h.y}(c.normal||c.tangent||c.bitangent||v)&&(j=N.geodeticSurfaceNormal(o,j),v&&(L[e+Z]=-j.x,L[i+Z]=-j.y,L[n+Z]=-j.z),(c.normal||c.tangent||c.bitangent)&&((c.tangent||c.bitangent)&&(z=r.Cartesian3.normalize(r.Cartesian3.cross(r.Cartesian3.UNIT_Z,j,z),z),r.Matrix3.multiplyByVector(Q,z,z)),c.normal&&(D[e]=j.x,D[i]=j.y,D[n]=j.z,m&&(D[e+Z]=-j.x,D[i+Z]=-j.y,D[n+Z]=-j.z)),c.tangent&&(O[e]=z.x,O[i]=z.y,O[n]=z.z,m&&(O[e+Z]=-z.x,O[i+Z]=-z.y,O[n+Z]=-z.z)),c.bitangent&&(k=r.Cartesian3.normalize(r.Cartesian3.cross(j,z,k),k),S[e]=k.x,S[i]=k.y,S[n]=k.z,m&&(S[e+Z]=k.x,S[i+Z]=k.y,S[n+Z]=k.z))))}if(c.st){q=V.length;for(let t=0;t<q;t+=2)V[t]=(V[t]-W.x)/(J.x-W.x),V[t+1]=(V[t+1]-W.y)/(J.y-W.y)}const X=new u.GeometryAttributes;if(c.position){const e=s.EllipseGeometryLibrary.raisePositionsToHeight(t,n,m);X.position=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e})}if(c.st&&(X.st=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:V})),c.normal&&(X.normal=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:D})),c.tangent&&(X.tangent=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:O})),c.bitangent&&(X.bitangent=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:S})),v&&(X.extrudeDirection=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:L})),m&&a.defined(n.offsetAttribute)){let t=new Uint8Array(F);if(n.offsetAttribute===e.GeometryOffsetAttribute.TOP)t=e.arrayFill(t,1,0,F/2);else{const i=n.offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1;t=e.arrayFill(t,i)}X.applyOffset=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}return X}function P(t){const e=new Array(t*(t+1)*12-6);let i,r,n,o,a,s=0;for(i=0,n=1,o=0;o<3;o++)e[s++]=n++,e[s++]=i,e[s++]=n;for(o=2;o<t+1;++o){for(n=o*(o+1)-1,i=(o-1)*o-1,e[s++]=n++,e[s++]=i,e[s++]=n,r=2*o,a=0;a<r-1;++a)e[s++]=n,e[s++]=i++,e[s++]=i,e[s++]=n++,e[s++]=i,e[s++]=n;e[s++]=n++,e[s++]=i,e[s++]=n}for(r=2*t,++n,++i,o=0;o<r-1;++o)e[s++]=n,e[s++]=i++,e[s++]=i,e[s++]=n++,e[s++]=i,e[s++]=n;for(e[s++]=n,e[s++]=i++,e[s++]=i,e[s++]=n++,e[s++]=i++,e[s++]=i,++i,o=t-1;o>1;--o){for(e[s++]=i++,e[s++]=i,e[s++]=n,r=2*o,a=0;a<r-1;++a)e[s++]=n,e[s++]=i++,e[s++]=i,e[s++]=n++,e[s++]=i,e[s++]=n;e[s++]=i++,e[s++]=i++,e[s++]=n++}for(o=0;o<3;o++)e[s++]=i++,e[s++]=i,e[s++]=n;return e}let F=new r.Cartesian3;const v=new i.BoundingSphere,V=new i.BoundingSphere;function D(t){const n=t.center,y=t.ellipsoid,_=t.semiMajorAxis;let F=r.Cartesian3.multiplyByScalar(y.geodeticSurfaceNormal(n,d),t.height,d);v.center=r.Cartesian3.add(n,F,v.center),v.radius=_,F=r.Cartesian3.multiplyByScalar(y.geodeticSurfaceNormal(n,F),t.extrudedHeight,F),V.center=r.Cartesian3.add(n,F,V.center),V.radius=_;const D=s.EllipseGeometryLibrary.computeEllipsePositions(t,!0,!0),O=D.positions,S=D.numPts,L=D.outerPositions,R=i.BoundingSphere.union(v,V),j=N(O,t,!0);let z=P(S);const k=z.length;z.length=2*k;const B=O.length/3;for(let t=0;t<k;t+=3)z[t+k]=z[t+2]+B,z[t+1+k]=z[t+1]+B,z[t+2+k]=z[t]+B;const Y=p.IndexDatatype.createTypedArray(2*B/3,z),H=new l.Geometry({attributes:j,indices:Y,primitiveType:l.PrimitiveType.TRIANGLES}),U=function(t,n){const s=n.vertexFormat,m=n.center,c=n.semiMajorAxis,p=n.semiMinorAxis,y=n.ellipsoid,_=n.height,N=n.extrudedHeight,P=n.stRotation,F=t.length/3*2,v=new Float64Array(3*F),V=s.st?new Float32Array(2*F):void 0,D=s.normal?new Float32Array(3*F):void 0,O=s.tangent?new Float32Array(3*F):void 0,S=s.bitangent?new Float32Array(3*F):void 0,L=n.shadowVolume,R=L?new Float32Array(3*F):void 0;let j=0,z=C,k=w,B=E;const Y=new i.GeographicProjection(y),H=Y.project(y.cartesianToCartographic(m,M),I),U=y.scaleToGeodeticSurface(m,d);y.geodeticSurfaceNormal(U,U);const Q=i.Quaternion.fromAxisAngle(U,P,b),W=r.Matrix3.fromQuaternion(Q,g),J=r.Cartesian2.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,T),q=r.Cartesian2.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,G);let Z=t.length;const K=Z/3*2;for(let e=0;e<Z;e+=3){const i=e+1,n=e+2;let o,a=r.Cartesian3.fromArray(t,e,d);if(s.st){const t=r.Matrix3.multiplyByVector(W,a,f),e=Y.project(y.cartesianToCartographic(t,M),A);r.Cartesian3.subtract(e,H,e),h.x=(e.x+c)/(2*c),h.y=(e.y+p)/(2*p),J.x=Math.min(h.x,J.x),J.y=Math.min(h.y,J.y),q.x=Math.max(h.x,q.x),q.y=Math.max(h.y,q.y),V[j+K]=h.x,V[j+1+K]=h.y,V[j++]=h.x,V[j++]=h.y}a=y.scaleToGeodeticSurface(a,a),o=r.Cartesian3.clone(a,f),z=y.geodeticSurfaceNormal(a,z),L&&(R[e+Z]=-z.x,R[i+Z]=-z.y,R[n+Z]=-z.z);let l=r.Cartesian3.multiplyByScalar(z,_,x);if(a=r.Cartesian3.add(a,l,a),l=r.Cartesian3.multiplyByScalar(z,N,l),o=r.Cartesian3.add(o,l,o),s.position&&(v[e+Z]=o.x,v[i+Z]=o.y,v[n+Z]=o.z,v[e]=a.x,v[i]=a.y,v[n]=a.z),s.normal||s.tangent||s.bitangent){B=r.Cartesian3.clone(z,B);const l=r.Cartesian3.fromArray(t,(e+3)%Z,x);r.Cartesian3.subtract(l,a,l);const u=r.Cartesian3.subtract(o,a,A);z=r.Cartesian3.normalize(r.Cartesian3.cross(u,l,z),z),s.normal&&(D[e]=z.x,D[i]=z.y,D[n]=z.z,D[e+Z]=z.x,D[i+Z]=z.y,D[n+Z]=z.z),s.tangent&&(k=r.Cartesian3.normalize(r.Cartesian3.cross(B,z,k),k),O[e]=k.x,O[i]=k.y,O[n]=k.z,O[e+Z]=k.x,O[e+1+Z]=k.y,O[e+2+Z]=k.z),s.bitangent&&(S[e]=B.x,S[i]=B.y,S[n]=B.z,S[e+Z]=B.x,S[i+Z]=B.y,S[n+Z]=B.z)}}if(s.st){Z=V.length;for(let t=0;t<Z;t+=2)V[t]=(V[t]-J.x)/(q.x-J.x),V[t+1]=(V[t+1]-J.y)/(q.y-J.y)}const X=new u.GeometryAttributes;if(s.position&&(X.position=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:v})),s.st&&(X.st=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:V})),s.normal&&(X.normal=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:D})),s.tangent&&(X.tangent=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:O})),s.bitangent&&(X.bitangent=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:S})),L&&(X.extrudeDirection=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R})),a.defined(n.offsetAttribute)){let t=new Uint8Array(F);if(n.offsetAttribute===e.GeometryOffsetAttribute.TOP)t=e.arrayFill(t,1,0,F/2);else{const i=n.offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1;t=e.arrayFill(t,i)}X.applyOffset=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}return X}(L,t);z=function(t){const e=t.length/3,i=p.IndexDatatype.createTypedArray(e,6*e);let r=0;for(let t=0;t<e;t++){const n=t,o=t+e,a=(n+1)%e,s=a+e;i[r++]=n,i[r++]=o,i[r++]=a,i[r++]=a,i[r++]=o,i[r++]=s}return i}(L);const Q=p.IndexDatatype.createTypedArray(2*L.length/3,z),W=new l.Geometry({attributes:U,indices:Q,primitiveType:l.PrimitiveType.TRIANGLES}),J=c.GeometryPipeline.combineInstances([new m.GeometryInstance({geometry:H}),new m.GeometryInstance({geometry:W})]);return{boundingSphere:R,attributes:J[0].attributes,indices:J[0].indices}}function O(t,e,i,n,a,l,u){const m=s.EllipseGeometryLibrary.computeEllipsePositions({center:t,semiMajorAxis:e,semiMinorAxis:i,rotation:n,granularity:a},!1,!0).outerPositions,c=m.length/3,p=new Array(c);for(let t=0;t<c;++t)p[t]=r.Cartesian3.fromArray(m,3*t);const y=r.Rectangle.fromCartesianArray(p,l,u);return y.width>o.CesiumMath.PI&&(y.north=y.north>0?o.CesiumMath.PI_OVER_TWO-o.CesiumMath.EPSILON7:y.north,y.south=y.south<0?o.CesiumMath.EPSILON7-o.CesiumMath.PI_OVER_TWO:y.south,y.east=o.CesiumMath.PI,y.west=-o.CesiumMath.PI),y}function S(t){const e=(t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT)).center,i=a.defaultValue(t.ellipsoid,r.Ellipsoid.WGS84),n=t.semiMajorAxis,s=t.semiMinorAxis,l=a.defaultValue(t.granularity,o.CesiumMath.RADIANS_PER_DEGREE),u=a.defaultValue(t.vertexFormat,y.VertexFormat.DEFAULT),m=a.defaultValue(t.height,0),c=a.defaultValue(t.extrudedHeight,m);this._center=r.Cartesian3.clone(e),this._semiMajorAxis=n,this._semiMinorAxis=s,this._ellipsoid=r.Ellipsoid.clone(i),this._rotation=a.defaultValue(t.rotation,0),this._stRotation=a.defaultValue(t.stRotation,0),this._height=Math.max(c,m),this._granularity=l,this._vertexFormat=y.VertexFormat.clone(u),this._extrudedHeight=Math.min(c,m),this._shadowVolume=a.defaultValue(t.shadowVolume,!1),this._workerName="createEllipseGeometry",this._offsetAttribute=t.offsetAttribute,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0}S.packedLength=r.Cartesian3.packedLength+r.Ellipsoid.packedLength+y.VertexFormat.packedLength+9,S.pack=function(t,e,i){return i=a.defaultValue(i,0),r.Cartesian3.pack(t._center,e,i),i+=r.Cartesian3.packedLength,r.Ellipsoid.pack(t._ellipsoid,e,i),i+=r.Ellipsoid.packedLength,y.VertexFormat.pack(t._vertexFormat,e,i),i+=y.VertexFormat.packedLength,e[i++]=t._semiMajorAxis,e[i++]=t._semiMinorAxis,e[i++]=t._rotation,e[i++]=t._stRotation,e[i++]=t._height,e[i++]=t._granularity,e[i++]=t._extrudedHeight,e[i++]=t._shadowVolume?1:0,e[i]=a.defaultValue(t._offsetAttribute,-1),e};const L=new r.Cartesian3,R=new r.Ellipsoid,j=new y.VertexFormat,z={center:L,ellipsoid:R,vertexFormat:j,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,stRotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};S.unpack=function(t,e,i){e=a.defaultValue(e,0);const n=r.Cartesian3.unpack(t,e,L);e+=r.Cartesian3.packedLength;const o=r.Ellipsoid.unpack(t,e,R);e+=r.Ellipsoid.packedLength;const s=y.VertexFormat.unpack(t,e,j);e+=y.VertexFormat.packedLength;const l=t[e++],u=t[e++],m=t[e++],c=t[e++],p=t[e++],d=t[e++],f=t[e++],A=1===t[e++],x=t[e];return a.defined(i)?(i._center=r.Cartesian3.clone(n,i._center),i._ellipsoid=r.Ellipsoid.clone(o,i._ellipsoid),i._vertexFormat=y.VertexFormat.clone(s,i._vertexFormat),i._semiMajorAxis=l,i._semiMinorAxis=u,i._rotation=m,i._stRotation=c,i._height=p,i._granularity=d,i._extrudedHeight=f,i._shadowVolume=A,i._offsetAttribute=-1===x?void 0:x,i):(z.height=p,z.extrudedHeight=f,z.granularity=d,z.stRotation=c,z.rotation=m,z.semiMajorAxis=l,z.semiMinorAxis=u,z.shadowVolume=A,z.offsetAttribute=-1===x?void 0:x,new S(z))},S.computeRectangle=function(t,e){const i=(t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT)).center,n=a.defaultValue(t.ellipsoid,r.Ellipsoid.WGS84),s=t.semiMajorAxis,l=t.semiMinorAxis,u=a.defaultValue(t.granularity,o.CesiumMath.RADIANS_PER_DEGREE);return O(i,s,l,a.defaultValue(t.rotation,0),u,n,e)},S.createGeometry=function(t){if(t._semiMajorAxis<=0||t._semiMinorAxis<=0)return;const n=t._height,u=t._extrudedHeight,m=!o.CesiumMath.equalsEpsilon(n,u,0,o.CesiumMath.EPSILON2);t._center=t._ellipsoid.scaleToGeodeticSurface(t._center,t._center);const c={center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,ellipsoid:t._ellipsoid,rotation:t._rotation,height:n,granularity:t._granularity,vertexFormat:t._vertexFormat,stRotation:t._stRotation};let y;if(m)c.extrudedHeight=u,c.shadowVolume=t._shadowVolume,c.offsetAttribute=t._offsetAttribute,y=D(c);else if(y=function(t){const e=t.center;F=r.Cartesian3.multiplyByScalar(t.ellipsoid.geodeticSurfaceNormal(e,F),t.height,F),F=r.Cartesian3.add(e,F,F);const n=new i.BoundingSphere(F,t.semiMajorAxis),o=s.EllipseGeometryLibrary.computeEllipsePositions(t,!0,!1),a=o.positions,l=o.numPts,u=N(a,t,!1);let m=P(l);return m=p.IndexDatatype.createTypedArray(a.length/3,m),{boundingSphere:n,attributes:u,indices:m}}(c),a.defined(t._offsetAttribute)){const i=y.attributes.position.values.length,r=new Uint8Array(i/3),n=t._offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(r,n),y.attributes.applyOffset=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}return new l.Geometry({attributes:y.attributes,indices:y.indices,primitiveType:l.PrimitiveType.TRIANGLES,boundingSphere:y.boundingSphere,offsetAttribute:t._offsetAttribute})},S.createShadowVolume=function(t,e,i){const r=t._granularity,n=t._ellipsoid,o=e(r,n),a=i(r,n);return new S({center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,ellipsoid:n,rotation:t._rotation,stRotation:t._stRotation,granularity:r,extrudedHeight:o,height:a,vertexFormat:y.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(S.prototype,{rectangle:{get:function(){return a.defined(this._rectangle)||(this._rectangle=O(this._center,this._semiMajorAxis,this._semiMinorAxis,this._rotation,this._granularity,this._ellipsoid)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return a.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){const e=-t._stRotation;if(0===e)return[0,0,0,1,1,0];const i=s.EllipseGeometryLibrary.computeEllipsePositions({center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,rotation:t._rotation,granularity:t._granularity},!1,!0).outerPositions,n=i.length/3,o=new Array(n);for(let t=0;t<n;++t)o[t]=r.Cartesian3.fromArray(i,3*t);const a=t._ellipsoid,u=t.rectangle;return l.Geometry._textureCoordinateRotationPoints(o,e,a,u)}(this)),this._textureCoordinateRotationPoints}}}),t.EllipseGeometry=S}));
