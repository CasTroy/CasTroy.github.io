define(
    'model',
    [],

    function (){
        function Model(obj){
            var self = this;
            self.init = function(data){
                var array = [];
                var obj = {
                    url: 'none',
                    word: 'none'
                }
                for(var index in data.images)
                {
                    obj.url = data.images[index].imageurl;
                    obj.word = data.images[index].word;
                    array.push(data.images[index]);
                }
                self.data = array;
            }
            self.init(obj);
        }
        return Model;
    })



//m


/*
define(
    'model',
    [],
    function(){
        function Model(data) {
            var self = this;
            self.data = data;
            self.addItem = function(item) {
                if (item.length === 0) {
                    return;
                }
                self.data.push(item);
                return self.data;
            };
            self.removeItem = function(item) {
                var index = self.data.indexOf(item);
                self.data.splice(index, 1);
                return self.data;
            }
            self.editItem = function(index, text) {
                self.data[index] = text;
            }
            
        }
        return Model;
    }
);




*/