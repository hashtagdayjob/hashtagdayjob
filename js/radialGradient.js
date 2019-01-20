class RadialGradientPainter {
    
    static get inputProperties() {
        return [
            'border-top-color',
            'border-bottom-color',
            '--animation-tick',
            '--gradient-divisor'
        ];
    }

    paint(ctx, size, props) {
        let tick = parseFloat(props.get('--animation-tick').toString());
        let divisor = parseFloat(props.get('--gradient-divisor').toString());
        console.log(Math.sin(tick/1000));
        const gradient = ctx.createRadialGradient(
            (Math.sin(tick/1000) * size.width / 2) + size.width / 2,
            (Math.cos(tick/1000) * size.height / 2) +size.height / 2,
            0,
            size.width / divisor,
            size.height / divisor,
            size.width,
        );
        const stops = [
            [0, props.get('border-top-color')],
            [1, props.get('border-bottom-color')]
        ];
        stops.map((element) => {
            gradient.addColorStop(element[0], element[1]);
        });
        ctx.rect(0, 0, size.width, size.height);
        ctx.fillStyle = gradient;
        ctx.fill();
    }
    
}

registerPaint('radial-gradient', RadialGradientPainter);
