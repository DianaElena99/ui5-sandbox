sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/core/UIComponent",
 ], function (Controller, MessageToast, JSONModel, UIComponent) {
    "use strict";
    return Controller.extend("org.ubb.hw.controller.HW", {
        onInit : function () {
        // set data model on view
            var oData = {
                credentials : {
                    email : "dummy",
                    password : "dummy"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onLogin : function () {
            var oView = this.getView();
            var oBundle = oView.getModel("i18n").getResourceBundle();

            var sEmail = oView.byId("inputEmail").getValue();
            var sPassword = oView.byId("inputPassword").getValue();

            console.log(this.getView())
            const sCheckEmail = this.getView().getModel().oData.credentials.email;
            const sCheckPassword = this.getView().getModel().oData.credentials.password;

            if (sEmail === sCheckEmail && sPassword === sCheckPassword){
                MessageToast.show(oBundle.getText("successfulLogin"));
                var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("launchpad", {}, true);
            }
            else 
                MessageToast.show(oBundle.getText("errorLogin"));
        }

    });
 });