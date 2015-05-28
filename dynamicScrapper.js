var phantom = require('phantom');

var URL = "http://www.getyourguide.com/s/?q=bangkok";

phantom.create(function(site) {
    return site.createPage(function(page) {
        return page.open(URL, function(status) {
            console.log("opened site? ", status);
            page.injectJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function() {
                //jQuery Loaded
                setTimeout(function() {
                    return page.evaluate(function() {

                        var Arr = []; //array for required elements

                        //Populate the two arrays
                        $('.activity-card-title').each(function() {
                            temp = $(this).html();
                            temp = temp.replace(/(\r\n|\n|\r)/gm,"");
                            Arr.push(temp);

                        });
                        //Return this data
                        return {
                            h3: Arr,
                        }
                    }, function(result) {
                        console.log(result); //Log out the data.
                        site.exit();
                    });
                }, 8000);
            });
        });
    });
});
