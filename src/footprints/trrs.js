// TRRS-PJ-320A-dual
//
// Normal footprint:
//     _________________
//    |   (2)   (3) (4)|
//    |                |
//    | (1)            |
//    |________________|
//
// Reverse footprint:
//     _________________
//    |   (2)   (3) (4)|
//    | (1)            |
//    | (1)            |
//    |___(2)___(3)_(4)|
//
// Reverse & symmetric footprint:
//     _________________
//    | (1|2)   (3) (4)|
//    |                |
//    |_(1|2)___(3)_(4)|
//
// Nets
//    A: corresponds to pin 1 (sleeve)
//    B: corresponds to pin 2 (tip)
//    C: corresponds to pin 3 (inner ring)
//    D: corresponds to pin 4 (outer ring)
//    Please note that this naming might not correspond to what is used in other boards; namely crkbd
// Params
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    symmetric: default is false
//      if true, will only work if reverse is also true
//      this will cause the footprint to be symmetrical on each half
//      pins 1 and 2 must be identical if symmetric is true, as they will overlap

module.exports = {
  params: {
    designator: 'TRRS',
    reverse: false,
    symmetric: false,
    A: undefined,
    B: undefined,
    C: undefined,
    D: undefined
  },
  body: p => {

    function standard(def_side) {
        const justify = def_side == 'B' ? '(justify mirror)' : ''
        return  `
            (module TRRS-PJ-320A-dual (layer ${def_side}.Cu) (tedit 5970F8E5)

            ${p.at /* parametric position */}

            (attr through_hole)
            (fp_text reference "TRRS_${def_side}" (at -0.85 4.95 180) (layer "${def_side}.Fab")
            (effects (font (size 1 1) (thickness 0.15)) ${justify})
            )
            (fp_text value "AudioJack4" (at 0 14 90) (layer "${def_side}.Fab") hide
            (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text user "TRRS" (at 0.054 6.35) (layer "${def_side}.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) ${justify})
            )
            (fp_text user "Sleeve" (at 0.25 11.4 90) (layer "${def_side}.Fab") hide
            (effects (font (size 0.7 0.7) (thickness 0.1)))
            )
            (fp_text user "Tip" (at 0 10 90) (layer "${def_side}.Fab") hide
            (effects (font (size 0.7 0.7) (thickness 0.1)))
            )
            (fp_text user "R inner" (at 0 6.25 90) (layer "${def_side}.Fab") hide
            (effects (font (size 0.7 0.7) (thickness 0.1)))
            )
            (fp_text user "R outer" (at 0 3.25 90) (layer "${def_side}.Fab") hide
            (effects (font (size 0.7 0.7) (thickness 0.1)))
            )
            (fp_line (start 3.05 0) (end -3.05 0) (layer "${def_side}.SilkS") (width 0.15) )
            (fp_line (start -3.05 0) (end -3.05 12.1) (layer "${def_side}.SilkS") (width 0.15))
            (fp_line (start 2.8 0) (end 2.8 -2) (layer "${def_side}.SilkS") (width 0.15))
            (fp_line (start -2.8 0) (end -2.8 -2) (layer "${def_side}.SilkS") (width 0.15))
            (fp_line (start 3.05 12.1) (end -3.05 12.1) (layer "${def_side}.SilkS") (width 0.15))
            (fp_line (start 3.05 0) (end 3.05 12.1) (layer "${def_side}.SilkS") (width 0.15))
            (fp_line (start 2.8 -2) (end -2.8 -2) (layer "${def_side}.SilkS") (width 0.15))
            (pad "" np_thru_hole circle (at 0 1.6 270) (size 1.2 1.2) (drill 1.2) (layers *.Cu *.Mask))
            (pad "" np_thru_hole circle (at 0 8.6 270) (size 1.2 1.2) (drill 1.2) (layers *.Cu *.Mask))
        `
    }

    function pins(def_neg, def_pos) {
      return `
        (pad "R1" thru_hole oval (at ${def_pos} 6.2 ${p.rot}) (size 1.6 2) (drill oval 0.9 1.3) (layers *.Cu *.Mask) ${p.C.str} (pintype "passive") )
        (pad "R2" thru_hole oval (at ${def_pos} 3.2 ${p.rot}) (size 1.6 2) (drill oval 0.9 1.3) (layers *.Cu *.Mask) ${p.D.str} (pintype "passive") )
        (pad "S" thru_hole oval (at ${def_neg} 11.3 ${p.rot}) (size 1.6 2) (drill oval 0.9 1.3) (layers *.Cu *.Mask) ${p.A.str} (pintype "passive") )
        (pad "T" thru_hole oval (at ${def_pos} 10.2 ${p.rot}) (size 1.6 2) (drill oval 0.9 1.3) (layers *.Cu *.Mask) ${p.B.str} (pintype "passive") )
      `
    }

    const model = `
        (model "\${KICAD7_3RD_PARTY}/3dmodels/ergogen/PJ320A.STEP"
                (offset (xyz -0.25 -5.2 -12))
                (scale (xyz 1 1 1))
                (rotate (xyz 0 0 90))
            )
      `

    if(p.reverse & p.symmetric) {
        return `
            ${standard('F')}
            ${model})
            ${standard('B')}
            ${pins('2.3', '-2.3')}
            ${pins('-2.3', '2.3')})
        `
    } else if(p.reverse) {
        return `
            ${standard('B')}
            ${pins('2.3', '-2.3')})
        `
      } else {
        return `
            ${standard('F')}
            ${model}
            ${pins('-2.3', '2.3')})
        `
      }
  }
}
