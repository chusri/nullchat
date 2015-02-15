Template.notificationButton.events({
    'click .notification-button':function(event,template){
        AntiModals.overlay("notifications",{});
    }
});

Template.notificationButton.helpers({
    'unreadCount':function(){
        return Notifications.find({seen:false}).count();
    },
    'unreadClass':function(){
        var count = Notifications.find({seen:false}).count();
        return count ? "notification-button-unread" : "";
    }
});

Template.notificationButton.created = function(){
    this.notificationsSub = Meteor.subscribe('notifications');
};

Template.notificationButton.destroyed = function(){
    if(this.notificationsSub){
        this.notificationsSub.stop();
    }
};