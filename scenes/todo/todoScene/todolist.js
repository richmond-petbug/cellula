/**
 * Created by JetBrains WebStorm.
 * User: hanyee
 * Date: 12-7-1
 * Time: 上午12:41
 * To change this template use File | Settings | File Templates.
 */

(function(util, Class){
    this.ToDoList = new Class('ToDoList', {
        add : function(){},
        remove : function(){},
        init : function(){

        }

    }).inherits(Cellula.Block);
})(Cellula._util, Cellula.Class);


(function(util, Class){
    this.ToDoItem = new Class('ToDoItem', {
        itemTpl : null,

        init : function(cfg){
            this._initCfg(cfg);
            this.rootNode = this.getRoot();

            this.render();
            this.registerEvents();

        },
        render : function(){

        }

    }).inherits(Cellula.Block);
})(Cellula._util, Cellula.Class);