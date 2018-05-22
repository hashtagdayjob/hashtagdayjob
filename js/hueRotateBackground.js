/*
Copyright 2016 Google, Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

registerPaint('hueRotateBackground', class {
    static get inputProperties() { return ['--animation-tick']; }
    paint(ctx, geom, properties) {
        let tick = parseFloat(properties.get('--animation-tick').toString());
        let hue = Math.sin(tick/10000) + 1;
        ctx.fillStyle = 'hsl(' + parseInt(hue * 180)  + ', 100%, 50%)';
        ctx.fillRect(0, 0, geom.width, geom.height);
        ctx.fill();
    }
});