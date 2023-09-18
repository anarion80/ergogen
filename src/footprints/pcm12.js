module.exports = {
  params: {
    designator: 'SW',
    class: 'T',
    reverse: false,
    from: undefined,
    to: undefined
  },
  body: p => {
    const standard = `
    (module Button_Switch_SMD:SW_SPDT_PCM12 (layer F.Cu) (tedit 5A02FC95)
            ${p.at /* parametric position */}
      (descr "Ultraminiature Surface Mount Slide Switch, right-angle, https://www.ckswitches.com/media/1424/pcm.pdf")
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (property "LCSC Part #" "C221841" )
      (attr smd)
      (fp_line (start -4.4 2.1) (end -4.4 -2.45) (layer F.CrtYd) (width 0.05))
      (fp_line (start -1.65 2.1) (end -4.4 2.1) (layer F.CrtYd) (width 0.05))
      (fp_line (start -1.65 3.4) (end -1.65 2.1) (layer F.CrtYd) (width 0.05))
      (fp_line (start 1.65 3.4) (end -1.65 3.4) (layer F.CrtYd) (width 0.05))
      (fp_line (start 1.65 2.1) (end 1.65 3.4) (layer F.CrtYd) (width 0.05))
      (fp_line (start 4.4 2.1) (end 1.65 2.1) (layer F.CrtYd) (width 0.05))
      (fp_line (start 4.4 -2.45) (end 4.4 2.1) (layer F.CrtYd) (width 0.05))
      (fp_line (start -4.4 -2.45) (end 4.4 -2.45) (layer F.CrtYd) (width 0.05))
      (fp_line (start 3.35 -1) (end -3.35 -1) (layer F.Fab) (width 0.1))
      (fp_line (start 3.35 1.6) (end 3.35 -1) (layer F.Fab) (width 0.1))
      (fp_line (start -3.35 1.6) (end 3.35 1.6) (layer F.Fab) (width 0.1))
      (fp_line (start -3.35 -1) (end -3.35 1.6) (layer F.Fab) (width 0.1))
      (fp_line (start -0.1 2.9) (end -0.1 1.6) (layer F.Fab) (width 0.1))
      (fp_line (start -0.15 2.95) (end -0.1 2.9) (layer F.Fab) (width 0.1))
      (fp_line (start -0.35 3.15) (end -0.15 2.95) (layer F.Fab) (width 0.1))
      (fp_line (start -1.2 3.15) (end -0.35 3.15) (layer F.Fab) (width 0.1))
      (fp_line (start -1.4 2.95) (end -1.2 3.15) (layer F.Fab) (width 0.1))
      (fp_line (start -1.4 1.65) (end -1.4 2.95) (layer F.Fab) (width 0.1))
      (fp_text user %R (at 0 -3.2) (layer F.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )

      `
    function pins(def_neg, def_pos, def_side) {
      const justify = def_side == 'B' ? '(justify mirror)' : ''
          return `
            ${''/* pins */}
      (fp_line (start -4.4 2.1) (end -4.4 -2.45) (layer ${def_side}.SilkS) (width 0.12))
      (fp_line (start -1.65 2.1) (end -4.4 2.1) (layer ${def_side}.SilkS) (width 0.12))

      (fp_line (start 4.4 2.1) (end 1.65 2.1) (layer ${def_side}.SilkS) (width 0.12))
      (fp_line (start 4.4 -2.45) (end 4.4 2.1) (layer ${def_side}.SilkS) (width 0.12))
      (fp_line (start -4.4 -2.45) (end -3.4 -2.45) (layer ${def_side}.SilkS) (width 0.12))
      (fp_line (start 3.4 -2.45) (end 4.4 -2.45) (layer ${def_side}.SilkS) (width 0.12))

      (fp_text user "On/Off" (at 0 -3.2 ${p.rot}) (layer "${def_side}.SilkS")
            (effects (font (size 1 1) (thickness 0.15)) ${justify})
          )

      (pad "" np_thru_hole circle (at -1.5 0.33) (size 0.9 0.9) (drill 0.9) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at 1.5 0.33) (size 0.9 0.9) (drill 0.9) (layers *.Cu *.Mask))
      (pad 1 smd rect (at ${def_neg}2.25 -1.43 ${p.rot}) (size 0.7 1.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.from.str})

      (pad 2 smd rect (at ${def_pos}0.75 -1.43 ${p.rot}) (size 0.7 1.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.to.str})
      (pad 3 smd rect (at ${def_pos}2.25 -1.43 ${p.rot}) (size 0.7 1.5) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
      (pad "" smd rect (at ${def_neg}3.65 1.43 ${p.rot}) (size 1 0.8) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
      (pad "" smd rect (at ${def_pos}3.65 1.43 ${p.rot}) (size 1 0.8) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
      (pad "" smd rect (at ${def_pos}3.65 -0.78 ${p.rot}) (size 1 0.8) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
      (pad "" smd rect (at ${def_neg}3.65 -0.78 ${p.rot}) (size 1 0.8) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask))
              `
    }

    const model = `
      (model "\${KICAD6_3DMODEL_DIR}/Button_Switch_SMD.3dshapes/SW_SPDT_PCM12.wrl"
        (offset (xyz 0 0 0))
        (scale (xyz 1 1 1))
        (rotate (xyz 0 0 0))
      )
    `

    if(p.reverse) {
      return `
        ${standard}
        ${model}
        ${pins('-', '', 'F')}
        ${pins('', '-', 'B')})
        `
    } else {
      return `
        ${standard}
        ${pins('-', '', 'B')})
        `
    }
  }
}
