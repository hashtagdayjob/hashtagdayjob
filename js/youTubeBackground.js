const youTubeBackground = {
    init: function(){
        this.element = document.querySelector('.youTubeBackground');
        this.viewportWidth = window.innerWidth;
        this.viewportHeight = window.innerHeight;
        this.youTubeBackgroundWidth = this.element.clientWidth;
        this.youTubeBackgroundHeight = this.element.clientHeight;
        this.heightScale = this.viewportHeight/this.youTubeBackgroundHeight;
        this.widthScale = this.viewportWidth/this.youTubeBackgroundWidth;
        this._resizeHandler();
        console.log(this);
    },
    _setHeight: function(){
        switch (this.orientation) {
            case 'portrait':
                this.element.height = this.youTubeBackgroundHeight * this.heightScale;
                this.element.width = this.youTubeBackgroundWidth * this.heightScale;
                break;
            case 'landscape':
                this.element.height = this.youTubeBackgroundHeight * this.heightScale;
                this.element.width = this.youTubeBackgroundWidth * this.heightScale;
                break;
        }
    },
    _detectOrientation: function () {
        return this.viewportHeight - this.viewportWidth > 0 ? 'portrait' : 'landscape';
    },
    _resizeHandler: function(){
        this.orientation = this._detectOrientation();
        this._setHeight();
    }
}
youTubeBackground.init();