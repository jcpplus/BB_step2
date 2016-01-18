define(['jquery', 'backbone'], function($, Backbone) {

    "use strict";

    var SearchView = Backbone.View.extend({


        initialize: function() {
            alert("hello, i am use by requirejs");
        },

        render: function(context) {

            var template = _.template($("#search_template").html());

            $(this.el).html(template(context));
        },

        events: {
            "click input[type]" : "toSearch"
        },

        toSearch: function() {
            var searchInput = $('#search_button'),
                vals = searchInput.val().trim();
            if(vals) {
                alert("i am search " + vals);
            }
            searchInput.focus();
        }
    });

    return SearchView;
});
