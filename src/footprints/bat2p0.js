// JST Jack Part number: S2B-PH-K-S(LF)(SN), Side Entry type

module.exports = {
    params: {
        class: 'PAD',
        width: 1.2,
        height: 1.75,
        front: true,
        back: true,
        text: '',
        align: 'left',
        mirrored: '=mirrored',
        pos: {type: 'net', value: 'pos'},
    	neg: {type: 'net', value: 'neg'}
    },
    body: p => {

        const layout = (toggle, side) => {
            if (!toggle) return ''
            let x_pos = 0, y_pos = -1, x_neg = 0, y_neg = 1
            const mirror = side == 'B' ? '(justify mirror)' : ''
            const text_pos = p.pos.name
            const text_neg = p.neg.name
            const plus_pos = (text_pos.length + 1) * 0.5
            const plus_neg = (text_neg.length + 1) * 0.5
            let align = p.align
            if (p.mirrored === true) {
                if (align == 'left') align = 'right'
                else if (align == 'right') align = 'left'
            }
            if (align == 'left') { x_pos -= p.width / 2 + plus_pos; x_neg -= p.width / 2 + plus_neg }
            if (align == 'right') { x_pos += p.width / 2 + plus_pos, x_neg += p.width / 2 + plus_neg }
            if (align == 'up') { y_pos += p.height / 2 + plus_pos; y_neg += p.height / 2 + plus_neg }
            if (align == 'down') { y_pos -= p.height / 2 + plus_pos; y_neg -= p.height / 2 + plus_neg }

            return `

            (fp_line (start -2 -3) (end 5.6 -3) (layer "${side}.SilkS") (width 0.12))
            (fp_line (start 5.6 -3) (end 5.6 -2) (layer "${side}.SilkS") (width 0.12))
            (fp_line (start 5.6 2) (end 5.6 3) (layer "${side}.SilkS") (width 0.12))
            (fp_line (start 5.6 3) (end -2 3) (layer "${side}.SilkS") (width 0.12))
			(fp_line (start -2 3) (end -2 2) (layer "${side}.SilkS") (width 0.12))
            (fp_line (start -2 -2) (end -2 -3) (layer "${side}.SilkS") (width 0.12))


            (pad "1" thru_hole roundrect (at 0 -1 ${p.rot}) (size ${p.height} ${p.width}) (drill 0.75) (layers *.Cu ${side}.SilkS ${side}.Mask) ${p.pos.str} (roundrect_rratio 0.208333))
            (fp_text user ${p.pos.name} (at ${x_pos} ${y_pos} ${p.rot}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${mirror}))
            (pad "2" thru_hole oval (at 0 1 ${p.rot}) (size ${p.height} ${p.width}) (drill 0.75) (layers *.Cu ${side}.SilkS ${side}.Mask) ${p.neg.str})
            (fp_text user ${p.neg.name} (at ${x_neg} ${y_neg} ${p.rot}) (layer ${side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${mirror}))

            `
        }

        return `
            (module lib:bat2p0 (layer F.Cu) (tstamp 5BF2CC94)

            ${p.at /* parametric position */}
            (descr "JST PH series connector, S2B-PH-K (http://www.jst-mfg.com/product/pdf/eng/ePH.pdf)")
            (tags "connector JST PH side entry")
            (property "LCSC Part #" "C265016" )
            (attr through_hole)
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

            ${''/* through-holes */}
            ${layout(p.front, 'F')}
            ${layout(p.back, 'B')}

            (model "\${KICAD7_3RD_PARTY}/3dmodels/ergogen/S2B-PH-K-S.step"
              (offset (xyz 0 -1 0))
              (scale (xyz 1 1 1))
              (rotate (xyz 0 0 270))
          )
            )

    `
    }
}
