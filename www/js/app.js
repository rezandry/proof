// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.chats', {
    url: '/chats',
    views: {
      'menuContent': {
        templateUrl: 'templates/chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })
    .state('app.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'menuContent': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('app.status', {
    url: '/status',
    views: {
      'menuContent': {
        templateUrl: 'templates/status.html',
      }
    }
  })


  .state('app.profil', {
    url: '/profil',
    views: {
      'menuContent': {
        templateUrl: 'templates/profil.html',
      }
    }
  })

  .state('app.beranda', {
    url: '/beranda',
    views: {
      'menuContent': {
        templateUrl: 'templates/beranda.html',
      }
    }
  })


  .state('app.detail-pesanan', {
    url: '/detail-pesanan',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail-pesanan.html',
      }
    }
  })

  .state('app.pesanan-demo', {
    url: '/pesanan-demo',
    views: {
      'menuContent': {
        templateUrl: 'templates/pesanan-demo.html',
      }
    }
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
      }
    }
  })

  .state('app.item-detail', {
    url: '/item-detail',
    views: {
      'menuContent': {
        templateUrl: 'templates/item-detail.html',
      }
    }
  })

  .state('app.pesanan-sukses', {
    url: '/pesanan-sukses',
    views: {
      'menuContent': {
        templateUrl: 'templates/pesanan-sukses.html',
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/beranda');
});