module.exports = {
    params: {
        designator: 'D',
        through_hole: true,
        via_in_pad: false,
        reverse: false,
        from: undefined,
        to: undefined
    },
    body: p => {

        const symbolsF = `
            ${''/* diode symbols */}
            (fp_line (start -2.25 1) (end 1.65 1) (layer "F.SilkS") (width 0.12))
            (fp_line (start -2.25 -1) (end -2.25 1) (layer "F.SilkS") (width 0.12))
            (fp_line (start -2.25 -1) (end 1.65 -1) (layer "F.SilkS") (width 0.12))
            (fp_line (start -2.35 -1.15) (end -2.35 1.15) (layer "F.CrtYd") (width 0.05))
            (fp_line (start 2.35 1.15) (end -2.35 1.15) (layer "F.CrtYd") (width 0.05))
            (fp_line (start -2.35 -1.15) (end 2.35 -1.15) (layer "F.CrtYd") (width 0.05))
            (fp_line (start 2.35 -1.15) (end 2.35 1.15) (layer "F.CrtYd") (width 0.05))
            (fp_line (start 0.25 0) (end 0.75 0) (layer "F.Fab") (width 0.1))
            (fp_line (start -0.35 0) (end 0.25 -0.4) (layer "F.Fab") (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 0.55) (layer "F.Fab") (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 -0.55) (layer "F.Fab") (width 0.1))
            (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer "F.Fab") (width 0.1))
            (fp_line (start 1.4 -0.9) (end 1.4 0.9) (layer "F.Fab") (width 0.1))
            (fp_line (start 1.4 0.9) (end -1.4 0.9) (layer "F.Fab") (width 0.1))
            (fp_line (start -0.75 0) (end -0.35 0) (layer "F.Fab") (width 0.1))
            (fp_line (start -1.4 0.9) (end -1.4 -0.9) (layer "F.Fab") (width 0.1))
            (fp_line (start 0.25 0.4) (end -0.35 0) (layer "F.Fab") (width 0.1))
            (fp_line (start -1.4 -0.9) (end 1.4 -0.9) (layer "F.Fab") (width 0.1))

            (fp_line (start 0.25 0) (end 0.75 0) (layer "F.SilkS") (width 0.1))
            (fp_line (start -0.75 0) (end -0.35 0) (layer "F.SilkS") (width 0.1))
            (fp_line (start -0.35 0) (end 0.25 -0.4) (layer "F.SilkS") (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 -0.55) (layer "F.SilkS") (width 0.1))
            (fp_line (start 0.25 0.4) (end -0.35 0) (layer "F.SilkS") (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 0.55) (layer "F.SilkS") (width 0.1))
            (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer "F.SilkS") (width 0.1))
            `

        const symbolsB = `
            ${''/* diode symbols */}
            (fp_line (start -2.25 1) (end 1.65 1) (layer "B.SilkS") (width 0.12))
            (fp_line (start -2.25 -1) (end -2.25 1) (layer "B.SilkS") (width 0.12))
            (fp_line (start -2.25 -1) (end 1.65 -1) (layer "B.SilkS") (width 0.12))
            (fp_line (start -2.35 -1.15) (end 2.35 -1.15) (layer "B.CrtYd") (width 0.05))
            (fp_line (start 2.35 1.15) (end -2.35 1.15) (layer "B.CrtYd") (width 0.05))
            (fp_line (start -2.35 -1.15) (end -2.35 1.15) (layer "B.CrtYd") (width 0.05))
            (fp_line (start 2.35 -1.15) (end 2.35 1.15) (layer "B.CrtYd") (width 0.05))
            (fp_line (start 0.25 0.4) (end -0.35 0) (layer "B.Fab") (width 0.1))
            (fp_line (start -0.35 0) (end 0.25 -0.4) (layer "B.Fab") (width 0.1))
            (fp_line (start 1.4 -0.9) (end 1.4 0.9) (layer "B.Fab") (width 0.1))
            (fp_line (start 0.25 0) (end 0.75 0) (layer "B.Fab") (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 -0.55) (layer "B.Fab") (width 0.1))
            (fp_line (start -0.75 0) (end -0.35 0) (layer "B.Fab") (width 0.1))
            (fp_line (start 1.4 0.9) (end -1.4 0.9) (layer "B.Fab") (width 0.1))
            (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer "B.Fab") (width 0.1))
            (fp_line (start -1.4 0.9) (end -1.4 -0.9) (layer "B.Fab") (width 0.1))
            (fp_line (start -1.4 -0.9) (end 1.4 -0.9) (layer "B.Fab") (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 0.55) (layer "B.Fab") (width 0.1))

            (fp_line (start -0.35 0) (end -0.35 -0.55) (layer "B.SilkS") (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 0.55) (layer "B.SilkS") (width 0.1))
            (fp_line (start 0.25 0.4) (end -0.35 0) (layer "B.SilkS") (width 0.1))
            (fp_line (start -0.75 0) (end -0.35 0) (layer "B.SilkS") (width 0.1))
            (fp_line (start 0.25 0) (end 0.75 0) (layer "B.SilkS") (width 0.1))
            (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer "B.SilkS") (width 0.1))
            (fp_line (start -0.35 0) (end 0.25 -0.4) (layer "B.SilkS") (width 0.1))

            `

        const standard = `
            (footprint "Diode_SMD:SOD-123" (layer "F.Cu")


            ${p.at /* parametric position */}
            (descr "SOD-123")
            (tags "SOD-123")
            (property "LCSC Part #" "C105503" )
            (attr smd)

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 -2) (layer "F.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
            (fp_text value "D_SOD-123" (at 0 2.1) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
            (fp_text user "${p.ref}" (at 0 -2) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
            `

        return `
            ${standard}
            ${symbolsF}
            ${ p.reverse ? symbolsB : '' }
            ${ p.via_in_pad ?
                `
                ${''/* Vias in SMD pads */}
                (pad 1 thru_hole rect (at -1.65 0 ${ p.rot }) (size 0.9 1.2) (drill 0.3) (layers *.Cu *.Mask) (zone_connect 2) ${ p.to.str })
                (pad 2 thru_hole rect (at 1.65 0 ${ p.rot }) (size 0.9 1.2) (drill 0.3) (layers *.Cu *.Mask) (zone_connect 2) ${ p.from.str })
                `
            :
                `
                ${ ''/* SMD pads on both sides */ }
                (pad "1" smd rect (at -1.65 0 ${ p.rot }) (size 0.9 1.2) (layers "F.Cu" "F.Paste" "F.Mask") ${ p.to.str })
                (pad "2" smd rect (at 1.65 0 ${ p.rot }) (size 0.9 1.2) (layers "B.Cu" "B.Paste" "B.Mask") ${ p.from.str })
                (pad "1" smd rect (at -1.65 0 ${ p.rot }) (size 0.9 1.2) (layers "B.Cu" "B.Paste" "B.Mask") ${ p.to.str })
                (pad "2" smd rect (at 1.65 0 ${ p.rot }) (size 0.9 1.2) (layers "F.Cu" "F.Paste" "F.Mask") ${ p.from.str })
                `
            }

            ${ p.through_hole === false ?
                ''
            :
                `
                ${''/* THT terminals */}
                (pad 1 thru_hole circle (at 3.81 0 ${ p.rot }) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${ p.from.str })
                (pad 2 thru_hole rect (at -3.81 0 ${ p.rot }) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${ p.to.str })
                `
            }
            (model "\${KICAD7_3DMODEL_DIR}/Diode_SMD.3dshapes/D_SOD-123.wrl"
                (offset (xyz 0 0 0))
                (scale (xyz 1 1 1))
                (rotate (xyz 0 0 0))
            )
            )
            `
    }
}