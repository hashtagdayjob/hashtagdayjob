class RadialGradientPainter {
    static get inputProperties() {
        return [
            'border-top-color',
            'border-bottom-color',
        ];
    }

    paint(ctx, size, props) {
        const gradient = ctx.createRadialGradient(
            size.width / 2,
            size.height / 2,
            0,
            size.width / 2,
            size.height / 2,
            size.width / 2,
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
