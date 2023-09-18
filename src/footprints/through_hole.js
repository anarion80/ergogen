module.exports = {
  params: {
    designator: 'H',
    size: 4.4,
    drill: 2.2,
  },
  body: p => {

    return `
        (module "Through Hole" (layer F.Cu) (tedit 591DBFB0)
        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference ${p.ref} (at 0 1.4) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value hole (at 0 -1.4) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))
        (pad 1 thru_hole circle (at 0 0 ${p.rot}) (size ${p.size} ${p.size}) (drill ${p.drill}) (layers *.Cu *.Mask))
        )
    `
  }
}
