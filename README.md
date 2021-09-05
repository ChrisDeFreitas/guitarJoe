# GuitarJoe
GuitarJoe is a web based tool that allows you to visually explore the guitar fretboard, scales, chords, intervals and notes. The current version is a proof of concept.  

The application is published to the web through <a href='https://pages.github.com/'>GitHub Pages</a>.  I plan to leave it publicly accessible until it wears out its GitHub welcome. So you can use and share it via the GitHub.io link that publishes the ./docs folder for public access:  https://chrisdefreitas.github.io/guitarjoe  

The goal was to create a tool that would make guitar theory accessible while practicing.  I was going crazy taking notes and diagramming chords, scales and intervals: I needed a tool to facilitate my understanding so I could focus on the guitar instead of managing scraps of information.  This application has successfully reduced my hair loss--I hope it has the same effect on you!

The name is based on the slang "Joe Workie," a synonym for construction worker. At the tender age of 12 it felt like one of those adults terms I had to learn--it wasn't. In this context, GuitarJoe does the heavy lifting of translating music theory to the guitar fretboard.  

## Music Theory
I am not a musician (I often say I'll be ready to play in a band around the age of 90).  So the data is taken from Wikipedia and verified against other online sources.  The Blues Heptatonic scale has different representations by online sources, so it is debatable.  Please forward any discrepancies to me.

## Technical Notes
- The entire application is contained within the single web page; it does not require a remote server.  The only external link is to the <a href='https://fonts.google.com/?query=Robert+Leuschke/' target='_new'>Fuggles Google Font</a> used in the header. So one could use the ./docs folder on any webserver.
- The logic of the application resides in <a href='https://github.com/ChrisDeFreitas/guitarjoe/blob/main/src/guitar_lib.js'>guitar_lib.js</a>--the code should be readable by non-techies so  feel free to review/use/suggest changes.  I created the library's test suite as I initially built the library, so it will not test all functionality, only the complex bits.
- In terms of security, the application currently does not store or access browser data.  The future plans include saving/restoring application state using <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage'>HTML5 Local Storage</a>--but that is way in the future.
- The application is a standard <a href='https://create-react-app.dev/'>Create React App</a>, except the ./build folder is renamed to ./docs to work with <a href='https://pages.github.com/'>GitHub Pages</a>.  See <a href='https://create-react-app.dev/docs/advanced-configuration'>BUILD_PATH environment variable</a> for info on that redirection.


## Updates

20210905:  
This was a rewrite of the interval calculation functionality.  Originally based on semitones but that lost track of the ♭/# info.  The new algorithm took a long time to develop and ripped the guts out of the app.  But it works well and has room for expansion, see [guitar_lib.letterCalc()](https://github.com/ChrisDeFreitas/guitarjoe/blob/main/src/guitar_lib.js).  In the testing I fixed many transcription errors in scales, chords and intervals--another bonus for the grueling effort.  

Usage of ♭♭ and ## removed from app. This simplifies manipulation of intervals by the library.  It is assumed anyone needing to calculate ♭♭ and ## has requirements beyond the scope of the guitar fretboard.  

- upgraded to v.0.1.1
- fixed bug: selecting C# Major scale, infoPnl displays D♭, E♭...; should be C#, D#; need logic to display sharp vs flat consistently  
-- rewrote guitar_lib.letterCalc() because the algorithm was based on semitones
-- removed guitar_lib.letterBySemis() because the the idea was wrong
-- refactored code using letterBySemis() to use the new letterCalc()
-- refactoring affected most operations so it is a big update
- scale and chord definition error updates


## Helpful References
  - Article: [Chord Progressions for Pentatonic Melodies](https://www.secretsofsongwriting.com/2018/07/09/chord-progressions-for-pentatonic-melodies/)
  - Article: [How Chords and Scales are Related](https://www.thejazzpianosite.com/jazz-piano-lessons/jazz-scales/chord-scale-system/)
  - [Chord shape calculator](https://jguitar.com/chord)
  - [Chord note calculator](https://www.omnicalculator.com/other/chord)
  - [Chord shape identifier](https://jguitar.com/chordname) 
  - [Scale calculator](https://www.scales-chords.com/scalenav.php)
  - Web based fretboard with paid services: [Fretastic](https://fretastic.com/guitar)
  - Wikipedia: [Chord names and symbols](https://en.wikipedia.org/wiki/Chord_names_and_symbols_(popular_music))
  - Wikipedia: [Diatonic scale](https://en.wikipedia.org/wiki/Diatonic_scale)
  - Youtube: [200 Guitar Riffs and Licks from the '60s](https://www.youtube.com/watch?v=gWc7RN61qaU)


## ToDo
- update: add ability to play videos in background
- browser bug: zooming out causes random frets and strings to disappear 
(assume due to x/y location; test by adjusting)  
- critical: test for unexpected web activity with Pi-Hole
-  qryPnl collapsed==true: replace fret numbers with green line above key frets (like fret inlays, but on top)  
- fret click: allow for multiple frets to be selected:  
-- 1 fret clicked == current behaviour  
-- 2 or more == disable scale, ?chord?; keep btn.click/transparency or second click deletes?   
- add settings dlg:  
-- create dlg to select bgndImgUrl or color or default  
-- other?  
- add Inversions: ?integrate with Chord selection?


## Thanks to
 - Application hosted on <a href='https://github.com/ChrisDeFreitas/guitarjoe' target='_new'>GitHub</a>   
 - Background image from <a href='https://www.flickr.com/photos/webtreatsetc/with/4514047664/' target='_new'>WebTreats ETC</a>  
 - Built with the <a href='https://reactjs.org/' target='_new'>React</a> Javascript library  
 - Fuggles font by Robert Leuschke on <a href='https://fonts.google.com/?query=Robert+Leuschke/' target='_new'>Google Fonts</a>  
 - Guitar icon by monkik from the <a href='https://thenounproject.com/term/guitar/2588464/' target='_new'>Noun Project</a>  
 - Guitar scales verified using <a href='https://jguitar.com/scale' target='_new'>jguitar.com</a><br />
 - <a href='https://developer.mozilla.org/'>Mozilla Developer Network</a> web technology reference
 - Music theory from <a href='https://www.wikipedia.org/' target='_new'>Wikipedia</a><br />
 - Popup control from <a href='https://react-popup.elazizi.com/' target='_new'>reactjs-popup</a>  
 - Tested against Music Interval Chart at <a href='http://www.socraticmethod.net/music_theory/ch_up.htm'>The Music Theory Advantage</a> (note application does not use ## or ♭♭ notes) 
 - <a href='https://code.visualstudio.com/'>Visual Studio Code</a> development environment

