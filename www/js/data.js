var sensationApp = angular.module('sensationApp');

// Home Data: Home page configuration
sensationApp.factory('Data', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'News',
            icon: 'calendar',
            page: 'news'
        },
        { 
            title: 'Products',
            icon: 'shopping-cart',
            page: 'products'
        },
        { 
            title: 'Gallery',
            icon: 'camera',
            page: 'gallery'
        },
        { 
            title: 'Map',
            icon: 'map-marker',
            page: 'map'
        },
        { 
            title: 'About Us',
            icon: 'user',
            page: 'about'
        },
        { 
            title: 'Elements',
            icon: 'code',
            page: 'elements'
        },
        { 
            title: 'Contact',
            icon: 'envelope-o',
            page: 'contact'
        },
        { 
            title: 'WP JSON',
            icon: 'code-fork',
            page: 'posts'
        },
        { 
            title: 'Grid',
            icon: 'th',
            page: 'grid'
        },
        { 
            title: 'RSS',
            icon: 'rss',
            page: 'feeds'
        },
        { 
            title: 'Pagination',
            icon: 'sort-numeric-asc',
            page: 'serverposts'
        },
        { 
            title: 'Tab-Bar',
            icon: 'columns',
            page: 'tab-bar'
        }
    ]; 
    
    return data;
});

// Menu Data: Menu configuration
sensationApp.factory('MenuData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Start',
            icon: 'home',
            navigator: 'home'
        },
        { 
            title: 'Programm',
            icon: 'calendar',
            navigator: 'programm'
        },
        { 
            title: 'Festivalkarte',
            icon: 'map-marker',
            navigator: 'festivalkarte'
        },
		{ 
            title: 'Anreise',
            icon: 'location-arrow',
            navigator: 'map'
        },
        { 
            title: 'Shuttlebus',
            icon: 'road',
            navigator: 'shuttlebus'
        },
        { 
            title: 'A bis Z',
            icon: 'sort-alpha-asc',
            navigator: 'az'
        },
        { 
            title: 'Platzordnung',
            icon: 'shield',
            navigator: 'platzordnung'
        },
		{ 
            title: 'Über uns',
            icon: 'users',
            navigator: 'ueberuns'
        },
        { 
            title: 'Kontakt',
            icon: 'envelope-o',
            navigator: 'kontakt'
        }
    ]; 
    
    return data;
});

// Map Data: Map configuration
sensationApp.factory('MapData', function(){
    var data = {};
    
    data.items = {
        markers: [
        {
           position: [47.244403, 9.234661],
           name: 'Irish Openair Toggenburg'
        }],
        zoom: 11,
        center: [47.244403, 9.234661]
    };

    return data;
});

// Gallery Data: Gallery configuration
sensationApp.factory('GalleryData', function(){
    var data = {};
    
    data.items = [
        { 
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'img/gallery-1.jpg',
            location: 'New York, June 2014'
        },
        { 
            label: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            src: 'img/gallery-2.jpg',
            location: 'Athens, August 2013'
        },
        { 
            label: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: 'img/gallery-3.jpg',
            location: 'Tokyo, May 2013'
        }
    ]; 
    
    return data;
});

// Products Data: JSON Products configuration
sensationApp.factory('ProductsData', function(){
    
    var data = { url: 'json/products.json', letterLimit: 100 };
    
    return data;
});

// News Data: JSON News configuration
sensationApp.factory('NewsData', function(){
    
    var data = { url: 'json/news.json', letterLimit: 100 };
    
    return data;
});

// Posts Data: JSON Wordpress Posts configuration
sensationApp.factory('PostsData', function(){
    
    var data = { url: 'json/wordpress.json' };
    
    return data;
});

// Server Posts Data (Server side pagination with AngularJS)
sensationApp.factory('ServerPostsData', function(){
    
    // Set your URL as you can see in the following example
    //var data = { url: 'YourWordpressURL/?json=get_recent_posts' };
    var data = { url: 'json/serverposts' };
    
    return data;
});

// About Data: JSON News configuration
sensationApp.factory('AboutData', function(){
    
    var data = { url: 'json/about.json' };
    
    return data;
});

// Plugins Data: Mobile Plugins configuration
sensationApp.factory('PluginsData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Device Plugin',
            icon: 'mobile',
            page: 'device'
        },
        { 
            title: 'Notifications Plugin',
            icon: 'exclamation',
            page: 'notifications'
        },
        { 
            title: 'Geolocation Plugin',
            icon: 'location-arrow',
            page: 'geolocation'
        }
    ]; 
    
    return data;
});

// Settings Data: Settings configuration
sensationApp.factory('SettingsData', function(){
    var data = {};
    
    data.items = {
        options: [
        {
           name: 'First Setting',
           value: true
        }, 
        {
           name: 'Second Setting',
           value: false
        }, 
        {
           name: 'Third Setting',
           value: false
        }, 
        {
           name: 'Fourth Setting',
           value: false
        }, 
        {
           name: 'Fifth Setting',
           value: false
        }],
        range:30
    };

    return data;
});

// RSS Data: Feeds configuration
sensationApp.factory('FeedData', function(){
    
    var data = { url: 'http://www.huffingtonpost.com/feeds/index.xml' };
    
    return data;
});