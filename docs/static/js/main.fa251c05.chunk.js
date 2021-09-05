(this.webpackJsonpguitarjoe=this.webpackJsonpguitarjoe||[]).push([[0],{17:function(e,t,r){},18:function(e,t,r){},19:function(e,t,r){},20:function(e,t,r){},22:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),l=r(8),n=r.n(l),i=(r(17),r(11)),o=(r(18),r(4)),c=r(5),h=r(2),u=r(7),b=r(6),d=(r(19),r(3)),f=(r(20),{chords:{list:[{name:"Major triad",abr:"maj",intervals:["P1","M3","P5"]},{name:"Minor triad",abr:"min",intervals:["P1","m3","P5"]},{name:"Augmented triad",abr:"aug",intervals:["P1","M3","A5"]},{name:"Diminished triad",abr:"dim",intervals:["P1","m3","d5"]},{name:"Dominant seventh",abr:"7",intervals:["P1","M3","P5","m7"]},{name:"Major seventh",abr:"maj7",intervals:["P1","M3","P5","M7"]},{name:"Minor seventh",abr:"min7",intervals:["P1","m3","P5","m7"]},{name:"Major sixth",abr:"maj6",intervals:["P1","M3","P5","M6"]},{name:"Minor sixth",abr:"min6",intervals:["P1","m3","P5","M6"]},{name:"Suspended second",abr:"sus2",intervals:["P1","M2","P5"]},{name:"Suspended fourth",abr:"sus4",intervals:["P1","P4","P5"]}],byName:function(e){var t,r=Object(d.a)(f.chords.list);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(a.abr===e||a.name===e)return Object.assign({},a)}}catch(s){r.e(s)}finally{r.f()}return null},toObj:function(e,t){var r=[],a=f.chords.byName(t);if(null===a)return null;if("string"===typeof e&&(e=f.intervals.byName(e)),null===e)return null;var s,l=a.name.indexOf("Minor")>=0||a.name.indexOf("Diminished")>=0||e.letter.indexOf("\u266d")>=0,n=Object(d.a)(a.intervals);try{for(n.s();!(s=n.n()).done;){var i=s.value,o=f.intervals.byName(i),c=f.letterCalc(e,o,l);r.push(Object.assign({},o,{letter:c}))}}catch(h){n.e(h)}finally{n.f()}return Object.assign({},a,{type:"chord",fullName:e.letter+" "+a.name,fullAbbrev:e.letter+a.abr,root:Object.assign({},e),ivls:r})}},fretboard:{fretMax:14,strings:[{num:1,letter:"E",octave:4,frets:null,semis:0},{num:2,letter:"B",octave:3,frets:null,semis:0},{num:3,letter:"G",octave:3,frets:null,semis:0},{num:4,letter:"D",octave:3,frets:null,semis:0},{num:5,letter:"A",octave:2,frets:null,semis:0},{num:6,letter:"E",octave:2,frets:null,semis:0}],clear:function(){for(var e=0;e<=f.fretboard.strings.length-1;e++){var t=f.fretboard.strings[e];t.semis=f.semisCalc(t.letter,t.octave)}},fretMark:function(e,t,r){var a=(e.root-t)/100;if(a>f.fretMax)throw new Error("fretBoard.fretMark() error, semis is too large (semis=[".concat(t,"])."));e.frets[a]=r},show:function(){console.log("guitar_lib.show():"),console.dir(f.fretboard)},showStrings:function(){console.log("guitar_lib.showStrings():",f.fretboard.strings)}},fretInRange:function(e,t){return t.fretN<=1&&e.fretN<=5||t.fretN>1&&e.fretN>=t.fretN-3&&e.fretN<=t.fretN+3||null},intervals:{list:[{name:"Perfect unison",abr:"P1",semis:0,letter:"C"},{name:"Minor second",abr:"m2",semis:1,letter:"D\u266d"},{name:"Augmented unison",abr:"A1",semis:1,letter:"C#"},{name:"Major second",abr:"M2",semis:2,letter:"D"},{name:"Minor third",abr:"m3",semis:3,letter:"E\u266d"},{name:"Augmented second",abr:"A2",semis:3,letter:"D#"},{name:"Major third",abr:"M3",semis:4,letter:"E"},{name:"Diminished fourth",abr:"d4",semis:4,letter:"F\u266d"},{name:"Perfect fourth",abr:"P4",semis:5,letter:"F"},{name:"Augmented third",abr:"A3",semis:5,letter:"E#"},{name:"Diminished fifth",abr:"d5",semis:6,letter:"G\u266d"},{name:"Augmented fourth",abr:"A4",semis:6,letter:"F#"},{name:"Perfect fifth",abr:"P5",semis:7,letter:"G"},{name:"Minor sixth",abr:"m6",semis:8,letter:"A\u266d"},{name:"Augmented fifth",abr:"A5",semis:8,letter:"G#"},{name:"Major sixth",abr:"M6",semis:9,letter:"A"},{name:"Minor seventh",abr:"m7",semis:10,letter:"B\u266d"},{name:"Augmented sixth",abr:"A6",semis:10,letter:"A#"},{name:"Major seventh",abr:"M7",semis:11,letter:"B"},{name:"Diminished octave",abr:"d8",semis:11,letter:"C\u266d"},{name:"Perfect octave",abr:"P8",semis:12,letter:"C"},{name:"Augmented seventh",abr:"A7",semis:12,letter:"B#"}],byLetter:function(e){e=e.toUpperCase();var t,r=Object(d.a)(f.intervals.list);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(a.letter===e)return Object.assign({},a)}}catch(s){r.e(s)}finally{r.f()}return null},byName:function(e){var t,r=e.toUpperCase(),a=Object(d.a)(f.intervals.list);try{for(a.s();!(t=a.n()).done;){var s=t.value;if(s.abr===e||s.letter===r||s.name===e)return Object.assign({},s)}}catch(l){a.e(l)}finally{a.f()}return null},bySemis:function(e){e%=12;var t,r=Object(d.a)(f.intervals.list);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(a.semis===e)return Object.assign({},a)}}catch(s){r.e(s)}finally{r.f()}return null},allBySemis:function(e){var t,r=e%12,a=[],s=Object(d.a)(f.intervals.list);try{for(s.s();!(t=s.n()).done;){var l=t.value;l.semis===r&&a.push(Object.assign({},l))}}catch(n){s.e(n)}finally{s.f()}return a}},letters:["C","C#","D\u266d","D","D#","E\u266d","E","F","F#","G\u266d","G","G#","A\u266d","A","A#","B\u266d","B"],lttrs:["C","D","E","F","G","A","B"],lettersBySemis:function(e){var t=[];e%=12;var r,a=Object(d.a)(f.intervals.list);try{for(a.s();!(r=a.n()).done;){var s=r.value;if(s.semis===e&&t.push(s.letter),s.semis>e)break}}catch(l){a.e(l)}finally{a.f()}return t},letterCalc:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"object"===typeof e&&(e=e.letter);var a=e.substr(0,1),s=e.substr(1,2),l="object"===typeof t?t:f.intervals.byName(t),n=l.abr.substr(0,1),i=l.semis,o=0,c=a,h=s;function u(e){return o=f.lttrs.indexOf(e),o++,f.lttrs[o%7]}for(var b=0;b<i;b++)"B"===c&&""===h?c="C":"E"===c&&""===h?c="F":"\u266d"===h?h="":"#"===h?(h="",c=u(c)):"m"===n||"d"===n||!0===r?(h="\u266d",c=u(c)):h="#";return c+h},noteByLetter:function(e){var t=f.intervals.byLetter(e).semis;return{strg:null,fretN:null,letter:e,letters:f.lettersBySemis(t),octave:0,semis:t,noteByLetter:!0}},noteByFret:function(e,t){var r=f.strg(e),a=r.semis+t,s=f.octave(a),l=f.lettersBySemis(a);return{strg:r,fretN:a-r.semis,letter:l[0],letters:l,octave:s,semis:a,noteByFret:!0}},noteBySemis:function(e){var t,r=null,a=f.fretboard.fretMax,s=Object(d.a)(f.fretboard.strings);try{for(s.s();!(t=s.n()).done;){var l=t.value;if(e>=l.semis&&e<=l.semis+a){r=l;break}}}catch(i){s.e(i)}finally{s.f()}var n=f.lettersBySemis(e);return{strg:r,fretN:null===r?null:e-r.semis,letter:n[0],letters:n,octave:f.octave(e),semis:e,noteBySeis:!0}},noteByTab:function(e){var t=f.strgByTab(e),r=Number(e.substr(1,2)),a=t.semis+r,s=f.lettersBySemis(a);return{strg:t,fretN:r,letter:s[0],letters:s,octave:f.octave(a),semis:a}},octave:function(e){return Math.floor(e/12)},scales:{list:[{name:"Major",abr:"M",short:"Major",intervals:["P1","M2","M3","P4","P5","M6","M7"]},{name:"Natural minor",abr:"m",short:"Nat.min",intervals:["P1","M2","m3","P4","P5","m6","m7"]},{name:"Pentatonic major",abr:"P",short:"Pen.maj",intervals:["P1","M2","M3","P5","M6"]},{name:"Pentatonic minor",abr:"p",short:"Pen.min",intervals:["P1","m3","P4","P5","m7"]},{name:"Blues heptatonic",abr:"B7",short:"Blues7",intervals:["P1","M2","m3","P4","d5","M6","m7"]},{name:"Blues hexatonic",abr:"B6",short:"Blues6",intervals:["P1","m3","P4","d5","P5","m7"]},{name:"Chromatic",abr:"Ch",short:"Chrom",intervals:["P1","m2","M2","m3","M3","P4","d5","P5","m6","M6","m7","M7"]},{name:"Double harmonic",abr:"DH",short:"Dbl.har",intervals:["P1","m2","M3","P4","P5","m6","M7"]},{name:"Gypsy minor",abr:"Gm",short:"Gypsy.min",intervals:["P1","M2","m3","d5","P5","m6","M7"]},{name:"Hungarian major",abr:"HM",short:"Hung.maj`",intervals:["P1","m3","M3","d5","P5","M6","m7"]}],byName:function(e){var t,r=Object(d.a)(f.scales.list);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(a.name===e||a.short===e||a.abr===e)return Object.assign({},a)}}catch(s){r.e(s)}finally{r.f()}return null},toObj:function(e,t){var r=[];if("string"===typeof e&&(e=f.intervals.byName(e)),null===e)return null;var a=f.scales.byName(t);if(null===a)return null;var s,l=t.indexOf("minor")>=0||e.letter.indexOf("\u266d")>=0,n=Object(d.a)(a.intervals);try{for(n.s();!(s=n.n()).done;){var i=s.value,o=f.intervals.byName(i),c=f.letterCalc(e,o,l);o=Object.assign({},o,{abr:i,letter:c}),r.push(o)}}catch(h){n.e(h)}finally{n.f()}return Object.assign({},a,{type:"scale",fullName:e.letter+" "+a.name,shortName:e.letter+" "+a.short,abbrevName:e.letter+a.abr,root:Object.assign({},e),ivls:r})}},semis:function(e){return f.intervals.byName(e)},semisCalc:function(e,t){var r=12*t;return r+=f.intervals.byName(e).semis},strg:function(e){return Object.assign({},f.fretboard.strings[e-1])},strgByTab:function(e){var t=e.substr(0,1);switch(t){case"e":return Object.assign({},f.strg(1));case"B":return Object.assign({},f.strg(2));case"G":return Object.assign({},f.strg(3));case"D":return Object.assign({},f.strg(4));case"A":return Object.assign({},f.strg(5));case"E":return Object.assign({},f.strg(6));default:throw new Error("guitar_lib.strgByTab() error, tab letter not found:[".concat(t,"]."))}},tabByFret:function(e,t){var r="";switch(e){case 1:r="e";break;case 2:r="B";break;case 3:r="G";break;case 4:r="D";break;case 5:r="A";break;case 6:r="E";break;default:throw new Error("guitar_lib.tabByFret() error, string number not found:[".concat(e,"]."))}return r+String(t)},fretMaxSet:function(e){f.fretboard.fretMax=e,f.fretboard.clear()}});f.fretboard.clear();var m,v=f,p=r(0),j=function(e){Object(u.a)(r,e);var t=Object(b.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).buttonClick=a.buttonClick.bind(Object(h.a)(a)),a.fretBtnTextChange=a.fretBtnTextChange.bind(Object(h.a)(a)),a.fretClick=a.fretClick.bind(Object(h.a)(a)),a.fretFltrClick=a.fretFltrClick.bind(Object(h.a)(a)),a.strgFltrClick=a.strgFltrClick.bind(Object(h.a)(a)),a}return Object(c.a)(r,[{key:"buttonClick",value:function(e){var t=e.target;"BUTTON"!==t.nodeName&&"BUTTON"!==(t=t.parentNode).nodeName&&(t=t.parentNode);var r=Number(t.dataset.tag);t.dataset.tag=0===r?1:0,e.stopPropagation()}},{key:"fretBtnTextChange",value:function(e){e.stopPropagation(),"NoteFirst"===this.props.qry.fretBtnText?this.props.stateChange("fretBtnText","IvlFirst"):this.props.stateChange("fretBtnText","NoteFirst")}},{key:"fretClick",value:function(e){var t=e.target,r=Number(t.dataset.strn),a=Number(t.dataset.fretn);if(isNaN(r))console.log("FretPnl.fretClick() error, bad caller:",t);else if(e.stopPropagation(),"true"!==t.dataset.fretfilter){if(7===r)r=6;else if(1!==r&&"TD"===t.nodeName){e.clientY<t.getBoundingClientRect().top+t.offsetHeight/2&&r--}if(!0!==this.props.strgFltr(r)){var s=v.noteByFret(r,a);this.props.stateChange("fretRoot",s)}}}},{key:"fretFltrClick",value:function(e){var t=this.props.qry,r=e.currentTarget,a=Number(r.dataset.fretn);console.log("fretFltrClick:",a,t.fretFilter),this.props.stateChange("fretFilter",a),e.stopPropagation()}},{key:"strgFltrClick",value:function(e){var t=e.currentTarget.dataset.strn,r=!this.props.strgFltr(t);this.props.stateChange("strgFltr"+t,r),e.stopPropagation()}},{key:"tabDelete",value:function(e){if(""!==this.state.tabs){var t=this.state.tabs.split(","),r=t.indexOf(e);r>=0&&(t.splice(r,1),this.setState({tabs:t.join(",")}))}}},{key:"button",value:function(e,t){var r=this.props.qry,a=e.ivl,s=r.fretBtnText,l="";if("ALL"===t){if(0!==r.octave&&r.octave!==e.octave)return null;s="NoteFirst"}else"fretRoot"===r.rootType?e.letters.indexOf(t.letter)>=0&&e.semis===t.semis&&(l=r.rootType):"selNote"===r.rootType&&t.letters.indexOf(e.letter)>=0&&(l=r.rootType);return"IvlFirst"===s?Object(p.jsxs)("button",{className:"fretButton",onClick:this.buttonClick,"data-strn":e.strg.num,"data-fretn":e.fretN,"data-selected":l,"data-tag":0,children:[e.ivl?Object(p.jsxs)("span",{className:"spanIvl",onClick:this.buttonClick,children:[Object(p.jsx)("span",{onClick:this.buttonClick,children:a.abr.substr(0,1)}),a.abr.substr(1)]}):null,Object(p.jsxs)("sub",{className:"subNote",onClick:this.fretBtnTextChange,children:[e.letter,Object(p.jsx)("sub",{className:"subOctave",children:e.octave})]})]},e.semis):Object(p.jsxs)("button",{className:"fretButton",onClick:this.buttonClick,"data-strn":e.strg.num,"data-fretn":e.fretN,"data-selected":l,"data-tag":0,children:[Object(p.jsxs)("span",{className:"spanNote",onClick:this.buttonClick,children:[e.letter,Object(p.jsx)("sub",{className:"subOctave",onClick:this.buttonClick,children:e.octave})]}),e.ivl?Object(p.jsx)("sub",{className:"subInterval",onClick:this.fretBtnTextChange,children:a.abr}):null]},e.semis)}},{key:"render",value:function(){var e=this,t=this.props.qry;function r(r){return"fretRoot"!==t.rootType?null:r.fretN===t.root.fretN&&r.strg.num===t.root.strg.num?e.button(r,t.root):null}function a(r){if("selNote"!==t.rootType)return null;var a=r.letters.indexOf(t.letter);return!(""===t.letter||a>=0)||0!==t.octave&&t.octave!==r.octave?null:(""!==t.letter&&(r.letter=t.letter),e.button(r,t.root))}function s(r){if(""===t.letter)return t.octave===r.octave?(r.ivl=t.ivl,e.button(r,t.root)):null}function l(r){if(null===t.ivl)return null;var a=null;if("fretRoot"===t.rootType&&!0===v.fretInRange(r,t.root)){var s=v.noteBySemis(t.root.semis+t.ivl.semis);r.letters.indexOf(s.letter)>=0&&(a=!0)}else"selNote"===t.rootType&&r.letters.indexOf(t.ivl.letter)>=0&&(a=!0);return!0!==a||0!==t.octave&&t.octave!==r.octave?null:(r.ivl=t.ivl,r.letter=t.ivl.letter,e.button(r,t.root))}function n(r){if(null===t.scale)return null;if("fretRoot"===t.rootType&&!0!==v.fretInRange(r,t.root))return null;var a,s=Object(d.a)(t.scale.ivls);try{for(s.s();!(a=s.n()).done;){var l=a.value;if(r.letters.indexOf(l.letter)>=0&&(0===t.octave||t.octave===r.octave))return r.ivl=l,r.letter=l.letter,e.button(r,t.root)}}catch(n){s.e(n)}finally{s.f()}return null}function i(r){if(null===t.chord)return null;if("fretRoot"===t.rootType&&!0!==v.fretInRange(r,t.root))return null;var a,s=Object(d.a)(t.chord.ivls);try{for(s.s();!(a=s.n()).done;){var l=a.value;if(r.letters.indexOf(l.letter)>=0&&(0===t.octave||t.octave===r.octave))return r.ivl=l,r.letter=l.letter,e.button(r,t.root)}}catch(n){s.e(n)}finally{s.f()}return null}for(var o=[],c=v.fretboard.fretMax,h=this.props.fretFirst,u=this.props.fretLast,b="",f=1;f<=9;f++){for(var m=[],j=f-1,g=this.props.strgFltr(j),y=0;y<=c+1;y++){var O='"'.concat(y,'",'),N=t.fretFilter.indexOf(O)>=0,C=null;if(0===y&&j>=1&&j<=6&&(C=Object(p.jsx)("div",{onClick:this.strgFltrClick,"data-strn":j,className:"btnFilter btnStrgFltr btnStrgFltr"+j,children:Object(p.jsx)("div",{children:"\u2666"})})),1===f){var x=y===c+1?"borderRight tdBorder"+y:"tdBorder"+y,k=y===h||y===c+1?" ":y;m.push(Object(p.jsx)("td",{"data-fretn":y,"data-fretfilter":N,onMouseDown:this.fretFltrClick,className:x,children:k},y))}else if(9===f)y===c+1?m.push(Object(p.jsx)("td",{className:"borderRight tdBottom col"+y},y)):m.push(Object(p.jsx)("td",{className:"tdBottom col"+y},y));else if(y===c+1)m.push(Object(p.jsx)("td",{"data-strn":j,"data-col":y,className:"borderRight col"+y},y));else{var F=null,B=null;if(j>=1&&j<=6&&(B=Object(p.jsx)("div",{className:"stringdiv",onClick:this.fretClick,"data-strn":j,"data-fretn":y})),!1===N&&!1===g&&y>=h&&y<=u){var M=v.noteByFret(j,y);"selNote"===t.rootType&&"All"===this.props.selNoteVal?F=e.button(M,"ALL"):(null===(F=n(M))&&(F=i(M)),null===F&&(F=l(M)),null===F&&("fretRoot"===t.rootType?F=r(M):"selNote"===t.rootType&&(F=a(M))),null===F&&(F=s(M)))}m.push(Object(p.jsxs)("td",{className:"fret fret"+y,onClick:this.fretClick,"data-strn":j,"data-fretn":y,"data-fretfilter":N,children:[C,F,B,Object(p.jsx)("div",{className:"fretbar",onClick:this.fretClick,"data-strn":j,"data-fretn":y})]},y))}}b=1===f?"frame frameTop":8===f?"borderBottom":9===f?"frame frameBottom":"strg strg"+(f-1),o.push(Object(p.jsx)("tr",{className:b,"data-fltr":g,children:m},f))}return Object(p.jsx)("div",{className:"fretPnlContainer",children:Object(p.jsx)("table",{className:"fretPnl",children:Object(p.jsx)("tbody",{children:o})})})}}]),r}(s.a.Component),g=function(e){Object(u.a)(r,e);var t=Object(b.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).state={collapsed:!!e.collapsed&&e.collapsed},a.btnDupeClick=a.btnDupeClick.bind(Object(h.a)(a)),a.btnDelClick=a.btnDelClick.bind(Object(h.a)(a)),a.last={},a.selLabelClick=a.selLabelClick.bind(Object(h.a)(a)),a.selChordChange=a.selChordChange.bind(Object(h.a)(a)),a.btnClearClick=a.btnClearClick.bind(Object(h.a)(a)),a.btnCollapseClick=a.btnCollapseClick.bind(Object(h.a)(a)),a.selFretNoChange=a.selFretNoChange.bind(Object(h.a)(a)),a.selIntervalChange=a.selIntervalChange.bind(Object(h.a)(a)),a.selNoteChange=a.selNoteChange.bind(Object(h.a)(a)),a.selOctaveChange=a.selOctaveChange.bind(Object(h.a)(a)),a.selScaleChange=a.selScaleChange.bind(Object(h.a)(a)),a}return Object(c.a)(r,[{key:"btnDelClick",value:function(){this.props.remove()}},{key:"btnDupeClick",value:function(){this.props.duplicate()}},{key:"btnCollapseClick",value:function(){var e=!this.state.collapsed;this.setState({collapsed:e})}},{key:"btnClearClick",value:function(){this.props.reset()}},{key:"selLabelClick",value:function(e){var t=this.props.qry,r=e.target;if("true"===r.dataset.selected)if("note"===r.dataset.type){if(""===t.rootType)return;this.last.rootType=t.rootType,this.last.root=t.root,"selNote"===this.last.rootType&&this.props.stateChange("selNoteVal",""),"fretRoot"===this.last.rootType&&this.props.stateChange("fretRoot",null)}else if("chord"===r.dataset.type){if(null===t.chord)return;this.last.chordName=t.chord.name,this.props.stateChange("chordName","")}else if("scale"===r.dataset.type){if(null===t.scale)return;this.last.scaleName=t.scale.name,this.props.stateChange("scaleName","")}else"octave"===r.dataset.type?(this.last.octave=t.octave,this.props.stateChange("octave",0)):"ivlName"===r.dataset.type&&(this.last.ivlName=this.props.ivlName,this.props.stateChange("ivlName",""));else if("note"===r.dataset.type){if(!this.last.rootType)return;"selNote"===this.last.rootType?null!==this.last.root&&this.props.stateChange("selNoteVal",this.last.root.letter):"fretRoot"===this.last.rootType&&null!==this.last.root&&this.props.stateChange("fretRoot",this.last.root)}else"chord"===r.dataset.type?this.last.chordName&&""!==this.last.chordName&&this.props.stateChange("chordName",this.last.chordName):"scale"===r.dataset.type?this.last.scaleName&&""!==this.last.scaleName&&this.props.stateChange("scaleName",this.last.scaleName):"octave"===r.dataset.type?this.last.octave&&""!==this.last.octave&&this.props.stateChange("octave",this.last.octave):"ivlName"===r.dataset.type&&this.last.ivlName&&""!==this.last.ivlName&&this.props.stateChange("ivlName",this.last.ivlName)}},{key:"selFretNoChange",value:function(e){var t=e.target,r=t.options[t.selectedIndex].value;this.props.stateChange("fretN",r)}},{key:"selNoteChange",value:function(e){var t=e.target,r=t.options[t.selectedIndex].text;this.props.stateChange("selNoteVal",r)}},{key:"selOctaveChange",value:function(e){var t=e.target,r=t.options[t.selectedIndex].text;""===r?this.props.stateChange("octave",0):this.props.stateChange("octave",Number(r))}},{key:"selIntervalChange",value:function(e){var t=e.target,r=t.options[t.selectedIndex].dataset.abr;this.props.stateChange("ivlName",r)}},{key:"selChordChange",value:function(e){var t=e.target,r=t.options[t.selectedIndex].text;this.props.stateChange("chordName",r)}},{key:"selScaleChange",value:function(e){var t=e.target,r=t.options[t.selectedIndex].text;this.props.stateChange("scaleName",r)}},{key:"drawSelNote",value:function(){for(var e=this.props.qry,t=[Object(p.jsx)("option",{},""),Object(p.jsx)("option",{children:"All"},"999")],r=0;r<v.letters.length;r++){var a=v.letters[r];t.push(Object(p.jsx)("option",{children:a},r))}var s=null===e.letter?"":e.letter;return Object(p.jsxs)("div",{className:"dataPnl pnlNote",children:[Object(p.jsx)("label",{"data-selected":""!==s,"data-type":"note",onClick:this.selLabelClick,children:"Note"}),Object(p.jsx)("select",{value:s,className:"selNote",onChange:this.selNoteChange,children:t})]})}},{key:"drawSelOctave",value:function(){var e,t=this.props.qry.octave,r=[Object(p.jsx)("option",{},999)];e=v.noteByFret(6,0).octave;for(var a=v.noteByFret(1,v.fretboard.fretMax).octave;a>=e;a--)r.push(Object(p.jsx)("option",{children:a},a));return Object(p.jsxs)("div",{className:"dataPnl pnlOctave",children:[Object(p.jsx)("label",{"data-selected":0!==t,"data-type":"octave",onClick:this.selLabelClick,children:"Octave"}),Object(p.jsx)("select",{value:t,className:"selOctave",onChange:this.selOctaveChange,children:r})]})}},{key:"drawSelScale",value:function(){var e,t=this.props.scaleName,r=0,a=[Object(p.jsx)("option",{},"aaa")],s=Object(d.a)(v.scales.list);try{for(s.s();!(e=s.n()).done;){var l=e.value;a.push(Object(p.jsx)("option",{children:l.name},++r))}}catch(n){s.e(n)}finally{s.f()}return Object(p.jsxs)("div",{className:"dataPnl pnlScale",children:[Object(p.jsx)("label",{"data-selected":""!==t,"data-type":"scale",onClick:this.selLabelClick,children:"Scale"}),Object(p.jsx)("select",{value:t,className:"selScale",onChange:this.selScaleChange,children:a})]})}},{key:"drawSelChord",value:function(){var e,t=0,r=this.props.chordName,a=[Object(p.jsx)("option",{},"aaa")],s=Object(d.a)(v.chords.list);try{for(s.s();!(e=s.n()).done;){var l=e.value;a.push(Object(p.jsx)("option",{children:l.name},++t))}}catch(n){s.e(n)}finally{s.f()}return Object(p.jsxs)("div",{className:"dataPnl pnlChord",children:[Object(p.jsx)("label",{"data-selected":""!==r,"data-type":"chord",onClick:this.selLabelClick,children:"Chord"}),Object(p.jsx)("select",{value:r,className:"selChord",onChange:this.selChordChange,children:a})]})}},{key:"drawSelInterval",value:function(){var e,t=this.props.qry,r=[Object(p.jsx)("option",{},"aaa")],a=0,s="",l=Object(d.a)(v.intervals.list);try{for(l.s();!(e=l.n()).done;){var n=e.value;if(0!==n.semis&&12!==n.semis){var i="".concat(n.name," (").concat(n.abr,", ").concat(n.semis,")");r.push(Object(p.jsx)("option",{"data-abr":n.abr,children:i},++a)),null!==t.ivl&&""===s&&t.ivl.abr===n.abr&&(s=i)}}}catch(o){l.e(o)}finally{l.f()}return Object(p.jsxs)("div",{className:"dataPnl pnlInterval",children:[Object(p.jsx)("label",{"data-selected":""!==s,"data-type":"ivlName",onClick:this.selLabelClick,children:"Interval"}),Object(p.jsx)("select",{value:s,className:"selInterval",title:"Intervals sorted by semis-tones",onChange:this.selIntervalChange,children:r})]})}},{key:"drawInfo",value:function(e){var t=this.props.qry,r=null;"qryCollapsed"===e&&(r=Object(p.jsxs)("div",{className:"qryBtn qryBtnExpand",onClick:this.btnCollapseClick,title:"Show query panel",children:[" ",Object(p.jsx)("div",{children:"\u27a4"})," "]}));var a=[];return"selNote"===t.rootType&&"All"===this.props.selNoteVal?(a.push(Object(p.jsx)("span",{className:"propName",children:"All Notes"},"allNotes")),0!==t.octave&&a.push(Object(p.jsxs)("span",{className:"ivl",children:[": Octave ",t.octave," "]},"qryOct"+t.octave))):(null!==t.scale&&(a.push(Object(p.jsx)("span",{className:"propName",children:t.root.letter+" "+t.scale.name+":"},"qryScale")),t.scale.ivls.forEach((function(e){a.push(Object(p.jsxs)("span",{className:"ivl",children:[" ",e.letter," ",Object(p.jsx)("sub",{children:e.abr})," "]},"qryScale"+e.abr))}))),null!==t.chord&&(a.push(Object(p.jsx)("span",{className:"propName",children:t.root.letter+" "+t.chord.name+":"},"qryChord")),t.chord.ivls.forEach((function(e){a.push(Object(p.jsxs)("span",{className:"ivl",children:[" ",e.letter," ",Object(p.jsx)("sub",{children:e.abr})," "]},"qryChord"+e.abr))}))),null!==t.ivl&&(a.push(Object(p.jsx)("span",{className:"propName",children:t.letter+" +"+t.ivl.name+":"},"qryIvl")),a.push(Object(p.jsxs)("span",{className:"ivl",children:[" ",t.ivl.letter," ",Object(p.jsx)("sub",{children:t.ivl.abr})," "]},"qryIvl"+t.ivl.abr)))),Object(p.jsxs)("div",{className:"infoPnl",children:[r,Object(p.jsx)("div",{className:"infoDiv",children:a})]})}},{key:"render",value:function(){var e=this.state.collapsed?"qryCollapsed":"qryExpanded",t=this.drawSelNote(),r=this.drawSelOctave(),a=this.drawSelInterval(),s=this.drawSelScale(),l=this.drawSelChord(),n=this.drawInfo(e);return Object(p.jsxs)("div",{className:"queryPnl "+e,children:[Object(p.jsx)("div",{className:"qryBtn qryBtnCollapse",onClick:this.btnCollapseClick,title:"Hide query panel",children:Object(p.jsx)("div",{children:"\u27a4"})}),Object(p.jsxs)("div",{className:"queryControls ",children:[t,r,s,l,a]}),Object(p.jsx)("div",{className:"qryBtn qryBtnClear",onClick:this.btnClearClick,title:"Reset query controls",children:"\u21bb"}),Object(p.jsx)("div",{className:"qryBtn qryBtnDupe",onClick:this.btnDupeClick,title:"Duplicate fretboard",children:"\u271a"}),0===this.props.fbid?null:Object(p.jsx)("div",{className:"qryBtn qryBtnDel",onClick:this.btnDelClick,title:"Remove this fretboard",children:"\u2710"}),n]})}}]),r}(s.a.Component),y=function(e){Object(u.a)(r,e);var t=Object(b.a)(r);function r(e){var a;return Object(o.a)(this,r),console.log("Fretboard.constructor()",e),(a=t.call(this,e)).state={fbid:e.fbid?e.fbid:0,fretFirst:e.fretFirst?e.fretFirst:0,fretLast:e.fretLast?e.fretLast:v.fretboard.fretMax,fretBtnText:e.fretBtnText?e.fretBtnText:"NoteFirst",fretFilter:e.fretFilter?e.fretFilter:"",strgFltrList:e.strgFltrList?e.strgFltrList:"",rootType:e.rootType?e.rootType:"s",fretRoot:e.fretRoot?e.fretRoot:null,selNoteVal:e.selNoteVal?e.selNoteVal:"",octave:e.octave?e.octave:0,scaleName:e.scaleName?e.scaleName:"",chordName:e.chordName?e.chordName:"",ivlName:e.ivlName?e.ivlName:""},a.duplicate=a.duplicate.bind(Object(h.a)(a)),a.remove=a.remove.bind(Object(h.a)(a)),a.reset=a.reset.bind(Object(h.a)(a)),a.stateChange=a.stateChange.bind(Object(h.a)(a)),a.strgFltr=a.strgFltr.bind(Object(h.a)(a)),a.makeQuery=a.makeQuery.bind(Object(h.a)(a)),a}return Object(c.a)(r,[{key:"reset",value:function(){this.setState({strgFltrList:""}),this.setState({fretFilter:""}),this.setState({scaleName:""}),this.setState({chordName:""}),this.setState({rootType:""}),this.setState({ivlName:""}),this.setState({fretRoot:null}),this.setState({selNoteVal:""}),this.setState({octave:0}),this.setState({fretBtnText:"NoteFirst"})}},{key:"strgFltr",value:function(e){return(e=Number(e))<1||e>6?null:this.state.strgFltrList.indexOf(e+",")>=0}},{key:"remove",value:function(){this.props.remove(this)}},{key:"duplicate",value:function(){this.props.duplicate(this)}},{key:"stateChange",value:function(e,t){if("fretBtnText"===e)this.setState({fretBtnText:t});else if("fretFilter"===e){var r='"'.concat(t,'",');t=this.state.fretFilter.indexOf(r)<0?this.state.fretFilter+r:this.state.fretFilter.replace(r,""),this.setState({fretFilter:t})}else if("chordName"===e)this.setState({chordName:t});else if("fretRoot"===e)this.setState({fretRoot:t}),null===t?(this.setState({rootType:""}),this.setState({selNoteVal:""})):this.setState({rootType:"fretRoot"});else if("selNoteVal"===e)this.setState({selNoteVal:t}),""===t?(this.setState({rootType:""}),this.setState({fretRoot:null})):this.setState({rootType:"selNote"});else if("strgFltr"===e.substr(0,8)){var a=Number(e.substr(8,1)),s=this.state.strgFltrList.slice();if(a<1||a>6)throw Error("Fretboard.stateChange() error, strN is wrong:[".concat(e,"]."));var l=s.indexOf(a+",");!0===t?l<0&&(s+=a+",",this.setState({strgFltrList:s})):l>=0&&(s=s.replace(a+","),this.setState({strgFltrList:s}))}else"fretFirst"===e?this.setState({fretFirst:t}):"fretLast"===e?this.setState({fretLast:t}):"octave"===e?this.setState({octave:t}):"ivlName"===e?this.setState({ivlName:t}):"scaleName"===e?this.setState({scaleName:t}):"semis"===e&&this.setState({semis:t})}},{key:"makeQuery",value:function(){var e={rootType:this.state.rootType,root:null,letter:"fretRoot"===this.state.rootType?this.state.fretRoot.letters[0]:this.state.selNoteVal,octave:this.state.octave,scale:null,chord:null,ivl:null,fretBtnText:this.state.fretBtnText,fretFilter:this.state.fretFilter};return"fretRoot"===e.rootType&&(e.root=this.state.fretRoot),"selNote"===e.rootType&&""!==e.letter&&"All"!==e.letter&&(e.root=v.noteByLetter(e.letter)),""!==this.state.scaleName&&e.root&&(e.scale=v.scales.toObj(e.letter,this.state.scaleName)),""!==this.state.chordName&&e.root&&(e.chord=v.chords.toObj(e.letter,this.state.chordName)),""!==this.state.ivlName&&e.root&&(e.ivl=v.intervals.byName(this.state.ivlName),e.ivl.letter=v.letterCalc(e.letter,e.ivl)),e}},{key:"render",value:function(){var e=this.makeQuery();return console.log("Fretboard.render()",this.props,this.state,e),Object(p.jsxs)("div",{className:"fretboard",id:"Fretboard"+this.props.fbid,children:[Object(p.jsx)(j,{fretFirst:this.state.fretFirst,fretLast:this.state.fretLast,ivlName:this.state.ivlName,selNoteVal:this.state.selNoteVal,qry:e,stateChange:this.stateChange,strgFltr:this.strgFltr}),Object(p.jsx)(g,{fbid:this.props.fbid,fretFirst:this.state.fretFirst,fretLast:this.state.fretLast,selNoteVal:this.state.selNoteVal,chordName:this.state.chordName,scaleName:this.state.scaleName,ivlName:this.state.ivlName,duplicate:this.duplicate,qry:e,remove:this.remove,reset:this.reset,stateChange:this.stateChange,strgFltr:this.strgFltr})]})}}]),r}(s.a.Component),O=r(12),N=(r(22),function(){return Object(p.jsx)(O.a,{trigger:Object(p.jsx)("button",{className:"btnInfo",children:"About"}),modal:!0,nested:!0,children:function(e){return Object(p.jsxs)("div",{className:"modal",children:[Object(p.jsx)("div",{className:"header",children:" About GuitarJoe "}),Object(p.jsxs)("div",{className:"content",children:["Important: ",Object(p.jsx)("br",{}),"\xa0- please explore by clicking/tapping stuff",Object(p.jsx)("br",{}),"\xa0- clicking a fret or selecting a note provide different results",Object(p.jsx)("br",{}),"\xa0- zoom using your browser's zoom controls",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"GuitarJoe is a free web application, no ads, no logins, no tracking. The goal was to create a tool that would make guitar theory accessible while practicing. I am not anything close to a musician, so I was going crazy taking notes and diagraming chords, scales and intervals: I needed a tool to facilitate my understanding so I could focus on the guitar instead of managing scraps of information. This application has successfully reduced my hair loss--I hope it has the same effect on you!",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"The functionality is stable. At this point it is a proof of concept as I wrangle technologies and concepts. There is a lot more planned, but I am working on other aspects of the project. It will always be free; a warm thanks for those who have supported my various journeys.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"\xa0- Tested to work in Chrome, Firefox, and Safari(iPad)",Object(p.jsx)("br",{}),"\xa0- Send comments and bugs to chrisd@europa.com ",Object(p.jsx)("br",{}),"\xa0- Review project documentation and code in the ",Object(p.jsx)("a",{href:"https://github.com/ChrisDeFreitas/guitarjoe/",children:"GitHub Repository"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Thanks to",Object(p.jsx)("br",{}),"\xa0- Application hosted on ",Object(p.jsx)("a",{href:"https://github.com/ChrisDeFreitas/guitarjoe",target:"_new",children:"Github"}),"  ",Object(p.jsx)("br",{}),"\xa0- Background image from ",Object(p.jsx)("a",{href:"https://www.flickr.com/photos/webtreatsetc/with/4514047664/",target:"_new",children:"WebTreats ETC"})," ",Object(p.jsx)("br",{}),"\xa0- Built with the ",Object(p.jsx)("a",{href:"https://reactjs.org/",target:"_new",children:"React"})," Javascript library ",Object(p.jsx)("br",{}),"\xa0- Fuggles font by Robert Leuschke on ",Object(p.jsx)("a",{href:"https://fonts.google.com/?query=Robert+Leuschke/",target:"_new",children:"Google Fonts"})," ",Object(p.jsx)("br",{}),"\xa0- Guitar icon by monkik from the ",Object(p.jsx)("a",{href:"https://thenounproject.com/term/guitar/2588464/",target:"_new",children:"Noun Project"})," ",Object(p.jsx)("br",{}),"\xa0- Guitar scales verified using ",Object(p.jsx)("a",{href:"https://jguitar.com/scale",target:"_new",children:"jguitar.com"}),Object(p.jsx)("br",{}),"\xa0- Music theory from ",Object(p.jsx)("a",{href:"https://www.wikipedia.org/",target:"_new",children:"Wikipedia"}),Object(p.jsx)("br",{}),"\xa0- Popup control from ",Object(p.jsx)("a",{href:"https://react-popup.elazizi.com/",target:"_new",children:"reactjs-popup"})," ",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Created by Chris DeFreitas, BC Canada",Object(p.jsx)("br",{})]}),Object(p.jsx)("div",{className:"actions",children:Object(p.jsx)("button",{className:"button",onClick:function(){console.log("modal closed "),e()},children:"Close"})})]})}})}),C=["title","titleId"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function F(e,t){var r=e.title,s=e.titleId,l=k(e,C);return a.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",x:"0px",y:"0px",ref:t,"aria-labelledby":s},l),r?a.createElement("title",{id:s},r):null,m||(m=a.createElement("g",{fill:"#ffffff",stroke:"#0006",strokeWidth:"1px"},a.createElement("path",{d:"M30,23v-4a2,2,0,1,0,0,4Z"}),a.createElement("path",{d:"M48,24V18.038L47.967,18H32.033L32,18.038V25a7.979,7.979,0,0,0,3.556,6.648l.124.078a8.078,8.078,0,0,0,8.762-.076A7.982,7.982,0,0,0,48,25ZM35.5,22A1.5,1.5,0,1,1,37,20.5,1.5,1.5,0,0,1,35.5,22Zm3.361,6H37V26h1.861a7.445,7.445,0,0,0,3.635-.864L43.5,26.864A9.353,9.353,0,0,1,38.861,28ZM44.5,22A1.5,1.5,0,1,1,46,20.5,1.5,1.5,0,0,1,44.5,22Z"}),a.createElement("polygon",{points:"17.279 13 18 10.838 18 4 13 4 13 10.838 13.721 13 17.279 13"}),a.createElement("path",{d:"M17,35.226V15H14V35.226A5.657,5.657,0,0,1,17,35.226Z"}),a.createElement("path",{d:"M50,19v4a2,2,0,0,0,0-4Z"}),a.createElement("path",{d:"M48,11.41v-.021q0-.66-.034-1.324c0-.022,0-.043,0-.065H32.038c0,.022,0,.044,0,.066-.022.441-.033.883-.034,1.323V12H48Z"}),a.createElement("path",{d:"M31,16H49a3.006,3.006,0,0,0,2.829-2H28.171A3.006,3.006,0,0,0,31,16Z"}),a.createElement("path",{d:"M47.613,6.793A3.329,3.329,0,0,0,44.32,4a3.357,3.357,0,0,0-2.781,1.489,1.853,1.853,0,0,1-3.076,0A3.359,3.359,0,0,0,35.68,4a3.33,3.33,0,0,0-3.292,2.79c-.067.4-.1.806-.154,1.21H47.766C47.716,7.6,47.679,7.19,47.613,6.793Z"}),a.createElement("path",{d:"M40,35a9.941,9.941,0,0,1-4-.847V36.17a2,2,0,0,1-1.637,1.963l-1.188.224.383,1.576a6.629,6.629,0,0,0,12.884,0l.383-1.576-1.19-.224A2,2,0,0,1,44,36.17V34.147A9.946,9.946,0,0,1,40,35Z"}),a.createElement("path",{d:"M18,57V56H11a1,1,0,0,1-1-1V51a1,1,0,0,1,1-1h7V45.4a5.495,5.495,0,0,1-6-9.131V29.151a5.078,5.078,0,0,0-3.991,4.606,4.891,4.891,0,0,0,.041.926,12.5,12.5,0,0,1-2.032,9.29A9.98,9.98,0,0,0,4,50.3,10.262,10.262,0,0,0,14.35,60h2.3a10.328,10.328,0,0,0,1.8-.161A4.013,4.013,0,0,1,18,58Z"}),a.createElement("path",{d:"M22.7,58H20a1.958,1.958,0,0,0,.814,1.608A2.01,2.01,0,0,0,22,60h4a1.006,1.006,0,0,1-.555-.168Z"}),a.createElement("polygon",{points:"28 60 28.017 59.998 26 60 28 60"}),a.createElement("polygon",{points:"53.303 51 60 51 60 49 56.303 49 53.303 51"}),a.createElement("path",{d:"M59.941,43.492c-.005-.031-.013-.062-.018-.093a3.991,3.991,0,0,0-.142-.523c-.025-.069-.05-.137-.078-.2a3.814,3.814,0,0,0-.239-.509h0a3.982,3.982,0,0,0-.377-.54c-.014-.018-.03-.034-.045-.051a4.006,4.006,0,0,0-.914-.786c-.06-.038-.12-.075-.18-.108a3.871,3.871,0,0,0-.511-.245l-.041-.017a4.017,4.017,0,0,0-.67-.186l-7.941-1.466-.4,1.643a8.629,8.629,0,0,1-16.772,0l-.4-1.643-7.941,1.466a3.962,3.962,0,0,0-1.248.461c-.044.025-.087.051-.132.079a3.953,3.953,0,0,0-.388.277c-.063.051-.125.1-.184.156-.1.09-.191.186-.28.284-.059.065-.118.13-.173.2a4,4,0,0,0-.576,1c-.025.062-.049.125-.071.189a3.913,3.913,0,0,0-.158.583v0a4.035,4.035,0,0,0-.063.708V47h4a1.006,1.006,0,0,1,.555.168L30.3,51H49.7l5.748-3.832A1.006,1.006,0,0,1,56,47h4V44.162A4.012,4.012,0,0,0,59.941,43.492Z"}),a.createElement("path",{d:"M30,53a1.006,1.006,0,0,1-.555-.168L23.7,49H20v7h3a1.006,1.006,0,0,1,.555.168L26.3,58H32l20.1,2.005L58,60a2,2,0,0,0,2-2V53H30Z"}),a.createElement("path",{d:"M17.448,37.594a3.542,3.542,0,0,0-3.893,0,3.492,3.492,0,1,0,4.619,5.133l.012-.059a.716.716,0,0,1,.023-.1c.028-.1.077-.2.11-.293.042-.127.089-.251.14-.374.038-.092.06-.184.1-.277.079-.164.158-.311.238-.451l0-.01c.053-.093.109-.174.163-.257A3.571,3.571,0,0,0,19,40.5,3.469,3.469,0,0,0,17.448,37.594Z"}),a.createElement("rect",{x:12,y:52,width:6,height:2}),a.createElement("path",{d:"M21.134,38.906c.094-.051.18-.119.276-.164l.447-.192a3.5,3.5,0,0,1,.549-.175,3.424,3.424,0,0,1,.462-.11,15.6,15.6,0,0,1,.081-3.578,4.84,4.84,0,0,0,.042-.926A5.079,5.079,0,0,0,19,29.151v7.113a5.445,5.445,0,0,1,1.815,2.825C20.919,39.024,21.025,38.965,21.134,38.906Z"}))))}var B=a.forwardRef(F);r.p;var M=function(){var e=Object(a.useState)([{id:0,state:!0}]),t=Object(i.a)(e,2),r=t[0],s=t[1],l=Object(a.useState)(null),n=Object(i.a)(l,2),o=n[0],c=n[1];function h(e){for(var t=0;t<r.length;t++)if(r[t].id===e)return t;return!1}function u(e){var t=e.props.fbid,a=r.slice(),l=a.length,n={id:l,state:e.state},i=h(t);if(!1===i)throw new Error("App.duplicate() error, fbid=[".concat(t,"] not found."));a.splice(i+1,0,n),s(a),c(l)}function b(e){var t=e.props.fbid,a=r.slice(),l=h(t);if(!1===l)throw new Error("App.remove() error, fbid=[".concat(t,"] not found."));a[l].state=!1,c(null),s(a)}for(var d=[],f=r.length,m=0;m<f;m++){var v=null,j=r[m].id,g=r[m].state;j===o?v=Object(p.jsx)(y,{fbid:j,duplicate:u,remove:b,fretFirst:g.fretFirst,fretLast:g.fretLast,fretBtnText:g.fretBtnText,fretFilter:g.fretFilter,strgFltrList:g.strgFltrList,rootType:g.rootType,fretRoot:g.fretRoot,selNoteVal:g.selNoteVal,octave:g.octave,scaleName:g.scaleName,chordName:g.chordName,ivlName:g.ivlName},j):!1!==g&&(v=Object(p.jsx)(y,{fbid:j,duplicate:u,remove:b},j)),null!=v&&d.push(v)}return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header header",children:[Object(p.jsx)(B,{className:"Logo",alt:"Logo"}),"GuitarJoe v0.1.1 ",Object(p.jsx)(N,{})]}),d]})};n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.fa251c05.chunk.js.map