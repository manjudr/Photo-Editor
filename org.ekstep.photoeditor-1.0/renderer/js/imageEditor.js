app.controllerProvider.register("photoEditorController", function($scope, $rootScope, $state,$element, $stateParams) {
    // var canvas = document.getElementById('canvas');
    // canvas.src = "https://images.pexels.com/photos/34950/pexels-photo.jpg";
    $scope.showLoader = false;
    $scope.uploadImage = function() {
        var file = document.getElementById("fileUpload").files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#canvas').remove();
            $('.upload-image-preview').append('<img id="canvas" src="' + e.target.result + '" style="width: 100%" />');
            var minval = $(".rslider").data('slider').min;
            $(".rslider").slider('setValue', minval);
        };
        reader.readAsDataURL(file);
    };

    $scope.adjustImage = function(){
        var brightness = parseInt($('#brightness').val());
        var hue = parseInt($('#hue').val());
        var saturation = parseInt($('#saturation').val());
        var exposure = parseInt($('#exposure').val());
        var cntrst = parseInt($('#contrast').val());
        var vibr = parseInt($('#vibrance').val());
        var sep = parseInt($('#sepia').val());

        Caman('#canvas', function() {
          this.revert(false);
          this.brightness(brightness)
          .hue(hue)
          .saturation(saturation)
          .exposure(exposure)
          .contrast(cntrst)
          .vibrance(vibr)
          .sepia(sep).render();
        });
    }

    $scope.presetsImage = function(value){
        $scope.showLoader = true;
        Caman.Event.listen("renderFinished", function (job) {
            $scope.$apply(function() {
                $scope.showLoader = false;
            });
            console.log("renderFinished:");
        });
        switch (value) {
            case 'brightness':
                Caman('#canvas', function() {
                    this.brightness(30).render();
                });
                break;
            case 'noise':
                Caman('#canvas', function() {
                    this.noise(10).render();
                });
                break;
            case 'contrast':
                Caman('#canvas', function() {
                    this.contrast(10).render();
                });
                break;
            case 'sepia':
                Caman('#canvas', function() {
                    this.sepia(10).render();
                });
                break;
            case 'colorize':
                Caman('#canvas', function() {
                    this.colorize(60, 105, 218, 10).render();
                });
                break;
            case 'vintage':
                Caman('#canvas', function() {
                    this.vintage().render();
                });
                break;
            case 'lomo':
                Caman('#canvas', function() {
                    this.lomo().render();
                });
                break;
            case 'emboss':
                Caman('#canvas', function() {
                    this.emboss().render();
                });
                break;
            case 'posterize':
                Caman('#canvas', function() {
                    this.posterize(8, 8).render();
                });
                break;
            case 'clarity':
                Caman('#canvas', function() {
                    this.clarity().render();
                });
                break;
            case 'sincity':
                Caman('#canvas', function() {
                    this.sinCity().render();
                });
                break;
            case 'sunrise':
                Caman('#canvas', function() {
                    this.sunrise().render();
                });
                break;
            case 'hazyDays':
                Caman('#canvas', function() {
                    this.hazyDays().render();
                });
                break;
            case 'love':
                Caman('#canvas', function() {
                    this.love().render();
                });
                break;
            case 'grungy':
                Caman('#canvas', function() {
                    this.grungy().render();
                });
                break;
            case 'jarques':
                Caman('#canvas', function() {
                    this.jarques().render();
                });
                break;
            case 'pinhole':
                Caman('#canvas', function() {
                    this.pinhole().render();
                });
                break;
            case 'oldBoot':
                Caman('#canvas', function() {
                    this.oldBoot().render();
                });
                break;
            case 'glowingSun':
                Caman('#canvas', function() {
                    this.glowingSun().render();
                });
                break;
            case 'oldpaper':
                Caman('#canvas', function() {
                    this.pinhole();
                    this.noise(10);
                    this.orangePeel();
                    this.render();
                });
                break;
            default:
                Caman('#canvas', function() {
                    this.colorize(60, 105, 218, 10);
                    this.contrast(10);
                    this.sunrise();
                    this.hazyDays();
                    this.render();
                });
                break;
        }
    };

    $scope.cropImage = function(){
        $scope.showLoader = true;
        Caman("#canvas", function () {
            this.crop(
                parseInt($('#crop-w').val()), 
                parseInt($('#crop-h').val()), 
                parseInt($('#crop-x').val()), 
                parseInt($('#crop-y').val()));
            this.render();
        });
        Caman.Event.listen("renderFinished", function (job) {
            $scope.$apply(function() {
                $scope.showLoader = false;
            });
            console.log("renderFinished:");
        });
    }

    $scope.reset = function(){
        var minval = $(".rslider").data('slider').min;
        $(".rslider").slider('setValue', minval);
        //$('input[class=rslider]').val(0);
        Caman('#canvas', function() {
          this.revert();
          this.render();
        });
    };


    $scope.download = function(){
        Caman('#canvas', function() {
            this.render(function() {
                this.save('png');
            });
        });   
    }

});