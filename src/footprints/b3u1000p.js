module.exports = {
    params: {
		designator: 'RST',
        class: 'S',
		reverse: true,
		r1: {type: 'net', value: 'r1'},
    	r2: {type: 'net', value: 'r2'},
    },
    body: p => {

	    function standard(def_side) {
			const justify = def_side == 'B' ? '(justify mirror)' : ''
			return  `
		(module Button_Switch_SMD:SW_SPST_B3U-1000P (layer ${def_side}.Cu) (tedit 5A02FC95)
			${p.at /* parametric position */}
			(descr "Ultra-small-sized Tactile Switch with High Contact Reliability, Top-actuated Model, without Ground Terminal, without Boss")
			(tags "Tactile Switch")
			(attr smd)
			(fp_text reference "${p.ref}_${def_side}" (at 0.127 -2.540504 90) (layer "${def_side}.SilkS") hide
				(effects (font (size 1 1) (thickness 0.15)))
			)
			(fp_text value "SW_Push" (at 0 -2.55 ${p.rot}) (layer "${def_side}.Fab")
				(effects (font (size 1 1) (thickness 0.15)))
			)
			(fp_text user "RESET" (at 0 2.55 ${p.rot} ) (layer "${def_side}.SilkS")
				(effects (font (size 1 1) (thickness 0.15)) ${justify})
			)
			(fp_text user "${p.ref}" (at 0 -2.5 ${p.rot}) (layer "${def_side}.Fab") hide
				(effects (font (size 1 1) (thickness 0.15)))
			)
			(fp_line (start 1.65 -1.4) (end 1.65 -1.1) (layer "${def_side}.SilkS") (width 0.12))
			(fp_line (start -1.65 1.4) (end 1.65 1.4) (layer "${def_side}.SilkS") (width 0.12))
			(fp_line (start -1.65 -1.4) (end 1.65 -1.4) (layer "${def_side}.SilkS") (width 0.12))
			(fp_line (start -1.65 -1.1) (end -1.65 -1.4) (layer "${def_side}.SilkS") (width 0.12))
			(fp_line (start -1.65 1.1) (end -1.65 1.4) (layer "${def_side}.SilkS") (width 0.12))
			(fp_line (start 1.65 1.4) (end 1.65 1.1) (layer "${def_side}.SilkS") (width 0.12))
			(fp_line (start 2.4 -1.65) (end -2.4 -1.65) (layer "${def_side}.CrtYd") (width 0.05))
			(fp_line (start -2.4 1.65) (end 2.4 1.65) (layer "${def_side}.CrtYd") (width 0.05))
			(fp_line (start 2.4 1.65) (end 2.4 -1.65) (layer "${def_side}.CrtYd") (width 0.05))
			(fp_line (start -2.4 -1.65) (end -2.4 1.65) (layer "${def_side}.CrtYd") (width 0.05))
			(fp_line (start 1.5 1.25) (end -1.5 1.25) (layer "${def_side}.Fab") (width 0.1))
			(fp_line (start 1.5 -1.25) (end 1.5 1.25) (layer "${def_side}.Fab") (width 0.1))
			(fp_line (start -1.5 -1.25) (end 1.5 -1.25) (layer "${def_side}.Fab") (width 0.1))
			(fp_line (start -1.5 1.25) (end -1.5 -1.25) (layer "${def_side}.Fab") (width 0.1))
			(fp_circle (center 0 0) (end 0.75 0) (layer "${def_side}.Fab") (width 0.1) (fill none))
	    `
		}

	    function pins(def_neg, def_pos, def_side) {
		return `
			${''/* pins */}
			(pad ${def_pos === '-' ? "2" : "1"} smd rect (at ${def_neg}1.7 0) (size 0.9 1.7) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${def_pos === '-' ? p.r2.str : p.r1.str })
			(pad ${def_pos === '-' ? "1" : "2"} smd rect (at ${def_pos}1.7 0) (size 0.9 1.7) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${def_pos === '-' ? p.r1.str : p.r2.str })
		`
	    }

        const model = `
            (model "\${KICAD6_3DMODEL_DIR}/Button_Switch_SMD.3dshapes/SW_SPST_B3U-1000P.wrl"
                (offset (xyz 0 0 0))
                (scale (xyz 1 1 1))
                (rotate (xyz 0 0 0))
            )
        `

	    if(p.reverse) {
		return `
			${standard('F')}
            ${model})
			${standard('B')}
			${pins('-', '', 'B')}
			${pins('', '-', 'F')})
		`
	    } else {
	    return `
			${standard('B')}
			${pins('-', '', 'B')})
		`
	    }
	}
}
