module.exports = {
    params: {
      designator: 'J',
	    side: 'F',
      from: undefined,
      to: undefined
    },
    body: p => {
        const justify = p.side == 'B' ? '(justify mirror)' : ''
        return `
        (footprint "Jumper:SolderJumper-2_P1.3mm_Open_TrianglePad1.0x1.5mm" (layer "${p.side}.Cu")
        ${p.at /* parametric position */}
        (descr "SMD Solder Jumper, 1x1.5mm Triangular Pads, 0.3mm gap, open")
        (tags "solder jumper open")
        (attr exclude_from_pos_files exclude_from_bom)

        ${'' /* footprint reference */}

        (fp_text reference "${p.ref}" (at 0 0) (layer ${p.side}.SilkS) ${p.ref_hide} ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value Jumper (at 0 -2.5) (layer ${p.side}.Fab) (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* pins */}
        (fp_line (start 1.4 1) (end -1.4 1) (layer "${p.side}.SilkS") (width 0.12))
        (fp_line (start 1.4 -1) (end 1.4 1) (layer "${p.side}.SilkS") (width 0.12))
        (fp_line (start -1.4 1) (end -1.4 -1) (layer "${p.side}.SilkS") (width 0.12))
        (fp_line (start -1.4 -1) (end 1.4 -1) (layer "${p.side}.SilkS") (width 0.12))
        (fp_line (start -1.65 -1.25) (end 1.65 -1.25) (layer "${p.side}.CrtYd") (width 0.05))
        (fp_line (start 1.65 1.25) (end -1.65 1.25) (layer "${p.side}.CrtYd") (width 0.05))
        (fp_line (start 1.65 1.25) (end 1.65 -1.25) (layer "${p.side}.CrtYd") (width 0.05))
        (fp_line (start -1.65 -1.25) (end -1.65 1.25) (layer "${p.side}.CrtYd") (width 0.05))

        (pad "1" smd custom (at -0.725 0 ${p.rot}) (size 0.3 0.3) (layers "${p.side}.Cu" "${p.side}.Mask")
          ${p.from.str} (zone_connect 2)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
                (xy 1 0)
                (xy 0.5 0.75)
                (xy -0.5 0.75)
                (xy -0.5 -0.75)
                (xy 0.5 -0.75)
              ) (width 0) (fill yes))
          ))
        (pad "2" smd custom (at 0.725 0 ${p.rot}) (size 0.3 0.3) (layers "${p.side}.Cu" "${p.side}.Mask")
          ${p.to.str} (zone_connect 2)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
                (xy 0.5 0.75)
                (xy -0.65 0.75)
                (xy -0.15 0)
                (xy -0.65 -0.75)
                (xy 0.5 -0.75)
              ) (width 0) (fill yes))
          ))
      )

    `
    }
}