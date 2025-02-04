module.exports = {
    params: {
        side: 'F',
    },
    body: p => {
        if(p.side == 'F') {
        return `
        (module "Side Indicator" (layer ${p.side}.Cu) (tedit 5970F8E5)
        ${p.at /* parametric position */}

        ${'' /* footprint description, tags and reference */}
        (descr "Board side indicator")
        (attr exclude_from_pos_files exclude_from_bom)

        (fp_text reference "Side_${p.side}" (at 0 0) (layer ${p.side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer ${p.side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        (fp_poly
      (pts
        (xy 0.001023 -1.814417)
        (xy 0.02717 -1.801106)
        (xy 0.067806 -1.779327)
        (xy 0.121727 -1.749754)
        (xy 0.187733 -1.713062)
        (xy 0.264621 -1.669927)
        (xy 0.351188 -1.621023)
        (xy 0.446233 -1.567026)
        (xy 0.548554 -1.508609)
        (xy 0.656948 -1.446448)
        (xy 0.770213 -1.381218)
        (xy 0.791643 -1.368846)
        (xy 1.577731 -0.914845)
        (xy 1.577731 0.916278)
        (xy 0.801077 1.365597)
        (xy 0.687602 1.431164)
        (xy 0.578695 1.493933)
        (xy 0.475576 1.553211)
        (xy 0.379463 1.608302)
        (xy 0.291577 1.658515)
        (xy 0.213136 1.703154)
        (xy 0.145361 1.741526)
        (xy 0.08947 1.772937)
        (xy 0.046684 1.796694)
        (xy 0.018221 1.812102)
        (xy 0.005302 1.818467)
        (xy 0.004885 1.818585)
        (xy -0.007203 1.814344)
        (xy -0.035672 1.800365)
        (xy -0.080104 1.776884)
        (xy -0.14008 1.744135)
        (xy -0.21518 1.702354)
        (xy -0.304984 1.651775)
        (xy -0.409072 1.592633)
        (xy -0.527026 1.525163)
        (xy -0.658426 1.449601)
        (xy -0.796192 1.370034)
        (xy -1.577731 0.917812)
        (xy -1.577731 0.913714)
        (xy -0.605692 0.913714)
        (xy 0.762 0.913714)
        (xy 0.762 0.352253)
        (xy -0.017231 0.352253)
        (xy -0.017231 -0.991286)
        (xy -0.605692 -0.991286)
        (xy -0.605692 0.913714)
        (xy -1.577731 0.913714)
        (xy -1.577731 -0.916355)
        (xy -0.801077 -1.365339)
        (xy -0.687691 -1.430841)
        (xy -0.578961 -1.493561)
        (xy -0.476099 -1.552806)
        (xy -0.380317 -1.607882)
        (xy -0.292824 -1.658097)
        (xy -0.214833 -1.702756)
        (xy -0.147555 -1.741167)
        (xy -0.092201 -1.772635)
        (xy -0.049982 -1.796467)
        (xy -0.022109 -1.81197)
        (xy -0.009794 -1.818451)
        (xy -0.009434 -1.818585)
      )

      (width 0.2) (layer "${p.side}.Cu"))
    (fp_poly
      (pts
        (xy 0.001023 -1.814417)
        (xy 0.02717 -1.801106)
        (xy 0.067806 -1.779327)
        (xy 0.121727 -1.749754)
        (xy 0.187733 -1.713062)
        (xy 0.264621 -1.669927)
        (xy 0.351188 -1.621023)
        (xy 0.446233 -1.567026)
        (xy 0.548554 -1.508609)
        (xy 0.656948 -1.446448)
        (xy 0.770213 -1.381218)
        (xy 0.791643 -1.368846)
        (xy 1.577731 -0.914845)
        (xy 1.577731 0.916278)
        (xy 0.801077 1.365597)
        (xy 0.687602 1.431164)
        (xy 0.578695 1.493933)
        (xy 0.475576 1.553211)
        (xy 0.379463 1.608302)
        (xy 0.291577 1.658515)
        (xy 0.213136 1.703154)
        (xy 0.145361 1.741526)
        (xy 0.08947 1.772937)
        (xy 0.046684 1.796694)
        (xy 0.018221 1.812102)
        (xy 0.005302 1.818467)
        (xy 0.004885 1.818585)
        (xy -0.007203 1.814344)
        (xy -0.035672 1.800365)
        (xy -0.080104 1.776884)
        (xy -0.14008 1.744135)
        (xy -0.21518 1.702354)
        (xy -0.304984 1.651775)
        (xy -0.409072 1.592633)
        (xy -0.527026 1.525163)
        (xy -0.658426 1.449601)
        (xy -0.796192 1.370034)
        (xy -1.577731 0.917812)
        (xy -1.577731 0.913714)
        (xy -0.605692 0.913714)
        (xy 0.762 0.913714)
        (xy 0.762 0.352253)
        (xy -0.017231 0.352253)
        (xy -0.017231 -0.991286)
        (xy -0.605692 -0.991286)
        (xy -0.605692 0.913714)
        (xy -1.577731 0.913714)
        (xy -1.577731 -0.916355)
        (xy -0.801077 -1.365339)
        (xy -0.687691 -1.430841)
        (xy -0.578961 -1.493561)
        (xy -0.476099 -1.552806)
        (xy -0.380317 -1.607882)
        (xy -0.292824 -1.658097)
        (xy -0.214833 -1.702756)
        (xy -0.147555 -1.741167)
        (xy -0.092201 -1.772635)
        (xy -0.049982 -1.796467)
        (xy -0.022109 -1.81197)
        (xy -0.009794 -1.818451)
        (xy -0.009434 -1.818585)
      )

      (width 0.2) (layer "${p.side}.Mask"))
        )
        `
        } else {
        return `
        (module "Side Indicator" (layer ${p.side}.Cu) (tedit 5970F8E5)
        ${p.at /* parametric position */}

        ${'' /* footprint description, tags and reference */}
        (descr "Board side indicator")
        (attr exclude_from_pos_files exclude_from_bom)

        (fp_text reference "Side_${p.side}" (at 0 0) (layer ${p.side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer ${p.side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        (fp_poly
      (pts
        (xy 0.138714 -0.665139)
        (xy 0.275874 -0.662212)
        (xy 0.275874 -0.133892)
        (xy 0.138714 -0.132505)
        (xy 0.081291 -0.132606)
        (xy 0.024983 -0.133895)
        (xy -0.023915 -0.136156)
        (xy -0.059108 -0.139173)
        (xy -0.060392 -0.139339)
        (xy -0.142156 -0.157449)
        (xy -0.208945 -0.188491)
        (xy -0.262066 -0.233242)
        (xy -0.295355 -0.279017)
        (xy -0.30962 -0.30582)
        (xy -0.318097 -0.330719)
        (xy -0.322236 -0.360633)
        (xy -0.32349 -0.402481)
        (xy -0.323522 -0.413292)
        (xy -0.322612 -0.459468)
        (xy -0.318948 -0.492187)
        (xy -0.311211 -0.518263)
        (xy -0.298166 -0.544359)
        (xy -0.270172 -0.582084)
        (xy -0.23243 -0.612164)
        (xy -0.183221 -0.635075)
        (xy -0.120826 -0.651293)
        (xy -0.043523 -0.661292)
        (xy 0.050406 -0.665549)
      )

      (width 0.02) (layer "${p.side}.Cu"))
    (fp_poly
      (pts
        (xy 0.816212 -1.420314)
        (xy 1.637314 -0.946158)
        (xy 1.639905 0.004545)
        (xy 1.642497 0.955248)
        (xy 0.827973 1.425526)
        (xy 0.70953 1.493844)
        (xy 0.595918 1.559244)
        (xy 0.488392 1.621011)
        (xy 0.388208 1.67843)
        (xy 0.296621 1.730786)
        (xy 0.214886 1.777364)
        (xy 0.144259 1.817447)
        (xy 0.085996 1.850322)
        (xy 0.041352 1.875273)
        (xy 0.011581 1.891585)
        (xy -0.002059 1.898542)
        (xy -0.002658 1.898739)
        (xy -0.01361 1.894175)
        (xy -0.040863 1.880086)
        (xy -0.083164 1.857181)
        (xy -0.13926 1.826167)
        (xy -0.207896 1.787753)
        (xy -0.28782 1.742646)
        (xy -0.377776 1.691554)
        (xy -0.476513 1.635186)
        (xy -0.582774 1.574249)
        (xy -0.695308 1.509451)
        (xy -0.812861 1.441501)
        (xy -0.831566 1.430664)
        (xy -1.644366 0.959655)
        (xy -1.644408 0.942429)
        (xy -1.110966 0.942429)
        (xy -1.101219 0.943843)
        (xy -1.073625 0.945105)
        (xy -1.030657 0.94617)
        (xy -0.974789 0.946997)
        (xy -0.908493 0.947543)
        (xy -0.834243 0.947764)
        (xy -0.803626 0.947753)
        (xy -0.496286 0.947359)
        (xy -0.231408 0.589613)
        (xy 0.033471 0.231868)
        (xy 0.157212 0.229015)
        (xy 0.280954 0.226162)
        (xy 0.280954 0.948148)
        (xy 0.778794 0.948148)
        (xy 0.778794 -1.024127)
        (xy 0.212374 -1.020489)
        (xy 0.090412 -1.019681)
        (xy -0.013034 -1.018902)
        (xy -0.099771 -1.018079)
        (xy -0.171603 -1.01714)
        (xy -0.230336 -1.016011)
        (xy -0.277774 -1.01462)
        (xy -0.315723 -1.012895)
        (xy -0.345988 -1.010762)
        (xy -0.370373 -1.00815)
        (xy -0.390685 -1.004984)
        (xy -0.408727 -1.001194)
        (xy -0.426305 -0.996705)
        (xy -0.434545 -0.994438)
        (xy -0.542496 -0.955364)
        (xy -0.636513 -0.902316)
        (xy -0.715909 -0.835755)
        (xy -0.771563 -0.768643)
        (xy -0.808659 -0.705104)
        (xy -0.833211 -0.637162)
        (xy -0.846523 -0.560004)
        (xy -0.849973 -0.479332)
        (xy -0.843305 -0.373082)
        (xy -0.823212 -0.278461)
        (xy -0.788753 -0.191066)
        (xy -0.788114 -0.189772)
        (xy -0.760217 -0.14535)
        (xy -0.719276 -0.095318)
        (xy -0.669848 -0.044219)
        (xy -0.616491 0.003402)
        (xy -0.56376 0.043003)
        (xy -0.539466 0.058141)
        (xy -0.507019 0.077852)
        (xy -0.48286 0.094704)
        (xy -0.471308 0.105628)
        (xy -0.470886 0.106925)
        (xy -0.476961 0.116559)
        (xy -0.494402 0.140639)
        (xy -0.522034 0.177627)
        (xy -0.558682 0.225979)
        (xy -0.60317 0.284156)
        (xy -0.654324 0.350617)
        (xy -0.710969 0.42382)
        (xy -0.771928 0.502225)
        (xy -0.790926 0.526587)
        (xy -0.852915 0.606133)
        (xy -0.910948 0.680812)
        (xy -0.963852 0.7491)
        (xy -1.010454 0.809473)
        (xy -1.049581 0.860407)
        (xy -1.080061 0.900379)
        (xy -1.10072 0.927864)
        (xy -1.110386 0.941339)
        (xy -1.110966 0.942429)
        (xy -1.644408 0.942429)
        (xy -1.646708 0.006481)
        (xy -1.649049 -0.946692)
        (xy -1.023044 -1.307372)
        (xy -0.913228 -1.370648)
        (xy -0.803735 -1.433743)
        (xy -0.696611 -1.49548)
        (xy -0.5939 -1.55468)
        (xy -0.497649 -1.610162)
        (xy -0.409903 -1.660749)
        (xy -0.332706 -1.70526)
        (xy -0.268105 -1.742518)
        (xy -0.218144 -1.771344)
        (xy -0.200964 -1.781261)
        (xy -0.004889 -1.894469)
      )

      (width 0.02) (layer "${p.side}.Cu"))
    (fp_poly
      (pts
        (xy 0.138714 -0.665139)
        (xy 0.275874 -0.662212)
        (xy 0.275874 -0.133892)
        (xy 0.138714 -0.132505)
        (xy 0.081291 -0.132606)
        (xy 0.024983 -0.133895)
        (xy -0.023915 -0.136156)
        (xy -0.059108 -0.139173)
        (xy -0.060392 -0.139339)
        (xy -0.142156 -0.157449)
        (xy -0.208945 -0.188491)
        (xy -0.262066 -0.233242)
        (xy -0.295355 -0.279017)
        (xy -0.30962 -0.30582)
        (xy -0.318097 -0.330719)
        (xy -0.322236 -0.360633)
        (xy -0.32349 -0.402481)
        (xy -0.323522 -0.413292)
        (xy -0.322612 -0.459468)
        (xy -0.318948 -0.492187)
        (xy -0.311211 -0.518263)
        (xy -0.298166 -0.544359)
        (xy -0.270172 -0.582084)
        (xy -0.23243 -0.612164)
        (xy -0.183221 -0.635075)
        (xy -0.120826 -0.651293)
        (xy -0.043523 -0.661292)
        (xy 0.050406 -0.665549)
      )

      (width 0.02) (layer "${p.side}.Mask"))
    (fp_poly
      (pts
        (xy 0.816212 -1.420314)
        (xy 1.637314 -0.946158)
        (xy 1.639905 0.004545)
        (xy 1.642497 0.955248)
        (xy 0.827973 1.425526)
        (xy 0.70953 1.493844)
        (xy 0.595918 1.559244)
        (xy 0.488392 1.621011)
        (xy 0.388208 1.67843)
        (xy 0.296621 1.730786)
        (xy 0.214886 1.777364)
        (xy 0.144259 1.817447)
        (xy 0.085996 1.850322)
        (xy 0.041352 1.875273)
        (xy 0.011581 1.891585)
        (xy -0.002059 1.898542)
        (xy -0.002658 1.898739)
        (xy -0.01361 1.894175)
        (xy -0.040863 1.880086)
        (xy -0.083164 1.857181)
        (xy -0.13926 1.826167)
        (xy -0.207896 1.787753)
        (xy -0.28782 1.742646)
        (xy -0.377776 1.691554)
        (xy -0.476513 1.635186)
        (xy -0.582774 1.574249)
        (xy -0.695308 1.509451)
        (xy -0.812861 1.441501)
        (xy -0.831566 1.430664)
        (xy -1.644366 0.959655)
        (xy -1.644408 0.942429)
        (xy -1.110966 0.942429)
        (xy -1.101219 0.943843)
        (xy -1.073625 0.945105)
        (xy -1.030657 0.94617)
        (xy -0.974789 0.946997)
        (xy -0.908493 0.947543)
        (xy -0.834243 0.947764)
        (xy -0.803626 0.947753)
        (xy -0.496286 0.947359)
        (xy -0.231408 0.589613)
        (xy 0.033471 0.231868)
        (xy 0.157212 0.229015)
        (xy 0.280954 0.226162)
        (xy 0.280954 0.948148)
        (xy 0.778794 0.948148)
        (xy 0.778794 -1.024127)
        (xy 0.212374 -1.020489)
        (xy 0.090412 -1.019681)
        (xy -0.013034 -1.018902)
        (xy -0.099771 -1.018079)
        (xy -0.171603 -1.01714)
        (xy -0.230336 -1.016011)
        (xy -0.277774 -1.01462)
        (xy -0.315723 -1.012895)
        (xy -0.345988 -1.010762)
        (xy -0.370373 -1.00815)
        (xy -0.390685 -1.004984)
        (xy -0.408727 -1.001194)
        (xy -0.426305 -0.996705)
        (xy -0.434545 -0.994438)
        (xy -0.542496 -0.955364)
        (xy -0.636513 -0.902316)
        (xy -0.715909 -0.835755)
        (xy -0.771563 -0.768643)
        (xy -0.808659 -0.705104)
        (xy -0.833211 -0.637162)
        (xy -0.846523 -0.560004)
        (xy -0.849973 -0.479332)
        (xy -0.843305 -0.373082)
        (xy -0.823212 -0.278461)
        (xy -0.788753 -0.191066)
        (xy -0.788114 -0.189772)
        (xy -0.760217 -0.14535)
        (xy -0.719276 -0.095318)
        (xy -0.669848 -0.044219)
        (xy -0.616491 0.003402)
        (xy -0.56376 0.043003)
        (xy -0.539466 0.058141)
        (xy -0.507019 0.077852)
        (xy -0.48286 0.094704)
        (xy -0.471308 0.105628)
        (xy -0.470886 0.106925)
        (xy -0.476961 0.116559)
        (xy -0.494402 0.140639)
        (xy -0.522034 0.177627)
        (xy -0.558682 0.225979)
        (xy -0.60317 0.284156)
        (xy -0.654324 0.350617)
        (xy -0.710969 0.42382)
        (xy -0.771928 0.502225)
        (xy -0.790926 0.526587)
        (xy -0.852915 0.606133)
        (xy -0.910948 0.680812)
        (xy -0.963852 0.7491)
        (xy -1.010454 0.809473)
        (xy -1.049581 0.860407)
        (xy -1.080061 0.900379)
        (xy -1.10072 0.927864)
        (xy -1.110386 0.941339)
        (xy -1.110966 0.942429)
        (xy -1.644408 0.942429)
        (xy -1.646708 0.006481)
        (xy -1.649049 -0.946692)
        (xy -1.023044 -1.307372)
        (xy -0.913228 -1.370648)
        (xy -0.803735 -1.433743)
        (xy -0.696611 -1.49548)
        (xy -0.5939 -1.55468)
        (xy -0.497649 -1.610162)
        (xy -0.409903 -1.660749)
        (xy -0.332706 -1.70526)
        (xy -0.268105 -1.742518)
        (xy -0.218144 -1.771344)
        (xy -0.200964 -1.781261)
        (xy -0.004889 -1.894469)
      )

      (width 0.02) (layer "${p.side}.Mask"))
        )
        `
        }

    }
}
