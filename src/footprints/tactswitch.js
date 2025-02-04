module.exports = {
    params: {
        class: 'B', // for Button
        from: undefined,
        to: undefined
    },
    body: p => `
    (module TACT_SWITCH_TVBP06 (layer F.Cu) (tedit 5B8CD44F)
    ${p.at /* parametric position */}
    
  (fp_text reference "${p.ref}" (at 0 -1.7) (layer F.SilkS) ${p.ref_hide}
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text value SW_RST (at 0 2) (layer F.Fab) hide
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user RESET (at 0 0 -180) (layer F.SilkS)
    (effects (font (size 0.8 0.8) (thickness 0.15)))
  )
  (fp_text user RESET (at 0 0) (layer B.SilkS)
    (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
  )
  (fp_line (start -3 -1.8) (end 2.9 -1.8) (layer B.SilkS) (width 0.15))
  (fp_line (start -3 -1.8) (end 3 -1.8) (layer B.SilkS) (width 0.15))
  (fp_line (start 3 1.7) (end -3 1.7) (layer B.SilkS) (width 0.15))
  (fp_line (start 3 -1.8) (end -3 -1.8) (layer F.SilkS) (width 0.15))
  (fp_line (start -3 1.7) (end 3 1.7) (layer F.SilkS) (width 0.15))
  (fp_line (start 3 -1.8) (end 3 -1.1) (layer F.SilkS) (width 0.15))
  (fp_line (start 3 1.7) (end 3 1.1) (layer F.SilkS) (width 0.15))
  (fp_line (start -3 1.7) (end -3 1.1) (layer F.SilkS) (width 0.15))
  (fp_line (start -3 -1.8) (end -3 -1.1) (layer F.SilkS) (width 0.15))
  (fp_line (start 3 -1.8) (end 3 -1.1) (layer B.SilkS) (width 0.15))
  (fp_line (start 3 1.7) (end 3 1.1) (layer B.SilkS) (width 0.15))
  (fp_line (start -3 1.7) (end -3 1.1) (layer B.SilkS) (width 0.15))
  (fp_line (start -3 -1.8) (end -3 -1.1) (layer B.SilkS) (width 0.15))
  (pad 1 thru_hole circle (at -3.25 0) (size 2 2) (drill 1.3) (layers *.Cu *.Mask) ${p.from.str})
  (pad 2 thru_hole circle (at 3.25 0) (size 2 2) (drill 1.3) (layers *.Cu *.Mask) ${p.to.str})
    
  (model "\${KICAD6_3DMODEL_DIR}/Button_Switch_SMD.3dshapes/SW_SPST_CK_RS282G05A3.wrl"
    (offset (xyz 0 0 0))
    (scale (xyz 1 1 1))
    (rotate (xyz 0 0 0))
  )
  
)
    
    `
}
