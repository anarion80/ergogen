// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//
// note: hotswap and reverse can be used simultaneously

module.exports = {
  params: {
    designator: 'S',
    hotswap: false,
    reverse: false,
    keycaps: false,
    from: undefined,
    to: undefined,
    keycap_size: 1, // 1U, 1.5U, 2U
    model: '${KICAD7_3RD_PARTY}/3dmodels/ergogen/SW_Kailh_Choc_V1.stp',
    hotswap_model: '${KICAD7_3RD_PARTY}/3dmodels/ergogen/PG1350-socket.STEP',
    //hotswap_model: '${KICAD7_3RD_PARTY}/3dmodels/com_github_perigoso_keyswitch-kicad-library/3d-library.3dshapes/SW_Hotswap_Kailh_Choc_v1.stp',
    keycap_model: '${KICAD7_3RD_PARTY}/3dmodels/ergogen/MBK_Keycap_-_1u.step',
  },
  body: p => {

    function keycap_x_offset(keycap_size) {
      return keycap_size*keycap_size*0.629922 + keycap_size*0.472439 - 1.10236
    }

    const standard = `
      (footprint PG1350 (layer F.Cu) (tedit 5DD50112)
      (attr through_hole)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))

      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))

      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `
    const hot_swapB = `
    (fp_line (start 6.25 -5.75) (end 6.75 -5.25) (layer "B.SilkS") (width 0.12))
    (fp_line (start 3.5 -5.75) (end 6.25 -5.75) (layer "B.SilkS") (width 0.12))
    (fp_line (start 6.75 -2.25) (end 6.25 -1.75) (layer "B.SilkS") (width 0.12))
    (fp_line (start 6.25 -1.75) (end 3.5 -1.75) (layer "B.SilkS") (width 0.12))
    (fp_line (start -1.75 -7.5) (end -1.25 -8) (layer "B.SilkS") (width 0.12))
    (fp_line (start 3.5 -1.75) (end 1.25 -4) (layer "B.SilkS") (width 0.12))
    (fp_line (start 1.25 -4) (end -1.25 -4) (layer "B.SilkS") (width 0.12))
    (fp_line (start 1.25 -8) (end 3.5 -5.75) (layer "B.SilkS") (width 0.12))
    (fp_line (start -1.25 -8) (end 1.25 -8) (layer "B.SilkS") (width 0.12))
    (fp_line (start -1.25 -4) (end -1.75 -4.5) (layer "B.SilkS") (width 0.12))
    `
    const hot_swapF = `
    (fp_line (start 1.25 -8) (end -1.25 -8) (layer "F.SilkS") (width 0.12))
    (fp_line (start -6.25 -5.75) (end -6.75 -5.25) (layer "F.SilkS") (width 0.12))
    (fp_line (start 1.75 -7.5) (end 1.25 -8) (layer "F.SilkS") (width 0.12))
    (fp_line (start -3.5 -1.75) (end -1.25 -4) (layer "F.SilkS") (width 0.12))
    (fp_line (start 1.25 -4) (end 1.75 -4.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start -6.25 -1.75) (end -3.5 -1.75) (layer "F.SilkS") (width 0.12))
    (fp_line (start -1.25 -4) (end 1.25 -4) (layer "F.SilkS") (width 0.12))
    (fp_line (start -3.5 -5.75) (end -6.25 -5.75) (layer "F.SilkS") (width 0.12))
    (fp_line (start -1.25 -8) (end -3.5 -5.75) (layer "F.SilkS") (width 0.12))
    (fp_line (start -6.75 -2.25) (end -6.25 -1.75) (layer "F.SilkS") (width 0.12))
    `

    function pins(def_neg, def_pos, def_side) {
      if(p.hotswap) {
        return `
          ${'' /* holes */}
          (pad "" np_thru_hole circle (at ${def_pos}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))

          ${'' /* net pads */}
          (pad 1 smd rect (at ${def_neg}3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.from.str})
          (pad 2 smd rect (at ${def_pos}8.275 -3.75 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.to.str})
        `
      } else {
          return `
            ${''/* pins */}
            (pad 1 thru_hole circle (at ${def_pos}5 -3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at ${def_pos}0 -5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to.str})
          `
      }
    }

      return `
        ${standard}
        ${p.keycaps ? keycap : ''}
        ${p.hotswap ? hot_swapB : ''}
        ${pins('-', '', 'B')}
        ${ p.reverse ? pins('', '-', 'F') : '' }
        ${ p.reverse ? hot_swapF : '' }
        ${ p.hotswap ? `
          (model ${p.hotswap_model}
              (at (xyz -0.21 0.15 -0.07))
              (scale (xyz 1 1 1))
              (rotate (xyz -90 0 180))
          )
          ` : ''
        }

        ${ p.keycaps ? `
          (model ${p.keycap_model}
              (at (xyz -${keycap_x_offset(p.keycap_size)} 0 0.25))
              (scale (xyz 1 1 1))
              (rotate (xyz 0 0 0))
          )
          ` : ''
        }
        (model ${p.model}
              (at (xyz 0 0 0))
              (scale (xyz 1 1 1))
              (rotate (xyz 0 0 0))
        )


        )
        `
    }
}