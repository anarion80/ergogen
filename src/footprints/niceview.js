module.exports = {
    params: {
        designator: 'Nice!View',
        side: 'F',
        outline: false,
        VCC: { type: 'net', value: 'VCC' },
        GND: { type: 'net', value: 'GND' },
        SDA: undefined,
        SCL: undefined,
        CS: undefined,
    },
    body: p => {
        const standard = `
            (footprint lib:niceview_headers (layer "F.Cu") (tedit 648E0265)
            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at -1.6 0) (layer "F.SilkS") ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer "F.SilkS") hide (effects (font (size 1 1) (thickness 0.15))))

            ${'' /* pins */}
            (pad 4 thru_hole oval (at 0.0 -5.08 ${p.rot + 270}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SDA.str})
            (pad 3 thru_hole oval (at 0.0 -2.54 ${p.rot + 270}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SCL.str})
            (pad 2 thru_hole oval (at 0.0  0.00 ${p.rot + 270}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.VCC.str})
            (pad 1 thru_hole oval (at 0.0  2.54 ${p.rot + 270}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.GND.str})
            (pad 1 thru_hole oval (at 0.0  5.08 ${p.rot + 270}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.CS.str})

            ${'' /* corner marks */}
            (fp_line (start -1.25 -7) (end -1.25 7) (layer "Dwgs.User") (width 0.15))
            (fp_line (start -1.25 7) (end 34.75 7) (layer "Dwgs.User") (width 0.15))
            (fp_line (start 34.75 7) (end 34.75 -7) (layer "Dwgs.User") (width 0.15))
            (fp_line (start 34.75 -7) (end -1.25 -7) (layer "Dwgs.User") (width 0.15))

        `
        function outline() {
            return `
                ${'' /* Nice!View outline */}
                (fp_line (start -1.25 -6.5) (end -1.25 6.5) (layer "F.SilkS") (width 0.15))
                (fp_line (start -1.25 6.5) (end 1.25 6.5) (layer "F.SilkS") (width 0.15))
                (fp_line (start 1.25 6.5) (end 1.25 -6.5) (layer "F.SilkS") (width 0.15))
                (fp_line (start 1.25 -6.5) (end -1.25 -6.5) (layer "F.SilkS") (width 0.15))

                ${'' /* labels */}
                (fp_text user Nice!View (at -2.5 0.00 ${p.rot + 90}) (layer "F.SilkS") (effects (font (size 1.0 1.0) (thickness 0.15))))
                (fp_text user Nice!View (at -2.5 0.00 ${p.rot + 90}) (layer "B.SilkS") (effects (font (size 1.0 1.0) (thickness 0.15)) (justify mirror)))

                `
        }
        if (p.outline) {
            return `
                ${standard}
                ${outline()})
                `
        } else {
            return `${standard})`
        }
    }

}
