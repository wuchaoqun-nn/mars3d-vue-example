/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.95.1
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["./arrayRemoveDuplicates-47bdde2a","./BoundingRectangle-07d39c4e","./Transforms-32486356","./Matrix2-9e784742","./RuntimeError-9120af11","./ComponentDatatype-162d3ed7","./CoplanarPolygonGeometryLibrary-ad444309","./defaultValue-21bb911f","./GeometryAttribute-0d10a668","./GeometryAttributes-4d96e366","./GeometryInstance-8afb910a","./GeometryPipeline-fe864367","./IndexDatatype-2cb75364","./PolygonGeometryLibrary-6fe849dd","./PolygonPipeline-730d2db3","./VertexFormat-644f8dab","./_commonjsHelpers-3aae1032-71d905b2","./combine-b848b11a","./WebGLConstants-4c5efd09","./OrientedBoundingBox-a23053f6","./EllipsoidTangentPlane-3e6487f3","./AxisAlignedBoundingBox-593e1bc0","./IntersectionTests-1c55b9ae","./Plane-d3876933","./AttributeCompression-cc24fe14","./EncodedCartesian3-787eabe7","./ArcType-3f30c89f","./EllipsoidRhumbLine-46f3022e"],(function(e,t,n,o,a,r,i,s,l,c,y,p,d,u,m,g,b,f,C,h,x,P,A,L,w,G,F,v){"use strict";const E=new o.Cartesian3,_=new t.BoundingRectangle,T=new o.Cartesian2,k=new o.Cartesian2,D=new o.Cartesian3,V=new o.Cartesian3,R=new o.Cartesian3,H=new o.Cartesian3,I=new o.Cartesian3,M=new o.Cartesian3,B=new n.Quaternion,O=new o.Matrix3,z=new o.Matrix3,S=new o.Cartesian3;function N(e,t,a,i,y,p,u,g,b){const f=e.positions;let C=m.PolygonPipeline.triangulate(e.positions2D,e.holes);C.length<3&&(C=[0,1,2]);const h=d.IndexDatatype.createTypedArray(f.length,C.length);h.set(C);let x=O;if(0!==i){let e=n.Quaternion.fromAxisAngle(u,i,B);if(x=o.Matrix3.fromQuaternion(e,x),t.tangent||t.bitangent){e=n.Quaternion.fromAxisAngle(u,-i,B);const a=o.Matrix3.fromQuaternion(e,z);g=o.Cartesian3.normalize(o.Matrix3.multiplyByVector(a,g,g),g),t.bitangent&&(b=o.Cartesian3.normalize(o.Cartesian3.cross(u,g,b),b))}}else x=o.Matrix3.clone(o.Matrix3.IDENTITY,x);const P=k;t.st&&(P.x=a.x,P.y=a.y);const A=f.length,L=3*A,w=new Float64Array(L),G=t.normal?new Float32Array(L):void 0,F=t.tangent?new Float32Array(L):void 0,v=t.bitangent?new Float32Array(L):void 0,_=t.st?new Float32Array(2*A):void 0;let D=0,V=0,R=0,H=0,I=0;for(let e=0;e<A;e++){const n=f[e];if(w[D++]=n.x,w[D++]=n.y,w[D++]=n.z,t.st)if(s.defined(y)&&y.positions.length===A)_[I++]=y.positions[e].x,_[I++]=y.positions[e].y;else{const e=p(o.Matrix3.multiplyByVector(x,n,E),T);o.Cartesian2.subtract(e,P,e);const t=r.CesiumMath.clamp(e.x/a.width,0,1),i=r.CesiumMath.clamp(e.y/a.height,0,1);_[I++]=t,_[I++]=i}t.normal&&(G[V++]=u.x,G[V++]=u.y,G[V++]=u.z),t.tangent&&(F[H++]=g.x,F[H++]=g.y,F[H++]=g.z),t.bitangent&&(v[R++]=b.x,v[R++]=b.y,v[R++]=b.z)}const M=new c.GeometryAttributes;return t.position&&(M.position=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:w})),t.normal&&(M.normal=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),t.tangent&&(M.tangent=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:F})),t.bitangent&&(M.bitangent=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:v})),t.st&&(M.st=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:_})),new l.Geometry({attributes:M,indices:h,primitiveType:l.PrimitiveType.TRIANGLES})}function Q(e){const t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).polygonHierarchy,n=e.textureCoordinates,a=s.defaultValue(e.vertexFormat,g.VertexFormat.DEFAULT);this._vertexFormat=g.VertexFormat.clone(a),this._polygonHierarchy=t,this._stRotation=s.defaultValue(e.stRotation,0),this._ellipsoid=o.Ellipsoid.clone(s.defaultValue(e.ellipsoid,o.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this._textureCoordinates=n,this.packedLength=u.PolygonGeometryLibrary.computeHierarchyPackedLength(t,o.Cartesian3)+g.VertexFormat.packedLength+o.Ellipsoid.packedLength+(s.defined(n)?u.PolygonGeometryLibrary.computeHierarchyPackedLength(n,o.Cartesian2):1)+2}Q.fromPositions=function(e){return new Q({polygonHierarchy:{positions:(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid,textureCoordinates:e.textureCoordinates})},Q.pack=function(e,t,n){return n=s.defaultValue(n,0),n=u.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n,o.Cartesian3),o.Ellipsoid.pack(e._ellipsoid,t,n),n+=o.Ellipsoid.packedLength,g.VertexFormat.pack(e._vertexFormat,t,n),n+=g.VertexFormat.packedLength,t[n++]=e._stRotation,s.defined(e._textureCoordinates)?n=u.PolygonGeometryLibrary.packPolygonHierarchy(e._textureCoordinates,t,n,o.Cartesian2):t[n++]=-1,t[n++]=e.packedLength,t};const j=o.Ellipsoid.clone(o.Ellipsoid.UNIT_SPHERE),U=new g.VertexFormat,Y={polygonHierarchy:{}};return Q.unpack=function(e,t,n){t=s.defaultValue(t,0);const a=u.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,o.Cartesian3);t=a.startingIndex,delete a.startingIndex;const r=o.Ellipsoid.unpack(e,t,j);t+=o.Ellipsoid.packedLength;const i=g.VertexFormat.unpack(e,t,U);t+=g.VertexFormat.packedLength;const l=e[t++],c=-1===e[t]?void 0:u.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,o.Cartesian2);s.defined(c)?(t=c.startingIndex,delete c.startingIndex):t++;const y=e[t++];return s.defined(n)||(n=new Q(Y)),n._polygonHierarchy=a,n._ellipsoid=o.Ellipsoid.clone(r,n._ellipsoid),n._vertexFormat=g.VertexFormat.clone(i,n._vertexFormat),n._stRotation=l,n._textureCoordinates=c,n.packedLength=y,n},Q.createGeometry=function(t){const a=t._vertexFormat,c=t._polygonHierarchy,m=t._stRotation,g=t._textureCoordinates,b=s.defined(g);let f=c.positions;if(f=e.arrayRemoveDuplicates(f,o.Cartesian3.equalsEpsilon,!0),f.length<3)return;let C=D,h=V,x=R,P=I;const A=M;if(!i.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(f,H,P,A))return;if(C=o.Cartesian3.cross(P,A,C),C=o.Cartesian3.normalize(C,C),!o.Cartesian3.equalsEpsilon(H,o.Cartesian3.ZERO,r.CesiumMath.EPSILON6)){const e=t._ellipsoid.geodeticSurfaceNormal(H,S);o.Cartesian3.dot(C,e)<0&&(C=o.Cartesian3.negate(C,C),P=o.Cartesian3.negate(P,P))}const L=i.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(H,P,A),w=i.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(H,P,A);a.tangent&&(h=o.Cartesian3.clone(P,h)),a.bitangent&&(x=o.Cartesian3.clone(A,x));const G=u.PolygonGeometryLibrary.polygonsFromHierarchy(c,b,L,!1),F=G.hierarchy,v=G.polygons,E=b?u.PolygonGeometryLibrary.polygonsFromHierarchy(g,!0,(function(e){return e}),!1).polygons:void 0;if(0===F.length)return;f=F[0].outerRing;const T=n.BoundingSphere.fromPoints(f),k=u.PolygonGeometryLibrary.computeBoundingRectangle(C,w,f,m,_),B=[];for(let e=0;e<v.length;e++){const t=new y.GeometryInstance({geometry:N(v[e],a,k,m,b?E[e]:void 0,w,C,h,x)});B.push(t)}const O=p.GeometryPipeline.combineInstances(B)[0];O.attributes.position.values=new Float64Array(O.attributes.position.values),O.indices=d.IndexDatatype.createTypedArray(O.attributes.position.values.length/3,O.indices);const z=O.attributes;return a.position||delete z.position,new l.Geometry({attributes:z,indices:O.indices,primitiveType:O.primitiveType,boundingSphere:T})},function(e,t){return s.defined(t)&&(e=Q.unpack(e,t)),Q.createGeometry(e)}}));
