/*
  //♭ &flat;
  
  GuitarJoe
  by Chris DeFreitas, chrisd@europa.com
  
   notes:
    - "letter" refers to what we usually call a note, ie C#
    - note is an object, requires refactoring for consistency
    - note.semis is unique
    - assume: exception handling performed by caller

  todo:
    - refactor for code consistency
    - refactor to create a standard note object
    - fix q.chords.make() (when code needed)
  
 */

var q = {

  chords: {
    list:[
      {
        name:'Major triad', abr:'maj',
        intervals:[ 'P1', 'M3', 'P5' ]
      },{
        name:'Minor triad', abr:'min',
        intervals:[ 'P1', 'm3', 'P5' ]
      },{
        name:'Augmented triad', abr:'aug',
        intervals:[ 'P1', 'M3', 'A5' ]
      },{
        name:'Diminished triad', abr:'dim',
        intervals:[ 'P1', 'm3', 'd5' ]
      },{
        name:'Dominant seventh', abr:'7',
        intervals:[ 'P1', 'M3', 'P5', 'm7' ]
      },{
        name:'Major seventh', abr:'maj7',
        intervals:[ 'P1', 'M3', 'P5', 'M7' ]
      },{
        name:'Minor seventh', abr:'min7',
        intervals:[ 'P1', 'm3', 'P5', 'd7' ]
      },{
        name:'Major sixth', abr:'maj6',
        intervals:[ 'P1', 'M3', 'P5', 'M6' ]
      },{
        name:'Minor sixth', abr:'min6',
        intervals:[ 'P1', 'm3', 'P5', 'M6' ]
      },{
        name:'Suspended second', abr:'sus2',
        intervals:[ 'P1', 'M2', 'P5' ]
      },{
        name:'Suspended fourth', abr:'sus4',
        intervals:[ 'P1', 'P4', 'P5' ]
      }
    ],
    byName( str ){
      for(let chord of q.chords.list){
        if(chord.abr === str || chord.name === str)
          return Object.assign({}, chord )
      }
      return null
    },
    // todo: fix
    // make( letter, chordAbbrev, octaveNum ){
    //   let chord = q.chords.byName( chordAbbrev )
    //   let semis = []
    //   for(let stepnum = 0; stepnum < chord.semis.length; stepnum++){
    //     let step = chord.semis[stepnum]
    //     semis.push( q.semisCalc( step, octaveNum) )
    //   }
    //   return {
    //     letter: letter.toUpperCase(),
    //     octaveNum: octaveNum,
    //     name:chord.name, abr:chord.abr, 
    //     semis: semis
    //   }
    //},
    // toNotes( root, chord ){  //return scale notes based on root; todo: refactor for efficiency
    toObj( root, chordName ){  //return chord with notes based on root
      let ivls = [],
        chord = q.chords.byName( chordName )
      if(chord === null) return null

      if(typeof root === 'string')
        root = q.intervals.byName( root )
      if(root === null) return null

      for(let iname of chord.intervals){
        let ivl = q.intervals.byName( iname )
        let letter = q.letterBySemis( root.semis +ivl.semis )
        ivls.push( Object.assign({}, ivl, { letter:letter } ))
      }

      let obj = Object.assign({}, chord, {
        type:'chord',
        fullName: root.letter +' '+chord.name,
        fullAbbrev: root.letter +chord.abr,
        root: Object.assign({}, root),
        ivls:ivls
       })

      return obj
    }
  },

  fretboard: {    //is this used??
    fretMax:14,
    
    strings: [    //assume: frets == null or array of frets with content
      {num:1, letter:'E', octave:4, frets:null, semis:0 },
      {num:2, letter:'B', octave:3, frets:null, semis:0 },
      {num:3, letter:'G', octave:3, frets:null, semis:0 },
      {num:4, letter:'D', octave:3, frets:null, semis:0 },
      {num:5, letter:'A', octave:2, frets:null, semis:0 },
      {num:6, letter:'E', octave:2, frets:null, semis:0 }
    ],
    clear(){
      for(let ii = 0; ii <= q.fretboard.strings.length -1; ii++){
        let strg = q.fretboard.strings[ii]
        strg.semis = q.semisCalc(strg.letter, strg.octave)
        // strg.frets = new Array(q.fretboard.fretMax)
        // for( let ii=0; ii < strg.frets.length; ii++){
        //   strg.frets[ii] = { 
        //     num: ii,
        //     letter: q.letterBySemis( strg.semis + ii ),
        //     semis: strg.semis + ii
        //   }
        // }
      }
      //q.fretboard.showStrings()
    },
    fretMark( strg, semis, val){    //todo: not used, delete
      let fretnum = ( (strg.root -semis) / 100)
      if( fretnum > q.fretMax )
        throw new Error(`fretBoard.fretMark() error, semis is too large (semis=[${semis}]).`)
    
      strg.frets[fretnum] = val
    },
    show(){
      console.log('guitar_lib.show():')
      console.dir(q.fretboard)
    },
    showStrings(){
      console.log('guitar_lib.showStrings():', q.fretboard.strings)
    }
  },

  fretInRange(note, root){
    if((root.fretN <= 1 && note.fretN <= 5)
    || (root.fretN > 1 && note.fretN >= (root.fretN -3)  &&  note.fretN <= (root.fretN +3) ))
      return true
    return null
  },

  intervals:{
    list:[
      //rules:
      // prefer perfect, major, minor first
      // prefer minor over diminished
      // prefer augmented last
      // 
      {name:'Perfect unison', abr:'P1',  semis:0, letter:'C' },
      // {name:'Root', abr:'r', semis:0, letter:'' },
      {name:'Diminished second', abr:'d2', semis:0, letter:'D♭♭' },
      
      {name:'Minor second', abr:'m2', semis:1, letter:'D♭' },
      {name:'Augmented unison', abr:'A1', semis:1, letter:'C#' },
      
      {name:'Major second', abr:'M2', semis:2, letter:'D' },
      {name:'Diminished third', abr:'d3', semis:2, letter:'E♭♭' },
      
      {name:'Minor third', abr:'m3', semis:3, letter:'E♭' },
      {name:'Augmented second', abr:'A2', semis:3, letter:'D#' },
      
      {name:'Major third', abr:'M3', semis:4, letter:'E' },
      {name:'Diminished fourth', abr:'d4', semis:4, letter:'F♭' },

      {name:'Perfect fourth', abr:'P4', semis:5, letter:'F'},
      {name:'Augmented third', abr:'A3', semis:5, letter:'E#'},
      
      {name:'Diminished fifth', abr:'d5', semis:6, letter:'G♭' },
      {name:'Augmented fourth', abr:'A4', semis:6, letter:'F#' },
      {name:'Tritone', abr:'TT', semis:6, letter:'TT' },
      
      {name:'Perfect fifth', abr:'P5', semis:7, letter:'G' },
      {name:'Diminished sixth', abr:'d6', semis:7, letter:'A♭♭' },
      
      {name:'Minor sixth', abr:'m6', semis:8, letter:'A♭' },
      {name:'Augmented fifth', abr:'A5', semis:8, letter:'G#' },
      
      {name:'Major sixth', abr:'M6', semis:9, letter:'A' },
      {name:'Diminished seventh', abr:'d7', semis:9, letter:'B♭♭' },
      
      {name:'Minor seventh', abr:'m7', semis:10, letter:'B♭' },
      {name:'Augmented sixth', abr:'A6', semis:10, letter:'A#' },
      
      {name:'Major seventh', abr:'M7', semis:11, letter:'B' },
      {name:'Diminished octave', abr:'d8', semis:11, letter:'C♭' },
      
      {name:'Perfect octave', abr:'P8', semis:12, letter:'C' },
      {name:'Augmented seventh', abr:'A7', semis:12, letter:'B#' },
    ],
  
    byLetter( letter ){
      letter = letter.toUpperCase()
      for(let ivl of q.intervals.list){
        if(ivl.letter === letter)
          return Object.assign({}, ivl)
      }
      return null
    },
    byName( nm ){
      let letter = nm.toUpperCase()
      for(let ivl of q.intervals.list){
        if(ivl.abr === nm || ivl.letter === letter || ivl.name === nm)
          return Object.assign({}, ivl)
      }
      return null
    },
    bySemis( semis ){
      semis = semis % 12
      for(let ivl of q.intervals.list){
        if(ivl.semis === semis)
          return Object.assign({}, ivl)
      }
      return null
    },
  },


  letters:['C♭','C','C#','D♭','D','D#','E♭','E','E#','F♭','F','F#','G♭','G','G#','A♭','A','A#','B♭','B','B#'],
  lettersBySemis( semis ){  //find all notes with the same number of semitones
    let letters = []
    semis = semis % 12
    for(let ivl of q.intervals.list ){
      if(ivl.semis === semis)
        letters.push(ivl.letter) 
    }
    return letters
  },
  letterBySemis( semis ){
    let ivl = q.intervals.bySemis(semis)
    if(ivl !== null)
      return ivl.letter
    return null
  },
  letterCalc( rootLetter, ivlOrSemis ){    //add interval or semitones to letter, return new letter
    let semis = (typeof ivlOrSemis === 'object' ?ivlOrSemis.semis :Number(ivlOrSemis) ),
      ivl = q.intervals.byName( rootLetter )
    semis = ivl.semis +semis
    return q.letterBySemis( semis )
  },

  noteByFret( strN, fretN ){
    let strg = q.strg( strN ),
        semis = strg.semis +fretN,
        octave = q.octave(semis),
        letters = q.lettersBySemis(semis)
    return {
      strg:strg, 
      fretN:(semis -strg.semis),
      letter:q.letterBySemis(semis), 
      octave:octave,
      semis:semis,
      letters:letters,
      noteByFret:true
    }
  },
  noteBySemis( semis ){
    let strNote = null,
      fretMax = q.fretboard.fretMax
    for(let strg of q.fretboard.strings){
      if(semis >= strg.semis && semis <= (strg.semis +fretMax)){
        strNote = strg
        break
      }
    }
    return {
      strg:strNote, 
      fretN:(strNote===null ?null :(semis -strNote.semis)), 
      letter:q.letterBySemis(semis), 
      octave:q.octave(semis),
      semis:semis 
    }
  },
  noteByTab( tab ){
    let strg = q.strgByTab( tab ),
      fretN = Number( tab.substr(1,2) ),
      semis = strg.semis +fretN
    return {
      strg: strg, 
      fretN:fretN, 
      letter:q.letterBySemis(semis), 
      octave:q.octave(semis),
      semis:semis,
      tab:tab
    }
  },


  octave( semis ){
    return Math.floor( semis / 12 )
  },

  scales:{
    list:[
      { name:'Major', abr:'M', short:'Major',
        // semis:[0,2,4,5,7,9,11],  // list:[ 'C', 'D', 'E', 'F', 'G', 'A', 'B'],
        intervals:['P1','M2','M3','P4','P5','M6','M7']
      },
      { name:'Natural minor', abr:'m', short:'Nat.min', 
        // semis:[0,2,3,5,7,9,10],  // list:[ 'C', 'D', 'D#', 'F', 'G', 'A', 'A#'],
        intervals:['P1','M2','m3','P4','P5','M6','m7']
      },
      { name:'Pentatonic major', abr:'P', short:'Pen.maj', 
        // semis:[0,2,4,7,9],   // list:[ 'C', 'D', 'E', 'G', 'A'],
        intervals:['P1','M2','P4','P5','M6']
      },
      { name:'Pentatonic minor', abr:'p', short:'Pen.min',
        // semis:[0,3,5,7,10],     // list:[ 'C', 'D#', 'F', 'G', 'A#'],
        intervals:['P1','m3','P4','P5','m7']
      },
      { name:'Blues heptatonic', abr:'B7', short:'Blues7',
        intervals:['P1','M2','M3','P4','d5','M6','m7']
      },
      { name:'Blues hexatonic', abr:'B6', short:'Blues6',
        // semis:[0,3,5,6,7,10],
        intervals:['P1','m3','P4','A4','P5','m7']
      },
      { name:'Chromatic', abr:'Ch', short:'Chrom',
        // semis:[0,1,2,3,4,5,6,7,8,9,10,11],  // list:[ 'C', 'D', 'E', 'F', 'G', 'A', 'B'],
        intervals:['P1','m2','M2','m3','M3','P4','A4','P5','m6','M6','m7','M7']
      },
      { name:'Double harmonic', abr:'DH', short:'Dbl.har',
        // semis:[0,1,4,5,7,8,11], //minor second, major third, perfect fourth and fifth, minor sixth, major seventh -- https://en.wikipedia.org/wiki/Double_harmonic_scale
        intervals:['P1','m2','M3','P4','P5','m6','M7']
      },
      { name:'Gypsy minor', abr:'Gm', short:'Gypsy.min',
        // semis:[0,2,3,6,7,8,11],    //step pattern is W, H, +, H, H, +, H -- https://en.wikipedia.org/wiki/Hungarian_minor_scale
        intervals:['P1','M2','m3','A4','P5','m6','M7']
      },
      { name:'Hungarian major', abr:'HM', short:'Hung.maj`',
        // semis:[0,3,4,6,7,9,10],    //semitones: 3, 1, 2, 1, 2, 1, 2 -- https://en.wikipedia.org/wiki/Hungarian_major_scale
        intervals:['P1','m3','M3','A4','P5','M6','m7']
      }
    ],
    byName( scaleName ){
      for(let scale of q.scales.list){
        if(scale.name === scaleName || scale.short === scaleName || scale.abr === scaleName)
          return Object.assign({}, scale)
      }
      return null
    },
    toObj( root, scaleName ){  //return scale, root and scale intervals
      let ivls = []

      if(typeof root === 'string')        //else interval object
        root = q.intervals.byName( root )
      if(root === null) return null

      let scale = q.scales.byName( scaleName )
      if(scale === null) return null

      for(let ivlAbr of scale.intervals){   //generate intervals for scale built on root
        let ivl = q.intervals.byName( ivlAbr )
        let letter = q.letterBySemis( root.semis +ivl.semis )
        ivl = Object.assign( {}, ivl, {
          abr: ivlAbr,    //abbreviation may differ from one assigned to scale
          letter:letter,
        })
        ivls.push( ivl )
      }

      let obj = Object.assign( {}, scale, {
        type:'scale',
        fullName: root.letter +' '+scale.name,
        shortName: root.letter +' '+scale.short,
        abbrevName: root.letter +scale.abr,
        root: Object.assign({}, root),
        ivls: ivls 
      })
      return obj
    }
  },

  semis( nm ){    //return ivl object
    return q.intervals.byName( nm )
  },
  semisCalc(note, octaveNum){   //return number of semitones
      //assume: ocatveNum range: 0 to infinity
      //assume: Middle C (C4) == (C,4) == (48 +0) == 48
      //assume:            C0 == (C,0) == ( 0 +0) ==  0
      //assume: A440     (A4) == (A,4) == (48 +9) == 57
      let semis = (octaveNum *12)
      semis += q.intervals.byName( note ).semis
      return semis
  },

  strg( strngN ){  
    return Object.assign({}, q.fretboard.strings[ strngN -1 ])
  },
  strgByTab( tab ){
    let ltr = tab.substr(0,1)
    switch(ltr){
      case 'e': return Object.assign({}, q.strg(1) )
      case 'B': return Object.assign({}, q.strg(2) )
      case 'G': return Object.assign({}, q.strg(3) )
      case 'D': return Object.assign({}, q.strg(4) )
      case 'A': return Object.assign({}, q.strg(5) )
      case 'E': return Object.assign({}, q.strg(6) )
      default:
        throw new Error(`guitar_lib.strgByTab() error, tab letter not found:[${ltr}].`)
    }
  },
  
  tabByFret( strN, fretN ){  
    let tab = ''
    switch( strN ){
      case 1: tab = 'e'; break
      case 2: tab = 'B'; break
      case 3: tab = 'G'; break
      case 4: tab = 'D'; break
      case 5: tab = 'A'; break
      case 6: tab = 'E'; break
      default:
        throw new Error(`guitar_lib.tabByFret() error, string number not found:[${strN}].`)
    }
    return tab+String(fretN)
  },

  //is this needed?
  fretMaxSet( nn ){
    q.fretboard.fretMax = nn
    q.fretboard.clear()
  }
}


q.fretboard.clear()
export default q