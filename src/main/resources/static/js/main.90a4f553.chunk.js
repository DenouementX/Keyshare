(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(t,e,n){"use strict";n.r(e);var a=n(4),o=n(0),r=n.n(o),i=n(11),s=n.n(i),c=(n(86),n(22)),u=n.p+"static/media/keyshare-bg.91be4aac.png",l=(n(87),n(21)),d=n.n(l),p=n(35),h=n(59);n(58);h.a.initializeApp({apiKey:"AIzaSyAvT2C6imYAmMBEcPfbgERg9GCaRPk0Rgc",authDomain:"keyshare-5caf0.firebaseapp.com",projectId:"keyshare-5caf0",storageBucket:"keyshare-5caf0.appspot.com",messagingSenderId:"186273716474",appId:"1:186273716474:web:2ec5e70a7c0bc5f10cd143"});var f=h.a,b={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10};function m(){return(m=Object(p.a)(d.a.mark((function t(){var e,n,a,o,r,i,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.firestore(),t.next=3,e.collection("rooms").doc();case 3:return n=t.sent,console.log("Create PeerConnection with configuration: ",b),a=new RTCPeerConnection(b),(o=a.createDataChannel("channel")).binaryType="arraybuffer",r=n.collection("callerCandidates"),a.onicecandidate=function(t){t.candidate?(console.log("got candidate: ",t.candidate),r.add(t.candidate.toJSON())):console.log("got final candidate")},t.next=12,a.createOffer();case 12:return i=t.sent,t.next=15,a.setLocalDescription(i);case 15:return console.log("created offer:",i),s={offer:{type:i.type,sdp:i.sdp}},t.next=19,n.set(s);case 19:return console.log("New room created with SDP offer. Room ID: ".concat(n.id)),n.onSnapshot(function(){var t=Object(p.a)(d.a.mark((function t(e){var n,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.data(),a.currentRemoteDescription||!n||!n.answer){t.next=6;break}return console.log("Got remote description: ",n.answer),o=new RTCSessionDescription(n.answer),t.next=6,a.setRemoteDescription(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.collection("calleeCandidates").onSnapshot((function(t){t.docChanges().forEach(function(){var t=Object(p.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("added"!==e.type){t.next=5;break}return n=e.doc.data(),console.log("Got new remote ICE candidate: ".concat(JSON.stringify(n))),t.next=5,a.addIceCandidate(new RTCIceCandidate(n));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),t.abrupt("return",{dataConnection:o,roomId:n.id});case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=function(){return m.apply(this,arguments)};function y(){return(y=Object(p.a)(d.a.mark((function t(e){var n,a,o,r,i,s,c,u,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.firestore(),a=n.collection("rooms").doc("".concat(e)),t.next=4,a.get();case 4:if(o=t.sent,console.log("Got room:",o.exists),!o.exists){t.next=27;break}return console.log("Create PeerConnection with configuration: ",b),r=new RTCPeerConnection(b),i=new Promise((function(t,e){r.ondatachannel=function(e){e.channel.onopen=function(){t(e.channel)},e.channel.binaryType="arraybuffer"}})),s=a.collection("calleeCandidates"),r.onicecandidate=function(t){t.candidate?(console.log("Got candidate: ",t.candidate),s.add(t.candidate.toJSON())):console.log("got final candidate")},c=o.data().offer,console.log("Got offer:",c),t.next=16,r.setRemoteDescription(new RTCSessionDescription(c));case 16:return t.next=18,r.createAnswer();case 18:return u=t.sent,console.log("Created answer:",u),t.next=22,r.setLocalDescription(u);case 22:return l={answer:{type:u.type,sdp:u.sdp}},t.next=25,a.update(l);case 25:return a.collection("callerCandidates").onSnapshot((function(t){t.docChanges().forEach(function(){var t=Object(p.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("added"!==e.type){t.next=5;break}return n=e.doc.data(),console.log("Got new remote ICE candidate: ".concat(JSON.stringify(n))),t.next=5,r.addIceCandidate(new RTCIceCandidate(n));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),t.abrupt("return",i);case 27:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var N=function(t){return y.apply(this,arguments)},j=n(145),g=n(72),O=n(148),I=n(151),x=n(154),w=n(153),S=n(152),k=n(155),C=n(150),A=n(60),P=n(56),R=n(13),T=n(24),D=n(25),M=n(27),E=n(26),_=n(32),K=n.n(_),L=n(49),U=n.n(L),W=n(42),B=n.n(W),G=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],F=["Db","Eb","Gb","Ab","Bb"],z={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},H=/([a-g])([#b]?)(\d+)/;var J=B()(12,128).reduce((function(t,e){return t[e]=function(t){var e=(t-12)%12,n=Math.floor((t-12)/12),a=G[e];return{note:"".concat(a).concat(n),pitchName:a,octave:n,midiNumber:t,isAccidental:F.includes(a)}}(e),t}),{});function q(t){var e=J[t];if(!e)throw Error("Invalid MIDI number");return e}var Y=B()(12,128).filter((function(t){return!q(t).isAccidental})),Q={fromNote:function(t){if(!t)throw Error("Invalid note argument");var e=H.exec(t.toLowerCase());if(!e)throw Error("Invalid note argument");var n=Object(c.a)(e,4),a=n[1],o=n[2],r=n[3],i="".concat(a.toUpperCase()).concat(o),s=z[i];if(null==s)throw Error("Invalid note argument");return 12+s+12*parseInt(r,10)},getAttributes:q,MIN_MIDI_NUMBER:12,MAX_MIDI_NUMBER:127,NATURAL_MIDI_NUMBERS:Y},X=function(t){Object(M.a)(n,t);var e=Object(E.a)(n);function n(){var t;Object(T.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).onPlayNoteInput=function(){t.props.onPlayNoteInput(t.props.midiNumber)},t.onStopNoteInput=function(){t.props.onStopNoteInput(t.props.midiNumber)},t}return Object(D.a)(n,[{key:"getAbsoluteKeyPosition",value:function(t){var e=Q.getAttributes(t),n=e.octave,a=e.pitchName;return this.props.pitchPositions[a]+7*n}},{key:"getRelativeKeyPosition",value:function(t){return this.getAbsoluteKeyPosition(t)-this.getAbsoluteKeyPosition(this.props.noteRange.first)}},{key:"render",value:function(){var t=this.props,e=t.naturalKeyWidth,n=t.accidentalWidthRatio,o=t.midiNumber,r=t.gliss,i=t.useTouchEvents,s=t.accidental,c=t.active,u=t.disabled,l=t.children;return Object(a.jsx)("div",{className:K()("ReactPiano__Key",{"ReactPiano__Key--accidental":s,"ReactPiano__Key--natural":!s,"ReactPiano__Key--disabled":u,"ReactPiano__Key--active":c}),style:{left:V(this.getRelativeKeyPosition(o)*e),width:V(s?n*e:e)},onMouseDown:i?null:this.onPlayNoteInput,onMouseUp:i?null:this.onStopNoteInput,onMouseEnter:r?this.onPlayNoteInput:null,onMouseLeave:this.onStopNoteInput,onTouchStart:i?this.onPlayNoteInput:null,onTouchCancel:i?this.onStopNoteInput:null,onTouchEnd:i?this.onStopNoteInput:null,children:Object(a.jsx)("div",{className:"ReactPiano__NoteLabelContainer",children:l})})}}]),n}(r.a.Component);function V(t){return"".concat(100*t,"%")}X.defaultProps={accidentalWidthRatio:.65,pitchPositions:{C:0,Db:.55,D:1,Eb:1.8,E:2,F:3,Gb:3.5,G:4,Ab:4.7,A:5,Bb:5.85,B:6}};var Z=X,$=function(t){Object(M.a)(n,t);var e=Object(E.a)(n);function n(){return Object(T.a)(this,n),e.apply(this,arguments)}return Object(D.a)(n,[{key:"getMidiNumbers",value:function(){return B()(this.props.noteRange.first,this.props.noteRange.last+1)}},{key:"getNaturalKeyCount",value:function(){return this.getMidiNumbers().filter((function(t){return!Q.getAttributes(t).isAccidental})).length}},{key:"getNaturalKeyWidth",value:function(){return 1/this.getNaturalKeyCount()}},{key:"getWidth",value:function(){return this.props.width?this.props.width:"100%"}},{key:"getHeight",value:function(){if(!this.props.width)return"100%";var t=this.props.width*this.getNaturalKeyWidth();return"".concat(t/this.props.keyWidthToHeight,"px")}},{key:"render",value:function(){var t=this,e=this.getNaturalKeyWidth();return Object(a.jsx)("div",{className:K()("ReactPiano__Keyboard",this.props.className),style:{width:this.getWidth(),height:this.getHeight()},children:this.getMidiNumbers().map((function(n){var o=Q.getAttributes(n),r=(o.note,o.isAccidental),i=!t.props.disabled&&t.props.activeNotes.includes(n);return Object(a.jsx)(Z,{naturalKeyWidth:e,midiNumber:n,noteRange:t.props.noteRange,active:i,accidental:r,disabled:t.props.disabled,onPlayNoteInput:t.props.onPlayNoteInput,onStopNoteInput:t.props.onStopNoteInput,gliss:t.props.gliss,useTouchEvents:t.props.useTouchEvents,children:t.props.disabled?null:t.props.renderNoteLabel({isActive:i,isAccidental:r,midiNumber:n})},n)}))})}}]),n}(r.a.Component);$.defaultProps={disabled:!1,gliss:!1,useTouchEvents:!1,keyWidthToHeight:.33,renderNoteLabel:function(){}};var tt=$,et=n(50),nt=n.n(et),at=function(t){Object(M.a)(n,t);var e=Object(E.a)(n);function n(){var t;Object(T.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={isMouseDown:!1,useTouchEvents:!1},t.subscribeMidi=function(e){e.onmidimessage=function(e){var n=e.messageType?e:nt()(e);switch("noteon"===n.messageType&&0===n.velocity&&(n.messageType="noteoff"),n.messageType){case"noteon":t.onPlayNoteInput(n.key,n.velocity,!0);break;case"noteoff":t.onStopNoteInput(n.key,n.velocity,!0);break;default:console.log("unsupported "+n.messageType)}}},t.subscribeRTC=function(e){e({onrtcmessage:function(e){console.log("received inner"),console.log(e);var n=nt()(e);switch(console.log(n),"noteon"===n.messageType&&0===n.velocity&&(n.messageType="noteoff"),n.messageType){case"noteon":t.onPlayNoteInput(n.key,n.velocity,!1);break;case"noteoff":t.onStopNoteInput(n.key,n.velocity,!1);break;default:console.log("unsupported "+n.messageType)}}})},t.handleNoteChanges=function(e,n){if(!t.props.disabled){var a=e.map((function(t){return t.midiNumber})),o=n.map((function(t){return t.midiNumber})),r=U()(a,o),i=U()(o,a),s=e.filter((function(t){return r.includes(t.midiNumber)}));n.filter((function(t){return i.includes(t.midiNumber)})).forEach((function(e){t.props.playNote(e.midiNumber,e.velocity)})),s.forEach((function(e){t.props.stopNote(e.midiNumber,e.velocity)}))}},t.getMidiNumberForKey=function(e){if(!t.props.keyboardShortcuts)return null;var n=t.props.keyboardShortcuts.find((function(t){return t.key===e}));return n&&n.midiNumber},t.getKeyForMidiNumber=function(e){if(!t.props.keyboardShortcuts)return null;var n=t.props.keyboardShortcuts.find((function(t){return t.midiNumber===e}));return n&&n.key},t.onKeyDown=function(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey)){var n=t.getMidiNumberForKey(e.key);n&&t.onPlayNoteInput(n,127,!0)}},t.onKeyUp=function(e){var n=t.getMidiNumberForKey(e.key);n&&t.onStopNoteInput(n,0,!0)},t.onPlayNoteInput=function(e,n,a){t.props.disabled||t.props.onPlayNoteInput(e,n,a)},t.onStopNoteInput=function(e,n,a){t.props.disabled||t.props.onStopNoteInput(e,n,a)},t.onMouseDown=function(){t.setState({isMouseDown:!0})},t.onMouseUp=function(){t.setState({isMouseDown:!1})},t.onTouchStart=function(){t.setState({useTouchEvents:!0})},t.renderNoteLabel=function(e){var n=e.midiNumber,a=e.isActive,o=e.isAccidental,r=t.getKeyForMidiNumber(n);return t.props.renderNoteLabel({keyboardShortcut:r,midiNumber:n,isActive:a,isAccidental:o})},t}return Object(D.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.props.MIDIInput(this.subscribeMidi),this.subscribeRTC(this.props.RTCInput)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}},{key:"componentDidUpdate",value:function(t,e){this.props.activeNotes!==t.activeNotes&&this.handleNoteChanges(t.activeNotes||[],this.props.activeNotes||[])}},{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{style:{width:"100%",height:"100%"},onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchStart:this.onTouchStart,"data-testid":"container",children:Object(a.jsx)(tt,{noteRange:this.props.noteRange,onPlayNoteInput:function(e){return t.onPlayNoteInput(e,127,!0)},onStopNoteInput:function(e){return t.onStopNoteInput(e,0,!0)},activeNotes:this.props.activeNotes.map((function(t){return t.midiNumber})),className:this.props.className,disabled:this.props.disabled,width:this.props.width,keyWidthToHeight:this.props.keyWidthToHeight,gliss:this.state.isMouseDown,useTouchEvents:this.state.useTouchEvents,renderNoteLabel:this.renderNoteLabel})})}}]),n}(r.a.Component);at.defaultProps={renderNoteLabel:function(t){var e=t.keyboardShortcut,n=(t.midiNumber,t.isActive),o=t.isAccidental;return e?Object(a.jsx)("div",{className:K()("ReactPiano__NoteLabel",{"ReactPiano__NoteLabel--active":n,"ReactPiano__NoteLabel--accidental":o,"ReactPiano__NoteLabel--natural":!o}),children:e}):null}};var ot=at,rt=n(67),it=n(73),st=function(t){Object(M.a)(n,t);var e=Object(E.a)(n);function n(){var t;Object(T.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={activeNotes:t.props.activeNotes||[]},t.handlePlayNoteInput=function(e,n,a){t.setState((function(o){return o.activeNotes.some((function(t){return t.midiNumber===e}))?null:(t.props.onPlayNoteInput&&a&&t.props.onPlayNoteInput(e,n),{activeNotes:o.activeNotes.concat({midiNumber:e,velocity:n})})}))},t.handleStopNoteInput=function(e,n,a){t.setState((function(o){return o.activeNotes.some((function(t){return t.midiNumber===e}))?(t.props.onStopNoteInput&&a&&t.props.onStopNoteInput(e,n),{activeNotes:o.activeNotes.filter((function(t){return t.midiNumber!==e}))}):null}))},t}return Object(D.a)(n,[{key:"componentDidUpdate",value:function(t){t.activeNotes!==this.props.activeNotes&&this.state.activeNotes!==this.props.activeNotes&&this.setState({activeNotes:this.props.activeNotes||[]})}},{key:"render",value:function(){var t=this.props,e=(t.activeNotes,t.onPlayNoteInput,t.onStopNoteInput,Object(it.a)(t,["activeNotes","onPlayNoteInput","onStopNoteInput"]));return Object(a.jsx)(ot,Object(rt.a)({activeNotes:this.state.activeNotes,onPlayNoteInput:this.handlePlayNoteInput,onStopNoteInput:this.handleStopNoteInput},e))}}]),n}(r.a.Component);var ct={create:function(t){for(var e=t.firstNote,n=t.lastNote,a=t.keyboardConfig,o=e,r=0,i=[];r<a.length&&o<=n;){var s=a[r];Q.getAttributes(o).isAccidental?i.push({key:s.flat,midiNumber:o}):(i.push({key:s.natural,midiNumber:o}),r+=1),o+=1}return i},BOTTOM_ROW:[{natural:"z",flat:"a",sharp:"s"},{natural:"x",flat:"s",sharp:"d"},{natural:"c",flat:"d",sharp:"f"},{natural:"v",flat:"f",sharp:"g"},{natural:"b",flat:"g",sharp:"h"},{natural:"n",flat:"h",sharp:"j"},{natural:"m",flat:"j",sharp:"k"},{natural:",",flat:"k",sharp:"l"},{natural:".",flat:"l",sharp:";"},{natural:"/",flat:";",sharp:"'"}],HOME_ROW:[{natural:"a",flat:"q",sharp:"w"},{natural:"s",flat:"w",sharp:"e"},{natural:"d",flat:"e",sharp:"r"},{natural:"f",flat:"r",sharp:"t"},{natural:"g",flat:"t",sharp:"y"},{natural:"h",flat:"y",sharp:"u"},{natural:"j",flat:"u",sharp:"i"},{natural:"k",flat:"i",sharp:"o"},{natural:"l",flat:"o",sharp:"p"},{natural:";",flat:"p",sharp:"["},{natural:"'",flat:"[",sharp:"]"}],QWERTY_ROW:[{natural:"q",flat:"1",sharp:"2"},{natural:"w",flat:"2",sharp:"3"},{natural:"e",flat:"3",sharp:"4"},{natural:"r",flat:"4",sharp:"5"},{natural:"t",flat:"5",sharp:"6"},{natural:"y",flat:"6",sharp:"7"},{natural:"u",flat:"7",sharp:"8"},{natural:"i",flat:"8",sharp:"9"},{natural:"o",flat:"9",sharp:"0"},{natural:"p",flat:"0",sharp:"-"},{natural:"[",flat:"-",sharp:"="}]},ut=(n(93),n(43)),lt=n(68),dt=n.n(lt),pt=function(t){Object(M.a)(n,t);var e=Object(E.a)(n);function n(t){var a;return Object(T.a)(this,n),(a=e.call(this,t)).loadInstrument=function(t){a.setState({instrument:null}),dt.a.instrument(a.props.audioContext,t,{format:a.props.format,soundfont:a.props.soundfont,nameToUrl:function(t,e,n){return"".concat(a.props.hostname,"/").concat(e,"/").concat(t,"-").concat(n,".js")}}).then((function(t){a.setState({instrument:t})}))},a.playNote=function(t,e){a.state.instrument&&a.props.audioContext.resume().then((function(){var n=a.state.instrument.play(t,0,{gain:(e||127)/127});a.setState({activeAudioNodes:Object.assign({},a.state.activeAudioNodes,Object(ut.a)({},t,n))})}))},a.stopNote=function(t,e){a.props.audioContext.resume().then((function(){a.state.activeAudioNodes[t]&&(a.state.activeAudioNodes[t].stop(),a.setState({activeAudioNodes:Object.assign({},a.state.activeAudioNodes,Object(ut.a)({},t,null))}))}))},a.stopAllNotes=function(){a.props.audioContext.resume().then((function(){Object.values(a.state.activeAudioNodes).forEach((function(t){t&&t.stop()})),a.setState({activeAudioNodes:{}})}))},a.state={activeAudioNodes:{},instrument:null},a}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.loadInstrument(this.props.instrumentName)}},{key:"componentDidUpdate",value:function(t,e){t.instrumentName!==this.props.instrumentName&&this.loadInstrument(this.props.instrumentName)}},{key:"render",value:function(){return this.props.render({isLoading:!this.state.instrument,playNote:this.playNote,stopNote:this.stopNote,stopAllNotes:this.stopAllNotes})}}]),n}(r.a.Component);pt.defaultProps={format:"mp3",soundfont:"MusyngKite",instrumentName:"acoustic_grand_piano"};var ht=pt,ft=function(t){return function(e){navigator.requestMIDIAccess().then(t).then((function(t){t.forEach(e)})).catch((function(){return window.alert("Could not automatically get a MIDI device. Make sure that you are using a compatible browser.")}))}},bt=Object(j.a)((function(t){return{backgroundDiv:{height:"100%",width:"100%",top:"0px",left:"0px",position:"fixed"},entryId:{fontSize:"0.8em"},fillText:{padding:"10px"}}})),mt=Object(g.a)({typography:{fontFamily:["American Typewriter"]}}),vt=new window.AudioContext;var yt=function(){var t=r.a.useState(null),e=Object(c.a)(t,2),n=e[0],i=e[1],s=r.a.useState(!1),l=Object(c.a)(s,2),d=l[0],p=l[1],h=r.a.useState(""),f=Object(c.a)(h,2),b=f[0],m=f[1],y=r.a.useState(""),j=Object(c.a)(y,2),g=j[0],T=j[1],D=r.a.useState("student"),M=Object(c.a)(D,2),E=M[0],_=M[1],K=r.a.useState(!0),L=Object(c.a)(K,2),U=L[0],W=L[1],B=r.a.useState(!0),G=Object(c.a)(B,2),F=G[0],z=G[1];Object(o.useEffect)((function(){v().then((function(t){i(t.dataConnection),m(t.roomId)}))}),[]);var H=r.a.useState({onrtcmessage:function(t){return null}}),J=Object(c.a)(H,2),q=J[0],Y=J[1];Object(o.useEffect)((function(){n&&(n.onmessage=function(t){F&&q.onrtcmessage({data:Array.from(new Uint8Array(t.data)),receivedTime:0}),console.log("received outer")},console.log(n.readyState))}),[n,d,q,F]);var X=bt(),V=Object(o.useState)(!1),Z=Object(c.a)(V,2),$=Z[0],tt=Z[1],et=Q.fromNote("a0"),nt=Q.fromNote("c8"),at=ct.create({firstNote:Q.fromNote("g2"),lastNote:Q.fromNote("f5"),keyboardConfig:ct.BOTTOM_ROW.concat(ct.QWERTY_ROW)}),ot=ft((function(t){return t.inputs})),rt=function(t){return function(e,a){if(n&&"open"===n.readyState&&U){var o=new ArrayBuffer(3),r=new Uint8Array(o);r[0]=t,r[1]=e,r[2]=a,n.send(o)}}},it=rt(144),ut=rt(128);return Object(a.jsx)(O.a,{theme:mt,children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("img",{src:u,alt:"Background",className:X.backgroundDiv,style:{zIndex:-1}}),Object(a.jsx)(P.a,{children:Object(a.jsxs)(R.c,{children:[Object(a.jsxs)(R.a,{exact:!0,path:"/",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("div",{className:"Selector",children:Object(a.jsxs)(k.a,{exclusive:!0,value:E,onChange:function(t,e){_(e),tt(!1)},"aria-label":"userStatus",children:[Object(a.jsx)(C.a,{value:"student","aria-label":"left aligned",children:"Student"}),Object(a.jsx)(C.a,{value:"teacher","aria-label":"right aligned",children:"Teacher"})]})})}),Object(a.jsxs)("div",{className:"Body",children:["student"===E?Object(a.jsx)(I.a,{variant:"h4",className:X.entryId,children:"Enter your room ID:"}):Object(a.jsx)(I.a,{variant:"h4",className:X.entryId,children:"Use this room ID:"}),Object(a.jsx)("div",{className:"enterIdBox",children:"student"===E?Object(a.jsx)(x.a,{name:"roomId",variant:"filled",value:g,required:!0,onChange:function(t){t.target.value!==b?T(t.target.value):window.alert("Your room ID cannot be your own teacher ID.")}}):Object(a.jsx)(x.a,{name:"genRoomId",variant:"filled",value:b,InputProps:{readOnly:!0}})}),"student"===E?Object(a.jsx)(w.a,{variant:"contained",onClick:function(){console.log(g),g&&N(g).then((function(t){i(t),p(!0)}))},children:"Connect"}):$?Object(a.jsx)(A.CopyToClipboard,{text:b,onCopy:function(){return tt(!0)},children:Object(a.jsx)("div",{children:Object(a.jsx)(w.a,{variant:"contained",color:"primary",children:"Copied!"})})}):Object(a.jsx)(A.CopyToClipboard,{text:b,onCopy:function(){return tt(!0)},children:Object(a.jsx)("div",{children:Object(a.jsx)(w.a,{variant:"contained",children:"Copy to Clipboard"})})}),Object(a.jsx)(P.b,{to:"/piano",children:Object(a.jsx)(w.a,{children:"Piano"})})]}),Object(a.jsx)("div",{className:"Instructions",children:Object(a.jsx)(S.a,{style:{marginLeft:"18%",marginRight:"18%"},elevation:10,children:"student"===E?Object(a.jsxs)("div",{children:[Object(a.jsx)(I.a,{className:"topInstruction",variant:"h6",children:Object(a.jsx)("b",{children:"Instructions:"})}),Object(a.jsx)(I.a,{variant:"h6",children:"1) Make sure your MIDI instrument is connected and working."}),Object(a.jsx)(I.a,{variant:"h6",children:"2) Enter your instructor's room code above and press connect."}),Object(a.jsx)(I.a,{className:"bottomInstruction",variant:"h6",children:"3) Press the 'piano' button to enter the piano screen, and start playing."})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)(I.a,{className:"topInstruction",variant:"h6",children:Object(a.jsx)("b",{children:"Instructions:"})}),Object(a.jsx)(I.a,{variant:"h6",children:"1) Make sure your student's MIDI instrument is connected and working."}),Object(a.jsx)(I.a,{variant:"h6",children:"2) Give your student the auto-generated room code and wait for connection."}),Object(a.jsx)(I.a,{className:"bottomInstruction",variant:"h6",children:"3) Press the 'piano' button to enter the piano screen, and listen."})]})})})]}),Object(a.jsxs)(R.a,{path:"/piano",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsxs)("div",{className:"Selector",children:[Object(a.jsx)(k.a,{onChange:function(t){W(!U)},"aria-label":"userStatus",children:Object(a.jsx)(C.a,{selected:!U,children:U?"Unmuted":"Muted"})}),Object(a.jsx)(k.a,{onChange:function(t){z(!F)},"aria-label":"userStatus",children:Object(a.jsx)(C.a,{selected:!F,children:F?"Undeafened":"Deafened"})})]})}),Object(a.jsx)("div",{className:"Instructions",children:Object(a.jsx)(ht,{instrumentName:"acoustic_grand_piano",audioContext:vt,hostname:"https://d1pzp51pvbm36p.cloudfront.net",render:function(t){t.isLoading;var e=t.playNote,n=t.stopNote;return Object(a.jsx)(st,{noteRange:{first:et,last:nt},playNote:e,stopNote:n,onPlayNoteInput:it,onStopNoteInput:ut,width:1140,keyboardShortcuts:at,MIDIInput:ot,RTCInput:Y,selection:E})}})}),Object(a.jsx)(P.b,{to:"/",children:Object(a.jsx)(w.a,{children:"Exit Room"})})]})]})})]})})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(yt,{})}),document.getElementById("root"))},86:function(t,e,n){},87:function(t,e,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.90a4f553.chunk.js.map