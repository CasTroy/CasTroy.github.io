define(
    'view',
    ['jquery','imagesloaded','masonry','model'],
    function ($, imagesloaded ,masonry){
        function View(model){
            var self = this;
            self.renderList = function () {
                var wrapper = tmpl($('#template').html(), model);
                $('.ideas').append(wrapper)
                $('#gallery').imagesLoaded({background: '.grid--item'}, function (){
                    var msnry = new masonry( '.grid', {
                      itemSelector: '.grid--item',
                      columnWidth: '.grid--item',
                      gutter: 10
                    });
                })             
            };
            self.renderList();
        }
        return View;
    })
