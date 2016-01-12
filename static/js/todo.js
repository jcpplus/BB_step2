define(['jquery', 'backbone'], function($, Backbone) {

    "use strict";

    var SearchView = Backbone.View.extend({


        initialize: function() {
            alert("hello, i am use by requirejs");
        },

        render: function(context) {

            // el: $("#")
            var template = _.template($("#search_template").html());

            $(this.el).html(template(context));
        }


    });

    return SearchView;
});
