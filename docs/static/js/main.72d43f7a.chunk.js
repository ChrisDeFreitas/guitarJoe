(this.webpackJsonpguitarjoe=this.webpackJsonpguitarjoe||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),n=a(8),o=a.n(n),i=(a(17),a(11)),l=(a(18),a(4)),c=a(5),h=a(2),d=a(7),b=a(6),u=(a(19),a(3)),f=(a(20),{chords:{list:[{name:"Major triad",abr:"maj",intervals:["P1","M3","P5"]},{name:"Minor triad",abr:"min",intervals:["P1","m3","P5"]},{name:"Augmented triad",abr:"aug",intervals:["P1","M3","A5"]},{name:"Diminished triad",abr:"dim",intervals:["P1","m3","d5"]},{name:"Dominant seventh",abr:"7",intervals:["P1","M3","P5","m7"]},{name:"Major seventh",abr:"maj7",intervals:["P1","M3","P5","M7"]},{name:"Minor seventh",abr:"min7",intervals:["P1","m3","P5","m7"]},{name:"Major sixth",abr:"maj6",intervals:["P1","M3","P5","M6"]},{name:"Minor sixth",abr:"min6",intervals:["P1","m3","P5","M6"]},{name:"Suspended second",abr:"sus2",intervals:["P1","M2","P5"]},{name:"Suspended fourth",abr:"sus4",intervals:["P1","P4","P5"]}],byName:function(e){var t,a=Object(u.a)(f.chords.list);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.abr===e||r.name===e)return Object.assign({},r)}}catch(s){a.e(s)}finally{a.f()}return null},obj:function(e,t){var a=[],r=f.chords.byName(t);if(null===r)return null;if("string"===typeof e&&(e=f.intervals.byName(e)),null===e)return null;var s,n=r.name.indexOf("Minor")>=0||r.name.indexOf("Diminished")>=0||e.note.indexOf("\u266d")>=0,o=Object(u.a)(r.intervals);try{for(o.s();!(s=o.n()).done;){var i=s.value,l=f.intervals.byName(i),c=f.notes.calc(e,l,n);a.push(Object.assign({},l,{note:c}))}}catch(d){o.e(d)}finally{o.f()}var h=Object.assign({},r,{type:"chord",fullName:e.note+" "+r.name,fullAbbrev:e.note+r.abr,root:Object.assign({},e),ivls:a});return h}},fretboard:{strings:[{num:1,note:"E",octave:4,semis:0,tabLetter:"e"},{num:2,note:"B",octave:3,semis:0,tabLetter:"B"},{num:3,note:"G",octave:3,semis:0,tabLetter:"G"},{num:4,note:"D",octave:3,semis:0,tabLetter:"D"},{num:5,note:"A",octave:2,semis:0,tabLetter:"A"},{num:6,note:"E",octave:2,semis:0,tabLetter:"E"}],fretMin:1,fretMax:14,fretMinSet:function(e){f.fretboard.fretMin=e,f.fretboard.init()},fretMaxSet:function(e){f.fretboard.fretMax=e,f.fretboard.init()},init:function(){for(var e=0;e<=f.fretboard.strings.length-1;e++){var t=f.fretboard.strings[e];f.fretboard.strings[e].semis=f.semisCalc(t.note,t.octave)}},strg:function(e){return Object.assign({},f.fretboard.strings[e-1])},fretInRange:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=a<=5?5:a;return t.fret<=1&&e.fret<=r||t.fret>1&&e.fret>=t.fret-a&&e.fret<=t.fret+a||null},obj:function(e,t){"number"===typeof e&&(e=f.fretboard.strg(e));var a=e.semis+Number(t);return{fret:t,strg:Object.assign({},e),tab:e.tabLetter+t,semis:a,notes:f.notes.bySemis(a)}},objBySemis:function(e){var t,a=null,r=f.fretboard.fretMax,s=Object(u.a)(f.fretboard.strings);try{for(s.s();!(t=s.n()).done;){var n=t.value;if(e>=n.semis&&e<=n.semis+r)return a=e-n.semis,f.fretboard.obj(n,a)}}catch(o){s.e(o)}finally{s.f()}return null},objByTab:function(e){var t,a=e.substr(0,1),r=Number(e.substr(1)),s=Object(u.a)(f.fretboard.strings);try{for(s.s();!(t=s.n()).done;){var n=t.value;if(n.tabLetter===a)return f.fretboard.obj(n,r)}}catch(o){s.e(o)}finally{s.f()}return null},tabByFret:function(e,t){e=Number(e);var a,r=Object(u.a)(f.fretboard.strings);try{for(r.s();!(a=r.n()).done;){var s=a.value;if(s.num===e)return s.tabLetter+t}}catch(n){r.e(n)}finally{r.f()}return null}},intervals:{list:[{name:"Perfect unison",abr:"P1",semis:0,note:"C"},{name:"Minor second",abr:"m2",semis:1,note:"D\u266d"},{name:"Augmented unison",abr:"A1",semis:1,note:"C#"},{name:"Major second",abr:"M2",semis:2,note:"D"},{name:"Minor third",abr:"m3",semis:3,note:"E\u266d"},{name:"Augmented second",abr:"A2",semis:3,note:"D#"},{name:"Major third",abr:"M3",semis:4,note:"E"},{name:"Diminished fourth",abr:"d4",semis:4,note:"F\u266d"},{name:"Perfect fourth",abr:"P4",semis:5,note:"F"},{name:"Augmented third",abr:"A3",semis:5,note:"E#"},{name:"Diminished fifth",abr:"d5",semis:6,note:"G\u266d"},{name:"Augmented fourth",abr:"A4",semis:6,note:"F#"},{name:"Perfect fifth",abr:"P5",semis:7,note:"G"},{name:"Minor sixth",abr:"m6",semis:8,note:"A\u266d"},{name:"Augmented fifth",abr:"A5",semis:8,note:"G#"},{name:"Major sixth",abr:"M6",semis:9,note:"A"},{name:"Minor seventh",abr:"m7",semis:10,note:"B\u266d"},{name:"Augmented sixth",abr:"A6",semis:10,note:"A#"},{name:"Major seventh",abr:"M7",semis:11,note:"B"},{name:"Diminished octave",abr:"d8",semis:11,note:"C\u266d"},{name:"Perfect octave",abr:"P8",semis:12,note:"C"},{name:"Augmented seventh",abr:"A7",semis:12,note:"B#"}],byNote:function(e){e=e.toUpperCase();var t,a=Object(u.a)(f.intervals.list);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.note===e)return Object.assign({},r)}}catch(s){a.e(s)}finally{a.f()}return null},byName:function(e){var t,a=e.toUpperCase(),r=Object(u.a)(f.intervals.list);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(s.abr===e||s.note===a||s.name===e)return Object.assign({},s)}}catch(n){r.e(n)}finally{r.f()}return null},bySemis:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e%=12;var a,r=[],s=Object(u.a)(f.intervals.list);try{for(s.s();!(a=s.n()).done;){var n=a.value;if(n.semis>e)break;if(n.semis===e){var o=Object.assign({},n);if(!0===t)return o;r.push(o)}}}catch(i){s.e(i)}finally{s.f()}return r}},notes:{list:["C","C#","D\u266d","D","D#","E\u266d","E","F","F#","G\u266d","G","G#","A\u266d","A","A#","B\u266d","B"],alpha:["C","D","E","F","G","A","B"],bySemis:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=[];e=Number(e)%12;var r,s=Object(u.a)(f.intervals.list);try{for(s.s();!(r=s.n()).done;){var n=r.value;if(n.semis===e){if(!0===t)return n.note;a.push(n.note)}if(n.semis>e)break}}catch(o){s.e(o)}finally{s.f()}return a},calc:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"object"===typeof e&&(e=e.note);var r=e.substr(0,1),s=e.substr(1,2),n="object"===typeof t?t:f.intervals.byName(t),o=n.abr.substr(0,1),i=n.semis,l=0,c=r,h=s;function d(e){return l=f.notes.alpha.indexOf(e),l++,f.notes.alpha[l%7]}for(var b=0;b<i;b++)"B"===c&&""===h?c="C":"E"===c&&""===h?c="F":"\u266d"===h?h="":"#"===h?(h="",c=d(c)):"m"===o||"d"===o||!0===a?(h="\u266d",c=d(c)):h="#";return c+h},obj:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;"number"===typeof e&&(e=f.fretboard.strg(e));var r=e.semis+t,s=f.octave(r),n=f.notes.bySemis(r);return{fret:t,note:null===a?n[0]:a,notes:n,octave:s,semis:r,strg:e,tab:e.tabLetter+t}},objByNote:function(e){var t=f.intervals.byNote(e).semis;return{fret:null,note:e,notes:f.notes.bySemis(t),octave:null,semis:t,strg:null,tab:null}},objByTab:function(e){var t=f.fretboard.objByTab(e);return f.notes.obj(t.strg,t.fret)}},octave:function(e){return Math.floor(e/12)},scales:{list:[{name:"Major",abr:"M",short:"Major",intervals:["P1","M2","M3","P4","P5","M6","M7"]},{name:"Natural minor",abr:"m",short:"Nat.min",intervals:["P1","M2","m3","P4","P5","m6","m7"]},{name:"Pentatonic major",abr:"P",short:"Pen.maj",intervals:["P1","M2","M3","P5","M6"]},{name:"Pentatonic minor",abr:"p",short:"Pen.min",intervals:["P1","m3","P4","P5","m7"]},{name:"Blues heptatonic",abr:"B7",short:"Blues7",intervals:["P1","M2","m3","P4","d5","M6","m7"]},{name:"Blues hexatonic",abr:"B6",short:"Blues6",intervals:["P1","m3","P4","d5","P5","m7"]},{name:"Chromatic",abr:"Ch",short:"Chrom",intervals:["P1","m2","M2","m3","M3","P4","d5","P5","m6","M6","m7","M7"]},{name:"Double harmonic",abr:"DH",short:"Dbl.har",intervals:["P1","m2","M3","P4","P5","m6","M7"]},{name:"Gypsy minor",abr:"Gm",short:"Gypsy.min",intervals:["P1","M2","m3","d5","P5","m6","M7"]},{name:"Hungarian major",abr:"HM",short:"Hung.maj`",intervals:["P1","m3","M3","d5","P5","M6","m7"]},{name:"Phrygian dominant",abr:"Pd",short:"Phr.dom`",intervals:["P1","m2","M3","P4","P5","m6","m7"]}],byName:function(e){var t,a=Object(u.a)(f.scales.list);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.name===e||r.short===e||r.abr===e)return Object.assign({},r)}}catch(s){a.e(s)}finally{a.f()}return null},obj:function(e,t){var a=[];if("string"===typeof e&&(e=f.intervals.byName(e)),null===e)return null;var r=f.scales.byName(t);if(null===r)return null;var s,n=t.indexOf("minor")>=0||e.note.indexOf("\u266d")>=0,o=Object(u.a)(r.intervals);try{for(o.s();!(s=o.n()).done;){var i=s.value,l=f.intervals.byName(i),c=f.notes.calc(e,l,n);l=Object.assign({},l,{abr:i,note:c}),a.push(l)}}catch(d){o.e(d)}finally{o.f()}var h=Object.assign({},r,{type:"scale",fullName:e.note+" "+r.name,shortName:e.note+" "+r.short,abbrevName:e.note+r.abr,root:Object.assign({},e),ivls:a});return h}},semis:function(e){return f.intervals.byName(e)},semisCalc:function(e,t){var a=12*t;return a+=f.intervals.byName(e).semis}});f.fretboard.init();var m,v=f,p=a(0),j=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).buttonClick=r.buttonClick.bind(Object(h.a)(r)),r.fretBtnTextChange=r.fretBtnTextChange.bind(Object(h.a)(r)),r.fretClick=r.fretClick.bind(Object(h.a)(r)),r.fretFltrClick=r.fretFltrClick.bind(Object(h.a)(r)),r.strgFltrClick=r.strgFltrClick.bind(Object(h.a)(r)),r}return Object(c.a)(a,[{key:"buttonClick",value:function(e){var t=e.target;if("BUTTON"!==t.nodeName&&"BUTTON"!==(t=t.parentNode).nodeName&&(t=t.parentNode),"BUTTON"===t.nodeName){var a=Number(t.dataset.selected);0===a?t.dataset.selected=1:1===a&&(t.dataset.selected=0),e.stopPropagation()}}},{key:"fretBtnTextChange",value:function(e){e.stopPropagation(),"NoteFirst"===this.props.qry.fretBtnText?this.props.stateChange("fretBtnText","IvlFirst"):this.props.stateChange("fretBtnText","NoteFirst")}},{key:"fretClick",value:function(e){var t=e.target,a=Number(t.dataset.strn),r=Number(t.dataset.fret);if(isNaN(a))console.log("FretPnl.fretClick() error, bad caller:",t);else if(e.stopPropagation(),"true"!==t.dataset.fretfilter){if(7===a)a=6;else if(1!==a&&"TD"===t.nodeName){e.clientY<t.getBoundingClientRect().top+t.offsetHeight/2&&a--}if(!0!==this.props.strgFltr(a)){var s=v.notes.obj(a,r);this.props.stateChange("fretRoot",s)}}}},{key:"fretFltrClick",value:function(e){var t=this.props.qry,a=e.currentTarget,r=Number(a.dataset.fret);console.log("fretFltrClick:",r,t.fretFilter),this.props.stateChange("fretFilter",r),e.stopPropagation()}},{key:"strgFltrClick",value:function(e){var t=e.currentTarget.dataset.strn,a=!this.props.strgFltr(t);this.props.stateChange("strgFltr"+t,a),e.stopPropagation()}},{key:"button",value:function(e,t){var a=this.props.qry,r=e.ivl,s=a.fretBtnText,n="";if("ALL"===t){if(0!==a.octave&&a.octave!==e.octave)return null;s="NoteFirst"}else"fretRoot"===a.rootType?e.notes.indexOf(t.note)>=0&&e.semis===t.semis&&(n=a.rootType):"selNote"===a.rootType&&t.notes.indexOf(e.note)>=0&&(n=a.rootType);a.noteFilter.indexOf(e.note)>=0&&(n="noteFilter");var o=[],i=0;return"IvlFirst"===s?(e.ivl&&o.push(Object(p.jsxs)("span",{className:"spanIvl",onClick:this.buttonClick,children:[Object(p.jsx)("span",{onClick:this.buttonClick,children:r.abr.substr(0,1)},++i),r.abr.substr(1)]},++i)),o.push(Object(p.jsxs)("sub",{className:"subNote",onClick:this.fretBtnTextChange,children:[e.note,Object(p.jsx)("sub",{className:"subOctave",children:e.octave},++i)]},++i))):(o.push(Object(p.jsxs)("span",{className:"spanNote",onClick:this.buttonClick,children:[e.note,Object(p.jsx)("sub",{className:"subOctave",onClick:this.buttonClick,children:e.octave},++i)]},++i)),e.ivl&&o.push(Object(p.jsx)("sub",{className:"subInterval",onClick:this.fretBtnTextChange,children:r.abr},++i))),Object(p.jsx)("button",{className:"fretButton",onClick:this.buttonClick,"data-strn":e.strg.num,"data-fret":e.fret,"data-state":n,"data-selected":0,children:o},e.semis)}},{key:"render",value:function(){var e=this,t=this.props.qry;function a(a){return"fretRoot"!==t.rootType?null:a.fret===t.root.fret&&a.strg.num===t.root.strg.num?e.button(a,t.root):null}function r(a){if("selNote"!==t.rootType)return null;var r=a.notes.indexOf(t.note);return!(""===t.note||r>=0)||0!==t.octave&&t.octave!==a.octave?null:(""!==t.note&&(a.note=t.note),e.button(a,t.root))}function s(a){if(""===t.note)return t.octave===a.octave?(a.ivl=t.ivl,e.button(a,t.root)):null}function n(a){if(null===t.scale)return null;if("fretRoot"===t.rootType&&!0!==v.fretboard.fretInRange(a,t.root))return null;var r,s=Object(u.a)(t.scale.ivls);try{for(s.s();!(r=s.n()).done;){var n=r.value;if(a.notes.indexOf(n.note)>=0&&(0===t.octave||t.octave===a.octave))return a.ivl=n,a.note=n.note,e.button(a,t.root)}}catch(o){s.e(o)}finally{s.f()}return null}function o(a){if(null===t.chord)return null;if("fretRoot"===t.rootType&&!0!==v.fretboard.fretInRange(a,t.root))return null;var r,s=Object(u.a)(t.chord.ivls);try{for(s.s();!(r=s.n()).done;){var n=r.value;if(a.notes.indexOf(n.note)>=0&&(0===t.octave||t.octave===a.octave))return a.ivl=n,a.note=n.note,e.button(a,t.root)}}catch(o){s.e(o)}finally{s.f()}return null}function i(a){if(null===t.ivl)return null;var r=null;return"fretRoot"===t.rootType&&a.tab===t.root.tab||"selRoot"===t.rootType&&a.notes.indexOf(t.note)>=0?r="root":"fretRoot"===t.rootType&&!0===v.fretboard.fretInRange(a,t.root,4)?a.notes.indexOf(t.ivl.note)>=0&&(r=!0):"selNote"===t.rootType&&a.notes.indexOf(t.ivl.note)>=0&&(r=!0),"root"===r?(a.ivl=v.intervals.byName("P1"),a.note=t.note,r=e.button(a,t.root)):!0!==r||0!==t.octave&&t.octave!==a.octave||(a.ivl=t.ivl,a.note=t.ivl.note,r=e.button(a,t.root)),r}for(var l=[],c=v.fretboard.fretMax,h=this.props.fretFirst,d=this.props.fretLast,b="",f=1;f<=9;f++){for(var m=[],j=f-1,g=this.props.strgFltr(j),O=0;O<=c+1;O++){var y='"'.concat(O,'",'),N=t.fretFilter.indexOf(y)>=0,C=null;if(0===O&&j>=1&&j<=6&&(C=Object(p.jsx)("div",{onClick:this.strgFltrClick,"data-strn":j,className:"btnFilter btnStrgFltr btnStrgFltr"+j,children:Object(p.jsx)("div",{children:"\u2666"})})),1===f){var x=O===c+1?"borderRight tdBorder"+O:"tdBorder"+O,k=O===h||O===c+1?" ":O;k===O&&!0===t.collapsed&&(k=[5,7,9,12].indexOf(O)>=0?Object(p.jsx)("div",{"data-fret":O,className:"collapsed",children:"\xa0"}):""),m.push(Object(p.jsx)("td",{"data-fret":O,"data-fretfilter":N,onMouseDown:this.fretFltrClick,className:x,children:k},O))}else if(9===f)O===c+1?m.push(Object(p.jsx)("td",{className:"borderRight tdBottom col"+O},O)):m.push(Object(p.jsx)("td",{className:"tdBottom col"+O},O));else if(O===c+1)m.push(Object(p.jsx)("td",{"data-strn":j,"data-col":O,className:"borderRight col"+O},O));else{var F=null,P=null;if(j>=1&&j<=6&&(P=Object(p.jsx)("div",{className:"stringdiv",onClick:this.fretClick,"data-strn":j,"data-fret":O})),!1===N&&!1===g&&O>=h&&O<=d){var M=v.notes.obj(j,O);"selNote"===t.rootType&&"All"===this.props.selNoteVal?F=e.button(M,"ALL"):(null===(F=n(M))&&(F=o(M)),null===F&&(F=i(M)),null===F&&("fretRoot"===t.rootType?F=a(M):"selNote"===t.rootType&&(F=r(M))),null===F&&(F=s(M)))}m.push(Object(p.jsxs)("td",{className:"fret fret"+O,onClick:this.fretClick,"data-strn":j,"data-fret":O,"data-fretfilter":N,children:[C,F,P,Object(p.jsx)("div",{className:"fretbar",onClick:this.fretClick,"data-strn":j,"data-fret":O})]},O))}}b=1===f?"frame frameTop":8===f?"borderBottom":9===f?"frame frameBottom":"strg strg"+(f-1),l.push(Object(p.jsx)("tr",{className:b,"data-fltr":g,children:m},f))}return Object(p.jsx)("div",{className:"fretPnlContainer",children:Object(p.jsx)("table",{className:"fretPnl",children:Object(p.jsx)("tbody",{children:l})})})}}]),a}(s.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).btnDupeClick=r.btnDupeClick.bind(Object(h.a)(r)),r.btnDelClick=r.btnDelClick.bind(Object(h.a)(r)),r.last={},r.selLabelClick=r.selLabelClick.bind(Object(h.a)(r)),r.selChordChange=r.selChordChange.bind(Object(h.a)(r)),r.btnClearClick=r.btnClearClick.bind(Object(h.a)(r)),r.btnCollapseClick=r.btnCollapseClick.bind(Object(h.a)(r)),r.selIntervalChange=r.selIntervalChange.bind(Object(h.a)(r)),r.selNoteChange=r.selNoteChange.bind(Object(h.a)(r)),r.selOctaveChange=r.selOctaveChange.bind(Object(h.a)(r)),r.selScaleChange=r.selScaleChange.bind(Object(h.a)(r)),r.infoNoteClick=r.infoNoteClick.bind(Object(h.a)(r)),r}return Object(c.a)(a,[{key:"btnDelClick",value:function(){this.props.remove()}},{key:"btnDupeClick",value:function(){this.props.duplicate()}},{key:"btnCollapseClick",value:function(){var e=!this.props.qry.collapsed;this.props.stateChange("collapsed",e)}},{key:"btnClearClick",value:function(){this.props.reset()}},{key:"infoNoteClick",value:function(e){var t=e.target;"ivl"!==t.className&&(t=t.parentNode);var a=t.dataset.note;"string"===typeof a&&this.props.stateChange("noteFilter",a,t.className)}},{key:"selLabelClick",value:function(e){var t=this.props.qry,a=e.target;if("true"===a.dataset.selected)if("note"===a.dataset.type){if(""===t.rootType)return;this.last.rootType=t.rootType,this.last.root=t.root,"selNote"===this.last.rootType&&this.props.stateChange("selNoteVal",""),"fretRoot"===this.last.rootType&&this.props.stateChange("fretRoot",null)}else if("chord"===a.dataset.type){if(null===t.chord)return;this.last.chordName=t.chord.name,this.props.stateChange("chordName","")}else if("scale"===a.dataset.type){if(null===t.scale)return;this.last.scaleName=t.scale.name,this.props.stateChange("scaleName","")}else"octave"===a.dataset.type?(this.last.octave=t.octave,this.props.stateChange("octave",0)):"ivlName"===a.dataset.type&&(this.last.ivlName=this.props.ivlName,this.props.stateChange("ivlName",""));else if("note"===a.dataset.type){if(!this.last.rootType)return;"selNote"===this.last.rootType?null!==this.last.root&&this.props.stateChange("selNoteVal",this.last.root.note):"fretRoot"===this.last.rootType&&null!==this.last.root&&this.props.stateChange("fretRoot",this.last.root)}else"chord"===a.dataset.type?this.last.chordName&&""!==this.last.chordName&&this.props.stateChange("chordName",this.last.chordName):"scale"===a.dataset.type?this.last.scaleName&&""!==this.last.scaleName&&this.props.stateChange("scaleName",this.last.scaleName):"octave"===a.dataset.type?this.last.octave&&""!==this.last.octave&&this.props.stateChange("octave",this.last.octave):"ivlName"===a.dataset.type&&this.last.ivlName&&""!==this.last.ivlName&&this.props.stateChange("ivlName",this.last.ivlName)}},{key:"selNoteChange",value:function(e){var t=e.target,a=t.options[t.selectedIndex].text;this.props.stateChange("selNoteVal",a)}},{key:"selOctaveChange",value:function(e){var t=e.target,a=t.options[t.selectedIndex].text;""===a?this.props.stateChange("octave",0):this.props.stateChange("octave",Number(a))}},{key:"selIntervalChange",value:function(e){var t=e.target,a=t.options[t.selectedIndex].dataset.abr;this.props.stateChange("ivlName",a)}},{key:"selChordChange",value:function(e){var t=e.target,a=t.options[t.selectedIndex].text;this.props.stateChange("chordName",a)}},{key:"selScaleChange",value:function(e){var t=e.target,a=t.options[t.selectedIndex].text;this.props.stateChange("scaleName",a)}},{key:"drawSelNote",value:function(){for(var e=this.props.qry,t=[Object(p.jsx)("option",{},""),Object(p.jsx)("option",{children:"All"},"999")],a=0;a<v.notes.list.length;a++){var r=v.notes.list[a];t.push(Object(p.jsx)("option",{children:r},a))}var s=null===e.note?"":e.note;return Object(p.jsxs)("div",{className:"dataPnl pnlNote",children:[Object(p.jsx)("label",{"data-selected":""!==s,"data-type":"note",onClick:this.selLabelClick,children:"Note"}),Object(p.jsx)("select",{value:s,className:"selNote",onChange:this.selNoteChange,children:t})]})}},{key:"drawSelOctave",value:function(){var e,t=this.props.qry.octave,a=[Object(p.jsx)("option",{},999)];e=v.notes.obj(6,0).octave;for(var r=v.notes.obj(1,v.fretboard.fretMax).octave;r>=e;r--)a.push(Object(p.jsx)("option",{children:r},r));return Object(p.jsxs)("div",{className:"dataPnl pnlOctave",children:[Object(p.jsx)("label",{"data-selected":0!==t,"data-type":"octave",onClick:this.selLabelClick,children:"Octave"}),Object(p.jsx)("select",{value:t,className:"selOctave",onChange:this.selOctaveChange,children:a})]})}},{key:"drawSelScale",value:function(){var e,t=this.props.scaleName,a=0,r=[Object(p.jsx)("option",{},"aaa")],s=Object(u.a)(v.scales.list);try{for(s.s();!(e=s.n()).done;){var n=e.value;r.push(Object(p.jsx)("option",{children:n.name},++a))}}catch(o){s.e(o)}finally{s.f()}return Object(p.jsxs)("div",{className:"dataPnl pnlScale",children:[Object(p.jsx)("label",{"data-selected":""!==t,"data-type":"scale",onClick:this.selLabelClick,children:"Scale"}),Object(p.jsx)("select",{value:t,className:"selScale",onChange:this.selScaleChange,children:r})]})}},{key:"drawSelChord",value:function(){var e,t=0,a=this.props.chordName,r=[Object(p.jsx)("option",{},"aaa")],s=Object(u.a)(v.chords.list);try{for(s.s();!(e=s.n()).done;){var n=e.value;r.push(Object(p.jsx)("option",{children:n.name},++t))}}catch(o){s.e(o)}finally{s.f()}return Object(p.jsxs)("div",{className:"dataPnl pnlChord",children:[Object(p.jsx)("label",{"data-selected":""!==a,"data-type":"chord",onClick:this.selLabelClick,children:"Chord"}),Object(p.jsx)("select",{value:a,className:"selChord",onChange:this.selChordChange,children:r})]})}},{key:"drawSelInterval",value:function(){var e,t=this.props.qry,a=[Object(p.jsx)("option",{},"aaa")],r=0,s="",n=Object(u.a)(v.intervals.list);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(0!==o.semis&&12!==o.semis){var i="".concat(o.name," (").concat(o.abr,", ").concat(o.semis,")");a.push(Object(p.jsx)("option",{"data-abr":o.abr,children:i},++r)),null!==t.ivl&&""===s&&t.ivl.abr===o.abr&&(s=i)}}}catch(l){n.e(l)}finally{n.f()}return Object(p.jsxs)("div",{className:"dataPnl pnlInterval",children:[Object(p.jsx)("label",{"data-selected":""!==s,"data-type":"ivlName",onClick:this.selLabelClick,children:"Interval"}),Object(p.jsx)("select",{value:s,className:"selInterval",title:"Intervals sorted by semis-tones",onChange:this.selIntervalChange,children:a})]})}},{key:"drawInfo",value:function(e){var t=this,a=this.props.qry,r=null,s=0;"qryCollapsed"===e&&(r=Object(p.jsxs)("div",{className:"qryBtn qryBtnExpand",onClick:this.btnCollapseClick,title:"Show query panel",children:[" ",Object(p.jsx)("div",{children:"\u27a4"})," "]}));var n=[];return"selNote"===a.rootType&&"All"===this.props.selNoteVal?(n.push(Object(p.jsx)("span",{className:"propName",children:"All Notes"},"allNotes")),0!==a.octave&&n.push(Object(p.jsxs)("span",{className:"ivl",children:[": Octave ",a.octave," "]},"qryOct"+a.octave))):(null!==a.scale&&(n.push(Object(p.jsx)("span",{className:"propName",children:a.root.note+" "+a.scale.name+":"},"qryScale")),a.scale.ivls.forEach((function(e){s=a.noteFilter.indexOf(e.note)>=0?"noteFilter":0,n.push(Object(p.jsxs)("span",{className:"ivl",onClick:t.infoNoteClick,"data-note":e.note,"data-selected":s,children:["\xa0",e.note," ",Object(p.jsx)("sub",{children:e.abr})," "]},"qryScale"+e.abr))}))),null!==a.chord&&(n.push(Object(p.jsx)("span",{className:"propName",children:a.root.note+" "+a.chord.name+":"},"qryChord")),a.chord.ivls.forEach((function(e){s=a.noteFilter.indexOf(e.note)>=0?"noteFilter":0,n.push(Object(p.jsxs)("span",{className:"ivl",onClick:t.infoNoteClick,"data-note":e.note,"data-selected":s,children:["\xa0",e.note," ",Object(p.jsx)("sub",{children:e.abr})," "]},"qryChord"+e.abr))}))),null!==a.ivl&&(s=a.noteFilter.indexOf(a.ivl.note)>=0?"noteFilter":0,n.push(Object(p.jsx)("span",{className:"propName",children:a.note+" +"+a.ivl.name+":"},"qryIvl")),n.push(Object(p.jsxs)("span",{className:"ivl",onClick:this.infoNoteClick,"data-note":a.ivl.note,"data-selected":s,children:["\xa0",a.ivl.note," ",Object(p.jsx)("sub",{children:a.ivl.abr})," "]},"qryIvl"+a.ivl.abr)))),Object(p.jsxs)("div",{className:"infoPnl",children:[r,Object(p.jsx)("div",{className:"infoDiv",children:n})]})}},{key:"render",value:function(){var e=this.props.qry.collapsed?"qryCollapsed":"qryExpanded",t=this.drawSelNote(),a=this.drawSelOctave(),r=this.drawSelInterval(),s=this.drawSelScale(),n=this.drawSelChord(),o=this.drawInfo(e);return Object(p.jsxs)("div",{className:"queryPnl "+e,children:[Object(p.jsx)("div",{className:"qryBtn qryBtnCollapse",onClick:this.btnCollapseClick,title:"Hide query panel",children:Object(p.jsx)("div",{children:"\u27a4"})}),Object(p.jsxs)("div",{className:"queryControls ",children:[t,a,s,n,r]}),Object(p.jsx)("div",{className:"qryBtn qryBtnClear",onClick:this.btnClearClick,title:"Reset query controls",children:"\u21bb"}),Object(p.jsx)("div",{className:"qryBtn qryBtnDupe",onClick:this.btnDupeClick,title:"Duplicate fretboard",children:"\u271a"}),0===this.props.fbid?null:Object(p.jsx)("div",{className:"qryBtn qryBtnDel",onClick:this.btnDelClick,title:"Remove this fretboard",children:"\u2710"}),o]})}}]),a}(s.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(l.a)(this,a),console.log("Fretboard.constructor()",e),(r=t.call(this,e)).state={fbid:e.fbid?e.fbid:0,collapsed:!!e.collapsed&&e.collapsed,fretFirst:e.fretFirst?e.fretFirst:0,fretLast:e.fretLast?e.fretLast:v.fretboard.fretMax,fretBtnText:e.fretBtnText?e.fretBtnText:"NoteFirst",fretFilter:e.fretFilter?e.fretFilter:"",strgFltrList:e.strgFltrList?e.strgFltrList:"",noteFilter:e.noteFilter?e.noteFilter:[],rootType:e.rootType?e.rootType:"s",fretRoot:e.fretRoot?e.fretRoot:null,selNoteVal:e.selNoteVal?e.selNoteVal:"",octave:e.octave?e.octave:0,scaleName:e.scaleName?e.scaleName:"",chordName:e.chordName?e.chordName:"",ivlName:e.ivlName?e.ivlName:""},r.duplicate=r.duplicate.bind(Object(h.a)(r)),r.remove=r.remove.bind(Object(h.a)(r)),r.reset=r.reset.bind(Object(h.a)(r)),r.stateChange=r.stateChange.bind(Object(h.a)(r)),r.strgFltr=r.strgFltr.bind(Object(h.a)(r)),r.makeQuery=r.makeQuery.bind(Object(h.a)(r)),r}return Object(c.a)(a,[{key:"reset",value:function(){this.setState({collapsed:!1}),this.setState({noteFilter:[]}),this.setState({strgFltrList:""}),this.setState({fretFilter:""}),this.setState({scaleName:""}),this.setState({chordName:""}),this.setState({rootType:""}),this.setState({ivlName:""}),this.setState({fretRoot:null}),this.setState({selNoteVal:""}),this.setState({octave:0}),this.setState({fretBtnText:"NoteFirst"})}},{key:"strgFltr",value:function(e){return(e=Number(e))<1||e>6?null:this.state.strgFltrList.indexOf(e+",")>=0}},{key:"remove",value:function(){this.props.remove(this)}},{key:"duplicate",value:function(){this.props.duplicate(this)}},{key:"stateChange",value:function(e,t){if("collapsed"===e)this.setState({collapsed:t});else if("noteFilter"===e){var a=this.state.noteFilter.slice(),r=a.indexOf(t);r<0?a.push(t):a.splice(r,1),this.setState({noteFilter:a})}else if("fretBtnText"===e)this.setState({fretBtnText:t});else if("fretFilter"===e){var s='"'.concat(t,'",');t=this.state.fretFilter.indexOf(s)<0?this.state.fretFilter+s:this.state.fretFilter.replace(s,""),this.setState({fretFilter:t})}else if("fretRoot"===e)this.setState({fretRoot:t}),null===t?(this.setState({rootType:""}),this.setState({selNoteVal:""})):this.setState({rootType:"fretRoot"});else if("selNoteVal"===e)this.setState({selNoteVal:t}),""===t?(this.setState({rootType:""}),this.setState({fretRoot:null})):this.setState({rootType:"selNote"});else if("strgFltr"===e.substr(0,8)){var n=Number(e.substr(8,1)),o=this.state.strgFltrList.slice();if(n<1||n>6)throw Error("Fretboard.stateChange() error, strN is wrong:[".concat(e,"]."));var i=o.indexOf(n+",");!0===t?i<0&&(o+=n+",",this.setState({strgFltrList:o})):i>=0&&(o=o.replace(n+","),this.setState({strgFltrList:o}))}else"fretFirst"===e?this.setState({fretFirst:t}):"fretLast"===e?this.setState({fretLast:t}):"octave"===e?this.setState({octave:t}):"scaleName"===e?this.setState({scaleName:t}):"chordName"===e?this.setState({chordName:t}):"ivlName"===e?this.setState({ivlName:t}):"semis"===e&&this.setState({semis:t})}},{key:"makeQuery",value:function(){var e={rootType:this.state.rootType,root:null,note:"fretRoot"===this.state.rootType?this.state.fretRoot.notes[0]:this.state.selNoteVal,octave:this.state.octave,scale:null,chord:null,ivl:null,collapsed:this.state.collapsed,fretBtnText:this.state.fretBtnText,fretFilter:this.state.fretFilter,noteFilter:this.state.noteFilter};return"fretRoot"===e.rootType&&(e.root=this.state.fretRoot),"selNote"===e.rootType&&""!==e.note&&"All"!==e.note&&(e.root=v.notes.objByNote(e.note)),""!==this.state.scaleName&&e.root&&(e.scale=v.scales.obj(e.note,this.state.scaleName)),""!==this.state.chordName&&e.root&&(e.chord=v.chords.obj(e.note,this.state.chordName)),""!==this.state.ivlName&&e.root&&(e.ivl=v.intervals.byName(this.state.ivlName),e.ivl.note=v.notes.calc(e.note,e.ivl)),e}},{key:"render",value:function(){var e=this.makeQuery();return console.log("Fretboard.render()",this.props,this.state,e),Object(p.jsxs)("div",{className:"fretboard",id:"Fretboard"+this.props.fbid,children:[Object(p.jsx)(j,{collapsed:this.state.collapsed,fretFirst:this.state.fretFirst,fretLast:this.state.fretLast,ivlName:this.state.ivlName,selNoteVal:this.state.selNoteVal,qry:e,stateChange:this.stateChange,strgFltr:this.strgFltr}),Object(p.jsx)(g,{fbid:this.props.fbid,collapsed:this.state.collapsed,fretFirst:this.state.fretFirst,fretLast:this.state.fretLast,selNoteVal:this.state.selNoteVal,chordName:this.state.chordName,scaleName:this.state.scaleName,ivlName:this.state.ivlName,duplicate:this.duplicate,qry:e,remove:this.remove,reset:this.reset,stateChange:this.stateChange,strgFltr:this.strgFltr})]})}}]),a}(s.a.Component),y=a(12),N=(a(22),function(){return Object(p.jsx)(y.a,{trigger:Object(p.jsx)("button",{className:"btnInfo",children:"About"}),modal:!0,nested:!0,children:function(e){return Object(p.jsxs)("div",{className:"modal",children:[Object(p.jsx)("div",{className:"header",children:" About GuitarJoe "}),Object(p.jsxs)("div",{className:"content",children:["Important: ",Object(p.jsx)("br",{}),"\xa0- please explore by clicking/tapping stuff",Object(p.jsx)("br",{}),"\xa0- clicking a fret or selecting a note provide different results",Object(p.jsx)("br",{}),"\xa0- zoom using your browser's zoom controls",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"GuitarJoe is a free web application, no ads, no logins, no tracking. The goal was to create a tool that would make guitar theory accessible while practicing. I am not anything close to a musician, so I was going crazy taking notes and diagraming chords, scales and intervals: I needed a tool to facilitate my understanding so I could focus on the guitar instead of managing scraps of information. This application has successfully reduced my hair loss--I hope it has the same effect on you!",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"The basic functionality is stable. At this point it is a proof of concept as I wrangle technologies and concepts. There is a lot more planned, the ToDo list is in the ",Object(p.jsx)("a",{href:"https://github.com/ChrisDeFreitas/guitarjoe/blob/main/README.md#todo",target:"_new",children:"project documentation"}),". My aim is to keep the app freely available to support those learning guitar; a warm thanks for those who have supported my various journeys.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"\xa0- Tested to work in Chrome, Firefox, and Safari(iPad)",Object(p.jsx)("br",{}),"\xa0- Review documentation, updates and references in the ",Object(p.jsx)("a",{href:"https://github.com/ChrisDeFreitas/guitarjoe/",target:"_new",children:"GitHub Repository"})," ",Object(p.jsx)("br",{}),"\xa0- Send comments and bugs to ",Object(p.jsx)("a",{href:"mailto:ChrisDeFreitas777@gmail.com?subject=GuitarJoe:",children:"ChrisDeFreitas777@gmail.com"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Thanks to",Object(p.jsx)("br",{}),"\xa0- Application hosted on ",Object(p.jsx)("a",{href:"https://github.com/ChrisDeFreitas/guitarjoe",target:"_new",children:"Github"}),"  ",Object(p.jsx)("br",{}),"\xa0- Background image from ",Object(p.jsx)("a",{href:"https://www.flickr.com/photos/webtreatsetc/with/4514047664/",target:"_new",children:"WebTreats ETC"})," ",Object(p.jsx)("br",{}),"\xa0- Built with the ",Object(p.jsx)("a",{href:"https://reactjs.org/",target:"_new",children:"React"})," Javascript library ",Object(p.jsx)("br",{}),"\xa0- Chords verified using ",Object(p.jsx)("a",{href:"https://www.omnicalculator.com/other/chord",target:"_new",children:"Omni Chord Calculator"}),Object(p.jsx)("br",{}),"\xa0- Fuggles font by Robert Leuschke on ",Object(p.jsx)("a",{href:"https://fonts.google.com/?query=Robert+Leuschke/",target:"_new",children:"Google Fonts"})," ",Object(p.jsx)("br",{}),"\xa0- Guitar icon by monkik from the ",Object(p.jsx)("a",{href:"https://thenounproject.com/term/guitar/2588464/",target:"_new",children:"Noun Project"})," ",Object(p.jsx)("br",{}),"\xa0- Intervals verified using ",Object(p.jsx)("a",{href:"https://www.omnicalculator.com/other/music-interval",target:"_new",children:"Omni Music Interval Calculator"}),Object(p.jsx)("br",{}),"\xa0- Music theory from ",Object(p.jsx)("a",{href:"https://www.wikipedia.org/",target:"_new",children:"Wikipedia"}),Object(p.jsx)("br",{}),"\xa0- Popup control from ",Object(p.jsx)("a",{href:"https://react-popup.elazizi.com/",target:"_new",children:"reactjs-popup"})," ",Object(p.jsx)("br",{}),"\xa0- Scales verified using ",Object(p.jsx)("a",{href:"https://www.scales-chords.com/scalenav.php",target:"_new",children:"ScaleChords Musical Scale Navigator"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Created by Chris DeFreitas, BC Canada",Object(p.jsx)("br",{})]}),Object(p.jsx)("div",{className:"actions",children:Object(p.jsx)("button",{className:"button",onClick:function(){console.log("modal closed "),e()},children:"Close"})})]})}})}),C=["title","titleId"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function F(e,t){var a=e.title,s=e.titleId,n=k(e,C);return r.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",x:"0px",y:"0px",ref:t,"aria-labelledby":s},n),a?r.createElement("title",{id:s},a):null,m||(m=r.createElement("g",{fill:"#ffffff",stroke:"#0006",strokeWidth:"1px"},r.createElement("path",{d:"M30,23v-4a2,2,0,1,0,0,4Z"}),r.createElement("path",{d:"M48,24V18.038L47.967,18H32.033L32,18.038V25a7.979,7.979,0,0,0,3.556,6.648l.124.078a8.078,8.078,0,0,0,8.762-.076A7.982,7.982,0,0,0,48,25ZM35.5,22A1.5,1.5,0,1,1,37,20.5,1.5,1.5,0,0,1,35.5,22Zm3.361,6H37V26h1.861a7.445,7.445,0,0,0,3.635-.864L43.5,26.864A9.353,9.353,0,0,1,38.861,28ZM44.5,22A1.5,1.5,0,1,1,46,20.5,1.5,1.5,0,0,1,44.5,22Z"}),r.createElement("polygon",{points:"17.279 13 18 10.838 18 4 13 4 13 10.838 13.721 13 17.279 13"}),r.createElement("path",{d:"M17,35.226V15H14V35.226A5.657,5.657,0,0,1,17,35.226Z"}),r.createElement("path",{d:"M50,19v4a2,2,0,0,0,0-4Z"}),r.createElement("path",{d:"M48,11.41v-.021q0-.66-.034-1.324c0-.022,0-.043,0-.065H32.038c0,.022,0,.044,0,.066-.022.441-.033.883-.034,1.323V12H48Z"}),r.createElement("path",{d:"M31,16H49a3.006,3.006,0,0,0,2.829-2H28.171A3.006,3.006,0,0,0,31,16Z"}),r.createElement("path",{d:"M47.613,6.793A3.329,3.329,0,0,0,44.32,4a3.357,3.357,0,0,0-2.781,1.489,1.853,1.853,0,0,1-3.076,0A3.359,3.359,0,0,0,35.68,4a3.33,3.33,0,0,0-3.292,2.79c-.067.4-.1.806-.154,1.21H47.766C47.716,7.6,47.679,7.19,47.613,6.793Z"}),r.createElement("path",{d:"M40,35a9.941,9.941,0,0,1-4-.847V36.17a2,2,0,0,1-1.637,1.963l-1.188.224.383,1.576a6.629,6.629,0,0,0,12.884,0l.383-1.576-1.19-.224A2,2,0,0,1,44,36.17V34.147A9.946,9.946,0,0,1,40,35Z"}),r.createElement("path",{d:"M18,57V56H11a1,1,0,0,1-1-1V51a1,1,0,0,1,1-1h7V45.4a5.495,5.495,0,0,1-6-9.131V29.151a5.078,5.078,0,0,0-3.991,4.606,4.891,4.891,0,0,0,.041.926,12.5,12.5,0,0,1-2.032,9.29A9.98,9.98,0,0,0,4,50.3,10.262,10.262,0,0,0,14.35,60h2.3a10.328,10.328,0,0,0,1.8-.161A4.013,4.013,0,0,1,18,58Z"}),r.createElement("path",{d:"M22.7,58H20a1.958,1.958,0,0,0,.814,1.608A2.01,2.01,0,0,0,22,60h4a1.006,1.006,0,0,1-.555-.168Z"}),r.createElement("polygon",{points:"28 60 28.017 59.998 26 60 28 60"}),r.createElement("polygon",{points:"53.303 51 60 51 60 49 56.303 49 53.303 51"}),r.createElement("path",{d:"M59.941,43.492c-.005-.031-.013-.062-.018-.093a3.991,3.991,0,0,0-.142-.523c-.025-.069-.05-.137-.078-.2a3.814,3.814,0,0,0-.239-.509h0a3.982,3.982,0,0,0-.377-.54c-.014-.018-.03-.034-.045-.051a4.006,4.006,0,0,0-.914-.786c-.06-.038-.12-.075-.18-.108a3.871,3.871,0,0,0-.511-.245l-.041-.017a4.017,4.017,0,0,0-.67-.186l-7.941-1.466-.4,1.643a8.629,8.629,0,0,1-16.772,0l-.4-1.643-7.941,1.466a3.962,3.962,0,0,0-1.248.461c-.044.025-.087.051-.132.079a3.953,3.953,0,0,0-.388.277c-.063.051-.125.1-.184.156-.1.09-.191.186-.28.284-.059.065-.118.13-.173.2a4,4,0,0,0-.576,1c-.025.062-.049.125-.071.189a3.913,3.913,0,0,0-.158.583v0a4.035,4.035,0,0,0-.063.708V47h4a1.006,1.006,0,0,1,.555.168L30.3,51H49.7l5.748-3.832A1.006,1.006,0,0,1,56,47h4V44.162A4.012,4.012,0,0,0,59.941,43.492Z"}),r.createElement("path",{d:"M30,53a1.006,1.006,0,0,1-.555-.168L23.7,49H20v7h3a1.006,1.006,0,0,1,.555.168L26.3,58H32l20.1,2.005L58,60a2,2,0,0,0,2-2V53H30Z"}),r.createElement("path",{d:"M17.448,37.594a3.542,3.542,0,0,0-3.893,0,3.492,3.492,0,1,0,4.619,5.133l.012-.059a.716.716,0,0,1,.023-.1c.028-.1.077-.2.11-.293.042-.127.089-.251.14-.374.038-.092.06-.184.1-.277.079-.164.158-.311.238-.451l0-.01c.053-.093.109-.174.163-.257A3.571,3.571,0,0,0,19,40.5,3.469,3.469,0,0,0,17.448,37.594Z"}),r.createElement("rect",{x:12,y:52,width:6,height:2}),r.createElement("path",{d:"M21.134,38.906c.094-.051.18-.119.276-.164l.447-.192a3.5,3.5,0,0,1,.549-.175,3.424,3.424,0,0,1,.462-.11,15.6,15.6,0,0,1,.081-3.578,4.84,4.84,0,0,0,.042-.926A5.079,5.079,0,0,0,19,29.151v7.113a5.445,5.445,0,0,1,1.815,2.825C20.919,39.024,21.025,38.965,21.134,38.906Z"}))))}var P=r.forwardRef(F);a.p;var M=function(){var e=Object(r.useState)([{id:0,state:!0}]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(null),o=Object(i.a)(n,2),l=o[0],c=o[1];function h(e){for(var t=0;t<a.length;t++)if(a[t].id===e)return t;return!1}function d(e){var t=e.props.fbid,r=a.slice(),n=r.length,o={id:n,state:e.state},i=h(t);if(!1===i)throw new Error("App.duplicate() error, fbid=[".concat(t,"] not found."));r.splice(i+1,0,o),s(r),c(n)}function b(e){var t=e.props.fbid,r=a.slice(),n=h(t);if(!1===n)throw new Error("App.remove() error, fbid=[".concat(t,"] not found."));r[n].state=!1,c(null),s(r)}for(var u=[],f=a.length,m=0;m<f;m++){var v=null,j=a[m].id,g=a[m].state;j===l?v=Object(p.jsx)(O,{fbid:j,duplicate:d,remove:b,collapsed:g.collapsed,fretFirst:g.fretFirst,fretLast:g.fretLast,fretBtnText:g.fretBtnText,fretFilter:g.fretFilter,strgFltrList:g.strgFltrList,noteFilter:g.noteFilter,rootType:g.rootType,fretRoot:g.fretRoot,selNoteVal:g.selNoteVal,octave:g.octave,scaleName:g.scaleName,chordName:g.chordName,ivlName:g.ivlName},j):!1!==g&&(v=Object(p.jsx)(O,{fbid:j,duplicate:d,remove:b},j)),null!=v&&u.push(v)}return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header header",children:[Object(p.jsx)(P,{className:"Logo",alt:"Logo"}),"GuitarJoe v0.1.2 ",Object(p.jsx)(N,{})]}),u]})};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.72d43f7a.chunk.js.map