!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,n,i,r=e={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var c,l=[],u=!1,h=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&f())}function f(){if(!u){var t=a(d);u=!0;for(var e=l.length;e;){for(c=l,l=[];++h<e;)c&&c[h].run();h=-1,e=l.length}c=null,u=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{return i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new p(t,e)),1!==l.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new v;const c=r<<2|s>>4;if(i.push(c),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w=function(t){return function(t){const e=g(t);return y.encodeByteArray(e,!0)}(t).replace(/\./g,"")},b=function(t){try{return y.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,_=()=>{try{return E()||(()=>{if(void 0===e||void 0===e.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&b(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},T=t=>{var e,n;return null===(n=null===(e=_())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},I=t=>{const e=T(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},k=()=>{var t;return null===(t=_())||void 0===t?void 0:t.config},S=t=>{var e;return null===(e=_())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[w(JSON.stringify({alg:"none",type:"JWT"})),w(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function x(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function R(){const t=N();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function O(){try{return"object"==typeof indexedDB}catch(t){return!1}}class D extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(P,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new D(i,o,n)}}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function U(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(F(n)&&F(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function F(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function V(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function j(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e){const n=new q(t,e);return n.subscribe.bind(n)}class q{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=$),void 0===i.error&&(i.error=$),void 0===i.complete&&(i.complete=$);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t){return t&&t._delegate?t._delegate:t}class K{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new C;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:W})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=W){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=W){return this.instances.has(t)}getOptions(t=W){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===W?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=W){return this.component?this.component.multipleInstances?t:W:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Q{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new G(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=[];var X,Y;(Y=X||(X={}))[Y.DEBUG=0]="DEBUG",Y[Y.VERBOSE=1]="VERBOSE",Y[Y.INFO=2]="INFO",Y[Y.WARN=3]="WARN",Y[Y.ERROR=4]="ERROR",Y[Y.SILENT=5]="SILENT";const Z={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},tt=X.INFO,et={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},nt=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=et[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class it{constructor(t){this.name=t,this._logLevel=tt,this._logHandler=nt,this._userLogHandler=null,J.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in X))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Z[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...t),this._logHandler(this,X.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...t),this._logHandler(this,X.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,X.INFO,...t),this._logHandler(this,X.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,X.WARN,...t),this._logHandler(this,X.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...t),this._logHandler(this,X.ERROR,...t)}}const rt=(t,e)=>e.some((e=>t instanceof e));let st,ot;const at=new WeakMap,ct=new WeakMap,lt=new WeakMap,ut=new WeakMap,ht=new WeakMap;let dt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ct.get(t);if("objectStoreNames"===e)return t.objectStoreNames||lt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ft(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ot||(ot=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(gt(this),e),mt(at.get(this))}:function(...e){return mt(t.apply(gt(this),e))}:function(e,...n){const i=t.call(gt(this),e,...n);return lt.set(i,e.sort?e.sort():[e]),mt(i)}}function pt(t){return"function"==typeof t?ft(t):(t instanceof IDBTransaction&&function(t){if(ct.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));ct.set(t,e)}(t),rt(t,st||(st=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,dt):t)}function mt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(mt(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&at.set(e,t)})).catch((()=>{})),ht.set(e,t),e}(t);if(ut.has(t))return ut.get(t);const e=pt(t);return e!==t&&(ut.set(t,e),ht.set(e,t)),e}const gt=t=>ht.get(t);function yt(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=mt(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(mt(o.result),t.oldVersion,t.newVersion,mt(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const vt=["get","getKey","getAll","getAllKeys","count"],wt=["put","add","delete","clear"],bt=new Map;function Et(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(bt.get(e))return bt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=wt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!vt.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return bt.set(e,s),s}dt=(t=>({...t,get:(e,n,i)=>Et(e,n)||t.get(e,n,i),has:(e,n)=>!!Et(e,n)||t.has(e,n)}))(dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Tt="@firebase/app",It="0.9.15",kt=new it("@firebase/app"),St="[DEFAULT]",Ct={[Tt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},At=new Map,Nt=new Map;function xt(t,e){try{t.container.addComponent(e)}catch(n){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rt(t){const e=t.name;if(Nt.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;Nt.set(e,t);for(const e of At.values())xt(e,t);return!0}function Ot(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dt=new L("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new K("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="10.1.0";function Mt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:St,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Dt.create("bad-app-name",{appName:String(r)});if(n||(n=k()),!n)throw Dt.create("no-options");const s=At.get(r);if(s){if(U(n,s.options)&&U(i,s.config))return s;throw Dt.create("duplicate-app",{appName:r})}const o=new Q(r);for(const t of Nt.values())o.addComponent(t);const a=new Lt(n,i,o);return At.set(r,a),a}function Ut(t=St){const e=At.get(t);if(!e&&t===St&&k())return Mt();if(!e)throw Dt.create("no-app",{appName:t});return e}function Ft(t,e,n){var i;let r=null!==(i=Ct[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void kt.warn(t.join(" "))}Rt(new K(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt="firebase-heartbeat-database",Vt=1,jt="firebase-heartbeat-store";let zt=null;function qt(){return zt||(zt=yt(Bt,Vt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(jt)}}).catch((t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})}))),zt}async function $t(t,e){try{const n=(await qt()).transaction(jt,"readwrite"),i=n.objectStore(jt);await i.put(e,Ht(t)),await n.done}catch(t){if(t instanceof D)kt.warn(t.message);else{const e=Dt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});kt.warn(e.message)}}}function Ht(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Wt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Wt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Qt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=w(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wt(){return(new Date).toISOString().substring(0,10)}class Gt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!O()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{const e=await qt();return await e.transaction(jt).objectStore(jt).get(Ht(t))}catch(t){if(t instanceof D)kt.warn(t.message);else{const e=Dt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});kt.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return $t(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return $t(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Qt(t){return w(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jt;Jt="",Rt(new K("platform-logger",(t=>new _t(t)),"PRIVATE")),Rt(new K("heartbeat",(t=>new Kt(t)),"PRIVATE")),Ft(Tt,It,Jt),Ft(Tt,It,"esm2017"),Ft("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ft("firebase","10.1.0","app");function Xt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function Yt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zt=Yt,te=new L("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ee=new it("@firebase/auth");function ne(t,...e){ee.logLevel<=X.ERROR&&ee.error(`Auth (${Pt}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,...e){throw oe(t,...e)}function re(t,...e){return oe(t,...e)}function se(t,e,n){const i=Object.assign(Object.assign({},Zt()),{[e]:n});return new L("auth","Firebase",i).create(e,{appName:t.name})}function oe(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return te.create(t,...e)}function ae(t,e,...n){if(!t)throw oe(e,...n)}function ce(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ne(e),new Error(e)}function le(t,e){t||ce(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function he(){return"http:"===de()||"https:"===de()}function de(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(he()||x()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(t,e){this.shortDelay=t,this.longDelay=e,le(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return fe()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,e){le(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ce("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ce("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ce("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},ve=new pe(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function be(t,e,n,i,r={}){return Ee(t,r,(async()=>{let r={},s={};i&&("GET"===e?s=i:r={body:JSON.stringify(i)});const o=B(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ge.fetch()(Te(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ee(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ye),e);try{const e=new Ie(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw ke(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ke(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ke(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw ke(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw se(t,a,o);ie(t,a)}}catch(e){if(e instanceof D)throw e;ie(t,"network-request-failed",{message:String(e)})}}async function _e(t,e,n,i,r={}){const s=await be(t,e,n,i,r);return"mfaPendingCredential"in s&&ie(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Te(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?me(t.config,r):`${t.config.apiScheme}://${r}`}class Ie{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(re(this.auth,"network-request-failed"))),ve.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ke(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=re(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Se(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){return 1e3*Number(t)}function Ae(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return ne("JWT malformed, contained fewer than 3 sections"),null;try{const t=b(n);return t?JSON.parse(t):(ne("Failed to decode base64 JWT payload"),null)}catch(t){return ne("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ne(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof D&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class xe{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Se(this.lastLoginAt),this.creationTime=Se(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Ne(t,async function(t,e){return be(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));ae(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=Xt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Re(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ae(t.idToken,"internal-error"),ae(void 0!==t.idToken,"internal-error"),ae(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ae(t);return ae(e,"internal-error"),ae(void 0!==e.exp,"internal-error"),ae(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return ae(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(t,e){const n=await Ee(t,{},(async()=>{const n=B({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=Te(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ge.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new De;return n&&(ae("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(ae("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(ae("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new De,this.toJSON())}_performRefresh(){return ce("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){ae("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Pe{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=Xt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Re(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Ne(this,this.stsTokenManager.getToken(this.auth,t));return ae(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=H(t),i=await n.getIdToken(e),r=Ae(i);ae(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Se(Ce(r.auth_time)),issuedAtTime:Se(Ce(r.iat)),expirationTime:Se(Ce(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=H(t);await Oe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(ae(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Pe(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Oe(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ne(this,async function(t,e){return be(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:_}=e;ae(v&&_,t,"internal-error");const T=De.fromJSON(this.name,_);ae("string"==typeof v,t,"internal-error"),Le(u,t.name),Le(h,t.name),ae("boolean"==typeof w,t,"internal-error"),ae("boolean"==typeof b,t,"internal-error"),Le(d,t.name),Le(f,t.name),Le(p,t.name),Le(m,t.name),Le(g,t.name),Le(y,t.name);const I=new Pe({uid:v,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map((t=>Object.assign({},t)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const i=new De;i.updateFromServerResponse(e);const r=new Pe({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Oe(r),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new Map;function Ue(t){le(t instanceof Function,"Expected a class definition");let e=Me.get(t);return e?(le(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Me.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Fe.type="NONE";const Be=Fe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,e,n){return`firebase:${t}:${e}:${n}`}class je{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Ve(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ve("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Pe._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new je(Ue(Be),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||Ue(Be);const s=Ve(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=Pe._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new je(r,t,n)):new je(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ke(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qe(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ge(e))return"Blackberry";if(Qe(e))return"Webos";if($e(e))return"Safari";if((e.includes("chrome/")||He(e))&&!e.includes("edge/"))return"Chrome";if(We(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function qe(t=N()){return/firefox\//i.test(t)}function $e(t=N()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function He(t=N()){return/crios\//i.test(t)}function Ke(t=N()){return/iemobile/i.test(t)}function We(t=N()){return/android/i.test(t)}function Ge(t=N()){return/blackberry/i.test(t)}function Qe(t=N()){return/webos/i.test(t)}function Je(t=N()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xe(){return R()&&10===document.documentMode}function Ye(t=N()){return Je(t)||We(t)||Qe(t)||Ge(t)||/windows phone/i.test(t)||Ke(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(t,e=[]){let n;switch(t){case"Browser":n=ze(N());break;case"Worker":n=`${ze(N())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pt}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(t,e){return be(t,"GET","/v2/recaptchaConfig",we(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){return void 0!==t&&void 0!==t.enterprise}class nn{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t){return new Promise(((e,n)=>{const i=document.createElement("script");var r,s;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=re("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function sn(t){return`__${t}${Math.floor(1e6*Math.random())}`}class on{constructor(t){this.type="recaptcha-enterprise",this.auth=un(t)}async verify(t="verify",e=!1){function n(e,n,i){const r=window.grecaptcha;en(r)?r.enterprise.ready((()=>{r.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{tn(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new nn(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((r=>{if(!e&&en(window.grecaptcha))n(r,t,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));rn("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function an(t,e,n,i=!1){const r=new on(t);let s;try{s=await r.verify(n)}catch(t){s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hn(this),this.idTokenSubscription=new hn(this),this.beforeStateQueue=new cn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=te,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ue(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await je.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Oe(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?H(t):null;return e&&ae(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&ae(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ue(t))}))}async initializeRecaptchaConfig(){const t=await tn(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new nn(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){new on(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new L("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ue(t)||this._popupRedirectResolver;ae(e,this,"argument-error"),this.redirectPersistenceManager=await je.create(this,[Ue(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ae(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ze(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){ee.logLevel<=X.WARN&&ee.warn(`Auth (${Pt}): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}}function un(t){return H(t)}class hn{constructor(t){this.auth=t,this.observer=null,this.addObserver=z((t=>this.observer=t))}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e,n){const i=un(t);ae(i._canInitEmulator,i,"emulator-config-failed"),ae(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=fn(e),{host:o,port:a}=function(t){const e=fn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:pn(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:pn(e)}}}(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function fn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class mn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ce("not implemented")}_getIdTokenResponse(t){return ce("not implemented")}_linkToIdToken(t,e){return ce("not implemented")}_getReauthenticationResolver(t){return ce("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e){return be(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yn(t,e){return _e(t,"POST","/v1/accounts:signInWithPassword",we(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends mn{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new vn(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new vn(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await an(t,n,"signInWithPassword");return yn(t,e)}return yn(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await an(t,n,"signInWithPassword");return yn(t,e)}return Promise.reject(e)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return _e(t,"POST","/v1/accounts:signInWithEmailLink",we(t,e))}(t,{email:this._email,oobCode:this._password});default:ie(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return gn(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return _e(t,"POST","/v1/accounts:signInWithEmailLink",we(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:ie(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(t,e){return _e(t,"POST","/v1/accounts:signInWithIdp",we(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends mn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ie("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=Xt(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new bn(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return wn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,wn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,wn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=B(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n extends mn{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new _n({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new _n({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return _e(t,"POST","/v1/accounts:signInWithPhoneNumber",we(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await _e(t,"POST","/v1/accounts:signInWithPhoneNumber",we(t,e));if(n.temporaryProof)throw ke(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return _e(t,"POST","/v1/accounts:signInWithPhoneNumber",we(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),En)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new _n({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t){var e,n,i,r,s,o;const a=V(j(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);ae(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=V(j(t)).link,n=e?V(j(e)).deep_link_id:null,i=V(j(t)).deep_link_id;return(i?V(j(i)).link:null)||i||n||e||t}(t);try{return new Tn(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In{constructor(){this.providerId=In.PROVIDER_ID}static credential(t,e){return vn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Tn.parseLink(e);return ae(n,"argument-error"),vn._fromEmailAndCode(t,n.code,n.tenantId)}}In.PROVIDER_ID="password",In.EMAIL_PASSWORD_SIGN_IN_METHOD="password",In.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends kn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn extends Sn{constructor(){super("facebook.com")}static credential(t){return bn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cn.credentialFromTaggedObject(t)}static credentialFromError(t){return Cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Cn.credential(t.oauthAccessToken)}catch(t){return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Cn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An extends Sn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return bn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return An.credentialFromTaggedObject(t)}static credentialFromError(t){return An.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return An.credential(e,n)}catch(t){return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com",An.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn extends Sn{constructor(){super("github.com")}static credential(t){return bn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nn.credentialFromTaggedObject(t)}static credentialFromError(t){return Nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Nn.credential(t.oauthAccessToken)}catch(t){return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com",Nn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn extends Sn{constructor(){super("twitter.com")}static credential(t,e){return bn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return xn.credentialFromTaggedObject(t)}static credentialFromError(t){return xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return xn.credential(e,n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rn(t,e){return _e(t,"POST","/v1/accounts:signUp",we(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn.TWITTER_SIGN_IN_METHOD="twitter.com",xn.PROVIDER_ID="twitter.com";class On{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await Pe._fromIdTokenResponse(t,n,i),s=Dn(n);return new On({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Dn(n);return new On({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Dn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln extends D{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ln.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Ln(t,e,n,i)}}function Pn(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ln._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(t,e,n=!1){const i=await Ne(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return On._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Un(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Ne(t,Pn(i,r,e,t),n);ae(s.idToken,i,"internal-error");const o=Ae(s.idToken);ae(o,i,"internal-error");const{sub:a}=o;return ae(t.uid===a,i,"user-mismatch"),On._forOperation(t,r,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&ie(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,e,n=!1){const i="signIn",r=await Pn(t,i,e),s=await On._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Bn(t,e){return Fn(un(t),e)}async function Vn(t,e,n){var i;const r=un(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=r._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const t=await an(r,s,"signUpPassword");o=Rn(r,t)}else o=Rn(r,s).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await an(r,s,"signUpPassword");return Rn(r,t)}return Promise.reject(t)}));const a=await o.catch((t=>Promise.reject(t))),c=await On._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function jn(t,e,n){return Bn(H(t),In.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t){return H(t).delete()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;const qn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(qn,"1"),this.storage.removeItem(qn),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends $n{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=N();return $e(t)||Je(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Ye(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Xe()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Hn.type="LOCAL";const Kn=Hn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends $n{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Wn.type="SESSION";const Gn=Wn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Qn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jn(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn.receivers=[];class Xn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Jn("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zn(){return void 0!==Yn().WorkerGlobalScope&&"function"==typeof Yn().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ti="firebaseLocalStorageDb",ei="firebaseLocalStorage",ni="fbase_key";class ii{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function ri(t,e){return t.transaction([ei],e?"readwrite":"readonly").objectStore(ei)}function si(){const t=indexedDB.open(ti,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ei,{keyPath:ni})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ei)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(ti);return new ii(t).toPromise()}(),e(await si()))}))}))}async function oi(t,e,n){const i=ri(t,!0).put({[ni]:e,value:n});return new ii(i).toPromise()}function ai(t,e){const n=ri(t,!0).delete(e);return new ii(n).toPromise()}class ci{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await si()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qn._getInstance(Zn()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Xn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await si();return await oi(t,qn,"1"),await ai(t,qn),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>oi(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=ri(t,!1).get(e),i=await new ii(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ai(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ri(t,!1).getAll();return new ii(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ci.type="LOCAL";const li=ci;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
sn("rcb"),new pe(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ui="recaptcha";async function hi(t,e,n){var i;const r=await n.verify();try{let s;if(ae("string"==typeof r,t,"argument-error"),ae(n.type===ui,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){ae("enroll"===e.type,t,"internal-error");const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await function(t,e){return be(t,"POST","/v2/accounts/mfaEnrollment:start",we(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{ae("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;ae(n,t,"missing-multi-factor-info");const o=await function(t,e){return be(t,"POST","/v2/accounts/mfaSignIn:start",we(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return be(t,"POST","/v1/accounts:sendVerificationCode",we(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class di{constructor(t){this.providerId=di.PROVIDER_ID,this.auth=un(t)}verifyPhoneNumber(t,e){return hi(this.auth,t,H(e))}static credential(t,e){return _n._fromVerification(t,e)}static credentialFromResult(t){const e=t;return di.credentialFromTaggedObject(e)}static credentialFromError(t){return di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?_n._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fi(t,e){return e?Ue(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */di.PROVIDER_ID="phone",di.PHONE_SIGN_IN_METHOD="phone";class pi extends mn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return wn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return wn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return wn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function mi(t){return Fn(t.auth,new pi(t),t.bypassAuthState)}function gi(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Un(n,new pi(t),t.bypassAuthState)}async function yi(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Mn(n,new pi(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mi;case"linkViaPopup":case"linkViaRedirect":return yi;case"reauthViaPopup":case"reauthViaRedirect":return gi;default:ie(this.auth,"internal-error")}}resolve(t){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new pe(2e3,1e4);class bi extends vi{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ae(t,this.auth,"internal-error"),t}async onExecution(){le(1===this.filter.length,"Popup operations only handle one event");const t=Jn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(re(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,wi.get())};t()}}bi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ei="pendingRedirect",_i=new Map;class Ti extends vi{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=_i.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Si(e),i=ki(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}_i.set(this.auth._key(),t)}return this.bypassAuthState||_i.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ii(t,e){_i.set(t._key(),e)}function ki(t){return Ue(t._redirectPersistence)}function Si(t){return Ve(Ei,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e,n=!1){const i=un(t),r=fi(i,e),s=new Ti(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class Ai{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xi(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!xi(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(re(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ni(t))}saveEventToCache(t){this.cachedEventUids.add(Ni(t)),this.lastProcessedEventTime=Date.now()}}function Ni(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function xi({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ri=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oi=/^https?/;async function Di(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return be(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Li(t))return}catch(t){}ie(t,"unauthorized-domain")}function Li(t){const e=ue(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Oi.test(n))return!1;if(Ri.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new pe(3e4,6e4);function Mi(){const t=Yn().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Ui=null;function Fi(t){return Ui=Ui||function(t){return new Promise(((e,n)=>{var i,r,s;function o(){Mi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mi(),n(re(t,"network-request-failed"))},timeout:Pi.get()})}if(null===(r=null===(i=Yn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Yn().gapi)||void 0===s?void 0:s.load)){const e=sn("iframefcb");return Yn()[e]=()=>{gapi.load?o():n(re(t,"network-request-failed"))},rn(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Ui=null,t}))}(t),Ui}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new pe(5e3,15e3),Vi="__/auth/iframe",ji="emulator/auth/iframe",zi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $i(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?me(e,ji):`https://${t.config.authDomain}/${Vi}`,i={apiKey:e.apiKey,appName:t.name,v:Pt},r=qi.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${B(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ki{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Wi(t,e,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Hi),{width:i.toString(),height:r.toString(),top:s,left:o}),l=N().toLowerCase();n&&(a=He(l)?"_blank":n),qe(l)&&(e=e||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=N()){var e;return Je(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Ki(null);const h=window.open(e||"",a,u);ae(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Ki(h)}const Gi="__/auth/handler",Qi="emulator/auth/handler",Ji=encodeURIComponent("fac");async function Xi(t,e,n,i,r,s){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Pt,eventId:r};if(e instanceof kn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",M(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof Sn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const c=await t._getAppCheckToken(),l=c?`#${Ji}=${encodeURIComponent(c)}`:"";return`${function({config:t}){return t.emulator?me(t,Qi):`https://${t.authDomain}/${Gi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${B(a).slice(1)}${l}`}const Yi="webStorageSupport";const Zi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gn,this._completeRedirectFn=Ci,this._overrideRedirectResult=Ii}async _openPopup(t,e,n,i){var r;le(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Wi(t,await Xi(t,e,n,ue(),i),Jn())}async _openRedirect(t,e,n,i){await this._originValidation(t);return function(t){Yn().location.href=t}(await Xi(t,e,n,ue(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(le(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Fi(t),n=Yn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:$i(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zi,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=re(t,"network-request-failed"),s=Yn().setTimeout((()=>{i(r)}),Bi.get());function o(){Yn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}(t),n=new Ai(t);return e.register("authEvent",(e=>{ae(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Yi,{type:Yi},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[Yi];void 0!==r&&e(!!r),ie(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Di(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ye()||$e()||Je()}};var tr="@firebase/auth",er="1.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ir=S("authIdTokenMaxAge")||300;let rr=null;function sr(t=Ut()){const e=Ot(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Ot(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(U(n.getOptions(),null!=e?e:{}))return t;ie(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Zi,persistence:[li,Kn,Gn]}),i=S("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>ir)return;const i=null==e?void 0:e.token;rr!==i&&(rr=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){H(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){H(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const s=T("auth");return s&&dn(n,`http://${s}`),n}var or;or="Browser",Rt(new K("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;ae(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:or,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ze(or)},c=new ln(n,i,r,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ue);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(c,e),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Rt(new K("auth-internal",(t=>{const e=un(t.getProvider("auth").getImmediate());return new nr(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(tr,er,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(or)),Ft(tr,er,"esm2017");var ar,cr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},lr={},ur=ur||{},hr=cr||self;function dr(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function fr(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var pr="closure_uid_"+(1e9*Math.random()>>>0),mr=0;function gr(t,e,n){return t.call.apply(t.bind,arguments)}function yr(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function vr(t,e,n){return(vr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?gr:yr).apply(null,arguments)}function wr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function br(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function Er(){this.s=this.s,this.o=this.o}Er.prototype.s=!1,Er.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,pr)&&t[pr]||(t[pr]=++mr))},Er.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _r=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Tr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ir(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(dr(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function kr(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}kr.prototype.h=function(){this.defaultPrevented=!0};var Sr=function(){if(!hr.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{hr.addEventListener("test",(()=>{}),e),hr.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function Cr(t){return/^[\s\xa0]*$/.test(t)}function Ar(){var t=hr.navigator;return t&&(t=t.userAgent)?t:""}function Nr(t){return-1!=Ar().indexOf(t)}function xr(t){return xr[" "](t),t}xr[" "]=function(){};var Rr,Or,Dr,Lr=Nr("Opera"),Pr=Nr("Trident")||Nr("MSIE"),Mr=Nr("Edge"),Ur=Mr||Pr,Fr=Nr("Gecko")&&!(-1!=Ar().toLowerCase().indexOf("webkit")&&!Nr("Edge"))&&!(Nr("Trident")||Nr("MSIE"))&&!Nr("Edge"),Br=-1!=Ar().toLowerCase().indexOf("webkit")&&!Nr("Edge");function Vr(){var t=hr.document;return t?t.documentMode:void 0}t:{var jr="",zr=(Or=Ar(),Fr?/rv:([^\);]+)(\)|;)/.exec(Or):Mr?/Edge\/([\d\.]+)/.exec(Or):Pr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Or):Br?/WebKit\/(\S+)/.exec(Or):Lr?/(?:Version)[ \/]?(\S+)/.exec(Or):void 0);if(zr&&(jr=zr?zr[1]:""),Pr){var qr=Vr();if(null!=qr&&qr>parseFloat(jr)){Rr=String(qr);break t}}Rr=jr}if(hr.document&&Pr){var $r=Vr();Dr=$r||(parseInt(Rr,10)||void 0)}else Dr=void 0;var Hr=Dr;function Kr(t,e){if(kr.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fr){t:{try{xr(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Wr[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Kr.$.h.call(this)}}br(Kr,kr);var Wr={2:"touch",3:"pen",4:"mouse"};Kr.prototype.h=function(){Kr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gr="closure_listenable_"+(1e6*Math.random()|0),Qr=0;function Jr(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Qr,this.fa=this.ia=!1}function Xr(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Yr(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Zr(t){const e={};for(const n in t)e[n]=t[n];return e}const ts="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function es(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<ts.length;e++)n=ts[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ns(t){this.src=t,this.g={},this.h=0}function is(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=_r(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Xr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function rs(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}ns.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=rs(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new Jr(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var ss="closure_lm_"+(1e6*Math.random()|0),os={};function as(t,e,n,i,r){if(i&&i.once)return ls(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)as(t,e[s],n,i,r);return null}return n=gs(n),t&&t[Gr]?t.O(e,n,fr(i)?!!i.capture:!!i,r):cs(t,e,n,!1,i,r)}function cs(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=fr(r)?!!r.capture:!!r,a=ps(t);if(a||(t[ss]=a=new ns(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=fs;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Sr||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(ds(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ls(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ls(t,e[s],n,i,r);return null}return n=gs(n),t&&t[Gr]?t.P(e,n,fr(i)?!!i.capture:!!i,r):cs(t,e,n,!0,i,r)}function us(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)us(t,e[s],n,i,r);else i=fr(i)?!!i.capture:!!i,n=gs(n),t&&t[Gr]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=rs(s=t.g[e],n,i,r))&&(Xr(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=ps(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rs(e,n,i,r)),(n=-1<t?e[t]:null)&&hs(n))}function hs(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Gr])is(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(ds(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ps(e))?(is(n,t),0==n.h&&(n.src=null,e[ss]=null)):Xr(t)}}}function ds(t){return t in os?os[t]:os[t]="on"+t}function fs(t,e){if(t.fa)t=!0;else{e=new Kr(e,this);var n=t.listener,i=t.la||t.src;t.ia&&hs(t),t=n.call(i,e)}return t}function ps(t){return(t=t[ss])instanceof ns?t:null}var ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function gs(t){return"function"==typeof t?t:(t[ms]||(t[ms]=function(e){return t.handleEvent(e)}),t[ms])}function ys(){Er.call(this),this.i=new ns(this),this.S=this,this.J=null}function vs(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new kr(e,t);else if(e instanceof kr)e.target=e.target||t;else{var r=e;es(e=new kr(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=ws(o,i,!0,e)&&r}if(r=ws(o=e.g=t,i,!0,e)&&r,r=ws(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=ws(o=e.g=n[s],i,!1,e)&&r}function ws(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&is(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}br(ys,Er),ys.prototype[Gr]=!0,ys.prototype.removeEventListener=function(t,e,n,i){us(this,t,e,n,i)},ys.prototype.N=function(){if(ys.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Xr(n[i]);delete e.g[t],e.h--}}this.J=null},ys.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},ys.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var bs=hr.JSON.stringify;function Es(){var t=As;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var _s=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ts),(t=>t.reset()));class Ts{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Is(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ks(t){hr.setTimeout((()=>{throw t}),0)}let Ss,Cs=!1,As=new class{constructor(){this.h=this.g=null}add(t,e){const n=_s.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Ns=()=>{const t=hr.Promise.resolve(void 0);Ss=()=>{t.then(xs)}};var xs=()=>{for(var t;t=Es();){try{t.h.call(t.g)}catch(t){ks(t)}var e=_s;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Cs=!1};function Rs(t,e){ys.call(this),this.h=t||1,this.g=e||hr,this.j=vr(this.qb,this),this.l=Date.now()}function Os(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ds(t,e,n){if("function"==typeof t)n&&(t=vr(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=vr(t.handleEvent,t)}return 2147483647<Number(e)?-1:hr.setTimeout(t,e||0)}function Ls(t){t.g=Ds((()=>{t.g=null,t.i&&(t.i=!1,Ls(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}br(Rs,ys),(ar=Rs.prototype).ga=!1,ar.T=null,ar.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),vs(this,"tick"),this.ga&&(Os(this),this.start()))}},ar.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ar.N=function(){Rs.$.N.call(this),Os(this),delete this.g};class Ps extends Er{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ls(this)}N(){super.N(),this.g&&(hr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ms(t){Er.call(this),this.h=t,this.g={}}br(Ms,Er);var Us=[];function Fs(t,e,n,i){Array.isArray(n)||(n&&(Us[0]=n.toString()),n=Us);for(var r=0;r<n.length;r++){var s=as(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Bs(t){Yr(t.g,(function(t,e){this.g.hasOwnProperty(e)&&hs(t)}),t),t.g={}}function Vs(){this.g=!0}function js(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return bs(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Ms.prototype.N=function(){Ms.$.N.call(this),Bs(this)},Ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Vs.prototype.Ea=function(){this.g=!1},Vs.prototype.info=function(){};var zs={},qs=null;function $s(){return qs=qs||new ys}function Hs(t){kr.call(this,zs.Ta,t)}function Ks(t){const e=$s();vs(e,new Hs(e))}function Ws(t,e){kr.call(this,zs.STAT_EVENT,t),this.stat=e}function Gs(t){const e=$s();vs(e,new Ws(e,t))}function Qs(t,e){kr.call(this,zs.Ua,t),this.size=e}function Js(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return hr.setTimeout((function(){t()}),e)}zs.Ta="serverreachability",br(Hs,kr),zs.STAT_EVENT="statevent",br(Ws,kr),zs.Ua="timingevent",br(Qs,kr);var Xs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ys={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zs(){}function to(t){return t.h||(t.h=t.i())}function eo(){}Zs.prototype.h=null;var no,io={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ro(){kr.call(this,"d")}function so(){kr.call(this,"c")}function oo(){}function ao(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Ms(this),this.P=lo,t=Ur?125:void 0,this.V=new Rs(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new co}function co(){this.i=null,this.g="",this.h=!1}br(ro,kr),br(so,kr),br(oo,Zs),oo.prototype.g=function(){return new XMLHttpRequest},oo.prototype.i=function(){return{}},no=new oo;var lo=45e3,uo={},ho={};function fo(t,e,n){t.L=1,t.v=Oo(Co(e)),t.s=n,t.S=!0,po(t,null)}function po(t,e){t.G=Date.now(),vo(t),t.A=Co(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Ho(n.i,"t",i),t.C=0,n=t.l.J,t.h=new co,t.g=$a(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ps(vr(t.Pa,t,t.g),t.O)),Fs(t.U,t.g,"readystatechange",t.nb),e=t.I?Zr(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ks(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function mo(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function go(t,e,n){let i,r=!0;for(;!t.J&&t.C<n.length;){if(i=yo(t,n),i==ho){4==e&&(t.o=4,Gs(14),r=!1),js(t.j,t.m,null,"[Incomplete Response]");break}if(i==uo){t.o=4,Gs(15),js(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}js(t.j,t.m,i,null),To(t,i)}mo(t)&&i!=ho&&i!=uo&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Gs(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ma(e),e.M=!0,Gs(11))):(js(t.j,t.m,n,"[Invalid Chunked Response]"),_o(t),Eo(t))}function yo(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ho:(n=Number(e.substring(n,i)),isNaN(n)?uo:(i+=1)+n>e.length?ho:(e=e.slice(i,i+n),t.C=i+n,e))}function vo(t){t.Y=Date.now()+t.P,wo(t,t.P)}function wo(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Js(vr(t.lb,t),e)}function bo(t){t.B&&(hr.clearTimeout(t.B),t.B=null)}function Eo(t){0==t.l.H||t.J||Ba(t.l,t)}function _o(t){bo(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Os(t.V),Bs(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function To(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Xo(n.i,t)))if(!t.K&&Xo(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Fa(n),Aa(n)}Pa(n),Gs(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=Js(vr(n.ib,n),6e3));if(1>=Jo(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else ja(n,11)}else if((t.K||n.g==t)&&Fa(n),!Cr(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const e=l[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=l[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Yo(s,s.h),s.h=null))}if(i.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,Ro(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((i=n).wa=qa(i,i.J?i.pa:null,i.Y),o.K){Zo(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(bo(a),vo(a)),i.g=o}else La(i);0<n.j.length&&xa(n)}else"stop"!=l[0]&&"close"!=l[0]||ja(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?ja(n,7):Ca(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}Ks()}catch(t){}}function Io(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(dr(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(dr(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(dr(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(ar=ao.prototype).setTimeout=function(t){this.P=t},ar.nb=function(t){t=t.target;const e=this.M;e&&3==Ea(t)?e.l():this.Pa(t)},ar.Pa=function(t){try{if(t==this.g)t:{const u=Ea(this.g);var e=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||Ur||this.g&&(this.h.h||this.g.ja()||_a(this.g)))){this.J||4!=u||7==e||Ks(),bo(this);var n=this.g.da();this.ca=n;e:if(mo(this)){var i=_a(this.g);t="";var r=i.length,s=4==Ea(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){_o(this),Eo(this);var o="";break e}this.h.i=new hr.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cr(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Gs(12),_o(this),Eo(this);break t}js(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,To(this,n)}this.S?(go(this,u,o),Ur&&this.i&&3==u&&(Fs(this.U,this.V,"tick",this.mb),this.V.start())):(js(this.j,this.m,o,null),To(this,o)),4==u&&_o(this),this.i&&!this.J&&(4==u?Ba(this.l,this):(this.i=!1,vo(this)))}else(function(t){const e={};t=(t.g&&2<=Ea(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(Cr(t[i]))continue;var n=Is(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Gs(12)):(this.o=0,Gs(13)),_o(this),Eo(this)}}}catch(t){}},ar.mb=function(){if(this.g){var t=Ea(this.g),e=this.g.ja();this.C<e.length&&(bo(this),go(this,t,e),this.i&&4!=t&&vo(this))}},ar.cancel=function(){this.J=!0,_o(this)},ar.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Ks(),Gs(17)),_o(this),this.o=2,Eo(this)):wo(this,this.Y-t)};var ko=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function So(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof So){this.h=t.h,Ao(this,t.j),this.s=t.s,this.g=t.g,No(this,t.m),this.l=t.l;var e=t.i,n=new jo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xo(this,n),this.o=t.o}else t&&(e=String(t).match(ko))?(this.h=!1,Ao(this,e[1]||"",!0),this.s=Do(e[2]||""),this.g=Do(e[3]||"",!0),No(this,e[4]),this.l=Do(e[5]||"",!0),xo(this,e[6]||"",!0),this.o=Do(e[7]||"")):(this.h=!1,this.i=new jo(null,this.h))}function Co(t){return new So(t)}function Ao(t,e,n){t.j=n?Do(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function No(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xo(t,e,n){e instanceof jo?(t.i=e,function(t,e){e&&!t.j&&(zo(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(qo(this,e),Ho(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Lo(e,Bo)),t.i=new jo(e,t.h))}function Ro(t,e,n){t.i.set(e,n)}function Oo(t){return Ro(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Do(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lo(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Po),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Po(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}So.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lo(e,Mo,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Lo(e,Mo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Lo(n,"/"==n.charAt(0)?Fo:Uo,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Lo(n,Vo)),t.join("")};var Mo=/[#\/\?@]/g,Uo=/[#\?:]/g,Fo=/[#\?]/g,Bo=/[#\?@]/g,Vo=/#/g;function jo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zo(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function qo(t,e){zo(t),e=Ko(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $o(t,e){return zo(t),e=Ko(t,e),t.g.has(e)}function Ho(t,e,n){qo(t,e),0<n.length&&(t.i=null,t.g.set(Ko(t,e),Tr(n)),t.h+=n.length)}function Ko(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(ar=jo.prototype).add=function(t,e){zo(this),this.i=null,t=Ko(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},ar.forEach=function(t,e){zo(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},ar.ta=function(){zo(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},ar.Z=function(t){zo(this);let e=[];if("string"==typeof t)$o(this,t)&&(e=e.concat(this.g.get(Ko(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},ar.set=function(t,e){return zo(this),this.i=null,$o(this,t=Ko(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},ar.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},ar.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function Wo(t){this.l=t||Go,hr.PerformanceNavigationTiming?t=0<(t=hr.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(hr.g&&hr.g.Ka&&hr.g.Ka()&&hr.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Go=10;function Qo(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Jo(t){return t.h?1:t.g?t.g.size:0}function Xo(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Yo(t,e){t.g?t.g.add(e):t.h=e}function Zo(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ta(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Tr(t.i)}Wo.prototype.cancel=function(){if(this.i=ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ea=class{stringify(t){return hr.JSON.stringify(t,void 0)}parse(t){return hr.JSON.parse(t,void 0)}};function na(){this.g=new ea}function ia(t,e,n){const i=n||"";try{Io(t,(function(t,n){let r=t;fr(t)&&(r=bs(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ra(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function sa(t){this.l=t.fc||null,this.j=t.ob||!1}function oa(t,e){ys.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=aa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}br(sa,Zs),sa.prototype.g=function(){return new oa(this.l,this.j)},sa.prototype.i=function(t){return function(){return t}}({}),br(oa,ys);var aa=0;function ca(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function la(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ua(t)}function ua(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(ar=oa.prototype).open=function(t,e){if(this.readyState!=aa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ua(this)},ar.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||hr).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},ar.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,la(this)),this.readyState=aa},ar.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ua(this)),this.g&&(this.readyState=3,ua(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==hr.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ca(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},ar.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?la(this):ua(this),3==this.readyState&&ca(this)}},ar.Za=function(t){this.g&&(this.response=this.responseText=t,la(this))},ar.Ya=function(t){this.g&&(this.response=t,la(this))},ar.ka=function(){this.g&&la(this)},ar.setRequestHeader=function(t,e){this.v.append(t,e)},ar.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},ar.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ha=hr.JSON.parse;function da(t){ys.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fa,this.L=this.M=!1}br(da,ys);var fa="",pa=/^https?$/i,ma=["POST","PUT"];function ga(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ya(t),wa(t)}function ya(t){t.F||(t.F=!0,vs(t,"complete"),vs(t,"error"))}function va(t){if(t.h&&void 0!==ur&&(!t.C[1]||4!=Ea(t)||2!=t.da()))if(t.v&&4==Ea(t))Ds(t.La,0,t);else if(vs(t,"readystatechange"),4==Ea(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.I).match(ko)[1]||null;!r&&hr.self&&hr.self.location&&(r=hr.self.location.protocol.slice(0,-1)),i=!pa.test(r?r.toLowerCase():"")}n=i}if(n)vs(t,"complete"),vs(t,"success");else{t.m=6;try{var s=2<Ea(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",ya(t)}}finally{wa(t)}}}function wa(t,e){if(t.g){ba(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||vs(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function ba(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(hr.clearTimeout(t.A),t.A=null)}function Ea(t){return t.g?t.g.readyState:0}function _a(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case fa:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ta(t){let e="";return Yr(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Ia(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ta(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ro(t,e,n))}function ka(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sa(t){this.Ga=0,this.j=[],this.l=new Vs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ka("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ka("baseRetryDelayMs",5e3,t),this.hb=ka("retryDelaySeedMs",1e4,t),this.eb=ka("forwardChannelMaxRetries",2,t),this.xa=ka("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Wo(t&&t.concurrentRequestLimit),this.Ja=new na,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Ca(t){if(Na(t),3==t.H){var e=t.W++,n=Co(t.I);if(Ro(n,"SID",t.K),Ro(n,"RID",e),Ro(n,"TYPE","terminate"),Oa(t,n),(e=new ao(t,t.l,e)).L=2,e.v=Oo(Co(n)),n=!1,hr.navigator&&hr.navigator.sendBeacon)try{n=hr.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&hr.Image&&((new Image).src=e.v,n=!0),n||(e.g=$a(e.l,null),e.g.ha(e.v)),e.G=Date.now(),vo(e)}za(t)}function Aa(t){t.g&&(Ma(t),t.g.cancel(),t.g=null)}function Na(t){Aa(t),t.u&&(hr.clearTimeout(t.u),t.u=null),Fa(t),t.i.cancel(),t.m&&("number"==typeof t.m&&hr.clearTimeout(t.m),t.m=null)}function xa(t){if(!Qo(t.i)&&!t.m){t.m=!0;var e=t.Na;Ss||Ns(),Cs||(Ss(),Cs=!0),As.add(e,t),t.C=0}}function Ra(t,e){var n;n=e?e.m:t.W++;const i=Co(t.I);Ro(i,"SID",t.K),Ro(i,"RID",n),Ro(i,"AID",t.V),Oa(t,i),t.o&&t.s&&Ia(i,t.o,t.s),n=new ao(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Da(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Yo(t.i,n),fo(n,i,e)}function Oa(t,e){t.na&&Yr(t.na,(function(t,n){Ro(e,n,t)})),t.h&&Io({},(function(t,n){Ro(e,n,t)}))}function Da(t,e,n){n=Math.min(t.j.length,n);var i=t.h?vr(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{ia(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function La(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ss||Ns(),Cs||(Ss(),Cs=!0),As.add(e,t),t.A=0}}function Pa(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Js(vr(t.Ma,t),Va(t,t.A)),t.A++,!0)}function Ma(t){null!=t.B&&(hr.clearTimeout(t.B),t.B=null)}function Ua(t){t.g=new ao(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Co(t.wa);Ro(e,"RID","rpc"),Ro(e,"SID",t.K),Ro(e,"AID",t.V),Ro(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ro(e,"TO",t.qa),Ro(e,"TYPE","xmlhttp"),Oa(t,e),t.o&&t.s&&Ia(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Oo(Co(e)),n.s=null,n.S=!0,po(n,t)}function Fa(t){null!=t.v&&(hr.clearTimeout(t.v),t.v=null)}function Ba(t,e){var n=null;if(t.g==e){Fa(t),Ma(t),t.g=null;var i=2}else{if(!Xo(t.i,e))return;n=e.F,Zo(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;vs(i=$s(),new Qs(i,n)),xa(t)}else La(t);else if(3==(r=e.o)||0==r&&0<e.ca||!(1==i&&function(t,e){return!(Jo(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Js(vr(t.Na,t,e),Va(t,t.C)),t.C++,0)))}(t,e)||2==i&&Pa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ja(t,5);break;case 4:ja(t,10);break;case 3:ja(t,6);break;default:ja(t,2)}}function Va(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ja(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=vr(t.pb,t);n||(n=new So("//www.google.com/images/cleardot.gif"),hr.location&&"http"==hr.location.protocol||Ao(n,"https"),Oo(n)),function(t,e){const n=new Vs;if(hr.Image){const i=new Image;i.onload=wr(ra,n,i,"TestLoadImage: loaded",!0,e),i.onerror=wr(ra,n,i,"TestLoadImage: error",!1,e),i.onabort=wr(ra,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=wr(ra,n,i,"TestLoadImage: timeout",!1,e),hr.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Gs(2);t.H=0,t.h&&t.h.za(e),za(t),Na(t)}function za(t){if(t.H=0,t.ma=[],t.h){const e=ta(t.i);0==e.length&&0==t.j.length||(Ir(t.ma,e),Ir(t.ma,t.j),t.i.i.length=0,Tr(t.j),t.j.length=0),t.h.ya()}}function qa(t,e,n){var i=n instanceof So?Co(n):new So(n);if(""!=i.g)e&&(i.g=e+"."+i.g),No(i,i.m);else{var r=hr.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new So(null);i&&Ao(s,i),e&&(s.g=e),r&&No(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&Ro(i,n,e),Ro(i,"VER",t.ra),Oa(t,i),i}function $a(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new da(new sa({ob:!0})):new da(t.va)).Oa(t.J),e}function Ha(){}function Ka(){if(Pr&&!(10<=Number(Hr)))throw Error("Environmental error: no available transport.")}function Wa(t,e){ys.call(this),this.g=new Sa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Cr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Cr(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ja(this)}function Ga(t){ro.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Qa(){so.call(this),this.status=1}function Ja(t){this.g=t}function Xa(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Ya(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function Za(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(ar=da.prototype).Oa=function(t){this.M=t},ar.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():no.g(),this.C=this.u?to(this.u):to(no),this.g.onreadystatechange=vr(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void ga(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=hr.FormData&&t instanceof hr.FormData,!(0<=_r(ma,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ba(this),0<this.B&&((this.L=function(t){return Pr&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vr(this.ua,this)):this.A=Ds(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ga(this,t)}},ar.ua=function(){void 0!==ur&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vs(this,"timeout"),this.abort(8))},ar.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vs(this,"complete"),vs(this,"abort"),wa(this))},ar.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wa(this,!0)),da.$.N.call(this)},ar.La=function(){this.s||(this.G||this.v||this.l?va(this):this.kb())},ar.kb=function(){va(this)},ar.isActive=function(){return!!this.g},ar.da=function(){try{return 2<Ea(this)?this.g.status:-1}catch(t){return-1}},ar.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},ar.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ha(e)}},ar.Ia=function(){return this.m},ar.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ar=Sa.prototype).ra=8,ar.H=1,ar.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new ao(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Zr(s),es(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Da(this,r,e),Ro(n=Co(this.I),"RID",t),Ro(n,"CVER",22),this.F&&Ro(n,"X-HTTP-Session-Id",this.F),Oa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Ta(s)))+"&"+e:this.o&&Ia(n,this.o,s)),Yo(this.i,r),this.bb&&Ro(n,"TYPE","init"),this.P?(Ro(n,"$req",e),Ro(n,"SID","null"),r.aa=!0,fo(r,n,null)):fo(r,n,e),this.H=2}}else 3==this.H&&(t?Ra(this,t):0==this.j.length||Qo(this.i)||Ra(this))},ar.Ma=function(){if(this.u=null,Ua(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Js(vr(this.jb,this),t)}},ar.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Gs(10),Aa(this),Ua(this))},ar.ib=function(){null!=this.v&&(this.v=null,Aa(this),Pa(this),Gs(19))},ar.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Gs(2)):(this.l.info("Failed to ping google.com"),Gs(1))},ar.isActive=function(){return!!this.h&&this.h.isActive(this)},(ar=Ha.prototype).Ba=function(){},ar.Aa=function(){},ar.za=function(){},ar.ya=function(){},ar.isActive=function(){return!0},ar.Va=function(){},Ka.prototype.g=function(t,e){return new Wa(t,e)},br(Wa,ys),Wa.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Gs(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=qa(t,null,t.Y),xa(t)},Wa.prototype.close=function(){Ca(this.g)},Wa.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=bs(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&xa(e)},Wa.prototype.N=function(){this.g.h=null,delete this.j,Ca(this.g),delete this.g,Wa.$.N.call(this)},br(Ga,ro),br(Qa,so),br(Ja,Ha),Ja.prototype.Ba=function(){vs(this.g,"a")},Ja.prototype.Aa=function(t){vs(this.g,new Ga(t))},Ja.prototype.za=function(t){vs(this.g,new Qa)},Ja.prototype.ya=function(){vs(this.g,"b")},br(Xa,(function(){this.blockSize=-1})),Xa.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Xa.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)Ya(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Ya(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Ya(this,i),r=0;break}}this.h=r,this.i+=e},Xa.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var tc={};function ec(t){return-128<=t&&128>t?function(t,e){var n=tc;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new Za([0|t],0>t?-1:0)})):new Za([0|t],0>t?-1:0)}function nc(t){if(isNaN(t)||!isFinite(t))return rc;if(0>t)return lc(nc(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=ic;return new Za(e,0)}var ic=4294967296,rc=ec(0),sc=ec(1),oc=ec(16777216);function ac(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function cc(t){return-1==t.h}function lc(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Za(n,~t.h).add(sc)}function uc(t,e){return t.add(lc(e))}function hc(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function dc(t,e){this.g=t,this.h=e}function fc(t,e){if(ac(e))throw Error("division by zero");if(ac(t))return new dc(rc,rc);if(cc(t))return e=fc(lc(t),e),new dc(lc(e.g),lc(e.h));if(cc(e))return e=fc(t,lc(e)),new dc(lc(e.g),e.h);if(30<t.g.length){if(cc(t)||cc(e))throw Error("slowDivide_ only works with positive integers.");for(var n=sc,i=e;0>=i.X(t);)n=pc(n),i=pc(i);var r=mc(n,1),s=mc(i,1);for(i=mc(i,2),n=mc(n,2);!ac(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=mc(i,1),n=mc(n,1)}return e=uc(t,r.R(e)),new dc(r,e)}for(r=rc;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=nc(n)).R(e);cc(o)||0<o.X(t);)o=(s=nc(n-=i)).R(e);ac(s)&&(s=sc),r=r.add(s),t=uc(t,o)}return new dc(r,t)}function pc(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Za(n,t.h)}function mc(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Za(r,t.h)}(ar=Za.prototype).ea=function(){if(cc(this))return-lc(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:ic+i)*e,e*=ic}return t},ar.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(ac(this))return"0";if(cc(this))return"-"+lc(this).toString(t);for(var e=nc(Math.pow(t,6)),n=this,i="";;){var r=fc(n,e).g,s=((0<(n=uc(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(ac(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},ar.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},ar.X=function(t){return cc(t=uc(this,t))?-1:ac(t)?0:1},ar.abs=function(){return cc(this)?lc(this):this},ar.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new Za(n,-2147483648&n[n.length-1]?-1:0)},ar.R=function(t){if(ac(this)||ac(t))return rc;if(cc(this))return cc(t)?lc(this).R(lc(t)):lc(lc(this).R(t));if(cc(t))return lc(this.R(lc(t)));if(0>this.X(oc)&&0>t.X(oc))return nc(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,c=65535&t.D(r);n[2*i+2*r]+=o*c,hc(n,2*i+2*r),n[2*i+2*r+1]+=s*c,hc(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,hc(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,hc(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Za(n,0)},ar.gb=function(t){return fc(this,t).h},ar.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Za(n,this.h&t.h)},ar.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Za(n,this.h|t.h)},ar.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Za(n,this.h^t.h)},Ka.prototype.createWebChannel=Ka.prototype.g,Wa.prototype.send=Wa.prototype.u,Wa.prototype.open=Wa.prototype.m,Wa.prototype.close=Wa.prototype.close,Xs.NO_ERROR=0,Xs.TIMEOUT=8,Xs.HTTP_ERROR=6,Ys.COMPLETE="complete",eo.EventType=io,io.OPEN="a",io.CLOSE="b",io.ERROR="c",io.MESSAGE="d",ys.prototype.listen=ys.prototype.O,da.prototype.listenOnce=da.prototype.P,da.prototype.getLastError=da.prototype.Sa,da.prototype.getLastErrorCode=da.prototype.Ia,da.prototype.getStatus=da.prototype.da,da.prototype.getResponseJson=da.prototype.Wa,da.prototype.getResponseText=da.prototype.ja,da.prototype.send=da.prototype.ha,da.prototype.setWithCredentials=da.prototype.Oa,Xa.prototype.digest=Xa.prototype.l,Xa.prototype.reset=Xa.prototype.reset,Xa.prototype.update=Xa.prototype.j,Za.prototype.add=Za.prototype.add,Za.prototype.multiply=Za.prototype.R,Za.prototype.modulo=Za.prototype.gb,Za.prototype.compare=Za.prototype.X,Za.prototype.toNumber=Za.prototype.ea,Za.prototype.toString=Za.prototype.toString,Za.prototype.getBits=Za.prototype.D,Za.fromNumber=nc,Za.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return lc(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=nc(Math.pow(n,8)),r=rc,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=nc(Math.pow(n,o)),r=r.R(o).add(nc(a))):r=(r=r.R(i)).add(nc(a))}return r};var gc=lr.createWebChannelTransport=function(){return new Ka},yc=lr.getStatEventTarget=function(){return $s()},vc=lr.ErrorCode=Xs,wc=lr.EventType=Ys,bc=lr.Event=zs,Ec=lr.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_c=lr.FetchXmlHttpFactory=sa,Tc=lr.WebChannel=eo,Ic=lr.XhrIo=da,kc=lr.Md5=Xa,Sc=lr.Integer=Za;const Cc="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ac.UNAUTHENTICATED=new Ac(null),Ac.GOOGLE_CREDENTIALS=new Ac("google-credentials-uid"),Ac.FIRST_PARTY=new Ac("first-party-uid"),Ac.MOCK_USER=new Ac("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Nc="10.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new it("@firebase/firestore");function Rc(){return xc.logLevel}function Oc(t,...e){if(xc.logLevel<=X.DEBUG){const n=e.map(Pc);xc.debug(`Firestore (${Nc}): ${t}`,...n)}}function Dc(t,...e){if(xc.logLevel<=X.ERROR){const n=e.map(Pc);xc.error(`Firestore (${Nc}): ${t}`,...n)}}function Lc(t,...e){if(xc.logLevel<=X.WARN){const n=e.map(Pc);xc.warn(`Firestore (${Nc}): ${t}`,...n)}}function Pc(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return e=t,JSON.stringify(e)}catch(e){return t}var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t="Unexpected state"){const e=`FIRESTORE (${Nc}) INTERNAL ASSERTION FAILED: `+t;throw Dc(e),new Error(e)}function Uc(t,e){t||Mc()}function Fc(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vc extends D{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ac.UNAUTHENTICATED)))}shutdown(){}}class $c{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Hc{constructor(t){this.t=t,this.currentUser=Ac.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new jc;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new jc,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Oc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Oc("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new jc)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Oc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Uc("string"==typeof e.accessToken),new zc(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Uc(null===t||"string"==typeof t),new Ac(t)}}class Kc{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Ac.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Wc{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Kc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Ac.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Oc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Oc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Oc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Oc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Uc("string"==typeof t.token),this.R=t.token,new Gc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=Jc(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%62))}return n}}function Yc(t,e){return t<e?-1:t>e?1:0}function Zc(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Vc(Bc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Vc(Bc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Vc(Bc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Vc(Bc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tl.fromMillis(Date.now())}static fromDate(t){return tl.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new tl(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Yc(this.nanoseconds,t.nanoseconds):Yc(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t){this.timestamp=t}static fromTimestamp(t){return new el(t)}static min(){return new el(new tl(0,0))}static max(){return new el(new tl(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,e,n){void 0===e?e=0:e>t.length&&Mc(),void 0===n?n=t.length-e:n>t.length-e&&Mc(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===nl.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nl?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class il extends nl{construct(t,e,n){return new il(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Vc(Bc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new il(e)}static emptyPath(){return new il([])}}const rl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sl extends nl{construct(t,e,n){return new sl(t,e,n)}static isValidIdentifier(t){return rl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sl.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new sl(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Vc(Bc.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Vc(Bc.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Vc(Bc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Vc(Bc.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new sl(e)}static emptyPath(){return new sl([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t){this.path=t}static fromPath(t){return new ol(il.fromString(t))}static fromName(t){return new ol(il.fromString(t).popFirst(5))}static empty(){return new ol(il.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===il.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return il.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ol(new il(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}al.UNKNOWN_ID=-1;function cl(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=el.fromTimestamp(1e9===i?new tl(n+1,0):new tl(n,i));return new ul(r,ol.empty(),e)}function ll(t){return new ul(t.readTime,t.key,-1)}class ul{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ul(el.min(),ol.empty(),-1)}static max(){return new ul(el.max(),ol.empty(),-1)}}function hl(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ol.comparator(t.documentKey,e.documentKey),0!==n?n:Yc(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t){if(t.code!==Bc.FAILED_PRECONDITION||t.message!==dl)throw t;Oc("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Mc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ml(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ml?e:ml.resolve(e)}catch(t){return ml.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ml.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ml.reject(e)}static resolve(t){return new ml(((e,n)=>{e(t)}))}static reject(t){return new ml(((e,n)=>{n(t)}))}static waitFor(t){return new ml(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=ml.resolve(!1);for(const n of t)e=e.next((t=>t?ml.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new ml(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new ml(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yl{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function vl(t){return null==t}function wl(t){return 0===t&&1/t==-1/0}function bl(t){return"number"==typeof t&&Number.isInteger(t)&&!wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yl.ae=-1;const El=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_l=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Tl=_l;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Il(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,e){this.comparator=t,this.root=e||Nl.EMPTY}insert(t,e){return new Cl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Nl.BLACK,null,null))}remove(t){return new Cl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Nl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Al(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Al(this.root,t,this.comparator,!1)}getReverseIterator(){return new Al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Al(this.root,t,this.comparator,!0)}}class Al{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Nl{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Nl.RED,this.left=null!=i?i:Nl.EMPTY,this.right=null!=r?r:Nl.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Nl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Nl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Nl.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Nl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Nl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mc();if(this.right.isRed())throw Mc();const t=this.left.check();if(t!==this.right.check())throw Mc();return t+(this.isRed()?0:1)}}Nl.EMPTY=null,Nl.RED=!0,Nl.BLACK=!1,Nl.EMPTY=new class{constructor(){this.size=0}get key(){throw Mc()}get value(){throw Mc()}get color(){throw Mc()}get left(){throw Mc()}get right(){throw Mc()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Nl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xl{constructor(t){this.comparator=t,this.data=new Cl(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Rl(this.data.getIterator())}getIteratorFrom(t){return new Rl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof xl))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new xl(this.comparator);return e.data=t,e}}class Rl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ol{constructor(t){this.fields=t,t.sort(sl.comparator)}static empty(){return new Ol([])}unionWith(t){let e=new xl(sl.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Ol(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zc(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ll{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Dl("Invalid base64 string: "+t):t}}(t);return new Ll(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ll(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Yc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ll.EMPTY_BYTE_STRING=new Ll("");const Pl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ml(t){if(Uc(!!t),"string"==typeof t){let e=0;const n=Pl.exec(t);if(Uc(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ul(t.seconds),nanos:Ul(t.nanos)}}function Ul(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Fl(t){return"string"==typeof t?Ll.fromBase64String(t):Ll.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Vl(t){const e=t.mapValue.fields.__previous_value__;return Bl(e)?Vl(e):e}function jl(t){const e=Ml(t.mapValue.fields.__local_write_time__.timestampValue);return new tl(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,n,i,r,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class ql{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ql("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ql&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bl(t)?4:ru(t)?9007199254740991:10:Mc()}function Kl(t,e){if(t===e)return!0;const n=Hl(t);if(n!==Hl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jl(t).isEqual(jl(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ml(t.timestampValue),i=Ml(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,Fl(t.bytesValue).isEqual(Fl(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ul(t.geoPointValue.latitude)===Ul(e.geoPointValue.latitude)&&Ul(t.geoPointValue.longitude)===Ul(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ul(t.integerValue)===Ul(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ul(t.doubleValue),i=Ul(e.doubleValue);return n===i?wl(n)===wl(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Zc(t.arrayValue.values||[],e.arrayValue.values||[],Kl);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Il(n)!==Il(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Kl(n[t],i[t])))return!1;return!0}(t,e);default:return Mc()}var i}function Wl(t,e){return void 0!==(t.values||[]).find((t=>Kl(t,e)))}function Gl(t,e){if(t===e)return 0;const n=Hl(t),i=Hl(e);if(n!==i)return Yc(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Yc(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ul(t.integerValue||t.doubleValue),i=Ul(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Ql(t.timestampValue,e.timestampValue);case 4:return Ql(jl(t),jl(e));case 5:return Yc(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Fl(t),i=Fl(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Yc(n[t],i[t]);if(0!==e)return e}return Yc(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Yc(Ul(t.latitude),Ul(e.latitude));return 0!==n?n:Yc(Ul(t.longitude),Ul(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Gl(n[t],i[t]);if(e)return e}return Yc(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===$l.mapValue&&e===$l.mapValue)return 0;if(t===$l.mapValue)return 1;if(e===$l.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=Yc(i[t],s[t]);if(0!==e)return e;const o=Gl(n[i[t]],r[s[t]]);if(0!==o)return o}return Yc(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Mc()}}function Ql(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Yc(t,e);const n=Ml(t),i=Ml(e),r=Yc(n.seconds,i.seconds);return 0!==r?r:Yc(n.nanos,i.nanos)}function Jl(t){return Xl(t)}function Xl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ml(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fl(t.bytesValue).toBase64():"referenceValue"in t?function(t){return ol.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Xl(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Xl(t.fields[r])}`;return n+"}"}(t.mapValue):Mc()}function Yl(t){return!!t&&"integerValue"in t}function Zl(t){return!!t&&"arrayValue"in t}function tu(t){return!!t&&"nullValue"in t}function eu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nu(t){return!!t&&"mapValue"in t}function iu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kl(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=iu(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=iu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ru(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class su{constructor(t){this.value=t}static empty(){return new su({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!nu(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=iu(e)}setAll(t){let e=sl.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=iu(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());nu(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kl(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];nu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){kl(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new su(iu(this.value))}}function ou(t){const e=[];return kl(t.fields,((t,n)=>{const i=new sl([t]);if(nu(n)){const t=ou(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Ol(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class au{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new au(t,0,el.min(),el.min(),el.min(),su.empty(),0)}static newFoundDocument(t,e,n,i){return new au(t,1,e,el.min(),n,i,0)}static newNoDocument(t,e){return new au(t,2,e,el.min(),el.min(),su.empty(),0)}static newUnknownDocument(t,e){return new au(t,3,e,el.min(),el.min(),su.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(el.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=su.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=su.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=el.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof au&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new au(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t,e){this.position=t,this.inclusive=e}}function lu(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?ol.comparator(ol.fromName(o.referenceValue),n.key):Gl(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function uu(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kl(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e="asc"){this.field=t,this.dir=e}}function du(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{}class pu extends fu{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new _u(t,e,n):"array-contains"===e?new Su(t,n):"in"===e?new Cu(t,n):"not-in"===e?new Au(t,n):"array-contains-any"===e?new Nu(t,n):new pu(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Tu(t,n):new Iu(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Gl(e,this.value)):null!==e&&Hl(this.value)===Hl(e)&&this.matchesComparison(Gl(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Mc()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mu extends fu{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new mu(t,e)}matches(t){return gu(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function gu(t){return"and"===t.op}function yu(t){return vu(t)&&gu(t)}function vu(t){for(const e of t.filters)if(e instanceof mu)return!1;return!0}function wu(t){if(t instanceof pu)return t.field.canonicalString()+t.op.toString()+Jl(t.value);if(yu(t))return t.filters.map((t=>wu(t))).join(",");{const e=t.filters.map((t=>wu(t))).join(",");return`${t.op}(${e})`}}function bu(t,e){return t instanceof pu?(n=t,(i=e)instanceof pu&&n.op===i.op&&n.field.isEqual(i.field)&&Kl(n.value,i.value)):t instanceof mu?function(t,e){return e instanceof mu&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&bu(n,e.filters[i])),!0)}(t,e):void Mc();var n,i}function Eu(t){return t instanceof pu?`${(e=t).field.canonicalString()} ${e.op} ${Jl(e.value)}`:t instanceof mu?function(t){return t.op.toString()+" {"+t.getFilters().map(Eu).join(" ,")+"}"}(t):"Filter";var e}class _u extends pu{constructor(t,e,n){super(t,e,n),this.key=ol.fromName(n.referenceValue)}matches(t){const e=ol.comparator(t.key,this.key);return this.matchesComparison(e)}}class Tu extends pu{constructor(t,e){super(t,"in",e),this.keys=ku("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Iu extends pu{constructor(t,e){super(t,"not-in",e),this.keys=ku("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ku(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ol.fromName(t.referenceValue)))}class Su extends pu{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Zl(e)&&Wl(e.arrayValue,this.value)}}class Cu extends pu{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Wl(this.value.arrayValue,e)}}class Au extends pu{constructor(t,e){super(t,"not-in",e)}matches(t){if(Wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Wl(this.value.arrayValue,e)}}class Nu extends pu{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Zl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Wl(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.he=null}}function Ru(t,e=null,n=[],i=[],r=null,s=null,o=null){return new xu(t,e,n,i,r,s,o)}function Ou(t){const e=Fc(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>wu(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),vl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Jl(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Jl(t))).join(",")),e.he=t}return e.he}function Du(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!du(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uu(t.startAt,e.startAt)&&uu(t.endAt,e.endAt)}function Lu(t){return ol.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pu{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Mu(t,e,n,i,r,s,o,a){return new Pu(t,e,n,i,r,s,o,a)}function Uu(t){return new Pu(t)}function Fu(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Bu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vu(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ju(t){return null!==t.collectionGroup}function zu(t){const e=Fc(t);if(null===e.Pe){e.Pe=[];const t=Vu(e),n=Bu(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new hu(t)),e.Pe.push(new hu(sl.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new hu(sl.keyField(),t))}}}return e.Pe}function qu(t){const e=Fc(t);if(!e.Ie)if("F"===e.limitType)e.Ie=Ru(e.path,e.collectionGroup,zu(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of zu(e)){const e="desc"===n.dir?"asc":"desc";t.push(new hu(n.field,e))}const n=e.endAt?new cu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new cu(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ru(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.Ie}function $u(t,e,n){return new Pu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hu(t,e){return Du(qu(t),qu(e))&&t.limitType===e.limitType}function Ku(t){return`${Ou(qu(t))}|lt:${t.limitType}`}function Wu(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Eu(t))).join(", ")}]`),vl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Jl(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Jl(t))).join(",")),`Target(${e})`}(qu(t))}; limitType=${t.limitType})`}function Gu(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ol.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of zu(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=lu(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,zu(n),i)||n.endAt&&!function(t,e,n){const i=lu(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,zu(n),i)));var n,i}function Qu(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ju(t){return(e,n)=>{let i=!1;for(const r of zu(t)){const t=Xu(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Xu(t,e,n){const i=t.field.isKeyField()?ol.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Gl(i,r):Mc()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Mc()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){kl(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Sl(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Cl(ol.comparator);function th(){return Zu}const eh=new Cl(ol.comparator);function nh(...t){let e=eh;for(const n of t)e=e.insert(n.key,n);return e}function ih(t){let e=eh;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function rh(){return oh()}function sh(){return oh()}function oh(){return new Yu((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ah=new Cl(ol.comparator),ch=new xl(ol.comparator);function lh(...t){let e=ch;for(const n of t)e=e.add(n);return e}const uh=new xl(Yc);function hh(){return uh}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wl(e)?"-0":e}}function fh(t){return{integerValue:""+t}}function ph(t,e){return bl(e)?fh(e):dh(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this._=void 0}}function gh(t,e,n){return t instanceof wh?bh(t,e):t instanceof Eh?_h(t,e):n}function yh(t,e){return t instanceof Th?Yl(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null;var n,i}class vh extends mh{}class wh extends mh{constructor(t){super(),this.elements=t}}function bh(t,e){const n=kh(e);for(const e of t.elements)n.some((t=>Kl(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Eh extends mh{constructor(t){super(),this.elements=t}}function _h(t,e){let n=kh(e);for(const e of t.elements)n=n.filter((t=>!Kl(t,e)));return{arrayValue:{values:n}}}class Th extends mh{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Ih(t){return Ul(t.integerValue||t.doubleValue)}function kh(t){return Zl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e){this.version=t,this.transformResults=e}}class Ch{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ch}static exists(t){return new Ch(void 0,t)}static updateTime(t){return new Ch(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ah(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Nh{}function xh(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Vh(t.key,Ch.none()):new Ph(t.key,t.data,Ch.none());{const n=t.data,i=su.empty();let r=new xl(sl.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Mh(t.key,i,new Ol(r.toArray()),Ch.none())}}function Rh(t,e,n){var i;t instanceof Ph?function(t,e,n){const i=t.value.clone(),r=Fh(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Mh?function(t,e,n){if(!Ah(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Fh(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Uh(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function Oh(t,e,n,i){return t instanceof Ph?function(t,e,n,i){if(!Ah(t.precondition,e))return n;const r=t.value.clone(),s=Bh(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Mh?function(t,e,n,i){if(!Ah(t.precondition,e))return n;const r=Bh(t.fieldTransforms,i,e),s=e.data;return s.setAll(Uh(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(r=e,s=n,Ah(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):s);var r,s}function Dh(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=yh(i.transform,t||null);null!=r&&(null===n&&(n=su.empty()),n.set(i.field,r))}return n||null}function Lh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Zc(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof wh&&i instanceof wh||n instanceof Eh&&i instanceof Eh?Zc(n.elements,i.elements,Kl):n instanceof Th&&i instanceof Th?Kl(n.Te,i.Te):n instanceof vh&&i instanceof vh);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class Ph extends Nh{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mh extends Nh{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Uh(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Fh(t,e,n){const i=new Map;Uc(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,gh(o,a,n[r]))}return i}function Bh(t,e,n){const i=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);i.set(a.field,(s=c,o=e,(r=t)instanceof vh?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Bl(e)&&(e=Vl(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):r instanceof wh?bh(r,s):r instanceof Eh?_h(r,s):function(t,e){const n=yh(t,e),i=Ih(n)+Ih(t.Te);return Yl(n)&&Yl(t.Te)?fh(i):dh(t.serializer,i)}(r,s)))}var r,s,o;return i}class Vh extends Nh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jh extends Nh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Rh(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Oh(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Oh(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=sh();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=xh(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(el.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),lh())}isEqual(t){return this.batchId===t.batchId&&Zc(this.mutations,t.mutations,((t,e)=>Lh(t,e)))&&Zc(this.baseMutations,t.baseMutations,((t,e)=>Lh(t,e)))}}class qh{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Uc(t.mutations.length===n.length);let i=ah;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new qh(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hh{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kh,Wh;function Gh(t){switch(t){default:return Mc();case Bc.CANCELLED:case Bc.UNKNOWN:case Bc.DEADLINE_EXCEEDED:case Bc.RESOURCE_EXHAUSTED:case Bc.INTERNAL:case Bc.UNAVAILABLE:case Bc.UNAUTHENTICATED:return!1;case Bc.INVALID_ARGUMENT:case Bc.NOT_FOUND:case Bc.ALREADY_EXISTS:case Bc.PERMISSION_DENIED:case Bc.FAILED_PRECONDITION:case Bc.ABORTED:case Bc.OUT_OF_RANGE:case Bc.UNIMPLEMENTED:case Bc.DATA_LOSS:return!0}}function Qh(t){if(void 0===t)return Dc("GRPC error has no .code"),Bc.UNKNOWN;switch(t){case Kh.OK:return Bc.OK;case Kh.CANCELLED:return Bc.CANCELLED;case Kh.UNKNOWN:return Bc.UNKNOWN;case Kh.DEADLINE_EXCEEDED:return Bc.DEADLINE_EXCEEDED;case Kh.RESOURCE_EXHAUSTED:return Bc.RESOURCE_EXHAUSTED;case Kh.INTERNAL:return Bc.INTERNAL;case Kh.UNAVAILABLE:return Bc.UNAVAILABLE;case Kh.UNAUTHENTICATED:return Bc.UNAUTHENTICATED;case Kh.INVALID_ARGUMENT:return Bc.INVALID_ARGUMENT;case Kh.NOT_FOUND:return Bc.NOT_FOUND;case Kh.ALREADY_EXISTS:return Bc.ALREADY_EXISTS;case Kh.PERMISSION_DENIED:return Bc.PERMISSION_DENIED;case Kh.FAILED_PRECONDITION:return Bc.FAILED_PRECONDITION;case Kh.ABORTED:return Bc.ABORTED;case Kh.OUT_OF_RANGE:return Bc.OUT_OF_RANGE;case Kh.UNIMPLEMENTED:return Bc.UNIMPLEMENTED;case Kh.DATA_LOSS:return Bc.DATA_LOSS;default:return Mc()}}(Wh=Kh||(Kh={}))[Wh.OK=0]="OK",Wh[Wh.CANCELLED=1]="CANCELLED",Wh[Wh.UNKNOWN=2]="UNKNOWN",Wh[Wh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wh[Wh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wh[Wh.NOT_FOUND=5]="NOT_FOUND",Wh[Wh.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wh[Wh.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wh[Wh.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wh[Wh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wh[Wh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wh[Wh.ABORTED=10]="ABORTED",Wh[Wh.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wh[Wh.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wh[Wh.INTERNAL=13]="INTERNAL",Wh[Wh.UNAVAILABLE=14]="UNAVAILABLE",Wh[Wh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Xh}static getOrCreateInstance(){return null===Xh&&(Xh=new Jh),Xh}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Xh=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Sc([4294967295,4294967295],0);function td(t){const e=Yh().encode(t),n=new kc;return n.update(e),new Uint8Array(n.digest())}function ed(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Sc([n,i],0),new Sc([r,s],0)]}class nd{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new id(`Invalid padding: ${e}`);if(n<0)throw new id(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new id(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new id(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=Sc.fromNumber(this.de)}Re(t,e,n){let i=t.add(e.multiply(Sc.fromNumber(n)));return 1===i.compare(Zh)&&(i=new Sc([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.de)return!1;const e=td(t),[n,i]=ed(e);for(let t=0;t<this.hashCount;t++){const e=this.Re(n,i,t);if(!this.Ve(e))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),s=new nd(r,i,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.de)return;const e=td(t),[n,i]=ed(e);for(let t=0;t<this.hashCount;t++){const e=this.Re(n,i,t);this.me(e)}}me(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class id extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,sd.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new rd(el.min(),i,new Cl(Yc),th(),lh())}}class sd{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new sd(n,e,lh(),lh(),lh())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,e,n,i){this.fe=t,this.removedTargetIds=e,this.key=n,this.ge=i}}class ad{constructor(t,e){this.targetId=t,this.pe=e}}class cd{constructor(t,e,n=Ll.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ld{constructor(){this.ye=0,this.we=dd(),this.Se=Ll.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=lh(),e=lh(),n=lh();return this.we.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Mc()}})),new sd(this.Se,this.be,t,e,n)}xe(){this.De=!1,this.we=dd()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class ud{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=th(),this.$e=hd(),this.Ue=new Cl(Yc)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,(e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Fe(t.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(t.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(n.ke(),n.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Fe(t.resumeToken));break;default:Mc()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach(((t,n)=>{this.Je(n)&&e(n)}))}Ze(t){var e,n;const i=t.targetId,r=t.pe.count,s=this.Xe(i);if(s){const o=s.target;if(Lu(o))if(0===r){const t=new ol(o.path);this.ze(i,t,au.newNoDocument(t,el.min()))}else Uc(1===r);else{const s=this.et(i);if(s!==r){const r=this.tt(t,s);if(0!==r.status){this.Ye(i);const t=2===r.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,t)}null===(e=Jh.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n,i){var r,s,o,a,c,l;const u={localCacheCount:n,existenceFilterCount:i.count},h=i.unchangedNames;return h&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==h?void 0:h.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(a=null===(o=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===o?void 0:o.length)&&void 0!==a?a:0,padding:null!==(l=null===(c=null==h?void 0:h.bits)||void 0===c?void 0:c.padding)&&void 0!==l?l:0},e&&(u.bloomFilter.mightContain=e)),u}(r.status,null!==(n=r.nt)&&void 0!==n?n:null,s,t.pe))}}}}tt(t,e){const{unchangedNames:n,count:i}=t.pe;if(!n||!n.bits)return{status:1};const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=Fl(r).toUint8Array()}catch(t){if(t instanceof Dl)return Lc("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw t}try{c=new nd(a,s,o)}catch(t){return Lc(t instanceof id?"BloomFilter error: ":"Applying bloom filter failed: ",t),{status:1}}const l=t=>{const e=this.qe.rt();return c.mightContain(`projects/${e.projectId}/databases/${e.database}/documents/${t}`)};return 0===c.de?{status:1}:{status:i===e-this.it(t.targetId,l)?0:2,nt:l}}it(t,e){const n=this.qe.getRemoteKeysForTarget(t);let i=0;return n.forEach((n=>{e(n.path.canonicalString())||(this.ze(t,n,null),i++)})),i}st(t){const e=new Map;this.Qe.forEach(((n,i)=>{const r=this.Xe(i);if(r){if(n.current&&Lu(r.target)){const e=new ol(r.target.path);null!==this.Ke.get(e)||this.ot(i,e)||this.ze(i,e,au.newNoDocument(e,t))}n.Ce&&(e.set(i,n.Me()),n.xe())}}));let n=lh();this.$e.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Xe(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Ke.forEach(((e,n)=>n.setReadTime(t)));const i=new rd(t,e,this.Ue,this.Ke,n);return this.Ke=th(),this.$e=hd(),this.Ue=new Cl(Yc),i}Ge(t,e){if(!this.Je(t))return;const n=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,n),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const i=this.He(t);this.ot(t,e)?i.Oe(e,1):i.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),n&&(this.Ke=this.Ke.insert(e,n))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new ld,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new xl(Yc),this.$e=this.$e.insert(t,e)),e}Je(t){const e=null!==this.Xe(t);return e||Oc("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new ld),this.qe.getRemoteKeysForTarget(t).forEach((e=>{this.ze(t,e,null)}))}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function hd(){return new Cl(ol.comparator)}function dd(){return new Cl(ol.comparator)}const fd={asc:"ASCENDING",desc:"DESCENDING"},pd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},md={and:"AND",or:"OR"};class gd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function yd(t,e){return t.useProto3Json||vl(e)?e:{value:e}}function vd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wd(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bd(t,e){return vd(t,e.toTimestamp())}function Ed(t){return Uc(!!t),el.fromTimestamp(function(t){const e=Ml(t);return new tl(e.seconds,e.nanos)}(t))}function _d(t,e){return(n=t,new il(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Td(t){const e=il.fromString(t);return Uc(zd(e)),e}function Id(t,e){return _d(t.databaseId,e.path)}function kd(t,e){const n=Td(e);if(n.get(1)!==t.databaseId.projectId)throw new Vc(Bc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Vc(Bc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ol(Nd(n))}function Sd(t,e){return _d(t.databaseId,e)}function Cd(t){const e=Td(t);return 4===e.length?il.emptyPath():Nd(e)}function Ad(t){return new il(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nd(t){return Uc(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function xd(t,e,n){return{name:Id(t,e),fields:n.value.mapValue.fields}}function Rd(t,e){let n;if(e instanceof Ph)n={update:xd(t,e.key,e.value)};else if(e instanceof Vh)n={delete:Id(t,e.key)};else if(e instanceof Mh)n={update:xd(t,e.key,e.data),updateMask:jd(e.fieldMask)};else{if(!(e instanceof jh))return Mc();n={verify:Id(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof vh)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof wh)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Eh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Th)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw Mc()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(r=e.precondition).updateTime?{updateTime:bd(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:Mc())),n;var i,r}function Od(t,e){return{documents:[Sd(t,e.path)]}}function Dd(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Sd(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sd(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0!==t.length)return Vd(mu.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Fd((e=t).field),direction:Md(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=yd(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n;var a}function Ld(t){let e=Cd(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Uc(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Pd(t);return e instanceof mu&&yu(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new hu(Bd((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,vl(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new cu(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new cu(n,e)}(n.endAt)),Mu(e,r,o,s,a,"F",c,l)}function Pd(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bd(t.unaryFilter.field);return pu.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bd(t.unaryFilter.field);return pu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bd(t.unaryFilter.field);return pu.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Bd(t.unaryFilter.field);return pu.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Mc()}}(t):void 0!==t.fieldFilter?(n=t,pu.create(Bd(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mc()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,mu.create(e.compositeFilter.filters.map((t=>Pd(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Mc()}}(e.compositeFilter.op))):Mc();var e,n}function Md(t){return fd[t]}function Ud(t){return pd[t]}function Fd(t){return{fieldPath:t.canonicalString()}}function Bd(t){return sl.fromServerFormat(t.fieldPath)}function Vd(t){return t instanceof pu?function(t){if("=="===t.op){if(eu(t.value))return{unaryFilter:{field:Fd(t.field),op:"IS_NAN"}};if(tu(t.value))return{unaryFilter:{field:Fd(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(eu(t.value))return{unaryFilter:{field:Fd(t.field),op:"IS_NOT_NAN"}};if(tu(t.value))return{unaryFilter:{field:Fd(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fd(t.field),op:Ud(t.op),value:t.value}}}(t):t instanceof mu?function(t){const e=t.getFilters().map((t=>Vd(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,md[n]),filters:e}};var n}(t):Mc()}function jd(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function zd(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e,n,i,r=el.min(),s=el.min(),o=Ll.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new qd(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qd(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t){this.ct=t}}function Hd(t){const e=Ld({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?$u(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(Ul(t.integerValue));else if("doubleValue"in t){const n=Ul(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),wl(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Et(e,20),"string"==typeof n?e.At(n):(e.At(`${n.seconds||""}`),e.dt(n.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(Fl(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?ru(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):Mc()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const t of Object.keys(n))this.Rt(t,e),this.It(n[t],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const t of n)this.It(t,e)}gt(t,e){this.Et(e,37),ol.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}Kd.bt=new Kd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wd{constructor(){this.sn=new Gd}addToCollectionParentIndex(t,e){return this.sn.add(e),ml.resolve()}getCollectionParents(t,e){return ml.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return ml.resolve()}deleteFieldIndex(t,e){return ml.resolve()}getDocumentsMatchingTarget(t,e){return ml.resolve(null)}getIndexType(t,e){return ml.resolve(0)}getFieldIndexes(t,e){return ml.resolve([])}getNextCollectionGroupToUpdate(t){return ml.resolve(null)}getMinOffset(t,e){return ml.resolve(ul.min())}getMinOffsetFromCollectionGroup(t,e){return ml.resolve(ul.min())}updateCollectionGroup(t,e,n){return ml.resolve()}updateIndexEntries(t,e){return ml.resolve()}}class Gd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new xl(il.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new xl(il.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Qd{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Qd(t,Qd.DEFAULT_COLLECTION_PERCENTILE,Qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qd.DEFAULT_COLLECTION_PERCENTILE=10,Qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qd.DEFAULT=new Qd(41943040,Qd.DEFAULT_COLLECTION_PERCENTILE,Qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qd.DISABLED=new Qd(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jd{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Jd(0)}static On(){return new Jd(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xd{constructor(){this.changes=new Yu((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,au.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ml.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Oh(n.mutation,t,Ol.empty(),tl.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,lh()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=lh()){const i=rh();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=nh();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=rh();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,lh())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=th();const s=oh(),o=oh();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Mh)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Oh(o.mutation,e,o.mutation.getFieldMask(),tl.now())):s.set(e.key,Ol.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Yd(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=oh();let i=new Cl(((t,e)=>t-e)),r=lh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ol.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||lh()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=sh();c.forEach((t=>{if(!r.has(t)){const i=xh(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return ml.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return i=e,ol.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):ju(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var i}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):ml.resolve(rh());let o=-1,a=r;return s.next((e=>ml.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?ml.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,lh()))).next((t=>({batchId:o,changes:ih(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ol(e)).next((t=>{let e=nh();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=nh();return this.indexManager.getCollectionParents(t,i).next((s=>ml.forEach(s,(s=>{const o=(a=e,c=s.child(i),new Pu(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,au.newInvalidDocument(i)))}));let n=nh();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Oh(s.mutation,r,Ol.empty(),tl.now()),Gu(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return ml.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,{id:(n=e).id,version:n.version,createTime:Ed(n.createTime)}),ml.resolve();var n}getNamedQuery(t,e){return ml.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,{name:(n=e).name,query:Hd(n.bundledQuery),readTime:Ed(n.readTime)}),ml.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.overlays=new Cl(ol.comparator),this.cr=new Map}getOverlay(t,e){return ml.resolve(this.overlays.get(e))}getOverlays(t,e){const n=rh();return ml.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),ml.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.cr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.cr.delete(n)),ml.resolve()}getOverlaysForCollection(t,e,n){const i=rh(),r=e.length+1,s=new ol(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return ml.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Cl(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=rh(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=rh(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return ml.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.cr.get(i.largestBatchId).delete(n.key);this.cr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new $h(e,n));let r=this.cr.get(e);void 0===r&&(r=lh(),this.cr.set(e,r)),this.cr.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.lr=new xl(rf.hr),this.Pr=new xl(rf.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const n=new rf(t,e);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Er(new rf(t,e))}dr(t,e){t.forEach((t=>this.removeReference(t,e)))}Ar(t){const e=new ol(new il([])),n=new rf(e,t),i=new rf(e,t+1),r=[];return this.Pr.forEachInRange([n,i],(t=>{this.Er(t),r.push(t.key)})),r}Rr(){this.lr.forEach((t=>this.Er(t)))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new ol(new il([])),n=new rf(e,t),i=new rf(e,t+1);let r=lh();return this.Pr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new rf(t,0),n=this.lr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class rf{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return ol.comparator(t.key,e.key)||Yc(t.mr,e.mr)}static Ir(t,e){return Yc(t.mr,e.mr)||ol.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new xl(rf.hr)}checkEmpty(t){return ml.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new zh(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this.pr=this.pr.add(new rf(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return ml.resolve(s)}lookupMutationBatch(t,e){return ml.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.wr(n),r=i<0?0:i;return ml.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ml.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(t){return ml.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rf(e,0),i=new rf(e,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([n,i],(t=>{const e=this.yr(t.mr);r.push(e)})),ml.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new xl(Yc);return e.forEach((t=>{const e=new rf(t,0),i=new rf(t,Number.POSITIVE_INFINITY);this.pr.forEachInRange([e,i],(t=>{n=n.add(t.mr)}))})),ml.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;ol.isDocumentKey(r)||(r=r.child(""));const s=new rf(new ol(r),0);let o=new xl(Yc);return this.pr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.mr)),!0)}),s),ml.resolve(this.Sr(o))}Sr(t){const e=[];return t.forEach((t=>{const n=this.yr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Uc(0===this.br(e.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return ml.forEach(e.mutations,(i=>{const r=new rf(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.pr=n}))}Cn(t){}containsKey(t,e){const n=new rf(e,0),i=this.pr.firstAfterOrEqual(n);return ml.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,ml.resolve()}br(t,e){return this.wr(t)}wr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t){this.Dr=t,this.docs=new Cl(ol.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Dr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ml.resolve(n?n.document.mutableCopy():au.newInvalidDocument(e))}getEntries(t,e){let n=th();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():au.newInvalidDocument(t))})),ml.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=th();const s=e.path,o=new ol(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||hl(ll(o),n)<=0||(i.has(o.key)||Gu(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return ml.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Mc()}vr(t,e){return ml.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new af(this)}getSize(t){return ml.resolve(this.size)}}class af extends Xd{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(n)})),ml.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.persistence=t,this.Cr=new Yu((t=>Ou(t)),Du),this.lastRemoteSnapshotVersion=el.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new nf,this.targetCount=0,this.Or=Jd.xn()}forEachTarget(t,e){return this.Cr.forEach(((t,n)=>e(n))),ml.resolve()}getLastRemoteSnapshotVersion(t){return ml.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ml.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),ml.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fr&&(this.Fr=e),ml.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new Jd(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,ml.resolve()}updateTargetData(t,e){return this.Ln(e),ml.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,ml.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Cr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),ml.waitFor(r).next((()=>i))}getTargetCount(t){return ml.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cr.get(e)||null;return ml.resolve(n)}addMatchingKeys(t,e,n){return this.Mr.Tr(e,n),ml.resolve()}removeMatchingKeys(t,e,n){this.Mr.dr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),ml.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),ml.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Mr.Vr(e);return ml.resolve(n)}containsKey(t,e){return ml.resolve(this.Mr.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,e){this.Nr={},this.overlays={},this.Br=new yl(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new cf(this),this.indexManager=new Wd,this.remoteDocumentCache=new of((t=>this.referenceDelegate.qr(t))),this.serializer=new $d(e),this.Qr=new tf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ef,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Nr[t.toKey()];return n||(n=new sf(e,this.referenceDelegate),this.Nr[t.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,n){Oc("MemoryPersistence","Starting transaction:",t);const i=new uf(this.Br.next());return this.referenceDelegate.Kr(),n(i).next((t=>this.referenceDelegate.$r(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ur(t,e){return ml.or(Object.values(this.Nr).map((n=>()=>n.containsKey(t,e))))}}class uf extends fl{constructor(t){super(),this.currentSequenceNumber=t}}class hf{constructor(t){this.persistence=t,this.Wr=new nf,this.Gr=null}static zr(t){return new hf(t)}get jr(){if(this.Gr)return this.Gr;throw Mc()}addReference(t,e,n){return this.Wr.addReference(n,e),this.jr.delete(n.toString()),ml.resolve()}removeReference(t,e,n){return this.Wr.removeReference(n,e),this.jr.add(n.toString()),ml.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),ml.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach((t=>this.jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ml.forEach(this.jr,(n=>{const i=ol.fromPath(n);return this.Hr(t,i).next((t=>{t||e.removeEntry(i,el.min())}))})).next((()=>(this.Gr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hr(t,e).next((t=>{t?this.jr.delete(e.toString()):this.jr.add(e.toString())}))}qr(t){return 0}Hr(t,e){return ml.or([()=>ml.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class df{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Li=n,this.ki=i}static qi(t,e){let n=lh(),i=lh();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new df(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.$i(t,e).next((r=>r||this.Ui(t,e,i,n))).next((n=>n||this.Wi(t,e)))}$i(t,e){if(Fu(e))return ml.resolve(null);let n=qu(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=$u(e,null,"F"),n=qu(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=lh(...i);return this.Ki.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Gi(e,i);return this.zi(e,s,r,n.readTime)?this.$i(t,$u(e,null,"F")):this.ji(t,s,e,n)}))))})))))}Ui(t,e,n,i){return Fu(e)||i.isEqual(el.min())?this.Wi(t,e):this.Ki.getDocuments(t,n).next((r=>{const s=this.Gi(e,r);return this.zi(e,s,n,i)?this.Wi(t,e):(Rc()<=X.DEBUG&&Oc("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wu(e)),this.ji(t,s,e,cl(i,-1)))}))}Gi(t,e){let n=new xl(Ju(t));return e.forEach(((e,i)=>{Gu(t,i)&&(n=n.add(i))})),n}zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(t,e){return Rc()<=X.DEBUG&&Oc("QueryEngine","Using full collection scan to execute query:",Wu(e)),this.Ki.getDocumentsMatchingQuery(t,e,ul.min())}ji(t,e,n,i){return this.Ki.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e,n,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new Cl(Yc),this.Yi=new Yu((t=>Ou(t)),Du),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(n)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Zd(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function mf(t,e,n,i){return new pf(t,e,n,i)}async function gf(t,e){const n=Fc(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=lh();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ts:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function yf(t){const e=Fc(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.kr.getLastRemoteSnapshotVersion(t)))}function vf(t,e,n){let i=lh(),r=lh();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=th();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(el.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Oc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ns:i,rs:r}}))}function wf(t,e){const n=Fc(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function bf(t,e){const n=Fc(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.kr.getTargetData(t,e).next((r=>r?(i=r,ml.resolve(i)):n.kr.allocateTargetId(t).next((r=>(i=new qd(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.kr.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Ji.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function Ef(t,e,n){const i=Fc(t),r=i.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!gl(t))throw t;Oc("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(r.target)}function _f(t,e,n){const i=Fc(t);let r=el.min(),s=lh();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Fc(t),r=i.Yi.get(n);return void 0!==r?ml.resolve(i.Ji.get(r)):i.kr.getTargetData(e,n)}(i,t,qu(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.Hi.getDocumentsMatchingQuery(t,e,n?r:el.min(),n?s:lh()))).next((t=>(Tf(i,Qu(e),t),{documents:t,ss:s})))))}function Tf(t,e,n){let i=t.Zi.get(e)||el.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Zi.set(e,i)}class If{constructor(){this.activeTargetIds=hh()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class kf{constructor(){this.Hs=new If,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,n){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new If,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{Ys(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){Oc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){Oc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Af=null;function Nf(){return null===Af?Af=268435456+Math.round(2147483648*Math.random()):Af++,"0x"+Af.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const xf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="WebChannelConnection";class Df extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=e+"://"+t.host,this.Eo=`projects/${n}/databases/${i}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Ro(){return!1}Vo(t,e,n,i,r){const s=Nf(),o=this.mo(t,e);Oc("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,i,r),this.po(t,o,a,n).then((e=>(Oc("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Lc("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}yo(t,e,n,i,r,s){return this.Vo(t,e,n,i,r)}fo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Nc,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}mo(t,e){const n=xf[t];return`${this.To}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,n,i){const r=Nf();return new Promise(((s,o)=>{const a=new Ic;a.setWithCredentials(!0),a.listenOnce(wc.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case vc.NO_ERROR:const e=a.getResponseJson();Oc(Of,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case vc.TIMEOUT:Oc(Of,`RPC '${t}' ${r} timed out`),o(new Vc(Bc.DEADLINE_EXCEEDED,"Request time out"));break;case vc.HTTP_ERROR:const n=a.getStatus();if(Oc(Of,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Bc).indexOf(e)>=0?e:Bc.UNKNOWN}(e.status);o(new Vc(t,e.message))}else o(new Vc(Bc.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Vc(Bc.UNAVAILABLE,"Connection failed."));break;default:Mc()}}finally{Oc(Of,`RPC '${t}' ${r} completed.`)}}));const c=JSON.stringify(i);Oc(Of,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",c,n,15)}))}wo(t,e,n){const i=Nf(),r=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=gc(),o=yc(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new _c({})),this.fo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=r.join("");Oc(Of,`Creating RPC '${t}' stream ${i}: ${l}`,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const f=new Rf({so:e=>{d?Oc(Of,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(h||(Oc(Of,`Opening RPC '${t}' stream ${i} transport.`),u.open(),h=!0),Oc(Of,`RPC '${t}' stream ${i} sending:`,e),u.send(e))},oo:()=>u.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,Tc.EventType.OPEN,(()=>{d||Oc(Of,`RPC '${t}' stream ${i} transport opened.`)})),p(u,Tc.EventType.CLOSE,(()=>{d||(d=!0,Oc(Of,`RPC '${t}' stream ${i} transport closed`),f.Po())})),p(u,Tc.EventType.ERROR,(e=>{d||(d=!0,Lc(Of,`RPC '${t}' stream ${i} transport errored:`,e),f.Po(new Vc(Bc.UNAVAILABLE,"The operation could not be completed")))})),p(u,Tc.EventType.MESSAGE,(e=>{var n;if(!d){const r=e.data[0];Uc(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Oc(Of,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Kh[t];if(void 0!==e)return Qh(e)}(e),r=o.message;void 0===n&&(n=Bc.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),d=!0,f.Po(new Vc(n,r)),u.close()}else Oc(Of,`RPC '${t}' stream ${i} received:`,r),f.Io(r)}})),p(o,bc.STAT_EVENT,(e=>{e.stat===Ec.PROXY?Oc(Of,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===Ec.NOPROXY&&Oc(Of,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.ho()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){return new gd(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t,e,n=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=e,this.So=n,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),i=Math.max(0,e-n);i>0&&Oc("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Fo=Date.now(),t()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t,e,n,i,r,s,o,a){this.ii=t,this.Bo=n,this.Lo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Mf(t,e)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==t?this.Ko.reset():e&&e.code===Bc.RESOURCE_EXHAUSTED?(Dc(e.toString()),Dc("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===Bc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.ko===e&&this.e_(t,n)}),(e=>{t((()=>{const t=new Vc(Bc.UNKNOWN,"Fetching auth token failed: "+e.message);return this.t_(t)}))}))}e_(t,e){const n=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((t=>{n((()=>this.t_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(t){return Oc("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.ko===t?e():(Oc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ff extends Uf{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}n_(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Ko.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(i=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:Mc(),s=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(Uc(void 0===e||"string"==typeof e),Ll.fromBase64String(e||"")):(Uc(void 0===e||e instanceof Uint8Array),Ll.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Bc.UNKNOWN:Qh(t.code);return new Vc(e,t.message||"")}(a);n=new cd(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=kd(t,i.document.name),s=Ed(i.document.updateTime),o=i.document.createTime?Ed(i.document.createTime):el.min(),a=new su({mapValue:{fields:i.document.fields}}),c=au.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new od(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=kd(t,i.document),s=i.readTime?Ed(i.readTime):el.min(),o=au.newNoDocument(r,s),a=i.removedTargetIds||[];n=new od([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=kd(t,i.document),s=i.removedTargetIds||[];n=new od([],s,r,null)}else{if(!("filter"in e))return Mc();{e.filter;const t=e.filter;t.targetId;const{count:i=0,unchangedNames:r}=t,s=new Hh(i,r),o=t.targetId;n=new ad(o,s)}}var i;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return el.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?el.min():e.readTime?Ed(e.readTime):el.min()}(t);return this.listener.r_(e,n)}i_(t){const e={};e.database=Ad(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;if(n=Lu(i)?{documents:Od(t,i)}:{query:Dd(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=wd(t,e.resumeToken);const i=yd(t,e.expectedCount);null!==i&&(n.expectedCount=i)}else if(e.snapshotVersion.compareTo(el.min())>0){n.readTime=vd(t,e.snapshotVersion.toTimestamp());const i=yd(t,e.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Mc()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Ho(e)}s_(t){const e={};e.database=Ad(this.serializer),e.removeTarget=t,this.Ho(e)}}class Bf extends Uf{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Uc(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Uc(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Ed(t.updateTime):Ed(e);return n.isEqual(el.min())&&(n=Ed(e)),new Sh(n,t.transformResults||[])}(t,n)))):[]),r=Ed(t.commitTime);return this.listener.u_(r,i)}var e,n;return Uc(!t.writeResults||0===t.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Ad(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Rd(this.serializer,t)))};this.Ho(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new Vc(Bc.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.Vo(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vc(Bc.UNKNOWN,t.toString())}))}yo(t,e,n,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.yo(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vc(Bc.UNKNOWN,t.toString())}))}terminate(){this.h_=!0}}class jf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(t){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,"Online"===t&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Dc(e),this.d_=!1):Oc("OnlineStateTracker",e)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys((t=>{n.enqueueAndForget((async()=>{Xf(this)&&(Oc("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Fc(t);e.y_.add(4),await $f(e),e.b_.set("Unknown"),e.y_.delete(4),await qf(e)}(this))}))})),this.b_=new jf(n,i)}}async function qf(t){if(Xf(t))for(const e of t.w_)await e(!0)}async function $f(t){for(const e of t.w_)await e(!1)}function Hf(t,e){const n=Fc(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Jf(n)?Qf(n):mp(n).Uo()&&Wf(n,e))}function Kf(t,e){const n=Fc(t),i=mp(n);n.p_.delete(e),i.Uo()&&Gf(n,e),0===n.p_.size&&(i.Uo()?i.zo():Xf(n)&&n.b_.set("Unknown"))}function Wf(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(el.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mp(t).i_(e)}function Gf(t,e){t.D_.Be(e),mp(t).s_(e)}function Qf(t){t.D_=new ud({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),mp(t).start(),t.b_.A_()}function Jf(t){return Xf(t)&&!mp(t).$o()&&t.p_.size>0}function Xf(t){return 0===Fc(t).y_.size}function Yf(t){t.D_=void 0}async function Zf(t){t.p_.forEach(((e,n)=>{Wf(t,e)}))}async function tp(t,e){Yf(t),Jf(t)?(t.b_.m_(e),Qf(t)):t.b_.set("Unknown")}async function ep(t,e,n){if(t.b_.set("Online"),e instanceof cd&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.p_.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.p_.delete(i),t.D_.removeTarget(i))}(t,e)}catch(n){Oc("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await np(t,n)}else if(e instanceof od?t.D_.We(e):e instanceof ad?t.D_.Ze(e):t.D_.je(e),!n.isEqual(el.min()))try{const e=await yf(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.D_.st(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.p_.get(i);r&&t.p_.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const i=t.p_.get(e);if(!i)return;t.p_.set(e,i.withResumeToken(Ll.EMPTY_BYTE_STRING,i.snapshotVersion)),Gf(t,e);const r=new qd(i.target,e,n,i.sequenceNumber);Wf(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Oc("RemoteStore","Failed to raise snapshot:",e),await np(t,e)}}async function np(t,e,n){if(!gl(e))throw e;t.y_.add(1),await $f(t),t.b_.set("Offline"),n||(n=()=>yf(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Oc("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await qf(t)}))}function ip(t,e){return e().catch((n=>np(t,n,e)))}async function rp(t){const e=Fc(t),n=gp(e);let i=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;sp(e);)try{const t=await wf(e.localStore,i);if(null===t){0===e.g_.length&&n.zo();break}i=t.batchId,op(e,t)}catch(t){await np(e,t)}ap(e)&&cp(e)}function sp(t){return Xf(t)&&t.g_.length<10}function op(t,e){t.g_.push(e);const n=gp(t);n.Uo()&&n.__&&n.a_(e.mutations)}function ap(t){return Xf(t)&&!gp(t).$o()&&t.g_.length>0}function cp(t){gp(t).start()}async function lp(t){gp(t).l_()}async function up(t){const e=gp(t);for(const n of t.g_)e.a_(n.mutations)}async function hp(t,e,n){const i=t.g_.shift(),r=qh.from(i,e,n);await ip(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await rp(t)}async function dp(t,e){e&&gp(t).__&&await async function(t,e){if(Gh(n=e.code)&&n!==Bc.ABORTED){const n=t.g_.shift();gp(t).Go(),await ip(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await rp(t)}var n}(t,e),ap(t)&&cp(t)}async function fp(t,e){const n=Fc(t);n.asyncQueue.verifyOperationInProgress(),Oc("RemoteStore","RemoteStore received new credentials");const i=Xf(n);n.y_.add(3),await $f(n),i&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await qf(n)}async function pp(t,e){const n=Fc(t);e?(n.y_.delete(2),await qf(n)):e||(n.y_.add(2),await $f(n),n.b_.set("Unknown"))}function mp(t){return t.v_||(t.v_=function(t,e,n){const i=Fc(t);return i.P_(),new Ff(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{_o:Zf.bind(null,t),uo:tp.bind(null,t),r_:ep.bind(null,t)}),t.w_.push((async e=>{e?(t.v_.Go(),Jf(t)?Qf(t):t.b_.set("Unknown")):(await t.v_.stop(),Yf(t))}))),t.v_}function gp(t){return t.C_||(t.C_=function(t,e,n){const i=Fc(t);return i.P_(),new Bf(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{_o:lp.bind(null,t),uo:dp.bind(null,t),c_:up.bind(null,t),u_:hp.bind(null,t)}),t.w_.push((async e=>{e?(t.C_.Go(),await rp(t)):(await t.C_.stop(),t.g_.length>0&&(Oc("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))}))),t.C_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yp{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new jc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new yp(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vc(Bc.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vp(t,e){if(Dc("AsyncQueue",`${e}: ${t}`),gl(t))return new Vc(Bc.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ol.comparator(e.key,n.key):(t,e)=>ol.comparator(t.key,e.key),this.keyedMap=nh(),this.sortedSet=new Cl(this.comparator)}static emptySet(t){return new wp(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof wp))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new wp;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.F_=new Cl(ol.comparator)}track(t){const e=t.doc.key,n=this.F_.get(e);n?0!==t.type&&3===n.type?this.F_=this.F_.insert(e,t):3===t.type&&1!==n.type?this.F_=this.F_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.F_=this.F_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.F_=this.F_.remove(e):1===t.type&&2===n.type?this.F_=this.F_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):Mc():this.F_=this.F_.insert(e,t)}M_(){const t=[];return this.F_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Ep{constructor(t,e,n,i,r,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Ep(t,e,wp.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.x_=void 0,this.listeners=[]}}class Tp{constructor(){this.queries=new Yu((t=>Ku(t)),Hu),this.onlineState="Unknown",this.O_=new Set}}async function Ip(t,e){const n=Fc(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new _p),r)try{s.x_=await n.onListen(i)}catch(t){const n=vp(t,`Initialization of query '${Wu(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Ap(n)}async function kp(t,e){const n=Fc(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Sp(t,e){const n=Fc(t);let i=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.B_(t)&&(i=!0);r.x_=t}}i&&Ap(n)}function Cp(t,e,n){const i=Fc(t),r=i.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);i.queries.delete(e)}function Ap(t){t.O_.forEach((t=>{t.next()}))}class Np{constructor(t,e,n){this.query=t,this.L_=e,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ep(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),e=!0):this.K_(t,this.onlineState)&&(this.U_(t),e=!0),this.q_=t,e}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let e=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),e=!0),e}K_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.W_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Q_(t){if(t.docChanges.length>0)return!0;const e=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}U_(t){t=Ep.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xp{constructor(t){this.key=t}}class Rp{constructor(t){this.key=t}}class Op{constructor(t,e){this.query=t,this.X_=e,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=lh(),this.mutatedKeys=lh(),this.na=Ju(t),this.ra=new wp(this.na)}get ia(){return this.X_}sa(t,e){const n=e?e.oa:new bp,i=e?e.ra:this.ra;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=Gu(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this._a(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.na(u,a)>0||c&&this.na(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{ra:s,oa:n,zi:o,mutatedKeys:r}}_a(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const r=t.oa.M_();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mc()}};return n(t)-n(e)}(t.type,e.type)||this.na(t.doc,e.doc))),this.aa(n);const s=e?this.ua():[],o=0===this.ta.size&&this.current?1:0,a=o!==this.ea;return this.ea=o,0!==r.length||a?{snapshot:new Ep(this.query,t.ra,i,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:s}:{ca:s}}N_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ra:this.ra,oa:new bp,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach((t=>this.X_=this.X_.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.X_=this.X_.delete(t))),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=lh(),this.ra.forEach((t=>{this.la(t.key)&&(this.ta=this.ta.add(t.key))}));const e=[];return t.forEach((t=>{this.ta.has(t)||e.push(new Rp(t))})),this.ta.forEach((n=>{t.has(n)||e.push(new xp(n))})),e}ha(t){this.X_=t.ss,this.ta=lh();const e=this.sa(t.documents);return this.applyChanges(e,!0)}Pa(){return Ep.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class Dp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Lp{constructor(t){this.key=t,this.Ia=!1}}class Pp{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new Yu((t=>Ku(t)),Hu),this.da=new Map,this.Aa=new Set,this.Ra=new Cl(ol.comparator),this.Va=new Map,this.ma=new nf,this.fa={},this.ga=new Map,this.pa=Jd.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function Mp(t,e){const n=tm(t);let i,r;const s=n.Ea.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Pa();else{const t=await bf(n.localStore,qu(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Up(n,e,i,"current"===s,t.resumeToken),n.isPrimaryClient&&Hf(n.remoteStore,t)}return r}async function Up(t,e,n,i,r){t.wa=(e,n,i)=>async function(t,e,n,i){let r=e.view.sa(n);r.zi&&(r=await _f(t.localStore,e.query,!1).then((({documents:t})=>e.view.sa(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Gp(t,e.targetId,o.ca),o.snapshot}(t,e,n,i);const s=await _f(t.localStore,e,!0),o=new Op(e,s.ss),a=o.sa(s.documents),c=sd.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),l=o.applyChanges(a,t.isPrimaryClient,c);Gp(t,n,l.ca);const u=new Dp(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),l.snapshot}async function Fp(t,e){const n=Fc(t),i=n.Ea.get(e),r=n.da.get(i.targetId);if(r.length>1)return n.da.set(i.targetId,r.filter((t=>!Hu(t,e)))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ef(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Kf(n.remoteStore,i.targetId),Kp(n,i.targetId)})).catch(pl)):(Kp(n,i.targetId),await Ef(n.localStore,i.targetId,!0))}async function Bp(t,e){const n=Fc(t);try{const t=await function(t,e){const n=Fc(t),i=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.kr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.kr.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);var u,h,d;null!==e.targetMismatches.get(a)?l=l.withResumeToken(Ll.EMPTY_BYTE_STRING,el.min()).withLastLimboFreeSnapshotVersion(el.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),h=l,d=s,(0===(u=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.kr.updateTargetData(t,l))}));let a=th(),c=lh();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(vf(t,s,e.documentUpdates).next((t=>{a=t.ns,c=t.rs}))),!i.isEqual(el.min())){const e=n.kr.getLastRemoteSnapshotVersion(t).next((e=>n.kr.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return ml.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Va.get(e);i&&(Uc(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Ia=!0:t.modifiedDocuments.size>0?Uc(i.Ia):t.removedDocuments.size>0&&(Uc(i.Ia),i.Ia=!1))})),await Xp(n,t,e)}catch(t){await pl(t)}}function Vp(t,e,n){const i=Fc(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Ea.forEach(((n,i)=>{const r=i.view.N_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Fc(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.N_(e)&&(i=!0)})),i&&Ap(n)}(i.eventManager,e),t.length&&i.Ta.r_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function jp(t,e,n){const i=Fc(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Va.get(e),s=r&&r.key;if(s){let t=new Cl(ol.comparator);t=t.insert(s,au.newNoDocument(s,el.min()));const n=lh().add(s),r=new rd(el.min(),new Map,new Cl(Yc),t,n);await Bp(i,r),i.Ra=i.Ra.remove(s),i.Va.delete(e),Jp(i)}else await Ef(i.localStore,e,!1).then((()=>Kp(i,e,n))).catch(pl)}async function zp(t,e){const n=Fc(t),i=e.batch.batchId;try{const t=await function(t,e){const n=Fc(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=ml.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Uc(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=lh();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);Hp(n,i,null),$p(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Xp(n,t)}catch(t){await pl(t)}}async function qp(t,e,n){const i=Fc(t);try{const t=await function(t,e){const n=Fc(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Uc(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Hp(i,e,n),$p(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Xp(i,t)}catch(t){await pl(t)}}function $p(t,e){(t.ga.get(e)||[]).forEach((t=>{t.resolve()})),t.ga.delete(e)}function Hp(t,e,n){const i=Fc(t);let r=i.fa[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.fa[i.currentUser.toKey()]=r}}function Kp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.da.get(e))t.Ea.delete(i),n&&t.Ta.Sa(i,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach((e=>{t.ma.containsKey(e)||Wp(t,e)}))}function Wp(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);null!==n&&(Kf(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Jp(t))}function Gp(t,e,n){for(const i of n)i instanceof xp?(t.ma.addReference(i.key,e),Qp(t,i)):i instanceof Rp?(Oc("SyncEngine","Document no longer in limbo: "+i.key),t.ma.removeReference(i.key,e),t.ma.containsKey(i.key)||Wp(t,i.key)):Mc()}function Qp(t,e){const n=e.key,i=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(i)||(Oc("SyncEngine","New document in limbo: "+n),t.Aa.add(i),Jp(t))}function Jp(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new ol(il.fromString(e)),i=t.pa.next();t.Va.set(i,new Lp(n)),t.Ra=t.Ra.insert(n,i),Hf(t.remoteStore,new qd(qu(Uu(n.path)),i,"TargetPurposeLimboResolution",yl.ae))}}async function Xp(t,e,n){const i=Fc(t),r=[],s=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach(((t,a)=>{o.push(i.wa(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=df.qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Ta.r_(r),await async function(t,e){const n=Fc(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ml.forEach(e,(e=>ml.forEach(e.Li,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>ml.forEach(e.ki,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!gl(t))throw t;Oc("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ji.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(e,r)}}}(i.localStore,s))}async function Yp(t,e){const n=Fc(t);if(!n.currentUser.isEqual(e)){Oc("SyncEngine","User change. New user:",e.toKey());const t=await gf(n.localStore,e);n.currentUser=e,r="'waitForPendingWrites' promise is rejected due to a user change.",(i=n).ga.forEach((t=>{t.forEach((t=>{t.reject(new Vc(Bc.CANCELLED,r))}))})),i.ga.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Xp(n,t.ts)}var i,r}function Zp(t,e){const n=Fc(t),i=n.Va.get(e);if(i&&i.Ia)return lh().add(i.key);{let t=lh();const i=n.da.get(e);if(!i)return t;for(const e of i){const i=n.Ea.get(e);t=t.unionWith(i.view.ia)}return t}}function tm(t){const e=Fc(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jp.bind(null,e),e.Ta.r_=Sp.bind(null,e.eventManager),e.Ta.Sa=Cp.bind(null,e.eventManager),e}function em(t){const e=Fc(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qp.bind(null,e),e}class nm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Pf(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return mf(this.persistence,new ff,t.initialUser,this.serializer)}createPersistence(t){return new lf(hf.zr,this.serializer)}createSharedClientState(t){return new kf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class im{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Vp(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yp.bind(null,this.syncEngine),await pp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Tp}createDatastore(t){const e=Pf(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Df(i));var i;return function(t,e,n,i){return new Vf(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Vp(this.syncEngine,t,0),s=Cf.v()?new Cf:new Sf,new zf(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Pp(t,e,n,i,r,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Fc(t);Oc("RemoteStore","RemoteStore shutting down."),e.y_.add(5),await $f(e),e.S_.shutdown(),e.b_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Dc("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sm{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Ac.UNAUTHENTICATED,this.clientId=Xc.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Oc("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Oc("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vc(Bc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=vp(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function om(t,e){t.asyncQueue.verifyOperationInProgress(),Oc("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await gf(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function am(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lm(t);Oc("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>fp(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>fp(e.remoteStore,n))),t._onlineComponents=e}function cm(t){return"FirebaseError"===t.name?t.code===Bc.FAILED_PRECONDITION||t.code===Bc.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function lm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Oc("FirestoreClient","Using user provided OfflineComponentProvider");try{await om(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!cm(n))throw n;Lc("Error using user provided cache. Falling back to memory cache: "+n),await om(t,new nm)}}else Oc("FirestoreClient","Using default OfflineComponentProvider"),await om(t,new nm);return t._offlineComponents}async function um(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Oc("FirestoreClient","Using user provided OnlineComponentProvider"),await am(t,t._uninitializedComponentsProvider._online)):(Oc("FirestoreClient","Using default OnlineComponentProvider"),await am(t,new im))),t._onlineComponents}function hm(t){return um(t).then((t=>t.syncEngine))}async function dm(t){const e=await um(t),n=e.eventManager;return n.onListen=Mp.bind(null,e.syncEngine),n.onUnlisten=Fp.bind(null,e.syncEngine),n}function fm(t,e,n={}){const i=new jc;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new rm({next:s=>{e.enqueueAndForget((()=>kp(t,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new Vc(Bc.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new Vc(Bc.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new Np(Uu(n.path),s,{includeMetadataChanges:!0,W_:!0});return Ip(t,o)}(await dm(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pm(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const mm=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t,e,n){if(!n)throw new Vc(Bc.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ym(t){if(!ol.isDocumentKey(t))throw new Vc(Bc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vm(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Mc()}function wm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Vc(Bc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vm(t);throw new Vc(Bc.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bm{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Vc(Bc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Vc(Bc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new Vc(Bc.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pm(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Vc(Bc.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Vc(Bc.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Vc(Bc.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class Em{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vc(Bc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Vc(Bc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bm(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new qc;switch(t.type){case"firstParty":return new Wc(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Vc(Bc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=mm.get(t);e&&(Oc("ComponentProvider","Removing Datastore"),mm.delete(t),e.terminate())}(this),Promise.resolve()}}function _m(t,e,n,i={}){var r;const s=(t=wm(t,Em))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Lc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Ac.MOCK_USER;else{e=A(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Vc(Bc.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ac(s)}t._authCredentials=new $c(new zc(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Tm(this.firestore,t,this._query)}}class Im{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new km(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Im(this.firestore,t,this._key)}}class km extends Tm{constructor(t,e,n){super(t,e,Uu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Im(this.firestore,null,new ol(t))}withConverter(t){return new km(this.firestore,t,this._path)}}function Sm(t,e,...n){if(t=H(t),1===arguments.length&&(e=Xc.V()),gm("doc","path",e),t instanceof Em){const i=il.fromString(e,...n);return ym(i),new Im(t,null,new ol(i))}{if(!(t instanceof Im||t instanceof km))throw new Vc(Bc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(il.fromString(e,...n));return ym(i),new Im(t.firestore,t instanceof km?t.converter:null,new ol(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cm{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Mf(this,"async_queue_retry"),this.Xa=()=>{const t=Lf();t&&Oc("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const t=Lf();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=Lf();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise((()=>{}));const e=new jc;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ga.push(t),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!gl(t))throw t;Oc("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(t){const e=this.Wa.then((()=>(this.Ja=!0,t().catch((t=>{this.Ha=t,this.Ja=!1;throw Dc("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Ja=!1,t))))));return this.Wa=e,e}enqueueAfterDelay(t,e,n){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const i=yp.createAndSchedule(this,t,e,n,(t=>this.ru(t)));return this.ja.push(i),i}eu(){this.Ha&&Mc()}verifyOperationInProgress(){}async iu(){let t;do{t=this.Wa,await t}while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then((()=>{this.ja.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.ja)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.iu()}))}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}class Am extends Em{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Cm,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xm(this),this._firestoreClient.terminate()}}function Nm(t){return t._firestoreClient||xm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xm(t){var e,n,i;const r=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,new zl(o,a,c,(l=r).host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,pm(l.experimentalLongPollingOptions),l.useFetchStreams));var o,a,c,l;t._firestoreClient=new sm(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rm{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rm(Ll.fromBase64String(t))}catch(t){throw new Vc(Bc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Rm(Ll.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Vc(Bc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sl(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dm{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Vc(Bc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Vc(Bc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Yc(this._lat,t._lat)||Yc(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=/^__.*__$/;class Mm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Mh(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ph(t,this.data,e,this.fieldTransforms)}}function Um(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mc()}}class Fm{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.au(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Fm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.cu({path:n,hu:!1});return i.Pu(t),i}Iu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.cu({path:n,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Qm(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(0===t.length)throw this.Eu("Document fields must not be empty");if(Um(this.uu)&&Pm.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class Bm{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Pf(t)}Ru(t,e,n,i=!1){return new Fm({uu:t,methodName:e,Au:n,path:sl.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vm(t){const e=t._freezeSettings(),n=Pf(t._databaseId);return new Bm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jm(t,e,n,i,r,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,r);Hm("Data must be an object, but it was:",o,i);const a=qm(i,o);let c,l;if(s.merge)c=new Ol(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Km(e,i,n);if(!o.contains(r))throw new Vc(Bc.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Jm(t,r)||t.push(r)}c=new Ol(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new Mm(new su(a),c,l)}function zm(t,e){if($m(t=H(t)))return Hm("Unsupported field value:",e,t),qm(t,e);if(t instanceof Dm)return function(t,e){if(!Um(e.uu))throw e.Eu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Eu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&4!==e.uu)throw e.Eu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=zm(r,e.Tu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=H(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ph(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=tl.fromDate(t);return{timestampValue:vd(e.serializer,n)}}if(t instanceof tl){const n=new tl(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:vd(e.serializer,n)}}if(t instanceof Lm)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Rm)return{bytesValue:wd(e.serializer,t._byteString)};if(t instanceof Im){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Eu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_d(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Eu(`Unsupported field value: ${vm(t)}`)}(t,e)}function qm(t,e){const n={};return Sl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kl(t,((t,i)=>{const r=zm(i,e.lu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function $m(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof tl||t instanceof Lm||t instanceof Rm||t instanceof Im||t instanceof Dm)}function Hm(t,e,n){if(!$m(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=vm(n);throw"an object"===i?e.Eu(t+" a custom object"):e.Eu(t+" "+i)}var i}function Km(t,e,n){if((e=H(e))instanceof Om)return e._internalPath;if("string"==typeof e)return Gm(t,e);throw Qm("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wm=new RegExp("[~\\*/\\[\\]]");function Gm(t,e,n){if(e.search(Wm)>=0)throw Qm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Om(...e.split("."))._internalPath}catch(i){throw Qm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qm(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Vc(Bc.INVALID_ARGUMENT,a+t+c)}function Jm(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Im(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ym(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zm("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ym extends Xm{data(){return super.data()}}function Zm(t,e){return"string"==typeof e?Gm(t,e):e instanceof Om?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{convertValue(t,e="none"){switch(Hl(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ul(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Fl(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Mc()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return kl(t,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Lm(Ul(t.latitude),Ul(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Vl(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(jl(t));default:return null}}convertTimestamp(t){const e=Ml(t);return new tl(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=il.fromString(t);Uc(zd(n));const i=new ql(n.get(1),n.get(3)),r=new ol(n.popFirst(5));return i.isEqual(e)||Dc(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ng{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ig extends Xm{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Zm("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class rg extends ig{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sg(t){t=wm(t,Im);const e=wm(t.firestore,Am);return fm(Nm(e),t._key).then((n=>lg(e,t,n)))}class og extends tg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rm(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Im(this.firestore,null,e)}}function ag(t,e,n){t=wm(t,Im);const i=wm(t.firestore,Am),r=eg(t.converter,e,n);return cg(i,[jm(Vm(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Ch.none())])}function cg(t,e){return function(t,e){const n=new jc;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=em(t);try{const t=await function(t,e){const n=Fc(t),i=tl.now(),r=e.reduce(((t,e)=>t.add(e.key)),lh());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=th(),c=lh();return n.Xi.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Dh(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Mh(t.key,e,ou(e.value.mapValue),Ch.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:ih(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.fa[t.currentUser.toKey()];i||(i=new Cl(Yc)),i=i.insert(e,n),t.fa[t.currentUser.toKey()]=i}(i,t.batchId,n),await Xp(i,t.changes),await rp(i.remoteStore)}catch(t){const e=vp(t,"Failed to persist write");n.reject(e)}}(await hm(t),e,n))),n.promise}(Nm(t),e)}function lg(t,e,n){const i=n.docs.get(e._key),r=new og(t);return new ig(t,r,e._key,i,new ng(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){Nc=Pt,Rt(new K("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new Am(new Hc(t.getProvider("auth-internal")),new Qc(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Vc(Bc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ql(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),Ft(Cc,"4.1.0",t),Ft(Cc,"4.1.0","esm2017")}();const ug=Mt({apiKey:"AIzaSyA-2vOA4b3zy4HmUepySpDPR8zKgKfhAME",authDomain:"read-easy-a785a.firebaseapp.com",projectId:"read-easy-a785a",storageBucket:"read-easy-a785a.appspot.com",messagingSenderId:"672240774710",appId:"1:672240774710:web:1093f9e83dded932d97297",measurementId:"G-PFEBLXEB67"}),hg=function(t,e){const n="string"==typeof t?t:e||"(default)",i=Ot("object"==typeof t?t:Ut(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=I("firestore");t&&_m(i,...t)}return i}(ug);sr(ug);const dg=async(t,e)=>Vn(sr(ug),t,e),fg=async t=>ag(Sm(hg,"users",sr(ug).currentUser.uid),{name:t}),pg=async(t,e)=>jn(sr(ug),t,e),mg=async()=>(await sr(ug)._initializationPromise,null!==sr(ug).currentUser),gg=async()=>zn(sr().currentUser),yg=async()=>sg(Sm(hg,"users",sr(ug).currentUser.uid));function vg(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&(window.scrollBy(0,-50),setTimeout(vg,10))}function wg(t){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(t).toLowerCase())}var bg,Eg,_g={};bg=void 0!==t?t:"undefined"!=typeof window?window:_g,Eg=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,n="Success",i="Failure",r="Warning",s="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(e){return e||(e="head"),null!==t.document[e]||(a('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},l=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=l(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,p){if(!c("body"))return!1;e||f.Notify.init({});var m=l(!0,e,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof d?g=d:"object"==typeof p&&(g=p),e=l(!0,e,g)}var y,v,w=e[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),e.plainText&&(y=u,(v=t.document.createElement("div")).innerHTML=y,u=v.textContent||v.innerText||""),!e.plainText&&u.length>e.messageMaxLength&&(e=l(!0,e,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>e.messageMaxLength&&(u=u.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(w.fontAwesomeIconColor=w.background),e.cssAnimation||(e.cssAnimationDuration=0);var b=t.document.getElementById(o.wrapID)||t.document.createElement("div");if(b.id=o.wrapID,b.style.width=e.width,b.style.zIndex=e.zindex,b.style.opacity=e.opacity,"center-center"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.top=e.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===e.position?(b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.left="auto"):"left-top"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===e.position?(b.style.left=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=e.distance,b.style.top=e.distance,b.style.left="auto",b.style.bottom="auto"),e.backOverlay){var E=t.document.getElementById(o.overlayID)||t.document.createElement("div");E.id=o.overlayID,E.style.width="100%",E.style.height="100%",E.style.position="fixed",E.style.zIndex=e.zindex-1,E.style.left=0,E.style.top=0,E.style.right=0,E.style.bottom=0,E.style.background=w.backOverlayColor||e.backOverlayColor,E.className=e.cssAnimation?"nx-with-animation":"",E.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(o.overlayID)||t.document.body.appendChild(E)}t.document.getElementById(o.wrapID)||t.document.body.appendChild(b);var _=t.document.createElement("div");_.id=e.ID+"-"+h,_.className=e.className+" "+w.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),_.style.fontSize=e.fontSize,_.style.color=w.textColor,_.style.background=w.background,_.style.borderRadius=e.borderRadius,_.style.pointerEvents="all",e.rtl&&(_.setAttribute("dir","rtl"),_.classList.add("nx-rtl-on")),_.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(_.style.animationDuration=e.cssAnimationDuration+"ms");var T="";if(e.closeButton&&"function"!=typeof d&&(T='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+w.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)_.innerHTML='<i style="color:'+w.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+w.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?T:"");else{var I="";a===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===s&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),_.innerHTML=I+'<span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?T:"")}else _.innerHTML='<span class="nx-message">'+u+"</span>"+(e.closeButton?T:"");if("left-bottom"===e.position||"right-bottom"===e.position){var k=t.document.getElementById(o.wrapID);k.insertBefore(_,k.firstChild)}else t.document.getElementById(o.wrapID).appendChild(_);var S=t.document.getElementById(_.id);if(S){var C,A,N=function(){S.classList.add("nx-remove");var e=t.document.getElementById(o.overlayID);e&&b.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(C)},x=function(){if(S&&null!==S.parentNode&&S.parentNode.removeChild(S),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var e=t.document.getElementById(o.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(A)};if(e.closeButton&&"function"!=typeof d&&t.document.getElementById(_.id).querySelector("span.nx-close-button").addEventListener("click",(function(){N();var t=setTimeout((function(){x(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof d||e.clickToClose)&&S.addEventListener("click",(function(){"function"==typeof d&&d(),N();var t=setTimeout((function(){x(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof d){var R=function(){C=setTimeout((function(){N()}),e.timeout),A=setTimeout((function(){x()}),e.timeout+e.cssAnimationDuration)};R(),e.pauseOnHover&&(S.addEventListener("mouseenter",(function(){S.classList.add("nx-paused"),clearTimeout(C),clearTimeout(A)})),S.addEventListener("mouseleave",(function(){S.classList.remove("nx-paused"),R()})))}}if(e.showOnlyTheLastOne&&h>0)for(var O=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+h+"])"),D=0;D<O.length;D++){var L=O[D];null!==L.parentNode&&L.parentNode.removeChild(L)}e=l(!0,e,m)},f={Notify:{init:function(n){e=l(!0,o,n),function(e,n){if(!c("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return a("You have to initialize the Notify module before call Merge function."),!1;e=l(!0,e,t)},success:function(t,e,i){d(n,t,e,i)},failure:function(t,e,n){d(i,t,e,n)},warning:function(t,e,n){d(r,t,e,n)},info:function(t,e,n){d(s,t,e,n)}}};return"object"==typeof t.Notiflix?l(!0,t.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return Eg(bg)})):"object"==typeof _g?_g=Eg(bg):bg.Notiflix=Eg(bg);const Tg=document.querySelector(".auth-reg-modal"),Ig=document.querySelector(".auth-reg-modal-close"),kg=document.querySelector(".auth-reg-modal-callback-form"),Sg=document.querySelector(".auth-reg-modal-switcher-sign-up"),Cg=document.querySelector(".auth-reg-modal-switcher-sign-in"),Ag=document.querySelector("#auth-reg-modal-name"),Ng=document.querySelector("#auth-reg-modal-email"),xg=document.querySelector("#auth-reg-modal-password"),Rg=document.querySelector(".auth-reg-modal-sign-up"),Og=document.querySelector(".auth-reg-modal-sign-in"),Dg=()=>{const t=()=>{Ig.removeEventListener("click",e),document.removeEventListener("click",n),document.removeEventListener("keydown",i),Sg.removeEventListener("click",r),Cg.removeEventListener("click",s),Og.removeEventListener("click",o),Rg.removeEventListener("click",a)},e=()=>{Tg.classList.add("visually-hidden"),t()};Ig.addEventListener("click",e);const n=e=>{!e.composedPath().includes(kg)&&e.composedPath().includes(Tg)&&(Tg.classList.add("visually-hidden"),t())};document.addEventListener("click",n);const i=e=>{"Escape"==e.key&&(Tg.classList.add("visually-hidden"),t())};document.addEventListener("keydown",i);const r=()=>{Cg.classList.remove("auth-reg-modal-switcher-active"),Sg.classList.add("auth-reg-modal-switcher-active"),Ag.classList.remove("visually-hidden"),Rg.classList.remove("visually-hidden"),Og.classList.add("visually-hidden")};Sg.addEventListener("click",r);const s=()=>{Sg.classList.remove("auth-reg-modal-switcher-active"),Cg.classList.add("auth-reg-modal-switcher-active"),Ag.classList.add("visually-hidden"),Rg.classList.add("visually-hidden"),Og.classList.remove("visually-hidden")};Cg.addEventListener("click",s);const o=()=>{const e=Ng.value.trim(),n=xg.value.trim();wg(e)?n.length>=5?(async(e,n)=>{pg(e,n).then((()=>{yg().then((e=>{$g(e.data().name),Tg.classList.add("visually-hidden"),t()})).catch((t=>{_g.Notify.failure(`Get user name error: ${t.code}`)}))})).catch((t=>{_g.Notify.failure(`Authorization error: ${t.code}`)}))})(e,n):_g.Notify.failure("The password must be at least 5 characters long!"):_g.Notify.failure("Wrong email!")};Og.addEventListener("click",o);const a=()=>{const e=Ng.value.trim(),n=xg.value.trim(),i=Ag.value.trim();wg(e)?n.length>=5?i.length>0&&(async(e,n,i)=>{dg(e,n).then((()=>{fg(i).then((()=>{$g(i),Tg.classList.add("visually-hidden"),t()})).catch((t=>{_g.Notify.failure(`Create account error: ${t.code}`),gg().then((()=>{})).catch((t=>{_g.Notify.failure(`Create account error: ${t.code}`)}))}))})).catch((t=>{_g.Notify.failure(`Create account error: ${t.code}`)}))})(e,n,i):_g.Notify.failure("The password must be at least 5 characters long!"):_g.Notify.failure("Wrong email!")};Rg.addEventListener("click",a)},Lg=document.querySelector(".header-switcher"),Pg=document.querySelector(".header-switcher-img-light"),Mg=document.querySelector(".header-switcher-img-dark"),Ug=document.querySelector(".header-user"),Fg=document.querySelector(".auth-reg-modal"),Bg=document.querySelector(".header-user-name"),Vg=document.querySelector(".header-user-logo"),jg=document.querySelector(".header-user-icon-down"),zg=()=>{"dark"===localStorage.getItem("theme")?(Pg.classList.add("visually-hidden"),Mg.classList.remove("visually-hidden")):(Mg.classList.add("visually-hidden"),Pg.classList.remove("visually-hidden"))},qg=async()=>{await mg()&&yg().then((t=>{$g(t.data().name)}))};"dark"===localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme"),zg(),Bg.textContent="Sign In",Vg.classList.add("visually-hidden"),jg.classList.add("visually-hidden"),qg(),Lg.addEventListener("click",(()=>{"dark"===localStorage.getItem("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","dark")),zg()})),Ug.addEventListener("click",(()=>{Fg.classList.remove("visually-hidden"),Sg.classList.remove("auth-reg-modal-switcher-active"),Cg.classList.add("auth-reg-modal-switcher-active"),Ag.classList.add("visually-hidden"),Rg.classList.add("visually-hidden"),Og.classList.remove("visually-hidden"),Dg()}));const $g=t=>{Bg.textContent=t,Vg.classList.remove("visually-hidden"),jg.classList.remove("visually-hidden")};function Hg(t,e){return function(){return t.apply(e,arguments)}}const{toString:Kg}=Object.prototype,{getPrototypeOf:Wg}=Object,Gg=(Qg=Object.create(null),t=>{const e=Kg.call(t);return Qg[e]||(Qg[e]=e.slice(8,-1).toLowerCase())});var Qg;const Jg=t=>(t=t.toLowerCase(),e=>Gg(e)===t),Xg=t=>e=>typeof e===t,{isArray:Yg}=Array,Zg=Xg("undefined");const ty=Jg("ArrayBuffer");const ey=Xg("string"),ny=Xg("function"),iy=Xg("number"),ry=t=>null!==t&&"object"==typeof t,sy=t=>{if("object"!==Gg(t))return!1;const e=Wg(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},oy=Jg("Date"),ay=Jg("File"),cy=Jg("Blob"),ly=Jg("FileList"),uy=Jg("URLSearchParams");function hy(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),Yg(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let o;for(i=0;i<s;i++)o=r[i],e.call(null,t[o],o,t)}}function dy(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const fy="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,py=t=>!Zg(t)&&t!==fy;const my=(gy="undefined"!=typeof Uint8Array&&Wg(Uint8Array),t=>gy&&t instanceof gy);var gy;const yy=Jg("HTMLFormElement"),vy=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),wy=Jg("RegExp"),by=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};hy(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)},Ey="abcdefghijklmnopqrstuvwxyz",_y="0123456789",Ty={DIGIT:_y,ALPHA:Ey,ALPHA_DIGIT:Ey+Ey.toUpperCase()+_y};const Iy=Jg("AsyncFunction");var ky={isArray:Yg,isArrayBuffer:ty,isBuffer:function(t){return null!==t&&!Zg(t)&&null!==t.constructor&&!Zg(t.constructor)&&ny(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||ny(t.append)&&("formdata"===(e=Gg(t))||"object"===e&&ny(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&ty(t.buffer),e},isString:ey,isNumber:iy,isBoolean:t=>!0===t||!1===t,isObject:ry,isPlainObject:sy,isUndefined:Zg,isDate:oy,isFile:ay,isBlob:cy,isRegExp:wy,isFunction:ny,isStream:t=>ry(t)&&ny(t.pipe),isURLSearchParams:uy,isTypedArray:my,isFileList:ly,forEach:hy,merge:function t(){const{caseless:e}=py(this)&&this||{},n={},i=(i,r)=>{const s=e&&dy(n,r)||r;sy(n[s])&&sy(i)?n[s]=t(n[s],i):sy(i)?n[s]=t({},i):Yg(i)?n[s]=i.slice():n[s]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&hy(arguments[t],i);return n},extend:(t,e,n,{allOwnKeys:i}={})=>(hy(e,((e,i)=>{n&&ny(e)?t[i]=Hg(e,n):t[i]=e}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},null==t)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],i&&!i(o,t,e)||a[o]||(e[o]=t[o],a[o]=!0);t=!1!==n&&Wg(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:Gg,kindOfTest:Jg,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(Yg(t))return t;let e=t.length;if(!iy(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:yy,hasOwnProperty:vy,hasOwnProp:vy,reduceDescriptors:by,freezeMethods:t=>{by(t,((e,n)=>{if(ny(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];ny(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return Yg(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:dy,global:fy,isContextDefined:py,ALPHABET:Ty,generateString:(t=16,e=Ty.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:function(t){return!!(t&&ny(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(ry(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=Yg(t)?[]:{};return hy(t,((t,e)=>{const s=n(t,i+1);!Zg(s)&&(r[e]=s)})),e[i]=void 0,r}}return t};return n(t,0)},isAsyncFn:Iy,isThenable:t=>t&&(ry(t)||ny(t))&&ny(t.then)&&ny(t.catch)};function Sy(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}ky.inherits(Sy,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ky.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Cy=Sy.prototype,Ay={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{Ay[t]={value:t}})),Object.defineProperties(Sy,Ay),Object.defineProperty(Cy,"isAxiosError",{value:!0}),Sy.from=(t,e,n,i,r,s)=>{const o=Object.create(Cy);return ky.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),Sy.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var Ny,xy,Ry,Oy=Sy;xy=function(t){var e,n,i=Vy(t),r=i[0],s=i[1],o=new Uy(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)e=My[t.charCodeAt(n)]<<18|My[t.charCodeAt(n+1)]<<12|My[t.charCodeAt(n+2)]<<6|My[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=My[t.charCodeAt(n)]<<2|My[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=My[t.charCodeAt(n)]<<10|My[t.charCodeAt(n+1)]<<4|My[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},Ry=function(t){for(var e,n=t.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(jy(t,o,o+s>a?a:o+s));1===i?(e=t[n-1],r.push(Py[e>>2]+Py[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(Py[e>>10]+Py[e>>4&63]+Py[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Dy,Ly,Py=[],My=[],Uy="undefined"!=typeof Uint8Array?Uint8Array:Array,Fy="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",By=0;By<64;++By)Py[By]=Fy[By],My[Fy.charCodeAt(By)]=By;function Vy(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function jy(t,e,n){for(var i,r,s=[],o=e;o<n;o+=3)i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(Py[(r=i)>>18&63]+Py[r>>12&63]+Py[r>>6&63]+Py[63&r]);return s.join("")}My["-".charCodeAt(0)]=62,My["_".charCodeAt(0)]=63,Dy=function(t,e,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=t[e+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+t[e+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+t[e+h],h+=d,u-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=l}return(f?-1:1)*o*Math.pow(2,s-i)},Ly=function(t,e,n,i,r,s){var o,a,c,l=8*s-r-1,u=(1<<l)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),(e+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(e*c-1)*Math.pow(2,r),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;t[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,l+=r;l>0;t[n+f]=255&o,f+=p,o/=256,l-=8);t[n+f-p]|=128*m};const zy="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;Ny=Hy;const qy=2147483647;function $y(t){if(t>qy)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,Hy.prototype),e}function Hy(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return Gy(t)}return Ky(t,e,n)}function Ky(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Hy.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|Yy(t,e);let i=$y(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Ov(t,Uint8Array)){const e=new Uint8Array(t);return Jy(e.buffer,e.byteOffset,e.byteLength)}return Qy(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Ov(t,ArrayBuffer)||t&&Ov(t.buffer,ArrayBuffer))return Jy(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Ov(t,SharedArrayBuffer)||t&&Ov(t.buffer,SharedArrayBuffer)))return Jy(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return Hy.from(i,e,n);const r=function(t){if(Hy.isBuffer(t)){const e=0|Xy(t.length),n=$y(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Dv(t.length)?$y(0):Qy(t);if("Buffer"===t.type&&Array.isArray(t.data))return Qy(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Hy.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function Wy(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Gy(t){return Wy(t),$y(t<0?0:0|Xy(t))}function Qy(t){const e=t.length<0?0:0|Xy(t.length),n=$y(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function Jy(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,Hy.prototype),i}function Xy(t){if(t>=qy)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+qy.toString(16)+" bytes");return 0|t}function Yy(t,e){if(Hy.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Ov(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Nv(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return xv(t).length;default:if(r)return i?-1:Nv(t).length;e=(""+e).toLowerCase(),r=!0}}function Zy(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return fv(this,e,n);case"utf8":case"utf-8":return lv(this,e,n);case"ascii":return hv(this,e,n);case"latin1":case"binary":return dv(this,e,n);case"base64":return cv(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pv(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function tv(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function ev(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Dv(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=Hy.from(e,i)),Hy.isBuffer(e))return 0===e.length?-1:nv(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):nv(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function nv(t,e,n,i,r){let s,o=1,a=t.length,c=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){let i=-1;for(s=n;s<a;s++)if(l(t,s)===l(e,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(l(t,s+i)!==l(e,i)){n=!1;break}if(n)return s}return-1}function iv(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=e.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(e.substr(2*o,2),16);if(Dv(i))return o;t[n+o]=i}return o}function rv(t,e,n,i){return Rv(Nv(e,t.length-n),t,n,i)}function sv(t,e,n,i){return Rv(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function ov(t,e,n,i){return Rv(xv(e),t,n,i)}function av(t,e,n,i){return Rv(function(t,e){let n,i,r;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(e,t.length-n),t,n,i)}function cv(t,e,n){return 0===e&&n===t.length?Ry(t):Ry(t.slice(e,n))}function lv(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[r+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(s=c));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(c=(15&e)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(t){const e=t.length;if(e<=uv)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=uv));return n}(i)}Hy.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Hy.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Hy.prototype,"parent",{enumerable:!0,get:function(){if(Hy.isBuffer(this))return this.buffer}}),Object.defineProperty(Hy.prototype,"offset",{enumerable:!0,get:function(){if(Hy.isBuffer(this))return this.byteOffset}}),Hy.poolSize=8192,Hy.from=function(t,e,n){return Ky(t,e,n)},Object.setPrototypeOf(Hy.prototype,Uint8Array.prototype),Object.setPrototypeOf(Hy,Uint8Array),Hy.alloc=function(t,e,n){return function(t,e,n){return Wy(t),t<=0?$y(t):void 0!==e?"string"==typeof n?$y(t).fill(e,n):$y(t).fill(e):$y(t)}(t,e,n)},Hy.allocUnsafe=function(t){return Gy(t)},Hy.allocUnsafeSlow=function(t){return Gy(t)},Hy.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Hy.prototype},Hy.compare=function(t,e){if(Ov(t,Uint8Array)&&(t=Hy.from(t,t.offset,t.byteLength)),Ov(e,Uint8Array)&&(e=Hy.from(e,e.offset,e.byteLength)),!Hy.isBuffer(t)||!Hy.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},Hy.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Hy.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Hy.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=Hy.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(Ov(e,Uint8Array))r+e.length>i.length?(Hy.isBuffer(e)||(e=Hy.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!Hy.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},Hy.byteLength=Yy,Hy.prototype._isBuffer=!0,Hy.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)tv(this,e,e+1);return this},Hy.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)tv(this,e,e+3),tv(this,e+1,e+2);return this},Hy.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)tv(this,e,e+7),tv(this,e+1,e+6),tv(this,e+2,e+5),tv(this,e+3,e+4);return this},Hy.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?lv(this,0,t):Zy.apply(this,arguments)},Hy.prototype.toLocaleString=Hy.prototype.toString,Hy.prototype.equals=function(t){if(!Hy.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Hy.compare(this,t)},Hy.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},zy&&(Hy.prototype[zy]=Hy.prototype.inspect),Hy.prototype.compare=function(t,e,n,i,r){if(Ov(t,Uint8Array)&&(t=Hy.from(t,t.offset,t.byteLength)),!Hy.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),c=this.slice(i,r),l=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==l[t]){s=c[t],o=l[t];break}return s<o?-1:o<s?1:0},Hy.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},Hy.prototype.indexOf=function(t,e,n){return ev(this,t,e,n,!0)},Hy.prototype.lastIndexOf=function(t,e,n){return ev(this,t,e,n,!1)},Hy.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return iv(this,t,e,n);case"utf8":case"utf-8":return rv(this,t,e,n);case"ascii":case"latin1":case"binary":return sv(this,t,e,n);case"base64":return ov(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return av(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},Hy.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const uv=4096;function hv(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function dv(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function fv(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=Lv[t[i]];return r}function pv(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function mv(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function gv(t,e,n,i,r,s){if(!Hy.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<s)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function yv(t,e,n,i,r){kv(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function vv(t,e,n,i,r){kv(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function wv(t,e,n,i,r,s){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function bv(t,e,n,i,r){return e=+e,n>>>=0,r||wv(t,0,n,4),Ly(t,e,n,i,23,4),n+4}function Ev(t,e,n,i,r){return e=+e,n>>>=0,r||wv(t,0,n,8),Ly(t,e,n,i,52,8),n+8}Hy.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,Hy.prototype),i},Hy.prototype.readUintLE=Hy.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||mv(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return i},Hy.prototype.readUintBE=Hy.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||mv(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},Hy.prototype.readUint8=Hy.prototype.readUInt8=function(t,e){return t>>>=0,e||mv(t,1,this.length),this[t]},Hy.prototype.readUint16LE=Hy.prototype.readUInt16LE=function(t,e){return t>>>=0,e||mv(t,2,this.length),this[t]|this[t+1]<<8},Hy.prototype.readUint16BE=Hy.prototype.readUInt16BE=function(t,e){return t>>>=0,e||mv(t,2,this.length),this[t]<<8|this[t+1]},Hy.prototype.readUint32LE=Hy.prototype.readUInt32LE=function(t,e){return t>>>=0,e||mv(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Hy.prototype.readUint32BE=Hy.prototype.readUInt32BE=function(t,e){return t>>>=0,e||mv(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Hy.prototype.readBigUInt64LE=Pv((function(t){Sv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Cv(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),Hy.prototype.readBigUInt64BE=Pv((function(t){Sv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Cv(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),Hy.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||mv(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},Hy.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||mv(t,e,this.length);let i=e,r=1,s=this[t+--i];for(;i>0&&(r*=256);)s+=this[t+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*e)),s},Hy.prototype.readInt8=function(t,e){return t>>>=0,e||mv(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Hy.prototype.readInt16LE=function(t,e){t>>>=0,e||mv(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},Hy.prototype.readInt16BE=function(t,e){t>>>=0,e||mv(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},Hy.prototype.readInt32LE=function(t,e){return t>>>=0,e||mv(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Hy.prototype.readInt32BE=function(t,e){return t>>>=0,e||mv(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Hy.prototype.readBigInt64LE=Pv((function(t){Sv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Cv(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),Hy.prototype.readBigInt64BE=Pv((function(t){Sv(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Cv(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),Hy.prototype.readFloatLE=function(t,e){return t>>>=0,e||mv(t,4,this.length),Dy(this,t,!0,23,4)},Hy.prototype.readFloatBE=function(t,e){return t>>>=0,e||mv(t,4,this.length),Dy(this,t,!1,23,4)},Hy.prototype.readDoubleLE=function(t,e){return t>>>=0,e||mv(t,8,this.length),Dy(this,t,!0,52,8)},Hy.prototype.readDoubleBE=function(t,e){return t>>>=0,e||mv(t,8,this.length),Dy(this,t,!1,52,8)},Hy.prototype.writeUintLE=Hy.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){gv(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[e]=255&t;++s<n&&(r*=256);)this[e+s]=t/r&255;return e+n},Hy.prototype.writeUintBE=Hy.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){gv(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[e+r]=255&t;--r>=0&&(s*=256);)this[e+r]=t/s&255;return e+n},Hy.prototype.writeUint8=Hy.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||gv(this,t,e,1,255,0),this[e]=255&t,e+1},Hy.prototype.writeUint16LE=Hy.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||gv(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Hy.prototype.writeUint16BE=Hy.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||gv(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Hy.prototype.writeUint32LE=Hy.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||gv(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Hy.prototype.writeUint32BE=Hy.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||gv(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Hy.prototype.writeBigUInt64LE=Pv((function(t,e=0){return yv(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Hy.prototype.writeBigUInt64BE=Pv((function(t,e=0){return vv(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Hy.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);gv(this,t,e,n,i-1,-i)}let r=0,s=1,o=0;for(this[e]=255&t;++r<n&&(s*=256);)t<0&&0===o&&0!==this[e+r-1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},Hy.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);gv(this,t,e,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[e+r]=255&t;--r>=0&&(s*=256);)t<0&&0===o&&0!==this[e+r+1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},Hy.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||gv(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Hy.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||gv(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Hy.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||gv(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Hy.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||gv(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Hy.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||gv(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Hy.prototype.writeBigInt64LE=Pv((function(t,e=0){return yv(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Hy.prototype.writeBigInt64BE=Pv((function(t,e=0){return vv(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Hy.prototype.writeFloatLE=function(t,e,n){return bv(this,t,e,!0,n)},Hy.prototype.writeFloatBE=function(t,e,n){return bv(this,t,e,!1,n)},Hy.prototype.writeDoubleLE=function(t,e,n){return Ev(this,t,e,!0,n)},Hy.prototype.writeDoubleBE=function(t,e,n){return Ev(this,t,e,!1,n)},Hy.prototype.copy=function(t,e,n,i){if(!Hy.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},Hy.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Hy.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const s=Hy.isBuffer(t)?t:Hy.from(t,i),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=s[r%o]}return this};const _v={};function Tv(t,e,n){_v[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function Iv(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function kv(t,e,n,i,r,s){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=s>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new _v.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){Sv(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Cv(e,t.length-(n+1))}(i,r,s)}function Sv(t,e){if("number"!=typeof t)throw new _v.ERR_INVALID_ARG_TYPE(e,"number",t)}function Cv(t,e,n){if(Math.floor(t)!==t)throw Sv(t,n),new _v.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new _v.ERR_BUFFER_OUT_OF_BOUNDS;throw new _v.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Tv("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Tv("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Tv("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Iv(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Iv(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const Av=/[^+/0-9A-Za-z-_]/g;function Nv(t,e){let n;e=e||1/0;const i=t.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function xv(t){return xy(function(t){if((t=(t=t.split("=")[0]).trim().replace(Av,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Rv(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function Ov(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Dv(t){return t!=t}const Lv=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function Pv(t){return"undefined"==typeof BigInt?Mv:t}function Mv(){throw new Error("BigInt not supported")}var Uv=Ny;function Fv(t){return ky.isPlainObject(t)||ky.isArray(t)}function Bv(t){return ky.endsWith(t,"[]")?t.slice(0,-2):t}function Vv(t,e,n){return t?t.concat(e).map((function(t,e){return t=Bv(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const jv=ky.toFlatObject(ky,{},null,(function(t){return/^is[A-Z]/.test(t)}));var zv=function(t,e,n){if(!ky.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(n=ky.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!ky.isUndefined(e[t])}))).metaTokens,r=n.visitor||l,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&ky.isSpecCompliantForm(e);if(!ky.isFunction(r))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(ky.isDate(t))return t.toISOString();if(!a&&ky.isBlob(t))throw new Oy("Blob is not supported. Use a Buffer instead.");return ky.isArrayBuffer(t)||ky.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Uv.from(t):t}function l(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(ky.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(ky.isArray(t)&&function(t){return ky.isArray(t)&&!t.some(Fv)}(t)||(ky.isFileList(t)||ky.endsWith(n,"[]"))&&(a=ky.toArray(t)))return n=Bv(n),a.forEach((function(t,i){!ky.isUndefined(t)&&null!==t&&e.append(!0===o?Vv([n],i,s):null===o?n:n+"[]",c(t))})),!1;return!!Fv(t)||(e.append(Vv(r,n,s),c(t)),!1)}const u=[],h=Object.assign(jv,{defaultVisitor:l,convertValue:c,isVisitable:Fv});if(!ky.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!ky.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),ky.forEach(n,(function(n,s){!0===(!(ky.isUndefined(n)||null===n)&&r.call(e,n,ky.isString(s)?s.trim():s,i,h))&&t(n,i?i.concat(s):[s])})),u.pop()}}(t),e};function qv(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function $v(t,e){this._pairs=[],t&&zv(t,this,e)}const Hv=$v.prototype;Hv.append=function(t,e){this._pairs.push([t,e])},Hv.toString=function(t){const e=t?function(e){return t.call(this,e,qv)}:qv;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Kv=$v;function Wv(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Gv(t,e,n){if(!e)return t;const i=n&&n.encode||Wv,r=n&&n.serialize;let s;if(s=r?r(e,n):ky.isURLSearchParams(e)?e.toString():new Kv(e,n).toString(i),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var Qv=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ky.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},Jv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var Xv={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Kv,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function Yv(t,e){return zv(t,new Xv.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return Xv.isNode&&ky.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var Zv=function(t){function e(t,n,i,r){let s=t[r++];const o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&ky.isArray(i)?i.length:s,a)return ky.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&ky.isObject(i[s])||(i[s]=[]);return e(t,n,i[s],r)&&ky.isArray(i[s])&&(i[s]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}(i[s])),!o}if(ky.isFormData(t)&&ky.isFunction(t.entries)){const n={};return ky.forEachEntry(t,((t,i)=>{e(function(t){return ky.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const tw={"Content-Type":void 0};const ew={transitional:Jv,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=ky.isObject(t);r&&ky.isHTMLForm(t)&&(t=new FormData(t));if(ky.isFormData(t))return i&&i?JSON.stringify(Zv(t)):t;if(ky.isArrayBuffer(t)||ky.isBuffer(t)||ky.isStream(t)||ky.isFile(t)||ky.isBlob(t))return t;if(ky.isArrayBufferView(t))return t.buffer;if(ky.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Yv(t,this.formSerializer).toString();if((s=ky.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return zv(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(ky.isString(t))try{return(e||JSON.parse)(t),ky.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||ew.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&ky.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw Oy.from(t,Oy.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xv.classes.FormData,Blob:Xv.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ky.forEach(["delete","get","head"],(function(t){ew.headers[t]={}})),ky.forEach(["post","put","patch"],(function(t){ew.headers[t]=ky.merge(tw)}));var nw=ew;const iw=ky.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var rw=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&iw[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const sw=Symbol("internals");function ow(t){return t&&String(t).trim().toLowerCase()}function aw(t){return!1===t||null==t?t:ky.isArray(t)?t.map(aw):String(t)}function cw(t,e,n,i,r){return ky.isFunction(i)?i.call(this,e,n):(r&&(e=n),ky.isString(e)?ky.isString(i)?-1!==e.indexOf(i):ky.isRegExp(i)?i.test(e):void 0:void 0)}class lw{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function r(t,e,n){const r=ow(e);if(!r)throw new Error("header name must be a non-empty string");const s=ky.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||e]=aw(t))}const s=(t,e)=>ky.forEach(t,((t,n)=>r(t,n,e)));return ky.isPlainObject(t)||t instanceof this.constructor?s(t,e):ky.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?s(rw(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=ow(t)){const n=ky.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(ky.isFunction(e))return e.call(this,t,n);if(ky.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=ow(t)){const n=ky.findKey(this,t);return!(!n||void 0===this[n]||e&&!cw(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=ow(t)){const r=ky.findKey(n,t);!r||e&&!cw(0,n[r],r,e)||(delete n[r],i=!0)}}return ky.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const r=e[n];t&&!cw(0,this[r],r,t,!0)||(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return ky.forEach(this,((i,r)=>{const s=ky.findKey(n,r);if(s)return e[s]=aw(i),void delete e[r];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete e[r],e[o]=aw(i),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return ky.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&ky.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[sw]=this[sw]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=ow(t);e[i]||(!function(t,e){const n=ky.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return ky.isArray(t)?t.forEach(i):i(t),this}}lw.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ky.freezeMethods(lw.prototype),ky.freezeMethods(lw);var uw=lw;function hw(t,e){const n=this||nw,i=e||n,r=uw.from(i.headers);let s=i.data;return ky.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function dw(t){return!(!t||!t.__CANCEL__)}function fw(t,e,n){Oy.call(this,null==t?"canceled":t,Oy.ERR_CANCELED,e,n),this.name="CanceledError"}ky.inherits(fw,Oy,{__CANCEL__:!0});var pw=fw;function mw(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new Oy("Request failed with status code "+n.status,[Oy.ERR_BAD_REQUEST,Oy.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var gw=Xv.isStandardBrowserEnv?{write:function(t,e,n,i,r,s){const o=[];o.push(t+"="+encodeURIComponent(e)),ky.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ky.isString(i)&&o.push("path="+i),ky.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function yw(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function vw(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?yw(t,e):e}var ww=Xv.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=ky.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function bw(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Ew=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),l=i[o];r||(r=c),n[s]=a,i[s]=c;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-r<e)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}};function _w(t,e){let n=0;const i=Ew(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};l[e?"download":"upload"]=!0,t(l)}}const Tw={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=uw.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}ky.isFormData(i)&&(Xv.isStandardBrowserEnv||Xv.isStandardBrowserWebWorkerEnv?r.setContentType(!1):r.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const l=vw(t.baseURL,t.url);function u(){if(!c)return;const i=uw.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());mw((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),Gv(l,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new Oy("Request aborted",Oy.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new Oy("Network Error",Oy.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||Jv;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new Oy(e,i.clarifyTimeoutError?Oy.ETIMEDOUT:Oy.ECONNABORTED,t,c)),c=null},Xv.isStandardBrowserEnv){const e=(t.withCredentials||ww(l))&&t.xsrfCookieName&&gw.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&ky.forEach(r.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),ky.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",_w(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",_w(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{c&&(n(!e||e.type?new pw(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const h=bw(l);h&&-1===Xv.protocols.indexOf(h)?n(new Oy("Unsupported protocol "+h+":",Oy.ERR_BAD_REQUEST,t)):c.send(i||null)}))}};ky.forEach(Tw,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var Iw={getAdapter:t=>{t=ky.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=ky.isString(n)?Tw[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new Oy(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(ky.hasOwnProp(Tw,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!ky.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Tw};function kw(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new pw(null,t)}function Sw(t){kw(t),t.headers=uw.from(t.headers),t.data=hw.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Iw.getAdapter(t.adapter||nw.adapter)(t).then((function(e){return kw(t),e.data=hw.call(t,t.transformResponse,e),e.headers=uw.from(e.headers),e}),(function(e){return dw(e)||(kw(t),e&&e.response&&(e.response.data=hw.call(t,t.transformResponse,e.response),e.response.headers=uw.from(e.response.headers))),Promise.reject(e)}))}const Cw=t=>t instanceof uw?t.toJSON():t;function Aw(t,e){e=e||{};const n={};function i(t,e,n){return ky.isPlainObject(t)&&ky.isPlainObject(e)?ky.merge.call({caseless:n},t,e):ky.isPlainObject(e)?ky.merge({},e):ky.isArray(e)?e.slice():e}function r(t,e,n){return ky.isUndefined(e)?ky.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function s(t,e){if(!ky.isUndefined(e))return i(void 0,e)}function o(t,e){return ky.isUndefined(e)?ky.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(Cw(t),Cw(e),!0)};return ky.forEach(Object.keys(Object.assign({},t,e)),(function(i){const s=c[i]||r,o=s(t[i],e[i],i);ky.isUndefined(o)&&s!==a||(n[i]=o)})),n}const Nw="1.4.0",xw={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{xw[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Rw={};xw.transitional=function(t,e,n){function i(t,e){return"[Axios v1.4.0] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new Oy(i(r," has been removed"+(e?" in "+e:"")),Oy.ERR_DEPRECATED);return e&&!Rw[r]&&(Rw[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};var Ow={assertOptions:function(t,e,n){if("object"!=typeof t)throw new Oy("options must be an object",Oy.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new Oy("option "+s+" must be "+n,Oy.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Oy("Unknown option "+s,Oy.ERR_BAD_OPTION)}},validators:xw};const Dw=Ow.validators;class Lw{constructor(t){this.defaults=t,this.interceptors={request:new Qv,response:new Qv}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Aw(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let s;void 0!==n&&Ow.assertOptions(n,{silentJSONParsing:Dw.transitional(Dw.boolean),forcedJSONParsing:Dw.transitional(Dw.boolean),clarifyTimeoutError:Dw.transitional(Dw.boolean)},!1),null!=i&&(ky.isFunction(i)?e.paramsSerializer={serialize:i}:Ow.assertOptions(i,{encode:Dw.function,serialize:Dw.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=r&&ky.merge(r.common,r[e.method]),s&&ky.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=uw.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let u,h=0;if(!a){const t=[Sw.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,c),u=t.length,l=Promise.resolve(e);h<u;)l=l.then(t[h++],t[h++]);return l}u=o.length;let d=e;for(h=0;h<u;){const t=o[h++],e=o[h++];try{d=t(d)}catch(t){e.call(this,t);break}}try{l=Sw.call(this,d)}catch(t){return Promise.reject(t)}for(h=0,u=c.length;h<u;)l=l.then(c[h++],c[h++]);return l}getUri(t){return Gv(vw((t=Aw(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}ky.forEach(["delete","get","head","options"],(function(t){Lw.prototype[t]=function(e,n){return this.request(Aw(n||{},{method:t,url:e,data:(n||{}).data}))}})),ky.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(Aw(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Lw.prototype[t]=e(),Lw.prototype[t+"Form"]=e(!0)}));var Pw=Lw;class Mw{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new pw(t,i,r),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new Mw((function(e){t=e})),cancel:t}}}var Uw=Mw;const Fw={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Fw).forEach((([t,e])=>{Fw[e]=t}));var Bw=Fw;const Vw=function t(e){const n=new Pw(e),i=Hg(Pw.prototype.request,n);return ky.extend(i,Pw.prototype,n,{allOwnKeys:!0}),ky.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return t(Aw(e,n))},i}(nw);Vw.Axios=Pw,Vw.CanceledError=pw,Vw.CancelToken=Uw,Vw.isCancel=dw,Vw.VERSION=Nw,Vw.toFormData=zv,Vw.AxiosError=Oy,Vw.Cancel=Vw.CanceledError,Vw.all=function(t){return Promise.all(t)},Vw.spread=function(t){return function(e){return t.apply(null,e)}},Vw.isAxiosError=function(t){return ky.isObject(t)&&!0===t.isAxiosError},Vw.mergeConfig=Aw,Vw.AxiosHeaders=uw,Vw.formToJSON=t=>Zv(ky.isHTMLForm(t)?new FormData(t):t),Vw.HttpStatusCode=Bw,Vw.default=Vw;var jw=Vw;const{Axios:zw,AxiosError:qw,CanceledError:$w,isCancel:Hw,CancelToken:Kw,VERSION:Ww,all:Gw,Cancel:Qw,isAxiosError:Jw,spread:Xw,toFormData:Yw,AxiosHeaders:Zw,HttpStatusCode:tb,formToJSON:eb,mergeConfig:nb}=jw,ib="https://books-backend.p.goit.global/",rb=async()=>await jw.get(ib+"books/top-books"),sb=async t=>{const e=new URLSearchParams({category:t});return await jw.get(`${ib}books/category/?${e}`)},ob=async t=>await jw.get(`${ib}books//${t}`),ab=document.querySelector(".main-blocks"),cb=document.querySelector(".main-blocks-title"),lb=document.querySelector(".main-blocks-list"),ub=document.querySelector(".main-top-blocks"),hb=document.querySelector(".main-top-blocks-title"),db=document.querySelector(".main-top-blocks-list"),fb=(t,e)=>{ab.classList.remove("visually-hidden"),ub.classList.add("visually-hidden"),cb.textContent=e;const n=t.data.map((t=>`<li class="main-block-list-item">\n                <a class="main-block-list-item-link link" id="${t._id}">\n                  <div class="main-block-list-item-img-box">\n                    <img class="main-block-list-item-img" loading="lazy" src="${t.book_image}" alt="${t.author+" "+t.title}">\n                  </div>\n                  <p class="main-block-list-item-title">${t.title}</p>\n                  <p class="main-block-list-item-author">${t.author}</p>\n                </a>\n              </li>`)).join("");lb.innerHTML=n},pb=t=>{ub.classList.remove("visually-hidden"),ab.classList.add("visually-hidden"),hb.textContent="Best Sellers Books";const e=t.data.map((t=>`<li class="main-top-blocks-list-item">\n                <h2  class="main-top-blocks-list-category">${t.list_name}</h2>\n                  <ul class="main-top-blocks-list-books list">\n                  ${mb(t)}\n                  </ul>\n                <button class="main-top-blocks-list-more" type="button">See more</button>\n              </li>`)).join("");db.innerHTML=e},mb=t=>{let e="",n=t.books.length>5?5:t.books.length;for(let i=0;i<n;i++)e+=`\n      <li class="main-top-blocks-list-books-item">\n        <a class="main-top-blocks-list-item-link link" id="${t.books[i]._id}">\n          <div class="main-top-blocks-list-item-img-box">\n            <img class="main-top-blocks-list-item-img" loading="lazy" src="${t.books[i].book_image}" alt="${t.books[i].author+" "+t.books[i].title}">\n          </div>\n          <p class="main-top-blocks-list-item-title">${t.books[i].title}</p>\n          <p class="main-top-blocks-list-item-author">${t.books[i].author}</p>\n        </a>\n      </li>\n    `;return e};ab.addEventListener("click",(t=>{t.target.closest("a")&&gb(t.target.closest("a").id)})),ub.addEventListener("click",(t=>{if(t.target.classList.contains("main-top-blocks-list-more")){const e=t.target.parentNode.firstElementChild.textContent,n=document.querySelector(".main-categories-list");for(const t of n.children)t.classList.remove("main-categories-list-item-active"),t.textContent===e&&t.classList.add("main-categories-list-item-active");sb(e).then((t=>{fb(t,e)})),vg()}t.target.closest("a")&&gb(t.target.closest("a").id)}));const gb=t=>{ob(t).then((t=>{const e=document.querySelector(".modal-book-item");e.classList.remove("visually-hidden");document.querySelector(".modal-book-item-img").src=t.data.book_image;document.querySelector(".modal-book-item-body-title").textContent=t.data.title;document.querySelector(".modal-book-item-body-author").textContent=t.data.author;document.querySelector(".modal-book-item-body-description").textContent=t.data.description;const n=document.querySelector(".modal-book-item-body-link-amazon");n.classList.add("visually-hidden");const i=document.querySelector(".modal-book-item-body-link-apple");i.classList.add("visually-hidden");const r=document.querySelector(".modal-book-item-body-link-bookshop");r.classList.add("visually-hidden"),console.log(t.data.buy_links);for(let e of t.data.buy_links)console.log(e),"Amazon"===e.name?(n.href=e.url,n.classList.remove("visually-hidden")):"Apple Books"===e.name?(i.href=e.url,i.classList.remove("visually-hidden")):"Bookshop"===e.name&&(r.href=e.url,r.classList.remove("visually-hidden"));const s=()=>{o.removeEventListener("click",a),document.removeEventListener("click",l),document.removeEventListener("keydown",u)},o=document.querySelector(".modal-book-item-close"),a=t=>{e.classList.add("visually-hidden"),s()};o.addEventListener("click",a);const c=document.querySelector(".modal-book-item-box"),l=t=>{t.composedPath().includes(c)||(e.classList.add("visually-hidden"),s())};document.addEventListener("click",l);const u=t=>{"Escape"==t.key&&(e.classList.add("visually-hidden"),s())};document.addEventListener("keydown",u)}))},yb=document.querySelector(".main-categories-list");(async()=>await jw.get(ib+"books/category-list"))().then((t=>{const e=t.data.map((t=>`<li class="main-categories-list-item">${t.list_name}</li>`)).join("");yb.innerHTML='<li class="main-categories-list-item main-categories-list-item-active">All categories</li>'+e})),yb.addEventListener("click",(t=>{if(t.target.classList.contains("main-categories-list-item")){for(const t of yb.children)t.classList.remove("main-categories-list-item-active");t.target.classList.add("main-categories-list-item-active"),"All categories"===t.target.textContent?rb().then((t=>{pb(t)})):sb(t.target.textContent).then((e=>{fb(e,t.target.textContent)}))}})),console.log("main-categories");const vb=document.querySelector(".main-support-scroll"),wb=document.querySelector(".main-support-list");vb.addEventListener("click",(()=>{let t=[...wb.children].slice(0,1);wb.firstChild.remove(),wb.appendChild(t[0])}));rb().then((t=>{pb(t)})),console.log("index.js")}();
//# sourceMappingURL=index.d8013a39.js.map
