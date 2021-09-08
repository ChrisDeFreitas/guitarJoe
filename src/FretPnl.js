/*
  FretPnl.js
  - by Chris DeFreitas, chrisd@europa.com
  - manage activation of fretboard controls for GuitarJoe app

*/

import React from 'react'
import './FretPnl.css';
import q from "./guitar_lib.js";

class FretPnl extends React.Component{

  constructor (props) {
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
    this.fretBtnTextChange = this.fretBtnTextChange.bind(this)
    this.fretClick = this.fretClick.bind(this)
    this.fretFltrClick = this.fretFltrClick.bind(this)
    this.strgFltrClick = this.strgFltrClick.bind(this)
  }
  buttonClick( event ){
    let btn = event.target
    if(btn.nodeName !== 'BUTTON'){ 
      btn = btn.parentNode      //span
      if(btn.nodeName !== 'BUTTON') 
        btn = btn.parentNode    //span span
    }
    if(btn.nodeName !== 'BUTTON') return
    
    //toggle button
    let selected = Number( btn.dataset.selected )
    if(selected === 0)
      btn.dataset.selected = 1
    else
    if(selected === 1)
      btn.dataset.selected = 0
 
    event.stopPropagation()
  }
  fretBtnTextChange( event ){   //toggle formatting of fret button captions
    // console.log('fretBtnTextChange', event)
    event.stopPropagation()
    if(this.props.qry.fretBtnText === 'NoteFirst')
   		this.props.stateChange( 'fretBtnText', 'IvlFirst' )
    else
   		this.props.stateChange( 'fretBtnText', 'NoteFirst' )
  }
  fretClick( event ){
    let //qry = this.props.qry,
      cell = event.target,
      strN = Number(cell.dataset.strn), 
      fretN = Number(cell.dataset.fretn)

    if( isNaN(strN) ){
      console.log('FretPnl.fretClick() error, bad caller:', cell)
      return 
    }
    event.stopPropagation()
    if(cell.dataset.fretfilter === "true")
      return

    if(strN === 7){
      strN = 6
    }else
    if(strN !== 1 && cell.nodeName === 'TD'){ //calc string to use
      let  cy = event.clientY,
        abs = cell.getBoundingClientRect(),
        top = abs.top,
        mid = top +(cell.offsetHeight  /2)

      if(cy < mid) strN--
    }

    if(this.props.strgFltr( strN ) === true)
      return

    // console.log('fretPnl.fretClick:', strN, fretN, cell.className)
    let root = q.noteByFret( strN, fretN )
		this.props.stateChange( 'fretRoot', root )
  }
  fretFltrClick( event ){ //toggle state for frets
    let qry = this.props.qry,
      btn = event.currentTarget,
      fretn = Number( btn.dataset.fretn )

    console.log( 'fretFltrClick:', fretn, qry.fretFilter )
    this.props.stateChange( 'fretFilter', fretn )
    event.stopPropagation()
  }
  strgFltrClick( event ){
    let btn = event.currentTarget,
      strN = btn.dataset.strn,
      newstate = !this.props.strgFltr( strN )
    this.props.stateChange( 'strgFltr'+strN, newstate )
    event.stopPropagation()
  }  
  // tabDelete( tab ){
  //   if(this.state.tabs === '') return
  //   let list = this.state.tabs.split(','),
  //     idx = list.indexOf( tab )
  //   if(idx >= 0) {
  //     // console.log('tabDelete', tab)
  //     list.splice(idx, 1)
  //     this.setState({ tabs:list.join(',') })
  //   }
  // }

  button( note, root ){
    // sample:
    // <button title='Note' className='fretButton'>C
    //   <sub title='octave'>4</sub>
    //   <sup title='Interval'>P1</sup>
    // </button>
    let qry = this.props.qry, ivl = note.ivl, capStyle = qry.fretBtnText

    let selected = 0
    if(root === 'ALL'){   //user selected All Notes
      if(qry.octave !== 0 && qry.octave !== note.octave)
        return null      
      capStyle = 'NoteFirst' //force for this selection
    }else
    if(qry.rootType === 'fretRoot'){
      // if(note.letter === root.letter && note.semis === root.semis)
      if(note.letters.indexOf( root.letter ) >= 0  &&  note.semis === root.semis)
        selected = qry.rootType
    }else
    if(qry.rootType === 'selNote'){
      if(root.letters.indexOf( note.letter ) >= 0){ 
        selected = qry.rootType
      }
    }
 
    //test against props.noteFilter -- allow overriding roottype because user selected
   // if(selected === 0){
      if(qry.noteFilter.indexOf( note.letter ) >= 0)
        selected = 'noteFilter'
   // }
    
    //test against props.tabFilter
    // if(selected === 0){}
    
    //format button caption
    let btncaption = [], key=0
    if(capStyle === 'IvlFirst'){
      if(note.ivl){
        btncaption.push(
          <span key={++key} className='spanIvl'  onClick={this.buttonClick} >
            <span key={++key} onClick={this.buttonClick} >{ivl.abr.substr(0,1)}</span>
              {ivl.abr.substr(1)}
          </span>
        )
      }
      btncaption.push(
        <sub key={++key} className='subNote' onClick={this.fretBtnTextChange}>{note.letter}
            <sub key={++key} className='subOctave' >{note.octave}</sub>
        </sub>
      )
    } else {
    // if(capStyle === 'NoteFirst'){
      btncaption.push(
        <span key={++key} className='spanNote'  onClick={this.buttonClick} >{note.letter}
            <sub key={++key} className='subOctave' onClick={this.buttonClick} >{note.octave}</sub>
        </span>
      )
      if(note.ivl){
        btncaption.push(
          <sub key={++key} className='subInterval' onClick={this.fretBtnTextChange} >
            {ivl.abr}
          </sub>
        )
      }
    }
 
    return(
      <button key={note.semis} className='fretButton'  onClick={this.buttonClick}
        data-strn={note.strg.num} data-fretn={note.fretN} 
        data-selected={selected}
      >
        {btncaption}
      </button>
    )  
  }
  render(){
    let qq = this,
      qry = this.props.qry
    // console.log('fretPnl.render()', this.props)

    function local_rootFind(note){    //select fret = selected fret
      if(qry.rootType !== 'fretRoot') return null

      if(note.fretN === qry.root.fretN && note.strg.num === qry.root.strg.num){
        // note.letter = qry.root.letter
        return qq.button( note, qry.root  )
      }
      return null
    }
    function local_noteFind(note){    //select all frets with letter = selNoteVal
      if(qry.rootType !== 'selNote') return null

      let idx = note.letters.indexOf(qry.letter)
      if(qry.letter === '' ||  idx >= 0){
        if(qry.octave === 0 || qry.octave === note.octave){
          if(qry.letter !== '')
            note.letter = qry.letter
          return qq.button( note, qry.root  )
      }  }
      return null
    }

    function local_octaveFind(note){  //find notes for selected octave
      if(qry.letter !== '') return

      if(qry.octave === note.octave){
        note.ivl = qry.ivl
        // note.letter = note.letters[0]
        return qq.button( note, qry.root  )
      }
      return null
    }

    function local_ivlFind(note){     //select frets matching interval
      if(qry.ivl === null) return null
      
      let btn = null
      if(qry.rootType === 'fretRoot' && q.fretboard.fretInRange(note, qry.root) === true){
        let nn = q.noteBySemis(qry.root.semis +qry.ivl.semis)
        // if(nn.letter === note.letter)
        if( note.letters.indexOf(nn.letter) >= 0 )
          btn = true
      }else
      // if(qry.rootType === 'selNote' && qry.ivl.letter === note.letter){
      if(qry.rootType === 'selNote' && note.letters.indexOf(qry.ivl.letter) >= 0){
        btn = true
      }

      if(btn === true && (qry.octave === 0 || qry.octave === note.octave)){
        note.ivl = qry.ivl
        note.letter = qry.ivl.letter
        return qq.button( note, qry.root  )
      }
      return null
    }

    //handle scale
    function local_scaleFind(note){
      if(qry.scale === null) return null

      if(qry.rootType === 'fretRoot'){    //exclude frets
        if(q.fretboard.fretInRange(note, qry.root) !== true)
          return null
      }
      for(let ivl of qry.scale.ivls){
        // if(ivl.scaleLetter === note.letter){
        // if(ivl.letter === note.letter){
        if( note.letters.indexOf(ivl.letter) >= 0){
          if(qry.octave === 0 || qry.octave === note.octave){
            // note.ivl = Object.assign({}, ivl)
            note.ivl = ivl
            note.letter = ivl.letter
            return qq.button( note, qry.root )
          }
        }
      }
      return null
    }

    function local_chordFind(note){
      if(qry.chord === null) return null
      if(qry.rootType === 'fretRoot'){    //exclude frets
        if(q.fretboard.fretInRange(note, qry.root) !== true)
          return null
      }
      for(let ivl of qry.chord.ivls){
        // if(ivl.letter === note.letter){
        if( note.letters.indexOf(ivl.letter) >= 0){
          if(qry.octave === 0 || qry.octave === note.octave){
            note.ivl = ivl
            note.letter = ivl.letter
            return qq.button( note, qry.root )
          }
        }
      }
      return null
    }

    //make table's tr and td
    let trArray = [],
      fretMax = q.fretboard.fretMax,    
      first = this.props.fretFirst,
      last = this.props.fretLast,
      ss = ''
    for (let row = 1; row <= 9; row++) {
      let frets = []
      let strN = row -1
      let strgFltr = this.props.strgFltr( strN )

      for (let col = 0; col <= fretMax +1; col++) {
        let fval = `"${col}",`, 
          fretFltr = (qry.fretFilter.indexOf( fval ) >= 0)

        let btnStrFltr = null    //create string filter button for fret0 and fretMax
        if(col === 0 && strN >= 1 && strN <= 6){
          btnStrFltr=(<div onClick={this.strgFltrClick} data-strn={strN}
            className={'btnFilter btnStrgFltr btnStrgFltr'+strN}
           ><div>&diams;</div></div>
           )
        }

        if(row === 1){  //top border, fret filter disabled because may not be needed
          let cls = (col === (fretMax +1) ?'borderRight tdBorder'+col :'tdBorder'+col)
          let ss = (col === first || col === (fretMax +1) ?' ' :col)
          if(ss === col && qry.collapsed === true){
            if([5,7,9,12].indexOf(col) >= 0)
              ss = <div data-fretn={col} className='collapsed' >&nbsp;</div>
            else
              ss = ''
          }
          frets.push( <td key={col} 
            data-fretn={col} data-fretfilter={fretFltr}
            onMouseDown={this.fretFltrClick} className={cls}>{ss}</td> 
          )
        }else
        if(row === 9){  //bottom frame

          if(col === (fretMax +1))    //right bottom corner frame
            frets.push( <td key={col} className={'borderRight tdBottom col'+col}></td> )
          else {      //bottom fret frame
            frets.push(<td key={col} className={'tdBottom col'+col}></td>)
           }

        }else{   // generate frets with right and left borders

          if(col === fretMax +1){   // right border
            frets.push( <td key={col} data-strn={strN} data-col={col} className={'borderRight col'+col}></td> )
          } 
          else{ //fretboard cells
            let btn = null, stringdiv = null

            if(strN >= 1 && strN <= 6)
              stringdiv = <div className='stringdiv' onClick={this.fretClick} data-strn={strN} data-fretn={col} ></div>

            //process fret button
            if( fretFltr === false    //no filter applied to fret
             && strgFltr === false    //no filter applied to string
             && col >= first 
             && col <= last){         //filter by fretboard range
              let note = q.noteByFret( strN, col )

              if(qry.rootType === 'selNote' && this.props.selNoteVal === 'All'){
                btn = qq.button( note, 'ALL' )  //no root when showimg all notes
              }
              else {
                btn = local_scaleFind(note)
                if(btn === null) btn = local_chordFind(note)
                if(btn === null) btn = local_ivlFind(note)
                if(btn === null){
                  if(qry.rootType === 'fretRoot')
                    btn = local_rootFind(note)  //only select the fret clicked
                  else
                  if(qry.rootType === 'selNote')
                    btn = local_noteFind(note)  //select all frets with letter = selNoteVal
                }
                if(btn === null) btn = local_octaveFind(note)
              }
            }  

            frets.push(<td key={col} className={'fret fret'+col} onClick={this.fretClick} 
              data-strn={strN} data-fretn={col} data-fretfilter={fretFltr} >
              {btnStrFltr}
              {btn}
              {stringdiv}
              <div className='fretbar' onClick={this.fretClick} data-strn={strN} data-fretn={col} ></div>
            </td>)
           }
        }
      }

      if(row === 1) 
        ss = 'frame frameTop'
      else
      if(row === 8) 
        ss = 'borderBottom'
      else
      if(row === 9) 
        ss = 'frame frameBottom'
      else{
        ss = 'strg strg' +(row -1)
      }
      trArray.push( <tr key={row} className={ss} data-fltr={strgFltr}>{frets}</tr> )
    }
    return (
      <div className='fretPnlContainer'>
        <table className='fretPnl'><tbody>
          {trArray}
        </tbody></table>
      </div>
    )
  }
}

export default FretPnl
