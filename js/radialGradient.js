class RadialGradientPainter {
    paint(ctx, size) {
        gradient = ctx.createRadialGradient(
            size.width / 2,
            size.height / 2,
            0,
            size.width / 2,
            size.height / 2,
            size.width / 2,
        );
        stops = [
            [0, 'rgba(100, 100, 150, 0.5)'],
            [0.4, 'rgba(100, 250, 100, 1)'],
            [1, 'rgba(150, 100, 100, 0.5)']
        ],
        stops.map((element) => {
            gradient.addColorStop(element[0], element[1]);
        });
        ctx.rect(0, 0, size.height, size.width);
        ctx.fillStyle = radialGradient(
            ctx
        );
        ctx.fill();
        // ctx.lineWidth = 2;
        // ctx.strokeStyle = '#666';

        // // draw line from top left to bottom right
        // ctx.beginPath();
        // ctx.moveTo(0, 0);
        // ctx.lineTo(size.width, size.height);
        // ctx.stroke();

        // // draw line from top right to bottom left
        // ctx.beginPath();
        // ctx.moveTo(size.width, 0);
        // ctx.lineTo(0, size.height);
        // ctx.stroke();
    }
}

registerPaint('radial-gradient', RadialGradientPainter);