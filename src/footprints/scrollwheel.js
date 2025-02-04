// Panasonic EVQWGD001 horizontal rotary encoder
//
//   __________________
//  (f) (t)         | |
//  | (1)           | |
//  | (2)           | |
//  | (3)           | |
//  | (4)           | |
//  |_( )___________|_|
//
// Nets
//    from: corresponds to switch pin 1 (for button presses)
//    to: corresponds to switch pin 2 (for button presses)
//    A: corresponds to pin 1 (for rotary)
//    B: corresponds to pin 2 (for rotary, should be GND)
//    C: corresponds to pin 3 (for rotary)
//    D: corresponds to pin 4 (for rotary, unused)
// Params
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible


module.exports = {
    params: {
      designator: 'S',
		  reverse: false,
      from: undefined,
      to: undefined,
      A: undefined,
      B: undefined,
      C: undefined,
      D: undefined
    },
    body: p => {
      const standard = `
        (module RollerEncoder_Panasonic_EVQWGD001 (layer "F.Cu") (tedit 6040A10C)
        ${p.at /* parametric position */}
        (attr through_hole)
        (fp_text reference REF** (at 0 0 ${p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value RollerEncoder_Panasonic_EVQWGD001 (at -0.1 9 ${p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* corner marks */}
        (fp_line (start -8.4 -6.4) (end 8.4 -6.4) (layer "Dwgs.User") (width 0.12))
        (fp_line (start 8.4 -6.4) (end 8.4 7.4) (layer "Dwgs.User") (width 0.12))
        (fp_line (start 8.4 7.4) (end -8.4 7.4) (layer "Dwgs.User") (width 0.12))
        (fp_line (start -8.4 7.4) (end -8.4 -6.4) (layer "Dwgs.User") (width 0.12))
      `
      function edge_cuts(reverse) {
        return reverse ?
        `
         ${'' /* edge cuts */}
         (fp_line (start 9.8 7.3) (end 9.8 -6.3) (layer "Edge.Cuts") (width 0.15))
         (fp_line (start 7.4 -6.3) (end 7.4 7.3) (layer "Edge.Cuts") (width 0.15))
         (fp_line (start 9.5 -6.6) (end 7.7 -6.6) (layer "Edge.Cuts") (width 0.15))
         (fp_line (start 7.7 7.6) (end 9.5 7.6) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start 9.8 7.3) (mid 9.712132 7.512132) (end 9.5 7.6) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start 7.7 7.6) (mid 7.487868 7.512132) (end 7.4 7.3) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start 9.5 -6.6) (mid 9.712132 -6.512132) (end 9.8 -6.3) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start 7.4 -6.3) (mid 7.487868 -6.512132) (end 7.7 -6.6) (layer "Edge.Cuts") (width 0.15))

         (fp_line (start -9.8 7.3) (end -9.8 -6.3) (layer "Edge.Cuts") (width 0.15))
         (fp_line (start -7.4 -6.3) (end -7.4 7.3) (layer "Edge.Cuts") (width 0.15))
         (fp_line (start -9.5 -6.6) (end -7.7 -6.6) (layer "Edge.Cuts") (width 0.15))
         (fp_line (start -7.7 7.6) (end -9.5 7.6) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start -9.5 7.6) (mid -9.712132 7.512132) (end -9.8 7.3) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start -7.4 7.3) (mid -7.487868 7.512132) (end -7.7 7.6) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start -9.8 -6.3) (mid -9.712132 -6.512132) (end -9.5 -6.6) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start -7.7 -6.6) (mid -7.487868 -6.512132) (end -7.4 -6.3) (layer "Edge.Cuts") (width 0.15))
        `
        :
        `
        ${'' /* edge cuts */}
         (fp_line (start 9.8 7.3) (end 9.8 -6.3) (layer "Edge.Cuts") (width 0.15))
         (fp_line (start 7.4 -6.3) (end 7.4 7.3) (layer "Edge.Cuts") (width 0.15))
         (fp_line (start 9.5 -6.6) (end 7.7 -6.6) (layer "Edge.Cuts") (width 0.15))
         (fp_line (start 7.7 7.6) (end 9.5 7.6) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start 9.8 7.3) (mid 9.712132 7.512132) (end 9.5 7.6) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start 7.7 7.6) (mid 7.487868 7.512132) (end 7.4 7.3) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start 9.5 -6.6) (mid 9.712132 -6.512132) (end 9.8 -6.3) (layer "Edge.Cuts") (width 0.15))
         (fp_arc (start 7.4 -6.3) (mid 7.487868 -6.512132) (end 7.7 -6.6) (layer "Edge.Cuts") (width 0.15))
        `
      }

      const model = `
        (model "\${KICAD7_3RD_PARTY}/3dmodels/ergogen/Encoder.step"
            (offset (xyz 8.5 -7 -3.5))
            (scale (xyz 1 1 1))
            (rotate (xyz 0 0 -90))
        )
        `

      function pins(def_neg, def_pos) {
        return `
          ${'' /* pins */}
          (pad "S1" thru_hole circle (at ${def_neg}6.85 -6.2 ${p.rot}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.from.str})
          (pad "S2" thru_hole circle (at ${def_neg}5 -6.2 ${p.rot}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.to.str})
          (pad "A" thru_hole circle (at ${def_neg}5.625 -3.81 ${p.rot}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.A.str})
          (pad "B" thru_hole circle (at ${def_neg}5.625 -1.27 ${p.rot}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.B.str})
          (pad "C" thru_hole circle (at ${def_neg}5.625 1.27 ${p.rot}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.C.str})
          (pad "D" thru_hole circle (at ${def_neg}5.625 3.81 ${p.rot}) (size 1.6 1.6) (drill 0.9) (layers *.Cu *.Mask) ${p.D.str})

          ${'' /* stabilizer */}
          (pad "" np_thru_hole circle (at ${def_neg}5.625 6.3 ${p.rot}) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
        `
    }
    if(p.reverse) {
      return `
        ${standard}
        ${model}
        ${edge_cuts(p.reverse)}
        ${pins('-', '')}
        ${pins('', '-')})
        `
    } else {
      return `
        ${standard}
        ${model}
        ${edge_cuts(p.reverse)}
        ${pins('-', '')})
        `
    }
  }
}