class radialGradientBackgroundPainter {

    // static get inputProperties() { return ['--gradient-1', '--gradient-2']; }
    
    paint(ctx, geometry, properties) {
        console.log('start painter');
        // const radialGradient = (stops, ctx) => {
        //    gradient = ctx.createRadialGradient(
        //       geometry.width / 2,
        //       geometry.height / 2,
        //       0,
        //       geometry.width / 2,
        //       geometry.height / 2,
        //       geometry.width / 2,
        //    );
        //    stops.map((element) => {
        //       gradient.addColorStop(element[0], element[1]);   
        //    });
        //    return gradient;
        // }
        // ctx.rect(0, 0, geometry.height, geometry.width);
        // ctx.fillStyle = radialGradient(
        //    [
        //       [0, properties.get('--gradient-1').toString()],
        //       [0.4, properties.get('--gradient-2').toString()],
        //       [1, properties.get('--gradient-1').toString()]
        //    ],
        //    ctx
        // );
        // ctx.fillStyle = radialGradient(
        //     [
        //        [0, 'red'],
        //        [0.4, 'green'],
        //        [1, 'red']
        //     ],
        //     ctx
        //  );
        ctx.fillStyle = 'red';
        ctx.fill();
        console.log(properties.get('--gradient-2').toString())
        console.log(properties.get('--gradient-1').toString())
    }
  }
  
  registerPaint('radialGradientBackgroundPainter', radialGradientBackgroundPainter);