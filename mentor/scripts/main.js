(function (window){
    'use strict';
    var FORM_SELECT ='[data-mentor-reg="form"]';
    var App = window.App;
    var Profile = App.Profile;
    var MentorProfile = App.MentorProfile;  
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECT);
    var mentor = new MentorProfile();
    var mentorList = new Profile(mentor);
    formHandler.addSubmitHandler(function (data) {
        mentorList.addNewMentor.call(mentorList, data);
        mentorList.showAllMentors(mentorList);
    })
})(window);