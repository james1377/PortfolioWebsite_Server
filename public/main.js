/**
 * AngularJS 
 * @author 
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap'
  ]).run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;
  }]);
  
  /**
   * Configure the Routes
   */
  app.config(['$routeProvider', function ($routeProvider) {
    console.log("route: " + $routeProvider);
    $routeProvider
      // Home
      .when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
      // Pages
      .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
      .when("/demos", {templateUrl: "partials/demos.html", controller: "PageCtrl"})
      .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })
      .when("/demo1-cssgrid", { templateUrl: "partials/demo1-cssgrid.html", controller: "PageCtrl" })
      .when("/demo2-authentication", { templateUrl: "partials/demo2-authentication.html", controller: "PageCtrl" })
      .when("/demo3-datagrid", { templateUrl: "partials/demo3-datagrid.html", controller: "PageCtrl" })
      //.when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
      //.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
      
      // Blog
      //.when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
      //.when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
      
      // else 404
      .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
  }]);
  
  /**
   * Controls the Blog
   */
  app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
  });
  
  /**
   * Controls the Home Page
   */
  app.controller('HomeCtrl', ['$anchorScroll', '$location', '$scope',
    function ($anchorScroll, $location, $scope) {
      console.log("Home Controller reporting for duty.");
    
      $scope.gotoAnchor = function (x) {
        console.log("Home gotoAnchor " + x);
       
        var newHash = 'anchor' + x;
        if ($location.hash() !== newHash) {
          $location.hash('anchor' + x);
        } else {
          $anchorScroll();
        }
      };
  
      $scope.gotoDemoPage = function (x) {
        console.log('Navigating to Demo Page: ' + x + ' and current location is ' + $location.path());
  
        $location.url('partials/demo1_cssgrid.html');
      }
  
      // Activates Tooltips for Social Links
      $('.tooltip-social').tooltip({ selector: "a[data-toggle=tooltip]" })
  
      // //Try to start video
      // $( window ).load(function() {
      //   $( '#hdrVideo' ).play();
      // });
  
      $( '#hdrVideo' ).get(0).play();
    }
  ]);
  
  /**
   * Controls all other Pages
   */
  app.controller('PageCtrl', ['$scope', '$location',
      function ($scope, $location/*,$http*/) {
        console.log("Page Controller reporting for duty.");
   
        // Activates Tooltips for Social Links
        $('.tooltip-social').tooltip({ selector: "a[data-toggle=tooltip]" });
        
        $scope.gotoDemoPage = function (x) {
          console.log('Navigating to Demo Page: ' + x + ' and current location is ' + $location.path());
  
          $location.url("/demo1_cssgrid");
        }
    }]
  );
  
  //This is to make available the templates like header.html and footer.html
  app.controller('templatesController', ['$anchorScroll', '$location', '$scope',
    function ($anchorScroll, $location, $scope) {
      $scope.templates = [{
        name: 'templateheader',
        url: 'templates/header.html'
        }, {
        name: 'templatefooter',
        url: 'templates/footer.html'
        }];
        
      $scope.templateHdr = $scope.templates[0];
      $scope.templateFtr = $scope.templates[1];
  
      //Handle the scroll back to top of home page
      $scope.gotoAnchor = function (x) {
        console.log("Header gotoAnchor " + x + " and current location is " + $location.path());
      
        if ($location.path() !== '/')
          $location.url('/');
  
        var newHash = 'anchor' + x;
        if ($location.hash() !== newHash) {
          $location.hash('anchor' + x);
        } else {
          $anchorScroll();
        }
      
    };
      
  }])
  