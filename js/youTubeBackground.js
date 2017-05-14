const youTubeBackground = {
    init: function(){
        this.element = document.querySelector('.app-youTubeBackground');
        this.elementWrapper = document.querySelector('.app-youTubeBackgroundWrapper');
        this.youTubeBackgroundWidth = this.element.clientWidth;
        this.youTubeBackgroundHeight = this.element.clientHeight;
        this.heightScale = this.viewportHeight()/this.youTubeBackgroundHeight;
        this.widthScale = this.viewportWidth()/this.youTubeBackgroundWidth;
        this._resizeHandler();
        window.addEventListener('resize', this._resizeHandler);
    },
    viewportWidth: function(){
        return window.innerWidth;
    },
    viewportHeight: function(){
        return window.innerHeight;
    },
    _setHeight: function(){
        switch (this.orientation) {
            case 'portrait':
                this.element.height = this.youTubeBackgroundHeight * this.heightScale;
                this.element.width = this.youTubeBackgroundWidth * this.heightScale;
                this.element.style.marginLeft = (this.viewportWidth() - this.element.width)/2 + 'px';
                break;
            case 'landscape':
                this.element.height = this.youTubeBackgroundHeight * this.widthScale;
                this.element.width = this.youTubeBackgroundWidth * this.widthScale;
                this.element.style.marginTop = (this.viewportHeight() - this.element.height)/2 + 'px';
                break;
        }
    },
    _detectOrientation: function () {
        return this.heightScale - this.widthScale > 0 ? 'portrait' : 'landscape';
    },
    _resizeHandler: function(){
        youTubeBackground.orientation = youTubeBackground._detectOrientation();
        youTubeBackground._setHeight();
    }
}
youTubeBackground.init();