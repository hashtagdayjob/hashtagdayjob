class HueRotateBackground{
    
    static get inputProperties() { return ['--animation-tick']; }
    
    paint(ctx, geom, properties) {
        let tick = parseFloat(properties.get('--animation-tick').toString());
        let hue = Math.sin(tick/10000) + 1;
        ctx.fillStyle = `hsl(${parseInt(hue * 180)}, 100%, 50%)`;
        ctx.fillRect(0, 0, geom.width, geom.height);
        ctx.fill();
    }
    
}

registerPaint('hue-rotate-background', HueRotateBackground);
